/* ==========================================================================
   BIOSTART script.js
   BIOSTART GLOBAL STATE & COMPREHENSIVE DATASET
   ========================================================================== */

   const VALID_NJ_TOWNS = ["absecon", "adelphia", "allamuchy", "allendale", "allenhurst", "allentown", "allenwood", "alloway", "alpine", "andover", "annandale", "apo", "asbury", "asbury park", "atco", "atlantic city", "atlantic highlands", "audubon", "augusta", "avalon", "avenel", "avon by the sea", "baptistown", "barnegat", "barnegat light", "barrington", "basking ridge", "bayonne", "bayville", "beach haven", "beachwood", "bedminster", "belford", "belle mead", "belleville", "bellmawr", "belmar", "belvidere", "bergenfield", "berkeley heights", "berlin", "bernardsville", "beverly", "birmingham", "blackwood", "blairstown", "blawenburg", "bloomfield", "bloomingdale", "bloomsbury", "bogota", "boonton", "bordentown", "bound brook", "bradley beach", "branchville", "brick", "bridgeport", "bridgeton", "bridgewater", "brielle", "brigantine", "broadway", "brookside", "browns mills", "budd lake", "buena", "burlington", "butler", "buttzville", "caldwell", "califon", "camden", "cape may", "cape may court house", "cape may point", "carlstadt", "carteret", "cedar brook", "cedar grove", "cedar knolls", "cedarville", "changewater", "chatham", "chatsworth", "cherry hill", "chester", "chesterfield", "clark", "clarksboro", "clayton", "clementon", "cliffside park", "cliffwood", "clifton", "clinton", "closter", "collingswood", "cologne", "colonia", "colts neck", "columbia", "columbus", "convent station", "cookstown", "cranbury", "cranford", "cream ridge", "cresskill", "dayton", "deal", "deepwater", "deerfield street", "delaware", "delmont", "demarest", "dennisville", "denville", "deptford", "dividing creek", "dorchester", "dorothy", "dover", "dpo", "dumont", "dunellen", "east brunswick", "east hanover", "east orange", "east rutherford", "eatontown", "edgewater", "edison", "egg harbor city", "egg harbor township", "elizabeth", "elizabethport", "elmer", "elmwood park", "elwood", "emerson", "englewood", "englewood cliffs", "englishtown", "essex fells", "estell manor", "ewan", "fair haven", "fair lawn", "fairfield", "fairton", "fairview", "fanwood", "far hills", "farmingdale", "flagtown", "flanders", "flemington", "florence", "florham park", "fords", "forked river", "fort lee", "fort monmouth", "fortescue", "franklin", "franklin lakes", "franklin park", "franklinville", "freehold", "frenchtown", "garfield", "garwood", "gibbsboro", "gibbstown", "gillette", "gladstone", "glassboro", "glasser", "glen gardner", "glen ridge", "glen rock", "glendora", "glenwood", "gloucester", "gloucester city", "goshen", "great meadows", "green creek", "green village", "greendell", "greenwich", "grenloch", "hackensack", "hackettstown", "haddon heights", "haddonfield", "hainesport", "haledon", "hamburg", "hamilton", "hammonton", "hampton", "hancocks bridge", "harrington park", "harrison", "harrisonville", "hasbrouck heights", "haskell", "haworth", "hawthorne", "hazlet", "heislerville", "helmetta", "hewitt", "hibernia", "high bridge", "highland lakes", "highland park", "highlands", "hightstown", "hillsborough", "hillsdale", "hillside", "ho ho kus", "hoboken", "holmdel", "hopatcong", "hope", "hopewell", "howell", "imlaystown", "ironia", "irvington", "iselin", "island heights", "jackson", "jefferson", "jersey city", "jobstown", "johnsonburg", "joint base mdl", "juliustown", "keansburg", "kearny", "keasbey", "kendall park", "kenilworth", "kenvil", "keyport", "kingston", "kinnelon", "lafayette", "lake hiawatha", "lake hopatcong", "lakehurst", "lakewood", "lambertville", "landing", "landisville", "lanoka harbor", "lavallette", "lawnside", "lawrence township", "layton", "lebanon", "ledgewood", "leeds point", "leesburg", "leonardo", "leonia", "liberty corner", "lincoln park", "lincroft", "linden", "linwood", "little falls", "little ferry", "little silver", "little york", "livingston", "lodi", "long branch", "long valley", "longport", "lumberton", "lyndhurst", "lyons", "madison", "magnolia", "mahwah", "malaga", "manahawkin", "manasquan", "manchester township", "mantoloking", "mantua", "manville", "maple shade", "maplewood", "margate city", "marlboro", "marlton", "marmora", "martinsville", "matawan", "mauricetown", "mays landing", "maywood", "mc afee", "medford", "mendham", "merchantville", "metuchen", "mickleton", "middlesex", "middletown", "middleville", "midland park", "milford", "millburn", "millington", "millstone township", "milltown", "millville", "milmay", "mine hill", "minotola", "mizpah", "monmouth beach", "monmouth junction", "monroe township", "monroeville", "montague", "montclair", "montvale", "montville", "moonachie", "moorestown", "morganville", "morris plains", "morristown", "mount arlington", "mount ephraim", "mount freedom", "mount holly", "mount laurel", "mount royal", "mount tabor", "mountain lakes", "mountainside", "mullica hill", "national park", "navesink", "neptune", "neshanic station", "netcong", "new brunswick", "new egypt", "new gretna", "new lisbon", "new milford", "new providence", "new vernon", "newark", "newfield", "newfoundland", "newport", "newton", "newtonville", "norma", "normandy beach", "north arlington", "north bergen", "north brunswick", "northfield", "northvale", "norwood", "nutley", "oak ridge", "oakhurst", "oakland", "oaklyn", "ocean city", "ocean gate", "ocean grove", "ocean view", "oceanport", "oceanville", "ogdensburg", "old bridge", "oldwick", "oradell", "orange", "oxford", "palisades park", "palmyra", "paramus", "park ridge", "parlin", "parsippany", "passaic", "paterson", "paulsboro", "peapack", "pedricktown", "pemberton", "pennington", "penns grove", "pennsauken", "pennsville", "pequannock", "perth amboy", "phillipsburg", "picatinny arsenal", "pine beach", "pine brook", "piscataway", "pitman", "pittstown", "plainfield", "plainsboro", "pleasantville", "pluckemin", "point pleasant beach", "pomona", "pompton lakes", "pompton plains", "port elizabeth", "port monmouth", "port murray", "port norris", "port reading", "port republic", "pottersville", "princeton", "princeton junction", "quakertown", "quinton", "rahway", "ramsey", "rancocas", "randolph", "raritan", "readington", "red bank", "richland", "richwood", "ridgefield", "ridgefield park", "ridgewood", "ringoes", "ringwood", "rio grande", "river edge", "riverdale", "riverside", "riverton", "robbinsville", "rochelle park", "rockaway", "rocky hill", "roebling", "roosevelt", "roseland", "roselle", "roselle park", "rosemont", "rosenhayn", "roxbury", "rumson", "runnemede", "rutherford", "saddle brook", "saddle river", "salem", "sayreville", "schooleys mountain", "scotch plains", "sea girt", "sea isle city", "seaside heights", "seaside park", "secaucus", "sergeantsville", "sewaren", "sewell", "shiloh", "short hills", "shrewsbury", "sicklerville", "skillman", "somerdale", "somers point", "somerset", "somerville", "south amboy", "south bound brook", "south dennis", "south hackensack", "south orange", "south plainfield", "south river", "south seaville", "sparta", "spotswood", "spring lake", "springfield", "stanhope", "stanton", "stewartsville", "stillwater", "stirling", "stockholm", "stockton", "stone harbor", "stratford", "strathmere", "succasunna", "summit", "sussex", "swartswood", "swedesboro", "teaneck", "tenafly", "tennent", "teterboro", "thorofare", "three bridges", "titusville", "toms river", "totowa", "towaco", "township of washington", "tranquility", "trenton", "tuckahoe", "tuckerton", "union", "union city", "vauxhall", "ventnor city", "vernon", "verona", "vienna", "villas", "vincentown", "vineland", "voorhees", "waldwick", "wallington", "wallpack center", "wanaque", "waretown", "warren", "washington", "watchung", "waterford works", "wayne", "weehawken", "wenonah", "west berlin", "west creek", "west long branch", "west milford", "west new york", "west orange", "westfield", "westville", "westwood", "wharton", "whippany", "whitehouse", "whitehouse station", "whitesboro", "wickatunk", "wildwood", "williamstown", "willingboro", "windsor", "winslow", "wood ridge", "woodbine", "woodbridge", "woodbury", "woodbury heights", "woodcliff lake", "woodstown", "wrightstown", "wyckoff", "zarephath"];

const HIGH_SCHOOLS = [
    { id: 'hs1', name: 'Bergen County Academies', county: 'Bergen', town: 'Hackensack', ageMin: 10, season: 'Fall', url: 'https://www.bergen.org/site/Defaulta575.html?PageID=4583', notes: 'Top specialized high school in Hackensack; middle schoolers apply during 8th grade.' },
    { id: 'hs2', name: 'Burlington County Institute of Technology', county: 'Burlington', town: 'Westampton', ageMin: 10, season: 'Fall', url: 'https://www.bcit.cc/o/bcit/page/biomedical-science', notes: 'Biomedical Science academy track.' },
    { id: 'hs3', name: 'Camden County Technical Schools', county: 'Camden', town: 'Sicklerville', ageMin: 10, season: 'Fall', url: 'https://www.ccts.org/apps/pages/index.jsp?uREC_ID=260569&type=d&termREC_ID=&pREC_ID=1157907', notes: 'Career technical biological sciences.' },
    { id: 'hs4', name: 'Gloucester County Institute of Technology', county: 'Gloucester', town: 'Sewell', ageMin: 10, season: 'Fall', url: 'https://www.gcit.org/admissions/career-programs/academy-of-biological-sciences', notes: 'Academy of Biological Sciences.' },
    { id: 'hs5', name: 'Hunterdon County Vocational School District', county: 'Hunterdon', town: 'Flemington', ageMin: 10, season: 'Fall', url: 'https://bsa.hcvsd.org/apps/pages/index.jsp?uREC_ID=412789&type=d', notes: 'Biomedical Sciences Academy program.' },
    { id: 'hs6', name: 'Middlesex County Magnet Schools', county: 'Middlesex', town: 'Edison', ageMin: 10, season: 'Fall', url: 'https://www.mcmsnj.net/innovation-magnet-school/program-3-clone-clone', notes: 'Innovation Magnet School STEM program in Edison.' },
    { id: 'hs7', name: 'Biotechnology High School', county: 'Monmouth', town: 'Freehold', ageMin: 10, season: 'Fall', url: 'https://www.bths.mcvsd.org/', notes: 'Full-time specialized biotechnology high school in Freehold.' },
    { id: 'hs8', name: 'Somerset County Vocational and Technical School', county: 'Somerset', town: 'Bridgewater', ageMin: 10, season: 'Fall', url: 'https://www.scvths.org/programs/career-technical-programs/program-overviews-printable', notes: 'Career technical biological science programs in Bridgewater.' },
    { id: 'hs9', name: 'MCST Biotech Academy', county: 'Morris', town: 'Denville', ageMin: 10, season: 'Fall', url: 'https://www.mcvts.org/mcvsd-programs/full-time-academies/biotechnology', notes: 'Academy for Biotechnology at Morris County School of Technology in Denville.' },
    { id: 'hs10', name: 'Passaic County Technical Institute', county: 'Passaic', town: 'Wayne', ageMin: 10, season: 'Fall', url: 'https://pcti.pctvs.org/o/pcti/page/new-for-23-24-biotechnology-early-college-option', notes: 'Biotechnology early college option in Wayne. Offers Biotility BACE exam credentialing.' },
    { id: 'hs11', name: 'Union County Magnet High School', county: 'Union', town: 'Scotch Plains', ageMin: 10, season: 'Fall', url: 'https://mhs.ucvts.org/', notes: 'Magnet high school for science, math, and technology.' }
];

