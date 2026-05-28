import { Prisma } from "@prisma/client";

export const seedMovies: Prisma.MovieCreateInput[] = [
  {
    title: "The Dark Knight",
    description: "เมื่อโจ๊กเกอร์อาชญากรสุดอันตรายสร้างความโกลาหลให้เมืองก็อตแธม แบทแมนต้องเผชิญบททดสอบทั้งร่างกายและจิตใจครั้งใหญ่ในการปกป้องความยุติธรรม",
    thumbnail: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    category: "Action",
    matchRate: 98,
    year: 2008,
    duration: 152,
    views: 1250000,
    ageRating: "R",
    university: "Gotham University",
    crew: {
      create: {
        director: "Christopher Nolan",
        producer: "Emma Thomas",
        writer: "Jonathan Nolan, Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        btsVideo: "https://www.youtube.com/watch?v=u8M3z0gHk3c",
        btsPhotos: ["https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0"]
      }
    }
  },
  {
    title: "Inception",
    description: "หัวขโมยผู้เชี่ยวชาญด้านการแทรกซึมความฝันได้รับภารกิจปลูกฝังความคิดในจิตใจของซีอีโอ แต่เรื่องราวในอดีตของเขาอาจทำให้ทุกอย่างล้มเหลว",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    category: "Sci-Fi",
    matchRate: 88,
    year: 2010,
    duration: 148,
    views: 890000,
    ageRating: "PG-13",
    university: "Paris Sorbonne University",
    crew: {
      create: {
        director: "Christopher Nolan",
        producer: "Emma Thomas",
        writer: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1536440136628-849c177e76a1"]
      }
    }
  },
  {
    title: "Interstellar",
    description: "เมื่อโลกใกล้ไม่สามารถอยู่อาศัยได้อีกต่อไป ทีมนักสำรวจจึงเดินทางผ่านรูหนอนอวกาศเพื่อค้นหาความหวังในการอยู่รอดของมนุษยชาติ",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    category: "Sci-Fi",
    matchRate: 95,
    year: 2014,
    duration: 169,
    views: 950000,
    ageRating: "PG-13",
    university: "NASA Academy",
    crew: {
      create: {
        director: "Christopher Nolan",
        producer: "Emma Thomas",
        writer: "Jonathan Nolan, Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        btsVideo: "https://www.youtube.com/watch?v=l7O8VeaS3L8",
        btsPhotos: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa"]
      }
    }
  },
  {
    title: "The Godfather",
    description: "ดอน วีโต คอร์เลโอเน หัวหน้าตระกูลมาเฟีย ตัดสินใจส่งต่ออาณาจักรให้ลูกชายคนเล็ก แต่การตัดสินใจครั้งนี้กลับนำอันตรายมาสู่ครอบครัว",
    thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=UaVTIH8mujA",
    category: "Drama",
    matchRate: 99,
    year: 1972,
    duration: 175,
    views: 2000000,
    ageRating: "R",
    university: "Harvard University",
    crew: {
      create: {
        director: "Francis Ford Coppola",
        producer: "Albert S. Ruddy",
        writer: "Mario Puzo, Francis Ford Coppola",
        cast: ["Marlon Brando", "Al Pacino", "James Caan"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1509198397868-475647b2a1e5"]
      }
    }
  },
  {
    title: "Spirited Away",
    description: "เด็กหญิงวัย 10 ปีหลงเข้าไปในโลกแห่งเทพเจ้าและวิญญาณ ระหว่างการย้ายบ้าน พร้อมต้องหาทางช่วยพ่อแม่และกลับสู่โลกมนุษย์",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
    category: "Animation",
    matchRate: 97,
    year: 2001,
    duration: 125,
    views: 620000,
    ageRating: "PG",
    university: "Waseda University",
    crew: {
      create: {
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
        writer: "Hayao Miyazaki",
        cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
        btsVideo: "https://www.youtube.com/watch?v=3KR8_M-G9pA",
        btsPhotos: ["https://images.unsplash.com/photo-1578632767115-351597cf2477"]
      }
    }
  },
  {
    title: "La La Land",
    description: "นักเปียโนและนักแสดงสาวในลอสแอนเจลิสตกหลุมรักกัน ท่ามกลางความฝันและเส้นทางอาชีพที่อาจพาพวกเขาห่างไกลกัน",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
    category: "Romance",
    matchRate: 85,
    year: 2016,
    duration: 128,
    views: 450000,
    ageRating: "PG-13",
    university: "University of Southern California",
    crew: {
      create: {
        director: "Damien Chazelle",
        producer: "Fred Berger",
        writer: "Damien Chazelle",
        cast: ["Ryan Gosling", "Emma Stone", "Amiée Conn"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"]
      }
    }
  },
  {
    title: "Knives Out",
    description: "นักสืบเอกชนเข้ามาสืบสวนการเสียชีวิตปริศนาของหัวหน้าครอบครัวผู้มั่งคั่งและเต็มไปด้วยความขัดแย้ง",
    thumbnail: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
    category: "Comedy",
    matchRate: 92,
    year: 2019,
    duration: 130,
    views: 510000,
    ageRating: "PG-13",
    university: "Middletown University",
    crew: {
      create: {
        director: "Rian Johnson",
        producer: "Ram Bergman",
        writer: "Rian Johnson",
        cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1585647347483-22b66260dfff"]
      }
    }
  },
  {
    title: "Parasite",
    description: "ความโลภและชนชั้นทางสังคมทำให้ความสัมพันธ์ระหว่างครอบครัวยากจนและครอบครัวมหาเศรษฐีเริ่มบิดเบี้ยวและอันตราย",
    thumbnail: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
    category: "Thriller",
    matchRate: 96,
    year: 2019,
    duration: 132,
    views: 780000,
    ageRating: "R",
    university: "Seoul National University",
    crew: {
      create: {
        director: "Bong Joon Ho",
        producer: "Kwak Sin Ae",
        writer: "Bong Joon Ho, Han Jin Won",
        cast: ["Song Kang Ho", "Lee Sun Kyun", "Cho Yeo Jeong"],
        btsVideo: "https://www.youtube.com/watch?v=Xh0YpA9g9X8",
        btsPhotos: ["https://images.unsplash.com/photo-1594909122845-11baa439b7bf"]
      }
    }
  },
  {
    title: "Pulp Fiction",
    description: "เรื่องราวชีวิตของนักฆ่า นักมวย เจ้าพ่อ และโจรปล้นร้านอาหารเชื่อมโยงกันผ่านเหตุการณ์รุนแรงและการไถ่บาป",
    thumbnail: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=s7EgWkyY_lU",
    category: "Drama",
    matchRate: 94,
    year: 1994,
    duration: 154,
    views: 1100000,
    ageRating: "R",
    university: "University of Los Angeles",
    crew: {
      create: {
        director: "Quentin Tarantino",
        producer: "Lawrence Bender",
        writer: "Quentin Tarantino, Roger Avary",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1593085512500-5d55148d6f0d"]
      }
    }
  },
  {
    title: "The Matrix",
    description: "แฮกเกอร์หนุ่มค้นพบว่าชีวิตที่เขาอาศัยอยู่เป็นเพียงภาพลวงตาที่ถูกสร้างขึ้นโดยปัญญาประดิษฐ์อันชั่วร้าย",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    category: "Sci-Fi",
    matchRate: 95,
    year: 1999,
    duration: 136,
    views: 1300000,
    ageRating: "R",
    university: "Sydney Technical College",
    crew: {
      create: {
        director: "Lana Wachowski, Lilly Wachowski",
        producer: "Joel Silver",
        writer: "Lana Wachowski, Lilly Wachowski",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"]
      }
    }
  },
  {
    title: "Avengers: Endgame",
    description: "หลังเหตุการณ์ทำลายล้างจากธานอส เหล่าอเวนเจอร์ที่เหลือต้องรวมพลังอีกครั้งเพื่อกอบกู้จักรวาลและย้อนคืนทุกสิ่ง",
    thumbnail: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    category: "Action",
    matchRate: 96,
    year: 2019,
    duration: 181,
    views: 3500000,
    ageRating: "PG-13",
    university: "Avengers Academy",
    crew: {
      create: {
        director: "Anthony Russo, Joe Russo",
        producer: "Kevin Feige",
        writer: "Christopher Markus, Stephen McFeely",
        cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        btsVideo: "https://www.youtube.com/watch?v=u8M3z0gHk3c",
        btsPhotos: ["https://images.unsplash.com/photo-1635805737707-575885ab0820"]
      }
    }
  },
  {
    title: "Titanic",
    description: "หญิงสาวชนชั้นสูงตกหลุมรักศิลปินหนุ่มยากจนบนเรือไททานิค ท่ามกลางโศกนาฏกรรมครั้งประวัติศาสตร์",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=CHekzSiZ47I",
    category: "Romance",
    matchRate: 89,
    year: 1997,
    duration: 194,
    views: 2400000,
    ageRating: "PG-13",
    university: "Oxford University",
    crew: {
      create: {
        director: "James Cameron",
        producer: "James Cameron, Jon Landau",
        writer: "James Cameron",
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23"]
      }
    }
  },
  {
    title: "Jurassic Park",
    description: "สวนสนุกไดโนเสาร์ที่สร้างจากการโคลนนิ่งเกิดความวุ่นวาย เมื่อระบบรักษาความปลอดภัยล้มเหลวและไดโนเสาร์หลุดออกมา",
    thumbnail: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=QWBK657U9q4",
    category: "Adventure",
    matchRate: 91,
    year: 1993,
    duration: 127,
    views: 1800000,
    ageRating: "PG-13",
    university: "Stanford University",
    crew: {
      create: {
        director: "Steven Spielberg",
        producer: "Kathleen Kennedy, Gerald R. Molen",
        writer: "Michael Crichton, David Koepp",
        cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
        btsVideo: "https://www.youtube.com/watch?v=l7O8VeaS3L8",
        btsPhotos: ["https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7"]
      }
    }
  },
  {
    title: "The Shawshank Redemption",
    description: "มิตรภาพของนักโทษสองคนค่อย ๆ ก่อตัวขึ้นภายในเรือนจำ พร้อมความหวังและการไถ่บาปที่เปลี่ยนชีวิตพวกเขา",
    thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=PLl99DlL6b4",
    category: "Drama",
    matchRate: 98,
    year: 1994,
    duration: 142,
    views: 2100000,
    ageRating: "R",
    university: "Maine State University",
    crew: {
      create: {
        director: "Frank Darabont",
        producer: "Niki Marvin",
        writer: "Stephen King, Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"]
      }
    }
  },
  {
    title: "Gladiator",
    description: "อดีตนายพลโรมันออกเดินทางล้างแค้นจักรพรรดิผู้โหดเหี้ยมที่ฆ่าครอบครัวของเขาและส่งเขาไปเป็นทาส",
    thumbnail: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=P5ieIbInFpg",
    category: "Action",
    matchRate: 93,
    year: 2000,
    duration: 155,
    views: 1400000,
    ageRating: "R",
    university: "Rome University",
    crew: {
      create: {
        director: "Ridley Scott",
        producer: "Douglas Wick",
        writer: "David Franzoni, John Logan",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d"]
      }
    }
  },
  {
    title: "Whiplash",
    description: "มือกลองหนุ่มผู้มีความฝันต้องเผชิญครูสอนดนตรีสุดโหดที่ผลักดันลูกศิษย์จนถึงขีดจำกัด",
    thumbnail: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=7d_jQyGLDVc",
    category: "Music",
    matchRate: 92,
    year: 2014,
    duration: 106,
    views: 580000,
    ageRating: "R",
    university: "Shaffer Conservatory",
    crew: {
      create: {
        director: "Damien Chazelle",
        producer: "Jason Blum",
        writer: "Damien Chazelle",
        cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1511192336575-5a79af67a629"]
      }
    }
  },
  {
    title: "The Lion King",
    description: "ลูกสิงโตเจ้าชายต้องเผชิญการสูญเสียและเรียนรู้เส้นทางการเติบโตเพื่อกลับมาทวงบัลลังก์ของตน",
    thumbnail: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=lFzVJEksoDY",
    category: "Animation",
    matchRate: 95,
    year: 1994,
    duration: 88,
    views: 1900000,
    ageRating: "G",
    university: "Pride Lands Institute",
    crew: {
      create: {
        director: "Roger Allers, Rob Minkoff",
        producer: "Don Hahn",
        writer: "Irene Mecchi, Jonathan Roberts",
        cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        btsVideo: "https://www.youtube.com/watch?v=3KR8_M-G9pA",
        btsPhotos: ["https://images.unsplash.com/photo-1546182990-dffeafbe841d"]
      }
    }
  },
  {
    title: "Your Name",
    description: "วัยรุ่นชายหญิงสองคนสลับร่างกันอย่างลึกลับ และเริ่มสร้างสายสัมพันธ์ที่เปลี่ยนชีวิตของทั้งคู่",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=s0wTdCGKrJY",
    category: "Animation",
    matchRate: 96,
    year: 2016,
    duration: 106,
    views: 750000,
    ageRating: "PG",
    university: "Tokyo Metropolitan University",
    crew: {
      create: {
        director: "Makoto Shinkai",
        producer: "Genki Kawamura",
        writer: "Makoto Shinkai",
        cast: ["Ryunosuke Kamiki", "Mone Kamishiraishi"],
        btsVideo: "https://www.youtube.com/watch?v=3KR8_M-G9pA",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  },
  {
    title: "Coco",
    description: "เด็กชายผู้รักดนตรีเดินทางสู่ดินแดนแห่งความตายเพื่อค้นหาความจริงเกี่ยวกับครอบครัวและความฝันของตัวเอง",
    thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=Ga6RYejoS1I",
    category: "Animation",
    matchRate: 94,
    year: 2017,
    duration: 105,
    views: 920000,
    ageRating: "PG",
    university: "Santa Cecilia School",
    crew: {
      create: {
        director: "Lee Unkrich",
        producer: "Darla K. Anderson",
        writer: "Adrian Molina, Matthew Aldrich",
        cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
        btsVideo: "https://www.youtube.com/watch?v=3KR8_M-G9pA",
        btsPhotos: ["https://images.unsplash.com/photo-1518609878373-06d740f60d8b"]
      }
    }
  },
  {
    title: "Pee Mak",
    description: "ชายหนุ่มกลับบ้านหลังสงครามพร้อมเพื่อนสนิท แต่กลับพบข่าวลือว่าภรรยาของเขากลายเป็นผีไปแล้ว",
    thumbnail: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=5Vz5Y-yK_U0",
    category: "Comedy",
    matchRate: 97,
    year: 2013,
    duration: 115,
    views: 1500000,
    ageRating: "PG-13",
    university: "Thammasat University",
    crew: {
      create: {
        director: "Banjong Pisanthanakun",
        producer: "Chenchonnanee Suntornyanakit",
        writer: "Banjong Pisanthanakun",
        cast: ["Mario Maurer", "Davika Hoorne"],
        btsVideo: "https://www.youtube.com/watch?v=t5JvD90v-bM",
        btsPhotos: ["https://images.unsplash.com/photo-1509248961158-e54f6934749c"]
      }
    }
  },
  {
    title: "Bad Genius",
    description: "นักเรียนอัจฉริยะใช้ความสามารถในการโกงข้อสอบเพื่อหาเงิน จนนำไปสู่ภารกิจระดับนานาชาติ",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=CLHe8J_SNDc",
    category: "Thriller",
    matchRate: 96,
    year: 2017,
    duration: 130,
    views: 990000,
    ageRating: "PG-13",
    university: "Chulalongkorn University",
    crew: {
      create: {
        director: "Nattawut Poonpiriya",
        producer: "Jira Maligool",
        writer: "Nattawut Poonpiriya",
        cast: ["Chutimon Chuengcharoensukying", "Chanon Santinatornkul"],
        btsVideo: "https://www.youtube.com/watch?v=Xh0YpA9g9X8",
        btsPhotos: ["https://images.unsplash.com/photo-1434030216411-0b793f4b4173"]
      }
    }
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    description: "ไมลส์ โมราเลสต้องร่วมมือกับสไปเดอร์แมนจากหลายมิติเพื่อหยุดภัยคุกคามที่อาจทำลายทุกจักรวาล",
    thumbnail: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=g4Hbz2yLXGE",
    category: "Animation",
    matchRate: 95,
    year: 2018,
    duration: 117,
    views: 1400000,
    ageRating: "PG",
    university: "Brooklyn Visions Academy",
    crew: {
      create: {
        director: "Bob Persichetti, Peter Ramsey",
        producer: "Avi Arad, Amy Pascal",
        writer: "Phil Lord, Rodney Rothman",
        cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
        btsVideo: "https://www.youtube.com/watch?v=3KR8_M-G9pA",
        btsPhotos: ["https://images.unsplash.com/photo-1608889175123-8ee362201f81"]
      }
    }
  },
  {
    title: "Dune",
    description: "ทายาทตระกูลขุนนางต้องเข้าไปพัวพันกับสงครามแย่งชิงทรัพยากรล้ำค่าที่สุดในจักรวาล",
    thumbnail: "https://images.unsplash.com/photo-1547483238-f400e65ccd56?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=n9DwoQ7HWvI",
    category: "Sci-Fi",
    matchRate: 91,
    year: 2021,
    duration: 155,
    views: 1200000,
    ageRating: "PG-13",
    university: "Imperial Academy",
    crew: {
      create: {
        director: "Denis Villeneuve",
        producer: "Mary Parent, Cale Boyter",
        writer: "Jon Spaihts, Denis Villeneuve",
        cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
        btsVideo: "https://www.youtube.com/watch?v=l7O8VeaS3L8",
        btsPhotos: ["https://images.unsplash.com/photo-1547483238-f400e65ccd56"]
      }
    }
  },
  {
    title: "Mad Max: Fury Road",
    description: "หญิงสาวผู้กล้าหาญร่วมมือกับแม็กซ์เพื่อหลบหนีจากทรราชในโลกหลังหายนะอันโหดร้าย",
    thumbnail: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    category: "Action",
    matchRate: 94,
    year: 2015,
    duration: 120,
    views: 1100000,
    ageRating: "R",
    university: "Citadel Academy",
    crew: {
      create: {
        director: "George Miller",
        producer: "Doug Mitchell, George Miller",
        writer: "George Miller, Brendan McCarthy",
        cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        btsVideo: "https://www.youtube.com/watch?v=u8M3z0gHk3c",
        btsPhotos: ["https://images.unsplash.com/photo-1514539079130-25950c84af65"]
      }
    }
  },
  {
    title: "Get Out",
    description: "ชายหนุ่มเริ่มสงสัยครอบครัวของแฟนสาวระหว่างการไปเยือนบ้าน และค้นพบความลับสุดสยอง",
    thumbnail: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=sRfnebToHE4",
    category: "Thriller",
    matchRate: 92,
    year: 2017,
    duration: 104,
    views: 890000,
    ageRating: "R",
    university: "SUNY Purchase",
    crew: {
      create: {
        director: "Jordan Peele",
        producer: "Sean McKittrick, Jason Blum",
        writer: "Jordan Peele",
        cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
        btsVideo: "https://www.youtube.com/watch?v=Xh0YpA9g9X8",
        btsPhotos: ["https://images.unsplash.com/photo-1533928298208-27ff66555d8d"]
      }
    }
  },
  {
    title: "The Conjuring",
    description: "นักสืบเรื่องเหนือธรรมชาติเข้าช่วยครอบครัวที่ถูกคุกคามจากวิญญาณร้ายในบ้านไร่",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=k10ETZ41q5o",
    category: "Horror",
    matchRate: 93,
    year: 2013,
    duration: 112,
    views: 1050000,
    ageRating: "R",
    university: "University of Rhode Island",
    crew: {
      create: {
        director: "James Wan",
        producer: "Tony DeRosa-Grund",
        writer: "Chad Hayes, Carey W. Hayes",
        cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"]
      }
    }
  },
  {
    title: "A Quiet Place",
    description: "ครอบครัวหนึ่งต้องใช้ชีวิตอย่างเงียบที่สุดเพื่อเอาชีวิตรอดจากสิ่งมีชีวิตที่ล่าด้วยเสียง",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=WR7cc5t7tv8",
    category: "Horror",
    matchRate: 88,
    year: 2018,
    duration: 90,
    views: 780000,
    ageRating: "PG-13",
    university: "Brown University",
    crew: {
      create: {
        director: "John Krasinski",
        producer: "Michael Bay, Andrew Form",
        writer: "Bryan Woods, Scott Beck",
        cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c"]
      }
    }
  },
  {
    title: "Black Panther",
    description: "ทีชัลลา ราชาแห่งวากานด้า ต้องก้าวขึ้นเป็นผู้นำคนใหม่และเผชิญหน้ากับศัตรูจากอดีตของอาณาจักร",
    thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
    category: "Action",
    matchRate: 91,
    year: 2018,
    duration: 134,
    views: 1700000,
    ageRating: "PG-13",
    university: "Wakanda Science Institute",
    crew: {
      create: {
        director: "Ryan Coogler",
        producer: "Kevin Feige",
        writer: "Ryan Coogler, Joe Robert Cole",
        cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
        btsVideo: "https://www.youtube.com/watch?v=u8M3z0gHk3c",
        btsPhotos: ["https://images.unsplash.com/photo-1534447677768-be436bb09401"]
      }
    }
  },
  {
    title: "Bohemian Rhapsody",
    description: "เรื่องราวของวงร็อกระดับตำนาน Queen และเฟรดดี้ เมอร์คิวรี ก่อนการแสดงประวัติศาสตร์ในคอนเสิร์ต Live Aid ปี 1985",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=mP0VHJYFO98",
    category: "Biography",
    matchRate: 87,
    year: 2018,
    duration: 134,
    views: 940000,
    ageRating: "PG-13",
    university: "Ealing Art College",
    crew: {
      create: {
        director: "Bryan Singer",
        producer: "Graham King, Jim Beach",
        writer: "Anthony McCarten, Peter Morgan",
        cast: ["Rami Malek", "Lucy Boynton", "Gwilym Lee"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1514525253161-7a46d19cd819"]
      }
    }
  },
  {
    title: "The Social Network",
    description: "มาร์ก ซักเคอร์เบิร์ก นักศึกษาฮาร์วาร์ด สร้าง Facebook ขึ้นมา แต่ความสำเร็จก็นำมาซึ่งคดีความและความขัดแย้ง",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=lB95KLKe0x8",
    category: "Biography",
    matchRate: 93,
    year: 2010,
    duration: 120,
    views: 820000,
    ageRating: "PG-13",
    university: "Harvard University",
    crew: {
      create: {
        director: "David Fincher",
        producer: "Scott Rudin, Dana Brunetti",
        writer: "Aaron Sorkin",
        cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"]
      }
    }
  },
  {
    title: "The Truman Show",
    description: "ชายขายประกันค้นพบว่าชีวิตทั้งชีวิตของเขาเป็นเพียงรายการเรียลลิตี้โชว์ที่ถ่ายทอดสดไปทั่วโลก",
    thumbnail: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=dlnmQbPGuls",
    category: "Comedy",
    matchRate: 95,
    year: 1998,
    duration: 103,
    views: 740000,
    ageRating: "PG",
    university: "Seahaven College",
    crew: {
      create: {
        director: "Peter Weir",
        producer: "Scott Rudin, Andrew Niccol",
        writer: "Andrew Niccol",
        cast: ["Jim Carrey", "Laura Linney", "Ed Harris"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1601042879364-f3947d3f9c16"]
      }
    }
  },
  {
    title: "Forrest Gump",
    description: "ชายผู้มี IQ ต่ำกว่าค่าเฉลี่ยได้เข้าไปเกี่ยวข้องกับเหตุการณ์สำคัญในประวัติศาสตร์อเมริกา พร้อมตามหาความรักในวัยเด็ก",
    thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    category: "Drama",
    matchRate: 96,
    year: 1994,
    duration: 142,
    views: 1800000,
    ageRating: "PG-13",
    university: "University of Alabama",
    crew: {
      create: {
        director: "Robert Zemeckis",
        producer: "Wendy Finerman, Steve Tisch",
        writer: "Winston Groom, Eric Roth",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"]
      }
    }
  },
  {
    title: "Spider-Man: No Way Home",
    description: "เมื่อความลับของสไปเดอร์แมนถูกเปิดเผย ปีเตอร์ ปาร์คเกอร์ต้องเผชิญหน้าศัตรูจากต่างมิติ",
    thumbnail: "https://images.unsplash.com/photo-1634828221818-503587f33d02?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
    category: "Action",
    matchRate: 94,
    year: 2021,
    duration: 148,
    views: 2200000,
    ageRating: "PG-13",
    university: "Midtown High School",
    crew: {
      create: {
        director: "Jon Watts",
        producer: "Kevin Feige, Amy Pascal",
        writer: "Chris McKenna, Erik Sommers",
        cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
        btsVideo: "https://www.youtube.com/watch?v=u8M3z0gHk3c",
        btsPhotos: ["https://images.unsplash.com/photo-1634828221818-503587f33d02"]
      }
    }
  },
  {
    title: "Ford v Ferrari",
    description: "นักออกแบบรถและนักแข่งของฟอร์ดร่วมมือกันสร้างรถแข่งเพื่อโค่นเฟอร์รารีในการแข่งขันเลอม็องปี 1966",
    thumbnail: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=I3h9Z69mI_A",
    category: "Sport",
    matchRate: 93,
    year: 2019,
    duration: 152,
    views: 650000,
    ageRating: "PG-13",
    university: "University of Michigan",
    crew: {
      create: {
        director: "James Mangold",
        producer: "Peter Chernin, Jenno Topping",
        writer: "Jez Butterworth, John-Henry Butterworth",
        cast: ["Matt Damon", "Christian Bale", "Jon Bernthal"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1552519507-da3b142c6e3d"]
      }
    }
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    description: "หลังฝ่ายกบฏพ่ายแพ้ ลุค สกายวอล์คเกอร์เริ่มฝึกเป็นเจได ขณะที่ดาร์ธ เวเดอร์ตามล่าพวกเขาทั่วกาแล็กซี",
    thumbnail: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=JNwNXF9Y6kY",
    category: "Sci-Fi",
    matchRate: 97,
    year: 1980,
    duration: 124,
    views: 1500000,
    ageRating: "PG",
    university: "Jedi Temple Academy",
    crew: {
      create: {
        director: "Irvin Kershner",
        producer: "Gary Kurtz",
        writer: "Leigh Brackett, Lawrence Kasdan, George Lucas",
        cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1506318137071-a8e063b4bec0"]
      }
    }
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "ฮอบบิทหนุ่มและสหายทั้งแปดออกเดินทางเพื่อทำลายแหวนทรงพลังและหยุดยั้งจอมมารเซารอน",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=V75dMMBt2Ac",
    category: "Fantasy",
    matchRate: 96,
    year: 2001,
    duration: 178,
    views: 1800000,
    ageRating: "PG-13",
    university: "Hobbiton School",
    crew: {
      create: {
        director: "Peter Jackson",
        producer: "Barrie M. Osborne, Peter Jackson",
        writer: "J.R.R. Tolkien, Fran Walsh",
        cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"]
      }
    }
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    description: "เด็กชายกำพร้าค้นพบว่าตัวเองเป็นพ่อมด และเริ่มต้นชีวิตใหม่ในโรงเรียนเวทมนตร์ฮอกวอตส์",
    thumbnail: "https://images.unsplash.com/photo-1510172951991-856a654063f9?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=VyHV0BRZYy4",
    category: "Fantasy",
    matchRate: 92,
    year: 2001,
    duration: 152,
    views: 2000000,
    ageRating: "PG",
    university: "Hogwarts School of Witchcraft and Wizardry",
    crew: {
      create: {
        director: "Chris Columbus",
        producer: "David Heyman",
        writer: "J.K. Rowling, Steve Kloves",
        cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1510172951991-856a654063f9"]
      }
    }
  },
  {
    title: "The Silence of the Lambs",
    description: "เจ้าหน้าที่เอฟบีไอฝึกหัดต้องขอความช่วยเหลือจากฆาตกรกินคนเพื่อไล่ล่าฆาตกรต่อเนื่องสุดอันตราย",
    thumbnail: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=W6Mm8Sbe__o",
    category: "Thriller",
    matchRate: 95,
    year: 1991,
    duration: 118,
    views: 1100000,
    ageRating: "R",
    university: "Quantico Academy",
    crew: {
      create: {
        director: "Jonathan Demme",
        producer: "Edward Saxon, Kenneth Utt",
        writer: "Thomas Harris, Ted Tally",
        cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
        btsVideo: "https://www.youtube.com/watch?v=Xh0YpA9g9X8",
        btsPhotos: ["https://images.unsplash.com/photo-1509114397022-ed747cca3f65"]
      }
    }
  },
  {
    title: "Django Unchained",
    description: "อดีตทาสร่วมมือกับนักล่าค่าหัวชาวเยอรมันเพื่อตามช่วยภรรยาจากเจ้าของไร่ผู้โหดเหี้ยม",
    thumbnail: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=0fUCuvNlOCg",
    category: "Western",
    matchRate: 94,
    year: 2012,
    duration: 165,
    views: 870000,
    ageRating: "R",
    university: "University of Texas",
    crew: {
      create: {
        director: "Quentin Tarantino",
        producer: "Stacey Sher, Reginald Hudlin",
        writer: "Quentin Tarantino",
        cast: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1533105079780-92b9be482077"]
      }
    }
  }
];
