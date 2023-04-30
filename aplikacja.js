/* Niniejsza aplikacja została stworzona przez Malwinę Wajdzik. 
Skupiono się w niej na maksymalne wykorzystanie możliwości czystego java scriptu.
Starano się utworzyć metody uniwersalne, które można reużyć w wielu miejscach aplikacji, aby zminimalizować ilość powtarzającego się
kodu. W trakcie tworzenia aplikacji postawiono również na rozwiązanie na bieżąo problemów z performancem.
*/


/* deklaracja tablicy obiektów, zawierających informacje o samochodach dostępnych w ofercie 
        "id": number // numer id samochodu, pozwoli na szybkie odnalenienie go w tablicy, wartość jest zapisywana w localStorage
        "brand": string // nazwa marki samochodu
	    "model": string // nazwa modelu samochodu
        "year": number // rocznik samochodu
        "mileage": number // przebieg samochodu 
	    "engine_power": number // moc silnika wyrażona w kW
	    "horse_power": number // moc silnika wyrażona w koniach mechanicznych
	    "price": number // cena samochodu nie uwzględniająca akcesoria
        "pictureSrc": string // lokalizacja obrazka 
*/

var cars = [
    {
        "id": 1,
        "brand": "Dacia",
	    "model": "Sandero",
        "year": 2021,
        "mileage": 13000, //km
	    "engine_power": 66, //kW
	    "horse_power": 90, //KM
	    "price": 74000, //zł
        "pictureSrc": "./pictures/dacia_sandero.jpg",
    },
    {
        "id": 2,
        "brand": "Volkswagen",
	    "model": "Passat",
        "year": 2017,
        "mileage": 47044,
	    "engine_power": 132,
	    "horse_power": 180,
	    "price": 100000,
        "pictureSrc": "./pictures/vw_passat.jpg",
    },
    {
        "id": 3,
        "brand": "Skoda",
	    "model": "Scala",
        "year": 2019,
        "mileage": 76690,
	    "engine_power": 84,
	    "horse_power": 114,
	    "price": 70000,
        "pictureSrc": "./pictures/skoda_scala.jpg",
    },
    {
        "id": 4,
        "brand": "Renault",
	    "model": "Trafic",
        "year": 2023,
        "mileage": 10,
	    "engine_power": 110,
	    "horse_power": 150,
	    "price": 180000,
        "pictureSrc": "./pictures/renault_trafic.jpg",
    },
    {
        "id": 5,
        "brand": "Nissan",
	    "model": "Ariya",
        "year": 2023,
        "mileage": 10,
	    "engine_power": 160,
	    "horse_power": 218,
	    "price": 220000,
        "pictureSrc": "./pictures/nissan_ariya.jpg",
    },
    {
        "id": 6,
        "brand": "Dacia",
	    "model": "Spring",
        "year": 2023,
        "mileage": 10,
	    "engine_power": 33,
	    "horse_power": 45,
	    "price": 112000,
        "pictureSrc": "./pictures/dacia_spring.jpg",
    },
    {
        "id": 7,
        "brand": "Nissan",
	    "model": "Qashqai",
        "year": 2022,
        "mileage": 10,
	    "engine_power": 102,
	    "horse_power": 139,
	    "price": 144000,
        "pictureSrc": "./pictures/nissan_qashqai.jpg",
    },
    {
        "id": 8,
        "brand": "Renault",
	    "model": "Megane",
        "year": 2022,
        "mileage": 450,
	    "engine_power": 10,
	    "horse_power": 139,
	    "price": 10800,
        "pictureSrc": "./pictures/renault_megane.jpg",
    },
    {
        "id": 9,
        "brand": "Renault",
	    "model": "Kadjar",
        "year": 2022,
        "mileage": 1007,
        "engine_power": 102,
	    "horse_power": 139,
	    "price": 127000,
        "pictureSrc": "./pictures/renault_kadjar.jpg",
    },
    {
        "id": 10,
        "brand": "Renault",
	    "model": "Laguna",
        "year": 2011,
        "mileage": 106000,
	    "engine_power": 102,
	    "horse_power": 139,
	    "price": 35000,
        "pictureSrc": "./pictures/renault_laguna.jpg",
    },
]

/* deklaracja tablicy obiektów, które reprezentują placeholdery danych użytkownika
        "user_data": string // nazwa placeholdera, zostanie wyświetlona na stronie jako nazwa pola typu input
        "user_data_class": string // ustalona nazwa klasy dla elementu powstałego w trakcie życia aplikacji 
*/

var user_data = [
    {
        "user_data": "Imię & Nazwisko",
        "user_data_class": "name",
    },
    {
        "user_data": "Adres odbioru",
        "user_data_class": "address",
    },
];