const COLLEGES = [
    { id: 'col1', name: 'Rutgers Biotechnology Program', location: 'New Brunswick, NJ', town: 'New Brunswick', isNJ: true, ageMin: 16, season: 'All Seasons', acceptance: '~50%+', cost: '$16,000/yr', notes: 'Large research campus with guaranteed 4-year housing, B.S. Biotech track, and Aresty research lab access.', url: 'https://biotech.rutgers.edu/' },
    { id: 'col2', name: 'Middlesex College', location: 'Edison, NJ', town: 'Edison', isNJ: true, ageMin: 15, season: 'All Seasons', acceptance: 'Open Enrollment', cost: '$4,500/yr', notes: 'Biotechnology A.S. degree; seamless transfer pathways to Rutgers and NJIT.', url: 'https://middlesexcollege.edu/' },
    { id: 'col3', name: 'New Jersey Institute of Technology (NJIT)', location: 'Newark, NJ', town: 'Newark', isNJ: true, ageMin: 16, season: 'Fall', acceptance: 'Selective', cost: '$18,000/yr', notes: 'Urban STEM institute with bioengineering, bioinformatics, and R/Python data science integration.', url: 'https://www.njit.edu/' },
    { id: 'col4', name: 'County College of Morris (CCM)', location: 'Randolph, NJ', town: 'Randolph', isNJ: true, ageMin: 15, season: 'All Seasons', acceptance: 'Open Enrollment', cost: '$5,000/yr', notes: 'Biology Pre-Professional Biotechnology A.S. Degree track in Randolph/Denville area with hands-on wet lab courses.', url: 'https://www.ccm.edu/programs/biology/' },
    { id: 'col5', name: 'Kean University', location: 'Union, NJ', town: 'Union', isNJ: true, ageMin: 16, season: 'Spring', acceptance: 'Safety (50%+)', cost: '$12,500/yr', notes: '5-year B.S./M.S. STEM Biotechnology and Molecular Biology programs.', url: 'https://www.kean.edu/' },
    { id: 'col6', name: 'Rowan University', location: 'Glassboro, NJ', town: 'Glassboro', isNJ: true, ageMin: 16, season: 'All Seasons', acceptance: 'Selective', cost: '$14,000/yr', notes: 'Offers Translational Biomedical Sciences, Molecular Cellular Biology, & BME.', url: 'https://admissions.rowan.edu/' },
    { id: 'col7', name: 'William Paterson University', location: 'Wayne, NJ', town: 'Wayne', isNJ: true, ageMin: 16, season: 'Fall', acceptance: 'Safety (50%+)', cost: '$13,800/yr', notes: 'BS in Biotechnology with modern laboratory research facilities.', url: 'https://www.wpunj.edu/' },
    { id: 'col8', name: 'Saint Peter\'s University', location: 'Jersey City, NJ', town: 'Jersey City', isNJ: true, ageMin: 16, season: 'Spring', acceptance: 'Safety (50%+)', cost: '$38,000/yr', notes: 'Applied Biotechnology & Biochemistry options.', url: 'https://www.saintpeters.edu/' },
    { id: 'col9', name: 'Princeton University', location: 'Princeton, NJ', town: 'Princeton', isNJ: true, ageMin: 17, season: 'Fall', acceptance: '~4.0%', cost: '~$80,000 before aid', notes: 'World-renowned Molecular Biology research program & genomic research facilities.', url: 'https://molbio.princeton.edu/' },
    { id: 'col10', name: 'University of Pennsylvania (UPenn)', location: 'Philadelphia, PA', town: 'Philadelphia', isNJ: false, ageMin: 17, season: 'Fall', acceptance: '~5.9%', cost: '$85,000 before aid', notes: 'Top-tier bioengineering and cell & molecular biology undergraduate research programs.', url: 'https://www.upenn.edu/' },
    { id: 'col11', name: 'Johns Hopkins University', location: 'Baltimore, MD', town: 'Baltimore', isNJ: false, ageMin: 17, season: 'Fall', acceptance: '~7-8%', cost: '~$95,000 before aid', notes: 'Premier medical and biomedical research university in Baltimore, MD.', url: 'https://www.jhu.edu/' },
    { id: 'col12', name: 'Cornell University', location: 'Ithaca, NY', town: 'Ithaca', isNJ: false, ageMin: 17, season: 'Fall', acceptance: '~7.3%', cost: '$88,000 before aid', notes: 'Comprehensive Biological Engineering and Plant Molecular Genetics programs.', url: 'https://www.cornell.edu/' },
    { id: 'col13', name: 'Massachusetts Institute of Technology (MIT)', location: 'Cambridge, MA', town: 'Cambridge', isNJ: false, ageMin: 17, season: 'Fall', acceptance: '~4.6%', cost: '$92,760 before aid', notes: 'Premier Biological Engineering degree program in Cambridge, MA.', url: 'https://www.mit.edu/' },
    { id: 'col14', name: 'Stanford University', location: 'Silicon Valley, CA', town: 'Stanford', isNJ: false, ageMin: 17, season: 'Fall', acceptance: '~3.6%', cost: '$97,545 before aid', notes: 'Top bioengineering research university in Silicon Valley, CA.', url: 'https://www.stanford.edu/' }
];

const JOBS = [
    { id: 'job1', name: 'Bayer Student Internship Program', cat: 'internship', town: 'Whippany', isNJ: true, ageMin: 18, season: 'Summer', url: 'https://www.bayer.com/en/us/career/studentsandgraduates', email: 'accommodations_US@bayer.com', notes: 'Pharmaceutical & agricultural biotech roles in Whippany / Morristown, NJ.' },
    { id: 'job2', name: 'U.S. Food & Drug Administration (FDA) Pathways', cat: 'job', town: 'Parsippany', isNJ: true, ageMin: 16, season: 'Summer', url: 'https://www.fda.gov/about-fda/jobs-fda/pathways-students-and-recent-graduates-fda', email: 'ORARecruitment@fda.hhs.gov', notes: 'Paid student internships ($) and federal career pathways in Parsippany, NJ.' },
    { id: 'job3', name: 'Atlantic Health System Administrative Fellowship', cat: 'internship', town: 'Morristown', isNJ: true, ageMin: 16, season: 'All Seasons', url: 'https://www.atlantichealth.org/professionals/internship-programs', email: 'adminfellow@atlantichealth.org', notes: 'Healthcare administration internships across NJ hospitals including Morristown Medical Center.' },
    { id: 'job4', name: 'Raincross Pharmacy Technician & Intern', cat: 'job', town: 'Denville', isNJ: true, ageMin: 16, season: 'All Seasons', url: 'https://raincrosspharmacy.com/', email: 'raincrosspharmacy@gmail.com', notes: 'Part-time pharmacy assistant position in Denville, NJ for high school/college students.' },
    { id: 'job5', name: 'Fidia Pharma Scientific Intern', cat: 'internship', town: 'Parsippany', isNJ: true, ageMin: 18, season: 'Summer', url: 'https://fidiapharma.us/', email: 'jobs@fidiapharma.us', notes: 'Biomedical device and pharmaceutical intern program in Parsippany, NJ.' },
    { id: 'job6', name: 'Wharton Pharmacy Assistant', cat: 'job', town: 'Wharton', isNJ: true, ageMin: 16, season: 'All Seasons', url: 'https://www.whartonpharmacy.com/', email: 'whartonpharmacyllc@gmail.com', notes: 'Age 16+ position in retail/clinical pharmacy operations near Wharton/Denville, NJ.' },
    { id: 'job7', name: 'ZebraSci Biotech Lab Technician', cat: 'job', town: 'Temecula', isNJ: false, ageMin: 18, season: 'All Seasons', url: 'https://zebrasci.com/', email: 'sales@zebrasci.com', notes: 'Combination drug-device testing and quality assurance role.' },
    { id: 'job8', name: 'Genentech Biotechnology Summer Intern', cat: 'internship', town: 'South San Francisco', isNJ: false, ageMin: 18, season: 'Summer', url: 'https://www.gene.com/careers/university-and-early-career', email: 'universityrelations@gene.com', notes: 'Out-of-state molecular biology & pharmaceutical research internship in California.' },
    { id: 'job9', name: 'Pfizer Undergraduate Lab Specialist', cat: 'internship', town: 'Cambridge', isNJ: false, ageMin: 18, season: 'Summer', url: 'https://www.pfizer.com/about/careers', email: 'earlycareers@pfizer.com', notes: 'Out-of-state biomedical research intern opportunity in Cambridge, MA.' }
];

const OPPORTUNITIES = [
    { id: 'opp_nsf', name: 'NSF REU Site Directory (National Science Foundation)', cat: 'database', town: 'Nationwide', ageMin: 17, season: 'Summer', url: 'https://www.nsf.gov/crssprgm/reu/reu_search.jsp', notes: 'National database of funded undergraduate research opportunities in biological sciences and bioengineering.' },
    { id: 'opp_pathways', name: 'Pathways to Science (IBP STEM Database)', cat: 'database', town: 'Nationwide', ageMin: 15, season: 'All Seasons', url: 'https://www.pathwaystoscience.org/', notes: 'Searchable directory of paid summer research, scholarships, and graduate fellowships in biotech.' },
    { id: 'opp_bace', name: 'Biotility BACE Credential Exam', cat: 'certification', town: 'Statewide', ageMin: 14, season: 'All Seasons', url: 'https://biotility.research.ufl.edu/bace/', notes: 'Biotechnology Aptitude & Competency Exam — industry-recognized credential for entry-level lab technician positions.' },
    { id: 'opp_citi', name: 'CITI Responsible Conduct of Research (RCR) Training', cat: 'certification', town: 'Online', ageMin: 16, season: 'All Seasons', url: 'https://about.citiprogram.org/', notes: 'Online ethics and lab integrity certification widely required by university research laboratories.' },
    { id: 'opp1', name: 'Regeneron International Science & Engineering Fair (ISEF)', cat: 'competition', town: 'Statewide', ageMin: 12, season: 'Spring', url: 'https://www.societyforscience.org/jic/', notes: 'International STEM competition for middle and high school researchers.' },
    { id: 'opp2', name: 'BioGENEius Challenges', cat: 'competition', town: 'Statewide', ageMin: 14, season: 'Spring', url: 'https://biotechinstitute.org/biogeneius/', notes: 'High school research in global healthcare, sustainability, and environment.' },
    { id: 'opp3', name: 'Davidson Fellows Scholarship', cat: 'scholarship', town: 'Statewide', ageMin: 13, season: 'Summer', url: 'https://www.davidsongifted.org/gifted-programs/fellows-scholarship/', notes: 'Scholarship awards up to $50,000 for extraordinary scientific achievements.' },
    { id: 'opp4', name: 'Rutgers Aresty High School Research Program', cat: 'program', town: 'New Brunswick', ageMin: 15, season: 'Summer', url: 'https://aresty.rutgers.edu/resources/research-opportunities-high-school-students', notes: 'Summer laboratory research opportunities at Rutgers New Brunswick.' },
    { id: 'opp5', name: 'HOSA Future Health Professionals', cat: 'competition', town: 'Statewide', ageMin: 14, season: 'Spring', url: 'https://hosa.org/competition/', notes: 'State and national healthcare & biotech competitive events.' },
    { id: 'opp6', name: 'TSA Biotechnology Design Competition', cat: 'competition', town: 'Statewide', ageMin: 13, season: 'Spring', url: 'https://tsaweb.org/students#competitions', notes: 'Technology Student Association national biotechnology challenges.' }
];

const AVATARS = ['🔬', '🧬', '🧪', '🧫', '💻', '🎓', '💼'];

// Persistent State loaded from LocalStorage
const DEFAULT_PROFILE = {
    name: "",
    email: "",
    county: "Morris",
    town: "Denville",
    level: "High School",
    age: 16,
    season: "Summer",
    locationPref: "In State (NJ)",
    avatarIdx: 0,
    savedIds: [],
    progress: {},
    surveyCompleted: false
};

let userProfile = (() => {
    try {
        const saved = JSON.parse(localStorage.getItem('biostart_userProfile'));
        return Object.assign({}, DEFAULT_PROFILE, saved && typeof saved === 'object' ? saved : {});
    } catch (e) {
        return Object.assign({}, DEFAULT_PROFILE);
    }
})();

let selectedCountyFilter = "ALL";
let activeCollegeMode = "foryou";
let activeJobMode = "foryou";

// Sample Example Data mapping for Personal & Education fields
const SAMPLE_PERSONAL_DATA = {
    'res-name': "Alex M. Smith",
    'res-title': "Biotechnology Student & Research Assistant",
    'res-email': "alex.smith@mcvts.org",
    'res-phone': "(973) 555-0199",
    'res-location': "Denville, NJ 07834",
    'res-linkedin': "linkedin.com/in/alexsmith-biotech",
    'res-school': "Morris County School of Technology",
    'res-grad': "Expected Grad: June 2027",
    'res-degree': "Academy for Biotechnology Track",
    'res-gpa': "GPA: 3.92 / 4.0 | High Honor Roll",
    'res-courses': "Biotechnology I & II, Organic Chemistry, Molecular Genetics, AP Biology, Introductory Statistics"
};

function saveState() {
    localStorage.setItem('biostart_userProfile', JSON.stringify(userProfile));
}

function renderAllGrids() {
    renderHighSchools();
    renderColleges();
    renderJobs();
    renderOpportunities();
    renderSaved();
}

function jMatchTown(item, townStr) {
    if (!townStr) return false;
    const clean = townStr.toLowerCase();
    return (item.town && item.town.toLowerCase().includes(clean)) ||
           (item.location && item.location.toLowerCase().includes(clean)) ||
           (item.notes && item.notes.toLowerCase().includes(clean));
}

function sortByTownAndCounty(list) {
    const userTown = (userProfile.town || '').toLowerCase();
    const userCounty = (userProfile.county || '').toLowerCase();
    
    list.sort((a, b) => {
        const aTownMatch = jMatchTown(a, userTown) ? 2 : 0;
        const bTownMatch = jMatchTown(b, userTown) ? 2 : 0;
        const aCountyMatch = (a.county && a.county.toLowerCase() === userCounty) ? 1 : 0;
        const bCountyMatch = (b.county && b.county.toLowerCase() === userCounty) ? 1 : 0;

        return (bTownMatch + bCountyMatch) - (aTownMatch + aCountyMatch);
    });
}

