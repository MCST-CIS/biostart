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
const BANNER_SCENE = `<svg viewBox="0 0 540 200" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg" focusable="false">
    <circle cx="290" cy="104" r="92" fill="#EEB0A5"/>
    <g stroke="#0d0d0d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
        <!-- flask -->
        <path d="M108 30H132V82L168 156Q174 172 158 172H82Q66 172 72 156L108 82Z" fill="#fff"/>
        <path d="M89 128H151L168 156Q174 172 158 172H82Q66 172 72 156Z" fill="#D94F3B"/>
        <rect x="102" y="23" width="36" height="9" rx="3" fill="#0d0d0d"/>
        <circle cx="110" cy="146" r="4" fill="#fff" stroke="none"/>
        <circle cx="128" cy="154" r="3" fill="#fff" stroke="none"/>
        <!-- petri dish -->
        <rect x="222" y="132" width="112" height="30" rx="7" fill="#fff"/>
        <rect x="230" y="146" width="96" height="12" rx="3" fill="#D94F3B" stroke="none"/>
        <rect x="216" y="120" width="124" height="15" rx="6" fill="#F6D5CE"/>
        <circle cx="250" cy="152" r="2.5" fill="#fff" stroke="none"/>
        <circle cx="276" cy="151" r="3.5" fill="#fff" stroke="none"/>
        <circle cx="304" cy="153" r="2.5" fill="#fff" stroke="none"/>
        <!-- test tubes in a rack -->
        <path d="M368 56V150a14 14 0 0 0 28 0V56" fill="#fff"/>
        <path d="M368 112H396V150a14 14 0 0 1-28 0Z" fill="#D94F3B"/>
        <path d="M404 56V150a14 14 0 0 0 28 0V56" fill="#fff"/>
        <path d="M404 128H432V150a14 14 0 0 1-28 0Z" fill="#0d0d0d"/>
        <path d="M440 56V150a14 14 0 0 0 28 0V56" fill="#fff"/>
        <path d="M440 96H468V150a14 14 0 0 1-28 0Z" fill="#EEB0A5"/>
        <rect x="358" y="88" width="120" height="9" rx="4" fill="#0d0d0d"/>
        <!-- DNA helix -->
        <path d="M506 14C534 44 534 74 506 104C478 134 478 164 506 194" fill="none"/>
        <path d="M506 14C478 44 478 74 506 104C534 134 534 164 506 194" fill="none" stroke="#D94F3B"/>
        <path d="M482 38H530M480 60H532M482 82H530M482 126H530M480 148H532M482 170H530" stroke-width="2" fill="none"/>
    </g>
</svg>`;

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
    const target = document.querySelector('header a.user-pill');
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
    const target = document.querySelector('header a.user-pill');
    if (!target) { showSaveToast(`Saved: ${name}`, true); return; }

    const tip = document.createElement('div');
    tip.id = 'save-tip';
    tip.className = 'save-tip';
    tip.setAttribute('role', 'dialog');
    tip.innerHTML = `
        <div class="tip-arrow">▲</div>
        <div class="tip-body">
            <strong>♥ Saved!</strong> <span class="tip-name"></span>
            <p>Everything you save lives in <b>Account Profile</b>, under <b>My Saved Opportunities</b>. Your saves are also counted on your account button.</p>
            <div class="tip-actions">
                <a class="btn-action" href="profile.html">Take me there</a>
                <button type="button" class="btn-action tip-show">Show me where ▲</button>
                <button type="button" class="btn-action tip-close">Got it</button>
            </div>
        </div>`;
    tip.querySelector('.tip-name').textContent = name;
    document.body.appendChild(tip);

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

