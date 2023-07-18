document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('btng');
    submitButton.addEventListener('click', function () {
        const info1Input = document.getElementById('tc');
        const info2Input = document.getElementById('sifre');

        const enteredInfo1 = info1Input.value;
        const enteredInfo2 = info2Input.value;

        
        
        
        


        if(enteredInfo1 == "12345" && enteredInfo2 == "sifre"){
            alert(`Giriş Başarılı!
        Sayfanın Devamı Sponsor Desteksizliğinden Dolayı Yapılamamıştır :(`);
        }
        else{
            alert("Girilen Bilgiler Sistemimizdeki Bilgilerle Uyuşmamaktadır!");
        }
        
    });
});