function surveyRequiredCard(message) {
    return `
            <div style="grid-column: 1/-1; background: white; border: 3px solid var(--biostart-black); padding: 32px; border-radius: 8px; text-align: center; box-shadow: 0 4px 0 var(--biostart-black);">
                <h3 style="font-size: 20px; font-weight: 900; text-transform: uppercase; margin-bottom: 8px;">Survey Required</h3>
                <p style="font-size: 14px; font-weight: 700; color: #444; margin-bottom: 20px;">${message}</p>
                <a href="survey.html" class="btn-action" style="display: inline-block; padding: 12px 24px; font-size: 12px; text-decoration: none;">Take Survey ►</a>
            </div>`;
}

// Global Initialization
window.addEventListener('DOMContentLoaded', () => {
    updateUserHeaderDisplay();
    loadSurveyForm();
    renderAllGrids();
    if (document.getElementById('printable-resume')) initResumeBuilder();
    if (document.getElementById('prof-fname') || document.getElementById('profile-edit-form')) loadProfileDisplay();
});

function loadSurveyForm() {
    const surveyForm = document.getElementById('survey-form');
    if (!surveyForm) return;

    if (userProfile.county) setVal('survey-county', userProfile.county);
    if (userProfile.town) setVal('survey-town', userProfile.town);
    if (userProfile.age) setVal('survey-age', userProfile.age);
    if (userProfile.locationPref) setVal('survey-location-pref', userProfile.locationPref);
    if (userProfile.season) setVal('survey-season', userProfile.season);
    if (userProfile.level) setVal('survey-level', userProfile.level);
}

/* --- LOGOS & PAGE BANNERS --- */
// Logos load live from each school/employer's own domain; if one can't be found we show a clean monogram instead.
function logoDomain(url) {
    try {
        const host = new URL(url).hostname.replace(/^www\./, '');
        return host.split('.').slice(-2).join('.');
    } catch (e) { return ''; }
}

function logoInitials(name) {
    const words = String(name).replace(/[^A-Za-z0-9 ]/g, ' ').split(/\s+/)
        .filter(w => w && !/^(of|the|and|for|at|in)$/i.test(w));
    return (words.length > 1 ? words[0][0] + words[1][0] : (words[0] || '?').slice(0, 2)).toUpperCase();
}

function logoFallback(img) {
    const box = img.parentNode;
    box.classList.add('no-img');
    box.textContent = box.dataset.initials;
}

function logoLoaded(img) {
    // Some sites only publish a tiny favicon; show those at native size instead of blowing them up blurry
    if (img.naturalWidth && img.naturalWidth < 40) img.classList.add('small-logo');
}

function logoHTML(item, small) {
    const domain = logoDomain(item.url);
    const initials = logoInitials(item.name);
    const inner = domain
        ? `<img src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128" alt="" loading="lazy" referrerpolicy="no-referrer" onload="logoLoaded(this)" onerror="logoFallback(this)">`
        : initials;
    return `<div class="card-logo${small ? ' sm' : ''}${domain ? '' : ' no-img'}" data-initials="${initials}" aria-hidden="true">${inner}</div>`;
}

const PAGE_BANNERS = {
    'grid-col':  { cls: 'colleges',      sub: 'Biotech degree tracks, research-ready campuses, and where to look beyond New Jersey.' },
    'grid-hs':   { cls: 'highschools',   sub: 'Hands-on biotech lab training, years before college.' },
    'grid-jobs': { cls: 'jobs',          sub: 'Internships and paid lab roles matched to your age and season.' },
    'grid-opp':  { cls: 'opportunities', sub: 'Scholarships, competitions, and summer research programs worth applying to.' }
};

// Flat illustration in the same palette as the logo: salmon blob, red, black
const BANNER_SCENE = ``;

function initPageBanners() {
    const id = Object.keys(PAGE_BANNERS).find(k => document.getElementById(k));
    const container = document.querySelector('.container');
    const h2 = container && container.querySelector('h2');
    if (!id || !h2 || container.querySelector('.page-banner')) return;
    const cfg = PAGE_BANNERS[id];
    const banner = document.createElement('section');
    banner.className = 'page-banner banner-' + cfg.cls;
    banner.innerHTML = '<div class="pb-scene" aria-hidden="true">' + BANNER_SCENE + '</div><div class="pb-text"></div>';
    h2.parentNode.insertBefore(banner, h2);
    const text = banner.querySelector('.pb-text');
    text.appendChild(h2);
    const p = document.createElement('p');
    p.textContent = cfg.sub;
    text.appendChild(p);

    // If a photo exists for this page, let it replace the illustration
    const probe = new Image();
    probe.onload = () => banner.classList.add('has-photo');
    probe.src = 'images/banner-' + cfg.cls + '.jpg';
}
window.addEventListener('DOMContentLoaded', initPageBanners);

function updateUserHeaderDisplay() {
    const greetingEl = document.getElementById('user-greeting');
    if (greetingEl) {
        greetingEl.innerText = userProfile.name ? `${userProfile.name} (${userProfile.town || userProfile.county || 'NJ'})` : 'Guest Account';
    }

    // Swap the placeholder 👤 in the header pill for the avatar picked on the profile page
    const pill = document.querySelector('.user-pill');
    if (!pill) return;
    let badge = pill.querySelector('.user-avatar');
    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'user-avatar';
        badge.setAttribute('aria-hidden', 'true');
        Array.from(pill.childNodes).forEach(n => {          // drop the hardcoded 👤 text node
            if (n.nodeType === 3 && n.textContent.includes('👤')) n.remove();
        });
        pill.insertBefore(badge, pill.firstChild);
    }
    const picked = !!userProfile.name || (userProfile.avatarIdx || 0) > 0;
    badge.textContent = picked ? AVATARS[userProfile.avatarIdx || 0] : '👤';
    badge.classList.toggle('is-picked', picked);
}

function findSavedItem(id) {
    return [...HIGH_SCHOOLS, ...COLLEGES, ...JOBS, ...OPPORTUNITIES].find(i => i.id === id);
}

function toggleLike(id, ev) {
    ev = ev || window.event;
    const heartEl = ev && ev.target && ev.target.closest ? ev.target.closest('.like-heart') : null;
    const rect = heartEl ? heartEl.getBoundingClientRect() : null;
    const origin = rect ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 } : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const wasSaved = userProfile.savedIds.includes(id);
    const savedCard = heartEl ? heartEl.closest('#saved-grid .card') : null;

    const apply = () => {
        const idx = userProfile.savedIds.indexOf(id);
        if (idx === -1) {
            userProfile.savedIds.push(id);
            userProfile.progress[id] = "Interested";
        } else {
            userProfile.savedIds.splice(idx, 1);
            delete userProfile.progress[id];
        }
        saveState();
        renderAllGrids();
        if (!wasSaved) {
            document.querySelectorAll(`.like-heart[onclick^="toggleLike('${id}'"]`).forEach(h => h.classList.add('just-liked'));
        }
        updateSaveBadge(true);
    };

    if (wasSaved && savedCard) {          // un-saving from the profile page: slide the card out first
        savedCard.classList.add('card-removing');
        setTimeout(apply, 320);
    } else {
        apply();
    }

    const item = findSavedItem(id);
    const name = item ? item.name : 'Item';
    if (!wasSaved) {
        const first = isFirstSave();
        playHeartEffect(origin, first);
        if (first) showFirstSaveTip(name); else showSaveToast(`Saved: ${name}`, true);
    } else {
        showSaveToast(`Removed: ${name}`, false);
    }
}

/* --- HIGH SCHOOL RENDER --- */
function filterCounty(county, el) {
    selectedCountyFilter = county;
    document.querySelectorAll('.county-list li').forEach(li => li.classList.remove('active'));
    if (el) el.classList.add('active');
    renderHighSchools();
    playGridEnter('grid-hs');
}

function renderHighSchools() {
    const container = document.getElementById('grid-hs');
    if (!container) return;
    container.innerHTML = '';

    let list = HIGH_SCHOOLS;

    if (selectedCountyFilter !== 'ALL') {
        list = list.filter(hs => hs.county === selectedCountyFilter);
    }

    if (userProfile.surveyCompleted) {
        list = list.filter(hs => (userProfile.age >= hs.ageMin));
        sortByTownAndCounty(list);
    }
    
    if (list.length === 0) {
        const emptyMsg = selectedCountyFilter !== 'ALL'
            ? `No biotechnology CTE programs are listed for ${selectedCountyFilter} County yet. Try a neighboring county or choose [ALL COUNTIES].`
            : 'No high schools matching your location/age criteria.';
        container.innerHTML = `<p style="grid-column: 1/-1; padding:20px; font-weight:bold;">${emptyMsg}</p>`;
        return;
    }

    list.forEach(hs => {
        const isLiked = userProfile.savedIds.includes(hs.id);
        const isCountyMatch = userProfile.surveyCompleted && userProfile.county && hs.county.toLowerCase() === userProfile.county.toLowerCase();
        container.innerHTML += `
            <div class="card">
                <div class="card-head">${logoHTML(hs)}<span class="card-tag">${hs.county} County${isCountyMatch ? ' ★ YOUR COUNTY' : ''}</span></div>
                <div class="card-title">${hs.name}</div>
                <div class="card-body">${hs.notes}</div>
                <div class="card-actions">
                    <a href="${hs.url}" target="_blank" class="btn-action">View Details</a>
                    <span class="like-heart ${isLiked ? 'liked' : ''}" onclick="toggleLike('${hs.id}', event)">♥</span>
                </div>
            </div>`;
    });
}

/* --- COLLEGE RENDER --- */
function selectCollegeTab(mode) {
    activeCollegeMode = mode;
    ['foryou', 'instate', 'outstate', 'all'].forEach(m => {
        const btn = document.getElementById(`col-card-${m}`);
        if (btn) btn.classList.toggle('selected', mode === m);
    });
    renderColleges();
    playGridEnter('grid-col');
}

/* --- SHARED RECOMMENDATION LOGIC --- */
function recommendFor(items, useSeason, label) {
    const u = userProfile;
    const loc = i => u.locationPref === 'In State (NJ)' ? i.isNJ : (u.locationPref === 'Out of State' ? !i.isNJ : true);
    const seasonOk = i => !useSeason || u.season === 'All Seasons' || i.season === 'All Seasons' || i.season === u.season;

    let out = items.filter(i => u.age >= i.ageMin && loc(i) && seasonOk(i));
    if (out.length) return { items: out, notice: '' };

    out = items.filter(i => u.age >= i.ageMin && loc(i));
    if (out.length) return { items: out, notice: `Nothing matched your season exactly, so these are all the ${label} you are eligible for with your location preference.` };

    out = items.filter(loc);
    if (out.length) return { items: out, notice: `You are not yet old enough for any ${label} in your location preference. They are shown so you can plan ahead; check the minimum age on each card.` };

    return { items: items.slice(), notice: `Nothing matched your location preference, so all ${label} are shown. Check the minimum age on each card.` };
}

function noticeCard(msg) {
    return `<div style="grid-column: 1/-1; background: #fff8e1; border: 2px solid var(--biostart-black); padding: 12px 16px; border-radius: 6px; font-size: 13px; font-weight: 700;">ℹ️ ${msg}</div>`;
}

function ageTag(item) {
    return userProfile.surveyCompleted && userProfile.age < item.ageMin ? ` | AGE ${item.ageMin}+` : '';
}

