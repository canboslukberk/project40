import React from 'react';

function Home() {
  return (
    <div className='home'>
      <h1>Pandemi İstatistik</h1>

      <p>Bu uygulamada pandemi verilerini haber kaynağından girebilir. Şehirlere göre belirli tarihler arasındaki istatistikleri görebilirsiniz.</p>
      <br />
      <p><b>Proje:</b> Korona  Verileri</p>
      <p><b>Projenin Amacı:</b> Açık kaynak haberlerden text halinde bilgilerin anahtar vaka sayıları ölüm ve iyileşen sayılarını toplayıp bir ekranda grafik olarak gösterimin yapılması ve yeni veri sisteme eklendikçe grafiğin online olarak değişmesi amaçlanmaktadır.</p>
      <p><b>Örnek Haber 1:</b>  20.04.2020 tarihinde Ankara da Korona virüs salgınında yapılan testlerde 15 yeni vaka bulundu. 1 kişi korona dan vefat etti. 5 kişide taburcu oldu.</p>
      <p><b>Örnek Haber 2:</b> Korona virüs salgınında yapılan testlerde 19.04.2020 tarihinde  İstanbul da 30 yeni vaka tespit edil. İstanbul da taburcu sayısı 7 kişi .  3 kişi de vefat etti. </p>
      <p><b>Örnek Haber 2:</b> 19.04.2020 tarihinde İstanbul  için korona virüs ile ilgili yeni bir açıklama yapıldı. Korona virüs salgınında yapılan testlerde 20 yeni vaka tespit edildi. taburcu sayısı ise 7 oldu.  3 kişin de vefat ettiği öğrenildi.  </p>

      <h2>İsterler:</h2>
      <ol>
        <li>Haberler de üç anahtar kelimede (Tarih, İl, vaka, vefat, taburcu) ayrı ayrı cümlelerde bulunmalı.</li>
        <li>Haberde cümlelerin sırası değişebilir. </li>
        <li>Tarih ve il bilgisi herhangi bir cümlede olabilir ya da ayrı bir cümlede olabilir  </li>
        <li>Kullanıcı yeni Haber girebilecektir.</li>
        <li>Sistem girilen haberi parse edip il, iyileşen, vefat, vaka sayısı ve tarihi veri tabanına ilgili haber ile beraber yazacak.  </li>
        <li>Kullanıcı rapor ekranını açınca grafik olarak vefat, iyileşen ve vaka sayısını zamana göre günlük olarak görebilecek.</li>
        <li>Kullanıcı isterse rapor ekranında grafiği kümülatife olarak görebilecek.</li>
        <li>Kullanıcı isterse Rapor ekranında seçtiği ilin grafiğini görebilecektir.</li>
        <li>Yeni haber eklendikçe grafikler güncellenecektir.</li>
        <h2>Teknik İsterler:</h2>
        <li>Yazılım önyüzü ReactJS kullanılarak geliştirilecekti ve npm kullanılacaktır. </li>
        <li>Sunucu tarafında SpringBoot kullanılacaktır ve maven projesi olacaktır. </li>
        <li>Veri tabanı olarak MongoDB kullanılacaktır.</li>
        <li>Yazılım geliştirirken birim testleri yazılmalıdır. Birim testler tüm önemli fonksiyonları kapsayıcı olmalıdır.</li>
        <li>Yazılım geliştirmeleri sonucu oluşan paketler ve kodlara github üzerinden erişilebilmelidir.</li>
      </ol>
    </div>
  );
}

export default Home;