/* deklaracja tablicy obiektów, które zawierają informacje o dostępnych metodach płatności. 
        "name": string // nazwa metody płatności 
        "class": string // ustalona nazwa klasy dla elementu powstałego w trakcie życia aplikacji
*/

var payments = [
    {
        "name": "leasing",
        "class": "payment",
    },
    {
        "name": "gotówka",
        "class": "payment",
    },
];

/* 
deklaracja tablicy obiektów, reprezentujących akcesoria dostępne w aplikacji 
        "id": number // id obiektu, wykorzystawane w kolejnych liniach kodu aplikacji do identyfikacji obiektu
        "name": string // nazwa akcesorium, wyświetlana w aplikacji i widoczna dla użytkowanika
        "class": string // nazwa klasy obiektu, wykorzystywana do identyfikacji i pobrania obiektu w trakcie życia aplikacji 
*/

var accessories_list = [
    {
        "id": 11,
        "name": "ABS",
        "class": "ABS",
        "price": 100, //zł
    },
    {
        "id": 22,
        "name": "Felgi aluminiowe",
        "class": "rims",
        "price": 1000,
    },
    {
        "id": 33,
        "name": "Tapicerka materiałowa",
        "class": "upholstery",
        "price": 500,
    },
];

/* deklaracja zmiennej, przypisanej do elementu HTML, która następnie będzie zawierać elementy listy zakupów, utworzony w celu wystylizwania obiektów listy zakupów
*/

var shopping_list_box = create_box("shopping_list");

/* deklaracja zmiennych, przypisane do wartości bool'owskiej false, wykorzystywana później do rozpoznania, czy akcesorium zostało dodane
do zamówienia "true" , czy też nie "false"
*/

let is_accessory_1_added = false;
let is_accessory_2_added = false;
let is_accessory_3_added = false;

/* deklaracja zmiennej, przypisanej do nowo utworzonego elementu "ul" w HTML,wykorzystana później do zapisywania i przechowywania 
elementów listy samochodów dostępnych na stronie
*/

let element_ul = document.createElement("ul");
element_ul.className = "updated_accessories_list"; // przypisanie nazwy klasy elementu, w celu sprawniejszej identyfikacji obiektu

/* deklaracja zmiennej, przypisanej do elementu HTML, która następnie będzie zawierać elementy cenę wybranych produktów,
utworzona w celu wystylizwania obiektów listy zakupów
*/

let price_box = create_box("prise_box");

/* deklaracja zmiennej, bez przypisywania wartości; zawierać będzie aktualną cenę produktu i jego akcesoriów
*/

let box_price;

/* deklaracja zmiennej, bez przypisywania wartości; zawierać będzie aktualną listę samochodów 
*/

let cars_ul;

/* deklaracja pustej tablicy; zawierać będzie skróconą listę elementów listy, po wyszukiwaniu
*/

let shorten_cars_list = [];

/* deklaracja zmiennej, dającej dostęp do kontrolki search
*/

let my_search_entry_control = document.querySelector(".my_search_entry");

/* utworzenie kontrolki wyszukiwarki 
*/

create_search_control();

/* deklaracja zmiennej, do której przypisano element DOM odnaleziony po nazwie klasy
*/

let cars_list = document.querySelector(".my_page_content");

/* funkcja mająca na celu przypisanie do każdego elementu stru poprawnych wartości i elemenetów, 
której triggerem jest odświeżenie strony
*/