function renderColleges() {
    const container = document.getElementById('grid-col');
    if (!container) return;
    container.innerHTML = '';

    if (activeCollegeMode === 'foryou' && !userProfile.surveyCompleted) {
        container.innerHTML = surveyRequiredCard('Please take our survey to unlock personalized college recommendations matching your town, age, and location preference (in-state vs. out-of-state).');
        return;
    }

    let list = COLLEGES;
    let notice = '';

    if (activeCollegeMode === 'instate') {
        list = COLLEGES.filter(c => c.isNJ);
    } else if (activeCollegeMode === 'outstate') {
        list = COLLEGES.filter(c => !c.isNJ);
    } else if (activeCollegeMode === 'foryou') {
        // Season is not used for colleges (it only applies to internships and jobs).
        const rec = recommendFor(COLLEGES, false, 'colleges');
        list = rec.items;
        notice = rec.notice;
        sortByTownAndCounty(list);
    }

    let html = notice ? noticeCard(notice) : '';
    list.forEach(col => {
        const isLiked = userProfile.savedIds.includes(col.id);
        const isTownMatch = userProfile.surveyCompleted && jMatchTown(col, userProfile.town);
        html += `
            <div class="card">
                <div class="card-head">${logoHTML(col)}<span class="card-tag">${col.isNJ ? 'IN-STATE (NJ)' : 'OUT-OF-STATE'}${isTownMatch ? ' ★ NEAR YOU' : ''}${ageTag(col)} | ${col.location}</span></div>
                <div class="card-title">${col.name}</div>
                <div class="card-body"><strong>Cost:</strong> ${col.cost}<br><strong>Acceptance:</strong> ${col.acceptance}<br><strong>Typical applicant age:</strong> ${col.ageMin}+<br>${col.notes}</div>
                <div class="card-actions">
                    <a href="${col.url}" target="_blank" class="btn-action">View Details</a>
                    <span class="like-heart ${isLiked ? 'liked' : ''}" onclick="toggleLike('${col.id}', event)">♥</span>
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

/* --- JOBS RENDER --- */
function selectJobTab(mode) {
    activeJobMode = mode;
    ['foryou', 'instate', 'outstate', 'all'].forEach(m => {
        const btn = document.getElementById(`job-card-${m}`);
        if (btn) btn.classList.toggle('selected', mode === m);
    });
    renderJobs();
    playGridEnter('grid-jobs');
}

function renderJobs() {
    const container = document.getElementById('grid-jobs');
    if (!container) return;
    container.innerHTML = '';

    if (activeJobMode === 'foryou' && !userProfile.surveyCompleted) {
        container.innerHTML = surveyRequiredCard('Please take our survey to unlock personalized internship and job recommendations on your For You page.');
        return;
    }

    let list = JOBS;
    let notice = '';

    if (activeJobMode === 'instate') {
        list = JOBS.filter(j => j.isNJ);
    } else if (activeJobMode === 'outstate') {
        list = JOBS.filter(j => !j.isNJ);
    } else if (activeJobMode === 'foryou') {
        const rec = recommendFor(JOBS, true, 'internships and jobs');
        list = rec.items;
        notice = rec.notice;
        sortByTownAndCounty(list);
    }

    let html = notice ? noticeCard(notice) : '';
    list.forEach(j => {
        const isLiked = userProfile.savedIds.includes(j.id);
        const isTownMatch = userProfile.surveyCompleted && jMatchTown(j, userProfile.town);
        html += `
            <div class="card">
                <div class="card-head">${logoHTML(j)}<span class="card-tag">${j.isNJ ? 'IN-STATE (NJ)' : 'OUT-OF-STATE'}${isTownMatch ? ' ★ NEAR YOU' : ''}${ageTag(j)} | ${j.cat.toUpperCase()}</span></div>
                <div class="card-title">${j.name}</div>
                <div class="card-body"><strong>Minimum age:</strong> ${j.ageMin}+<br><strong>Contact Email:</strong> ${j.email}<br>${j.notes}</div>
                <div class="card-actions">
                    <a href="${j.url}" target="_blank" class="btn-action">Apply Now</a>
                    <span class="like-heart ${isLiked ? 'liked' : ''}" onclick="toggleLike('${j.id}', event)">♥</span>
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

/* --- OPPORTUNITIES RENDER --- */
function renderOpportunities() {
    const container = document.getElementById('grid-opp');
    if (!container) return;
    container.innerHTML = '';

    let list = OPPORTUNITIES;
    if (userProfile.surveyCompleted) {
        list = OPPORTUNITIES.filter(o => userProfile.age >= o.ageMin);
        sortByTownAndCounty(list);
    }

    list.forEach(o => {
        const isLiked = userProfile.savedIds.includes(o.id);
        container.innerHTML += `
            <div class="card">
                <div class="card-head">${logoHTML(o)}<span class="card-tag">${o.cat.toUpperCase()}</span></div>
                <div class="card-title">${o.name}</div>
                <div class="card-body">${o.notes}</div>
                <div class="card-actions">
                    <a href="${o.url}" target="_blank" class="btn-action">View Details</a>
                    <span class="like-heart ${isLiked ? 'liked' : ''}" onclick="toggleLike('${o.id}', event)">♥</span>
                </div>
            </div>`;
    });
}

/* --- SURVEY HANDLER & DYNAMIC ROUTING FIX --- */
function normalizeTown(t) {
    return (t || '').toLowerCase().replace(/\./g, '').replace(/\s+(township|twp|borough|town|village)$/, '').replace(/\s+/g, ' ').trim();
}

const NJ_TOWN_SET = new Set(VALID_NJ_TOWNS.map(normalizeTown));

function formatTown(t) {
    return normalizeTown(t).replace(/\b\w/g, ch => ch.toUpperCase());
}

function isValidNJTown(townInput) {
    if (!townInput || typeof townInput !== 'string') return false;
    return NJ_TOWN_SET.has(normalizeTown(townInput));
}

function townErrorMessage(townInput) {
    const clean = normalizeTown(townInput);
    const suggestions = clean.length >= 3
        ? VALID_NJ_TOWNS.filter(t => t.startsWith(clean.slice(0, 3))).slice(0, 4).map(formatTown)
        : [];
    return `⚠️ We could not find "${townInput}" in our list of New Jersey towns.` +
        (suggestions.length ? ` Did you mean: ${suggestions.join(', ')}?` : ' Please check the spelling (e.g. Denville, Morristown, Edison, Newark, Hackensack).');
}

function handleSurveySubmit(e) {
    e.preventDefault();
    
    const countyVal = document.getElementById('survey-county').value;
    const townVal = document.getElementById('survey-town').value.trim();
    const ageVal = parseInt(document.getElementById('survey-age').value);
    const locPrefVal = document.getElementById('survey-location-pref').value;
    const seasonVal = document.getElementById('survey-season').value;
    const levelVal = document.getElementById('survey-level').value;

    if (isNaN(ageVal) || ageVal < 10 || ageVal > 99) {
        alert("⚠️ Please enter a valid age between 10 and 99 years old before submitting.");
        shakeField(document.getElementById('survey-age'));
        document.getElementById('survey-age').focus();
        return false;
    }

    if (!isValidNJTown(townVal)) {
        alert(townErrorMessage(townVal));
        shakeField(document.getElementById('survey-town'));
        document.getElementById('survey-town').focus();
        return false;
    }

    // Update global state with newly submitted survey answers
    userProfile.county = countyVal;
    userProfile.town = formatTown(townVal);
    userProfile.age = ageVal;
    userProfile.locationPref = locPrefVal;
    userProfile.season = seasonVal;
    userProfile.level = levelVal;
    userProfile.surveyCompleted = true;
    
    saveState();
    updateUserHeaderDisplay();
    renderAllGrids();

    // DYNAMIC BACK-END ROUTING FIX BASED ON STUDENT LEVEL & AGE
    if (levelVal !== 'Middle School' && (levelVal === 'College Undergrad' || ageVal >= 18)) {
        alert(`🎉 Survey Updated! Directed to personalized Internships & Paid Jobs based on your profile.`);
        window.location.href = 'jobs.html';
    } else if (levelVal === 'High School') {
        alert(`🎉 Survey Updated! Directed to personalized College & Degree tracks matching your profile.`);
        window.location.href = 'colleges.html';
    } else {
        alert(`🎉 Survey Updated! Directed to Public CTE Vocational High Schools for middle school students.`);
        window.location.href = 'highschools.html';
    }
}

/* ==========================================================================
   MULTI-TEMPLATE & PROFESSIONAL RESUME BUILDER
   ========================================================================== */
let currentResumeTemplate = 'modern';
let resumeIsSample = false;
const RESUME_FIELD_IDS = ['res-name', 'res-title', 'res-email', 'res-phone', 'res-location', 'res-linkedin', 'res-summary', 'res-school', 'res-grad', 'res-degree', 'res-gpa', 'res-courses', 'res-labskills', 'res-softskills', 'res-certs', 'res-job-title', 'res-job-org', 'res-job-dates', 'res-job-loc', 'res-job-desc', 'res-proj-title', 'res-proj-role', 'res-proj-desc', 'res-honors', 'res-pub-title', 'res-pub-venue', 'res-pub-desc'];

function resumeHasContent() {
    return !resumeIsSample && RESUME_FIELD_IDS.some(id => getVal(id));
}

function saveResumeDraft() {
    try {
        const fields = {};
        RESUME_FIELD_IDS.forEach(id => { fields[id] = getVal(id); });
        localStorage.setItem('biostart_resumeDraft', JSON.stringify({ fields, template: currentResumeTemplate, sample: resumeIsSample }));
    } catch (e) { /* storage unavailable: resume still works, just not saved */ }
}

function initResumeBuilder() {
    watchResumePreview();
    let draft = null;
    try { draft = JSON.parse(localStorage.getItem('biostart_resumeDraft')); } catch (e) { draft = null; }

    if (draft && draft.fields && !draft.sample) {
        RESUME_FIELD_IDS.forEach(id => setVal(id, draft.fields[id] || ''));
        if (draft.template) currentResumeTemplate = draft.template;
    } else {
        // Start blank, only prefilling what the student already told us in their profile.
        if (userProfile.name) setVal('res-name', userProfile.name);
        if (userProfile.email) setVal('res-email', userProfile.email);
        if (userProfile.town) setVal('res-location', `${userProfile.town}, NJ`);
    }

    const toggleEl = document.getElementById('sample-toggle');
    if (toggleEl) toggleEl.checked = false;

    document.querySelectorAll('.resume-field').forEach(el => {
        el.addEventListener('input', () => { resumeIsSample = false; saveResumeDraft(); });
    });
    selectTemplate(currentResumeTemplate);
}

function selectTemplate(templateKey) {
    currentResumeTemplate = templateKey;
    document.querySelectorAll('.template-card').forEach(card => card.classList.remove('selected'));
    const selectedCard = document.getElementById(`tpl-card-${templateKey}`);
    if (selectedCard) selectedCard.classList.add('selected');
    
    const labelMap = {
        'modern': 'Modern Biotech',
        'academic': 'Academic & Research',
        'corporate': 'Industry Corporate',
        'compact': 'Compact Lab Specialist'
    };
    const labelEl = document.getElementById('active-template-label');
    if (labelEl) labelEl.innerText = labelMap[templateKey] || 'Modern Biotech';

    updateResume();
    saveResumeDraft();
}

function setVal(id, value) {
    const el = document.getElementById(id);
    if (el) el.value = value;
}

function getVal(id) {
    return document.getElementById(id)?.value.trim() || '';
}

function applySamplePersonal(show) {
    Object.keys(SAMPLE_PERSONAL_DATA).forEach(id => {
        if (show) setVal(id, SAMPLE_PERSONAL_DATA[id]);
        else if (getVal(id) === SAMPLE_PERSONAL_DATA[id]) setVal(id, '');
    });
}

function toggleSamplePersonalInfo(show) {
    if (show && resumeHasContent() && !confirm('Replace the personal and education details you typed with sample examples?')) {
        const toggleEl = document.getElementById('sample-toggle');
        if (toggleEl) toggleEl.checked = false;
        return;
    }
    applySamplePersonal(show);
    if (show) resumeIsSample = true;
    updateResume();
    saveResumeDraft();
}

function loadSampleResumeData() {
    if (resumeHasContent() && !confirm('This will replace everything you have typed with sample data. Continue?')) return;
    const toggleEl = document.getElementById('sample-toggle');
    if (toggleEl) toggleEl.checked = true;

    // 1. Personal & Contact Details
    applySamplePersonal(true);

    // 2. Professional Summary
    setVal('res-summary', "Motivated Biotechnology student with 2+ years of hands-on lab experience in molecular biology, PCR analysis, and bioinformatics. Passionate about pursuing undergraduate research in bioengineering and molecular genetics.");

    // 4. Technical & Lab Skills (Including BACE, CITI, R/Python)
    setVal('res-labskills', "Micropipetting, PCR Amplification, Gel Electrophoresis, Aseptic Cell Culture, DNA Extraction, Spectrophotometry, Experimental Controls & GLP");
    setVal('res-softskills', "Python (Data Science), R Programming, Intro Statistics, BLAST Database, PyMOL, Microsoft Excel Data Analysis");
    setVal('res-certs', "Biotility Biotechnology Aptitude & Competency Exam (BACE), CITI Responsible Conduct of Research (RCR), OSHA 10-Hour General Industry");

    // 5. Research & Work Experience
    setVal('res-job-title', "Student Research Assistant");
    setVal('res-job-org', "Rutgers Waksman Student Scholars Program");
    setVal('res-job-dates', "Sep 2025 – Present");
    setVal('res-job-loc', "Piscataway, NJ");
    setVal('res-job-desc', "• Conducted DNA isolation and restriction enzyme digestion on bacterial plasmid samples.\n• Utilized BLAST bioinformatics tools to analyze cDNA sequencing results and submitted confirmed sequences to NCBI database.\n• Maintained meticulous laboratory notebooks adhering to GLP (Good Laboratory Practice) guidelines.");

    // 6. Projects & Extracurricular Leadership
    setVal('res-proj-title', "HOSA Biotechnology Competition & Science Olympiad");
    setVal('res-proj-role', "Team Lead | Oct 2024 – Present");
    setVal('res-proj-desc', "• Led a 4-student research team designing a microplastic bioremediation protocol using recombinant bacterial strains.\n• Authored research poster and presented at NJ State HOSA Leadership Conference, earning 2nd Place overall.");

    // 7. Honors & Awards
    setVal('res-honors', "• 2nd Place - NJ State HOSA Biotechnology Competition (2025)\n• National Honor Society Inductee (2024)\n• Morris County Scholar Athlete Award (2024)");

    // 8. Scientific Presentations, Posters & Publications
    setVal('res-pub-title', "Investigating Stress Response Transcriptomics in Urban Plant Populations");
    setVal('res-pub-venue', "NJ Academy of Science Annual Symposium | April 2025");
    setVal('res-pub-desc', "• Poster presentation evaluating genetic flexibility and phenotypic plasticity in urban vs. rural plant isolates.\n• Co-authored published abstract in Proceedings of the NJ Science Student Symposium.");

    resumeIsSample = true;
    updateResume();
    saveResumeDraft();
}

function clearResumeForm() {
    if (resumeHasContent() && !confirm('Clear all resume fields? This cannot be undone.')) return;
    RESUME_FIELD_IDS.forEach(id => setVal(id, ''));
    const toggleEl = document.getElementById('sample-toggle');
    if (toggleEl) toggleEl.checked = false;
    resumeIsSample = false;
    updateResume();
    saveResumeDraft();
}

function formatBulletList(text) {
    if (!text || !text.trim()) return '';
    const lines = text.split('\n').filter(l => l.trim().length > 0);
    const items = lines.map(line => {
        let clean = line.replace(/^[•\-\*\s]+/, '').trim();
        return `<li>${clean}</li>`;
    }).join('');
    return `<ul class="resume-bullet-list">${items}</ul>`;
}

function copyResumeText() {
    const text = document.getElementById('printable-resume')?.innerText || '';
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        alert("Resume plain text copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text: " + err);
    });
}

function printResumeOnly() {
    if (resumeIsSample && !confirm('Your resume still contains sample data. Print anyway?')) return;
    window.print();
}

function updateResume() {
    const resumeBox = document.getElementById('printable-resume');
    if (!resumeBox) return;

    const name = getVal('res-name') || '[Your Name]';
    const title = getVal('res-title');
    const email = getVal('res-email');
    const phone = getVal('res-phone');
    const location = getVal('res-location');
    const linkedin = getVal('res-linkedin');

    const summary = getVal('res-summary');
    const school = getVal('res-school');
    const grad = getVal('res-grad');
    const degree = getVal('res-degree');
    const gpa = getVal('res-gpa');
    const courses = getVal('res-courses');

    const labskills = getVal('res-labskills');
    const softskills = getVal('res-softskills');
    const certs = getVal('res-certs');

    const jobTitle = getVal('res-job-title');
    const jobOrg = getVal('res-job-org');
    const jobDates = getVal('res-job-dates');
    const jobLoc = getVal('res-job-loc');
    const jobDesc = getVal('res-job-desc');

    const projTitle = getVal('res-proj-title');
    const projRole = getVal('res-proj-role');
    const projDesc = getVal('res-proj-desc');
    const honors = getVal('res-honors');

    const pubTitle = getVal('res-pub-title');
    const pubVenue = getVal('res-pub-venue');
    const pubDesc = getVal('res-pub-desc');

    const contactParts = [email, phone, location, linkedin].filter(Boolean);

    // 1. MODERN BIOTECH TEMPLATE
    if (currentResumeTemplate === 'modern') {
        resumeBox.innerHTML = `
            <div class="tpl-modern">
                <div class="tpl-modern-header">
                    <div>
                        <h1 class="tpl-name">${name}</h1>
                        ${title ? `<div class="tpl-modern-title">${title}</div>` : ''}
                    </div>
                    <div class="tpl-dna-icon">🧬</div>
                </div>
                ${contactParts.length > 0 ? `<div class="tpl-modern-contact">${contactParts.join(' &nbsp;•&nbsp; ')}</div>` : ''}

                ${summary ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Professional Summary</h3>
                    <p class="tpl-p">${summary}</p>
                </div>` : ''}

                ${(school || degree) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Education</h3>
                    <div class="tpl-flex"><strong>${school}</strong><span>${grad}</span></div>
                    <div><em>${degree}</em> ${gpa ? ` | ${gpa}` : ''}</div>
                    ${courses ? `<div style="font-size:9.5pt; margin-top:4px;"><strong>Coursework:</strong> ${courses}</div>` : ''}
                </div>` : ''}

                ${(labskills || softskills || certs) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Technical & Laboratory Skills</h3>
                    ${labskills ? `<div style="margin-bottom:6px;"><strong>Wet Lab:</strong> ${labskills.split(',').map(s=>`<span class="skill-pill">${s.trim()}</span>`).join('')}</div>` : ''}
                    ${softskills ? `<div style="margin-bottom:4px; font-size:9.5pt;"><strong>Software & Data Skills:</strong> ${softskills}</div>` : ''}
                    ${certs ? `<div style="font-size:9.5pt;"><strong>Certifications:</strong> ${certs}</div>` : ''}
                </div>` : ''}

                ${(jobTitle || jobOrg) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Research & Experience</h3>
                    <div class="tpl-flex"><strong>${jobTitle}${jobOrg ? ` — ${jobOrg}` : ''}</strong><span>${jobDates}</span></div>
                    ${jobLoc ? `<div style="font-size:9pt; color:#666;">${jobLoc}</div>` : ''}
                    ${formatBulletList(jobDesc)}
                </div>` : ''}

                ${(pubTitle || pubVenue) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Presentations, Posters & Publications</h3>
                    <div class="tpl-flex"><strong>${pubTitle}</strong><span>${pubVenue}</span></div>
                    ${formatBulletList(pubDesc)}
                </div>` : ''}

                ${(projTitle || projRole) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Projects & Leadership</h3>
                    <div class="tpl-flex"><strong>${projTitle}</strong><span>${projRole}</span></div>
                    ${formatBulletList(projDesc)}
                </div>` : ''}

                ${honors ? `
                <div class="tpl-sec">
                    <h3 class="tpl-modern-head">Honors & Achievements</h3>
                    ${formatBulletList(honors)}
                </div>` : ''}
            </div>`;
    }
    // 2. ACADEMIC & RESEARCH TEMPLATE
    else if (currentResumeTemplate === 'academic') {
        resumeBox.innerHTML = `
            <div class="tpl-academic">
                <div style="text-align:center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 14px;">
                    <h1 class="tpl-academic-name">${name.toUpperCase()}</h1>
                    ${title ? `<div style="font-style:italic; font-size:11pt; margin-bottom:4px;">${title}</div>` : ''}
                    ${contactParts.length > 0 ? `<div style="font-size:9.5pt;">${contactParts.join(' | ')}</div>` : ''}
                </div>

                ${summary ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">RESEARCH STATEMENT</h3>
                    <p class="tpl-p">${summary}</p>
                </div>` : ''}

                ${(school || degree) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">EDUCATION</h3>
                    <div class="tpl-flex"><strong>${school}</strong><span>${grad}</span></div>
                    <div><em>${degree}</em> ${gpa ? `— ${gpa}` : ''}</div>
                    ${courses ? `<div style="font-size:9.5pt; margin-top:3px;"><em>Relevant Coursework:</em> ${courses}</div>` : ''}
                </div>` : ''}

                ${(labskills || softskills || certs) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">LABORATORY METHODOLOGY & SKILLS</h3>
                    ${labskills ? `<div><strong>Laboratory Techniques:</strong> ${labskills}</div>` : ''}
                    ${softskills ? `<div><strong>Computational & Data Analysis (R/Python):</strong> ${softskills}</div>` : ''}
                    ${certs ? `<div><strong>Certifications & Credentials:</strong> ${certs}</div>` : ''}
                </div>` : ''}

                ${(jobTitle || jobOrg) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">RESEARCH & LABORATORY EXPERIENCE</h3>
                    <div class="tpl-flex"><strong>${jobTitle}</strong><span>${jobDates}</span></div>
                    <div><em>${jobOrg}${jobLoc ? `, ${jobLoc}` : ''}</em></div>
                    ${formatBulletList(jobDesc)}
                </div>` : ''}

                ${(pubTitle || pubVenue) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">PUBLICATIONS & POSTER PRESENTATIONS</h3>
                    <div class="tpl-flex"><strong>${pubTitle}</strong><span>${pubVenue}</span></div>
                    ${formatBulletList(pubDesc)}
                </div>` : ''}

                ${(projTitle || projRole) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">ACADEMIC PROJECTS & LEADERSHIP</h3>
                    <div class="tpl-flex"><strong>${projTitle}</strong><span>${projRole}</span></div>
                    ${formatBulletList(projDesc)}
                </div>` : ''}

                ${honors ? `
                <div class="tpl-sec">
                    <h3 class="tpl-acad-head">HONORS & ACADEMIC AWARDS</h3>
                    ${formatBulletList(honors)}
                </div>` : ''}
            </div>`;
    }
    // 3. INDUSTRY CORPORATE TEMPLATE
    else if (currentResumeTemplate === 'corporate') {
        resumeBox.innerHTML = `
            <div class="tpl-corporate">
                <div style="border-left: 5px solid var(--biostart-black); padding-left: 14px; margin-bottom: 16px;">
                    <h1 class="tpl-corp-name">${name}</h1>
                    ${title ? `<div style="font-size:12pt; font-weight:bold; color:var(--biostart-red);">${title}</div>` : ''}
                    ${contactParts.length > 0 ? `<div style="font-size:9.5pt; color:#444; margin-top:4px;">${contactParts.join('  •  ')}</div>` : ''}
                </div>

                ${summary ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">EXECUTIVE SUMMARY</h3>
                    <p class="tpl-p">${summary}</p>
                </div>` : ''}

                ${(school || degree) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">EDUCATION</h3>
                    <div class="tpl-flex"><strong>${school}</strong><span>${grad}</span></div>
                    <div>${degree}${gpa ? ` (${gpa})` : ''}</div>
                    ${courses ? `<div style="font-size:9.5pt; margin-top:2px;">Coursework: ${courses}</div>` : ''}
                </div>` : ''}

                ${(labskills || softskills || certs) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">CORE COMPETENCIES & CERTIFICATIONS</h3>
                    ${labskills ? `<div>• <strong>Lab Techniques:</strong> ${labskills}</div>` : ''}
                    ${softskills ? `<div>• <strong>Data & Software Tools:</strong> ${softskills}</div>` : ''}
                    ${certs ? `<div>• <strong>Certifications:</strong> ${certs}</div>` : ''}
                </div>` : ''}

                ${(jobTitle || jobOrg) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">PROFESSIONAL EXPERIENCE</h3>
                    <div class="tpl-flex"><strong>${jobTitle} | ${jobOrg}</strong><span>${jobDates}</span></div>
                    ${formatBulletList(jobDesc)}
                </div>` : ''}

                ${(pubTitle || pubVenue) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">PUBLICATIONS & PRESENTATIONS</h3>
                    <div class="tpl-flex"><strong>${pubTitle}</strong><span>${pubVenue}</span></div>
                    ${formatBulletList(pubDesc)}
                </div>` : ''}

                ${(projTitle || projRole) ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">PROJECTS & ACTIVITIES</h3>
                    <div class="tpl-flex"><strong>${projTitle}</strong><span>${projRole}</span></div>
                    ${formatBulletList(projDesc)}
                </div>` : ''}

                ${honors ? `
                <div class="tpl-sec">
                    <h3 class="tpl-corp-head">HONORS & RECOGNITIONS</h3>
                    ${formatBulletList(honors)}
                </div>` : ''}
            </div>`;
    }
    // 4. COMPACT LAB SPECIALIST TEMPLATE (2-COLUMN)
    else if (currentResumeTemplate === 'compact') {
        resumeBox.innerHTML = `
            <div class="tpl-compact">
                <div style="border-bottom: 2px solid #000; padding-bottom: 8px; margin-bottom: 14px;">
                    <h1 class="tpl-name" style="margin:0;">${name}</h1>
                    ${title ? `<div style="font-size:11pt; font-weight:bold; color:var(--biostart-red);">${title}</div>` : ''}
                </div>
                <div class="tpl-compact-grid">
                    <div class="tpl-compact-left">
                        ${contactParts.length > 0 ? `
                        <div class="tpl-compact-box">
                            <h4 class="tpl-compact-head">CONTACT</h4>
                            <div style="font-size:9pt; line-height:1.5;">
                                ${email ? `<div>📧 ${email}</div>` : ''}
                                ${phone ? `<div>📞 ${phone}</div>` : ''}
                                ${location ? `<div>📍 ${location}</div>` : ''}
                                ${linkedin ? `<div>🔗 ${linkedin}</div>` : ''}
                            </div>
                        </div>` : ''}

                        ${(labskills || softskills || certs) ? `
                        <div class="tpl-compact-box">
                            <h4 class="tpl-compact-head">TECHNICAL SKILLS</h4>
                            ${labskills ? `<div style="font-weight:bold; margin-bottom:2px;">Lab Techniques:</div><div style="margin-bottom:8px;">${labskills}</div>` : ''}
                            ${softskills ? `<div style="font-weight:bold; margin-bottom:2px;">Software & Data:</div><div style="margin-bottom:8px;">${softskills}</div>` : ''}
                            ${certs ? `<div style="font-weight:bold; margin-bottom:2px;">Certifications:</div><div>${certs}</div>` : ''}
                        </div>` : ''}

                        ${courses ? `
                        <div class="tpl-compact-box">
                            <h4 class="tpl-compact-head">COURSEWORK</h4>
                            <div style="font-size:9pt;">${courses}</div>
                        </div>` : ''}

                        ${honors ? `
                        <div class="tpl-compact-box">
                            <h4 class="tpl-compact-head">HONORS</h4>
                            <div style="font-size:9pt;">${formatBulletList(honors)}</div>
                        </div>` : ''}
                    </div>

                    <div class="tpl-compact-right">
                        ${summary ? `
                        <div class="tpl-sec">
                            <h3 class="tpl-modern-head">PROFILE</h3>
                            <p class="tpl-p">${summary}</p>
                        </div>` : ''}

                        ${(school || degree) ? `
                        <div class="tpl-sec">
                            <h3 class="tpl-modern-head">EDUCATION</h3>
                            <div class="tpl-flex"><strong>${school}</strong><span>${grad}</span></div>
                            <div><em>${degree}</em> ${gpa ? `(${gpa})` : ''}</div>
                        </div>` : ''}

                        ${(jobTitle || jobOrg) ? `
                        <div class="tpl-sec">
                            <h3 class="tpl-modern-head">LAB & WORK EXPERIENCE</h3>
                            <div class="tpl-flex"><strong>${jobTitle}</strong><span>${jobDates}</span></div>
                            <div><em>${jobOrg}</em></div>
                            ${formatBulletList(jobDesc)}
                        </div>` : ''}

                        ${(pubTitle || pubVenue) ? `
                        <div class="tpl-sec">
                            <h3 class="tpl-modern-head">PRESENTATIONS & PUBLICATIONS</h3>
                            <div class="tpl-flex"><strong>${pubTitle}</strong><span>${pubVenue}</span></div>
                            ${formatBulletList(pubDesc)}
                        </div>` : ''}

                        ${(projTitle || projRole) ? `
                        <div class="tpl-sec">
                            <h3 class="tpl-modern-head">PROJECTS & LEADERSHIP</h3>
                            <div class="tpl-flex"><strong>${projTitle}</strong><span>${projRole}</span></div>
                            ${formatBulletList(projDesc)}
                        </div>` : ''}
                    </div>
                </div>
            </div>`;
    }
}

/* --- ACCOUNT PROFILE MANAGEMENT --- */
function cycleAvatar(direction) {
    userProfile.avatarIdx = (userProfile.avatarIdx + direction + AVATARS.length) % AVATARS.length;
    const display = document.getElementById('avatar-display');
    if (display) display.innerText = AVATARS[userProfile.avatarIdx];
    saveState();
    updateUserHeaderDisplay();
}

function saveAccountProfile(e) {
    e.preventDefault();
    const townVal = document.getElementById('prof-town').value.trim();
    const ageVal = parseInt(document.getElementById('prof-age').value);

    if (isNaN(ageVal) || ageVal < 10 || ageVal > 99) {
        alert("⚠️ Please enter a valid age between 10 and 99 years old.");
        shakeField(document.getElementById('prof-age'));
        document.getElementById('prof-age').focus();
        return;
    }
    if (!isValidNJTown(townVal)) {
        alert(townErrorMessage(townVal));
        shakeField(document.getElementById('prof-town'));
        document.getElementById('prof-town').focus();
        return;
    }

    userProfile.name = document.getElementById('prof-fname').value.trim();
    userProfile.email = document.getElementById('prof-email').value.trim();
    userProfile.county = document.getElementById('prof-county').value;
    userProfile.town = formatTown(townVal);
    userProfile.level = document.getElementById('prof-level').value;
    userProfile.age = ageVal;
    userProfile.locationPref = document.getElementById('prof-locpref').value;
    userProfile.season = document.getElementById('prof-season').value;
    userProfile.surveyCompleted = true;

    saveState();
    updateUserHeaderDisplay();
    loadProfileDisplay();
    renderAllGrids();
    flashSaved(document.querySelector('#profile-edit-form button[type="submit"]'));
}

function loadProfileDisplay() {
    const nameDisp = document.getElementById('profile-name-display');
    const emailDisp = document.getElementById('profile-email-display');
    const locDisp = document.getElementById('profile-location-display');
    const levelDisp = document.getElementById('profile-level-display');
    const prefsDisp = document.getElementById('profile-prefs-display');
    const avatarDisp = document.getElementById('profile-avatar-display');
    const saveBtn = document.getElementById('save-profile-btn');
    const editBtn = document.getElementById('edit-profile-btn');

    setVal('prof-fname', userProfile.name || '');
    setVal('prof-email', userProfile.email || '');
    setVal('prof-county', userProfile.county || '');
    setVal('prof-town', userProfile.town || '');
    setVal('prof-level', userProfile.level || '');
    if (userProfile.age) setVal('prof-age', userProfile.age);
    setVal('prof-locpref', userProfile.locationPref || 'In State (NJ)');
    setVal('prof-season', userProfile.season || 'Summer');
    if (document.getElementById('avatar-display')) document.getElementById('avatar-display').innerText = AVATARS[userProfile.avatarIdx || 0];

    if (userProfile.name) {
        if (nameDisp) nameDisp.innerText = userProfile.name;
        if (emailDisp) {
            emailDisp.innerText = userProfile.email;
            emailDisp.style.color = '#333';
        }
        if (locDisp) locDisp.innerText = `Location: ${userProfile.town || 'Unspecified'}, ${userProfile.county || 'Unspecified'} County, NJ`;
        if (prefsDisp) prefsDisp.innerText = `Age ${userProfile.age} | ${userProfile.locationPref} | Season: ${userProfile.season}`;
        if (levelDisp) levelDisp.innerText = `Academic Level: ${userProfile.level || 'Unspecified'}`;
        if (avatarDisp) avatarDisp.innerText = AVATARS[userProfile.avatarIdx || 0];

        if (editBtn) toggleFormFields(true);

        if (saveBtn) saveBtn.style.display = 'none';
        if (editBtn) editBtn.style.display = 'block';
    } else {
        toggleFormFields(false);
        if (saveBtn) saveBtn.style.display = 'block';
        if (editBtn) editBtn.style.display = 'none';
    }
}

function enableProfileEdit() {
    const saveBtn = document.getElementById('save-profile-btn');
    const editBtn = document.getElementById('edit-profile-btn');

    toggleFormFields(false);

    if (saveBtn) saveBtn.style.display = 'block';
    if (editBtn) editBtn.style.display = 'none';
}

function toggleFormFields(disabled) {
    const fields = ['prof-fname', 'prof-email', 'prof-pass', 'prof-county', 'prof-town', 'prof-level'];
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.disabled = disabled;
    });

    const navBtns = document.querySelectorAll('.avatar-nav-btn');
    navBtns.forEach(btn => btn.disabled = disabled);
}

