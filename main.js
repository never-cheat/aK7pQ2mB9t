const courses = [
    {
        number: 1,
        title: "Introduction Class",
        videoUrl: "https://us06web.zoom.us/rec/share/WgcN8PdXx3CmHIES8xUoAuUMkiyRwlKS9_tO9hiSQ6OUHnZDEu3oXKJC2XrBV4K8.2jU2mByfj_rl4-YF"
    },
    {
        number: 2,
        title: "Percentage class 1",
        videoUrl: "https://us06web.zoom.us/rec/share/N9dHsbL-Jh2UcGBXqMg5Y0P4TXVPTjLp7M3pSECyjT9F62Xn0SSjgu7TvUEkCjo_.41UVb422UO0UknbY"
    },
    {
        number: 3,
        title: "Percentage class 2",
        videoUrl: "https://us06web.zoom.us/rec/share/UfoiayixhQj6rSAP0Nmi69aJMpjjIgE6xYlWdXVzyuoX7-4-RC2Nx-xQ65ZjOUpn.qJZsFRQdNnEBmFEr"
    },
    {
        number: 4,
        title: "Percentage class 3",
        videoUrl: "https://us06web.zoom.us/rec/share/pgVIMvzgr4VE16QAo4NLrPtLRoyTmJko9UjmAtIFrgnEMJ_gXD2r6m1WYdZnoUI4._OgLIYz74KW02wWW"
    },
    {
        number: 5,
        title: "Percentage class 4",
        videoUrl: "https://us06web.zoom.us/rec/share/ZgK3S60TpGd1xn7lcoWz1Dv0J_rrNLf66tztFNtMc0oqpHbmaOy8GGq8kMmssJKx.v1heNFX4yx4MC9tg"
    },
    {
        number: 6,
        title: "Percentage class 5",
        videoUrl: "https://us06web.zoom.us/rec/share/_d6T40PgAeOR_7A87hqimzVD_7R5c4oJfaMNRB8328yHcuY6TGTCHoigDzBl17mK.r3zzlWP6zWYnLSIt"
    },
    {
        number: 7,
        title: "Percentage Last class",
        videoUrl: "https://us06web.zoom.us/rec/share/q_gfRsBHP5RdTBZYNIugZ4mXNDBqus3j2Eo6QR_S_BE8C5d0UcUEkh3dO552yytp.WWP37tbVmhgn6trC"
    },
    {
        number: 8,
        title: "Profit and loss Class 1",
        videoUrl: "https://us06web.zoom.us/rec/share/ryhiOd6aFMsVmB4OS2QWTAvHHkCJfDH0uPex_gyPITKDeiltxuPe3_5XY5tS9zEx.MXj6MBzjJeK2mKTc"
    },
    {
        number: 9,
        title: "Profit and loss Class 2",
        videoUrl: "https://us06web.zoom.us/rec/share/JIW-wdUvjrCv0yvUG8LUwtlO3llwW83pQWDcGF1ler2tMWwkav7Kj6ZKqcaam12V.ebTcfE7RCiP9gWjz"
    },
    {
        number: 10,
        title: "Profit and loss Class 3",
        videoUrl: "https://us06web.zoom.us/rec/share/3y7FRx74qG5fwi-YZMSJqZFzZgiBD1M5pqk3-qrbYgrXupE7Dxm_0Wy-VlXiha8E.wx7aDqpV_Fo2oFR3"
    },
    {
        number: 11,
        title: "Profit and loss 4",
        videoUrl: "https://us06web.zoom.us/rec/share/Kb-8MbGJaLFLp9al6gGx_9tAbaCBx5yJ2GL8Ad6ZITw4ltpbGyfwDHt4sC697E_P.pqQSJzCca8eT5BjY"
    },
    {
        number: 12,
        title: "Profit and loss Class 5",
        videoUrl: "https://us06web.zoom.us/rec/share/vN7kZi8ETUqwX9v9oNg_PAPC3CJTDH3UooiIUQMrjbezMeSzpblsF9DSQb-rJVg.vn7egFCV7VAjDOG6"
    },
    {
        number: 13,
        title: "Profit and loss Class 6",
        videoUrl: "https://us06web.zoom.us/rec/share/vBGhFEJaR7RNJRHG0xVusJCK7ha7oc8a35Ded6_S5a5mtQpz3H2RD_NG2VNloisP.zeKQbFznXxw08BpE"
    },
    {
        number: 14,
        title: "Interest Class 1",
        videoUrl: "https://us06web.zoom.us/rec/share/2PyLkoMhvZ-jlVoQQ23Y84KBOSIbC8bFQLtzkFAmk99puDZGY7CNQHd5FrGWAHKu.6t30G9HcjONIJMRl"
    },
    {
        number: 15,
        title: "Interest Class 2",
        videoUrl: "https://us06web.zoom.us/rec/share/vKme4TSBVW4v7LSnJ8jF1rZWg4WfChw4_aeNKqmtn_wiipBxpE4JJmUz6DBxKBzp.FWjyB8BYFFhxvRJL"
    },
    {
        number: 16,
        title: "Interest Class 3",
        videoUrl: "https://us06web.zoom.us/rec/share/WbmKj86WkJazT9brt_MeeX3c517IdRLEKiQUjLgnDnD2g-DMRqKdVlg2f2pNyMFW.cybJGJjkYyAc0_mM"
    },
    {
        number: 17,
        title: "Interest Class 4",
        videoUrl: "https://us06web.zoom.us/rec/share/aGLWJj5S3RogslbsuJ-Fd8Nbv4zJypfZcbON21KRlIkWHOcdUQegZhFcfplrYBJJ.UtbM2WKtXn2cFKos"
    },
    {
        number: 18,
        title: "Interest Class 5",
        videoUrl: "https://us06web.zoom.us/rec/share/8XrlS9NZVsqlCr4MVgZ53oMzWIJDmxgEYRfWxJhIjsdab4wZWArKGu5LI9wzFMnb.6Lb916fLOjOEfjgt"
    },
    {
        number: 19,
        title: "Average Class 1",
        videoUrl: "https://us06web.zoom.us/rec/share/cKab1cfDNjw-DHxZcS4oIcaHe6C9vum8IBKIzvBw8QCfGLf4o2bKa3wVQ5gD4UPq.XMGYUFcI5RYKfDyy"
    },
    {
        number: 20,
        title: "Average Class 2",
        videoUrl: "https://us06web.zoom.us/rec/share/2euPAoMw5bwgbpKJkmcBJbFbs9t03QJQB7LRXiFIVo70ZoWDXKAERV-W9UlYBDL9.9fMMImLQ5s5K2S8D"
    },
    {
        number: 21,
        title: " Number System Class 1",
        videoUrl: "https://us06web.zoom.us/rec/share/c_zWb_pgBookijhlBlsn_9-EukU1kMw6VplM7aEByRMIQsgeedXs9xf16KX6oXYW.zxOeZ6KEHHzaWWiF"
    },
    {
        number: 22,
        title: "Number System Class 2",
        videoUrl: "https://us06web.zoom.us/rec/share/Pqpec2UkhqpWbIvrnhrQMLLOmXNcJ6V9-vnkoTkgRNZswOZljJ1s7oMXxBRn5vXh.rVXnpbtzoQ4kkOCD"
    },
    {
        number: 23,
        title: "Number System Class 3",
        videoUrl: "https://us06web.zoom.us/rec/share/9jKx4hAL5eNoQTWgDbqGJwLTpoajIs3O-BJeC7FdAx6TiogrOFvJzXnXm37XuIPZ.JK_5N7kbBouv_5KM"
    },
    {
        number: 24,
        title: "Number System Class 4",
        videoUrl: "https://us06web.zoom.us/rec/share/kz1StIeI2Usp4o3kHi_ui7nYid4_WI9-WMN4tj05WDQE74f-C2QGUb6zhkE-5Hw.4xRcs9eR-euTU4lR"
    },
    {
        number: 25,
        title: "Number System Class 5",
        videoUrl: "https://us06web.zoom.us/rec/share/ZdtHZCDmtV3NeI7ewbY8TSAioXYDzlOM527flIWL6BlCuluEZYjcQUnoKkmTRpBG.h2J7FwPwdLqCSWnj"
    },
    {
        number: 26,
        title: "Number System Class 6",
        videoUrl: "https://us06web.zoom.us/rec/share/FgsLXF1RqoFr8E6pSEhDz00lH6QL9v3NI38hp-BSmLNtBFdpblOdaHgi-aqIoGM.LTnnr0BHFGjOzI8M"
    },
    {
        number: 27,
        title: "Number System Class 7",
        videoUrl: "https://us06web.zoom.us/rec/share/MLpyqtErrYVCdcdl1PTEXB8bImrxJXnUIkBSt4t108sRTHRd-E7WhVj1Z0Ogl69E.QaIDMC22V5WUrBYE"
    },
    {
        number: 28,
        title: "Number System Class 8",
        videoUrl:"https://us06web.zoom.us/rec/share/BhDxgYlj35rqLkXHOn4Z0w7o9nziayP8rie2bcSbMtvtfJciNWWmtOzXxzsUqDVh.tDB_CMmu543tbxGD"
    },
    {
        number: 29,
        title: "Number System Class 9",
        videoUrl: "https://us06web.zoom.us/rec/share/rudyVpsmjhL1FRE-d58-PWaMGdhPIJz9Y5s5ByRZ7yDS_-gtV0E_FxAvM3iY3HSe.Tel_beNA8Lwv07IA"
            
    },
    {
        number: 30,
        title: "Number System Class 10",
        videoUrl: 'https://us06web.zoom.us/rec/share/zJ6NV81J5Z2FF4NKLttB9LRkxvkV5T6Ge_EERpzeyTjhVBlmv-nqk8uXsJZxhI5Z.Y9qaCCSeFPW2vWuu'
            
    },
    {
        number: 31,
        title: "Number System Class 11 ",
        videoUrl: 'https://us06web.zoom.us/rec/share/whe53r8RfCkcWbnhWifUu3VVK05osNo9IS6ZdLgSfRNOdf5qJ6BkXBOKHcLn3uuW.zr7_VGQP_A0l5Fbd'
            
    },
    {
        number: 32 ,
        title: "Number System Class 12",
        videoUrl: 'https://us06web.zoom.us/rec/share/RZ3YO8vC6mp5hHttuoGIHvcwosRtbeLm8YHuuXqWGpWwFzSktVcq7RZwieRurahT.kbg1IsvNsEtTWC1J'
            
    },
    {
        number: 33,
        title: "LCM HCF Class 1 ",
        videoUrl: 'https://us06web.zoom.us/rec/share/IYFfI_KjvAm2c5eUTQqqVVXO9Aj5nCGx8cpaW9J3jgCvWvlAdp8Lv-SnbkRGbf1p.Qn-YvM0iTMlCo_zY'
            
    },
    {
        number: 34,
        title: "LCM HCF Class 2",
        videoUrl: 'https://us06web.zoom.us/rec/share/xjDhwhkvtWyHEz16Fpmz5xaXspBVulP8vb0X37V9JYdyW0f0ut9YYsjR-A0kT-o3.Nowl5do1cDShZfdq'
            
    },
    {
        number: 35,
        title: "LCM HCF Class 3",
        videoUrl: 'https://us06web.zoom.us/rec/share/yG3xjG9kL_GRV2hygv_1LhlM0r6jNqZ81H6rXeYY2-feSzQgsLn2KvLAdrP4Imw.YL2FSRTuPRUAMHJi'
            
    },
    {
        number: 36,
        title: "Equation Class 1",
        videoUrl: 'https://us06web.zoom.us/rec/share/JTEoeU8j5NQeo2e3yt_vGhomzeSerOqkr76yJ-FOpHmKroq8RJ7HN08AuvjYcYnR.CKv7jKVWkNTk8wR_'
            
    },
    {
        number: 37,
        title: "Equation Class 2",
        videoUrl: 'https://us06web.zoom.us/rec/share/nzOhf-X0r2g5CsAx8IWxMo4WS_gxv9X4mB2PeOJRZkP0ZCytYECCEAivKhGo1tTu.EoKb6o2zPJzai17W'
            
    },
    {
        number: 38,
        title: "Equation Class 3",
        videoUrl: 'https://us06web.zoom.us/rec/share/2ETALIerNs5B-PMgJsrkeAbhel4JlaSooaFGr59fqcWCfqg1-Gq3--iBJankwZTt.Rzw7nlleofkFz-Dm'
            
    },
    {
        number: 39,
        title: "Equation Class 4",
        videoUrl: 'https://us06web.zoom.us/rec/share/97OatIjsbpsNDszNe0PDRO_BmRs-RkpZAetCBQ5lmaqIvJmIRpOtBMrgkXBWE31K.74x1IgaQgSahAIbt'
            
    },
    {
        number: 40,
        title: "Equation Class 5",
        videoUrl: 'https://us06web.zoom.us/rec/share/2YegExj9qmUYzgMLGKEhnpLskHHxNl1humExhuhyf-_kAbP1dDSHaCI2JnMjPHVf.wYmi1CIRhvh-WTaJ'
            
    },
    {
        number: 41,
        title: "Equation Class 6",
        videoUrl: 'https://us06web.zoom.us/rec/share/qv1jQe9x-aQcda8pt2IMXs_efaUePjQZqYdoGtKOW2fBL7rwxqS6rsbCQ2nl1Icw.CBCiEsi4yDHoS1g9'
            
    },
    {
        number: 42,
        title: "Algebra Class 1",
        videoUrl: "https://us06web.zoom.us/rec/share/rLebD5D-y8VqegqmzbupwD_Gq6NqBCKVZq8yO1SfHNZO_fKi-w1Gbgd-lfgnUgoL.CYS8WUT68-ks2nTg"
    },
    {
        number: 43,
        title: "Algebra Class 2",
        videoUrl: "https://us06web.zoom.us/rec/share/N1iSpTAp0IFbeqZPGMzH9BGDdpj2ygPewspmv_Snrx-TUnQzd53GhMRAO6A111rn.0H4iDAoV2q39ieHz"
    },
    {
        number: 44,
        title: "Algebra Class 3",
        videoUrl: "https://us06web.zoom.us/rec/share/tAg4tQDt3-SebGof7TQ7-bf5iE5k4Ohkyn37o6619RKQkVtjcsMtOPGslXP4dAy9.4TnQFIvebx5ZqZjv"
    },
    {
        number: 45,
        title: "Algebra Class 4",
        videoUrl: "https://us06web.zoom.us/rec/share/TYhhJcXIYXOqrZ3WHAZ6wXq_ZoXjmGYDRED6NdGzJLBOOiqQ9bBBN4iF7sXRZHA3.0lE1ZAOiugvAer_o"
    },
];

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
        <div class="course-header">
            <div class="course-number">Class ${course.number}</div>
            <div class="course-title">${course.title}</div>
        </div>
        <div class="course-body">
            <a href="${course.videoUrl}" class="video-link" target="_blank" rel="noopener noreferrer">
                Watch Video ▶
            </a>
        </div>
    `;
    return card;
}

function renderCourses(coursesToRender) {
    const grid = document.getElementById('courseGrid');
    const noResults = document.getElementById('noResults');
    
    grid.innerHTML = '';
    
    if (coursesToRender.length === 0) {
        noResults.style.display = 'block';
        grid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        grid.style.display = 'grid';
        
        coursesToRender.forEach(course => {
            grid.appendChild(createCourseCard(course));
        });
    }
    
    document.getElementById('visibleClasses').textContent = coursesToRender.length;
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) ||
        course.number.toString().includes(searchTerm)
    );
    
    renderCourses(filteredCourses);
}

function init() {
    document.getElementById('totalClasses').textContent = courses.length;
    renderCourses(courses);
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
}

document.addEventListener('DOMContentLoaded', init);