window.onload = function () {
    if (localStorage.getItem("current_screen") == "cars_list") { // wywołanie elementów dostępnych na pierwszej stronie aplikacji 
        create_cars_list(cars);
        shorten_cars_list = [];
        my_search_entry_control.style.display = "block";
    }
    if (localStorage.getItem("current_screen") == null) {   // wywołanie elementów na pierwszej stronie aplikacji, w przypadku gdy strona
        create_cars_list(cars);                             // uruchomiona jest pierwszy raz
        shorten_cars_list = [];
        my_search_entry_control.style.display = "block";
    }
    if (localStorage.getItem("current_screen") == "form") { // wywołanie elementów strony, na drugim etapie działania aplikacji,
        set_form_view();                                    // kiedy to user wybrał samochód i przeszedł do konfiguracji zamówienia
        localStorage.setItem("alerts_list_created", "false");
        // odszukiwanie wartości elementów w local Storage i przypisiwanie ich 
        var name_label = document.querySelector(".class_name");
        name_label.value = localStorage.getItem("name");

        var address_label = document.querySelector(".class_address");
        address_label.value = localStorage.getItem("address");

        var date_label = document.querySelector(".class_date");
        date_label.value = localStorage.getItem("delivery_date");

        var leasing_radio = document.querySelector(".radioleasing");
        var gotowka_radio = document.querySelector(".radiogotówka");
        if (localStorage.getItem("payment_method") === "leasing") {
            leasing_radio.checked = true;
        }
        if (localStorage.getItem("payment_method") === "gotówka") {
            gotowka_radio.checked = true;
        }

        var ABS_checkbox_value = document.querySelector(".checkboxABS");
        const is_selected_ABS = localStorage.getItem("ABS_state");
        if (is_selected_ABS === "true") {
            ABS_checkbox_value.checked = true;
        }
        var rims_checkbox_value = document.querySelector(".checkboxrims");
        const is_selected_rims = localStorage.getItem("rims_state");
        if (is_selected_rims === "true") {
            rims_checkbox_value.checked = true;
        }
        var upholstery_checkbox_value = document.querySelector(".checkboxupholstery");
        const is_selected_upholstery = localStorage.getItem("upholstery_state");
        if (is_selected_upholstery === "true") {
            upholstery_checkbox_value.checked = true;
        }
        my_search_entry_control.style.display = "none";
        prepare_new_accessories_list(); // przygotowanie nowej listy akcesoriów, więcej na temat funcji przy jej deklaracji 
    }
    if (localStorage.getItem("current_screen") == "summary_page") { // wywołanie elementów strony, na trzecim etapie działania aplikacji,
        cars_ul = document.querySelector(".my_cars_list");      // gdy zakup zostaje zakończony i podsumowany 
        if (cars_ul === null) {
            create_cars_list(cars);
        }
        cars_ul = document.querySelector(".my_cars_list");
        cars_ul.style.display = "none";
        my_search_entry_control.style.display = "none";
        summamry_page(); // wyświetlenie strony z podsumowaniem, więcej na temat funkcji przy jej deklaracji 
    }
}

/* fukcja przyjmująca jako atryput tabelę elementór, które należy wyświtlić, 
jej zadaniem jest utworzenie listy samochodów dostępnych w aplikacji 
*/

function create_cars_list(table) {
    let available_us = document.querySelector(".my_cars_list");
    if (available_us !== null) {
        available_us.remove();
    }

    /* document fragment jest to zmienna, która zawiera nowo utworzony element DocumentFragment,
    służy on do przetrzymywania i ładowania elemenetów listy, która następnie zostanie wyświetlona na stronie; 
    zabieg ten ma posłużyć ograniczeniu ingerencji w ciągłe ładowanie strony, co ma wpłynąć na poprawienie wydajności aplikacji
    */

    var document_fragment = document.createDocumentFragment();

    /* utworzenie zmiennej, do której przypisano nowo utworzony element DOM "ul" 
    */

    var ul = document.createElement("ul");
    ul.className = "my_cars_list"; // nadanie elementowi nazwy klasy w celu sprawniejszej jego identyfikacji 

    table.forEach((item) => { //przechodząc po każdym z elementów tablicy, wyświetlam je na stronie aplikacji 

        let li = document.createElement("li"); // utworzenie elementu listy  
        li.className = "list_item"; // nadanie nazwy klasy, w celu prostrzej identyfikacji elementu 
        li.id = item.id; // nadanie id, jest to ten sam id, którym posługuje się obiekt tablicy (table)
        li.addEventListener("click", open_list_element); // dodanie listenera, który będzie reagował na kliknięcie w element listy
                                                        // po kliknięcie w element listy wywoła się funkcja open_list_element()

        let badge_header = document.createElement("h3"); // utworzenie elementu zawierającego się w elemencie listy 
        badge_header.className = "car_badge"; 
        badge_header.innerText = item.brand + " " + item.model; // dodanie tesktu do elementu badge_header

        /* utworzenie elementów zawierających informacje nt. samochodu 
        */

        let car_image = document.createElement("img"); // deklaracja zmiennej oraz przypisanie nowoutworzonego elementu "obraz"
        car_image.className = "car_image";
        car_image.src = item.pictureSrc; // przypisanie lokalizacji obrazu do atrybutu obrazu 
        car_image.alt = item.brand + " " + item.model; // podanie tekstu alternatywnego, gdyby obraz nie był dostępny 
        let car_year = document.createElement("p"); 
        car_year.className = "car_year";
        car_year.innerText = "Rocznik:\n" + item.year;
        let car_mileage = document.createElement("p"); 
        car_mileage.className = "car_mileage";
        car_mileage.innerText = "Przebieg:\n" + item.mileage + " km";
        let car_power = document.createElement("p");
        car_power.className = "car_power";
        car_power.innerText = "Moc silnika:\n" + item.horse_power + " KM - " + item.engine_power + " kW";
        let car_price = document.createElement("h4");
        car_price.className = "car_price";
        car_price.innerText = item.price + " zł";

        /* utworzenie tabeli, placeeholder do stylizacji elementów listy 
        */

        let table = document.createElement("table");
        table.className = "table";
        let table_row = document.createElement("tr");
        table_row.className = "table_row";
        let table_cell1 = document.createElement("td");
        table_cell1.className = "table_cell1";
        table_cell1.append(car_image);
        let table_cell2 = document.createElement("td");
        table_cell2.className = "table_cell2";
        table_cell2.append(car_year, car_mileage, car_power)
        let table_cell3 = document.createElement("td");
        table_cell3.className = "table_cell3";
        table_cell3.append(car_price)
        table_row.append(table_cell1, table_cell2, table_cell3);
        table.append(table_row);

        li.append(badge_header, table); 

        document_fragment.append(li); // dodanie elementu listy do fragmentu dokumentu, jeszcze nie jest to widoczne na stronie 
    }
    );

    ul.append(document_fragment) // dodanie fragmentu dokumentu elementu ul, jeszcze nie jest to widoczne na stronie 

    cars_list.append(ul); // dodanie listy do strony
}