/* --- SAVED ITEMS & APPLICATION TRACKER --- */
function updateSavedStatus(id, value) {
    userProfile.progress[id] = value;
    saveState();
}

let savedShownIds = null;

function renderSaved() {
    const grid = document.getElementById('saved-grid');
    const countEl = document.getElementById('saved-count');
    if (!grid) return;

    const allItems = [...HIGH_SCHOOLS, ...COLLEGES, ...JOBS, ...OPPORTUNITIES];
    const savedItems = allItems.filter(item => userProfile.savedIds.includes(item.id));

    const firstPaint = savedShownIds === null;
    const prevIds = savedShownIds || [];
    savedShownIds = savedItems.map(i => i.id);
    if (countEl) {
        const changed = countEl.innerText !== String(savedItems.length);
        countEl.innerText = savedItems.length;
        if (!firstPaint && changed) { countEl.classList.remove('count-bump'); void countEl.offsetWidth; countEl.classList.add('count-bump'); }
    }

    if (savedItems.length === 0) {
        grid.innerHTML = '<p class="saved-empty" style="color:#666; font-style:italic; background: white; padding: 20px; border: 2px solid black;">No saved opportunities yet. Click the heart icon (♥) on any item to save it here!</p>';
        return;
    }

    let html = '';
    savedItems.forEach((item, i) => {
        const isNew = firstPaint || !prevIds.includes(item.id);
        const cls = isNew ? (firstPaint ? 'saved-in' : 'saved-in saved-new') : '';
        const delay = firstPaint ? `animation-delay:${i * 80}ms;` : '';
        const currentStatus = userProfile.progress[item.id] || "Interested";
        html += `
            <div class="card saved-card ${cls}" style="margin-bottom:12px; ${delay}">
                <div style="display:flex; justify-content:space-between; align-items:start;">
                    <div style="display:flex; gap:12px; align-items:flex-start;">
                        ${logoHTML(item, true)}
                        <div>
                            <div class="card-title">${item.name}</div>
                            <div class="card-body" style="font-size:12px;">${item.notes || ''}</div>
                        </div>
                    </div>
                    <span class="like-heart liked" onclick="toggleLike('${item.id}', event)">♥</span>
                </div>
                <div style="margin-top:10px;">
                    <label style="font-size:10px; font-weight:800; text-transform:uppercase;">Application Tracker Status:</label><br>
                    <select class="resume-field" style="padding:6px; font-weight:bold; border:2px solid #000; width:100%; margin-top:4px;" onchange="updateSavedStatus('${item.id}', this.value)">
                        <option value="Interested" ${currentStatus === 'Interested' ? 'selected' : ''}>Interested</option>
                        <option value="Applying" ${currentStatus === 'Applying' ? 'selected' : ''}>Applying</option>
                        <option value="Applied" ${currentStatus === 'Applied' ? 'selected' : ''}>Applied</option>
                        <option value="Accepted" ${currentStatus === 'Accepted' ? 'selected' : ''}>Accepted 🎉</option>
                    </select>
                </div>
            </div>`;
    });
    grid.innerHTML = html;
}

