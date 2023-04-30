# Project_JS
W trakcie pracy nad projekciem skupiono się na maksymalnym wykorzystaniem możliwości czystego java scriptu.
Starano się utworzyć metody uniwersalne, które można reużyć w wielu miejscach aplikacji, aby zminimalizować ilość powtarzającego się
kodu. W trakcie tworzenia aplikacji postawiono również na rozwiązanie na bieżąo problemów z performancem.

 Niniejszy projekt spełnia następujące wymagania: 
 - aplikacja zawiera informacje na temat dziesięciu samochodów 
 - klient może wyszukać dowolną markę samochodu 
 - pozwala na wybranie samochodu i skonfigurowanie listy zakupów, która zawiera wybrany model samochodu oraz wybrane akcesoria 
 - lista dodanych akcesoriów odświeża się automatycznie 
 - cena zestawu jest aktualizowana po każdej zmienie zestau akcesoriów 
 - pola w formularzu są walidowane zgodnie z wymaganiami użytkownika, wprowadzono dodatkowy warunek walidacji (data zamówienia musi być odległa o dwa dni od dnia obecnego)
 
 Kluczowe dane użytkownika zapisywane są w localStorage, co pozwala na odzyskanie ich po odświeżeniu strony. 
 W aplikacji nasłuchiwane są eventy takie jak:
 - zaznaczenie radio buttona lub checkbox'a 
 - wpisanie danych użytkownika jak imię/nazwisko, adres oraz datę 
 - elementy wyszukiwania