/* funkcja przyjmująca jako argument even, który generuje się po kliknięciu w element listy samochodów
*/

function open_list_element(event) {
    localStorage.setItem("car_id", event.currentTarget.id); // dodanie nowej wartości do localStorage
    event.stopPropagation(); // zatrzymanie propagacji eventu na inne elementy, które są dostępne po kliknięciu w element listy
    set_form_view(); // utworzenie widoku formularza
}

/* funkcja ukrywająca listę samochodów i tworzącą formularz oraz listę zakupów 
*/

function set_form_view() {
    cars_ul = document.querySelector(".my_cars_list");
    if (cars_ul === null) { // funkcja wykorzystywana jest wielokronie, czasami element isty jest niedostępny, dlatego go tworzymy 
        create_cars_list(cars);
        cars_ul = document.querySelector(".my_cars_list");
        if (cars_ul.display !== "none") {
            cars_ul.style.display = "none";
        };
    } else {
        cars_ul.style.display = "none";
    };
    let updated_accessories_remove_this_list = document.querySelector(".updated_accessories_list");
    if (updated_accessories_remove_this_list !== null) {
        updated_accessories_remove_this_list.remove();
    }
    create_form();  // funkcja, w które tworzę formularz
    display_selected_car(); // funkcja, w której tworzę element wybranego samochodu, do wyświetlenia w liście zakupów
}

/* funckja tworząca formularz 
*/

function create_form() {
    my_search_entry_control.style.display = "none";
    let form = document.createElement("form"); // utworzenie elementu formulrz
    form.className = "my_form";
    localStorage.setItem("current_screen", "form"); // zapisanie aktualnie widocznego elementu aplikacji do localStorage

    /* dodanie przycisku powrót do formularza 
    */

    var button_box = create_box("box_button");
    var my_button = create_button("button", "Powrót");
    my_button.addEventListener("click", hide_form_when_back); // złapanie i interpretacja eventu, kliknięcie w button Powrót
    button_box.append(my_button);
    

    // user data element
    let user_data_box = create_box("surname");
    user_data.forEach((item) => {
        let label = create_label("\n" + item.user_data + " \n", item.user_data_class);
        let element = create_input_text(item.user_data, "class_" + item.user_data_class);
        if (item.user_data_class == "name") {
            element.addEventListener("input", update_user_name); // złapanie i interpretacja eventu wpisywania danych do pola "input"
        }
        if (item.user_data_class == "address") {
            element.addEventListener("input", update_user_address);
        }
        user_data_box.append(label, element);
    }
    );

    // date element
    var date_box = create_box("date");
    var label_date = create_label("Data odbioru \n", "date_main_label");
    var element_date = create_input_date("date");
    element_date.addEventListener("input", update_date_value);
    date_box.append(label_date, element_date);

    // payment element
    var payment_box = create_box("payment");
    var label_accessories = create_label("Sposób zapłaty: \n", "payment_label_tytle");
    payment_box.append(label_accessories);
    payments.forEach((item) => {
        let element_payment = create_input_selection("radio", item.name, "radio" + item.name);
        let label_payment = create_label("\n", item.class);
        label_payment.append(element_payment);
        label_payment.append(item.name);
        element_payment.addEventListener("click", update_payment_method); // złapanie i interpretacja eventu, kliknięcie w radio button 
        payment_box.append(label_payment);
    }
    );

    // accessories elements
    var accessories_box = create_box("accessories");
    var label_accessories = create_label("Akcesoria: \n", "accessories_main_label");
    accessories_box.append(label_accessories);
    accessories_list.forEach((item) => {
        let element_accessories = create_input_selection("checkbox", item.name, "checkbox" + item.class);
        let label_accessories = create_label("\n", item.class);
        label_accessories.append(element_accessories);
        label_accessories.append(item.name + " " + item.price + " zł");
        element_accessories.addEventListener("click", update_accessories_list); // złapanie i interpretacja eventu, kliknięcie w checkbox 
        accessories_box.append(label_accessories);
    }
    );

    /* dodanie przycisku wyślij do formularza 
    */

    var my_button = create_button("submit", "Wyślij");
    my_button.addEventListener("click", submit_form); // złapanie i interpretacja eventu, kliknięcie w button Wyślij
    button_box.append(my_button);

    form.append(user_data_box, date_box, payment_box, accessories_box, button_box); // dodanie elementów do formularza
    cars_list.append(form); // dodanie formularza do strony, formularz zostanie wyświetlone
};