/* --- MODAL DIALOG --- */
function openModal(title, text, url) {
    const content = document.getElementById('modal-content');
    if (!content) return;
    content.innerHTML = `
        <h3 style="font-size:20px; text-transform:uppercase; margin-bottom:12px;">${title}</h3>
        <p style="margin: 15px 0; font-size: 14px; line-height:1.5;">${text}</p>
        <a href="${url}" target="_blank" class="btn-action" style="display:inline-block; text-decoration:none;">Visit Official Website 🔗</a>`;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal(e) { if (e.target.id === 'modal-overlay') closeModalDirect(); }
function closeModalDirect() { document.getElementById('modal-overlay').style.display = 'none'; }

/* --- WIDGETS --- */
function toggleWidget(id) { document.getElementById(id).classList.toggle('open'); }

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const txt = input.value.trim();
    if (!txt) return;
    const msgs = document.getElementById('chat-messages');
    msgs.innerHTML += `<div class="chat-msg chat-user">${txt}</div>`;
    input.value = '';
    setTimeout(() => {
        msgs.innerHTML += `<div class="chat-msg chat-bot">Thanks for your question! You can explore the High Schools, Colleges, or Jobs tabs above for program details.</div>`;
    }, 500);
}



/* ==========================================================================
   SAVE (HEART) EFFECTS, TOASTS, FIRST-SAVE TIP AND NAV BADGE
   ========================================================================== */
const FIRST_SAVE_KEY = 'biostart_firstSaveTipSeen';
const HEART_COLORS = ['#D93829', '#ff6b81', '#ff9aa8', '#0d0d0d', '#f5b700'];
let lastHeartFx = '';
let toastTimer = null;

function isFirstSave() {
    try { return !localStorage.getItem(FIRST_SAVE_KEY); } catch (e) { return false; }
}

function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

function fxLayer() {
    let layer = document.getElementById('fx-layer');
    if (!layer) {
        layer = document.createElement('div');
        layer.id = 'fx-layer';
        layer.setAttribute('aria-hidden', 'true');
        document.body.appendChild(layer);
    }
    return layer;
}

function fxSpawn(text, x, y, size, color) {
    const el = document.createElement('span');
    el.className = 'fx-particle';
    el.textContent = text;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.fontSize = size + 'px';
    el.style.color = color;
    fxLayer().appendChild(el);
    return el;
}

function fxRun(el, frames, duration, delay, easing) {
    if (!el.animate) { setTimeout(() => el.remove(), duration + delay); return; }
    const anim = el.animate(frames, { duration, delay, easing: easing || 'ease-out', fill: 'both' });
    anim.onfinish = () => el.remove();
}

const fxRand = (a, b) => a + Math.random() * (b - a);
const fxColor = () => HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];

