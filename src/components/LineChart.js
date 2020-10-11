import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const api = axios.create({
	baseURL: `http://localhost:8080/stats/`
})

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends Component {

	constructor() {
		super();
		this.state = {
			stats: []
		}
		console.log('const')
		if(!this.props || this.props.city === 'Hepsi'){
			api.get('/').then(res => {
				console.log(res.data);
				this.setState({ stats: res.data });
			})
		} else {
			api.get(`/city/${this.props.city}`).then(res => {
				console.log(res.data);
				this.setState({ stats: res.data });
			})
		}

	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(this.props.city !== prevProps && this.state.stats !== prevState.stats){
			console.log('degisiyor')
			//this.getNewDate();
		}
	}

	getNewDate = () => {
		api.get(`/city/${this.props.city}`).then(res => {
			console.log(res.data);
			this.setState({ stats: res.data });
		})
	}


	render() {
		const options = this.chartOptions()

		return (
			<div>
				<h1> {this.props.type} - {this.props.city}</h1>
				{ <CanvasJSChart options={options} onRef={ref => this.chart = ref} />}
			</div>
		);
	}

	groupBy = (key) => {
		return (array) => {
		  return array.reduce((acc, obj) => {
			const property = obj[key];
			acc[property] = acc[property] || [];
			acc[property].push(obj);
			return acc;
		  }, {});
		};
	  }

	chartOptions = () => {
		// console.log("latest: " + JSON.stringify(this.state.stats.map(stat => {
		// 	let parts = stat.date.split('.')
		// 	console.log("parts: " + parts)
		// 	return {
		// 		x: new Date(parts[2], parts[1] - 1, parts[0]),
		// 		y: stat.cases
		// 	}
		// })));

		let dataPoints = this.state.stats.filter(stats => {
			if (this.props.city !== "Hepsi" && stats.city !== this.props.city) {
				return false;
			}
			return true;
		}).map(stat => {
			let parts = stat.date.split('.')
			return {
				x: new Date(parts[2], parts[1] - 1, parts[0]),
				y: this.props.type === 'Vaka' ? stat.cases : this.props.type === 'Vefat' ? stat.deaths : stat.recovered
			}
		});
		if(this.props.city === 'Hepsi' && this.state.stats.length > 0){
			let obj = []
			console.log("propType: "+JSON.stringify( this.state.stats))
			const groupByDate = this.groupBy("date")
			let group = groupByDate(this.state.stats)
			let index = 0
			for (let date of Object.keys(group)){	
				obj.push({
					date: date,
					cases: 0,
					deaths: 0,
					recovered: 0 
				})
				for(let data of group[date]){
					obj[index].cases += data.cases;
					obj[index].deaths += data.deaths;
					obj[index].recovered += data.recovered;
				}
				index++;
			}
			dataPoints = obj.map(stat => {
				let parts = stat.date.split('.')
				return {
					x: new Date(parts[2], parts[1] - 1, parts[0]),
					y: this.props.type === 'Vaka' ? stat.cases : this.props.type === 'Vefat' ? stat.deaths : stat.recovered
				}
			})

		}

		let options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title: {
				text: `Toplam ${this.props.type} Sayısı`
			},
			axisY: {
				title: "Hasta Sayısı",
				includeZero: false,
				interval: 10
			},
			axisX: {
				title: "Gün",
				interval: 1,
				intervalType: "day"
			},
			data: [{
				type: "line",
				toolTipContent: "Gün {x}: {y}",
				dataPoints: dataPoints
			}]
		}

		return options;
	}
}



export default LineChart;