/* zapisanie nazwy użytkownika do localStorage
*/

function update_user_name(event) {
    localStorage.setItem("name", event.currentTarget.value);
};

/* zapisanie adresu użytkownika do localStorage
*/

function update_user_address(event) {
    localStorage.setItem("address", event.currentTarget.value);
};

/* zapisanie daty dostarczenia do localStorage
*/
   
function update_date_value(event) {
    localStorage.setItem("delivery_date", event.currentTarget.value);
};

/* zapisanie metody płatności do localStorage
*/

function update_payment_method(event) {
    localStorage.setItem("payment_method", event.currentTarget.value);
};

/* obsłużenie eventu po dodaniu, usunięciu akcesoriów  
*/
    
function update_accessories_list(event) {

    event.stopPropagation();
    prepare_new_accessories_list(); // tworzenie aktualnie listy wybranych akcesoriów
}

/* zapisanie finalnej ceny do localStorage
*/

function update_final_price(price) {
    localStorage.setItem("total_price", price);
}

/* tworzenie aktualnie listy wybranych akcesoriów, odczytywanie stanu checkboxów, zapisanie ich do localStorage oraz update ceny 
*/

function prepare_new_accessories_list(){
    accessories_list.forEach((item) => {
        let my_class_name = ".checkbox" + item.class;
        let element_name = item.class + "_state";
        let list_element = document.querySelector(my_class_name);
        let is_element_checked;
        if (list_element === null) {
            is_element_checked = false;
        } else {
            is_element_checked = list_element.checked;
        }
        localStorage.setItem(element_name, is_element_checked);
        const is_selected = localStorage.getItem(element_name);
        if (is_selected == "true") {
            switch (item.id) {
                case 11:
                    if (is_accessory_1_added == false) {
                        let element_li = document.createElement("li");
                        element_li.className = item.class;
                        element_li.innerText = item.name;
                        element_li.id = item.id;
                        element_ul.append(element_li);
                        box_price = box_price + item.price;
                        update_final_price(box_price);

                        var price_label = document.querySelector(".my_price");
                        price_label.remove();
                        let label_price = create_label("Cena zakupu: " + box_price + " zł", "my_price");
                        price_box.append(label_price);
                        is_accessory_1_added = true;
                    }
                    break;
                case 22:
                    if (is_accessory_2_added == false) {
                        let element_li = document.createElement("li");
                        element_li.className = item.class;
                        element_li.innerText = item.name;
                        element_li.id = item.id;
                        element_ul.append(element_li);
                        box_price = box_price + item.price;
                        update_final_price(box_price);
                        var price_label = document.querySelector(".my_price");
                        price_label.remove();
                        let label_price = create_label("Cena zakupu: " + box_price + " zł", "my_price");
                        price_box.append(label_price);
                        is_accessory_2_added = true;
                    }
                    break;
                case 33:
                    if (is_accessory_3_added == false) {
                        let element_li = document.createElement("li");
                        element_li.className = item.class;
                        element_li.innerText = item.name;
                        element_li.id = item.id;
                        element_ul.append(element_li);
                        box_price = box_price + item.price;
                        update_final_price(box_price);
                        var price_label = document.querySelector(".my_price");
                        price_label.remove();
                        let label_price = create_label("Cena zakupu: " + box_price + " zł", "my_price");
                        price_box.append(label_price);
                        is_accessory_3_added = true;
                    }
                    break;
                default:
                    break;
            }
        } else {
            switch (item.id) {
                case 11:
                    if (is_accessory_1_added == true) {
                        let remove_element = document.getElementById(item.id);
                        remove_element.remove();
                        box_price = box_price - item.price;
                        update_final_price(box_price);
                        var price_label = document.querySelector(".my_price");
                        price_label.remove();
                        let label_price = create_label("Cena zakupu: " + box_price + " zł", "my_price");
                        price_box.append(label_price);
                        is_accessory_1_added = false;
                    }
                    break;
                case 22:
                    if (is_accessory_2_added == true) {
                        let remove_element = document.getElementById(item.id);
                        remove_element.remove();
                        box_price = box_price - item.price;
                        update_final_price(box_price);
                        var price_label = document.querySelector(".my_price");
                        price_label.remove();
                        let label_price = create_label("Cena zakupu: " + box_price + " zł", "my_price");
                        price_box.append(label_price);
                        is_accessory_2_added = false;
                    }
                    break;
                case 33:
                    if (is_accessory_3_added == true) {
                        let remove_element = document.getElementById(item.id);
                        remove_element.remove();
                        box_price = box_price - item.price;
                        update_final_price(box_price);
                        var price_label = document.querySelector(".my_price");
                        price_label.remove();
                        let label_price = create_label("Cena zakupu: " + box_price + " zł", "my_price");
                        price_box.append(label_price);
                        is_accessory_3_added = false;
                    }
                    break;
                default:
                    break;
            }
        }

    }
    );
    shopping_list_box.append(element_ul, price_box);
};

