function showMenu() {
        document.getElementById("dpdown").classList.toggle("smenu");
    }
    function info() {
        //console.log("Works!");
        let ch = document.getElementById("infos").innerHTML;
        document.getElementById("maintitle").innerHTML = ch;
        document.getElementById("contents").innerHTML = "To jest strona główna projektu wykonanego na zaliczenie przedmiotu związanego z programowaniem aplikacji internetowych. W tym projekcie zawartych jest kilka informacji na mój temat, a w galerii znajduje się portfolio wykonanych przeze mnie grafik. Grafiki te zostały wykonane na poprzednim kierunku szkoły policealnej, w której aktualnie się uczę.";
    }
    function interest() {
        //console.log("Works!");
        let ch = document.getElementById("interests").innerHTML;
        document.getElementById("maintitle").innerHTML = ch;
        document.getElementById("contents").innerHTML = "Interesuję się różnymi tematami z dziedziny informatyki, między innymi programowaniem oraz grafiką komputerową. Interesuje mnie również uprawianie różnych sportów, staram się próbować wszystkiego co się da w tej dziedzinie od piłki nożnej po sporty zimowe, jak jazda na nartach. Podobnie jest także z programowaniem. Fascynuje mnie ta dziedzina do tego stopnia, że chciałbym się nauczyć programowania w wielu językach/technologiach i móc współtworzyć zaawansowane projekty oraz je dopracowywać.";
    }
    function edu() {
        //console.log("Works!");
        let ch = document.getElementById("education").innerHTML;
        document.getElementById("maintitle").innerHTML = ch;
        document.getElementById("contents").innerHTML = "Skończyłem technikum, a konkretniej Zespół Szkół Elektryczno-Elektronicznych w Szczecinie na kierunku informatyk. Po ukończeniu technikum w 2020 roku zapisałem się do szkoły policealnej TEB Edukacja w Opolu na kierunku grafik komputerowy. Po ukończeniu rocznego kursu zapisałem się na kolejny kierunek, który mnie interesuje jeszcze bardziej niż poprzedni, czyli Programowanie Aplikacji Internetowych i Mobilnych. A teraz po ukończeniu tego kierunku zapisałem się na game design.";
}
    function logos() {
        document.getElementById("imgOne").src = "images/logoart.png";
        document.getElementById("imgTwo").src = "images/logoart2.png";
        document.getElementById("imgThr").src = "images/logoart3.png";
        document.getElementById("imgFour").src = "images/logoart4.png";
        document.getElementById("linkOne").href = "images/logoart.png";
        document.getElementById("linkTwo").href = "images/logoart2.png";
        document.getElementById("linkThr").href = "images/logoart3.png";
        document.getElementById("linkFour").href = "images/logoart4.png";
    }
    function linearts() {
        document.getElementById("imgOne").src = "images/lineart.png";
        document.getElementById("imgTwo").src = "images/lineart2.png";
        document.getElementById("imgThr").src = "images/lineart3.png";
        document.getElementById("imgFour").src = "images/lineart4.png";
        document.getElementById("linkOne").href = "images/lineart.png";
        document.getElementById("linkTwo").href = "images/lineart2.png";
        document.getElementById("linkThr").href = "images/lineart3.png";
        document.getElementById("linkFour").href = "images/lineart4.png";
}
    