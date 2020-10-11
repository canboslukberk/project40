import React, { Component } from 'react'
import Dropdown from './Dropdown'
import Button from '@atlaskit/button';
import ChevronDown from './ChevronDown';
import Select from 'react-select';
import DropdownIndicator from './DropdownIndicator';

export class Main extends Component {
    state = { isOpen: false, value: 0 };

    toggleOpen = () => {
        this.setState(state => ({ isOpen: !state.isOpen }));
    };

    onSelectChange = value => {
        this.toggleOpen();
        this.setState({ value });
        this.props.onCityChange(value.label);

    };

    selectStyles = {
        control: provided => ({ ...provided, minWidth: 240, margin: 8 }),
        menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
      };

    render() {
        const { isOpen, value } = this.state;

        return (
            <Dropdown
                isOpen={isOpen}
                onClose={this.toggleOpen}
                target={
                    <Button
                        iconAfter={<ChevronDown />}
                        onClick={this.toggleOpen}
                        isSelected={isOpen}
                    >
                        {value ? `İl: ${value.label}` : 'İl seçiniz'}
                    </Button>
                }
            >
                <Select
                    autoFocus
                    backspaceRemovesValue={false}
                    components={{ DropdownIndicator, IndicatorSeparator: null }}
                    controlShouldRenderValue={false}
                    hideSelectedOptions={false}
                    isClearable={false}
                    menuIsOpen
                    onChange={this.onSelectChange}
                    options={this.options}
                    placeholder="il seçiniz..."
                    styles={this.selectStyles}
                    tabSelectsValue={false}
                    value={value}
                />
            </Dropdown>
        )
    }


    options = [
        {value: "0", label: "Hepsi"},
        { value: "1", label: "adana" },
        { value: "2", label: "adıyaman" },
        { value: "3", label: "afyonkarahisar" },
        { value: "4", label: "aksaray" },
        { value: "5", label: "amasya" },
        { value: "6", label: "ankara" },
        { value: "7", label: "antalya" },
        { value: "8", label: "ardahan" },
        { value: "9", label: "artvin" },
        { value: "10", label: "aydın" },
        { value: "11", label: "ağrı" },
        { value: "12", label: "balıkesir" },
        { value: "13", label: "bartın" },
        { value: "14", label: "batman" },
        { value: "15", label: "bayburt" },
        { value: "16", label: "bilecik" },
        { value: "17", label: "bingöl" },
        { value: "18", label: "bitlis" },
        { value: "19", label: "bolu" },
        { value: "20", label: "burdur" },
        { value: "21", label: "bursa" },
        { value: "22", label: "denizli" },
        { value: "23", label: "diyarbakır" },
        { value: "24", label: "düzce" },
        { value: "25", label: "edirne" },
        { value: "26", label: "elazığ" },
        { value: "27", label: "erzincan" },
        { value: "28", label: "erzurum" },
        { value: "29", label: "eskişehir" },
        { value: "30", label: "gaziantep" },
        { value: "31", label: "giresun" },
        { value: "32", label: "gümüşhane" },
        { value: "33", label: "hakkâri" },
        { value: "34", label: "hatay" },
        { value: "35", label: "isparta" },
        { value: "36", label: "iğdır" },
        { value: "37", label: "istanbul" },
        { value: "38", label: "izmir" },
        { value: "39", label: "kahramanmaraş" },
        { value: "40", label: "karabük" },
        { value: "41", label: "karaman" },
        { value: "42", label: "kars" },
        { value: "43", label: "kastamonu" },
        { value: "44", label: "kayseri" },
        { value: "45", label: "kilis" },
        { value: "46", label: "kocaeli" },
        { value: "47", label: "konya" },
        { value: "48", label: "kütahya" },
        { value: "49", label: "kırklareli" },
        { value: "50", label: "kırıkkale" },
        { value: "51", label: "kırşehir" },
        { value: "52", label: "malatya" },
        { value: "53", label: "manisa" },
        { value: "54", label: "mardin" },
        { value: "55", label: "mersin" },
        { value: "56", label: "muğla" },
        { value: "57", label: "muş" },
        { value: "58", label: "nevşehir" },
        { value: "59", label: "niğde" },
        { value: "60", label: "ordu" },
        { value: "61", label: "osmaniye" },
        { value: "62", label: "rize" },
        { value: "63", label: "sakarya" },
        { value: "64", label: "samsun" },
        { value: "65", label: "siirt" },
        { value: "65", label: "sinop" },
        { value: "67", label: "sivas" },
        { value: "68", label: "tekirdağ" },
        { value: "69", label: "tokat" },
        { value: "70", label: "trabzon" },
        { value: "71", label: "tunceli" },
        { value: "72", label: "uşak" },
        { value: "73", label: "van" },
        { value: "74", label: "yalova" },
        { value: "75", label: "yozgat" },
        { value: "76", label: "<onguldak" },
        { value: "77", label: "çanakkale" },
        { value: "78", label: "çankırı" },
        { value: "79", label: "çorum" },
        { value: "80", label: "şanlıurfa" },
        { value: "81", label: "şırnak" }
    ]
}

export default Main