/* utworzenie elementu "p", w którym dodane zostaną pozostałe skojarzone elementy
*/

function create_box(class_name) {
    let paragraf_box = document.createElement("p");
    paragraf_box.className = class_name;
    return paragraf_box;
};

/* utworzenie elementu "label", w którym zostanie zawarta nazwa, np. elementu wyświetlanego na stronie 
*/

function create_label(name, class_name) {
    let label = document.createElement("label")
    label.innerText = name;
    label.className = class_name;
    return label
};

/* utworzenie elementu "input", typu "text"
*/

function create_input_text(label_name, class_name) {
    let input_name = document.createElement("input");
    input_name.className = class_name;
    input_name.type = "text";
    input_name.labels = label_name;
    return input_name;
}

/* utworzenie elementu "input", typu "date"
*/

function create_input_date(class_name) {
    let input_date = document.createElement("input");
    let today = new Date();
    input_date.className = "class_" + class_name;
    input_date.type = "date";
    let today_date = today.getFullYear() + "-" + (today.getMonth() + 1).toString().padStart(2, '0') + "-" + today.getDate();
    input_date.value = today_date;
    input_date.min = input_date.value;
    let max_date; 
    let twoWeeksLater = new Date(today.getTime() + (14 * 24 * 60 * 60 * 1000));

    let day = twoWeeksLater.getDate().toString().padStart(2, '0');
    let month = (twoWeeksLater.getMonth() + 1).toString().padStart(2, '0');
    let year = twoWeeksLater.getFullYear().toString();

    let today_day = today.getDate().toString().padStart(2, '0');
    let today_month = (today.getMonth() + 1).toString().padStart(2, '0');
    let today_year = today.getFullYear().toString();
    today_value = today_year + "-" + today_month + "-" + today_day;
    max_date = year + "-" + month + "-" + day;
    input_date.value = today_value;
    input_date.max = max_date;
    return input_date;
};

/* utworzenie elementu "input", typu "checkbox" lub "radio" w zależności od przyjmowanych argumentów 
*/

function create_input_selection(element_type, element_value, element_class) {
    let input_element = document.createElement("input");
    input_element.setAttribute("type", element_type);
    input_element.setAttribute("value", element_value);
    input_element.setAttribute("class", element_class)
    input_element.setAttribute("name", element_type);
    return input_element;
};

/* zniszczenie formularza i usunięcie localStorage
*/

function hide_form_when_back() {
    my_search_entry_control.style.display = "block"
    let my_form = document.querySelector(".my_form");
    my_form.remove();
    let updated_accessories_remove_list = document.querySelector(".updated_accessories_list");
    if (updated_accessories_remove_list !== null) {
        updated_accessories_remove_list.remove();
    }
    let shopping_list_class = document.querySelector(".shopping_list_class");
    shopping_list_class.remove();
    let car_box = document.querySelector(".car_box");
    car_box.remove();
    let my_price = document.querySelector(".my_price");
    my_price.remove();
    let shopping_list = document.querySelector(".shopping_list");
    shopping_list.remove();

    let alerts_baner = document.querySelector(".alerts_list");
    if (alerts_baner !== null) {
        alerts_baner.remove();
    };
    cars_ul = document.querySelector(".my_cars_list");
    cars_ul.style.display = "block";
    localStorage.clear();
    localStorage.setItem("current_screen", "cars_list");
}; 

/* zniszczenie formularza i pozostawienie localStorage
*/