// Small heart counter on the header account pill
function updateSaveBadge(bump) {
    const link = document.querySelector('header a.user-pill');
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
    { name: 'Create: Resume Builder', href: 'resume.html#resume', text: 'create resume builder templates modern corporate academic compact print pdf copy plain text sample skills education' },
    { name: 'Create: Poster Lab', href: 'resume.html#poster', text: 'create poster lab project assistance help science fair research poster infographic concept explainer career spotlight lab safety technique guide template graphics presentation display print pdf' },
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

/* ==========================================================================
   CREATE HUB + POSTER LAB  (resume.html only)
   ========================================================================== */
(function () {
    'use strict';

    const $ = id => document.getElementById(id);
    const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const lines = t => String(t || '').split('\n').map(l => l.replace(/^\s*(?:[•\-*]|\d+[.)])\s+/, '').trim()).filter(Boolean);
    const has = t => !!(t && String(t).trim());
    const ph = (t, fb) => has(t) ? esc(t) : `<span class="pp-ph">${esc(fb)}</span>`;
    const phPara = (t, fb) => has(t) ? esc(t).replace(/\n+/g, '<br>') : `<span class="pp-ph">${esc(fb)}</span>`;

    /* ---------------------------------------------------------------
       GRAPHICS LIBRARY  (flat illustrations in the BIOSTART style;
       colors come from the poster theme via --pa / --pb / --ink)
       --------------------------------------------------------------- */
    const S = 'stroke="var(--ink)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';
    const ICONS = {
        dna: ['DNA Helix', `<path d="M18 6C50 20 50 44 18 58" fill="none" stroke="var(--pa)" stroke-width="4.5" stroke-linecap="round"/><path d="M46 6C14 20 14 44 46 58" fill="none" ${S}/><path d="M27 10H37M28 19H36M24 32H40M28 45H36M27 54H37" fill="none" ${S} stroke-width="2.5"/>`],
        flask: ['Flask', `<path d="M27 8V26L12 52Q9 58 16 58H48Q55 58 52 52L37 26V8" fill="#fff" ${S}/><path d="M19 40H45L52 52Q55 58 48 58H16Q9 58 12 52Z" fill="var(--pa)" ${S}/><path d="M23 8H41" ${S}/><circle cx="26" cy="49" r="2.5" fill="#fff"/><circle cx="36" cy="46" r="2" fill="#fff"/>`],
        microscope: ['Microscope', `<g transform="rotate(22 32 24)"><rect x="25" y="4" width="14" height="34" rx="4" fill="var(--pa)" ${S}/><rect x="28" y="38" width="8" height="8" fill="#fff" ${S}/></g><path d="M46 26C58 34 52 52 36 52" fill="none" ${S}/><rect x="12" y="52" width="40" height="7" rx="3" fill="var(--ink)"/><rect x="20" y="46" width="22" height="3" rx="1.5" fill="var(--ink)"/>`],
        petri: ['Petri Dish', `<circle cx="32" cy="32" r="25" fill="#fff" ${S}/><circle cx="32" cy="32" r="18" fill="var(--pb)" stroke="var(--ink)" stroke-width="2"/><circle cx="26" cy="26" r="3.5" fill="var(--pa)"/><circle cx="38" cy="29" r="2.5" fill="var(--pa)"/><circle cx="30" cy="40" r="4" fill="var(--pa)"/><circle cx="41" cy="40" r="2" fill="var(--pa)"/><circle cx="23" cy="36" r="2" fill="var(--pa)"/>`],
        tubes: ['Test Tubes', `<path d="M8 8V46a6 6 0 0 0 12 0V8" fill="#fff" ${S}/><path d="M8 30H20V46a6 6 0 0 1-12 0Z" fill="var(--pa)"/><path d="M26 8V46a6 6 0 0 0 12 0V8" fill="#fff" ${S}/><path d="M26 38H38V46a6 6 0 0 1-12 0Z" fill="var(--ink)"/><path d="M44 8V46a6 6 0 0 0 12 0V8" fill="#fff" ${S}/><path d="M44 24H56V46a6 6 0 0 1-12 0Z" fill="var(--pb)"/><rect x="3" y="16" width="58" height="6" rx="3" fill="var(--ink)"/>`],
        cell: ['Cell', `<circle cx="32" cy="32" r="25" fill="var(--pb)" ${S}/><circle cx="28" cy="30" r="9" fill="var(--pa)" ${S}/><circle cx="28" cy="30" r="3" fill="#fff"/><ellipse cx="46" cy="42" rx="5" ry="3" fill="#fff" stroke="var(--ink)" stroke-width="2"/><ellipse cx="42" cy="17" rx="4" ry="2.5" fill="#fff" stroke="var(--ink)" stroke-width="2"/><ellipse cx="22" cy="47" rx="4" ry="2.5" fill="#fff" stroke="var(--ink)" stroke-width="2"/>`],
        molecule: ['Molecule', `<path d="M32 18L16 44M32 18L48 44M16 44H48" fill="none" ${S}/><circle cx="32" cy="16" r="9" fill="var(--pa)" ${S}/><circle cx="14" cy="46" r="8" fill="#fff" ${S}/><circle cx="50" cy="46" r="8" fill="var(--ink)" ${S}/>`],
        pipette: ['Pipette', `<rect x="25" y="3" width="14" height="16" rx="6" fill="var(--pa)" ${S}/><rect x="22" y="19" width="20" height="6" rx="2" fill="#fff" ${S}/><path d="M26 25V44L32 55L38 44V25Z" fill="#fff" ${S}/><path d="M26 36H38V44L32 55L26 44Z" fill="var(--pa)"/><circle cx="32" cy="60" r="2" fill="var(--pa)"/>`],
        leaf: ['Plant', `<path d="M10 54C8 26 28 8 56 8C56 38 40 56 10 54Z" fill="var(--pa)" ${S}/><path d="M10 54L42 22" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`],
        bacteria: ['Microbe', `<rect x="14" y="22" width="36" height="20" rx="10" fill="var(--pa)" ${S}/><circle cx="26" cy="32" r="2.5" fill="#fff"/><circle cx="36" cy="30" r="2" fill="#fff"/><circle cx="42" cy="35" r="2" fill="#fff"/><path d="M20 22V14M32 22V12M44 22V14M20 42V50M32 42V52M44 42V50M50 32Q56 24 61 32" fill="none" ${S} stroke-width="2.5"/>`],
        bulb: ['Idea', `<path d="M32 6A17 17 0 0 1 42 37V44H22V37A17 17 0 0 1 32 6Z" fill="var(--pb)" ${S}/><path d="M25 51H39M27 57H37" fill="none" ${S}/><path d="M27 38L30 28L34 34L37 24" fill="none" stroke="var(--pa)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`],
        shield: ['Safety', `<path d="M32 5L53 13V32C53 46 43 55 32 59C21 55 11 46 11 32V13Z" fill="var(--pb)" ${S}/><path d="M21 32L29 40L44 24" fill="none" stroke="var(--pa)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`],
        goggles: ['Goggles', `<path d="M6 30Q6 24 12 24H52Q58 24 58 30V36Q58 44 50 44H40Q34 44 32 38Q30 44 24 44H14Q6 44 6 36Z" fill="var(--pb)" ${S}/><ellipse cx="19" cy="34" rx="8" ry="6" fill="#fff" stroke="var(--ink)" stroke-width="2.5"/><ellipse cx="45" cy="34" rx="8" ry="6" fill="#fff" stroke="var(--ink)" stroke-width="2.5"/><path d="M6 32H2M58 32H62" fill="none" ${S}/>`],
        chart: ['Bar Chart', `<path d="M8 8V56H58" fill="none" ${S}/><rect x="16" y="34" width="9" height="22" fill="var(--pa)" stroke="var(--ink)" stroke-width="2.5"/><rect x="30" y="22" width="9" height="34" fill="var(--pb)" stroke="var(--ink)" stroke-width="2.5"/><rect x="44" y="12" width="9" height="44" fill="var(--pa)" stroke="var(--ink)" stroke-width="2.5"/>`]
    };
    const iconSVG = (key, cls) => `<svg class="pi ${cls || ''}" viewBox="0 0 64 64" aria-hidden="true">${(ICONS[key] || ICONS.flask)[1]}</svg>`;

    const THEMES = {
        biostart: { name: 'BIOSTART Red', pa: '#D94F3B', pb: '#F6D5CE', pc: '#A83325' },
        teal:     { name: 'Lab Teal',     pa: '#1F8A8A', pb: '#D3EEEC', pc: '#126060' },
        violet:   { name: 'Helix Violet', pa: '#6C4AB6', pb: '#E4DCF4', pc: '#4B2F8C' },
        green:    { name: 'Field Green',  pa: '#3E8E41', pb: '#DCEFD7', pc: '#2A6A2E' }
    };

    /* ---------------------------------------------------------------
       BAR CHART from "Label: value" lines
       --------------------------------------------------------------- */
    function splitLabel(label) {
        const mid = Math.floor(label.length / 2);
        let i = label.lastIndexOf(' ', mid);
        if (i < 1) i = label.indexOf(' ', mid);
        return i < 1 ? [label] : [label.slice(0, i), label.slice(i + 1)];
    }

    function barChart(text, unit) {
        const rows = lines(text).map(l => {
            const m = l.match(/^(.*?)\s*[:=,\t]\s*(-?\d+(?:\.\d+)?)\s*$/);
            return m ? { label: m[1].trim(), value: Math.max(0, parseFloat(m[2])) } : null;
        }).filter(Boolean).slice(0, 8);
        if (!rows.length) return '';
        const W = 400, H = 260, L = 50, R = 10, T = 22, B = 52;
        const max = Math.max(...rows.map(r => r.value), 0);
        const mag = Math.pow(10, Math.floor(Math.log10(max || 1)));
        const top = ([1, 2, 2.5, 5, 10].find(n => n * mag >= max) || 10) * mag;
        const ph_ = H - T - B, bw = (W - L - R) / rows.length, w = Math.min(64, bw * 0.62);
        let g = '';
        for (let i = 0; i <= 4; i++) {
            const val = top * i / 4, y = T + ph_ - ph_ * i / 4;
            g += `<line x1="${L}" x2="${W - R}" y1="${y}" y2="${y}" stroke="#d6d6d6" stroke-width="1"/><text x="${L - 6}" y="${y + 4}" text-anchor="end" font-size="11">${+val.toFixed(2)}</text>`;
        }
        rows.forEach((r, i) => {
            const h = r.value / top * ph_, x = L + i * bw + (bw - w) / 2, y = T + ph_ - h;
            g += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" fill="${i % 2 ? 'var(--pc)' : 'var(--pa)'}" stroke="var(--ink)" stroke-width="2"/>`;
            g += `<text x="${(x + w / 2).toFixed(1)}" y="${(y - 5).toFixed(1)}" text-anchor="middle" font-size="12" font-weight="800">${r.value}</text>`;
            (r.label.length > 11 ? splitLabel(r.label) : [r.label]).forEach((part, k) => {
                g += `<text x="${(x + w / 2).toFixed(1)}" y="${T + ph_ + 16 + k * 13}" text-anchor="middle" font-size="11" font-weight="700">${esc(part.slice(0, 15))}</text>`;
            });
        });
        g += `<path d="M${L} ${T}V${T + ph_}H${W - R}" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
        if (has(unit)) g += `<text transform="rotate(-90 12 ${T + ph_ / 2})" x="12" y="${T + ph_ / 2}" text-anchor="middle" font-size="11" font-weight="800">${esc(unit.slice(0, 28))}</text>`;
        return `<svg class="pchart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Bar chart of results">${g}</svg>`;
    }

    /* ---------------------------------------------------------------
       SHARED POSTER PIECES
       --------------------------------------------------------------- */
    const sec = (title, body, cls) => `<section class="pp-sec ${cls || ''}"><h3>${esc(title)}</h3><div class="pp-sec-body">${body}</div></section>`;
    const bullets = (t, fb) => lines(t).length ? `<ul class="pp-list">${lines(t).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : `<p><span class="pp-ph">${esc(fb)}</span></p>`;
    const numbered = (t, fb) => lines(t).length ? `<ol class="pp-steps">${lines(t).map(x => `<li>${esc(x)}</li>`).join('')}</ol>` : `<p><span class="pp-ph">${esc(fb)}</span></p>`;

    function head(v, meta, tagline) {
        return `<div class="pp-head"><div class="pp-head-text"><h1 class="pp-title">${ph(v.title, 'Your poster title goes here')}</h1>${tagline ? `<p class="pp-tagline">${tagline}</p>` : ''}${meta ? `<p class="pp-meta">${meta}</p>` : ''}</div><div class="pp-head-icon">${iconSVG(v.icon)}</div></div>`;
    }
    function foot(text, fb) {
        const src = lines(text);
        return `<div class="pp-foot"><div class="pp-src">${src.length ? '<b>Sources:</b> ' + src.map(esc).join(' · ') : `<span class="pp-ph">${esc(fb || 'Sources & acknowledgments go here')}</span>`}</div><div class="pp-brand">BIOSTART Poster Lab</div></div>`;
    }
    const iconOpts = Object.keys(ICONS);
    const stepFields = n => [
        { id: `s${n}t`, label: 'Step title', type: 'text', half: true, group: `Step ${n}`, ph: 'Short and active' },
        { id: `s${n}i`, label: 'Graphic', type: 'iconsel', half: true, def: iconOpts[n * 2 % iconOpts.length] },
        { id: `s${n}d`, label: 'What happens', type: 'area', rows: 2, hint: n === 1 ? '1–2 sentences. Use plain words a 6th grader would understand.' : '', ph: '' }
    ];

    /* ---------------------------------------------------------------
       TEMPLATES
       --------------------------------------------------------------- */
    const TEMPLATES = {
        research: {
            label: 'Science Fair Research Poster', icon: '🔬', orient: 'landscape', words: [220, 420],
            desc: 'The classic three-column poster: question, methods, results graph, conclusion.',
            defaults: { icon: 'microscope' },
            guide: {
                tips: [
                    'Title = your question or finding, not “Science Project.” 12 words or fewer.',
                    'Readers go left → right, top → bottom. Put the most important thing (your graph) in the middle.',
                    'Methods: start each step with a verb (Measured, Mixed, Incubated) so someone could repeat it.',
                    'One clean graph beats three messy ones. Always label the axis and include units.',
                    'In the conclusion, say if your hypothesis was supported, and why. It’s okay if it wasn’t!'
                ],
                meta: 'Great for school science fairs, club showcases, and summer-program poster sessions.'
            },
            fields: [
                { id: 'title', label: 'Poster title', type: 'text', hint: 'Make it a question or a finding.', ph: 'Does Light Color Change How Fast Plants Grow?' },
                { id: 'authors', label: 'Name(s)', type: 'text', half: true, ph: 'Jordan Lee, Priya Shah' },
                { id: 'school', label: 'School / program', type: 'text', half: true, ph: 'Biotechnology Academy, Gr. 10' },
                { id: 'icon', label: 'Header graphic', type: 'icon' },
                { id: 'question', label: 'Background & question', type: 'area', rows: 3, hint: '2–3 sentences: what’s already known, what’s missing, what you asked.', group: 'Intro' },
                { id: 'hypothesis', label: 'Hypothesis', type: 'area', rows: 2, hint: 'One sentence: “If ___, then ___, because ___.”' },
                { id: 'methods', label: 'Methods (one step per line)', type: 'area', rows: 5, hint: '4–6 short steps, in order. Mention your control group.', group: 'Method & results' },
                { id: 'dataTitle', label: 'Graph title', type: 'text', half: true, count: false, ph: 'Avg. height after 7 days' },
                { id: 'unit', label: 'Y-axis label', type: 'text', half: true, count: false, ph: 'Height (cm)' },
                { id: 'data', label: 'Results data (Label: value)', type: 'area', rows: 4, count: false, hint: 'One per line. We turn this into a bar chart automatically (up to 8 bars).', ph: 'Control: 8.2\nRed light: 6.1\nBlue light: 9.4' },
                { id: 'results', label: 'What the data show', type: 'area', rows: 3, hint: 'Describe the trend in 2–3 sentences and include at least one number.' },
                { id: 'conclusion', label: 'Conclusion', type: 'area', rows: 3, group: 'Wrap-up' },
                { id: 'next', label: 'Limits & next steps (one per line)', type: 'area', rows: 3, hint: 'What would you test next? What could have affected your results?' },
                { id: 'refs', label: 'Sources & acknowledgments (one per line)', type: 'area', rows: 3, count: false, hint: '2–4 sources, plus a thank-you to your teacher or mentor.' }
            ],
            sample: {
                title: 'Does Light Color Change How Fast Radish Seedlings Grow?',
                authors: 'Jordan Lee & Priya Shah', school: 'Biotechnology Academy, Grade 10', icon: 'leaf',
                question: 'Plants use light to make food, but they absorb some colors better than others. We wanted to know whether the color of light changes how tall radish seedlings grow in their first week.',
                hypothesis: 'If radish seedlings grow under blue light, then they will be taller than seedlings under red or white light, because blue light helps plants build strong stems and leaves.',
                methods: 'Planted 10 radish seeds in each of 3 identical trays\nCovered trays with clear (control), red, or blue filters\nWatered each tray with 20 mL every day at the same time\nMeasured seedling height in cm every day for 7 days\nAveraged the 10 seedlings in each tray and compared groups',
                dataTitle: 'Average height after 7 days (sample data)', unit: 'Height (cm)',
                data: 'White (control): 8.2\nRed light: 6.1\nBlue light: 9.4',
                results: 'Seedlings under blue light averaged 9.4 cm, about 15% taller than the white-light control (8.2 cm). Seedlings under red light were the shortest at 6.1 cm.',
                conclusion: 'Our data support the hypothesis: blue light produced the tallest seedlings. We only tested one plant for one week, so more trials are needed before drawing a firm conclusion.',
                next: 'Repeat with 30 seeds per group\nTest green and mixed light\nMeasure leaf area and mass, not just height',
                refs: 'Replace with your real sources, e.g. Author, A. (Year). Title. Journal.\nThank you to [teacher / mentor] for lab space and guidance.'
            },
            render(v) {
                const chart = barChart(v.data, v.unit);
                const results = (chart ? `<figure class="pp-fig">${has(v.dataTitle) ? `<figcaption>${esc(v.dataTitle)}</figcaption>` : ''}${chart}</figure>` : `<p><span class="pp-ph">Enter data as “Label: value” and a bar chart appears here.</span></p>`)
                    + `<p>${phPara(v.results, 'Describe the trend in 2–3 sentences and include a number.')}</p>`;
                const meta = [v.authors, v.school].filter(has).map(esc).join(' · ');
                return head(v, meta || '<span class="pp-ph">Names · School</span>')
                    + `<div class="pp-body pp-3col">
                        <div class="pp-col">${sec('Background & Question', `<p>${phPara(v.question, 'What is known, what is missing, what did you ask?')}</p>`)}${sec('Hypothesis', `<p>${phPara(v.hypothesis, 'If ___, then ___, because ___.')}</p>`, 'hl')}</div>
                        <div class="pp-col">${sec('Methods', numbered(v.methods, 'List 4–6 steps, one per line.'))}${sec('Results', results)}</div>
                        <div class="pp-col">${sec('Conclusion', `<p>${phPara(v.conclusion, 'Was your hypothesis supported? Why?')}</p>`)}${sec('Limits & Next Steps', bullets(v.next, 'What would you test next?'))}</div>
                    </div>` + foot(v.refs);
            }
        },

        explainer: {
            label: 'Concept Explainer (Infographic)', icon: '🧬', orient: 'portrait', words: [150, 300],
            desc: 'Explain one biotech idea in four visual steps, like “How CRISPR works.”',
            defaults: { icon: 'dna', s1i: 'molecule', s2i: 'cell', s3i: 'dna', s4i: 'petri' },
            guide: {
                tips: [
                    'Pick ONE idea. If it needs more than four steps, split it into two posters.',
                    'Write each step as an action: “Cut,” “Copy,” “Grow,” not “The cutting stage.”',
                    'Keep step text to 1–2 sentences. Let the graphics do the heavy lifting.',
                    'Define the key term in one plain sentence at the top.',
                    '“Why it matters” should connect to real life: health, food, environment, careers.'
                ],
                meta: 'Great for class presentations, HOSA/club events, science nights, and hallway displays.'
            },
            fields: [
                { id: 'title', label: 'Poster title', type: 'text', ph: 'How CRISPR Edits a Gene' },
                { id: 'hook', label: 'Tagline', type: 'text', hint: 'One catchy line that makes someone stop and read.', ph: 'Molecular scissors that can be programmed.' },
                { id: 'icon', label: 'Header graphic', type: 'icon' },
                { id: 'definition', label: 'In one sentence', type: 'area', rows: 2, hint: 'Define the main term as if explaining to a friend.', group: 'Big idea' },
                ...stepFields(1), ...stepFields(2), ...stepFields(3), ...stepFields(4),
                { id: 'why', label: 'Why it matters', type: 'area', rows: 3, hint: 'Real-world impact: health, food, environment, jobs.', group: 'Wrap-up' },
                { id: 'fact', label: 'Fun fact', type: 'area', rows: 2 },
                { id: 'sources', label: 'Sources (one per line)', type: 'area', rows: 2, count: false, hint: 'Use .gov, .edu, or journal pages and cite what you actually read.' }
            ],
            sample: {
                title: 'How CRISPR Edits a Gene', hook: 'Molecular scissors that can be programmed to find one exact spot in DNA.', icon: 'dna',
                definition: 'CRISPR-Cas9 is a tool that lets scientists cut DNA at a chosen location so a gene can be turned off, repaired, or replaced.',
                s1t: 'Design the guide', s1i: 'molecule', s1d: 'Scientists build a short piece of RNA that matches the DNA sequence they want to change.',
                s2t: 'Find the target', s2i: 'cell', s2d: 'The guide RNA leads the Cas9 protein through the cell until it locks onto the matching DNA.',
                s3t: 'Make the cut', s3i: 'dna', s3d: 'Cas9 works like scissors and cuts both strands of the DNA at the target spot.',
                s4t: 'Repair or rewrite', s4i: 'petri', s4d: 'The cell repairs the break. Scientists can let it fix itself to switch a gene off, or supply a template to change the sequence.',
                why: 'Gene editing is being studied to treat genetic diseases, build hardier crops, and speed up basic research. It also raises ethical questions, so scientists, doctors, and the public all help set the rules.',
                fact: 'CRISPR was adapted from a defense system bacteria use to fight viruses.',
                sources: 'Replace with the pages you actually used, e.g. NIH National Human Genome Research Institute: genome editing fact sheet'
            },
            render(v) {
                const steps = [1, 2, 3, 4].map(n => {
                    const t = v[`s${n}t`], d = v[`s${n}d`];
                    return `<div class="pp-step"><div class="pp-num">${n}</div><div><h4>${ph(t, 'Step ' + n + ' title')}</h4><p>${phPara(d, 'Describe what happens in 1–2 sentences.')}</p></div><div class="pp-step-icon">${iconSVG(v[`s${n}i`])}</div></div>`;
                }).join('');
                return head(v, '', has(v.hook) ? esc(v.hook) : '<span class="pp-ph">Your catchy tagline</span>')
                    + `<div class="pp-body">
                        <div class="pp-def"><b>The big idea</b>${phPara(v.definition, 'Define the main term in one plain sentence.')}</div>
                        <div class="pp-flow">${steps}</div>
                        <div class="pp-duo"><div class="pp-why"><h3>Why it matters</h3><p>${phPara(v.why, 'Connect it to health, food, environment, or jobs.')}</p></div><div class="pp-fact"><h3>Did you know?</h3><p>${phPara(v.fact, 'Add a surprising fact.')}</p></div></div>
                    </div>` + foot(v.sources);
            }
        },

        career: {
            label: 'Biotech Career Spotlight', icon: '💼', orient: 'portrait', words: [150, 320],
            desc: 'Profile a biotech job: what they do, a day in the life, and how to get there.',
            defaults: { icon: 'microscope' },
            guide: {
                tips: [
                    'Look up pay and growth in the BLS Occupational Outlook Handbook (bls.gov/ooh) and note the year.',
                    '“A day in the life” works best as 4–5 times with one short activity each.',
                    'Show the path as steps from high school to the job, including any certificates (like BACE).',
                    'List real New Jersey employers. Check each company’s careers page for entry-level roles.',
                    'Interview someone in the field if you can, and thank them under Sources.'
                ],
                meta: 'Great for career-day displays, CTE class projects, and guidance-office bulletin boards.'
            },
            fields: [
                { id: 'title', label: 'Career title', type: 'text', ph: 'Biomanufacturing Technician' },
                { id: 'tagline', label: 'Tagline', type: 'text', ph: 'Turning lab discoveries into real medicines.' },
                { id: 'icon', label: 'Header graphic', type: 'icon' },
                { id: 'what', label: 'What they do', type: 'area', rows: 3, hint: '2–3 sentences, no jargon.', group: 'The job' },
                { id: 'day', label: 'A day in the life (“time — activity”)', type: 'area', rows: 5, hint: 'One per line, e.g. “8:00 — Review the batch record”.' },
                { id: 'path', label: 'Your path (one step per line)', type: 'area', rows: 4, hint: 'Order from high school → first job → advancement.', group: 'Getting there' },
                { id: 'skills', label: 'Key skills (comma-separated)', type: 'text', ph: 'Attention to detail, Teamwork, Lab math' },
                { id: 'pay', label: 'Typical pay', type: 'text', half: true, group: 'Quick facts', ph: 'Check BLS.gov/ooh' },
                { id: 'outlook', label: 'Job outlook', type: 'text', half: true, ph: 'Growing / Stable' },
                { id: 'employers', label: 'Where to work in NJ (one per line)', type: 'area', rows: 3 },
                { id: 'fact', label: 'Fun fact', type: 'area', rows: 2 },
                { id: 'sources', label: 'Sources (one per line)', type: 'area', rows: 2, count: false, hint: 'BLS page, an interview, a company careers page…' }
            ],
            sample: {
                title: 'Biomanufacturing Technician', tagline: 'Helps turn lab discoveries into medicines people can actually use.', icon: 'tubes',
                what: 'Biomanufacturing technicians run and monitor the equipment that grows cells and purifies proteins in large amounts. They follow strict procedures so every batch is safe and consistent.',
                day: '8:00 — Review the batch record and safety checklist\n10:00 — Set up and sterilize equipment\n12:30 — Monitor cell growth and record readings\n2:30 — Test samples and log the results\n4:00 — Hand off to the next shift',
                path: 'High school: biotechnology, chemistry, and math\nEarn a lab credential such as BACE\nAssociate degree or certificate in biotechnology\nEntry-level technician, then bachelor’s degree or on-the-job training to advance',
                skills: 'Attention to detail, Clean technique, Careful documentation, Teamwork, Problem solving, Lab math',
                pay: 'Roughly $45,000–$75,000 (verify at bls.gov/ooh)', outlook: 'Strong demand in NJ’s pharma hub',
                employers: 'Merck (Rahway)\nJohnson & Johnson (New Brunswick)\nBristol Myers Squibb (Lawrenceville)\nNovartis (East Hanover)',
                fact: 'Making one batch of some biologic medicines can take weeks, and every step is documented.',
                sources: 'Replace with yours, e.g. BLS Occupational Outlook Handbook; interview with [name]'
            },
            render(v) {
                const day = lines(v.day).map(l => { const m = l.match(/^(.{1,12}?)\s*[—–-]\s+(.*)$/); return m ? `<li><span class="t">${esc(m[1])}</span>${esc(m[2])}</li>` : `<li>${esc(l)}</li>`; }).join('');
                const path = lines(v.path).map((l, i) => `<li style="--i:${i}">${esc(l)}</li>`).join('');
                const skills = String(v.skills || '').split(',').map(s => s.trim()).filter(Boolean).map(s => `<span class="pp-tag">${esc(s)}</span>`).join('');
                return head(v, '', has(v.tagline) ? esc(v.tagline) : '<span class="pp-ph">Your tagline</span>')
                    + `<div class="pp-body"><div class="pp-career">
                        <div class="pp-col">
                            ${sec('Quick Facts', `<span class="pp-fact-row"><b>Typical pay</b>${ph(v.pay, 'Add pay range')}</span><span class="pp-fact-row"><b>Job outlook</b>${ph(v.outlook, 'Add outlook')}</span>`)}
                            ${sec('Key Skills', skills ? `<div class="pp-tags" style="padding:0">${skills}</div>` : '<p><span class="pp-ph">Comma-separated skills</span></p>')}
                            ${sec('Where to Work in NJ', bullets(v.employers, 'List local employers.'))}
                        </div>
                        <div class="pp-col">
                            ${sec('What They Do', `<p>${phPara(v.what, 'Explain the job in 2–3 plain sentences.')}</p>`)}
                            ${sec('A Day in the Life', day ? `<ul class="pp-time" style="margin:0">${day}</ul>` : '<p><span class="pp-ph">8:00 — First task (one per line)</span></p>')}
                            ${sec('Your Path', path ? `<ul class="pp-stairs" style="margin:0">${path}</ul>` : '<p><span class="pp-ph">One step per line, high school → first job.</span></p>')}
                            <div class="pp-fact"><h3>Did you know?</h3><p>${phPara(v.fact, 'Add a surprising fact about this career.')}</p></div>
                        </div>
                    </div></div>` + foot(v.sources);
            }
        },

        safety: {
            label: 'Lab Safety & Technique Guide', icon: '🥽', orient: 'portrait', words: [130, 280],
            desc: 'Do’s, don’ts, and a step-by-step technique, ready to hang by the lab bench.',
            defaults: { icon: 'goggles' },
            guide: {
                tips: [
                    'Start every Do and Don’t with a verb. Keep each under 10 words.',
                    'Put the Don’ts people most often break first.',
                    'Technique steps should be in the exact order someone would do them, 6–8 steps max.',
                    'Emergency box: who to tell, where the eyewash and exits are, and what to do first.',
                    'Check your school’s own lab rules and have your teacher approve the poster before posting it.'
                ],
                meta: 'Great for biotech labs, club demos, and sharing with younger students.'
            },
            fields: [
                { id: 'title', label: 'Poster title', type: 'text', ph: 'Lab Safety Basics' },
                { id: 'intro', label: 'Opening line', type: 'area', rows: 2, ph: 'Know where the exits, eyewash, and safety shower are.' },
                { id: 'icon', label: 'Header graphic', type: 'icon' },
                { id: 'dos', label: 'Do (one per line)', type: 'area', rows: 5, group: 'Rules' },
                { id: 'donts', label: 'Don’t (one per line)', type: 'area', rows: 5 },
                { id: 'stepsTitle', label: 'Technique title', type: 'text', group: 'Technique', ph: 'Using a Micropipette' },
                { id: 'steps', label: 'Steps (one per line)', type: 'area', rows: 6 },
                { id: 'emergency', label: 'In an emergency', type: 'area', rows: 3, group: 'Wrap-up' },
                { id: 'sources', label: 'Sources (one per line)', type: 'area', rows: 2, count: false }
            ],
            sample: {
                title: 'Lab Safety Basics', icon: 'goggles',
                intro: 'Before you touch anything, find the exits, the eyewash station, and the safety shower.',
                dos: 'Wear goggles, gloves, and a lab coat\nTie back long hair and wear closed-toe shoes\nLabel every tube and container\nWash your hands before you leave\nTell your teacher about spills right away',
                donts: 'Eat, drink, or apply makeup in the lab\nPipette by mouth\nTaste or sniff chemicals directly\nWork alone or unsupervised\nPour chemicals back into the stock bottle',
                stepsTitle: 'Using a Micropipette',
                steps: 'Set the volume dial to the amount you need\nPress a clean tip firmly onto the pipette\nPush to the first stop, then put the tip in the liquid\nSlowly release to draw up the liquid\nPush to the second stop to dispense into the tube\nEject the tip into the waste container',
                emergency: 'Spill or splash: tell your teacher, step away, and use the eyewash for 15 minutes if it reaches your eyes. Fire alarm: stop work, turn off equipment, and exit calmly.',
                sources: 'Replace with your school’s lab rules and the OSHA Laboratory Standard (osha.gov)'
            },
            render(v) {
                return head(v, '')
                    + `<div class="pp-body">
                        <p class="pp-intro">${phPara(v.intro, 'Open with the one thing everyone must know.')}</p>
                        <div class="pp-two">
                            <section class="pp-sec pp-do"><h3>Do</h3><ul class="pp-check">${lines(v.dos).map(x => `<li>${esc(x)}</li>`).join('') || '<li><span class="pp-ph">One rule per line</span></li>'}</ul></section>
                            <section class="pp-sec pp-dont"><h3>Don’t</h3><ul class="pp-check">${lines(v.donts).map(x => `<li>${esc(x)}</li>`).join('') || '<li><span class="pp-ph">One rule per line</span></li>'}</ul></section>
                        </div>
                        ${sec(has(v.stepsTitle) ? 'Technique: ' + v.stepsTitle : 'Technique', numbered(v.steps, 'List the steps in order, one per line.'))}
                        <div class="pp-emergency">${iconSVG('shield')}<div><h3>In an emergency</h3><p>${phPara(v.emergency, 'Who to tell, where the eyewash and exits are, what to do first.')}</p></div></div>
                    </div>` + foot(v.sources);
            }
        }
    };

    const CHECKLIST = [
        'Title is readable from 6 feet away',
        'Every graph or graphic has a label (and units)',
        'No more than 2–3 fonts and strong contrast',
        'Facts are checked and sources are cited',
        'Spelling and capitalization are checked',
        'A friend read it and could explain it back to you',
        'Your teacher or mentor has approved it'
    ];

    /* ---------------------------------------------------------------
       STATE
       --------------------------------------------------------------- */
    const KEY = 'biostart_posterDraft_v1';
    let state = { template: 'research', theme: 'biostart', values: {}, sample: {} };
    let ready = false;

    function load() {
        try { const raw = localStorage.getItem(KEY); if (raw) state = Object.assign(state, JSON.parse(raw)); } catch (e) {}
        if (!TEMPLATES[state.template]) state.template = 'research';
        if (!THEMES[state.theme]) state.theme = 'biostart';
        state.values = state.values || {}; state.sample = state.sample || {};
    }
    function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
    const tpl = () => TEMPLATES[state.template];
    const vals = () => Object.assign({}, tpl().defaults, state.values[state.template] || {});

    /* ---------------------------------------------------------------
       FORM
       --------------------------------------------------------------- */
    function controlHTML(f, val) {
        const id = 'pf-' + f.id;
        const label = `<label class="form-label" for="${id}" style="display:block; font-weight:900; text-transform:uppercase; font-size:11px; margin-bottom:4px;">${esc(f.label)}</label>` + (f.hint ? `<p class="pf-hint">${esc(f.hint)}</p>` : '');
        let ctl = '';
        if (f.type === 'text') ctl = `<input type="text" class="pf-input" id="${id}" data-f="${f.id}" value="${esc(val)}" placeholder="${esc(f.ph || '')}" autocomplete="off">`;
        else if (f.type === 'area') ctl = `<textarea class="pf-input" id="${id}" data-f="${f.id}" rows="${f.rows || 3}" placeholder="${esc(f.ph || '')}">${esc(val)}</textarea>`;
        else if (f.type === 'iconsel') {
            const cur = val || f.def;
            ctl = `<select class="pf-input" id="${id}" data-f="${f.id}">${iconOpts.map(k => `<option value="${k}"${k === cur ? ' selected' : ''}>${esc(ICONS[k][0])}</option>`).join('')}</select>`;
        } else if (f.type === 'icon') {
            const cur = val || (tpl().defaults || {}).icon || 'flask';
            ctl = `<div class="icon-picker" data-f="${f.id}" role="group" aria-label="${esc(f.label)}">${iconOpts.map(k => `<button type="button" class="icon-btn${k === cur ? ' on' : ''}" data-icon="${k}" title="${esc(ICONS[k][0])}" aria-label="${esc(ICONS[k][0])}" aria-pressed="${k === cur}">${iconSVG(k)}</button>`).join('')}</div><div class="icon-name">${esc(ICONS[cur][0])}</div>`;
        }
        return `<div class="pf-field">${label}${ctl}</div>`;
    }

    function buildForm() {
        const t = tpl(), v = vals();
        // Guide
        $('poster-guide').innerHTML = `<details open><summary>📘 Guide: how to build this poster</summary><ul>${t.guide.tips.map(x => `<li>${esc(x)}</li>`).join('')}</ul><p class="pg-meta">${esc(t.guide.meta)}</p></details>`;
        // Theme picker
        const themes = `<div class="pf-field"><label class="form-label" style="display:block; font-weight:900; text-transform:uppercase; font-size:11px; margin-bottom:6px;">Color theme</label><div class="theme-picker" id="theme-picker">${Object.entries(THEMES).map(([k, th]) => `<button type="button" class="theme-btn${k === state.theme ? ' on' : ''}" data-theme="${k}"><span class="theme-dots"><i style="background:${th.pa}"></i><i style="background:${th.pb}"></i></span>${esc(th.name)}</button>`).join('')}</div></div>`;
        // Fields (with group headings and half-width pairs)
        let html = themes, group = null;
        for (let i = 0; i < t.fields.length; i++) {
            const f = t.fields[i];
            if (f.group && f.group !== group) { group = f.group; html += `<h4 style="font-size:12px; text-transform:uppercase; font-weight:900; margin:6px 0 10px; padding-top:10px; border-top:2px dashed #ccc; color:var(--biostart-red);">${esc(group)}</h4>`; }
            if (f.half && t.fields[i + 1] && t.fields[i + 1].half && !t.fields[i + 1].group) {
                const g = t.fields[i + 1];
                html += `<div class="form-row-2" style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">${controlHTML(f, v[f.id])}${controlHTML(g, v[g.id])}</div>`;
                i++;
            } else html += controlHTML(f, v[f.id]);
        }
        $('poster-fields').innerHTML = html;
        // Checklist
        $('poster-checklist').innerHTML = `<details><summary>✅ Poster checklist <span class="pc-count" id="pc-count">0/${CHECKLIST.length}</span></summary>${CHECKLIST.map((c, i) => `<label><input type="checkbox" data-check="${i}"> ${esc(c)}</label>`).join('')}</details>`;
        $('poster-active-label').textContent = t.label;
    }

    function buildTemplateCards() {
        $('poster-template-grid').innerHTML = Object.entries(TEMPLATES).map(([k, t]) => `<div class="template-card${k === state.template ? ' selected' : ''}" data-tpl="${k}" tabindex="0" role="button"><div class="template-icon">${t.icon}</div><div class="template-title">${esc(t.label)}</div><div class="template-desc">${esc(t.desc)}</div></div>`).join('');
    }

    /* ---------------------------------------------------------------
       RENDER
       --------------------------------------------------------------- */
    function wordCount(v) {
        return tpl().fields.filter(f => (f.type === 'text' || f.type === 'area') && f.count !== false)
            .reduce((n, f) => n + (String(v[f.id] || '').trim().split(/\s+/).filter(Boolean).length), 0);
    }

    function render() {
        const t = tpl(), v = vals(), th = THEMES[state.theme];
        const wrap = $('printable-poster');
        wrap.className = 'poster-wrap ' + t.orient;
        wrap.innerHTML = `<div class="poster ${t.orient}" style="--pa:${th.pa}; --pb:${th.pb}; --pc:${th.pc};">${t.render(v)}</div>`;
        syncPageStyle();
        // Word meter
        const n = wordCount(v), [lo, hi] = t.words, meter = $('poster-meter');
        meter.className = 'poster-meter poster-noprint' + (n > hi ? ' over' : n >= lo ? ' ok' : '');
        $('pm-fill').style.width = Math.min(100, Math.round(n / hi * 100)) + '%';
        $('pm-text').textContent = `${n} words · aim for ${lo}–${hi}` + (n > hi ? ' (too much text; trim it)' : n < lo ? ' (keep going)' : ' ✓');
        // Overflow warning (content taller than one page)
        requestAnimationFrame(() => {
            const p = wrap.firstElementChild, ratio = t.orient === 'landscape' ? 11 / 8.5 : 8.5 / 11;
            $('poster-overflow').hidden = !(p && p.offsetHeight > wrap.clientWidth / ratio * 1.02);
        });
    }

    // Print page size follows the template's orientation
    function syncPageStyle() {
        let st = $('poster-page-style');
        if (!st) { st = document.createElement('style'); st.id = 'poster-page-style'; document.head.appendChild(st); }
        st.textContent = isPosterView() ? `@page { size: letter ${tpl().orient}; margin: 0.25in; }` : '';
    }
    const isPosterView = () => !$('create-poster').hidden;

    /* ---------------------------------------------------------------
       ACTIONS
       --------------------------------------------------------------- */
    function setValue(id, val) {
        const k = state.template;
        state.values[k] = Object.assign({}, state.values[k], { [id]: val });
        state.sample[k] = false;      // user touched it, so it is no longer the untouched example
        save(); render();
    }

    function selectTemplate(k) {
        if (!TEMPLATES[k]) return;
        state.template = k; save();
        buildTemplateCards(); buildForm(); render();
    }

    function loadExample() {
        const k = state.template, hasContent = Object.values(state.values[k] || {}).some(has);
        if (hasContent && !confirm('Replace what you have written with the example poster?')) return;
        state.values[k] = Object.assign({}, tpl().sample); state.sample[k] = true;
        save(); buildForm(); render();
    }

    function clearPoster() {
        const k = state.template;
        if (Object.values(state.values[k] || {}).some(has) && !confirm('Clear everything on this poster?')) return;
        state.values[k] = {}; state.sample[k] = false;
        save(); buildForm(); render();
    }

    function printPoster() {
        if (state.sample[state.template] && !confirm('This poster still has the example text and sample data. Print anyway?')) return;
        render(); window.print();
    }

    function copyText() {
        const v = vals(), out = [`${tpl().label.toUpperCase()}`, ''];
        tpl().fields.forEach(f => { if ((f.type === 'text' || f.type === 'area') && has(v[f.id])) out.push(`${f.label}:\n${v[f.id]}\n`); });
        const text = out.join('\n'), btn = $('poster-copy-btn');
        const done = () => { const old = btn.textContent; btn.textContent = 'Copied ✓'; setTimeout(() => btn.textContent = old, 1400); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, () => prompt('Copy your poster text:', text));
        else prompt('Copy your poster text:', text);
    }

    /* ---------------------------------------------------------------
       VIEW ROUTING (hub / resume / poster) via #hash
       --------------------------------------------------------------- */
    function showView(view) {
        ['hub', 'resume', 'poster'].forEach(v => { const el = $('create-' + v); if (el) el.hidden = v !== view; });
        document.title = ({ hub: 'Create', resume: 'Resume Builder', poster: 'Poster Lab' })[view] + ' - BIOSTART';
        if (view === 'poster') { initPoster(); buildTemplateCards(); render(); }
        else syncPageStyle();
    }
    function route() {
        const h = location.hash.replace('#', '');
        showView(h === 'resume' || h === 'poster' ? h : 'hub');
        window.scrollTo(0, 0);
    }

    function initPoster() {
        if (ready) return;
        ready = true;
        load(); buildTemplateCards(); buildForm();

        $('poster-template-grid').addEventListener('click', e => { const c = e.target.closest('[data-tpl]'); if (c) selectTemplate(c.dataset.tpl); });
        $('poster-template-grid').addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { const c = e.target.closest('[data-tpl]'); if (c) { e.preventDefault(); selectTemplate(c.dataset.tpl); } } });

        const fields = $('poster-fields');
        fields.addEventListener('input', e => { const el = e.target.closest('[data-f]'); if (el && !el.classList.contains('icon-picker')) setValue(el.dataset.f, el.value); });
        fields.addEventListener('click', e => {
            const ib = e.target.closest('.icon-btn');
            if (ib) {
                const picker = ib.parentNode;
                picker.querySelectorAll('.icon-btn').forEach(b => { b.classList.toggle('on', b === ib); b.setAttribute('aria-pressed', b === ib); });
                picker.nextElementSibling.textContent = ICONS[ib.dataset.icon][0];
                setValue(picker.dataset.f, ib.dataset.icon);
            }
            const tb = e.target.closest('.theme-btn');
            if (tb) {
                state.theme = tb.dataset.theme; save();
                $('theme-picker').querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('on', b === tb));
                render();
            }
        });
        $('poster-checklist').addEventListener('change', () => {
            $('pc-count').textContent = `${$('poster-checklist').querySelectorAll('input:checked').length}/${CHECKLIST.length}`;
        });
        $('poster-example-btn').addEventListener('click', loadExample);
        $('poster-clear-btn').addEventListener('click', clearPoster);
        $('poster-print-btn').addEventListener('click', printPoster);
        $('poster-copy-btn').addEventListener('click', copyText);
    }

    window.addEventListener('hashchange', route);
    document.addEventListener('DOMContentLoaded', route);
})();

