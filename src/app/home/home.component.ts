import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  get medias() {
    return this._medias.results
  }

  _medias: any = {
    "results": [
      {
        "vote_count": 3376,
        "id": 346364,
        "video": false,
        "vote_average": 7.3,
        "title": "Ça",
        "popularity": 1062.982479,
        "poster_path": "/3SUz0F0I2Bodcj9Ev2pYSWnE9zp.jpg",
        "original_language": "en",
        "original_title": "It",
        "genre_ids": [
          18,
          27,
          53
        ],
        "backdrop_path": "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
        "adult": false,
        "overview": "À Derry, dans le Maine, sept gamins ayant du mal à s'intégrer se sont regroupés au sein du \"Club des Ratés\". Rejetés par leurs camarades, ils sont les cibles favorites des gros durs de l'école. Ils ont aussi en commun d'avoir éprouvé leur plus grande terreur face à un terrible prédateur métamorphe qu'ils appellent \"Ça\"…",
        "release_date": "2017-09-05"
      },
      {
        "vote_count": 895,
        "id": 284053,
        "video": false,
        "vote_average": 7.7,
        "title": "Thor : Ragnarok",
        "popularity": 870.787232,
        "poster_path": "/bsvp3bNGpGd7ASuOp3KOjUZZWZr.jpg",
        "original_language": "en",
        "original_title": "Thor: Ragnarok",
        "genre_ids": [
          28,
          12,
          35,
          14,
          878
        ],
        "backdrop_path": "/wBzMnQ01R9w58W6ucltdYfOyP4j.jpg",
        "adult": false,
        "overview": "Thor est emprisonné de l’autre côté de l’univers sans son puissant marteau et se retrouve engagé dans une course contre le temps pour rejoindre Asgard et arrêter Ragnarok – la destruction de son monde natal et la fin de la civilisation Asgardienne – des mains d’une toute nouvelle menace, l’impitoyable Hela. Mais d’abord, il doit survivre à une compétition meurtrière de gladiateurs qui l’oppose à son ancien allié et compagnon Avenger – l’Incroyable Hulk !",
        "release_date": "2017-10-25"
      },
      {
        "vote_count": 171,
        "id": 440021,
        "video": false,
        "vote_average": 6.4,
        "title": "Happy Birthdead",
        "popularity": 604.880082,
        "poster_path": "/pIQ4zdQ9W3xLDnoUGsfQRCoJK4p.jpg",
        "original_language": "en",
        "original_title": "Happy Death Day",
        "genre_ids": [
          27,
          9648,
          53
        ],
        "backdrop_path": "/eGx5OfOdvM0gkHdmkLe3hcJuEIT.jpg",
        "adult": false,
        "overview": "Teresa, une jeune lycéenne, est perturbée lorsqu'elle découvre qu'elle revit inlassablement la même journée. Une journée apparamment ordinaire mais qui s'achève toujours par sa mort brutale...",
        "release_date": "2017-10-12"
      },
      {
        "vote_count": 1486,
        "id": 335984,
        "video": false,
        "vote_average": 7.5,
        "title": "Blade Runner 2049",
        "popularity": 566.755434,
        "poster_path": "/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg",
        "original_language": "en",
        "original_title": "Blade Runner 2049",
        "genre_ids": [
          28,
          9648,
          878,
          53
        ],
        "backdrop_path": "/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg",
        "adult": false,
        "overview": "En 2049, la société est fragilisée par les nombreuses tensions entre les humains et leurs esclaves créés par bioingénierie. L’officier K est un Blade Runner : il fait partie d’une force d’intervention d’élite chargée de trouver et d’éliminer ceux qui n’obéissent pas aux ordres des humains. Lorsqu’il découvre un secret enfoui depuis longtemps et capable de changer le monde, les plus hautes instances décident que c’est à son tour d’être traqué et éliminé. Son seul espoir est de retrouver Rick Deckard, un ancien Blade Runner qui a disparu depuis des décennies...",
        "release_date": "2017-10-04"
      },
      {
        "vote_count": 124,
        "id": 298250,
        "video": false,
        "vote_average": 5.9,
        "title": "Jigsaw",
        "popularity": 499.76134,
        "poster_path": "/pFecI8W7i2hVePUKGNyeuVoLDd2.jpg",
        "original_language": "en",
        "original_title": "Jigsaw",
        "genre_ids": [
          27,
          53
        ],
        "backdrop_path": "/ytKpFaLMpFWnuSXStz1GHrtTt6R.jpg",
        "adult": false,
        "overview": "Après une série de meurtres qui ressemblent étrangement à ceux de Jigsaw, le tueur au puzzle, la police se lance à la poursuite d'un homme mort dpuis plus de dix ans. Un nouveau jeu vient de commencer... John Kramer est-il revenu d'entre les morts pour rappeler au monde qu'il faut sans cesse célébrer la vie, ou bien s'agit-il d'un piège tendu par un assassin qui poursuit d'autres ambitions ?",
        "release_date": "2017-10-20"
      },
      {
        "vote_count": 185,
        "id": 274855,
        "video": false,
        "vote_average": 5.8,
        "title": "Geostorm",
        "popularity": 459.167147,
        "poster_path": "/nrsx0jEaBgXq4PWo7SooSnYJTv.jpg",
        "original_language": "en",
        "original_title": "Geostorm",
        "genre_ids": [
          28,
          878,
          53
        ],
        "backdrop_path": "/lhTtnsPmEYUJB7nOaTKJzYoxJ7X.jpg",
        "adult": false,
        "overview": "Le jour où des satellites chargés de contrôler le climat se mettent à défaillir, un designer doit travailler main dans la main avec son frère pour sauver le monde d'une terrible tempête.",
        "release_date": "2017-10-13"
      },
      {
        "vote_count": 2153,
        "id": 281338,
        "video": false,
        "vote_average": 6.8,
        "title": "La Planète des Singes - Suprématie",
        "popularity": 390.54651,
        "poster_path": "/4Ar01t6sW1ZZBcbz2R1wqjzIBdr.jpg",
        "original_language": "en",
        "original_title": "War for the Planet of the Apes",
        "genre_ids": [
          18,
          878,
          10752
        ],
        "backdrop_path": "/ulMscezy9YX0bhknvJbZoUgQxO5.jpg",
        "adult": false,
        "overview": "César et les Singes sont contraints de mener un combat dont ils ne veulent pas contre une armée d'Humains dirigée par un Colonel impitoyable. Les Singes connaissent des pertes considérables et César, dans sa quête de vengeance, va devoir lutter contre ses instincts les plus noirs. Au terme d’un périple qui le conduira à un face à face avec le Colonel, les Singes et les Humains vont se livrer une guerre sans merci à l’issue de laquelle une seule des deux espèces survivra - et dominera la planète.",
        "release_date": "2017-07-11"
      },
      {
        "vote_count": 378,
        "id": 337170,
        "video": false,
        "vote_average": 6.3,
        "title": "Barry Seal : American Traffic",
        "popularity": 374.566018,
        "poster_path": "/klN2Aw9EZlhGUoLFw8EdqsFD2Zf.jpg",
        "original_language": "en",
        "original_title": "American Made",
        "genre_ids": [
          35,
          28,
          80,
          53
        ],
        "backdrop_path": "/jcKzxRGYiXuS7ctTHLdw9wH8d7V.jpg",
        "adult": false,
        "overview": "L'histoire vraie d'un trafiquant de drogue qui a oeuvré pour la CIA et le cartel de Medellin dans les années 80.  Une escapade internationale,basée sur les exploits incroyables mais vrais de Barry Seal, un pilote arnaqueur recruté de manière inattendue par la CIA afin de mener à bien l’une des plus grosses opérations secrètes de l’histoire des Etats-Unis.",
        "release_date": "2017-08-17"
      },
      {
        "vote_count": 92,
        "id": 390062,
        "video": false,
        "vote_average": 5.4,
        "title": "Jungle",
        "popularity": 371.523755,
        "poster_path": "/tDgxknTVwrScxpCYyGUjXSn5NRk.jpg",
        "original_language": "en",
        "original_title": "Jungle",
        "genre_ids": [
          12,
          18,
          53
        ],
        "backdrop_path": "/go1a6YwrVTMrNNIfaRpBRp5pIzV.jpg",
        "adult": false,
        "overview": "Yossi Ghinsberg et deux de ses amis ont survécu pendant trois semaines dans une partie inexplorée de la jungle amazonienne.",
        "release_date": "2017-10-20"
      },
      {
        "vote_count": 129,
        "id": 372343,
        "video": false,
        "vote_average": 5.1,
        "title": "Le Bonhomme de neige",
        "popularity": 300.60763,
        "poster_path": "/wEQzQzAY3oqkPp4FN2jmbFGFVaa.jpg",
        "original_language": "en",
        "original_title": "The Snowman",
        "genre_ids": [
          80,
          18,
          27,
          9648,
          53
        ],
        "backdrop_path": "/tAg6KUBANIVbYUpTHy5oKibhhw3.jpg",
        "adult": false,
        "overview": "Après la disparition mystérieuse d'une mère de famille, ne reste plus d'elle que l'écharpe offerte par son fils, enroulée autour d'un bonhomme de neige apparu dans son jardin. Le détective Harry Hole mène l'enquête.",
        "release_date": "2017-10-12"
      },
      {
        "vote_count": 29,
        "id": 399057,
        "video": false,
        "vote_average": 5.5,
        "title": "Mise à Mort du Cerf Sacré",
        "popularity": 251.017531,
        "poster_path": "/fbCY7Cwgvzs6LGmwr0QFrkcApMn.jpg",
        "original_language": "en",
        "original_title": "The Killing of a Sacred Deer",
        "genre_ids": [
          53,
          27,
          18,
          9648
        ],
        "backdrop_path": "/854uDv6rzbwF82jOtFe931SMrRs.jpg",
        "adult": false,
        "overview": "Un brillant chirurgien prend sous son aile un jeune adolescent. Dans un premier temps, ce dernier s’immisce au sein de cette famille et en perturbe progressivement le quotidien. Il devient de plus en plus inquiétant, menaçant. Une seule issue possible : un impensable sacrifice.",
        "release_date": "2017-10-20"
      },
      {
        "vote_count": 61,
        "id": 459202,
        "video": false,
        "vote_average": 5.3,
        "title": "Boo 2! A Madea Halloween",
        "popularity": 248.910471,
        "poster_path": "/5nvP4etJ8ecQv8qZM08dK4BAzdK.jpg",
        "original_language": "en",
        "original_title": "Boo 2! A Madea Halloween",
        "genre_ids": [
          27,
          35
        ],
        "backdrop_path": "/78kN1a1AHxAPEh7hQhNjDQhLZ9W.jpg",
        "adult": false,
        "overview": "Madea, Bam et Hattie débarquent dans un camp de vacances où monstres et boogeymen se sont donnés rendez-vous.",
        "release_date": "2017-10-20"
      },
      {
        "vote_count": 22,
        "id": 395458,
        "video": false,
        "vote_average": 5.3,
        "title": "Bienvenue à Suburbicon",
        "popularity": 242.330793,
        "poster_path": "/ufSiIkcBUsaHnYVufiJbmB0Neyv.jpg",
        "original_language": "en",
        "original_title": "Suburbicon",
        "genre_ids": [
          18,
          28,
          80,
          9648
        ],
        "backdrop_path": "/zA5zlFVa76LdHmlFQrXaBW4XSvG.jpg",
        "adult": false,
        "overview": "Suburbicon est une paisible petite ville résidentielle aux maisons abordables et aux pelouses impeccablement entretenues, l’endroit parfait pour une vie de famille. Durant l’été 1959, tous les résidents semblent vivre leur rêve américain dans cette parcelle de paradis. Pourtant, sous cette apparente tranquillité, entre les murs de ces pavillons, se cache une réalité tout autre faite de mensonge, de trahison, de duperie et de violence... Bienvenue à Suburbicon.",
        "release_date": "2017-10-27"
      },
      {
        "vote_count": 10,
        "id": 383709,
        "video": false,
        "vote_average": 5.2,
        "title": "Le Musée des merveilles",
        "popularity": 237.337255,
        "poster_path": "/epW2sQLJvjrW4PyYAvmocw9FKPj.jpg",
        "original_language": "en",
        "original_title": "Wonderstruck",
        "genre_ids": [
          18
        ],
        "backdrop_path": "/eUSNKg5tlocYAQs5nHlDxyAefuB.jpg",
        "adult": false,
        "overview": "Sur deux époques distinctes, les parcours de Ben et Rose. Ces deux enfants souhaitent secrètement que leur vie soit différente ; Ben rêve du père qu'il n'a jamais connu, tandis que Rose, isolée par sa surdité, se passionne pour la carrière d'une mystérieuse actrice. Lorsque Ben découvre dans les affaires de sa mère l’indice qui pourrait le conduire à son père et que Rose apprend que son idole sera bientôt sur scène, les deux enfants se lancent dans une quête à la symétrie fascinante qui va les mener à New York.",
        "release_date": "2017-10-20"
      },
      {
        "vote_count": 17,
        "id": 395991,
        "video": false,
        "vote_average": 5.3,
        "title": "Only the Brave",
        "popularity": 234.503794,
        "poster_path": "/lC7WdUNLOJI3sllaDGNdFy2GT8g.jpg",
        "original_language": "en",
        "original_title": "Only the Brave",
        "genre_ids": [
          18
        ],
        "backdrop_path": "/8wI0M7HDHhDsoxMCkcAVUx7O6DX.jpg",
        "adult": false,
        "overview": "Inspiré d'une histoire vraie. En juin 2013, les pompiers d'élite de Prescott en Arizona ont tenté d'éteindre un gigantesque incendie qui a coûté la vie de 19 d'entre-eux.",
        "release_date": "2017-10-19"
      },
      {
        "vote_count": 12,
        "id": 413857,
        "video": false,
        "vote_average": 2.5,
        "title": "Tragedy Girls",
        "popularity": 229.948406,
        "poster_path": "/qMwuplUU4dg9JBBhgML42T6x0yJ.jpg",
        "original_language": "en",
        "original_title": "Tragedy Girls",
        "genre_ids": [
          27,
          35
        ],
        "backdrop_path": "/t8mrHYeVzu4kTmgVArqL09hi5f6.jpg",
        "adult": false,
        "overview": "McKayla et Sadie sont meilleures amies. Pas étonnant, puisque les deux lycéennes partagent la même obsession pour les réseaux sociaux et rêvent d’accéder à la célébrité 2.0. Mais pas comme tout le monde : pour générer un maximum d’attention, elles kidnappent un tueur en série et l’obligent à leur apprendre le « métier ». Elles comptent ainsi créer le buzz elles-mêmes en faisant le boulot à sa place. Pourquoi courir après l’information quand on peut la générer ?",
        "release_date": "2017-10-20"
      },
      {
        "vote_count": 29,
        "id": 398175,
        "video": false,
        "vote_average": 6.9,
        "title": "Brawl in Cell Block 99",
        "popularity": 226.350419,
        "poster_path": "/bfB1J6jsjdGWKjXxKQ5hNd1OyAs.jpg",
        "original_language": "en",
        "original_title": "Brawl in Cell Block 99",
        "genre_ids": [
          28,
          80,
          53
        ],
        "backdrop_path": "/p57KuXI3GbdBEyQ26ImwMRNGyIc.jpg",
        "adult": false,
        "overview": "Bradley est un ancien boxeur dont le mariage s'effondre va également perdre son travail comme mécanicien. Il devient alors coursier pour un trafiquant de drogues.",
        "release_date": "2017-10-06"
      },
      {
        "vote_count": 5,
        "id": 300687,
        "video": false,
        "vote_average": 5.5,
        "title": "Same Kind of Different as Me",
        "popularity": 226.053534,
        "poster_path": "/cCTwHtXBVL96ImKDwm5T8pPNO41.jpg",
        "original_language": "en",
        "original_title": "Same Kind of Different as Me",
        "genre_ids": [
          18
        ],
        "backdrop_path": "/5D8DfGzbNzjbvs3mvw4MTCSPwKw.jpg",
        "adult": false,
        "overview": "L'amitié improbable entre un marchand d'art et un vagabond.",
        "release_date": "2017-10-20"
      },
      {
        "vote_count": 10,
        "id": 345923,
        "video": false,
        "vote_average": 4.3,
        "title": "Je ne vois que toi",
        "popularity": 224.909099,
        "poster_path": "/wc9MgFWuBl3VS72w6VtiZXTgN79.jpg",
        "original_language": "en",
        "original_title": "All I See Is You",
        "genre_ids": [
          18,
          53
        ],
        "backdrop_path": "/mJHSPIvKoa1gwrdAMXWWq5utx3b.jpg",
        "adult": false,
        "overview": "Quand Gina, aveugle depuis l'enfance, recouvre la vue, elle a le sentiment de revivre. Pourtant, elle est perturbée par ce qu'elle découvre soudain sur son couple… James, son mari, est prêt à tout pour empêcher Gina de s'aventurer hors du domicile conjugal. Mais la jeune femme, qui a retrouvé confiance en elle, n'hésite pas à user de stratagèmes et de son pouvoir de séduction pour mettre au jour la malhonnêteté de son mari…",
        "release_date": "2017-08-10"
      },
      {
        "vote_count": 66,
        "id": 290512,
        "video": false,
        "vote_average": 6.5,
        "title": "La Montagne entre nous",
        "popularity": 217.79979,
        "poster_path": "/3XNfYTW4XGscI81nXMSWGsQ8cpu.jpg",
        "original_language": "en",
        "original_title": "The Mountain Between Us",
        "genre_ids": [
          10749,
          12,
          18
        ],
        "backdrop_path": "/p7mUT8Usu1kNlfd1ugk6FwKejlo.jpg",
        "adult": false,
        "overview": "Livrés à eux-mêmes après le crash de leur avion en pleine montagne, deux étrangers doivent compter l’un sur l’autre pour faire face aux conditions extrêmes. Réalisant qu’ils n’ont aucun espoir d’être secourus, ils tentent leur chance à travers des centaines de kilomètres de nature hostile, acceptant que ce n’est qu’ensemble qu’ils pourront trouver le courage de tenter de survivre.",
        "release_date": "2017-10-05"
      }
    ],
    "page": 1,
    "total_results": 1071,
    "dates": {
      "maximum": "2017-11-11",
      "minimum": "2017-09-23"
    },
    "total_pages": 54
  }

}