function hide_form_when_submit() {
    let my_form = document.querySelector(".my_form");
    my_form.remove();
    let updated_accessories_remove_list = document.querySelector(".updated_accessories_list");
    if (updated_accessories_remove_list !== null) {
        updated_accessories_remove_list.remove();
    }
    let shopping_list_class = document.querySelector(".shopping_list_class");
    shopping_list_class.remove();
    let car_box = document.querySelector(".car_box");
    car_box.remove();
    let my_price = document.querySelector(".my_price");
    my_price.remove();
    let shopping_list = document.querySelector(".shopping_list");
    shopping_list.remove();

    let alerts_baner = document.querySelector(".alerts_list");
    if (alerts_baner !== null) {
        alerts_baner.remove();
    };
    localStorage.setItem("current_screen", "summary_page");
}; 

/* wyświetlenie elementów wybranego samochodu 
*/

function display_selected_car() {
    var shopping_list_title = create_label("Twoja lista zakupów \n", "shopping_list_class");
    shopping_list_box.append(shopping_list_title);
    const car_id = localStorage.getItem("car_id");
    let car_box = create_box("car_box");
    cars.forEach((item) => {
        if (item.id == car_id) {
            box_price = item.price;
            update_final_price(box_price);
            let label_price = create_label("Cena zakupu: " + box_price + " zł", "my_price");
            let car_name = document.createElement("p");
            car_name.className = "car_name";
            car_name.innerText = item.brand + " " + item.model;

            let car_picture = document.createElement("img");
            car_picture.className = "car_picture";
            car_picture.src = item.pictureSrc;
            car_picture.alt = item.brand + " " + item.model;
            
            let car_info = document.createElement("p");
            car_info.className = "car_info";
            car_info.innerText = "\nRocznik:" + item.year +
                " | Przebieg:" + item.mileage + " km" +
                " | Moc silnika:" + item.horse_power + " KM - " + item.engine_power + " kW";

            price_box.append(label_price);
            car_box.append(car_name, car_picture, car_info);
            shopping_list_box.append(car_box, price_box);
        };
    }
    );

    cars_list.append(shopping_list_box);
};

/* funckja tworząca przycisk
*/

function create_button(type, text) {
    var button = document.createElement("button");
    button.type = type;
    button.innerText = text;
    button.className = "button_" + type;
    return button;
};

/* submit formularza z walidacją elementów, zatwierdzenie go 
*/

function submit_form(event) {
    event.preventDefault()

    const name = localStorage.getItem("name");
    const address = localStorage.getItem("address");
    const date = localStorage.getItem("delivery_date");
    const payment = localStorage.getItem("payment_method");
    let today = new Date();
    let twoDaysLaterms = today.getTime() + (2 * 24 * 60 * 60 * 1000);

    let alerts_list = document.createElement("ul");
    alerts_list.className = "alerts_list";
    if (localStorage.getItem("alerts_list_created") === "true") {
        let select_alerts_list = document.querySelector(".alerts_list");
        select_alerts_list.remove();
    }
    if (name === null) {
        let alert_element = document.createElement("li");
        alert_element.className = "no name"
        alert_element.innerText = "Podaj imię i nazwisko.\n";
        alerts_list.append(alert_element);
        
    } else {
        if (analyze_text(name) === true) {
            let alert_element = document.createElement("li");
            alert_element.className = "incorrect_name_format"
            alert_element.innerText = "Podaj imię i nazwisko, oddzielając je spacją.\n";
            alerts_list.append(alert_element);
        } else {
            if (name === "") {
                let alert_element = document.createElement("li");
                alert_element.className = "no name"
                alert_element.innerText = "Podaj imię i nazwisko.\n";
                alerts_list.append(alert_element);
            }
        }
    }
    if (address === null) {
        let alert_element = document.createElement("li");
        alert_element.innerText = "Podaj adres dostawy.\n";
        alerts_list.append(alert_element);
    }
    if (address === "") {
        let alert_element = document.createElement("li");
        alert_element.innerText = "Podaj adres dostawy.\n";
        alerts_list.append(alert_element);
    }
    if (date === null) {
        let alert_element = document.createElement("li");
        alert_element.innerText = "Wybierz datę dostarczenia zamówienia.\n";
        alerts_list.append(alert_element);
    } else {
        var myDate = new Date( date + "T00:00:00+0000");
        var milliseconds = myDate.getTime();
        if (milliseconds < twoDaysLaterms) {
            let alert_element = document.createElement("li");
            alert_element.innerText = "Na przygotowanie zamówienia potrzebujemy 2 dni. Wybierz inną datę dostarczenia zamówienia.\n";
            alerts_list.append(alert_element);
        }
    }
    if (payment === null) {
        let alert_element = document.createElement("li");
        alert_element.innerText = "Wybierz formę płatności.\n";
        alerts_list.append(alert_element);
    }
    let alerts = document.querySelector(".alerts");
    if (alerts_list.childElementCount > 0) {
        let my_form = document.querySelector(".my_form");
        my_form.append(alerts_list);
        localStorage.setItem("alerts_list_created", "true");
    } else {
        localStorage.setItem("alerts_list_created", "false");
        hide_form_when_submit();
        show_summary_page();
    }
    

};