/* ==========================================================================
   JOURNEY TIMELINE
   A tab beside the logo opens a panel above the nav bar. The student's avatar
   and name sit on the track at the stage they're in, worked out from the
   graduation date on their resume (or their profile), and the stage's steps
   are ticked off from what they've typed into the resume and saved on the site.
   ========================================================================== */
(function () {
    'use strict';

    const CHECK_KEY = 'biostart_timelineChecks';
    const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const lvl = (n, doneAt, doingAt) => n >= doneAt ? 'done' : n >= doingAt ? 'doing' : 'todo';
    const sentState = g => (g.n > 0 && g.sent === g.n) ? 'done' : (g.sent > 0 || g.applying > 0) ? 'doing' : 'todo';
    const T = (id, title, when, detail, o) => Object.assign({ id, title, when, detail }, o || {});
    const SRC = { resume: 'Tracked from your resume', saved: 'Tracked from your saved list', profile: 'Tracked from your profile' };

    const L = {
        survey: ['survey.html', 'Take the survey'],
        hs: ['highschools.html', 'Browse high schools'],
        col: ['colleges.html', 'Browse colleges'],
        jobs: ['jobs.html', 'See internships and jobs'],
        opp: ['opportunities.html', 'See opportunities'],
        resume: ['resume.html#resume', 'Open the resume builder'],
        poster: ['resume.html#poster', 'Open Poster Lab'],
        profile: ['profile.html', 'Update statuses']
    };

    /* ---------- the path ---------- */
    const STAGES = [
        {
            key: 'ms', name: 'Explore', span: 'Grades 6–7',
            goal: 'Find out what biotech work really is, and build the habits that make high school applications easier.',
            tasks: [
                T('ms-survey', 'Take the survey and save your profile', 'Do this first',
                    'The survey tells BIOSTART your county, town, age, and the season you’re free. The schools, jobs, and opportunities pages then sort themselves around you instead of showing everything at once. It takes a couple of minutes and you can retake it whenever something changes.',
                    { auto: 'profile', check: c => c.p.surveyCompleted ? 'done' : 'todo', link: L.survey, core: true }),
                T('ms-explore', 'Find out what biotech work looks like', 'Any time in 6th–7th grade',
                    'Lab technician, quality control analyst, bioinformatics, process development, clinical research coordinator. Pick two that sound interesting and write one sentence on why. You’re collecting options, not choosing a career. Short videos on company career pages and open houses at the schools on the Vocational High Schools page are good places to start.'),
                T('ms-grades', 'Keep science and math steady', 'All of middle school',
                    'Many selective programs look at grades, attendance, and teacher comments. You don’t need perfect marks; you need a pattern of effort and improvement. If one subject slips, ask the teacher what to change that month rather than waiting for the report card.'),
                T('ms-save', 'Save three high schools you could see yourself at', 'By the end of 7th grade',
                    'Use the heart on the Vocational High Schools page, starting with your own county and then the neighboring ones. Each school sets its own rules about who can apply, so read the eligibility notes before you get attached to one.',
                    { auto: 'saved', check: c => lvl(c.sv.hs.n, 3, 1), link: L.hs, core: true }),
                T('ms-club', 'Join one hands-on science activity', 'This school year',
                    'Science club, Science Olympiad, robotics, or a school science fair all count. One real experiment, with a question, a control, and results, is worth more than a long list of clubs. The Opportunities page lists competitions open to students your age.',
                    { link: L.opp }),
                T('ms-resume', 'Start a one-page activity list', 'Before 8th grade starts',
                    'Your name, school, clubs, awards, and anything you’ve built. It doesn’t need to be fancy. The resume builder shows a live preview, and what you type is saved in your browser, so you can add to it each year.',
                    { auto: 'resume', check: c => lvl(c.secDone, 3, 1), link: L.resume })
            ]
        },
        {
            key: 'ms8', name: 'Choose', span: '8th grade',
            goal: 'Pick programs, meet every deadline, and apply. Each school sets its own dates, so confirm them directly.',
            tasks: [
                T('ms8-list', 'Narrow to three to five programs', 'September–October',
                    'Compare the biotech course sequence at each school, the certifications or college credit students can earn, the commute, and how admission works. Your saved list keeps everything in one place on the Account Profile page.',
                    { auto: 'saved', check: c => lvl(c.sv.hs.n, 3, 1), link: L.hs, core: true }),
                T('ms8-visit', 'Go to open houses and shadow days', 'Usually fall',
                    'Ask what students actually do in the biotech lab, how many periods a day the program takes, which certifications students leave with, and what happens if the program turns out not to be a fit. Write notes right after each visit while the details are fresh.'),
                T('ms8-dates', 'Write down every requirement and date', 'As soon as you shortlist',
                    'Entrance tests, essays, interviews, transcripts, recommendations, and the application deadline can all differ from school to school. Put each on a calendar with a reminder two weeks ahead. Deadlines for many programs fall in late fall or winter, but check with the school.'),
                T('ms8-rec', 'Ask a teacher for a recommendation, if one is required', 'Two to three weeks before it’s due',
                    'Choose the science or math teacher who has watched you work the hardest. Give them your activity list and the deadline in writing, and thank them afterwards.'),
                T('ms8-apply', 'Submit your applications', 'Before each deadline',
                    'Change each school’s status in your saved list (Interested, Applying, Applied, Accepted) and this timeline moves with it. Keep confirmation emails together in one folder.',
                    { auto: 'saved', check: c => c.sv.hs.sent > 0 ? 'done' : c.sv.hs.applying > 0 ? 'doing' : 'todo', link: L.profile, core: true }),
                T('ms8-resume', 'Finish your activity list', 'Before applications are due',
                    'Add contact details, your school, clubs, awards, and one or two things you’ve made or done. Export it as a PDF in case a school asks for it.',
                    { auto: 'resume', check: c => lvl(c.secDone, 4, 2), link: L.resume }),
                T('ms8-planb', 'Learn your home school’s science pathway', 'Before decisions come out',
                    'Find out which biology, chemistry, and CTE courses your local high school offers and whether it has a biotech elective or club. Knowing your plan B takes the pressure off decision day.')
            ]
        },
        {
            key: 'hs-early', name: 'Build', span: '9th–10th grade',
            goal: 'Learn real lab technique, keep your grades strong, and start collecting proof of what you can do.',
            tasks: [
                T('he-courses', 'Take and list your core science and math courses', 'Freshman and sophomore year',
                    'Biology, then chemistry, with math moving steadily upward. If your school has a biotech academy, follow its sequence. Add each course to the coursework box on your resume so colleges see the path and not just the grades.',
                    { auto: 'resume', check: c => lvl(c.courseN, 3, 1), link: L.resume, core: true }),
                T('he-lab', 'Learn at least five lab techniques', 'Across 9th–10th grade',
                    'Micropipetting, gel electrophoresis, PCR, aseptic technique, DNA extraction, and making solutions are the usual starting set. List a technique only once you’ve done it yourself, and be ready to explain what it’s for if someone asks.',
                    { auto: 'resume', check: c => lvl(c.labN, 5, 1), link: L.resume, core: true }),
                T('he-bace', 'Prepare for the BACE credential', 'Open from age 14',
                    'Biotility’s Biotechnology Aptitude & Competency Exam is an industry-recognized credential for entry-level lab roles. Ask your biotech teacher how students at your school register, and add it to your certifications once you pass.',
                    { auto: 'resume', check: c => c.bace ? 'done' : 'todo', link: L.opp, core: true }),
                T('he-resume', 'Start your resume', 'This semester',
                    'Fill in contact details, education, coursework, and one activity. Update it every semester instead of rebuilding it from memory senior year.',
                    { auto: 'resume', check: c => lvl(c.secDone, 5, 2), link: L.resume, core: true }),
                T('he-activity', 'Join a team or club that does science', 'This year',
                    'HOSA, TSA, Science Olympiad, or a school research club. Colleges care what you did in the role, so write down your title, your dates, and one result in the Projects section.',
                    { auto: 'resume', check: c => c.g('res-proj-title') ? 'done' : 'todo', link: L.resume }),
                T('he-fair', 'Run a small research project', 'Sophomore year',
                    'Pick a question you can test in a school lab or at home, repeat it, and write up what happened, including what didn’t work. A school or regional science fair is a natural finish line, and the Opportunities page lists the bigger competitions you can grow into.',
                    { link: L.opp }),
                T('he-gpa', 'Record your GPA and honors every year', 'End of each school year',
                    'Add your GPA, honor roll terms, and any awards while they’re fresh. They’re much harder to reconstruct as a senior.',
                    { auto: 'resume', check: c => c.g('res-gpa') ? 'done' : 'todo', link: L.resume }),
                T('he-summer', 'Save two summer programs for next year', 'Look in the fall',
                    'BIOSTART lists Rutgers’ Aresty research program (15 and up) and Pathways to Science, which collects funded programs for the same age range. Summer applications often open in winter, so looking in the fall gives you time to prepare.',
                    { auto: 'saved', check: c => lvl(c.sv.opp.n + c.sv.job.n, 2, 1), link: L.opp })
            ]
        },
        {
            key: 'hs11', name: 'Prove it', span: '11th grade',
            goal: 'Go from learning to doing: real experience, a credential or two, and a college list that makes sense.',
            tasks: [
                T('h11-exp', 'Get real lab or work experience', 'This year or next summer',
                    'A paid job, internship, or supervised research all count. On the Internships & Jobs page several roles start at 16 and most company internships want 18, so start with what you’re eligible for now. Log the position, organization, and dates in the Experience section.',
                    { auto: 'resume', check: c => c.hasJob ? 'done' : (c.sv.job.sent > 0 || c.sv.job.applying > 0) ? 'doing' : 'todo', link: L.jobs, core: true }),
                T('h11-bullets', 'Write experience bullets that show results', 'Right after each experience',
                    'Start with a verb and add a number or an outcome. “Ran 24 PCR reactions and checked results by gel electrophoresis” says far more than “helped in the lab.” Aim for three bullets per position.',
                    { auto: 'resume', check: c => lvl(c.jobLines, 3, 1), link: L.resume }),
                T('h11-cert', 'Earn CITI RCR and BACE', 'By spring',
                    'University labs often ask for CITI’s Responsible Conduct of Research course before you touch samples or data, and BACE signals entry-level lab skills. Both go on your certifications line.',
                    { auto: 'resume', check: c => (c.citi && c.bace) ? 'done' : (c.citi || c.bace) ? 'doing' : 'todo', link: L.opp, core: true }),
                T('h11-comp', 'Enter a competition', 'Most run in spring',
                    'The Opportunities page lists BioGENEius, HOSA, TSA, and ISEF-affiliated fairs. Even if you don’t place, the poster or presentation becomes a line on your resume. Registration can close months ahead. Set a saved competition to Applied once you’ve registered and this step will turn green.',
                    { auto: 'saved', check: c => c.sv.comp.sent > 0 ? 'done' : c.sv.comp.n > 0 ? 'doing' : 'todo', link: L.opp }),
                T('h11-present', 'Present or publish something', 'Spring or summer',
                    'A poster at a school or regional symposium counts. Use Poster Lab to lay it out, then record it under Presentations and Publications on your resume.',
                    { auto: 'resume', check: c => c.g('res-pub-title') ? 'done' : 'todo', link: L.poster }),
                T('h11-colleges', 'Build a balanced college list', 'Winter–spring',
                    'Aim for a mix: a couple of likely schools, a few that fit your grades, and one or two reaches. Check that each offers biotechnology, molecular biology, or a related major, plus undergraduate research. Saving them on the Colleges page lets you compare cost and acceptance rates side by side.',
                    { auto: 'saved', check: c => lvl(c.sv.col.n, 5, 1), link: L.col, core: true }),
                T('h11-tests', 'Plan your SAT/ACT and AP exams', 'Spring of junior year',
                    'Many colleges are test-optional, but not all, so check every school on your list. If you plan to test, leave time for a retake before applications are due. AP Biology and AP Chemistry are the usual picks for this path.'),
                T('h11-recs', 'Build two recommender relationships', 'Ask in spring',
                    'One teacher who has seen your lab or problem-solving work, and one supervisor from a job, internship, or research project if you have one. Hand them your resume and a short list of where you’re applying.')
            ]
        },
        {
            key: 'hs12', name: 'Apply', span: '12th grade',
            goal: 'Turn two years of work into applications, financial aid, and a decision you feel good about.',
            tasks: [
                T('h12-resume', 'Proofread and finalize your resume', 'Before applications open',
                    'Fill in every section that applies, then read it out loud. Pick the Academic & Research template for university labs and scholarships, or Industry Corporate for jobs. Export a PDF and keep a plain-text copy for application forms that won’t take attachments.',
                    { auto: 'resume', check: c => lvl(c.secDone, 8, 5), link: L.resume, core: true }),
                T('h12-essay', 'Draft your personal essay', 'Summer through fall',
                    'Write about one real moment in a lab or project, not a list of achievements. Get feedback from a teacher and from someone who doesn’t know biotech, and plan on at least three drafts.'),
                T('h12-apps', 'Submit your college applications', 'Many deadlines fall between November and mid-January',
                    'Early rounds close sooner than regular decision. Track each school in your saved list (Applying, Applied, Accepted) and re-check each college’s own deadline page, since dates change from year to year.',
                    { auto: 'saved', check: c => sentState(c.sv.col), link: L.profile, core: true }),
                T('h12-fafsa', 'File the FAFSA and New Jersey aid forms', 'Opens in the fall of senior year',
                    'File as early as you can, since some aid is limited. New Jersey’s HESAA lists state grant deadlines, and many colleges have their own financial aid forms on top of the FAFSA.'),
                T('h12-sch', 'Apply for scholarships', 'Ongoing; many close in winter',
                    'Start with the scholarships on the Opportunities page, then ask your school counselor about local awards. Reuse your essay and resume, and keep a short list of deadlines so nothing slips.',
                    { auto: 'saved', check: c => c.sv.sch.sent > 0 ? 'done' : c.sv.sch.n > 0 ? 'doing' : 'todo', link: L.opp }),
                T('h12-credit', 'Ask about credit for your CTE and AP work', 'After acceptances',
                    'Ask each admissions office whether your CTE courses, AP scores, dual enrollment, or certifications earn credit or placement. Community colleges such as CCM and Middlesex have transfer routes into New Jersey four-year schools if that fits your plan.'),
                T('h12-summer', 'Line up your summer before graduation', 'Winter–spring',
                    'A paid lab or pharmacy job is a good bridge to college. Check Internships & Jobs for roles that match your age and season, and apply early, since hiring for summer often starts in winter.',
                    { auto: 'saved', check: c => c.sv.job.sent > 0 ? 'done' : c.sv.job.n > 0 ? 'doing' : 'todo', link: L.jobs }),
                T('h12-decide', 'Compare offers and commit', 'Many colleges set a May 1 reply date',
                    'Compare what you would actually pay after aid, not the sticker price, and ask how first-years get into research. Send your deposit and decline the others so someone on a waitlist gets the spot.')
            ]
        },
        {
            key: 'col-early', name: 'Join a lab', span: 'College years 1–2',
            goal: 'Get into a lab early, build your technical skills, and keep your options open.',
            tasks: [
                T('ce-advisor', 'Meet your advisor and map out four years', 'First semester',
                    'Bring a list of courses you’re considering and ask which ones lead to lab work. Find out whether your major has a research or co-op requirement, and when it kicks in.'),
                T('ce-lab', 'Join a research lab', 'First or second year',
                    'Read the department’s faculty pages, pick three to five labs whose work makes sense to you, and email each with a short note and your resume. Mention one specific paper or project. Many labs take first- and second-year students who show up reliably.',
                    { auto: 'resume', check: c => c.hasJob ? 'done' : 'todo', link: L.resume, core: true }),
                T('ce-citi', 'Complete CITI training', 'Before your first lab shift',
                    'University labs commonly require CITI’s Responsible Conduct of Research course before you handle samples or data. It’s online, and you can list it on your resume right away.',
                    { auto: 'resume', check: c => c.citi ? 'done' : 'todo', link: L.opp, core: true }),
                T('ce-resume', 'Move your resume to a college format', 'Each semester',
                    'Move high school items down, bring research and coursework up, and keep every bullet about results. Academic & Research suits labs; Industry Corporate suits jobs.',
                    { auto: 'resume', check: c => lvl(c.secDone, 7, 4), link: L.resume }),
                T('ce-data', 'Add a data skill', 'First two years',
                    'R, Python, or advanced Excel appears in many biotech job postings. Even one course project is worth listing under software and data skills.',
                    { auto: 'resume', check: c => lvl(c.softN, 3, 1), link: L.resume }),
                T('ce-summer', 'Apply for a summer research program or internship', 'Often open in fall, closing by early spring',
                    'The NSF REU directory and Pathways to Science list funded programs, and several pay a stipend. Apply to more than one, and ask your lab mentor for a recommendation.',
                    { auto: 'saved', check: c => c.sv.opp.sent > 0 ? 'done' : c.sv.opp.n > 0 ? 'doing' : 'todo', link: L.opp }),
                T('ce-network', 'Meet people working in the field', 'Once a semester',
                    'Career fairs, department seminars, and industry groups such as BioNJ often have student options. Ask people what they do day to day, and send a thank-you note within a day.'),
                T('ce-transfer', 'If you’re at a community college, plan your transfer', 'By the start of year two',
                    'Confirm which credits transfer to your target four-year school and which courses it requires before you apply. Ask for the transfer agreement in writing.')
            ]
        },
        {
            key: 'col-late', name: 'Launch', span: 'College years 3–4',
            goal: 'Turn your experience into a first job, a graduate program, or both.',
            tasks: [
                T('cl-intern', 'Land an industry internship', 'Apply the fall before',
                    'Many companies recruit summer interns in fall and winter. Save openings on the Internships & Jobs page and set their status as you go, so you always know what’s pending.',
                    { auto: 'saved', check: c => c.sv.job.accepted > 0 ? 'done' : (c.sv.job.n > 0 || c.sv.job.sent > 0) ? 'doing' : 'todo', link: L.jobs }),
                T('cl-project', 'Take on an independent project or thesis', 'Third year',
                    'Ask your lab mentor what a project you could own would look like. A project with your name on the poster is worth more than extra hours at the bench.',
                    { auto: 'resume', check: c => c.g('res-pub-title') ? 'done' : c.g('res-proj-title') ? 'doing' : 'todo', link: L.resume }),
                T('cl-present', 'Present a poster or co-author an abstract', 'Spring',
                    'Campus research days and regional symposia are the usual first stops. Poster Lab can lay out the poster, and the resume builder has a section for the citation.',
                    { auto: 'resume', check: c => c.g('res-pub-title') ? 'done' : 'todo', link: L.poster }),
                T('cl-resume', 'Tailor your resume for each application', 'Before every application',
                    'Rewrite your summary line and reorder bullets to match the posting. Industry Corporate works well with applicant tracking systems; Academic & Research suits graduate programs.',
                    { auto: 'resume', check: c => lvl(c.secDone, 9, 6), link: L.resume, core: true }),
                T('cl-path', 'Decide between industry, grad school, or both', 'Third year',
                    'Talk with three people: a recent graduate, a professor, and someone working at a company. Ask what they would do differently. Many people work for a couple of years before grad school, and some employers help pay for it.'),
                T('cl-grad', 'If grad school is the plan, start applications early', 'Summer into fall of senior year',
                    'Ask recommenders by early fall and give them your resume and statement drafts. Check each program’s testing requirements, since many no longer require the GRE.'),
                T('cl-jobs', 'Apply for entry-level roles', 'Fall of senior year',
                    'Many companies hire new graduates months before graduation. Set job alerts, apply to ten to fifteen roles, and use your internship supervisor and lab mentor as references.'),
                T('cl-refs', 'Collect references and a portfolio', 'Before applications',
                    'Ask your lab mentor and internship supervisor for permission to list them. Keep a folder with poster PDFs, protocols you wrote, and anything else you’re allowed to share.')
            ]
        }
    ];

    /* ---------- reading what the student has told us ---------- */
    const items = s => (s || '').split(/[,;\n•|]+/).map(x => x.trim()).filter(x => x.length > 1);
    const lines = s => (s || '').split(/\n+/).map(x => x.replace(/^[•\-*\s]+/, '').trim()).filter(Boolean);

    function resumeData() {
        const out = {};
        try {
            if (document.getElementById('printable-resume')) {
                // On the resume page, read the live fields (but never the sample data)
                if (typeof resumeIsSample === 'undefined' || !resumeIsSample) {
                    RESUME_FIELD_IDS.forEach(id => { const el = document.getElementById(id); out[id] = el ? (el.value || '').trim() : ''; });
                }
            } else {
                const d = JSON.parse(localStorage.getItem('biostart_resumeDraft'));
                if (d && d.fields && !d.sample) Object.keys(d.fields).forEach(k => { out[k] = String(d.fields[k] || '').trim(); });
            }
        } catch (e) { /* storage unavailable: treat the resume as empty */ }
        return out;
    }

    function groupOf(list) {
        const st = i => (userProfile.progress || {})[i.id] || 'Interested';
        const applied = list.filter(i => st(i) === 'Applied').length;
        const accepted = list.filter(i => st(i) === 'Accepted').length;
        return { n: list.length, applying: list.filter(i => st(i) === 'Applying').length, sent: applied + accepted, accepted };
    }

    function savedInfo() {
        const ids = Array.isArray(userProfile.savedIds) ? userProfile.savedIds : [];
        const pick = arr => arr.filter(i => ids.includes(i.id));
        const opp = pick(OPPORTUNITIES);
        return {
            hs: groupOf(pick(HIGH_SCHOOLS)),
            col: groupOf(pick(COLLEGES)),
            job: groupOf(pick(JOBS)),
            opp: groupOf(opp),
            sch: groupOf(opp.filter(i => i.cat === 'scholarship')),
            comp: groupOf(opp.filter(i => i.cat === 'competition'))
        };
    }

    function buildCtx() {
        const r = resumeData();
        const g = id => r[id] || '';
        const certs = g('res-certs').toLowerCase();
        const sections = [
            ['Contact details', !!(g('res-name') && g('res-email'))],
            ['Summary', !!g('res-summary')],
            ['Education', !!g('res-school')],
            ['Coursework', !!g('res-courses')],
            ['Lab skills', !!g('res-labskills')],
            ['Software and data skills', !!g('res-softskills')],
            ['Certifications', !!g('res-certs')],
            ['Experience', !!(g('res-job-title') || g('res-job-org'))],
            ['Projects and activities', !!g('res-proj-title')],
            ['Honors', !!g('res-honors')],
            ['Presentations and publications', !!g('res-pub-title')]
        ];
        return {
            r, g, sections, p: userProfile, sv: savedInfo(),
            secDone: sections.filter(s => s[1]).length,
            labN: items(g('res-labskills')).length,
            softN: items(g('res-softskills')).length,
            courseN: items(g('res-courses')).length,
            jobLines: lines(g('res-job-desc')).length,
            hasJob: sections[7][1],
            bace: /bace|biotility/.test(certs),
            citi: /citi|rcr|responsible conduct/.test(certs)
        };
    }

    const ordinal = n => n + (n === 6 || n === 7 || n === 8 ? 'th' : '');

    function detect(ctx) {
        const p = userProfile;
        const now = new Date();
        const ayEnd = now.getMonth() >= 7 ? now.getFullYear() + 1 : now.getFullYear();   // school year ends in the summer
        const m = /(20\d{2})/.exec(ctx.g('res-grad'));
        const left = m ? parseInt(m[1], 10) - ayEnd : null;                                // school years still to go, 0 = final year
        const age = parseInt(p.age, 10) || 16;
        const level = p.level || 'High School';
        let key, label, viaGrad = false;

        if (level === 'Middle School') {
            let grade;
            if (left !== null && left >= 0 && left <= 2) { grade = 8 - left; viaGrad = true; }
            else grade = age <= 11 ? 6 : age === 12 ? 7 : 8;
            key = grade === 8 ? 'ms8' : 'ms';
            label = ordinal(grade) + ' grade';
        } else if (level === 'College Undergrad') {
            let yr;
            if (left !== null) { yr = left <= 0 ? 4 : left === 1 ? 3 : left === 2 ? 2 : 1; viaGrad = true; }
            else yr = age <= 18 ? 1 : age === 19 ? 2 : age === 20 ? 3 : 4;
            key = yr <= 2 ? 'col-early' : 'col-late';
            label = ['First', 'Second', 'Third', 'Fourth'][yr - 1] + ' year of college';
        } else {
            let grade;
            if (left !== null && left >= 0 && left <= 3) { grade = 12 - left; viaGrad = true; }
            else grade = age <= 14 ? 9 : age === 15 ? 10 : age === 16 ? 11 : 12;
            key = grade <= 10 ? 'hs-early' : grade === 11 ? 'hs11' : 'hs12';
            label = ['Freshman', 'Sophomore', 'Junior', 'Senior'][grade - 9] + ' year';
        }
        const known = !!p.surveyCompleted;
        const basis = viaGrad
            ? `the graduation date on your resume (${m[1]})`
            : known ? `the age (${age}) and school level in your profile`
                    : `a default age (${age}) and school level (${level})`;
        return { idx: STAGES.findIndex(s => s.key === key), label, basis, guess: !viaGrad && !known };
    }

    /* ---------- manual check-offs ---------- */
    function loadChecks() { try { return JSON.parse(localStorage.getItem(CHECK_KEY)) || {}; } catch (e) { return {}; } }
    function saveChecks(o) { try { localStorage.setItem(CHECK_KEY, JSON.stringify(o)); } catch (e) { /* ignore */ } }

    /* ---------- state ---------- */
    let tab = null, panel = null, card = null;
    let ctx = null, cur = null, checks = {};
    let isOpen = false, preview = null, dirty = true;

    const statusOf = t => {
        if (t.check) { try { return t.check(ctx); } catch (e) { return 'todo'; } }
        return checks[t.id] ? 'done' : 'todo';
    };
    const reduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function markerHTML() {
        const picked = !!userProfile.name || (userProfile.avatarIdx || 0) > 0;
        const av = picked ? AVATARS[userProfile.avatarIdx || 0] : '👤';
        const nm = userProfile.name ? userProfile.name : 'You';
        return `<span class="tl-marker"><span class="tl-flag">${esc(nm)}${cur.guess ? ' (est.)' : ''}</span><span class="tl-avatar" aria-hidden="true">${av}</span></span>`;
    }

    function taskHTML(t, st) {
        const manual = !t.check;
        const icon = manual
            ? `<button type="button" class="tl-check${st === 'done' ? ' on' : ''}" data-id="${t.id}" role="checkbox" aria-checked="${st === 'done'}" aria-label="${esc(t.title)}"></button>`
            : `<span class="tl-state s-${st}" aria-hidden="true"></span>`;
        const src = manual ? 'You tick this one off' : SRC[t.auto] || '';
        if (st === 'done') {
            return `<li class="tl-task is-done">${icon}<div><div class="tl-task-head"><strong>${esc(t.title)}</strong></div><div class="tl-foot"><span class="tl-src">${esc(src)}</span></div></div></li>`;
        }
        return `<li class="tl-task is-${st}">${icon}<div>
            <div class="tl-task-head"><strong>${esc(t.title)}</strong><span class="tl-when">${esc(t.when)}</span></div>
            <p>${esc(t.detail)}</p>
            <div class="tl-foot"><span class="tl-src">${esc(src)}</span>${t.link ? `<a class="tl-go" href="${t.link[0]}">${esc(t.link[1])}</a>` : ''}</div>
        </div></li>`;
    }

    function groupHTML(title, rows) {
        if (!rows.length) return '';
        return `<section class="tl-group"><h4>${title}<span class="tl-count">${rows.length}</span></h4><ul class="tl-list">${rows.map(r => taskHTML(r.t, r.s)).join('')}</ul></section>`;
    }

    function renderPanel() {
        if (!card) return;
        const track0 = card.querySelector('.tl-track');
        const keepScroll = track0 ? track0.scrollLeft : null;

        const idx = preview === null ? cur.idx : preview;
        const stage = STAGES[idx];
        const isCur = idx === cur.idx;
        const rows = stage.tasks.map(t => ({ t, s: statusOf(t) }));
        const done = rows.filter(r => r.s === 'done');
        const doing = rows.filter(r => r.s === 'doing');
        const todo = rows.filter(r => r.s === 'todo');
        const pct = Math.round(done.length / rows.length * 100);
        const last = STAGES.length - 1;

        const track = STAGES.map((s, i) => {
            const pos = i < cur.idx ? 'past' : i === cur.idx ? 'now' : 'next';
            return `<button type="button" class="tl-col ${pos}${i === idx ? ' is-view' : ''}" data-stage="${i}" aria-pressed="${i === idx}" aria-label="${esc(s.name)}, ${esc(s.span)}${i === cur.idx ? ', you are here' : ''}">
                <span class="tl-slot">${i === cur.idx ? markerHTML() : ''}</span>
                <span class="tl-rail${i <= cur.idx ? ' l-on' : ''}${i < cur.idx ? ' r-on' : ''}${i === 0 ? ' first' : ''}${i === last ? ' last' : ''}"><span class="tl-dot"></span></span>
                <span class="tl-name">${esc(s.name)}</span><span class="tl-span">${esc(s.span)}</span>
            </button>`;
        }).join('');

        const missing = ctx.sections.filter(s => !s[1]).map(s => s[0]);
        const side = `<div class="tl-side">
            <h3 class="tl-title">${esc(isCur ? cur.label : stage.name)}</h3>
            <div class="tl-sub">${isCur ? `${esc(stage.name)} · ${esc(stage.span)}` : esc(stage.span)}</div>
            ${isCur
                ? `<p class="tl-basis">${cur.guess ? 'This is a best guess. ' : ''}Placed using ${esc(cur.basis)}.${cur.guess ? ' Take the survey or add a graduation date to your resume to pin it down.' : ''}</p>`
                : `<p class="tl-basis">You’re currently in <strong>${esc(cur.label)}</strong>.</p>`}
            <p class="tl-goal">${esc(stage.goal)}</p>
            <div class="tl-meter" role="img" aria-label="${done.length} of ${rows.length} steps done"><i style="width:${pct}%"></i></div>
            <p class="tl-meter-label">${done.length} of ${rows.length} steps done</p>
            <div class="tl-resumebox"><strong>Resume: ${ctx.secDone} of ${ctx.sections.length} sections filled.</strong>${missing.length ? `<br>Still empty: ${esc(missing.slice(0, 4).join(', '))}${missing.length > 4 ? ` and ${missing.length - 4} more` : ''}.` : '<br>Every section has something in it.'}</div>
            <div class="tl-actions"><a class="btn-action" href="resume.html#resume">Edit resume</a><a class="btn-action tl-alt" href="profile.html">Update profile</a></div>
        </div>`;

        const banner = isCur ? '' : `<div class="tl-banner"><span>Previewing ${esc(stage.name.toLowerCase())}. Anything your resume already covers still counts.</span><button type="button" class="tl-linkbtn" data-act="back">Back to my stage</button></div>`;
        const allDone = done.length === rows.length
            ? `<p class="tl-alldone">Everything in this stage is done.${idx < last ? ` <button type="button" class="tl-linkbtn dark" data-stage="${idx + 1}">Look ahead to ${esc(STAGES[idx + 1].name.toLowerCase())}</button>` : ''}</p>` : '';
        const main = `<div class="tl-main">${banner}${groupHTML('You’re already doing', doing)}${groupHTML('Do next', todo)}${allDone}${groupHTML('Finished', done)}</div>`;

        // Anything important from earlier stages that is still open, and a look at what is next
        const behind = [];
        for (let i = 0; i < cur.idx; i++) STAGES[i].tasks.forEach(t => { if (t.core && statusOf(t) !== 'done') behind.push({ t, i }); });
        const nextStage = cur.idx < last ? STAGES[cur.idx + 1] : null;
        const boxBehind = `<div class="tl-box"><h4>Worth catching up on</h4>${behind.length
            ? `<ul>${behind.slice(0, 5).map(b => `<li><button type="button" class="tl-linkbtn dark" data-stage="${b.i}">${esc(b.t.title)}</button> <span class="tl-src">from ${esc(STAGES[b.i].name.toLowerCase())}</span></li>`).join('')}</ul>`
            : '<p>Nothing from earlier stages is waiting on you.</p>'}</div>`;
        const boxNext = nextStage ? `<div class="tl-box"><h4>Coming up: ${esc(nextStage.name.toLowerCase())} (${esc(nextStage.span)})</h4><p>${esc(nextStage.goal)}</p><ul>${nextStage.tasks.slice(0, 3).map(t => `<li>${esc(t.title)} <span class="tl-src">${esc(t.when)}</span></li>`).join('')}</ul><button type="button" class="tl-linkbtn dark" data-stage="${cur.idx + 1}">See the full stage</button></div>`
            : `<div class="tl-box"><h4>Past this timeline</h4><p>After this stage the path is yours: industry roles, graduate study, or both. Keep your resume current and keep saving what interests you.</p></div>`;

        card.innerHTML = `<div class="tl-trackwrap">
                <div class="tl-trackhead"><span>Pick any stage to see what it asks of you.</span><button type="button" class="tl-linkbtn dark" data-act="close">Hide timeline</button></div>
                <div class="tl-track">${track}</div>
            </div>
            <div class="tl-body">${side}${main}</div>
            <div class="tl-more">${boxBehind}${boxNext}</div>`;

        const t1 = card.querySelector('.tl-track');
        if (t1) {
            if (keepScroll !== null) t1.scrollLeft = keepScroll;
            else centerNow(t1);
        }
        dirty = false;
    }

    function centerNow(track) {
        const now = track.querySelector('.tl-col.now');
        if (!now) return;
        track.scrollLeft = Math.max(0, now.offsetLeft - (track.clientWidth - now.offsetWidth) / 2);
    }

    // The one animated moment: the avatar travels from the start of the path to where you are
    function playMarker() {
        if (reduced() || !card || !card.animate) return;
        const m = card.querySelector('.tl-marker');
        const first = card.querySelector('.tl-col');
        const now = card.querySelector('.tl-col.now');
        if (!m || !first || !now || first === now) return;
        const dx = (first.getBoundingClientRect().left + first.offsetWidth / 2) - (now.getBoundingClientRect().left + now.offsetWidth / 2);
        m.animate([{ transform: `translateX(${dx}px)` }, { transform: 'translateX(0)' }], { duration: 800, easing: 'cubic-bezier(.2,.8,.2,1)' });
    }

    function setOpen(open, fromUser) {
        isOpen = open;
        tab.setAttribute('aria-expanded', String(open));
        panel.classList.toggle('open', open);
        if (open) panel.removeAttribute('inert'); else panel.setAttribute('inert', '');
        if (open) {
            if (dirty) renderPanel();
            const t = card.querySelector('.tl-track');
            if (t) centerNow(t);
            if (fromUser) requestAnimationFrame(playMarker);
        }
    }

    function refresh() {
        if (!tab) return;
        ctx = buildCtx();
        checks = loadChecks();
        cur = detect(ctx);
        const rows = STAGES[cur.idx].tasks.map(statusOf);
        const done = rows.filter(s => s === 'done').length;
        tab.querySelector('.tl-tab-sub').textContent = `${cur.label} · ${done} of ${rows.length} done`;
        dirty = true;
        if (isOpen) renderPanel();
    }

    function build() {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        if (!header || !nav || document.getElementById('tl-tab')) return;

        tab = document.createElement('button');
        tab.type = 'button';
        tab.id = 'tl-tab';
        tab.className = 'tl-tab';
        tab.setAttribute('aria-expanded', 'false');
        tab.setAttribute('aria-controls', 'tl-panel');
        tab.innerHTML = '<svg class="tl-tab-icon" viewBox="0 0 26 26" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M3 18h20" stroke-dasharray="3 3"/><path d="M3 18h9" stroke-dasharray="none"/><circle cx="4" cy="18" r="2.2" fill="currentColor" stroke="none"/><circle cx="12" cy="18" r="2.2" fill="currentColor" stroke="none"/><circle cx="21" cy="18" r="2.2" fill="#fff" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="8" r="3.2" fill="#fff" stroke="currentColor" stroke-width="1.6"/></svg>'
            + '<span class="tl-tab-text"><b>My timeline</b><span class="tl-tab-sub">&nbsp;</span></span>'
            + '<svg class="tl-chev" viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 4.5L6 8l3.5-3.5"/></svg>';

        const brand = header.querySelector('.brand-box');
        if (brand) {
            const cluster = document.createElement('div');
            cluster.className = 'brand-cluster';
            brand.parentNode.insertBefore(cluster, brand);
            cluster.appendChild(brand);
            cluster.appendChild(tab);
        } else {
            header.insertBefore(tab, header.firstChild);
        }

        panel = document.createElement('section');
        panel.id = 'tl-panel';
        panel.className = 'tl-panel';
        panel.setAttribute('aria-label', 'Your biotech timeline');
        panel.setAttribute('inert', '');
        panel.innerHTML = '<div class="tl-clip"><div class="tl-card" id="tl-card"></div></div>';
        nav.parentNode.insertBefore(panel, nav);
        card = panel.querySelector('#tl-card');

        tab.addEventListener('click', () => setOpen(!isOpen, true));

        panel.addEventListener('click', e => {
            const chk = e.target.closest('.tl-check');
            if (chk) {
                const id = chk.dataset.id;
                const o = loadChecks();
                if (o[id]) delete o[id]; else o[id] = true;
                saveChecks(o);
                refresh();
                const again = card.querySelector('.tl-check[data-id="' + id + '"]');
                if (again) again.focus();
                return;
            }
            const act = e.target.closest('[data-act]');
            if (act) {
                if (act.dataset.act === 'close') { setOpen(false); tab.focus(); }
                if (act.dataset.act === 'back') { preview = null; renderPanel(); }
                return;
            }
            const col = e.target.closest('[data-stage]');
            if (col) {
                const i = parseInt(col.dataset.stage, 10);
                preview = i === cur.idx ? null : i;
                renderPanel();
                const again = card.querySelector('.tl-col[data-stage="' + i + '"]');
                if (again && col.classList.contains('tl-col')) again.focus({ preventScroll: true });
            }
        });

        panel.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen) { setOpen(false); tab.focus(); } });
        refresh();
    }

    /* ---------- keep it in step with everything else on the page ---------- */
    let timer = null;
    const soon = () => { clearTimeout(timer); timer = setTimeout(refresh, 250); };

    ['toggleLike', 'updateSavedStatus', 'updateUserHeaderDisplay', 'saveAccountProfile', 'loadSampleResumeData', 'clearResumeForm', 'toggleSamplePersonalInfo'].forEach(name => {
        const fn = window[name];
        if (typeof fn !== 'function') return;
        window[name] = function () {
            const out = fn.apply(this, arguments);
            try { soon(); } catch (e) { /* ignore */ }
            return out;
        };
    });

    document.addEventListener('input', e => {
        if (e.target && e.target.classList && e.target.classList.contains('resume-field')) soon();
    });
    window.addEventListener('storage', soon);
    window.addEventListener('DOMContentLoaded', build);
})();