// Fireworks: hearts and sparkles shoot outward in a ring
function heartBurst(x, y, count, spread) {
    for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + fxRand(-0.15, 0.15);
        const dist = fxRand(0.6, 1) * spread;
        const dx = Math.cos(angle) * dist, dy = Math.sin(angle) * dist;
        const el = fxSpawn(i % 3 === 0 ? '✦' : '♥', x, y, fxRand(12, 22), fxColor());
        fxRun(el, [
            { transform: 'translate(-50%,-50%) scale(0.2)', opacity: 1 },
            { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1.1)`, opacity: 1, offset: 0.55 },
            { transform: `translate(calc(-50% + ${dx * 1.1}px), calc(-50% + ${dy * 1.1 + 28}px)) scale(0.4)`, opacity: 0 }
        ], fxRand(800, 1200), 0, 'cubic-bezier(0.15, 0.7, 0.3, 1)');
    }
}

// Hearts float up into the air and drift sideways
function heartRise(x, y, count) {
    for (let i = 0; i < count; i++) {
        const drift = fxRand(-50, 50), rise = fxRand(120, 240), tilt = fxRand(-25, 25);
        const el = fxSpawn('♥', x + fxRand(-12, 12), y, fxRand(14, 30), fxColor());
        fxRun(el, [
            { transform: 'translate(-50%,-50%) scale(0.3)', opacity: 0 },
            { transform: `translate(calc(-50% + ${drift * 0.3}px), ${-rise * 0.25}px) rotate(${tilt * 0.5}deg) scale(1)`, opacity: 1, offset: 0.2 },
            { transform: `translate(calc(-50% + ${drift}px), ${-rise}px) rotate(${tilt}deg) scale(0.8)`, opacity: 0 }
        ], fxRand(1100, 1700), i * 70, 'ease-out');
    }
}

// Ripple ring plus a circle of spinning sparkles
function heartRing(x, y) {
    const ring = document.createElement('span');
    ring.className = 'fx-ring';
    ring.style.left = x + 'px';
    ring.style.top = y + 'px';
    fxLayer().appendChild(ring);
    fxRun(ring, [
        { transform: 'translate(-50%,-50%) scale(0.4)', opacity: 0.9 },
        { transform: 'translate(-50%,-50%) scale(4.5)', opacity: 0 }
    ], 700, 0, 'ease-out');
    for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2, dist = 55;
        const el = fxSpawn(i % 2 ? '♥' : '✨', x, y, 18, fxColor());
        fxRun(el, [
            { transform: 'translate(-50%,-50%) scale(0.2) rotate(0deg)', opacity: 1 },
            { transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px)) scale(1.2) rotate(180deg)`, opacity: 1, offset: 0.6 },
            { transform: `translate(calc(-50% + ${Math.cos(angle) * dist * 1.2}px), calc(-50% + ${Math.sin(angle) * dist * 1.2}px)) scale(0.5) rotate(300deg)`, opacity: 0 }
        ], 900, 0, 'ease-out');
    }
}

function playHeartEffect(origin, isFirst) {
    if (prefersReducedMotion()) return;
    if (isFirst) {   // first save gets the full celebration
        heartBurst(origin.x, origin.y, 26, 130);
        heartRise(origin.x, origin.y, 12);
        setTimeout(() => heartBurst(origin.x - 50, origin.y - 70, 12, 70), 180);
        setTimeout(() => heartBurst(origin.x + 50, origin.y - 90, 12, 70), 320);
        return;
    }
    const effects = ['burst', 'rise', 'ring'].filter(e => e !== lastHeartFx);
    lastHeartFx = effects[Math.floor(Math.random() * effects.length)];
    if (lastHeartFx === 'burst') heartBurst(origin.x, origin.y, 16, 80);
    else if (lastHeartFx === 'rise') heartRise(origin.x, origin.y, 9);
    else heartRing(origin.x, origin.y);
}

function showSaveToast(msg, withLink) {
    let toast = document.getElementById('save-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'save-toast';
        toast.setAttribute('role', 'status');
        document.body.appendChild(toast);
    }
    const showLink = withLink && !/profile\.html/.test(window.location.pathname);
    toast.innerHTML = `<span class="toast-heart">${withLink ? '♥' : '♡'}</span><span class="toast-msg"></span>${showLink ? '<a href="profile.html">View saved</a>' : ''}`;
    toast.querySelector('.toast-msg').textContent = msg;   // textContent keeps names from being parsed as HTML
    toast.classList.remove('show');
    void toast.offsetWidth;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function positionSaveTip() {
    const tip = document.getElementById('save-tip');
    const target = document.querySelector('nav a[href="profile.html"]');
    if (!tip || !target) return;
    const r = target.getBoundingClientRect();
    const visible = r.top >= 0 && r.bottom <= window.innerHeight && r.right > 0 && r.left < window.innerWidth;
    tip.classList.toggle('tip-pinned', !visible);
    if (visible) {
        const w = tip.offsetWidth;
        const left = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, window.innerWidth - w - 8));
        tip.style.left = left + 'px';
        tip.style.top = (r.bottom + 30) + 'px';
        tip.style.setProperty('--arrow-x', (r.left + r.width / 2 - left) + 'px');
    } else {
        tip.style.left = '';
        tip.style.top = '';
        tip.style.removeProperty('--arrow-x');
    }
}

function removeSaveTip() {
    const tip = document.getElementById('save-tip');
    if (tip) tip.remove();
    document.querySelectorAll('.nav-spotlight').forEach(el => el.classList.remove('nav-spotlight'));
    window.removeEventListener('scroll', positionSaveTip);
    window.removeEventListener('resize', positionSaveTip);
}

// Shown only the very first time something is saved: points at where saved items live
function showFirstSaveTip(name) {
    try { localStorage.setItem(FIRST_SAVE_KEY, '1'); } catch (e) { /* ignore */ }
    removeSaveTip();
    const target = document.querySelector('nav a[href="profile.html"]');
    if (!target) { showSaveToast(`Saved: ${name}`, true); return; }

    const tip = document.createElement('div');
    tip.id = 'save-tip';
    tip.className = 'save-tip';
    tip.setAttribute('role', 'dialog');
    tip.innerHTML = `
        <div class="tip-arrow">▲</div>
        <div class="tip-body">
            <strong>♥ Saved!</strong> <span class="tip-name"></span>
            <p>Everything you save lives in <b>Account Profile</b>, under <b>My Saved Opportunities</b>. Your saves are also counted on that tab.</p>
            <div class="tip-actions">
                <a class="btn-action" href="profile.html">Take me there</a>
                <button type="button" class="btn-action tip-show">Show me where ▲</button>
                <button type="button" class="btn-action tip-close">Got it</button>
            </div>
        </div>`;
    tip.querySelector('.tip-name').textContent = name;
    document.body.appendChild(tip);

    const navEl = target.parentElement;
    navEl.scrollLeft = target.offsetLeft - navEl.clientWidth / 2 + target.offsetWidth / 2;
    target.classList.add('nav-spotlight');

    tip.querySelector('.tip-close').addEventListener('click', removeSaveTip);
    tip.querySelector('.tip-show').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(positionSaveTip, 600);
    });
    window.addEventListener('scroll', positionSaveTip, { passive: true });
    window.addEventListener('resize', positionSaveTip);
    positionSaveTip();
}

// Small heart counter on the Account Profile tab
function updateSaveBadge(bump) {
    const link = document.querySelector('nav a[href="profile.html"]');
    if (!link) return;
    let badge = link.querySelector('.save-badge');
    const n = userProfile.savedIds.length;
    if (!n) { if (badge) badge.remove(); return; }
    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'save-badge';
        link.appendChild(badge);
    }
    badge.textContent = `♥ ${n}`;
    if (bump) { badge.classList.remove('bump'); void badge.offsetWidth; badge.classList.add('bump'); }
}

document.addEventListener('DOMContentLoaded', () => updateSaveBadge(false));


/* ==========================================================================
   SUBTLE MOTION: grid entrance, form feedback, resume section highlight
   ========================================================================== */
// Cards fade up in a short stagger when a tab or filter changes (and on first load)
function playGridEnter(id) {
    const grid = document.getElementById(id);
    if (!grid) return;
    grid.classList.remove('grid-enter');
    void grid.offsetWidth;
    grid.classList.add('grid-enter');
    // remove afterwards so hearting a card (which re-renders the grid) does not replay it
    setTimeout(() => grid.classList.remove('grid-enter'), 700);
}

function shakeField(el) {
    if (!el) return;
    el.classList.remove('field-shake');
    void el.offsetWidth;
    el.classList.add('field-shake');
    setTimeout(() => el.classList.remove('field-shake'), 600);
}

function flashSaved(btn) {
    if (!btn) return;
    if (!btn.dataset.label) btn.dataset.label = btn.innerHTML;
    btn.innerHTML = 'Saved ✓';
    btn.classList.add('btn-saved');
    clearTimeout(btn._savedTimer);
    btn._savedTimer = setTimeout(() => {
        btn.innerHTML = btn.dataset.label;
        btn.classList.remove('btn-saved');
    }, 1800);
}

// Briefly tints whichever resume section changed, so you can see what your edit did
function watchResumePreview() {
    const box = document.getElementById('printable-resume');
    if (!box || !window.MutationObserver) return;
    const selector = '.tpl-sec, .tpl-compact-box, .tpl-modern-header, .tpl-corp-name, .tpl-academic-name';
    let prevHTML = null, prevTemplate = null;
    new MutationObserver(() => {
        const els = [...box.querySelectorAll(selector)];
        const html = els.map(e => e.innerHTML);
        if (prevHTML && prevTemplate === currentResumeTemplate) {
            const before = new Set(prevHTML);
            const changed = els.filter((e, i) => !before.has(html[i]));
            if (changed.length && changed.length <= 2) changed.forEach(e => e.classList.add('tpl-flash'));
        }
        prevHTML = html;
        prevTemplate = currentResumeTemplate;
    }).observe(box, { childList: true });
}

document.addEventListener('DOMContentLoaded', () => {
    ['grid-hs', 'grid-col', 'grid-jobs', 'grid-opp'].forEach(playGridEnter);
});

/* ==========================================================================
   SITE SEARCH (nav bar): searches schools, colleges, internships, opportunities
   and the site's own pages. Press "/" or Ctrl/Cmd+K to jump to it.
   ========================================================================== */
const SEARCH_PAGES = [
    { name: 'Home', href: 'index.html', text: 'home welcome biotechnology career college prep student resources' },
    { name: 'Take the Survey', href: 'survey.html', text: 'personalized matching survey recommendations age county town season location preference student level' },
    { name: 'Vocational High Schools', href: 'highschools.html', text: 'public CTE high schools academies county middle school biotechnology filter by county' },
    { name: 'Colleges & Universities', href: 'colleges.html', text: 'colleges universities degrees B.S. A.S. research labs undergraduate in-state out-of-state' },
    { name: 'Internships & Jobs', href: 'jobs.html', text: 'internships paid jobs workplace positions apply student' },
    { name: 'Scholarships, Competitions & Summer Programs', href: 'opportunities.html', text: 'scholarships competitions summer programs STEM opportunities research databases certifications' },
    { name: 'Create Resume', href: 'resume.html', text: 'resume builder templates modern corporate academic compact print pdf copy plain text sample skills education' },
    { name: 'Account Profile', href: 'profile.html', text: 'account profile avatar saved opportunities application tracker preferences interested applying applied accepted' }
];

let searchIndex = null;
let searchActive = -1;
let searchShown = [];

function buildSearchIndex() {
    const rows = [];
    HIGH_SCHOOLS.forEach(h => rows.push({ type: '🏫 High School', id: h.id, page: 'highschools.html', name: h.name, sub: `${h.town}, ${h.county} County`, notes: h.notes, extra: `${h.county} county high school CTE vocational academy ages ${h.ageMin}+ ${h.season}` }));
    COLLEGES.forEach(c => rows.push({ type: '🎓 College', id: c.id, page: 'colleges.html', name: c.name, sub: `${c.location} · ${c.cost}`, notes: c.notes, extra: `${c.location} ${c.cost} ${c.acceptance} ${c.isNJ ? 'in-state new jersey' : 'out-of-state'} college university degree` }));
    JOBS.forEach(j => rows.push({ type: j.cat === 'internship' ? '💼 Internship' : '💼 Job', id: j.id, page: 'jobs.html', name: j.name, sub: `${j.town} · ${j.season} · ages ${j.ageMin}+`, notes: j.notes, extra: `${j.town} ${j.season} ${j.cat} ${j.email || ''} ${j.isNJ ? 'in-state new jersey' : 'out-of-state'} paid` }));
    OPPORTUNITIES.forEach(o => rows.push({ type: '🏆 Opportunity', id: o.id, page: 'opportunities.html', name: o.name, sub: `${o.town} · ${o.season} · ages ${o.ageMin}+`, notes: o.notes, extra: `${o.cat} ${o.town} ${o.season} scholarship competition summer program` }));
    SEARCH_PAGES.forEach(p => rows.push({ type: '📄 Page', id: null, page: p.href, name: p.name, sub: '', notes: '', extra: p.text }));
    return rows.map(r => ({ ...r, nameLc: r.name.toLowerCase(), subLc: r.sub.toLowerCase(), hay: `${r.name} ${r.sub} ${r.notes} ${r.extra}`.toLowerCase() }));
}

function searchEscape(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function searchHighlight(str, tokens) {
    if (!tokens.length) return searchEscape(str);
    const re = new RegExp('(' + tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'gi');
    return str.split(re).map((part, i) => i % 2 ? `<mark>${searchEscape(part)}</mark>` : searchEscape(part)).join('');
}

function runSiteSearch(query) {
    if (!searchIndex) searchIndex = buildSearchIndex();
    const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!tokens.length) return { tokens, results: [] };
    const results = [];
    searchIndex.forEach((row, order) => {
        if (!tokens.every(t => row.hay.includes(t))) return;
        let score = 0;
        tokens.forEach(t => {
            if (row.nameLc.startsWith(t)) score += 10;
            else if (row.nameLc.includes(' ' + t)) score += 6;
            else if (row.nameLc.includes(t)) score += 4;
            else if (row.subLc.includes(t)) score += 2;
            else score += 1;
        });
        results.push({ row, score, order });
    });
    results.sort((a, b) => b.score - a.score || a.order - b.order);
    return { tokens, results: results.slice(0, 8).map(r => r.row) };
}