/* analiza tekstu pobranego z pola input 
*/

function analyze_text(text_element) {
    let text_element_length = text_element.length;
    if (text_element_length === 4) {
        return true
    };
    let element_number = [];
    for (let i = 0; i < text_element_length; i++) {
        if (text_element[i] === " ") {
            element_number.push(i);
        };
    };
    if (element_number.length === 0) {
        return true
    } else {
        for (let i = 0; element_number.length; i++) {
            if (element_number[i] === 0) {
                element_number.splice(i, 1);
            }
            if (element_number[i] === 1) {
                element_number.splice(i, 1);
            }
            if (element_number[i] === text_element_length-1) {
                element_number.splice(i, 1);
            }
            if (element_number[i] === text_element_length-2) {
                element_number.splice(i, 1);
            }
            if (element_number.length === 0) {
                return true;
            } else {
                return false;
            }
        };
    };
};

/* pokaż podsumowanie strony 
*/

function show_summary_page() {
    summamry_page();
};

/* stwórz podsumowanie zakupu 
*/

function summamry_page() {
    let summary_element = document.createElement("p");
    summary_element.className = "summary_element";

    const bought_car_id = localStorage.getItem("car_id");
    let thanks_for = document.createElement("h3");
    let my_car_picture = document.createElement("img");
    my_car_picture.className = "my_car_picture";
    let cars_delivery = document.createElement("h3");
    const bought_car_delivery_date = localStorage.getItem("delivery_date");
    let my_car_price = document.createElement("h3");
    const final_car_price = localStorage.getItem("total_price");
    let my_payment_methd = document.createElement("h3");
    const final_paymeny_method = localStorage.getItem("payment_method");
    cars.forEach((item) => { 
        if (item.id === Number(bought_car_id)) {
            thanks_for.innerText = "Dziękujemy za dokonanie zakupu samochodu " + item.brand + " " + item.model + " !";
            
            my_car_picture.src = item.pictureSrc;
            my_car_picture.alt = item.brand + " " + item.model;

            cars_delivery.innerText = "Samochód wraz z akcesoriami zostanie dostarczony " + bought_car_delivery_date + " .";

            my_car_price.innerText = "Cena całego zestawu: " + final_car_price + " zł.";
            my_payment_methd.innerText = "Wybrana metoda płatności: " + final_paymeny_method + ".";
        }
    }
    );

    let finish_button_box = create_box("finish_button_box");
    let finish_button = create_button("button", "Zakończ")
    finish_button.addEventListener("click", back_to_cars_list);
    finish_button_box.append(finish_button);

    summary_element.append(thanks_for, my_car_picture, cars_delivery, my_car_price, my_payment_methd);
    cars_list.append(summary_element, finish_button_box);
}

/* funkcja wywoływana dla akcji kliku w przycisk "Powrót"
*/

function back_to_cars_list() {
    cars_ul = document.querySelector(".my_cars_list");
    cars_ul.style.display = "block";
    my_search_entry_control.style.display = "block"
    let hide_finish_button_box = document.querySelector(".finish_button_box");
    hide_finish_button_box.remove();
    let hide_total_summary = document.querySelector(".summary_element");
    hide_total_summary.remove();

    localStorage.clear();
    localStorage.setItem("current_screen", "cars_list");
}

/* utworzenie kontrolki wyszukiwania
*/

function create_search_control() {
    let search_control_box = create_box("search_control_box");
    let serch_label = create_label("Wyszukaj", "class_search");
    let search_input = create_input_text("search", "class_search_input");
    search_input.addEventListener("input", update_search_event);
    search_control_box.append(serch_label, search_input);
    let search_entry_on_page = document.querySelector(".my_search_entry");
    search_entry_on_page.append(search_control_box);
}

/* aktualizacja widoku listy samochodów po wpisaniu frazy w wyszukiwarkę
*/

function update_search_event(event) {
    event.stopPropagation();
    shorten_cars_list = [];
    localStorage.setItem("search_phrase", event.currentTarget.value);
    const search_phrase = localStorage.getItem("search_phrase");
    let lower_case_search_phrase = search_phrase.toLowerCase();
    if (search_phrase.length = 0) {
        create_cars_list(cars); 
    } else {
        cars.forEach((item) => { 
            analyze_text = item.brand;
            let lower_case_text = analyze_text.toLowerCase();
            if (lower_case_text.includes(lower_case_search_phrase)) {
                shorten_cars_list.push(item);
            }
        }
        );  
        create_cars_list(shorten_cars_list);
    }
};