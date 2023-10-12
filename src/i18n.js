import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      pt: {
        translation: {
          navigation: {
            home: "Início",
            booking: "Acomodações",
            location: "Como chegar",
            pictures: "Mais fotos",
          },
          disclaimer:
            "Para Fim de Ano e Carnaval consulte valores e disponibilidade",
          page: {
            home: {
              title: "Bem vindo!",
              greetings:
                "Se ficar no litoral gaúcho já é incrível, imagine o prazer de estar hospedado a beira mar, cercado de belezas naturais, diversão e muito conforto! O Hotel Sereia oferece uma estrutura completa de lazer para você aproveitar ao máximo suas férias! Arroio do Sal, uma tranquila cidade no litoral do Rio Grande do Sul, possui toda a estrutura para que você desfrute suas férias. Aqui está localizado o Hotel Sereia que oferece apartamentos com TV e frigobar de frente para o mar. O Hotel também possui salão de jogos, de leitura, sauna e piscina.",
              enjoy: "Venha Aproveitar!",
              features: {
                1: "Belezas naturais",
                2: "Delicioso café da manhã",
                3: "Tempo de qualidade com aqueles que se ama",
                4: "Ambiente familiar",
                5: "Comodidade e tranquilidade em nosso belíssimo Litoral Gaúcho",
                6: "Salas de estar com Tv",
                7: "Sala de leitura com redes para descanso",
                8: "Espaço com churrasqueira e jogos",
                9: "Área verde para vôlei e futebol, espaço infantil",
                10: "Pátio interno com bar, piscina aquecida adulto e infantil",
                11: "Sauna",
              },
              imagesDescriptions: {
                1: "Patio Piscina",
                2: "Por do sol",
                3: "Café da manhã",
                4: "Pátio Interno",
                5: "Parque",
                6: "Redário",
                7: "Área de Convivência",
                8: "Área de Convivência e Leitura",
                9: "Piscina",
                10: "Vista para o mar",
              },
              findUs: "Encontre-nos através do menu Social ou contatos abaixo",
              contacts: {
                phone: "Celular",
                location: "Localização",
              },
            },
            booking: {
              title: "Acomodações",
              easyBooking: {
                title: "Seletor Facilitado",
                adults: "Número de adultos",
                children: "Número de crianças",
                childrenDisclaimer: "Crianças de 03 até 10 anos.",
                selectDate: "Selecione o período",
                firstDay: "Primeiro dia",
                lastDay: "Último dia",
                services: "Serviço incluso?",
                garage: "Garagem coberta?",
                book: "Reserve",
                noOptions: "Não há opções disponíveis nessa seleção",
                disclaimer: {
                  part1:
                    "Serviço: Café da manhã, roupas de cama e banho e serviço de limpeza diária",
                  part2: "Taxa de limpeza ao final da estadia: R$ 180,00",
                },
              },
              bookDisclaimer: {
                part1: "Valores válidos de ",
                part2: " à ",
              },
              info: "Para se informar sobre um apartamento clique no nome dele e nos mande um Whats!",
              pricesDisclaimer:
                "Preços em reais (R$) por apartamento/por noite com café da manhã",
              reservations: {
                part1: "Reservas com antecedência",
                part2: "Apartamentos padrão: 5 dias",
                part3: "Apartamentos com mini cozinha: 7 dias",
              },
              headers: {
                ap: "Apartamentos",
                one: "1 Pessoa",
                two: "2 Pessoas",
                three: "3 Pessoas",
                four: "4 Pessoas",
                five: "5 Pessoas",
                children: "Tarifa para crianças",
              },
              table: {
                line1: "Vista Mar/Vista Piscina Simples*",
                line2: "Vista Mar 1º Mar",
                line3: "Vista Piscina",
                line4: "Lateral Mar e Vista Serra",
                line5: "Conjugado Vista Mar 1º Andar",
                line6: "Conjugado Vista Mar, 02 banheiros com mini cozinha",
                line7: "Conjugado Vista Serra/Pátio com mini cozinha",
                obs: "* Apto Simples com ventilador de teto. Demais aptos com ar-condicionado, sendo que nos conjugados o ar-condicionado (12.000 Btus) é em apenas um dos quartos e no outro quarto tem ventilador de teto.",
              },
              table2: {
                disclaimer: {
                  part1:
                    "Preços em reais (R$) no apartamento com mini cozinha/por noite ",
                  part2: "SEM SERVIÇOS**",
                },
                line1: "Conjugado Vista Mar, 02 banheiros com mini cozinha",
                line2: "Conjugado Vista Serra/Pátio com mini cozinha",
                obs: "* Não inclui café da manhã, roupas de cama e banho e serviço de limpeza diária ** Taxa de limpeza ao final da estadia R$ 180,00",
              },
              table3: {
                line1: {
                  part1: "Até 03 anos",
                  part2: "Cortesia - Berço bebê mediante solicitação",
                },
                line2: {
                  part1: "04 à 10 anos",
                  part2:
                    "01 Criança desconto de 10% aplicado ao número total de pessoas",
                  part3:
                    "02 Crianças desconto de 15% aplicado ao número total de pessoas",
                  part4:
                    "03 Crianças desconto de 20% aplicado ao número total de pessoas",
                },
              },
              garage: "Taxa de Garagem coberta: R$ 30,00 a diária",
              customMessage:
                "Olá! Vim pelo site, gostaria de informações sobre o ",
            },
            location: {
              title: "Localização",
              first: "Para chegar no Hotel Sereia é extremamente simples!",
              seccond:
                "Ao entrar em Arroio do Sal pela entrada principal (Av. Assis Brasil) basta segui-la até o fim, na Av. Beira Mar, faça a curva à direita, após isso ficamos na segunda quadra à sua direita.",
              third:
                "Enquanto se encaminhas até nós, deves passar por diversos restaurantes, vale uma anotação para visitá-los depois, e o mais importante, a nossa belíssima praia fica logo à nossa frente!",
            },
            pictures: {
              title: "Mais fotos",
              tip: "Clique sob a imagem para expandir",
              pictureList: {
                1: "Apartamento casal Vista Mar",
                2: "Conjugado Vista Mar",
                3: "Conjugado Térreo",
                4: "Pátio Interno",
                5: "Pátio Interno - Piscina",
                6: "Sala de Estar",
                7: "Redário",
              },
            },
          },
          whatsMessage: "Olá! Vim pelo site, gostaria de informações.",
        },
      },
      es: {
        translation: {
          navigation: {
            home: "Inicio",
            booking: "Alojamiento",
            location: "Cómo llegar",
            pictures: "Más fotos",
          },
          disclaimer: "¡Regresamos el 10/10!",
          page: {
            home: {
              title: "¡Bienvenido!",
              greetings:
                "Si estar en la costa de Rio Grande do Sul ya es increíble, ¡imagina el placer de estar alojado frente al mar, rodeado de bellezas naturales, diversión y comodidad! El Hotel Sereia ofrece una estructura completa de entretenimiento para que disfrutes al máximo de tus vacaciones. Arroio do Sal, una tranquila ciudad en la costa de Rio Grande do Sul, cuenta con todas las comodidades para que disfrutes de tus vacaciones. Aquí se encuentra el Hotel Sereia, que ofrece habitaciones con TV y minibar frente al mar. El hotel también cuenta con sala de juegos, sala de lectura, sauna y piscina.",
              enjoy: "¡Ven y disfruta!",
              features: {
                1: "Bellezas naturales",
                2: "Delicioso desayuno",
                3: "Tiempo de calidad con tus seres queridos",
                4: "Ambiente familiar",
                5: "Comodidad y tranquilidad en nuestra hermosa costa de Rio Grande do Sul",
                6: "Salas de estar con televisión",
                7: "Sala de lectura con hamacas para descansar",
                8: "Área con parrilla y juegos",
                9: "Área verde para vóley y fútbol, espacio para niños",
                10: "Patio interior con bar, piscina climatizada para adultos y niños",
                11: "Sauna",
              },
              imagesDescriptions: {
                1: "Patio y piscina",
                2: "Atardecer",
                3: "Desayuno",
                4: "Patio interior",
                5: "Parque",
                6: "Zona de descanso con hamacas",
                7: "Área de convivencia",
                8: "Área de convivencia y lectura",
                9: "Piscina",
                10: "Vista al mar",
              },
              findUs:
                "Encuéntranos a través del menú de redes sociales o los contactos a continuación",
              contacts: {
                phone: "Teléfono",
                location: "Ubicación",
              },
            },
            booking: {
              title: "Alojamientos",
              easyBooking: {
                title: "Selector Fácil",
                adults: "Número de adultos",
                children: "Número de niños",
                childrenDisclaimer: "Niños de 03 a 10 años.",
                selectDate: "Selecione o período",
                firstDay: "Primer día",
                lastDay: "Último día",
                services: "¿Servicios incluidos?",
                garage: "¿Cochera cubierta?",
                book: "Reservar",
                noOptions: "No hay opciones disponibles en esta selección",
                disclaimer: {
                  part1:
                    "Servicios: Desayuno, ropa de cama y baño y servicio de limpieza diario",
                  part2: "Cargo de limpieza al final de la estadía: $180,00",
                },
              },
              bookDisclaimer: {
                part1: "Valores válidos desde el ",
                part2: " hasta el ",
              },
              info: "Para obtener información sobre un apartamento, haga clic en su nombre y envíenos un mensaje de WhatsApp.",
              pricesDisclaimer:
                "Precios en reales (R$) por apartamento/por noche con desayuno",
              reservations: {
                part1: "Reservas con anticipación",
                part2: "Apartamentos estándar: 5 días",
                part3: "Apartamentos con cocina pequeña: 7 días",
              },
              headers: {
                ap: "Apartamentos",
                one: "1 Persona",
                two: "2 Personas",
                three: "3 Personas",
                four: "4 Personas",
                five: "5 Personas",
                children: "Tarifa para niños",
              },
              table: {
                line1: "Vista al Mar/Vista a la Piscina Simple*",
                line2: "Vista al Mar 1º Mar",
                line3: "Vista a la Piscina",
                line4: "Lateral al Mar y Vista a la Sierra",
                line5: "Conjunto Vista al Mar 1º Piso",
                line6: "Conjunto Vista al Mar, 02 baños con cocina pequeña",
                line7: "Conjunto Vista a la Sierra/Patio con cocina pequeña",
                obs: "* Apartamento Simple con ventilador de techo. En los demás apartamentos, hay aire acondicionado, siendo que en los conjuntos el aire acondicionado (12,000 BTU) está en solo una de las habitaciones y en la otra habitación hay un ventilador de techo.",
              },
              table2: {
                disclaimer: {
                  part1:
                    "Precios en reales (R$) en el apartamento con cocina pequeña/por noche ",
                  part2: "SIN SERVICIOS**",
                },
                line1: "Conjunto Vista al Mar, 02 baños con cocina pequeña",
                line2: "Conjunto Vista a la Sierra/Patio con cocina pequeña",
                obs: "* No incluye desayuno, ropa de cama y baño, y servicio de limpieza diaria ** Tarifa de limpieza al final de la estancia: R$ 180.00",
              },
              table3: {
                line1: {
                  part1: "Hasta 03 años",
                  part2: "Cortesía - Cuna para bebés disponible bajo solicitud",
                },
                line2: {
                  part1: "De 04 a 10 años",
                  part2:
                    "01 Niño: 10% de descuento aplicado al número total de personas",
                  part3:
                    "02 Niños: 15% de descuento aplicado al número total de personas",
                  part4:
                    "03 Niños: 20% de descuento aplicado al número total de personas",
                },
              },
              garage: "Tarifa de Cochera Cubierta: R$ 30,00 por día",
              customMessage:
                "¡Hola! Llegué al sitio web, me gustaría obtener información sobre el ",
            },
            location: {
              title: "Ubicación",
              first: "¡Llegar al Hotel Sereia es extremadamente sencillo!",
              seccond:
                "Al ingresar a Arroio do Sal por la entrada principal (Av. Assis Brasil), simplemente síguela hasta el final, en Av. Beira Mar, gira a la derecha y luego estamos en la segunda cuadra a tu derecha.",
              third:
                "Mientras te diriges hacia nosotros, pasarás por varios restaurantes; es una buena idea tomar nota de ellos para visitarlos más tarde. ¡Y lo más importante, nuestra hermosa playa está justo enfrente!",
            },
            pictures: {
              title: "Más fotos",
              tip: "Haga clic en la imagen para ampliarla",
              pictureList: {
                1: "Apartamento Doble con Vista al Mar",
                2: "Habitación Doble con Vista al Mar",
                3: "Habitación Doble en Planta Baja",
                4: "Patio Interior",
                5: "Patio Interior - Piscina",
                6: "Sala de Estar",
                7: "Área de Descanso con Hamacas",
              },
            },
          },
          whatsMessage:
            "¡Hola! Vine desde el sitio web, me gustaría obtener información.",
        },
      },
    },
  });

export default i18n;