// ----- "Did you mean": fixes typos using the words that actually appear on the site -----
let searchVocab = null;
const SEARCH_STOP = new Set(['the', 'and', 'for', 'with', 'are', 'you', 'your', 'that', 'this', 'from', 'has', 'have', 'its', 'who', 'can', 'all', 'any', 'new', 'not', 'com', 'org', 'net', 'edu']);

function buildSearchVocab() {
    const map = new Map();
    const add = (text, weight) => {
        (String(text || '').match(/[A-Za-z0-9]{3,}/g) || []).forEach(w => {
            const lc = w.toLowerCase();
            if (SEARCH_STOP.has(lc) || /^\d+$/.test(lc)) return;
            const e = map.get(lc) || { lc, display: lc, count: 0, prio: 0 };
            e.count++;
            if (weight > e.prio) { e.prio = weight; e.display = weight >= 2 ? w : lc; }   // keep "NJIT", "Rutgers" as written
            map.set(lc, e);
        });
    };
    searchIndex.forEach(r => { add(r.name, 3); add(r.sub, 2); add(r.extra, 1); add(r.notes, 1); });
    return [...map.values()];
}

// Edit distance that counts a swapped pair of letters ("teh" → "the") as one mistake
function editDistance(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    let prev2 = null, prev = Array.from({ length: b.length + 1 }, (_, j) => j);
    for (let i = 1; i <= a.length; i++) {
        const cur = [i];
        let rowMin = i;
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
            if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
            cur[j] = v;
            if (v < rowMin) rowMin = v;
        }
        if (rowMin > max) return max + 1;
        prev2 = prev; prev = cur;
    }
    return prev[b.length];
}

// Returns up to 3 corrected searches that actually have results, best first
function suggestSearch(query) {
    if (!searchIndex) searchIndex = buildSearchIndex();
    if (!searchVocab) searchVocab = buildSearchVocab();
    const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    const bad = tokens.map(t => !searchIndex.some(r => r.hay.includes(t)));
    if (!bad.some(Boolean)) return [];

    const options = tokens.map((t, i) => {
        if (!bad[i]) return [{ lc: t, display: t }];
        if (t.length < 3) return [];
        const max = t.length <= 4 ? 1 : 2;
        const cands = [];
        searchVocab.forEach(v => {
            let d = editDistance(t, v.lc, max);
            // also catch a typo in a word that is only partly typed ("biotechnolo")
            if (t.length >= 5 && v.lc.length > t.length) d = Math.min(d, editDistance(t, v.lc.slice(0, t.length), max) + 0.5);
            if (d <= max) cands.push({ v, d });
        });
        cands.sort((x, y) => x.d - y.d
            || (y.v.lc[0] === t[0]) - (x.v.lc[0] === t[0])
            || y.v.prio - x.v.prio
            || y.v.count - x.v.count);
        return cands.slice(0, 3).map(c => ({ lc: c.v.lc, display: c.v.display }));
    });
    if (options.some(o => !o.length)) return [];

    const phrases = tokens.length === 1 ? options[0].map(o => [o]) : [options.map(o => o[0])];
    return phrases
        .map(p => {
            const lcTokens = p.map(o => o.lc);
            return { text: p.map(o => o.display).join(' '), tokens: lcTokens, results: runSiteSearch(lcTokens.join(' ')).results };
        })
        .filter(s => s.results.length);
}

function searchRowsHTML(results, tokens) {
    return results.map((r, i) => `<a class="sr-item" role="option" id="sr-${i}" href="${r.id ? `${r.page}?find=${encodeURIComponent(r.id)}` : r.page}" data-i="${i}">
                    <span class="sr-type">${r.type}</span>
                    <span class="sr-main"><span class="sr-name">${searchHighlight(r.name, tokens)}</span><span class="sr-snip">${searchHighlight(searchSnippet(r, tokens), tokens)}</span></span>
                </a>`).join('');
}


// Short excerpt from the notes around the first matching word
function searchSnippet(row, tokens) {
    const text = row.notes || '';
    const lc = text.toLowerCase();
    const hit = tokens.map(t => lc.indexOf(t)).filter(i => i >= 0).sort((a, b) => a - b)[0];
    if (hit === undefined) return row.sub || text.slice(0, 90);
    const start = Math.max(0, hit - 40), end = Math.min(text.length, hit + 90);
    return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
}

// Grow the field only into the empty space beside the nav buttons, never over them
function sizeSearchField() {
    const wrap = document.getElementById('site-search');
    const nav = document.querySelector('nav');
    if (!wrap || !nav) return;
    const closedW = 168;
    const w = wrap.getBoundingClientRect();
    let rightmost = null;
    nav.querySelectorAll('a.nav-btn').forEach(b => {
        const r = b.getBoundingClientRect();
        const sameRow = r.bottom > w.top + 2 && r.top < w.bottom - 2;
        if (sameRow && (rightmost === null || r.right > rightmost)) rightmost = r.right;
    });
    const navR = nav.getBoundingClientRect();
    const floor = rightmost === null ? navR.left + 20 : rightmost + 8;
    const open = Math.max(closedW, Math.min(420, w.right - floor));
    wrap.style.setProperty('--search-open-w', open + 'px');
}

function positionSearchPanel() {
    const panel = document.getElementById('search-results');
    const input = document.getElementById('site-search-input');
    if (!panel || !input || !panel.classList.contains('open')) return;
    const r = document.getElementById('site-search').getBoundingClientRect();
    const width = Math.min(420, window.innerWidth - 32);   // matches --search-open-w
    panel.style.width = width + 'px';
    panel.style.left = Math.max(8, Math.min(r.right - width, window.innerWidth - width - 8)) + 'px';
    panel.style.top = (r.bottom + 8) + 'px';
}

function closeSearchPanel() {
    const panel = document.getElementById('search-results');
    const input = document.getElementById('site-search-input');
    if (panel) panel.classList.remove('open');
    if (input) { input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant'); }
    searchActive = -1;
}

function setSearchActive(i) {
    const items = document.querySelectorAll('#search-results .sr-item');
    if (!items.length) return;
    searchActive = (i + items.length) % items.length;
    items.forEach((el, n) => el.classList.toggle('active', n === searchActive));
    items[searchActive].scrollIntoView({ block: 'nearest' });
    document.getElementById('site-search-input').setAttribute('aria-activedescendant', items[searchActive].id);
}

function renderSearchPanel() {
    const panel = document.getElementById('search-results');
    const input = document.getElementById('site-search-input');
    const query = input.value.trim();
    searchActive = -1;
    document.getElementById('site-search').classList.toggle('has-value', input.value.length > 0);
    if (!query) {
        panel.innerHTML = `<div class="sr-hint">Search schools, colleges, internships, scholarships and tools.<div class="sr-chips">${['Rutgers', 'internship', 'BACE', 'Morris', 'summer', 'resume'].map(w => `<button type="button" class="sr-chip" data-q="${w}">${w}</button>`).join('')}</div></div>`;
        searchShown = [];
    } else {
        const { tokens, results } = runSiteSearch(query);
        if (results.length) {
            searchShown = results;
            panel.innerHTML = searchRowsHTML(results, tokens);
        } else {
            const sugg = suggestSearch(query);
            if (sugg.length) {
                searchShown = sugg[0].results;
                panel.innerHTML = `<div class="sr-did">No matches for “${searchEscape(query)}”. Did you mean ${sugg.map(x => `<button type="button" class="sr-chip" data-q="${searchEscape(x.text)}">${searchEscape(x.text)}</button>`).join('')}?</div>`
                    + searchRowsHTML(sugg[0].results, sugg[0].tokens);
            } else {
                searchShown = [];
                panel.innerHTML = `<div class="sr-hint">No matches for “${searchEscape(query)}”. Try a school name, a town, or a keyword like <b>internship</b>.</div>`;
            }
        }
    }
    panel.classList.add('open');
    input.setAttribute('aria-expanded', 'true');
    positionSearchPanel();
}

function openSearchResult(el, ev) {
    const row = searchShown[parseInt(el.dataset.i, 10)];
    if (!row) return;
    const here = window.location.pathname.replace(/\.html$/, '').split('/').pop() || 'index';
    const there = row.page.replace(/\.html$/, '');
    if (row.id && here === there) {          // already on that page: no reload, just jump to the card
        if (ev) ev.preventDefault();
        closeSearchPanel();
        revealSearchItem(row.id);
    }
}

// Scroll to a card and pulse it. If the For You filter is hiding it, widen the view first.
function revealSearchItem(id) {
    const find = () => {
        const heart = document.querySelector(`.like-heart[onclick^="toggleLike('${id}'"]`);
        return heart ? heart.closest('.card') : null;
    };
    let card = find();
    if (!card) {
        if (document.getElementById('grid-col')) selectCollegeTab('all');
        else if (document.getElementById('grid-jobs')) selectJobTab('all');
        else if (document.getElementById('grid-hs')) filterCounty('ALL', document.querySelector('.county-list li'));
        card = find();
    }
    if (!card) {
        showSaveToast('That item is hidden by your survey filters. Retake the survey to see it.', false);
        const icon = document.querySelector('#save-toast .toast-heart');
        if (icon) icon.textContent = 'ℹ️';
        return;
    }
    card.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
    card.classList.remove('search-hit');
    void card.offsetWidth;
    card.classList.add('search-hit');
    setTimeout(() => card.classList.remove('search-hit'), 3200);
}

function initSiteSearch() {
    const nav = document.querySelector('nav');
    if (!nav || document.getElementById('site-search')) return;

    const wrap = document.createElement('div');
    wrap.id = 'site-search';
    wrap.className = 'nav-search';
    wrap.innerHTML =
        '<svg class="ns-icon" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="6.5" cy="6.5" r="4.75"/><path d="M10 10l4.5 4.5"/></svg>' +
        '<input type="text" id="site-search-input" placeholder="Search" aria-label="Search the site" autocomplete="off" role="combobox" aria-expanded="false" aria-controls="search-results">' +
        '<span class="ns-kbd" aria-hidden="true">/</span>' +
        '<button type="button" class="ns-clear" aria-label="Clear search" tabindex="-1">&times;</button>';
    nav.appendChild(wrap);

    const panel = document.createElement('div');
    panel.id = 'search-results';
    panel.setAttribute('role', 'listbox');
    document.body.appendChild(panel);

    const input = document.getElementById('site-search-input');
    input.addEventListener('input', renderSearchPanel);
    input.addEventListener('focus', () => { sizeSearchField(); renderSearchPanel(); });
    window.addEventListener('resize', sizeSearchField);
    sizeSearchField();
    const clearBtn = wrap.querySelector('.ns-clear');
    clearBtn.addEventListener('mousedown', e => e.preventDefault());
    clearBtn.addEventListener('click', () => { input.value = ''; renderSearchPanel(); input.focus(); });
    input.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown') { e.preventDefault(); setSearchActive(searchActive + 1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); setSearchActive(searchActive - 1); }
        else if (e.key === 'Enter') {
            const items = panel.querySelectorAll('.sr-item');
            const target = items[searchActive >= 0 ? searchActive : 0];
            if (target) { e.preventDefault(); openSearchResult(target, { preventDefault() {} }); if (target.isConnected && panel.classList.contains('open')) target.click(); }
        }
        else if (e.key === 'Escape') { closeSearchPanel(); input.blur(); }
    });
    panel.addEventListener('click', e => {
        const chip = e.target.closest('.sr-chip');
        if (chip) { input.value = chip.dataset.q; renderSearchPanel(); input.focus(); return; }
        const item = e.target.closest('.sr-item');
        if (item) openSearchResult(item, e);
    });
    panel.addEventListener('mousemove', e => {
        const item = e.target.closest('.sr-item');
        if (item) { searchActive = parseInt(item.dataset.i, 10); panel.querySelectorAll('.sr-item').forEach((el, n) => el.classList.toggle('active', n === searchActive)); }
    });
    document.addEventListener('click', e => {
        if (!e.target.closest('#site-search') && !e.target.closest('#search-results')) closeSearchPanel();
    });
    window.addEventListener('resize', positionSearchPanel);
    window.addEventListener('scroll', positionSearchPanel, { passive: true });
    nav.addEventListener('scroll', positionSearchPanel, { passive: true });

    // "/" or Ctrl/Cmd+K jumps to the search box
    document.addEventListener('keydown', e => {
        const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement || {}).tagName) || (document.activeElement && document.activeElement.isContentEditable);
        if ((e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
            e.preventDefault();
            input.focus();
            input.select();
        }
    });
}

// Runs after the grids have rendered, so a ?find=id link can jump straight to its card
window.addEventListener('DOMContentLoaded', () => {
    initSiteSearch();
    const id = new URLSearchParams(window.location.search).get('find');
    if (!id) return;
    revealSearchItem(id);
    try {
        const u = new URL(window.location.href);
        u.searchParams.delete('find');
        window.history.replaceState(null, '', u.pathname + u.search + u.hash);
    } catch (e) { /* ignore */ }
});
