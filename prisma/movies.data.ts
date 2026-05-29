
export const categories = [
  "Action", "Sci-Fi", "Horror", "Comedy", "Thriller", "Drama", "Romance",
  "Adventure", "Fantasy", "Animation", "Biography", "Documentary", "Family",
  "Music", "Mystery", "Sport", "Western"
];

export const ageRatings = [
  "G", "PG", "PG-13", "NC-17", "R"
];

export const universities = [
  "จุฬาลงกรณ์มหาวิทยาลัย",
  "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
  "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
  "มหาวิทยาลัยกรุงเทพ"
];

export interface SeedMovie {
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  category: string;
  matchRate?: number;
  year: number;
  duration: number;
  views?: number;
  ageRating?: string;
  university?: string;
  crew?: {
    create: {
      director?: string;
      producer?: string;
      writer?: string;
      cast?: string[] | string;
      btsVideo?: string;
      btsPhotos?: string[] | string;
    };
  };
}

export const seedMovies: SeedMovie[] = [
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
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
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
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
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
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
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
    university: "มหาวิทยาลัยกรุงเทพ",
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
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
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
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
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
    title: "John Wick",
    description: "อดีตนักฆ่าฝีมือพระกาฬหวนคืนวงการเพื่อทวงแค้นกลุ่มมาเฟียรัสเซียที่ทำลายสิ่งสำคัญชิ้นสุดท้ายในชีวิต",
    thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=qEVUtrk8_B4",
    category: "Action",
    matchRate: 95,
    year: 2014,
    duration: 101,
    views: 1850000,
    ageRating: "R",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Chad Stahelski",
        producer: "Basil Iwanyk",
        writer: "Derek Kolstad",
        cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
        btsVideo: "https://www.youtube.com/watch?v=u8M3z0gHk3c",
        btsPhotos: ["https://images.unsplash.com/photo-1509198397868-475647b2a1e5"]
      }
    }
  },
  {
    title: "Mission: Impossible - Fallout",
    description: "อีธาน ฮันท์และทีมงานต้องแข่งกับเวลาเพื่อยับยั้งระเบิดนิวเคลียร์ หลังภารกิจรวบรวมพลูโตเนียมเกิดความผิดพลาด",
    thumbnail: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=wb49-oV0F78",
    category: "Action",
    matchRate: 97,
    year: 2018,
    duration: 147,
    views: 1950000,
    ageRating: "PG-13",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Christopher McQuarrie",
        producer: "Tom Cruise, Jake Myers",
        writer: "Christopher McQuarrie",
        cast: ["Tom Cruise", "Henry Cavill", "Ving Rhames"],
        btsVideo: "https://www.youtube.com/watch?v=u8M3z0gHk3c",
        btsPhotos: ["https://images.unsplash.com/photo-1533105079780-92b9be482077"]
      }
    }
  },
  {
    title: "Top Gun: Maverick",
    description: "มาเวอริค นักบินขับไล่ระดับตำนานกลับมาฝึกสอนนักบินรุ่นใหม่เพื่อภารกิจเสี่ยงตายขั้นสุดยอด",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=giXcoYmTfbQ",
    category: "Action",
    matchRate: 98,
    year: 2022,
    duration: 130,
    views: 2900000,
    ageRating: "PG-13",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Joseph Kosinski",
        producer: "Jerry Bruckheimer, Tom Cruise",
        writer: "Ehren Kruger, Eric Warren Singer",
        cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
        btsVideo: "https://www.youtube.com/watch?v=u8M3z0gHk3c",
        btsPhotos: ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23"]
      }
    }
  },
  {
    title: "The Matrix Resurrections",
    description: "นีโอหลุดกลับไปอยู่ในโลกจำลองที่คุ้นเคยอีกครั้ง และต้องเลือกระหว่างความจริงอันเจ็บปวดหรือความฝันที่สุขสบาย",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=9ix7TMcY-Dw",
    category: "Action",
    matchRate: 85,
    year: 2021,
    duration: 148,
    views: 1200000,
    ageRating: "R",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Lana Wachowski",
        producer: "James McTeigue",
        writer: "Lana Wachowski, David Mitchell",
        cast: ["Keanu Reeves", "Carrie-Anne Moss", "Yahya Abdul-Mateen II"],
        btsVideo: "https://www.youtube.com/watch?v=u8M3z0gHk3c",
        btsPhotos: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"]
      }
    }
  },

  // ==================== SCI-FI (10) ====================
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
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
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
    university: "มหาวิทยาลัยกรุงเทพ",
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
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
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
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
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
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
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
    title: "Blade Runner 2049",
    description: "มนุษย์เทียมที่เป็นตำรวจสายตรวจพิเศษในแอลเอ ค้นพบความลับที่ถูกฝังไว้ซึ่งอาจเปลี่ยนระเบียบของโลกไปตลอดกาล",
    thumbnail: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=gCcx85zbxz4",
    category: "Sci-Fi",
    matchRate: 94,
    year: 2017,
    duration: 164,
    views: 750000,
    ageRating: "R",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Denis Villeneuve",
        producer: "Andrew A. Kosove",
        writer: "Hampton Fancher, Michael Green",
        cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0"]
      }
    }
  },
  {
    title: "Arrival",
    description: "เมื่อยานอวกาศลึกลับสิบสองลำจอดทอดสมอทั่วโลก นักภาษาศาสตร์ชื่อดังได้รับหน้าที่แกะรหัสเพื่อทำความเข้าใจจุดประสงค์ของผู้มาเยือน",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=tF112y6cAkU",
    category: "Sci-Fi",
    matchRate: 92,
    year: 2016,
    duration: 116,
    views: 800000,
    ageRating: "PG-13",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Denis Villeneuve",
        producer: "Dan Levine",
        writer: "Eric Heisserer, Ted Chiang",
        cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa"]
      }
    }
  },
  {
    title: "The Martian",
    description: "นักบินอวกาศถูกทิ้งให้อยู่เพียงลำพังบนดาวอังคารหลังพายุทรายถล่ม เขาต้องใช้ความฉลาดและความเชี่ยวชาญเพื่อประคองชีวิตให้รอดพ้นความตาย",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=ej3ioOneTy8",
    category: "Sci-Fi",
    matchRate: 96,
    year: 2015,
    duration: 144,
    views: 1350000,
    ageRating: "PG-13",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Ridley Scott",
        producer: "Simon Kinberg",
        writer: "Drew Goddard, Andy Weir",
        cast: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  },
  {
    title: "Gravity",
    description: "วิศวกรทางการแพทย์หญิงและนักบินอวกาศรุ่นพี่ต้องต่อสู้ดิ้นรนเอาชีวิตรอดกลางอวกาศไร้ขอบเขต หลังสถานีอวกาศถูกเศษขยะทำลายสะบั้น",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=OiTiKOy59o4",
    category: "Sci-Fi",
    matchRate: 90,
    year: 2013,
    duration: 91,
    views: 950000,
    ageRating: "PG-13",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Alfonso Cuarón",
        producer: "Alfonso Cuarón, David Heyman",
        writer: "Alfonso Cuarón, Jonás Cuarón",
        cast: ["Sandra Bullock", "George Clooney"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa"]
      }
    }
  },
  {
    title: "Tenet",
    description: "สายลับต้องใช้เทคโนโลยีควบคุมและผันเวลาเพื่อป้องกันไม่ให้สงครามโลกครั้งที่สามปะทุขึ้นกลางมวลมนุษยชาติ",
    thumbnail: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=LdOM0x0XDwM",
    category: "Sci-Fi",
    matchRate: 86,
    year: 2020,
    duration: 150,
    views: 1100000,
    ageRating: "PG-13",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Christopher Nolan",
        producer: "Emma Thomas, Christopher Nolan",
        writer: "Christopher Nolan",
        cast: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0"]
      }
    }
  },

  // ==================== HORROR (10) ====================
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
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
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
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
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
    title: "Hereditary",
    description: "หลังการจากไปของยาย ความลับสุดสะพรึงและมืดมนของครอบครัวก็เริ่มคืบคลานเข้ามาคุกคามชีวิตของลูกหลาน",
    thumbnail: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=V6wWKNij_jM",
    category: "Horror",
    matchRate: 91,
    year: 2018,
    duration: 127,
    views: 850000,
    ageRating: "R",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Ari Aster",
        producer: "Kevin Frakes",
        writer: "Ari Aster",
        cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1509248961158-e54f6934749c"]
      }
    }
  },
  {
    title: "It",
    description: "เด็กเจ็ดคนในเมืองชนบทเล็กๆ ต้องร่วมมือกันเผชิญหน้ากับปีศาจจำแลงกายเป็นตัวตลกตัวร้ายที่สะกดรอยล่าเหยื่อ",
    thumbnail: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=FnCdOQsX5kc",
    category: "Horror",
    matchRate: 94,
    year: 2017,
    duration: 135,
    views: 1600000,
    ageRating: "R",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Andy Muschietti",
        producer: "Roy Lee",
        writer: "Stephen King, Chase Palmer",
        cast: ["Bill Skarsgård", "Jaeden Martell", "Finn Wolfhard"],
        btsVideo: "https://www.youtube.com/watch?v=FnCdOQsX5kc",
        btsPhotos: ["https://images.unsplash.com/photo-1608889175123-8ee362201f81"]
      }
    }
  },
  {
    title: "The Invisible Man",
    description: "เมื่อแฟนหนุ่มผู้ร่ำรวยและชอบบงการฆ่าตัวตาย หญิงสาวเชื่อว่าเขาเพียงแต่หาวิธีล่องหนเพื่อกลับมาไล่ล่าและรังควานชีวิตเธอ",
    thumbnail: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=dSBsNeYqh-k",
    category: "Horror",
    matchRate: 89,
    year: 2020,
    duration: 124,
    views: 920000,
    ageRating: "R",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Leigh Whannell",
        producer: "Jason Blum",
        writer: "Leigh Whannell",
        cast: ["Elisabeth Moss", "Oliver Jackson-Cohen", "Harriet Dyer"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1509114397022-ed747cca3f65"]
      }
    }
  },
  {
    title: "ชัตเตอร์ กดติดวิญญาณ",
    description: "ช่างภาพหนุ่มและแฟนสาวถูกวิญญาณปริศนาตามรังควานอย่างโหดร้าย หลังพวกเขาขับรถชนคนแล้วหนีไป",
    thumbnail: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=t5JvD90v-bM",
    category: "Horror",
    matchRate: 98,
    year: 2004,
    duration: 97,
    views: 1800000,
    ageRating: "R",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Banjong Pisanthanakun, Parkpoom Wongpoom",
        producer: "Yodphet Sudsawad",
        writer: "Banjong Pisanthanakun, Parkpoom Wongpoom",
        cast: ["Ananda Everingham", "Natthaweeranuch Thongmee"],
        btsVideo: "https://www.youtube.com/watch?v=t5JvD90v-bM",
        btsPhotos: ["https://images.unsplash.com/photo-1509248961158-e54f6934749c"]
      }
    }
  },
  {
    title: "ลัดดาแลนด์",
    description: "หัวหน้าครอบครัวตัดสินใจย้ายบ้านไปยังหมู่บ้านจัดสรรลัดดาแลนด์ในเชียงใหม่ แต่แล้วเขาก็พบว่าที่นี่เต็มไปด้วยวิญญาณและความน่าสะพรึงกลัว",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=5Vz5Y-yK_U0",
    category: "Horror",
    matchRate: 95,
    year: 2011,
    duration: 112,
    views: 1100000,
    ageRating: "R",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Sophon Sakdaphisit",
        producer: "Jira Maligool",
        writer: "Sophon Sakdaphisit, Sopana Chaowwiwatkul",
        cast: ["Saharat Sangkapreecha", "Piyathida Woramusik"],
        btsVideo: "https://www.youtube.com/watch?v=t5JvD90v-bM",
        btsPhotos: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"]
      }
    }
  },
  {
    title: "ร่างทรง",
    description: "การสืบสายเลือดร่างทรงของครอบครัวหนึ่งในภาคอีสานของไทย กลับกลายเป็นโศกนาฏกรรมเมื่อวิญญาณชั่วร้ายพยายามสิงสู้ทายาทสาว",
    thumbnail: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=P2f5wF6UepE",
    category: "Horror",
    matchRate: 96,
    year: 2021,
    duration: 130,
    views: 1400000,
    ageRating: "R",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Banjong Pisanthanakun",
        producer: "Na Hong-jin",
        writer: "Banjong Pisanthanakun, Na Hong-jin",
        cast: ["Narilya Gulmongkolpech", "Sawanee Utoomma"],
        btsVideo: "https://www.youtube.com/watch?v=t5JvD90v-bM",
        btsPhotos: ["https://images.unsplash.com/photo-1509248961158-e54f6934749c"]
      }
    }
  },
  {
    title: "พี่มาก...พระโขนง",
    description: "พี่มากกลับมาจากสงครามพร้อมเพื่อนรักสี่คน โดยไม่รู้เลยว่าภรรยาสุดที่รักของเขาได้กลายเป็นวิญญาณผีตายทั้งกลมไปแล้ว",
    thumbnail: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=5Vz5Y-yK_U0",
    category: "Horror",
    matchRate: 99,
    year: 2013,
    duration: 115,
    views: 3900000,
    ageRating: "PG-13",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Banjong Pisanthanakun",
        producer: "Chenchonnanee Suntornyanakit",
        writer: "Banjong Pisanthanakun, Nontra Chalermchat",
        cast: ["Mario Maurer", "Davika Hoorne"],
        btsVideo: "https://www.youtube.com/watch?v=t5JvD90v-bM",
        btsPhotos: ["https://images.unsplash.com/photo-1509248961158-e54f6934749c"]
      }
    }
  },
  {
    title: "เดอะ ริง คำสาปมรณะ",
    description: "ม้วนวิดีโอเทปปริศนาที่ใครได้ดูจะต้องเสียชีวิตภายใน 7 วันอย่างเป็นปริศนา นักข่าวสาวคนหนึ่งจึงพยายามไขความลับก่อนที่ตัวเธอจะหมดเวลา",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=yzR2GY-ew8I",
    category: "Horror",
    matchRate: 88,
    year: 1998,
    duration: 96,
    views: 870000,
    ageRating: "R",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Hideo Nakata",
        producer: "Shinya Kawai",
        writer: "Koji Suzuki, Hiroshi Takahashi",
        cast: ["Nanako Matsushima", "Hiroyuki Sanada"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"]
      }
    }
  },

  // ==================== COMEDY (10) ====================
  {
    title: "The Hangover",
    description: "เพื่อนสนิทสี่คนเดินทางไปปาร์ตี้สละโสดที่ลาสเวกัส แต่ตื่นขึ้นมากลับจำอะไรไม่ได้เลยและเจ้าบ่าวได้หายตัวไปอย่างลึกลับ",
    thumbnail: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=tcdUjFnMdes",
    category: "Comedy",
    matchRate: 94,
    year: 2009,
    duration: 100,
    views: 1800000,
    ageRating: "R",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Todd Phillips",
        producer: "Daniel Goldberg",
        writer: "Jon Lucas, Scott Moore",
        cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1585647347483-22b66260dfff"]
      }
    }
  },
  {
    title: "Groundhog Day",
    description: "นักพยากรณ์อากาศที่เห็นแก่ตัวตื่นขึ้นมาพบว่าตัวเองติดอยู่ในวังวนลูปเวลาเดิมๆ ของเมืองเล็กๆ แห่งหนึ่งซ้ำแล้วซ้ำเล่า",
    thumbnail: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=GncQtURlhN4",
    category: "Comedy",
    matchRate: 91,
    year: 1993,
    duration: 101,
    views: 680000,
    ageRating: "PG",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Harold Ramis",
        producer: "Trevor Albert",
        writer: "Danny Rubin, Harold Ramis",
        cast: ["Bill Murray", "Andie MacDowell"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1601042879364-f3947d3f9c16"]
      }
    }
  },
  {
    title: "Mean Girls",
    description: "หญิงสาวที่เติบโตมาจากแอฟริกาต้องเข้าไปเรียนโรงเรียนมัธยมในเมืองใหญ่ และต้องปะทะคารมกับกลุ่มสาวสุดฮอตประจำโรงเรียน",
    thumbnail: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=KAOmTMCtGkI",
    category: "Comedy",
    matchRate: 88,
    year: 2004,
    duration: 97,
    views: 790000,
    ageRating: "PG-13",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Mark Waters",
        producer: "Lorne Michaels",
        writer: "Tina Fey",
        cast: ["Lindsay Lohan", "Rachel McAdams", "Amanda Seyfried"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1585647347483-22b66260dfff"]
      }
    }
  },
  {
    title: "Superbad",
    description: "เพื่อนซี้สองคนกำลังจะจบมัธยมปลายและพยายามจัดเหล้าเข้างานปาร์ตี้ใหญ่เพื่อหาคู่เดต แต่ทุกอย่างกลับผิดแผนอย่างสุดกู่",
    thumbnail: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=4eaZ_ADQqes",
    category: "Comedy",
    matchRate: 90,
    year: 2007,
    duration: 113,
    views: 890000,
    ageRating: "R",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Greg Mottola",
        producer: "Judd Apatow",
        writer: "Seth Rogen, Evan Goldberg",
        cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1585647347483-22b66260dfff"]
      }
    }
  },
  {
    title: "Free Guy",
    description: "ตัวละคร NPC ในวิดีโอเกมแนว Open World ค้นพบว่าความจริงแล้วตัวเองอยู่ในเกมและเลือกที่จะเขียนบทบาทใหม่เป็นฮีโร่ผู้พิทักษ์โลกเกม",
    thumbnail: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=X2m-08cOAbc",
    category: "Comedy",
    matchRate: 93,
    year: 2021,
    duration: 115,
    views: 1200000,
    ageRating: "PG-13",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Shawn Levy",
        producer: "Ryan Reynolds, Shawn Levy",
        writer: "Matt Lieberman, Zak Penn",
        cast: ["Ryan Reynolds", "Jodie Comer", "Taika Waititi"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1601042879364-f3947d3f9c16"]
      }
    }
  },
  {
    title: "Deadpool",
    description: "อดีตเจ้าหน้าที่กองทหารพิเศษที่ผ่านการทดลองพิเศษจนได้พลังฟื้นฟูร่างกายอย่างรวดเร็ว หันมาสวมหน้ากากชุดแดงสุดเกรียนเพื่อตามล่าคนที่ทำลายชีวิตเขา",
    thumbnail: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=ONHBaC-CAc8",
    category: "Comedy",
    matchRate: 96,
    year: 2016,
    duration: 108,
    views: 2400000,
    ageRating: "R",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Tim Miller",
        producer: "Simon Kinberg, Lauren Shuler Donner",
        writer: "Rhett Reese, Paul Wernick",
        cast: ["Ryan Reynolds", "Morena Baccarin", "Ed Skrein"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1585647347483-22b66260dfff"]
      }
    }
  },
  {
    title: "Dumb and Dumber",
    description: "เพื่อนซี้สองคนที่สมองทึ่มขั้นสุดยอด ออกเดินทางเพื่อนำกระเป๋าเอกสารที่ถูกวางทิ้งไว้ไปคืนให้หญิงสาวสวยผู้ร่ำรวย",
    thumbnail: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=l13yPhimE3o",
    category: "Comedy",
    matchRate: 85,
    year: 1994,
    duration: 107,
    views: 950000,
    ageRating: "PG-13",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Peter Farrelly",
        producer: "Charles B. Wessler",
        writer: "Ted Cohen, Peter Farrelly",
        cast: ["Jim Carrey", "Jeff Daniels"],
        btsVideo: "https://www.youtube.com/watch?v=8hP9D6kZseM",
        btsPhotos: ["https://images.unsplash.com/photo-1601042879364-f3947d3f9c16"]
      }
    }
  },
  {
    title: "ไอฟาย..แต๊งกิ้ว..เลิฟยู้",
    description: "เรื่องราวของยิม ชายหนุ่มที่พยายามติวภาษาอังกฤษแบบเร่งด่วนเพื่อตามง้อแฟนสาวชาวต่างชาติกับคุณครูสอนภาษาคนสวย",
    thumbnail: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=CLHe8J_SNDc",
    category: "Comedy",
    matchRate: 95,
    year: 2014,
    duration: 116,
    views: 1500000,
    ageRating: "PG-13",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Mez Tharatorn",
        producer: "Jira Maligool",
        writer: "Mez Tharatorn, Benjamaporn Srabua",
        cast: ["Sunny Suwanmethanont", "Preechaya Pongthananikorn"],
        btsVideo: "https://www.youtube.com/watch?v=t5JvD90v-bM",
        btsPhotos: ["https://images.unsplash.com/photo-1585647347483-22b66260dfff"]
      }
    }
  },

  // ==================== THRILLER (10) ====================
  {
    title: "Prisoners",
    description: "เมื่อลูกสาวคนเล็กถูกลักพาตัวไปและเบาะแสเดียวที่มีหลุดรอดน้ำมือตำรวจ พ่อผู้สิ้นหวังจึงตัดสินใจจัดการทุกอย่างด้วยมือของตัวเอง",
    thumbnail: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=bpXfcTctazU",
    category: "Thriller",
    matchRate: 94,
    year: 2013,
    duration: 153,
    views: 720000,
    ageRating: "R",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Denis Villeneuve",
        producer: "Kira Davis",
        writer: "Aaron Guzikowski",
        cast: ["Hugh Jackman", "Jake Gyllenhaal", "Viola Davis"],
        btsVideo: "https://www.youtube.com/watch?v=Xh0YpA9g9X8",
        btsPhotos: ["https://images.unsplash.com/photo-1594909122845-11baa439b7bf"]
      }
    }
  },
  {
    title: "Se7en",
    description: "ตำรวจสืบสวนสองคนตามล่าฆาตกรต่อเนื่องโรคจิตที่ก่อคดีโหดตามบาป 7 ประการในคัมภีร์ศาสนาคริสต์",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=znmZoY5sBxs",
    category: "Thriller",
    matchRate: 96,
    year: 1995,
    duration: 127,
    views: 1400000,
    ageRating: "R",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "David Fincher",
        producer: "Arnold Kopelson",
        writer: "Andrew Kevin Walker",
        cast: ["Brad Pitt", "Morgan Freeman", "Gwyneth Paltrow"],
        btsVideo: "https://www.youtube.com/watch?v=Xh0YpA9g9X8",
        btsPhotos: ["https://images.unsplash.com/photo-1434030216411-0b793f4b4173"]
      }
    }
  },
  {
    title: "Gone Girl",
    description: "เมื่อภรรยาแสนสวยหายตัวไปอย่างลึกลับในวันครบรอบวันแต่งงาน ทุกสายตาและพยานหลักฐานกลับชี้ความผิดไปที่ตัวสามีผู้สิ้นหวัง",
    thumbnail: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=yC03Qv4Ew0M",
    category: "Thriller",
    matchRate: 91,
    year: 2014,
    duration: 149,
    views: 880000,
    ageRating: "R",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "David Fincher",
        producer: "Ceán Chaffin",
        writer: "Gillian Flynn",
        cast: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris"],
        btsVideo: "https://www.youtube.com/watch?v=Xh0YpA9g9X8",
        btsPhotos: ["https://images.unsplash.com/photo-1533928298208-27ff66555d8d"]
      }
    }
  },
  {
    title: "Zodiac",
    description: "นักเขียนการ์ตูนและตำรวจสืบสวนร่วมมือกันเพื่อไล่ล่าระบุตัวตนของฆาตกรต่อเนื่องโซดิแอกผู้ออกแบบรหัสคดีปริศนาท้าทาย",
    thumbnail: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=yNncHPl1nsw",
    category: "Thriller",
    matchRate: 90,
    year: 2007,
    duration: 157,
    views: 650000,
    ageRating: "R",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "David Fincher",
        producer: "Ceán Chaffin, Mike Medavoy",
        writer: "James Vanderbilt, Robert Graysmith",
        cast: ["Jake Gyllenhaal", "Mark Ruffalo", "Robert Downey Jr."],
        btsVideo: "https://www.youtube.com/watch?v=Xh0YpA9g9X8",
        btsPhotos: ["https://images.unsplash.com/photo-1509114397022-ed747cca3f65"]
      }
    }
  },
  {
    title: "Shutter Island",
    description: "เจ้าหน้าที่บังคับคดีชาวอเมริกันเข้ามาสืบสวนการหายตัวไปปริศนาของฆาตกรหญิงในโรงพยาบาลประสาทบนเกาะลับห่างไกล",
    thumbnail: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=5iaYLCip5Qk",
    category: "Thriller",
    matchRate: 95,
    year: 2010,
    duration: 138,
    views: 1300000,
    ageRating: "R",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Martin Scorsese",
        producer: "Mike Medavoy",
        writer: "Laeta Kalogridis, Dennis Lehane",
        cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
        btsVideo: "https://www.youtube.com/watch?v=Xh0YpA9g9X8",
        btsPhotos: ["https://images.unsplash.com/photo-1594909122845-11baa439b7bf"]
      }
    }
  },
  {
    title: "Nightcrawler",
    description: "ชายผู้กระหายความสำเร็จผันตัวเองเป็นช่างภาพข่าวอาชญากรรมอิสระในแอลเอ ดิ่งลึกสู่โลกมืดแห่งคดีฆาตกรรมและการปั้นข่าวสุดอันตราย",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=X8kXYg_OBdc",
    category: "Thriller",
    matchRate: 88,
    year: 2014,
    duration: 117,
    views: 590000,
    ageRating: "R",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Dan Gilroy",
        producer: "Jennifer Fox",
        writer: "Dan Gilroy",
        cast: ["Jake Gyllenhaal", "Rene Russo", "Riz Ahmed"],
        btsVideo: "https://www.youtube.com/watch?v=X8kXYg_OBdc",
        btsPhotos: ["https://images.unsplash.com/photo-1434030216411-0b793f4b4173"]
      }
    }
  },

  // ==================== DRAMA (10) ====================
  {
    title: "The Green Mile",
    description: "ผู้คุมขังนักโทษแดนประหาร ค้นพบความจริงอันน่าเหลือเชื่อของนักโทษผิวดำร่างยักษ์ผู้ได้รับพลังพิเศษในการปัดเป่าปาฏิหาริย์รักษามนุษย์",
    thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=Ki4haFrqSrw",
    category: "Drama",
    matchRate: 97,
    year: 1999,
    duration: 189,
    views: 1500000,
    ageRating: "R",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Frank Darabont",
        producer: "Frank Darabont, David Valdes",
        writer: "Stephen King, Frank Darabont",
        cast: ["Tom Hanks", "David Morse", "Michael Clarke Duncan"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"]
      }
    }
  },
  {
    title: "Fight Club",
    description: "ชายหนุ่มผู้เบื่อชีวิตเมืองหลวงรวมตัวกับคนขายสบู่ลึกลับเพื่อตั้งคลับต่อสู้เพื่อระบายความดิบ ทลายกฎเกณฑ์เดิมๆ ในสังคม",
    thumbnail: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
    category: "Drama",
    matchRate: 93,
    year: 1999,
    duration: 139,
    views: 1200000,
    ageRating: "R",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "David Fincher",
        producer: "Art Linson",
        writer: "Chuck Palahniuk, Jim Uhls",
        cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1593085512500-5d55148d6f0d"]
      }
    }
  },
  {
    title: "The Prestige",
    description: "สองนักมายากลเพื่อนซี้ในลอนดอนยุคปฏิบัติอุตสาหกรรม กลายเป็นศัตรูคู่อาฆาตที่หาวิธีคิดค้นกลเพื่อเอาชนะและทำลายล้างอีกฝ่าย",
    thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=o4gHCmTQDVI",
    category: "Drama",
    matchRate: 94,
    year: 2006,
    duration: 130,
    views: 950000,
    ageRating: "PG-13",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Christopher Nolan",
        producer: "Emma Thomas",
        writer: "Jonathan Nolan, Christopher Nolan",
        cast: ["Hugh Jackman", "Christian Bale", "Scarlett Johansson"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"]
      }
    }
  },
  {
    title: "Schindler's List",
    description: "เรื่องราวประวัติศาสตร์ของออสการ์ ชินด์เลอร์ นักธุรกิจชาวเยอรมันผู้ช่วยชีวิตชาวยิวมากกว่าพันคนระหว่างสงครามโลกครั้งที่สอง",
    thumbnail: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=gG22XNhtnoY",
    category: "Drama",
    matchRate: 98,
    year: 1993,
    duration: 195,
    views: 1200000,
    ageRating: "R",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Steven Spielberg",
        producer: "Branko Lustig",
        writer: "Thomas Keneally, Steven Zaillian",
        cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
        btsVideo: "https://www.youtube.com/watch?v=1F7771Zf3uE",
        btsPhotos: ["https://images.unsplash.com/photo-1593085512500-5d55148d6f0d"]
      }
    }
  },

  // ==================== ROMANCE (10) ====================
  {
    title: "About Time",
    description: "เมื่ออายุครบ 21 ปี ชายหนุ่มได้รับรู้ความลับของครอบครัวว่าเขามีความสามารถในการเดินทางย้อนลูปเวลาเพื่อแก้ไขช่วงชีวิตตนเองและตามหาความรักได้",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=T7A810duHvw",
    category: "Romance",
    matchRate: 94,
    year: 2013,
    duration: 123,
    views: 1200000,
    ageRating: "R",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Richard Curtis",
        producer: "Tim Bevan",
        writer: "Richard Curtis",
        cast: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"]
      }
    }
  },
  {
    title: "The Notebook",
    description: "เรื่องราวรักนิรันดร์ระหว่างหนุ่มชนชั้นแรงงานและหญิงสาวครอบครัวมั่งคั่ง ท่ามกลางความขัดแย้ง ชะตากรรมสงคราม และความทรงจำที่ค่อยๆ จืดจาง",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=FC6biTjJyWk",
    category: "Romance",
    matchRate: 93,
    year: 2004,
    duration: 123,
    views: 950000,
    ageRating: "PG-13",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Nick Cassavetes",
        producer: "Lynn Harris",
        writer: "Nicholas Sparks, Jan Sardi",
        cast: ["Ryan Gosling", "Rachel McAdams", "James Garner"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23"]
      }
    }
  },
  {
    title: "Before Sunrise",
    description: "หนุ่มอเมริกันและสาวฝรั่งเศสพบกันบนรถไฟท่องเที่ยวในยุโรป และตัดสินใจร่วมใช้เวลาหนึ่งค่ำคืนร่วมกันในเมืองเวียนนาโดยไม่มีข้อผูกมัดใดๆ",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=25v7N34JJgM",
    category: "Romance",
    matchRate: 90,
    year: 1995,
    duration: 101,
    views: 550000,
    ageRating: "R",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Richard Linklater",
        producer: "Anne Walker-McBay",
        writer: "Richard Linklater, Kim Krizan",
        cast: ["Ethan Hawke", "Julie Delpy"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"]
      }
    }
  },
  {
    title: "Pride & Prejudice",
    description: "ความรักที่ซับซ้อนท้าทายจารีตชนชั้น นำไปสู่การเผชิญหน้าระหว่างหญิงสาวอคติสูงกับสุภาพบุรุษหนุ่มขุนนางแสนหยิ่งทนงในอังกฤษโบราณ",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=Ur_DIHs9mYc",
    category: "Romance",
    matchRate: 91,
    year: 2005,
    duration: 129,
    views: 680000,
    ageRating: "PG",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Joe Wright",
        producer: "Tim Bevan",
        writer: "Jane Austen, Deborah Moggach",
        cast: ["Keira Knightley", "Matthew Macfadyen", "Brenda Blethyn"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23"]
      }
    }
  },
  {
    title: "Crazy Rich Asians",
    description: "อาจารย์สาวชาวจีน-อเมริกันเดินทางไปสิงคโปร์พร้อมแฟนหนุ่ม และพบว่าความจริงแฟนเธอเป็นทายาทตระกูลที่ร่ำรวยและมีชื่อเสียงที่สุดในประเทศ",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=ZQ-YX-5bAs0",
    category: "Romance",
    matchRate: 88,
    year: 2018,
    duration: 120,
    views: 990000,
    ageRating: "PG-13",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Jon M. Chu",
        producer: "Nina Jacobson",
        writer: "Kevin Kwan, Peter Chiarelli",
        cast: ["Constance Wu", "Henry Golding", "Michelle Yeoh"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"]
      }
    }
  },
  {
    title: "Notting Hill",
    description: "รักอบอุ่นหัวใจที่เกิดขึ้นอย่างน่าอัศจรรย์เมื่อเจ้าของร้านหนังสือหนุ่มธรรมดาๆ ในลอนดอนได้พบและสานสัมพันธ์กับดาราสาวฮอลลีวูดอันดับหนึ่งของโลก",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=4RI0QguyXHY",
    category: "Romance",
    matchRate: 92,
    year: 1999,
    duration: 124,
    views: 890000,
    ageRating: "PG-13",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Roger Michell",
        producer: "Duncan Kenworthy",
        writer: "Richard Curtis",
        cast: ["Hugh Grant", "Julia Roberts", "Richard McCabe"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23"]
      }
    }
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    description: "คู่รักเก่าที่ต่างตัดสินใจลบความทรงจำเกี่ยวกับการใช้ชีวิตคู่ร่วมกันออกจากสมอง แต่การดิ้นรนเพื่อเก็บส่วนลึกของความทรงจำในวินาทีสุดท้ายก็เริ่มขึ้น",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=07-3nLKyW5s",
    category: "Romance",
    matchRate: 86,
    year: 2004,
    duration: 108,
    views: 750000,
    ageRating: "R",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Michel Gondry",
        producer: "Steve Golin",
        writer: "Charlie Kaufman, Michel Gondry",
        cast: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"]
      }
    }
  },
  {
    title: "Call Me by Your Name",
    description: "ในยุโรปช่วงหน้าร้อน เด็กหนุ่มผู้เชี่ยวชาญด้านดนตรีเริ่มมีใจและสายสัมพันธ์ลับๆ กับนักศึกษาวิจัยรุ่นพี่สุดสมาร์ทที่เดินทางมาร่วมงานกับครอบครัว",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=Z9AYPxH5NTM",
    category: "Romance",
    matchRate: 90,
    year: 2017,
    duration: 132,
    views: 800000,
    ageRating: "R",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Luca Guadagnino",
        producer: "Peter Spears",
        writer: "André Aciman, James Ivory",
        cast: ["Timothée Chalamet", "Armie Hammer", "Michael Stuhlbarg"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23"]
      }
    }
  },

  // ==================== ADVENTURE (10) ====================
  {
    title: "Life of Pi",
    description: "เด็กหนุ่มชาวอินเดียรอดชีวิตจากภัยพิบัติเรืออัปปางกลางมหาสมุทรแปซิฟิก และต้องแชร์แพชูชีพลอยเคว้งคว้างร่วมกับเสือโคร่งเบงกอลตัวยักษ์",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=3mMN693-F3Y",
    category: "Adventure",
    matchRate: 94,
    year: 2012,
    duration: 127,
    views: 1200000,
    ageRating: "PG",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Ang Lee",
        producer: "Gil Netter",
        writer: "Yann Martel, David Magee",
        cast: ["Suraj Sharma", "Irrfan Khan", "Adil Hussain"],
        btsVideo: "https://www.youtube.com/watch?v=l7O8VeaS3L8",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  },
  {
    title: "Cast Away",
    description: "พนักงานส่งของบริษัทจัดส่งด่วนระดับโลก รอดพ้นเครื่องบินตกและต้องไปติดเกาะร้างกลางมหาสมุทรอย่างสันโดษเพื่อเอาชีวิตรอดปีต่อปี",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=27cv0Q8L_30",
    category: "Adventure",
    matchRate: 95,
    year: 2000,
    duration: 143,
    views: 1550000,
    ageRating: "PG-13",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Robert Zemeckis",
        producer: "Tom Hanks, Jack Rapke",
        writer: "William Broyles Jr.",
        cast: ["Tom Hanks", "Helen Hunt"],
        btsVideo: "https://www.youtube.com/watch?v=l7O8VeaS3L8",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  },
  {
    title: "The Revenant",
    description: "นายพรานนำทางคณะดักสัตว์ในป่าดิบลึก ถูกหมีกริซลีย์ทำร้ายบาดเจ็บปางตายและโดนทอดทิ้งอย่างเลือดเย็น เขาจึงคลานผ่านหิมะและอุปสรรคเพื่อล้างแค้น",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=LoebZZ8K5N0",
    category: "Adventure",
    matchRate: 93,
    year: 2015,
    duration: 156,
    views: 1300000,
    ageRating: "R",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Alejandro G. Iñárritu",
        producer: "Arnon Milchan",
        writer: "Michael Punke, Alejandro G. Iñárritu",
        cast: ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"],
        btsVideo: "https://www.youtube.com/watch?v=l7O8VeaS3L8",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  },
  {
    title: "Avatar",
    description: "อดีตนาวิกโยธินพิการถูกส่งไปปฏิบัติภารกิจบนดาวแพนโดรา เพื่อแทรกซึมผ่านร่างกายอวตารของชาวเนวีและค้นพบมิตรภาพรักแท้",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=5PSNL1q3QVY",
    category: "Adventure",
    matchRate: 96,
    year: 2009,
    duration: 162,
    views: 4500000,
    ageRating: "PG-13",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "James Cameron",
        producer: "James Cameron, Jon Landau",
        writer: "James Cameron",
        cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        btsVideo: "https://www.youtube.com/watch?v=l7O8VeaS3L8",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  },
  {
    title: "Indiana Jones and the Raiders of the Lost Ark",
    description: "นักโบราณคดีชื่อดังออกเดินทางสู้ภัยข้ามซีกโลกเพื่อปกป้องหีบพันธสัญญาโบราณที่มีพลังทำลายล้างสูงให้พ้นมือเหล่าทหารนาซีชั่วร้าย",
    thumbnail: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=XkkzKjK111I",
    category: "Adventure",
    matchRate: 91,
    year: 1981,
    duration: 115,
    views: 1200000,
    ageRating: "PG",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Steven Spielberg",
        producer: "Frank Marshall",
        writer: "George Lucas, Lawrence Kasdan",
        cast: ["Harrison Ford", "Karen Allen", "Paul Freeman"],
        btsVideo: "https://www.youtube.com/watch?v=l7O8VeaS3L8",
        btsPhotos: ["https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7"]
      }
    }
  },
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    description: "กัปตันแจ็ค สแปร์โรว์ ผู้แสนแปลกประหลาด ร่วมมือกับช่างเหล็กหนุ่มเพื่อช่วยเหลือนางเอกสาวจากการลักพาตัวของกลุ่มโจรสลัดต้องคำสาปอมตะ",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=naQr0uTrH_Y",
    category: "Adventure",
    matchRate: 95,
    year: 2003,
    duration: 143,
    views: 2400000,
    ageRating: "PG-13",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Gore Verbinski",
        producer: "Jerry Bruckheimer",
        writer: "Ted Elliott, Terry Rossio",
        cast: ["Johnny Depp", "Geoffrey Rush", "Orlando Bloom"],
        btsVideo: "https://www.youtube.com/watch?v=l7O8VeaS3L8",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  },
  {
    title: "The Hobbit: An Unexpected Journey",
    description: "บิลโบ แบ็กกินส์และคณะคนแคระออกเดินทางสู่หุบเขาเดียวดาย เพื่อกอบกู้บ้านเกิดและขุมทรัพย์ที่สาบสูญจากมังกรสม็อกพ่นไฟแสนดุร้าย",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=SDnYMbYB-nU",
    category: "Adventure",
    matchRate: 90,
    year: 2012,
    duration: 169,
    views: 1850000,
    ageRating: "PG-13",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Peter Jackson",
        producer: "Carolynne Cunningham",
        writer: "J.R.R. Tolkien, Fran Walsh",
        cast: ["Martin Freeman", "Ian McKellen", "Richard Armitage"],
        btsVideo: "https://www.youtube.com/watch?v=l7O8VeaS3L8",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  },
  {
    title: "The Mummy",
    description: "กลุ่มนักสำรวจและทหารหนุ่มเดินทางไปไขปริศนาสุสานโบราณอียิปต์ แต่น่าเศร้าที่ความโลภทำให้มัมมี่นักบวชปีศาจฟื้นคืนชีพขึ้นมาสร้างหายนะล้างโลก",
    thumbnail: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=h3ptPbpZjac",
    category: "Adventure",
    matchRate: 88,
    year: 1999,
    duration: 124,
    views: 1400000,
    ageRating: "PG-13",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Stephen Sommers",
        producer: "Sean Daniel",
        writer: "Stephen Sommers",
        cast: ["Brendan Fraser", "Rachel Weisz", "John Hannah"],
        btsVideo: "https://www.youtube.com/watch?v=l7O8VeaS3L8",
        btsPhotos: ["https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7"]
      }
    }
  },
  {
    title: "13 หมูป่า แฟลชคลับ",
    description: "เรื่องราวมหากาพย์ปฏิบัติการช่วยเหลือเด็กและโค้ชทีมฟุตบอลหมูป่าอคาเดมี่ที่ติดอยู่ในถ้ำหลวง-ขุนน้ำนางนอนด้วยผู้เชี่ยวชาญกู้ภัยระดับโลก",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=Ga6RYejoS1I",
    category: "Adventure",
    matchRate: 97,
    year: 2022,
    duration: 142,
    views: 1200000,
    ageRating: "PG-13",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Ron Howard",
        producer: "William M. Connor",
        writer: "William Nicholson",
        cast: ["Viggo Mortensen", "Colin Farrell", "Joel Edgerton"],
        btsVideo: "https://www.youtube.com/watch?v=t5JvD90v-bM",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  },

  // ==================== FANTASY (10) ====================
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    description: "สี่พี่น้องค้นพบดินแดนนาร์เนียที่ซ่อนอยู่ในตู้เสื้อผ้าโบราณ และร่วมมือกับราชสีห์อัสลานเพื่อยุติฤดูหนาวนิรันดร์ของแม่มดขาว",
    thumbnail: "https://images.unsplash.com/photo-1510172951991-856a654063f9?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=pYcGFLgJ8Uo",
    category: "Fantasy",
    matchRate: 91,
    year: 2005,
    duration: 143,
    views: 1300000,
    ageRating: "PG",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Andrew Adamson",
        producer: "Mark Johnson",
        writer: "C.S. Lewis, Ann Peacock",
        cast: ["Tilda Swinton", "Georgie Henley", "William Moseley"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1510172951991-856a654063f9"]
      }
    }
  },
  {
    title: "Alice in Wonderland",
    description: "หญิงสาวตกทะลุโพรงกระต่ายไปยังดินแดนใต้ภิภพสุดแปลกประหลาด และร่วมมือกับช่างทำหมวกเพื่อทวงบัลลังก์คืนให้ราชินีขาว",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=9POCgSRVJH0",
    category: "Fantasy",
    matchRate: 88,
    year: 2010,
    duration: 108,
    views: 950000,
    ageRating: "PG-13",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Tim Burton",
        producer: "Richard D. Zanuck",
        writer: "Lewis Carroll, Linda Woolverton",
        cast: ["Johnny Depp", "Mia Wasikowska", "Helena Bonham Carter"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"]
      }
    }
  },
  {
    title: "Pan's Labyrinth",
    description: "ในสเปนยุคหลังสงคราม เด็กหญิงหนีโลกความจริงอันโหดร้ายโดยเดินทางเข้าไปในเขาวงกตลับและทำภารกิจที่มอบให้โดยวิญญาณฟอนโบราณ",
    thumbnail: "https://images.unsplash.com/photo-1510172951991-856a654063f9?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=EqkBP02O6W8",
    category: "Fantasy",
    matchRate: 94,
    year: 2006,
    duration: 118,
    views: 750000,
    ageRating: "R",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Guillermo del Toro",
        producer: "Alfonso Cuarón",
        writer: "Guillermo del Toro",
        cast: ["Ivana Baquero", "Ariadna Gil", "Sergi López"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1510172951991-856a654063f9"]
      }
    }
  },
  {
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    description: "เด็กหนุ่มค้นพบความจริงว่าเขาเป็นกึ่งมนุษย์กึ่งเทพบุตรของเทพโพไซดอน และถูกกล่าวหาว่าขโมยอัสนีบาตของเทพซุส",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=yYy7G8mFPyI",
    category: "Fantasy",
    matchRate: 86,
    year: 2010,
    duration: 119,
    views: 890000,
    ageRating: "PG",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Chris Columbus",
        producer: "Karen Rosenfelt",
        writer: "Rick Riordan, Craig Titley",
        cast: ["Logan Lerman", "Brandon T. Jackson", "Alexandra Daddario"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"]
      }
    }
  },
  {
    title: "Beauty and the Beast",
    description: "หญิงสาวแสนสวยกตัญญูอาสาเป็นนักโทษทดแทนพ่อในปราสาทของอสูรร้าย และได้เรียนรู้ตัวตนแท้จริงของอสูรที่งดงามภายใต้รูปลักษณ์โหดร้าย",
    thumbnail: "https://images.unsplash.com/photo-1510172951991-856a654063f9?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=e3Nl_TCQXuw",
    category: "Fantasy",
    matchRate: 93,
    year: 2017,
    duration: 129,
    views: 1450000,
    ageRating: "PG",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Bill Condon",
        producer: "David Hoberman",
        writer: "Stephen Chbosky, Evan Spiliotopoulos",
        cast: ["Emma Watson", "Dan Stevens", "Luke Evans"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1510172951991-856a654063f9"]
      }
    }
  },
  {
    title: "Doctor Strange",
    description: "ศัลยแพทย์ประสาทระดับแนวหน้าที่สูญเสียมือในอุบัติเหตุ ค้นหาการรักษาจนกระทั่งได้เปิดประตูมิติสู่ศาสตร์เวทมนตร์ลี้ลับและการปกป้องดวงดาว",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=HSzx-zry1Yo",
    category: "Fantasy",
    matchRate: 95,
    year: 2016,
    duration: 115,
    views: 1800000,
    ageRating: "PG-13",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Scott Derrickson",
        producer: "Kevin Feige",
        writer: "Jon Spaihts, Scott Derrickson",
        cast: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"]
      }
    }
  },
  {
    title: "Fantastic Beasts and Where to Find Them",
    description: "นักสัตว์วิเศษเดินทางมาถึงนิวยอร์กพร้อมกระเป๋าเดินทางลึกลับที่เต็มไปด้วยสิ่งมีชีวิตวิเศษที่ค่อยๆ หลุดรอดออกมาสร้างเรื่องวุ่นวาย",
    thumbnail: "https://images.unsplash.com/photo-1510172951991-856a654063f9?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=Vso5o11LuGU",
    category: "Fantasy",
    matchRate: 89,
    year: 2016,
    duration: 133,
    views: 1250000,
    ageRating: "PG-13",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "David Yates",
        producer: "David Heyman",
        writer: "J.K. Rowling",
        cast: ["Eddie Redmayne", "Katherine Waterston", "Dan Fogler"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1510172951991-856a654063f9"]
      }
    }
  },
  {
    title: "Stardust",
    description: "ชายหนุ่มให้สัญญากับสาวคนรักว่าจะนำดาวตกจากดินแดนเวทมนตร์มาให้ แต่กลับพบว่าดาวตกดวงนั้นแท้จริงคือหญิงสาวผู้มีพลังวิเศษล้ำเลิศ",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=YCO16KbhXl8",
    category: "Fantasy",
    matchRate: 90,
    year: 2007,
    duration: 127,
    views: 650000,
    ageRating: "PG-13",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Matthew Vaughn",
        producer: "Lorenzo di Bonaventura",
        writer: "Jane Goldman, Matthew Vaughn",
        cast: ["Charlie Cox", "Claire Danes", "Michelle Pfeiffer"],
        btsVideo: "https://www.youtube.com/watch?v=R32qYStZ-g4",
        btsPhotos: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"]
      }
    }
  },

  // ==================== ANIMATION (10) ====================
  {
    title: "Toy Story",
    description: "เมื่อตุ๊กตาของเล่นมีชีวิตอย่างลับๆ และต้องร่วมเผชิญภัยร่วมกับนายอำเภอวู้ดดี้และหุ่นอวกาศบัซ ไลท์เยียร์สุดเท่",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=CxwTLktovTU",
    category: "Animation",
    matchRate: 98,
    year: 1995,
    duration: 81,
    views: 1900000,
    ageRating: "G",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "John Lasseter",
        producer: "Ralph Guggenheim",
        writer: "John Lasseter, Pete Docter",
        cast: ["Tom Hanks", "Tim Allen", "Don Rickles"],
        btsVideo: "https://www.youtube.com/watch?v=3KR8_M-G9pA",
        btsPhotos: ["https://images.unsplash.com/photo-1578632767115-351597cf2477"]
      }
    }
  },
  {
    title: "Finding Nemo",
    description: "ปลาการ์ตูนกังวลใจออกเดินทางข้ามมหาสมุทรอันกว้างใหญ่เพื่อตามหาลูกชายที่ถูกจับตัวไปอยู่ในตู้ปลาของคลินิกทำฟัน",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=2zLkasScy7A",
    category: "Animation",
    matchRate: 95,
    year: 2003,
    duration: 100,
    views: 1650000,
    ageRating: "G",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Andrew Stanton",
        producer: "Graham Walters",
        writer: "Andrew Stanton, Bob Peterson",
        cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
        btsVideo: "https://www.youtube.com/watch?v=3KR8_M-G9pA",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  },
  {
    title: "Ratatouille",
    description: "หนูแสนรู้ผู้มีพรสวรรค์ในการชิมและทำอาหารอย่างประณีต ร่วมมือกับเด็กหนุ่มล้างจานเพื่อปรุงรสชาติที่สั่นสะเทือนปารีส",
    thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=NgsQ8mVEa8U",
    category: "Animation",
    matchRate: 93,
    year: 2007,
    duration: 111,
    views: 1100000,
    ageRating: "G",
    university: "มหาวิทยาลัยกรุงเทพ",
    crew: {
      create: {
        director: "Brad Bird",
        producer: "Brad Lewis",
        writer: "Brad Bird, Jan Pinkava",
        cast: ["Patton Oswalt", "Ian Holm", "Lou Romano"],
        btsVideo: "https://www.youtube.com/watch?v=3KR8_M-G9pA",
        btsPhotos: ["https://images.unsplash.com/photo-1518609878373-06d740f60d8b"]
      }
    }
  },
  {
    title: "Wall-E",
    description: "หุ่นยนต์บดอัดขยะบนดาวโลกที่ไร้ผู้คน ได้พบรักกับหุ่นสำรวจคนใหม่และออกเดินทางกอบกู้มนุษยชาติในอวกาศกว้างใหญ่",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=8-_9n554ppc",
    category: "Animation",
    matchRate: 96,
    year: 2008,
    duration: 98,
    views: 1250000,
    ageRating: "G",
    university: "จุฬาลงกรณ์มหาวิทยาลัย",
    crew: {
      create: {
        director: "Andrew Stanton",
        producer: "Jim Morris",
        writer: "Andrew Stanton, Jim Reardon",
        cast: ["Ben Burtt", "Elissa Knight", "Jeff Garlin"],
        btsVideo: "https://www.youtube.com/watch?v=3KR8_M-G9pA",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  },
  {
    title: "Shrek",
    description: "ยักษ์เขียวแสนรักสงบจำใจออกทำภารกิจช่วยเหลือเจ้าหญิงฟิโอน่าผู้มีความลับปริศนา เพื่อแลกกับการทวงคืนบึงน้ำอันสงบสุขของตัวเขาเอง",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=OoRdpZ5s2V8",
    category: "Animation",
    matchRate: 88,
    year: 2001,
    duration: 90,
    views: 1400000,
    ageRating: "PG",
    university: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    crew: {
      create: {
        director: "Andrew Adamson, Vicky Jenson",
        producer: "Aron Warner",
        writer: "Ted Elliott, Terry Rossio",
        cast: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
        btsVideo: "https://www.youtube.com/watch?v=3KR8_M-G9pA",
        btsPhotos: ["https://images.unsplash.com/photo-1578632767115-351597cf2477"]
      }
    }
  },
  {
    title: "ดาบพิฆาตอสูร: ศึกรถไฟสู่นิรันดร์",
    description: "ทันจิโร่และกลุ่มนักล่าอสูรขึ้นไปสืบสวนคดีคนหายตัวไปบนรถไฟร่วมกับเสาหลักเพลิงเรนโงคุ และเผชิญหน้าอสูรข้างแรมผู้ควบคุมความฝัน",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=ATJYac_dORw",
    category: "Animation",
    matchRate: 97,
    year: 2020,
    duration: 117,
    views: 1800000,
    ageRating: "R",
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    crew: {
      create: {
        director: "Haruo Sotozaki",
        producer: "Masanori Miyake",
        writer: "Koyoharu Gotouge",
        cast: ["Natsuki Hanae", "Akari Kito", "Yoshitsugu Matsuoka"],
        btsVideo: "https://www.youtube.com/watch?v=3KR8_M-G9pA",
        btsPhotos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
      }
    }
  }
];
