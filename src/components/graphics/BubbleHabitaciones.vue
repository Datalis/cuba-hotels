<template>
    <Highcharts ref="bubbleHabs" :options="chartOptions"/>
</template>

<script>
    import Highcharts from "highcharts";
    import {genComponent} from "vue-highcharts";
    import boost from 'highcharts/modules/boost'

    require('highcharts/modules/exporting')(Highcharts);
    require('highcharts/highcharts-more.js')(Highcharts);
    boost(Highcharts)

    export default {
        name: "BubbleHabitaciones",
        components: {
            Highcharts: genComponent('Highcharts', Highcharts),
        },
        data() {
            return {
                Highcharts: Highcharts,
                chartOptions: {
                    chart: {
                        type: 'packedbubble',
                        height: '100%'
                    },
                    title: {
                        text: 'Cadenas extranjeras presentes en Cuba'
                    },
                    subtitle: {
                        text: 'Fuente: Elaboración a partir de base de datos propia'
                    },
                    tooltip: {
                        useHTML: true,
                        pointFormat: '<b>{point.name}:</b> {point.value} habitaciones <br> <p>{point.fact}</p>'
                    },
                    colors: ['#3a3d59', '#f6ab68', '#6d889b', '#3a3d59', '#f6ab68', '#ec6c5e', '#3a3d59', '#f6ab68', '#4c2b37', '#9c8986', '#6d889b', '#eb6375', '#f19384'],
                    plotOptions: {
                        packedbubble: {
                            minSize: '30%',
                            maxSize: '120%',
                            zMin: 0,
                            zMax: 1000,
                            layoutAlgorithm: {
                                splitSeries: false,
                                gravitationalConstant: 0.02
                            },
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}',
                                style: {
                                    color: 'black',
                                    textOutline: 'none',
                                    fontWeight: 'normal'
                                }
                            }
                        }
                    },
                    series: [
                        {
                            "color": '#3a3d59',
                            "data": [
                                {
                                    "fact": "Está en Cuba desde enero de 2018 y quieren ir creciendo poco a poco. Especializados en instalaciones de alto estándar, su segundo hotel será El Paseo del Prado de la Habana, uno de los 5 estrellas plus de la Habana.",
                                    "name": "Accor",
                                    "value": 816
                                },
                                {
                                    "fact": "Tiene dos hoteles bajo la marca Golden Tulip y aunque lleva solo 2 años en Cuba, antes había tenido otra experiencia porque fue la marca que abrió el hotel Parque Central.",
                                    "name": "Louvre Hotel",
                                    "value": 897
                                }
                            ],
                            "name": "Francia"
                        },
                        {
                            "color": '#f6ab68',
                            "data": [
                                {
                                    "fact": "Fundada en 1997 y anteriormente conocido como Aston International, es la una cadena de gestión hotelera de servicio completo más grande de Indonesia. Es la última en llegar a Cuba en 2019.",
                                    "name": "Archipelago International",
                                    "value": 770
                                }
                            ],
                            "name": "Indonesia"
                        },
                        {
                            "color": '#6d889b',
                            "data": [
                                {
                                    "fact": "Posee más de 60 hoteles alrededor del mundo, ubicados en su mayoría en destinos como Indonesia, Singapur, Tailandia, Laos y China. Su entrada al mercado cubano se dio en 2017 y tiene otros dos proyectos confirmados con Gaviota.",
                                    "name": "Banyan Tree Hotels & Resorts",
                                    "value": 812
                                }
                            ],
                            "name": "Singapur"
                        },
                        {
                            "color": '#ec6c5e',
                            "data": [
                                {
                                    "fact": "Es la compañía de Resort de más rápido crecimiento en el Caribe y tienen proyectos de ampliación para 2019 en Cuba. Pertenece a Sondwing TMD Group, el mayor consorcio turístico canadiense, que además opera más de 100 vuelos charters a Cuba. ",
                                    "name": "Blue Diamond Resort",
                                    "value": 8853
                                }
                            ],
                            "name": "Canadá"
                        },
                        {
                            "color": '#f6ab68',
                            "data": [
                                {
                                    "fact": "Es uno de los mayores del mundo, con más de 180 hoteles y 26 mil habitaciones solo en México. La apuesta de Posadas es por el destino Caribe, a través de sus marcas Fiesta América, en países como Cuba y Domincana.",
                                    "name": "Grupo Posadas",
                                    "value": 1382
                                }
                            ],
                            "name": "México"
                        },
                        {
                            "color": '#3a3d59',
                            "data": [
                                {
                                    "fact": "Poseen intereses en todo el Caribe y están presentes en Cuba desde 2012. Todos sus negocios en la Isla han tenido a Gaviota como contraparte cubana.",
                                    "name": "H10 Hotels",
                                    "value": 2041
                                },
                                {
                                    "fact": "Cuenta con 130 hoteles en 18 países y es Cuba el lugar donde más crecen desde hace 25 años. El 7 de diciembre de 2018 inauguró, en la Zona de Desarrollo de Mariel, su propia importadora de suministros LHC para abastecer a sus hoteles.",
                                    "name": "Iberostar",
                                    "value": 6709
                                },
                                {
                                    "fact": "Es la primera cadena de España, la segunda de Europa, y se encuentra entre las diez principales del mundo. Posee 380 hoteles con 96 000 habitaciones en 40 países. Su red de hoteles y complejos se comercializan bajo las marcas Meliá, ME by Melia, Tryp, Sol, Gran Meliá, Innside y Paradisus. Es la que más instalaciones hoteleras gestiona en Cuba.",
                                    "name": "Meliá Hotel International",
                                    "value": 14732
                                },
                                {
                                    "fact": "Valentín Hotel Group gestiona en la actualidad un total de 3 415 habitaciones en once instalacione. Nueve de ellos en España, otro en México y uno en Cuba. En noviembre de 2019 inaugurarán su segundo hotel en Cuba.",
                                    "name": "Valentin Hotel & Resorts",
                                    "value": 1020
                                },
                                {
                                    "fact": "Cuenta con más de 10 mil habitaciones en 34 establecimientos en España, Portugal, Marruecos, El Caribe y Colombia. A Cuba llegó desde el año 2008 y está próxima a abrir su octavo hotel.",
                                    "name": "Be Live",
                                    "value": 1351
                                },
                                {
                                    "fact": "Actualmente solo maneja dos hoteles en Cuba, uno desde el año 2005 y el otro con un reciente contrato en 2019.",
                                    "name": "BLAU Hotels & Resorts",
                                    "value": 395
                                },
                                {
                                    "fact": "Está integrado por más de 250 hoteles distribuidos en 22 países, aunque en solo Cuba tienen tres, todos en la zona de Varadero. Iniciaron el primer contrato de administración en Cuba en 2002.",
                                    "name": "Barceló",
                                    "value": 1353
                                },
                                {
                                    "fact": "Se especializa en destinos de ciudad con más de 400 hoteles alrededor del mundo. En Cuba trabaja actualmente en dos hoteles: Capri y Victoria, ambos en La Habana. En todos sus proyectos ha invertido dinero para reparaciones y tiene previsto ampliar sus operaciones.",
                                    "name": "NH Hoteles",
                                    "value": 251
                                },
                                {
                                    "fact": "Presente desde 2013 en Cuba, solo posee tres hoteles en el país: Presidente, Arenas Doradas y Barlovento. Todas las instalaciones administradas por Roc son propiedad de Gran Caribe. Actualmente sus contratos en Cuba son solo de administración.",
                                    "name": "ROC Hotels",
                                    "value": 760
                                }
                            ],
                            "name": "España"
                        },
                        {
                            "color": '#3a3d59',
                            "data": [
                                {
                                    "fact": "Creado en 1897, es el grupo de hoteles de lujo más antiguo de Europa. Administra una cartera de 78 hoteles y residencias de cinco estrellas en 34 países y continúa agregando nuevas propiedades en Europa, Medio Oriente, África y Asia. Kempinski es miembro fundador de Global Hotel Alliance (GHA). En Cuba administra desde el año 2017 el primer Hotel cinco estrellas plus.",
                                    "name": "Kempinski Hotels",
                                    "value": 246
                                }
                            ],
                            "name": "Suiza"
                        },
                        {
                            "color": '#f6ab68',
                            "data": [
                                {
                                    "fact": "Marca alemana comercializada por Meeting Point Hotels, cadena adscrita al tercer turoperdor de Alemania. Fundada en 2015, Labranda administra cerca de 72 hoteles en destinos como Islas Canarias, Turquía, Egipto, Calabria, Grecia y desde noviembre de 2018 Cuba. Su producto es de sol y playa, enfocada en el mercado europeo y en el sector de familia.",
                                    "name": "Labranda Hotel & Resort",
                                    "value": 1243
                                }
                            ],
                            "name": "Alemania"
                        },
                        {
                            "color": '#4c2b37',
                            "data": [
                                {
                                    "fact": "Es la única cadena estadounidense de hoteles de lujo en Cuba. Llegó en 2016, después de la apertura de relaciones diplomáticas entre ambos países, y actualmente gestiona dos hoteles.",
                                    "name": "Marriott",
                                    "value": 269
                                }
                            ],
                            "name": "Estados Unidos"
                        },
                        {
                            "color": '#9c8986',
                            "data": [
                                {
                                    "fact": "Presente en Cuba desde agosto de 2017. Actualmente cuentan con 4 hoteles y tienen proyectos de ampliación en La Habana, Varadero y Cayo Santamaría. Trabajan para un segmento de mercado amplio, pero tienen un producto exclusivo indio, como la comida y la realización de bodas indú.",
                                    "name": "MGM Muthu Hotels",
                                    "value": 1385
                                }
                            ],
                            "name": "India"
                        },
                        {
                            "color": '#6d889b',
                            "data": [
                                {
                                    "fact": "Con más de 11.000 habitaciones, Pestana Hotel Group cada año atrae a más de tres millones de viajeros a sus hoteles de cuatro y cinco estrellas en 14 países. En Cuba cuenta con una sola instalación.",
                                    "name": "Pestana Hoteles y Resorts",
                                    "value": 508
                                }
                            ],
                            "name": "Portugal"
                        },
                        {
                            "color": '#f19384',
                            "data": [
                                {
                                    "fact": "Tiene más de 20 años de experiencia en la gestión hotelera en instalaciones de 3 estrellas, con negocios en varios países europeos. En Cuba tiene presencia en La Habana y Trinidad y se encuentra en negociaciones para adquirir otro hotel de playa.",
                                    "name": "Elite Club Vacanze",
                                    "value": 444
                                }
                            ],
                            "name": "Italia"
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>