import './fish.html';
import './meat.html';
import './vegetarian.html';
import './salads.html';
import './rice.html';

Template.fish.helpers({
    'lang': function () {
        return Session.get("lang");
    },
    'get_lang': function (check) {
        let lang = Session.get("lang");

        return check == lang ? true : false;
    },
    'fish_list': () => {
        return [
            {
                "name": "Hámburger de Choco",
                "pt": "Hambúrger de choco, camarão e salmão servido em bolo levedo, salada couve , batata aromatizada e salada",
                "en": "Cuttlefish shrimp and salmon burger served in Azores cake, served w/ aromatized potato and salad",
                "price": "€10.90"
            },
            {
                "name": "Filete de Robalo",
                "pt": "Filete de robalo com camarão, batata doce assada, legumes saltedos e molho de azeite de alho com coentros",
                "en": "Sea Bass with shrimp, roasted sweet potato, vegetables with garlic and coriander sauce ",
                "price": "€10.90"
            },
        ]
    }
});

Template.salads.helpers({
    'lang': function () {
        return Session.get("lang");
    },
    'get_lang': function (check) {
        let lang = Session.get("lang");

        return check == lang ? true : false;
    },
    'salads_list': () => {
        return [
            {
                "name": "Salada Fresca de Verão",
                "pt": "Salada Fresca De Verão, mistura de alfaces, tomate cereja, fruta da época, camarão, crocante de cebola com molho mel e mostarda",
                "en": "Fresh summer salad, mix of lettuce, cherry tomato, seasonal fruit, shrimp, onion crumble with honey sauce and mustard",
                "price": "€9.90"
            },
            {
                "name": "Salada de Salmão",
                "pt": "Salada de Salmão Marinado com queijo feta e amêndoas torradas, mistura de alfaces, com laminas de salmão marinado, nozes e molho vinagrete",
                "en": "Marinated Salmon Salad, feta cheese and toasted almonds, mixture of lettuce, with marinated salmon blades, walnuts and vinagrette sauce",
                "price": "€9.90"
            },
            {
                "name": "Salada César",
                "pt": "Salada César com bacon, tiras de frango grelhado e crotões de ervas.",
                "en": "Caeser salad with bacon, strips of grilled chicken and croutons",
                "price": "€8.90"
            },
        ]
    }
});

Template.rice.helpers({
    'lang': function () {
        return Session.get("lang");
    },
    'get_lang': function (check) {
        let lang = Session.get("lang");

        return check == lang ? true : false;
    },
    'rice_list': () => {
        return [
            {
                "name": "Risotto da Ria Formosa",
                "pt": "Risotto da Ria Formosa perfumado com açafrão , camarão, berbigão e filete de robalo",
                "en": "Ria Formosa Risotto with saffron, shrimp, cockle and fillet of sea bass",
                "price": "€10.90"
            },
            {
                "name": "Risotto Negro de Camarão",
                "pt": "Risotto Negro de camarão e lulas c/ flor de sal e ervas frescas",
                "en": "Black Risotto with shrimp and squid with salt flower and fresh herbs",
                "price": "€9.90"
            },
            {
                "name": "Risotto de Espinafres",
                "pt": "Risotto de Espinafres com lombo de salmão e ervas frescas",
                "en": "Spinach risotto w/salmon loin and fresh herbs",
                "price": "€10.90"
            },
        ]
    }
});

Template.meat.helpers({
    'lang': function () {
        return Session.get("lang");
    },
    'get_lang': function (check) {
        let lang = Session.get("lang");

        return check == lang ? true : false;
    },
    'meat_list': () => {
        return [
            {
                "name": "Bitoque à Chef",
                "pt": "Bitoque à Chef, bife de novilho grelhado, bacon, ovo estrelado e molho português servido com arroz e batata aromatizada",
                "en": "Chef's 'bitoque' w/ grilled veal steak with bacon, fried egg and Portuguese sauce served w/rice and flavored potato",
                "price": "€11.90"
            },
            {
                "name": "Hambúrger à Chef",
                "pt": "Hambúrger à Chef, carne dos açores servida em bolo levedo com ovo estrelado e batata steakhouse, molho pimenta ou cogumelos",
                "en": "Chef's hamburger, meat from Azores served in yeast cake with fried egg and steakhouse potato, pepper sauce or mushroom.",
                "price": "€10.90"
            },
            {
                "name": "Bife de Novilho",
                "pt": "Bife de novilho grelhado com manteiga de alho acompanha legumes e batata aromatizados",
                "en": "Grilles veal beef steak w/ garlic butter served with flavored potatos and vegetables",
                "price": "€10.90"
            },
            {
                "name": "Pianinho de Porco Ibérico",
                "pt": "Pianinho de porco ìbérico caramelizado com molho barbecue fumado de laranja e amêndoas batata e legumes aromatizados",
                "en": "Caramelized Iberian pork ribs w/ smoked barbacue sauce w/ orange, almonds, flavored potatoes and vegetables",
                "price": "€11.90"
            },
            {
                "name": "Mista de Carnes",
                "pt": "Mista de carnes grelhadas Portuguese lab: frango, febra, salsicha, novillho, camarão, abacaxi, feijão preto, arroz e batata doce",
                "en": "Mixed Grilled meat Portuguese Lab: chicken, pork, sausage, veal, shrimp, pineapple, black beans, rice and sweet potatoes",
                "price": "€11.90"
            },
            {
                "name": "Secretos de Porco Alentejano",
                "pt": "Secretos de Porco Alentejano com abacaxi, batata frita, salada e pickles",
                "en": "Grilled Pork with chips, salad, and picles",
                "price": "€10.90"
            },

        ]
    }
});


Template.vegetarian.helpers({
    'lang': function () {
        return Session.get("lang");
    },
    'get_lang': function (check) {
        let lang = Session.get("lang");

        return check == lang ? true : false;
    },
    'vegetarian_list': () => {
        return [
            {
                "name": "Hambúrger de Abóbora",
                "pt": "Hambúrger de abóbora assada com quinoa, especiarias e batata doce acompanhado de espargos, ananás, frutos secos e mistura de alfaces",
                "en": "Baked pumpkin, quinoa and sweet potato burger w/ spices, served w/ asparagus, pineapple, tree nuts and mix lettuces",
                "price": "€9.90"
            },
            {
                "name": "Risotto de Espinafres",
                "pt": "Risotto de espinafres e gengibre com amêndoas torradas",
                "en": "Spinach and ginger risotto with toasted almonds",
                "price": "€9.90"
            },
            {
                "name": "Hambúrger de Feijão",
                "pt": "Hambúrger de feijão com soja, nozes, cogumelos, molho de manga e gengibre em bolo levedo c/ batata doce assada",
                "en": "Bean burger w/ soy nuts and mushrooms, mango and ginger sauce in Azores cake served w/ roasted sweet potato",
                "price": "€9.90"
            },
            {
                "name": "Risotto de Cogumelos",
                "pt": "Risotto de cogumelos e espargos com tomate cereja",
                "en": "Mushrooms and asparagus risotto with cherry tomatoes",
                "price": "€9.90"
            },

        ]
    }
});