/* ==========================================================================
   BIOSTART TUTORIAL
   A skippable walkthrough that teaches a new student the first steps and shows
   every feature and the useful materials. It opens by itself the first time
   someone visits (after the splash screen), can be skipped at any step, and
   can be reopened any time with the round "?" button in the corner.

   HOW TO ADD: paste this whole file at the very end of script.js
   (or save it as tutorial.js and load it after script.js).
   It injects its own styles, so style.css does not need to change.
   ========================================================================== */
(function () {
    'use strict';

    const KEY = 'biostart_tour';
    const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const here = () => (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const getState = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
    const putState = o => { try { localStorage.setItem(KEY, JSON.stringify(Object.assign(getState(), o))); } catch (e) { /* ignore */ } };
    const profile = () => (typeof userProfile !== 'undefined' && userProfile) ? userProfile : {};
    const reduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- small illustrations (built from HTML so they match the site) ---------- */
    const V = {
        welcome: `<div class="bt-vis bt-vis-welcome"><div class="bt-big">🔬</div><div class="bt-wl"><b>BIOSTART</b><span>Explore · Apply · Succeed</span></div></div>`,
        survey: `<div class="bt-vis"><div class="bt-form">
            <div><i>County</i><b>Morris</b></div><div><i>Town</i><b>Denville</b></div><div><i>Age</i><b>16</b></div>
            <div><i>Location</i><b>In-state</b></div><div><i>Season</i><b>Summer</b></div><div><i>Level</i><b>High school</b></div>
            <u>Submit &amp; generate my matches ►</u></div></div>`,
        account: `<div class="bt-vis"><div class="bt-pill"><span class="bt-avatar">🧬</span> ALEX (DENVILLE) <em>♥ 5</em></div><p class="bt-cap">Your avatar, name and saved-item count</p></div>`,
        timeline: `<div class="bt-vis"><div class="bt-track">
            <i class="d"></i><s class="on"></s><i class="d"></i><s class="on"></s><i class="n"><span class="bt-avatar">🧬</span><em>Alex</em></i><s></s><i></i><s></s><i></i></div>
            <div class="bt-tl-names"><span>Explore</span><span>Choose</span><span>Build</span><span>Prove it</span><span>Apply</span><span>Join a lab</span><span>Launch</span></div></div>`,
        search: `<div class="bt-vis"><div class="bt-search">🔍 <span>rutgrs</span><kbd>/</kbd></div>
            <div class="bt-sr"><div class="bt-did">Did you mean <b>Rutgers</b>?</div>
            <div class="bt-hit"><i>🎓 College</i><b>Rutgers Biotechnology Program</b></div>
            <div class="bt-hit"><i>🏆 Opportunity</i><b>Rutgers Aresty Research Program</b></div></div></div>`,
        schools: `<div class="bt-vis">${card('MORRIS COUNTY ★ YOUR COUNTY', 'MCST Biotech Academy', 'Academy for Biotechnology at Morris County School of Technology in Denville.', 'View Details')}</div>`,
        colleges: `<div class="bt-vis bt-two"><div class="bt-choice sel">🎓<b>FOR YOU</b><span>Matched to your survey</span></div><div class="bt-choice">🏛️<b>ALL COLLEGES</b><span>Browse everything</span></div></div>`,
        jobs: `<div class="bt-vis">${card('IN-STATE (NJ) ★ NEAR YOU | INTERNSHIP', 'Bayer Student Internship Program', 'Minimum age: 18+ · Contact email listed on the card.', 'Apply Now')}</div>`,
        opps: `<div class="bt-vis bt-four"><span>🔍 NSF REU</span><span>🧬 Pathways</span><span>📜 BACE</span><span>🛡️ CITI</span><span>🏆 Contests</span><span>🎓 Scholarships</span></div>`,
        tracker: `<div class="bt-vis"><div class="bt-heart">♥</div><div class="bt-steps"><span>Interested</span><span>Applying</span><span class="on">Applied</span><span>Accepted 🎉</span></div><p class="bt-cap">Update the status on your account page</p></div>`,
        resume: `<div class="bt-vis bt-doc"><div class="bt-docl"><div class="h"></div><div class="l w80"></div><div class="l w60"></div><div class="s"></div><div class="l"></div><div class="l w70"></div><div class="s"></div><div class="l w50"></div></div><div class="bt-tpls"><span class="on">Modern</span><span>Academic</span><span>Corporate</span><span>Compact</span></div></div>`,
        poster: `<div class="bt-vis"><div class="bt-poster"><div class="ph"><b></b><i></i></div><div class="pc"><div></div><div class="mid"><em></em><em class="r"></em></div><div></div></div></div><div class="bt-tpls"><span class="on">Research</span><span>Explainer</span><span>Career</span><span>Safety</span></div></div>`,
        kit: `<div class="bt-vis bt-four"><span>NSF REU</span><span>Pathways</span><span>BACE</span><span>CITI</span><span>Aresty</span><span>HOSA</span></div>`,
        plan: `<div class="bt-vis bt-plan"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div>`,
        done: `<div class="bt-vis bt-vis-welcome"><div class="bt-big">🎉</div><div class="bt-wl"><b>You’re ready</b><span>Reopen this any time with the ? button</span></div></div>`
    };
    function card(tag, title, body, btn) {
        return `<div class="bt-mcard"><span class="bt-mtag">${esc(tag)}</span><b>${esc(title)}</b><p>${esc(body)}</p><div><u>${esc(btn)}</u><i>♥</i></div></div>`;
    }

    /* ---------- the steps ---------- */
    const KIT = [
        ['NSF REU Directory', 'Funded summer research for undergraduates across the US.', 'https://www.nsf.gov/crssprgm/reu/reu_search.jsp'],
        ['Pathways to Science', 'Paid STEM summer research, internships and scholarships.', 'https://www.pathwaystoscience.org/'],
        ['Biotility BACE credential', 'Industry-recognized exam for entry-level lab roles (from age 14).', 'https://biotility.research.ufl.edu/bace/'],
        ['CITI Responsible Conduct of Research', 'Lab-integrity course many university labs require (age 16+).', 'https://about.citiprogram.org/'],
        ['Rutgers Aresty research program', 'Summer lab research for high schoolers at Rutgers (age 15+).', 'https://aresty.rutgers.edu/resources/research-opportunities-high-school-students'],
        ['HOSA and TSA competitions', 'State and national biotech and health events.', 'https://hosa.org/competition/']
    ];

    const PLANS = {
        'Middle School': ['Take the survey so BIOSTART knows your county and age.', 'On Vocational High Schools, heart three programs near you.', 'Write down any open-house dates and application deadlines.', 'Start a one-page activity list in the Resume Builder.', 'Open My timeline and read what “Explore” and “Choose” ask of you.'],
        'High School': ['Take the survey so every page matches you.', 'Open My timeline and read the “Do next” list for your year.', 'In the Resume Builder, add your graduation date so the timeline places you exactly.', 'Heart two summer programs and a few colleges you could picture yourself at.', 'Look into BACE and CITI, and note which ones you can earn this year.'],
        'College Undergrad': ['Take the survey and set your location and season preferences.', 'Fill in the Resume Builder with your research and lab skills.', 'Save internships on Internships & Jobs and set their status as you apply.', 'Browse the NSF REU Directory for summer research.', 'Open My timeline to see the “Join a lab” and “Launch” steps.']
    };

    const STEPS = [
        { id: 'welcome', kicker: 'Welcome', title: 'Welcome to BIOSTART', vis: V.welcome,
          body: () => `<p>BIOSTART brings New Jersey’s biotech school, college, job and competition options into one place, and shows you what to do next for where you are right now.</p>
                <p>This quick tour (about three minutes) covers your <b>first steps</b>, every <b>feature</b>, and the <b>most useful materials</b>. You can skip at any time and reopen it later from the <b>?</b> button in the corner.</p>` },

        { id: 'survey', kicker: 'First step', title: 'Take the survey first', vis: V.survey, target: 'nav a.nav-btn[href="survey.html"]',
          body: () => `<p>The survey is the one thing that makes everything else personal. Tell us your <b>county, town, age, location preference, season</b> and <b>school level</b>.</p>
                <ul><li>Schools, colleges, jobs and scholarships are sorted and filtered for you.</li>
                <li>“For You” tabs unlock, and results marked <b>★ Your county</b> or <b>★ Near you</b> float to the top.</li>
                <li>After you submit, we send you to the page that matters most for your level.</li></ul>
                <p class="bt-note">You can retake it whenever something changes, like moving up a grade.</p>`,
          cta: [{ href: 'survey.html', label: 'Take the survey now', primary: true }] },

        { id: 'account', kicker: 'Your account', title: 'Your avatar and name', vis: V.account, target: 'header a.user-pill',
          body: () => `<p>This is your account. Click it to <b>create your profile</b>, pick an <b>avatar</b>, and edit your age, town and preferences.</p>
                <ul><li>The <b>♥ number</b> counts everything you’ve saved.</li>
                <li>Your saved items and their application status live on the account page, under <b>My Saved Opportunities</b>.</li>
                <li>Everything is stored in your own browser. Nothing is sent anywhere.</li></ul>`,
          cta: [{ href: 'profile.html', label: 'Open my account' }] },

        { id: 'timeline', kicker: 'Where am I?', title: 'My timeline: your path, with you on it', vis: V.timeline, target: '#tl-tab',
          body: () => `<p><b>My timeline</b> shows seven stages from <i>Explore</i> in middle school to <i>Launch</i> in college, with your avatar and name sitting on the stage you’re in.</p>
                <ul><li><b>How it knows:</b> from the graduation date on your resume (or your profile).</li>
                <li><b>What it lists:</b> what you’re already doing, what to do next, and what’s finished, each with timing and a link.</li>
                <li><b>It updates itself</b> from your resume and saved items, and you tick off the rest.</li>
                <li>Click any stage to preview it, and see “Worth catching up on” for things you may have skipped.</li></ul>`,
          fallbackBody: true },

        { id: 'search', kicker: 'Find anything', title: 'Search the whole site', vis: V.search, target: '#site-search',
          body: () => `<p>The search box finds <b>schools, colleges, internships, scholarships and tools</b> in one go.</p>
                <ul><li>Press <kbd>/</kbd> (or <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd>) from anywhere to jump into it.</li>
                <li>Typos are fixed for you: “rutgrs” suggests <b>Rutgers</b>.</li>
                <li>Pick a result and the page scrolls to that exact card and highlights it.</li></ul>` },

        { id: 'schools', kicker: 'For middle school students and parents', title: 'Vocational high schools', vis: V.schools, target: 'nav a.nav-btn[href="highschools.html"]',
          body: () => `<p>Public CTE high schools across New Jersey with biotechnology programs, so students can start lab training years before college.</p>
                <ul><li>Filter by <b>county</b> in the sidebar.</li>
                <li>Your own county is marked <b>★ Your county</b>.</li>
                <li>Each card links to the school’s own program page, so you can check eligibility and dates there.</li></ul>`,
          cta: [{ href: 'highschools.html', label: 'See the schools' }] },

        { id: 'colleges', kicker: 'For high school students', title: 'Colleges and universities', vis: V.colleges, target: 'nav a.nav-btn[href="colleges.html"]',
          body: () => `<p>Biotech degree tracks from community college A.S. programs to research universities.</p>
                <ul><li><b>For You</b> matches your survey (in-state, out-of-state, or both). <b>All colleges</b> shows everything.</li>
                <li>Cards show <b>cost, acceptance and typical applicant age</b>, so you can compare quickly.</li>
                <li>The banner at the top links to the NSF REU Directory and Pathways to Science for research beyond New Jersey.</li></ul>`,
          cta: [{ href: 'colleges.html', label: 'Browse colleges' }] },

        { id: 'jobs', kicker: 'Get experience', title: 'Internships and paid jobs', vis: V.jobs, target: 'nav a.nav-btn[href="jobs.html"]',
          body: () => `<p>Labs, pharmacies, hospitals and companies that take students. Each card shows the <b>minimum age</b>, a <b>contact email</b> and an Apply button.</p>
                <ul><li><b>For You</b> uses your age, location and the season you’re free.</li>
                <li>Several roles start at 16; most company internships want 18.</li>
                <li>If nothing matches your season exactly, we tell you and show the closest options.</li></ul>`,
          cta: [{ href: 'jobs.html', label: 'See internships and jobs' }] },

        { id: 'opps', kicker: 'Stand out', title: 'Scholarships, competitions and programs', vis: V.opps, target: 'nav a.nav-btn[href="opportunities.html"]',
          body: () => `<p>Contests like <b>ISEF, BioGENEius, HOSA and TSA</b>, summer research such as <b>Rutgers Aresty</b>, scholarships like <b>Davidson Fellows</b>, plus credentials like <b>BACE</b> and <b>CITI</b>.</p>
                <ul><li>The box at the top gathers the national research databases and industry credentials in one place.</li>
                <li>Cards are filtered by your age after you take the survey.</li></ul>`,
          cta: [{ href: 'opportunities.html', label: 'See opportunities' }] },

        { id: 'tracker', kicker: 'Stay organized', title: 'Save with ♥ and track your applications', vis: V.tracker,
          body: () => `<p>Tap the <b>♥</b> on any card to save it. Saved items collect on your account page.</p>
                <ul><li>For each one, set a status: <b>Interested → Applying → Applied → Accepted</b>.</li>
                <li>Your timeline reads those statuses, so steps like “Submit your applications” turn green on their own.</li>
                <li>Un-save with the same heart any time.</li></ul>`,
          cta: [{ href: 'profile.html', label: 'See my saved items' }] },

        { id: 'resume', kicker: 'Create', title: 'The Resume Builder', vis: V.resume, target: 'nav a.nav-btn[href="resume.html"]',
          body: () => `<p>Under <b>Create</b>, build a professional resume with a <b>live preview</b> that updates as you type.</p>
                <ul><li>Four templates: <b>Modern Biotech, Academic &amp; Research, Industry Corporate, Compact Lab Specialist</b>.</li>
                <li>Sections made for biotech: lab techniques, software and data skills, certifications, research experience, presentations.</li>
                <li><b>Load sample data</b> to see a finished example, then clear it and write your own.</li>
                <li>It <b>saves itself</b> in your browser. Print or save as PDF, or copy plain text for application forms.</li>
                <li>Tip: add your <b>graduation date</b>, and My timeline will place you precisely.</li></ul>`,
          cta: [{ href: 'resume.html#resume', label: 'Open the Resume Builder' }] },

        { id: 'poster', kicker: 'Create', title: 'Poster Lab', vis: V.poster,
          body: () => `<p>Design a clean one-page poster for a science fair, class presentation or club event.</p>
                <ul><li>Four types: <b>Science Fair Research, Concept Explainer, Career Spotlight, Lab Safety Guide</b>.</li>
                <li>A short <b>guide</b> for each, a library of lab graphics, four color themes and a <b>checklist</b> before you print.</li>
                <li>A word meter warns you when there’s too much text.</li>
                <li>Enter results as “Label: value” and it draws the bar chart for you.</li></ul>`,
          cta: [{ href: 'resume.html#poster', label: 'Open Poster Lab' }] },

        { id: 'kit', kicker: 'Useful materials', title: 'Your starter kit', vis: V.kit,
          body: () => `<p>Free, trusted places to start. Each opens in a new tab:</p>
                <ul class="bt-kit">${KIT.map(k => `<li><a href="${k[2]}" target="_blank" rel="noopener">${esc(k[0])}</a><span>${esc(k[1])}</span></li>`).join('')}</ul>` },

        { id: 'plan', kicker: 'Your first week', title: 'Five things to do this week', vis: V.plan, plan: true,
          body: () => '' },

        { id: 'done', kicker: 'All set', title: 'You’re ready to go', vis: V.done,
          body: () => `<p>That’s everything. A few reminders:</p>
                <ul><li>Reopen this tutorial any time with the round <b>?</b> button in the corner.</li>
                <li>Press <kbd>/</kbd> to search from any page.</li>
                <li>Your timeline gets smarter the more you fill in your resume and save items.</li></ul>`,
          cta: [{ href: 'survey.html', label: 'Take the survey', primary: true }] }
    ];

    /* ---------- styles (injected so style.css is untouched) ---------- */
    const CSS = `
.bt-launch{position:fixed;left:18px;bottom:18px;z-index:9000;display:flex;align-items:center;gap:8px;padding:9px 16px 9px 10px;background:var(--biostart-black,#0d0d0d);color:#fff;border:3px solid var(--biostart-red,#D93829);border-radius:30px;box-shadow:0 4px 0 rgba(0,0,0,.35);font:700 13px/1 var(--font-display,inherit);letter-spacing:.04em;cursor:pointer;transition:transform .15s,background .2s}
.bt-launch:hover{background:var(--biostart-red,#D93829);transform:translateY(-2px)}
.bt-launch:active{transform:translateY(1px)}
.bt-launch i{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#fff;color:var(--biostart-red,#D93829);font:900 15px/1 var(--font-display,inherit);font-style:normal}
.bt-launch.hide{display:none}
.bt-root{position:fixed;inset:0;z-index:10050}
.bt-block{position:absolute;inset:0;background:rgba(13,13,13,.72);animation:btFade .25s ease}
.bt-root.spot .bt-block{background:transparent}
.bt-hole{position:fixed;border-radius:14px;box-shadow:0 0 0 9999px rgba(13,13,13,.74),0 0 0 4px var(--biostart-red,#D93829);pointer-events:none;transition:top .3s,left .3s,width .3s,height .3s}
.bt-card{position:fixed;width:min(640px,94vw);max-height:92vh;overflow:auto;background:#fff;color:var(--biostart-black,#0d0d0d);border:3px solid var(--biostart-black,#0d0d0d);border-radius:16px;box-shadow:0 7px 0 var(--biostart-black,#0d0d0d);animation:btPop .3s cubic-bezier(.2,1.2,.4,1)}
.bt-card.center{top:50%;left:50%;transform:translate(-50%,-50%)}
.bt-card.spot{width:min(430px,94vw)}
.bt-card.sheet{left:8px!important;right:8px;bottom:8px;top:auto!important;width:auto;max-height:86vh;transform:none}
@keyframes btPop{from{opacity:0;margin-top:12px}}
@keyframes btFade{from{opacity:0}}
.bt-top{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 18px;background:var(--biostart-black,#0d0d0d);color:#fff}
.bt-kicker{font:700 12px/1.2 var(--font-display,inherit);letter-spacing:.12em;text-transform:uppercase;color:#fff}
.bt-kicker b{color:var(--biostart-red,#D93829);margin-right:8px}
.bt-x{background:none;border:2px solid #555;color:#fff;border-radius:20px;padding:3px 12px;font:700 11px/1.4 var(--font-display,inherit);letter-spacing:.06em;text-transform:uppercase;cursor:pointer}
.bt-x:hover{background:var(--biostart-red,#D93829);border-color:var(--biostart-red,#D93829)}
.bt-bar{height:6px;background:#eee}
.bt-bar i{display:block;height:100%;background:var(--biostart-red,#D93829);transition:width .35s}
.bt-body{padding:20px 22px 6px}
.bt-body h3{font:800 25px/1.1 var(--font-display,inherit);text-transform:uppercase;letter-spacing:.01em;margin:0 0 10px}
.bt-card.spot .bt-body h3{font-size:21px}
.bt-body p{font-size:14.5px;line-height:1.55;margin:0 0 10px;color:#222}
.bt-body ul{margin:0 0 10px 18px;padding:0;font-size:14px;line-height:1.5;color:#222}
.bt-body li{margin-bottom:5px}
.bt-note{font-size:13px!important;color:#555!important;font-style:italic}
.bt-body kbd,.bt-search kbd{display:inline-block;min-width:20px;padding:0 6px;text-align:center;font:700 12px/1.5 inherit;border:1.5px solid #555;border-bottom-width:3px;border-radius:5px;background:#f6f6f6;color:#222}
.bt-cta{display:flex;flex-wrap:wrap;gap:8px;padding:2px 22px 4px}
.bt-btn{display:inline-block;padding:10px 18px;background:var(--biostart-black,#0d0d0d);color:#fff;border:2px solid var(--biostart-black,#0d0d0d);border-radius:6px;font:700 13px/1 var(--font-display,inherit);letter-spacing:.06em;text-transform:uppercase;text-decoration:none;cursor:pointer;transition:background .15s,transform .1s}
.bt-btn:hover{background:var(--biostart-red,#D93829);border-color:var(--biostart-red,#D93829)}
.bt-btn:active{transform:translateY(1px)}
.bt-btn.primary{background:var(--biostart-red,#D93829);border-color:var(--biostart-black,#0d0d0d);box-shadow:0 3px 0 var(--biostart-black,#0d0d0d)}
.bt-btn.ghost{background:#fff;color:var(--biostart-black,#0d0d0d)}
.bt-btn.ghost:hover{background:var(--biostart-bg,#ffe9ec);color:var(--biostart-black,#0d0d0d);border-color:var(--biostart-black,#0d0d0d)}
.bt-foot{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:14px 22px 18px;flex-wrap:wrap}
.bt-dots{display:flex;gap:5px;flex-wrap:wrap}
.bt-dots i{width:9px;height:9px;border-radius:50%;border:2px solid var(--biostart-black,#0d0d0d);background:#fff}
.bt-dots i.on{background:var(--biostart-red,#D93829)}
.bt-dots i.now{background:var(--biostart-black,#0d0d0d);transform:scale(1.25)}
.bt-nav{display:flex;gap:8px;align-items:center}
.bt-count{font:700 12px/1 var(--font-display,inherit);letter-spacing:.06em;color:#555;margin-right:4px}
.bt-lvl{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}
.bt-lvl button{padding:5px 12px;border:2px solid var(--biostart-black,#0d0d0d);border-radius:16px;background:#fff;font:700 12px/1.3 var(--font-display,inherit);letter-spacing:.04em;cursor:pointer}
.bt-lvl button.on{background:var(--biostart-red,#D93829);color:#fff}
.bt-plan-list{list-style:none;margin:0 0 10px!important;padding:0;counter-reset:p}
.bt-plan-list li{counter-increment:p;position:relative;margin:0 0 8px;padding:8px 10px 8px 42px;border:2px solid var(--biostart-black,#0d0d0d);border-radius:10px;background:#fff}
.bt-plan-list li::before{content:counter(p);position:absolute;left:9px;top:50%;margin-top:-12px;width:24px;height:24px;border-radius:50%;background:var(--biostart-red,#D93829);color:#fff;font:800 13px/24px var(--font-display,inherit);text-align:center}
.bt-kit{list-style:none;margin-left:0!important}
.bt-kit li{padding:7px 0;border-bottom:1px solid #e5e5e5;display:flex;flex-direction:column}
.bt-kit a{font-weight:800;color:var(--biostart-red,#D93829);text-decoration:none}
.bt-kit a:hover{text-decoration:underline}
.bt-kit span{font-size:12.5px;color:#555}
/* illustrations */
.bt-vis{margin:0;padding:18px 22px;background:var(--biostart-bg,#ffe9ec);border-bottom:3px solid var(--biostart-black,#0d0d0d);display:flex;flex-direction:column;align-items:center;gap:10px;font-size:12px}
.bt-card.spot .bt-vis{padding:12px 16px}
.bt-vis-welcome{flex-direction:row;justify-content:center;gap:18px}
.bt-big{font-size:54px;line-height:1;width:92px;height:92px;display:grid;place-items:center;background:#EEB0A5;border:3px solid var(--biostart-black,#0d0d0d);border-radius:50%;box-shadow:0 4px 0 var(--biostart-black,#0d0d0d)}
.bt-wl b{display:block;font:900 30px/1 var(--font-display,inherit);letter-spacing:.1em;text-transform:uppercase}
.bt-wl span{font:700 12px/1.4 var(--font-display,inherit);letter-spacing:.1em;text-transform:uppercase;color:var(--biostart-red,#D93829)}
.bt-form{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%;max-width:420px}
.bt-form div{background:#fff;border:2px solid var(--biostart-black,#0d0d0d);border-radius:6px;padding:5px 8px}
.bt-form i{display:block;font-style:normal;font-weight:700;font-size:9.5px;text-transform:uppercase;color:#666}
.bt-form b{font-size:12.5px}
.bt-form u{grid-column:1/-1;text-decoration:none;text-align:center;background:var(--biostart-red,#D93829);color:#fff;font-weight:800;padding:7px;border-radius:6px;font-size:11.5px;text-transform:uppercase;letter-spacing:.04em}
.bt-pill{display:inline-flex;align-items:center;gap:9px;padding:8px 16px;background:#1a1a1a;color:#fff;border:1px solid #333;border-radius:20px;font-weight:700;font-size:12px}
.bt-pill em{font-style:normal;background:var(--biostart-red,#D93829);border-radius:10px;padding:1px 7px;font-size:11px;font-weight:900}
.bt-avatar{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#eee;border:2px solid var(--biostart-red,#D93829);font-size:13px}
.bt-cap{margin:0!important;font-size:12px!important;color:#555!important;font-weight:600}
.bt-track{display:flex;align-items:center;width:100%;max-width:440px;padding-top:34px}
.bt-track i{position:relative;flex:0 0 18px;height:18px;border-radius:50%;background:#fff;border:3px solid var(--biostart-black,#0d0d0d)}
.bt-track i.d{background:var(--biostart-red,#D93829)}
.bt-track i.n{background:var(--biostart-red,#D93829);box-shadow:0 0 0 5px #EEB0A5}
.bt-track i.n .bt-avatar{position:absolute;left:50%;bottom:26px;transform:translateX(-50%);box-shadow:0 2px 0 var(--biostart-black,#0d0d0d)}
.bt-track i.n em{position:absolute;left:50%;bottom:55px;transform:translateX(-50%);background:var(--biostart-black,#0d0d0d);color:#fff;font-style:normal;font-weight:800;font-size:10px;padding:1px 8px;border-radius:9px}
.bt-track s{flex:1;height:4px;background:repeating-linear-gradient(90deg,#0d0d0d 0 5px,transparent 5px 9px)}
.bt-track s.on{background:var(--biostart-red,#D93829)}
.bt-tl-names{display:flex;justify-content:space-between;width:100%;max-width:470px;font-size:9.5px;font-weight:700;color:#444}
.bt-search{display:flex;align-items:center;gap:8px;width:100%;max-width:360px;background:#000;color:#fff;border:2px solid var(--biostart-red,#D93829);border-radius:10px;padding:7px 12px;font-weight:700}
.bt-search span{flex:1}
.bt-sr{width:100%;max-width:360px;background:#fff;border:2px solid var(--biostart-black,#0d0d0d);border-radius:8px;overflow:hidden}
.bt-did{padding:6px 10px;background:var(--biostart-bg,#ffe9ec);border-bottom:2px solid var(--biostart-black,#0d0d0d);font-weight:700}
.bt-hit{display:flex;gap:10px;padding:6px 10px;border-bottom:1px solid #eee}
.bt-hit i{min-width:92px;font-style:normal;font-size:9.5px;font-weight:800;text-transform:uppercase;color:#555;padding-top:2px}
.bt-hit b{font-size:11.5px}
.bt-mcard{width:100%;max-width:360px;background:#fff;border:2px solid var(--biostart-black,#0d0d0d);border-radius:8px;box-shadow:0 4px 0 var(--biostart-black,#0d0d0d);padding:10px 12px;display:flex;flex-direction:column;gap:3px}
.bt-mtag{align-self:flex-start;background:var(--biostart-black,#0d0d0d);color:#fff;font-size:9px;font-weight:800;padding:2px 7px;border-radius:3px}
.bt-mcard b{font-size:13.5px;text-transform:uppercase}
.bt-mcard p{margin:0!important;font-size:11.5px!important;color:#444!important}
.bt-mcard div{display:flex;justify-content:space-between;align-items:center;margin-top:4px}
.bt-mcard u{text-decoration:none;background:var(--biostart-black,#0d0d0d);color:#fff;font-size:10px;font-weight:800;text-transform:uppercase;padding:4px 10px;border-radius:4px}
.bt-mcard i{font-style:normal;color:var(--biostart-red,#D93829);font-size:20px}
.bt-two{flex-direction:row;gap:10px}
.bt-choice{flex:1;max-width:190px;display:flex;flex-direction:column;gap:2px;background:#fff;border:3px solid var(--biostart-black,#0d0d0d);border-radius:10px;padding:10px;font-size:20px;box-shadow:0 4px 0 var(--biostart-black,#0d0d0d)}
.bt-choice b{font-size:12px;font-weight:900}
.bt-choice span{font-size:10.5px;color:#555}
.bt-choice.sel{border-color:var(--biostart-red,#D93829);box-shadow:0 4px 0 var(--biostart-red,#D93829)}
.bt-four{flex-direction:row;flex-wrap:wrap;justify-content:center;gap:8px}
.bt-four span{background:#fff;border:2px solid var(--biostart-black,#0d0d0d);border-radius:20px;padding:6px 14px;font-weight:800;font-size:12px}
.bt-heart{font-size:34px;color:var(--biostart-red,#D93829);line-height:1}
.bt-steps{display:flex;gap:6px;flex-wrap:wrap;justify-content:center}
.bt-steps span{background:#fff;border:2px solid var(--biostart-black,#0d0d0d);border-radius:16px;padding:4px 12px;font-weight:800;font-size:11.5px}
.bt-steps span.on{background:var(--biostart-red,#D93829);color:#fff}
.bt-doc{flex-direction:row;align-items:center;gap:18px;justify-content:center}
.bt-docl{width:130px;background:#fff;border:2px solid var(--biostart-black,#0d0d0d);padding:10px;display:flex;flex-direction:column;gap:5px;box-shadow:0 3px 0 var(--biostart-black,#0d0d0d)}
.bt-docl .h{height:9px;width:60%;background:var(--biostart-red,#D93829)}
.bt-docl .l{height:4px;background:#bbb}.bt-docl .s{height:5px;width:35%;background:var(--biostart-black,#0d0d0d);margin-top:3px}
.w80{width:80%}.w70{width:70%}.w60{width:60%}.w50{width:50%}
.bt-tpls{display:flex;flex-direction:column;gap:5px}
.bt-doc .bt-tpls{flex-direction:column}
.bt-vis:not(.bt-doc) .bt-tpls{flex-direction:row;flex-wrap:wrap;justify-content:center}
.bt-tpls span{background:#fff;border:2px solid var(--biostart-black,#0d0d0d);border-radius:14px;padding:3px 12px;font-weight:800;font-size:11px}
.bt-tpls span.on{background:var(--biostart-black,#0d0d0d);color:#fff}
.bt-poster{width:230px;background:#fff;border:3px solid var(--biostart-black,#0d0d0d);box-shadow:0 4px 0 var(--biostart-black,#0d0d0d)}
.bt-poster .ph{display:flex;justify-content:space-between;align-items:center;background:var(--biostart-red,#D93829);padding:8px;border-bottom:3px solid var(--biostart-black,#0d0d0d)}
.bt-poster .ph b{width:90px;height:8px;background:#fff;display:block}.bt-poster .ph i{width:20px;height:20px;border-radius:50%;background:#fff;border:2px solid var(--biostart-black,#0d0d0d);display:block}
.bt-poster .pc{display:grid;grid-template-columns:1fr 1.4fr 1fr;gap:5px;padding:6px;height:78px}
.bt-poster .pc>div{border:2px solid var(--biostart-black,#0d0d0d);background:#fafafa}
.bt-poster .mid{display:flex;align-items:flex-end;justify-content:space-around;padding:4px}
.bt-poster em{display:block;width:12px;height:26px;background:var(--biostart-red,#D93829);border:1.5px solid var(--biostart-black,#0d0d0d)}.bt-poster em.r{height:42px;background:#EEB0A5}
.bt-plan{flex-direction:row;gap:10px}
.bt-plan span{width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:var(--biostart-red,#D93829);color:#fff;font:900 16px/1 var(--font-display,inherit);border:3px solid var(--biostart-black,#0d0d0d)}
@media (max-width:640px){.bt-body h3{font-size:21px}.bt-vis-welcome{flex-direction:column}.bt-doc{flex-direction:column}.bt-foot{flex-direction:column-reverse;align-items:stretch}.bt-nav{justify-content:space-between}.bt-launch span{display:none}.bt-launch{padding:8px}}
@media (prefers-reduced-motion:reduce){.bt-card,.bt-block{animation:none}.bt-hole,.bt-bar i{transition:none}}
@media print{.bt-launch,.bt-root{display:none!important}}
`;

    /* ---------- the tour itself ---------- */
    let root = null, launcher = null, idx = 0, planLevel = null, lastFocus = null;

    function ensureLauncher() {
        if (launcher) return;
        launcher = document.createElement('button');
        launcher.type = 'button';
        launcher.className = 'bt-launch';
        launcher.addEventListener('click', () => {
            const st = getState();
            start(st.status === 'paused' && typeof st.step === 'number' ? st.step : 0);
        });
        document.body.appendChild(launcher);
        refreshLauncher();
    }

    function refreshLauncher() {
        if (!launcher) return;
        const st = getState();
        const resume = st.status === 'paused' && typeof st.step === 'number' && st.step > 0 && st.step < STEPS.length;
        launcher.innerHTML = '<i>?</i><span>' + (resume ? `Continue tutorial (${st.step + 1}/${STEPS.length})` : 'Tutorial') + '</span>';
        launcher.setAttribute('aria-label', resume ? 'Continue the BIOSTART tutorial' : 'Open the BIOSTART tutorial');
        launcher.classList.toggle('hide', !!root);
    }

    function visible(el) {
        if (!el) return false;
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none';
    }

    function start(from) {
        close(true);
        lastFocus = document.activeElement;
        idx = Math.max(0, Math.min(from || 0, STEPS.length - 1));
        planLevel = null;
        root = document.createElement('div');
        root.className = 'bt-root';
        root.setAttribute('role', 'dialog');
        root.setAttribute('aria-modal', 'true');
        root.setAttribute('aria-label', 'BIOSTART tutorial');
        root.innerHTML = '<div class="bt-block"></div><div class="bt-hole" hidden></div><div class="bt-card center"></div>';
        document.body.appendChild(root);
        root.addEventListener('click', onClick);
        document.addEventListener('keydown', onKey, true);
        window.addEventListener('resize', reposition);
        window.addEventListener('scroll', reposition, { passive: true });
        refreshLauncher();
        show(idx);
    }

    function close(silent) {
        if (!root) return;
        document.removeEventListener('keydown', onKey, true);
        window.removeEventListener('resize', reposition);
        window.removeEventListener('scroll', reposition);
        root.remove();
        root = null;
        refreshLauncher();
        if (!silent && lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) { /* ignore */ } }
    }

    function skip() {
        putState({ status: 'skipped', step: idx });
        close();
        toast('Tutorial skipped. Reopen it any time with the ? button.');
    }
    function finish() {
        putState({ status: 'done', step: STEPS.length - 1 });
        close();
        toast('Tutorial complete. Reopen it any time with the ? button.');
    }
    function toast(msg) {
        if (typeof showSaveToast === 'function') {
            showSaveToast(msg, false);
            const icon = document.querySelector('#save-toast .toast-heart');
            if (icon) icon.textContent = '✔';
        }
    }

    function targetFor(step) {
        if (!step.target) return null;
        const el = document.querySelector(step.target);
        return visible(el) ? el : null;
    }

    function show(i) {
        idx = i;
        putState({ status: 'paused', step: i });
        const step = STEPS[i];
        const card = root.querySelector('.bt-card');
        const hole = root.querySelector('.bt-hole');
        const target = targetFor(step);
        const total = STEPS.length;
        const pct = Math.round((i + 1) / total * 100);

        // body (the plan step is personalised)
        let bodyHTML = step.body();
        if (step.plan) {
            const lv = planLevel || (PLANS[profile().level] ? profile().level : 'High School');
            planLevel = lv;
            const names = { 'Middle School': 'Middle school', 'High School': 'High school', 'College Undergrad': 'College' };
            bodyHTML = `<p>Pick where you are. These five steps get you moving fast:</p>
                <div class="bt-lvl">${Object.keys(PLANS).map(k => `<button type="button" data-lvl="${k}" class="${k === lv ? 'on' : ''}">${names[k]}</button>`).join('')}</div>
                <ol class="bt-plan-list">${PLANS[lv].map(t => `<li>${esc(t)}</li>`).join('')}</ol>`;
        }

        const onPage = c => here() === c.href.split('#')[0].toLowerCase() && (!c.href.includes('#') || location.hash === '#' + c.href.split('#')[1]);
        const ctas = (step.cta || []).filter(c => !onPage(c)).map(c =>
            `<a class="bt-btn${c.primary ? ' primary' : ' ghost'}" href="${c.href}" data-go="${c.href}">${esc(c.label)}</a>`).join('');
        const dots = STEPS.map((s, n) => `<i class="${n === i ? 'now' : n < i ? 'on' : ''}"></i>`).join('');
        const last = i === total - 1;

        card.innerHTML = `
            <div class="bt-top"><span class="bt-kicker"><b>${i === 0 ? '' : i + ' / ' + (total - 1)}</b>${esc(step.kicker)}</span><button type="button" class="bt-x" data-act="skip">Skip tutorial</button></div>
            <div class="bt-bar" aria-hidden="true"><i style="width:${pct}%"></i></div>
            ${step.vis}
            <div class="bt-body"><h3>${esc(step.title)}</h3>${bodyHTML}</div>
            ${ctas ? `<div class="bt-cta">${ctas}</div>` : ''}
            <div class="bt-foot"><div class="bt-dots" aria-hidden="true">${dots}</div>
                <div class="bt-nav">${i > 0 ? '<button type="button" class="bt-btn ghost" data-act="back">Back</button>' : ''}
                <button type="button" class="bt-btn primary" data-act="${last ? 'finish' : 'next'}">${i === 0 ? 'Start the tour' : last ? 'Finish' : 'Next'}</button></div></div>`;

        const spot = !!target;
        root.classList.toggle('spot', spot);
        card.classList.toggle('spot', spot);
        card.classList.toggle('center', !spot);
        card.classList.remove('sheet');
        card.style.top = card.style.left = '';
        card.scrollTop = 0;

        if (spot) {
            target.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'auto' });
            hole.hidden = false;
        } else {
            hole.hidden = true;
        }
        reposition();
        const btn = card.querySelector('[data-act="next"], [data-act="finish"]');
        if (btn) btn.focus({ preventScroll: true });
        refreshLauncher();
    }

    function reposition() {
        if (!root) return;
        const step = STEPS[idx], card = root.querySelector('.bt-card'), hole = root.querySelector('.bt-hole');
        const target = targetFor(step);
        if (!target) { hole.hidden = true; card.classList.add('center'); card.classList.remove('spot', 'sheet'); root.classList.remove('spot'); return; }
        const r = target.getBoundingClientRect(), pad = 6;
        hole.hidden = false;
        hole.style.top = (r.top - pad) + 'px';
        hole.style.left = (r.left - pad) + 'px';
        hole.style.width = (r.width + pad * 2) + 'px';
        hole.style.height = (r.height + pad * 2) + 'px';
        if (window.innerWidth < 640) { card.classList.remove('center'); card.classList.add('sheet'); card.style.top = card.style.left = ''; return; }
        card.classList.remove('center', 'sheet');
        const cw = card.offsetWidth, ch = card.offsetHeight, vw = window.innerWidth, vh = window.innerHeight, gap = 18;
        let top = r.bottom + pad + gap;
        if (top + ch > vh - 12) top = r.top - pad - gap - ch;
        if (top < 12) top = Math.max(12, (vh - ch) / 2);
        let left = r.left + r.width / 2 - cw / 2;
        left = Math.max(12, Math.min(left, vw - cw - 12));
        card.style.top = top + 'px';
        card.style.left = left + 'px';
    }

    function onClick(e) {
        const lv = e.target.closest('[data-lvl]');
        if (lv) { planLevel = lv.dataset.lvl; show(idx); return; }
        const go = e.target.closest('[data-go]');
        if (go) {                                    // leaving for another page: remember where to pick up
            putState({ status: 'paused', step: Math.min(idx + 1, STEPS.length - 1) });
            return;                                  // let the link navigate
        }
        const act = e.target.closest('[data-act]');
        if (!act) return;
        const a = act.dataset.act;
        if (a === 'next') show(Math.min(idx + 1, STEPS.length - 1));
        else if (a === 'back') show(Math.max(idx - 1, 0));
        else if (a === 'skip') skip();
        else if (a === 'finish') finish();
    }

    function onKey(e) {
        if (!root) return;
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); skip(); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); if (idx < STEPS.length - 1) show(idx + 1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); if (idx > 0) show(idx - 1); }
        else if (e.key === 'Tab') {                  // keep keyboard focus inside the tutorial
            const f = [...root.querySelectorAll('button, a[href]')].filter(el => el.offsetParent !== null);
            if (!f.length) return;
            const first = f[0], last = f[f.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    }

    /* ---------- boot ---------- */
    function whenReady(fn) {
        const splash = document.getElementById('splash-overlay');
        if (!splash || getComputedStyle(splash).display === 'none') { setTimeout(fn, 700); return; }
        const t = setInterval(() => {                // wait until the splash screen is dismissed
            if (getComputedStyle(splash).display === 'none') { clearInterval(t); setTimeout(fn, 500); }
        }, 300);
    }

    function init() {
        const style = document.createElement('style');
        style.id = 'biostart-tour-css';
        style.textContent = CSS;
        document.head.appendChild(style);
        ensureLauncher();
        window.startBiostartTour = start;
        const st = getState();
        if (!st.status) whenReady(() => { if (!getState().status && !root) start(0); });   // first visit: offer it
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
