var locationDict = function(str) {
    switch (str) {
        case 'None':
            return '';
            break;
            
        case 'New York':
            return 'USA-NYM-NEY';
            break;

        case 'Los Angeles':
            return 'USA-LAX-LSN';
            break;

        case 'Chicago':
            return 'USA-CHI-CHI';
            break;

        case 'Miami':
            return 'USA-MIA-MIF';
            break;

        case 'Dallas':
            return 'USA-DAL-DLL';
            break;

        case 'Fort Worth':
            return 'USA-DAL-DLL';
            break;

        case 'Washington':
            return 'USA-WAS-WSD';
            break;

        case 'Philadelphia':
            return 'USA-PHI-PHI';
            break;

        case 'Boston':
            return 'USA-BOS-BOT';
            break;

        case 'Detroit':
            return 'USA-DET-DET';
            break;

        case 'San Francisco':
            return 'USA-SFO-SNF';
            break;

        case 'Seattle':
            return 'USA-SEA-SET';
            break;

        case 'Akron':
            return 'USA-CLE-AKR';
            break;

        case 'Canton':
            return 'USA-CAT-CAT';
            break;

        case 'Albany':
            return 'USA-ALN-ALB';
            break;

        case 'Albuquerque':
            return 'USA-ABU-ALB';
            break;

        case 'Allentown':
            return 'USA-ALL-ALL';
            break;

        case 'Bethlehem':
            return 'USA-ALL-BET';
            break;
            
        case 'Easton':
            return 'USA-ALL-EAS';
            break;

        case 'Atlanta':
            return 'USA-ATL-ATA';
            break;

        case 'Augusta':
            return 'USA-AUG-AUG';
            break;

        case 'Austin':
            return 'USA-AUT-AUS';
            break;

        case 'Bakersfield':
            return 'USA-BAK-BAK';
            break;

        case 'Baltimore':
            return 'USA-WAS-BAT';
            break;

        case 'Baton Rouge':
            return 'USA-BAO-BAO';
            break;

        case 'Birmingham':
            return 'USA-AL-BIR';
            break;

        case 'Boise':
            return 'USA-BOI-BOI';
            break;

        case 'Sarasota':
            return 'USA-SAR-SAR';
            break;

        case 'Bradenton':
            return 'USA-SAR-BRF';
            break;

        case 'Buffalo':
            return 'USA-BUF-BUF';
            break;

        case 'Camden':
            return 'USA-PHI-CAM';
            break;

        case 'Charleston':
            return 'USA-CRS-CHA';
            break;

        case 'Charlotte':
            return 'USA-CTN-CHA';
            break;

        case 'Chattanooga':
            return 'USA-CHT-CHT';
            break;

        case 'Cincinnati':
            return 'USA-CIN-CIN';
            break;

        case 'Covington':
            return 'USA-CIN-COV';
            break;

        case 'Cleveland':
            return 'USA-CLE-CLE';
            break;

        case 'Colorado Springs':
            return 'USA-COO-COL';
            break;

        case 'Columbia':
            return 'CAE';
            break;

        case 'Columbus':
            return 'USA-CUO-COL';
            break;

        case 'Dayton':
            return 'USA-DAY-DAY';
            break;

        case 'Denver':
            return 'USA-DEN-DEN';
            break;

        case 'Des Moines':
            return 'USA-DES-DEM';
            break;

        case 'El Paso':
            return 'USA-ELP-ELP';
            break;

        case 'Fresno':
            return 'USA-FRS-FRE';
            break;

        case 'Grand Rapids':
            return 'USA-GRR-GRR';
            break;

        case 'Greensboro':
            return 'USA-GSO-GRE';
            break;

        case 'Greer':
            return 'USA-GES-GRR';
            break;

        case 'Harlingten':
            return 'USA-BRX-HAR';
            break;

        case 'Harrisburg':
            return 'USA-HAP-HAR';
            break;

        case 'Honolulu':
            return 'USA-HON-HON';
            break;

        case 'Houston':
            return 'USA-HOU-HOU';
            break;

        case 'Indianapolis':
            return 'USA-IDO-IND';
            break;

        case 'Jackson':
            return 'USA-JAT-JAO';
            break;

        case 'Jacksonville':
            return 'USA-JAF-JAF';
            break;

        case 'Kansas City':
            return 'USA-KAN-KAN';
            break;

        case 'Knoxville':
            return 'USA-KNO-KNO';
            break;

        case 'Lancaster':
            return 'USA-LAA-LAC';
            break;

        case 'Lansing':
            return 'USA-LNS-LAN';
            break;

        case 'Las Vegas':
            return 'USA-LAS-LAS';
            break;

        case 'Little Rock':
            return 'USA-LIT-LIR';
            break;

        case 'Louisville':
            return 'USA-LOU-LOU';
            break;

        case 'Madison':
            return 'USA-MAW-MAD';
            break;

        case 'Memphis':
            return 'USA-MEM-MEM';
            break;

        case 'Milwaukee':
            return 'USA-MIW-MIL';
            break;

        case 'Minneapolis':
            return 'USA-MIN-MIA';
            break;

        case 'Modesto':
            return 'USA-MOD-MOD';
            break;

        case 'Nashville':
            return 'USA-NAS-NAS';
            break;

        case 'New Haven':
            return 'USA-NYM-NWV';
            break;

        case 'New Orleans':
            return 'USA-NEO-NEW';
            break;

        case 'Newburgh':
            return 'USA-NYM-NEU';
            break;

        case 'Norfolk':
            return 'USA-VIR-NOF';
            break;

        case 'Oklahoma City':
            return 'USA-OKL-OKL';
            break;

        case 'Omaha':
            return 'USA-OMA-OMA';
            break;

        case 'Orlando':
            return 'USA-ORL-ORL';
            break;

        case 'Phoenix':
            return 'USA-PHX-PHO';
            break;

        case 'Pittsburgh':
            return 'USA-PIT-PIT';
            break;

        case 'Fayetteville':
            return 'USA-FAA-FAY';
            break;

        case 'Portland':
            return 'USA-POR-POR';
            break;

        case 'Providence':
            return 'USA-BOS-PRO';
            break;

        case 'Raleigh':
            return 'USA-RAL-RAL';
            break;

        case 'Durham':
            return 'USA-RAL-DUR';
            break;

        case 'Richmond':
            return 'USA-RCV-RIC';
            break;

        case 'Rochester':
            return 'USA-RON-ROC';
            break;

        case 'Sacramento':
            return 'USA-SAC-SAC';
            break;

        case 'Salt Lake City':
            return 'USA-SLT-SAL';
            break;

        case 'San Antonio':
            return 'USA-SAT-SAT';
            break;

        case 'San Diego':
            return 'USA-SAN-SAD';
            break;

        case 'San Jose':
            return 'USA-SFO-SJO';
            break;

        case 'Santa Rosa':
            return 'USA-SFO-STR';
            break;

        case 'Wilkes-Barre':
            return 'USA-SCR-WIL';
            break;

        case 'Scranton':
            return 'USA-SCR-SCR';
            break;

        case 'Springfield':
            return 'SPI';
            break;

        case 'St Louis':
            return 'USA-STL-SAL';
            break;

        case 'Syracuse':
            return 'USA-SYR-SYR';
            break;

        case 'Tampa':
            return 'USA-TPA-TAM';
            break;

        case 'Toledo':
            return 'USA-TOL-TOL';
            break;

        case 'Tucson':
            return 'USA-TUC-TUC';
            break;

        case 'Tulsa':
            return 'USA-TLS-TUL';
            break;

        case 'Wichita':
            return 'USA-WIK-WIC';
            break;

        case 'Wilmington':
            return 'USA-WIM-WIM';
            break;

        case 'Hartford':
            return 'USA-HRT-HAR';
            break;

        case 'Abilene':
            return 'ABI';
            break;

        case 'Albany':
            return 'USA-ALG-ALB';
            break;

        case 'Alexandria':
            return 'USA-AEL-ALE';
            break;

        case 'Altoona':
            return 'USA-ALO-ALT';
            break;

        case 'Amarillo':
            return 'USA-AMA-AMA';
            break;

        case 'Ames':
            return 'USA-AMS-AME';
            break;

        case 'Anchorage':
            return 'USA-ANC-ANC';
            break;

        case 'Anniston':
            return 'USA-ANN-ANN';
            break;

        case 'Appleton':
            return 'USA-APP-APP';
            break;

        case 'Asheville':
            return 'USA-ASE-ASH';
            break;

        case 'Athens':
            return 'USA-ATG-ATH';
            break;

        case 'Auburn':
            return 'USA-COG-AUA';
            break;

        case 'Bangor':
            return 'USA-BAN-BAN';
            break;

        case 'Beaumont':
            return 'USA-BEU-BEA';
            break;

        case 'Port Arthur':
            return 'BPT';
            break;

        case 'Beckley':
            return 'USA-BEC-BEC';
            break;

        case 'Bellingham':
            return 'USA-BLI-BEL';
            break;

        case 'Benton Harbor':
            return 'USA-NIL-BEN';
            break;

        case 'Billings':
            return 'USA-SRO-BIL';
            break;

        case 'Binghamton':
            return 'USA-BIN-BIN';
            break;

        case 'Bismarck':
            return 'USA-BIM-BIS';
            break;

        case 'Bloomington':
            return 'USA-BLL-BLO';
            break;

        case 'Normal':
            return 'BMI';
            break;

        case 'Bristol':
            return 'USA-JOO-BRI';
            break;

        case 'Johnson':
            return 'USA-JOO-JOH';
            break;
            
        case 'Kingsport':
            return 'TRI';
            break;

        case 'Brownsville':
            return 'USA-BRX-BRO';
            break;

        case 'Burlington':
            return 'USA-BUV-BUR';
            break;

        case 'Cape Girardeau':
            return 'USA-CAG-CAP';
            break;

        case 'Casper':
            return 'USA-CAS-CAS';
            break;

        case 'Cedar Rapids':
            return 'USA-CER-CED';
            break;

        case 'Champaign':
            return 'USA-CHP-CHA';
            break;

        case 'Urbana':
            return 'USA-CHP-URB';
            break;

        case 'Charleston':
            return 'CRW';
            break;

        case 'Charlottesville':
            return 'USA-CHS-CHA';
            break;

        case 'Cheyenne':
            return 'USA-CHE-CHE';
            break;

        case 'Rockford':
            return 'USA-ROF-ROF';
            break;

        case 'Chico':
            return 'USA-CHC-CHI';
            break;

        case 'Claremont':
            return 'USA-CAE-CLA"';
            break;

        case 'Clarksburg':
            return 'USA-FAW-CLA';
            break;

        case 'Clarksville':
            return 'USA-CAV-CLA';
            break;

        case 'Clovis':
            return 'USA-CLO-CLO';
            break;

        case 'College Station':
            return 'USA-COL-COL';
            break;

        case 'Columbia':
            return 'COU';
            break;

        case 'Columbus':
            return 'USA-COG-COL';
            break;

        case 'Columbus':
            return 'GTR';
            break;

        case 'W Point':
            return 'USA-CSM-WES';
            break;
            
        case 'Starkville':
            return 'USA-STK-STA';
            break;

        case 'Corpus Christi':
            return 'USA-COP-COR';
            break;

        case 'Corvallis':
            return 'USA-ABO-COR';
            break;

        case 'Cumberland Heights':
            return 'USA-CUM-CUM';
            break;

        case 'Danville':
            return 'USA-DNV-DAN';
            break;

        case 'Decatur':
            return 'USA-DEC-DEC';
            break;

        case 'Dothan':
            return 'DHN';
            break;

        case 'Dover-Cheswold':
            return 'USA-DOV-DOD';
            break;

        case 'Dubuque':
            return 'USA-DUU-DUB';
            break;

        case 'Duluth':
            return 'USA-DUL-DUL';
            break;

        case 'Eau Claire':
            return 'USA-EAU-EAC';
            break;

        case 'Elmira':
            return 'USA-ELM-ELM';
            break;

        case 'Corning':
            return 'USA-ELM-ELM';
            break;

        case 'Enid':
            return 'USA-ENI-ENI';
            break;

        case 'Erie':
            return 'USA-ERI-ERI';
            break;

        case 'Eugene':
            return 'USA-EUG-EUG';
            break;

        case 'Evansville':
            return 'USA-EVV-EVA';
            break;

        case 'Fargo':
            return 'USA-FAG-FAR';
            break;

        case 'Fayetteville':
            return 'USA-FAN-FAY';
            break;

        case 'Findlay':
            return 'USA-FIN-FIN';
            break;

        case 'Flagstaff':
            return 'USA-FLA-FLA';
            break;

        case 'Florence':
            return 'USA-FLS-FLO';
            break;

        case 'Fond du Lac':
            return 'USA-FON-FON';
            break;

        case 'Fort Collins':
            return 'USA-FOC-FOR';
            break;

        case 'Loveland':
            return 'USA-FOC-LOV';
            break;

        case 'Fort Hood':
            return 'USA-KIE-KIL';
            break;

        case 'Killeen':
            return 'USA-KIE-KIL';
            break;

        case 'Fort Myers':
            return 'USA-CAC-FOF';
            break;

        case 'Fort Polk':
            return 'USA-FPO-FOR';
            break;

        case 'Fort Smith':
            return 'USA-FOS-FOR';
            break;

        case 'Fort Wayne':
            return 'USA-FOW-FOR';
            break;

        case 'Gadsden':
            return 'USA-GAD-GAD';
            break;

        case 'Gainesville':
            return 'USA-GAI-GAI';
            break;

        case 'Gettysburg':
            return 'USA-YOR-GET';
            break;

        case 'Goldsboro':
            return 'USA-GOL-GOL';
            break;

        case 'Goshen':
            return 'USA-SOB-GOS';
            break;

        case 'Grand Forks':
            return 'USA-GAF-GRN';
            break;

        case 'Grand Junction':
            return 'USA-GRJ-GRA';
            break;

        case 'Great Falls':
            return 'GTF';
            break;

        case 'Green Bay':
            return 'USA-GEB-GRB';
            break;

        case 'Greenville':
            return 'USA-GNN-GRE';
            break;

        case 'Gulfport':
            return 'USA-GUL-GUL';
            break;

        case 'Hattiesburg':
            return 'USA-HAT-HAT';
            break;

        case 'Laurel':
            return 'PIB';
            break;

        case 'Hickory':
            return 'USA-HIC-HIC';
            break;

        case 'Houma':
            return 'USA-HUM-HOU';
            break;

        case 'Huntington':
            return 'USA-HNT-HUN';
            break;

        case 'Huntsville':
            return 'USA-HUS-HUN';
            break;

        case 'Hyannis':
            return 'USA-BAS-HYM';
            break;

        case 'Idaho Falls':
            return 'USA-IDA-IDA';
            break;

        case 'Iowa City':
            return 'USA-IOW-IOW';
            break;

        case 'Ithaca':
            return 'USA-ITH-ITH';
            break;

        case 'Jackson':
            return 'USA-JMI-JAC';
            break;

        case 'Jackson':
            return 'USA-JCS-JAC';
            break;

        case 'Jacksonville':
            return 'USA-JCN-JAC';
            break;

        case 'Jamestown':
            return 'USA-NYM-JAE';
            break;

        case 'Janesville':
            return 'USA-JAN-JAN';
            break;

        case 'Jefferson':
            return 'USA-CLE-JEF';
            break;

        case 'Johnstown':
            return 'USA-JOT-JOH';
            break;

        case 'Jonesboro':
            return 'USA-JON-JON';
            break;

        case 'Joplin':
            return 'USA-JOP-JOP';
            break;

        case 'Kalamazoo':
            return 'USA-KAA-KAL';
            break;

        case 'La Crosse':
            return 'USA-LAC-LAO';
            break;

        case 'Lafayette':
            return 'USA-LFL-LAF';
            break;

        case 'Lafayette':
            return 'USA-LFI-LAF';
            break;

        case 'Lake Charles':
            return 'USA-LKH-LKC';
            break;

        case 'Lakeland':
            return 'USA-LAL-LAL';
            break;

        case 'Laredo':
            return 'USA-LRE-LAR';
            break;

        case 'Las Cruces':
            return 'USA-LSC-LAS';
            break;

        case 'Lawrence':
            return 'USA-LAK-LAW';
            break;

        case 'Lawton':
            return 'USA-LAT-LAW';
            break;

        case 'Lexington':
            return 'USA-LOU-LEX';
            break;

        case 'Lincoln':
            return 'USA-LIN-LIN';
            break;

        case 'London':
            return 'USA-COB-LON';
            break;

        case 'Longview':
            return 'USA-LOT-LON';
            break;

        case 'Lubbock':
            return 'USA-LUB-LUB';
            break;

        case 'Lumberton':
            return 'USA-LUM-LUT';
            break;

        case 'Lynchburg':
            return 'USA-LYN-LYB';
            break;

        case 'Macon':
            return 'USA-MCN-MAC';
            break;

        case 'Mansfield':
            return 'USA-MNS-MAN';
            break;

        case 'McAllen':
            return 'USA-MCL-MCA';
            break;

        case 'Medford':
            return 'USA-MED-MED';
            break;

        case 'Melbourne':
            return 'USA-PLM-MEF';
            break;

        case 'Merced':
            return 'USA-MEC-MER';
            break;

        case 'Midland':
            return 'USA-MDT-MID';
            break;

        case 'Missoula':
            return 'MSO';
            break;

        case 'Mobile':
            return 'USA-MOI-MOB';
            break;

        case 'Moline':
            return 'USA-DAV-MOL';
            break;

        case 'Monroe':
            return 'USA-MNL-MON';
            break;

        case 'Montgomery':
            return 'USA-MOG-MON';
            break;

        case 'Mosinee':
            return 'USA-WUS-MOS';
            break;

        case 'Muncie':
            return 'USA-MUN-MUN';
            break;

        case 'Muscle Shoals':
            return 'USA-FOA-MUS';
            break;

        case 'Myrtle Beach':
            return 'USA-MYR-MYR';
            break;

        case 'Naples':
            return 'USA-NAP-NAP';
            break;

        case 'Newport News':
            return 'USA-VIR-NER';
            break;

        case 'Ocala':
            return 'USA-OCA-OCA';
            break;

        case 'Owensboro':
            return 'USA-OWE-OWE';
            break;

        case 'Paducah':
            return 'USA-PAD-PAD';
            break;

        case 'Panama City':
            return 'USA-PAN-PAF';
            break;

        case 'Parkersburg':
            return 'USA-PAK-PAR';
            break;

        case 'Pasco':
            return 'USA-KEW-PAS';
            break;

        case 'Pensacola':
            return 'USA-PES-PEN';
            break;

        case 'Peoria':
            return 'USA-PEO-PEO';
            break;

        case 'Peru':
            return 'USA-OTA-PER';
            break;

        case 'Pittsfield':
            return 'USA-PIF-PIT';
            break;

        case 'Pocatello':
            return 'USA-POC-POC';
            break;

        case 'Portland':
            return 'USA-POL-POR';
            break;

        case 'Provo':
            return 'USA-PRO-PRO';
            break;

        case 'Pueblo':
            return 'USA-PUE-PUE';
            break;

        case 'Rapid City':
            return 'USA-RAP-RAP';
            break;

        case 'Redmond':
            return 'USA-BND-RED';
            break;

        case 'Reno':
            return 'USA-REN-REN';
            break;

        case 'Roanoke':
            return 'USA-ROV-ROA';
            break;

        case 'Rochester':
            return 'USA-RCM-ROC';
            break;

        case 'Rocky Mount':
            return 'USA-ROY-ROC';
            break;

        case 'Rome':
            return 'USA-UTI-ROM';
            break;

        case 'Saginaw':
            return 'USA-SAG-SAG';
            break;

        case 'Salinas':
            return 'USA-SLS-SAL';
            break;

        case 'Salisbury':
            return 'USA-SAS-SAL';
            break;

        case 'San Angelo':
            return 'USA-SAT-SAG';
            break;

        case 'San Luis Obispo':
            return 'USA-SAL-SAL';
            break;

        case 'Santa Barbara':
            return 'USA-SAB-SAB';
            break;

        case 'Santa Fe':
            return 'USA-STF-SAF';
            break;

        case 'Savannah':
            return 'USA-SAV-SAV';
            break;

        case 'Selinsgrove':
            return 'USA-SUN-SEL';
            break;

        case 'Sheboygan':
            return 'USA-SHB-SHW';
            break;

        case 'Shreveport':
            return 'USA-SHR-SHR';
            break;

        case 'Sioux City':
            return 'USA-SIC-SIO';
            break;

        case 'Sioux Falls':
            return 'USA-SIF-SIO';
            break;

        case 'South Bend':
            return 'USA-SOB-SOU';
            break;

        case 'Spokane':
            return 'USA-SPO-SPO';
            break;

        case 'Springfield':
            return 'USA-SRI-SPR';
            break;

        case 'St Joseph':
            return 'USA-STJ-SAI';
            break;

        case 'State College':
            return 'USA-SEC-STA';
            break;

        case 'Stockton':
            return 'USA-STC-STO';
            break;

        case 'Stuart':
            return 'USA-PTT-STU';
            break;

        case 'Sumter':
            return 'USA-SUT-SUM';
            break;

        case 'Tallahassee':
            return 'USA-TLH-TAL';
            break;

        case 'Terre Haute':
            return 'USA-TER-TER';
            break;

        case 'Texarkana':
            return 'TXK';
            break;

        case 'Topeka':
            return 'USA-TOP-TOP';
            break;

        case 'Tuscaloosa':
            return 'USA-TUS-TUS';
            break;

        case 'Tyler':
            return 'USA-TYL-TYL';
            break;

        case 'Union City':
            return 'USA-UNI-UNI';
            break;

        case 'Valparaiso':
            return 'USA-CRT-VAL';
            break;

        case 'Victoria':
            return 'USA-VIT-VIC';
            break;

        case 'Visalia':
            return 'USA-VIS-VIS';
            break;

        case 'Waco':
            return 'USA-WAC-WAC';
            break;

        case 'Wapakoneta':
            return 'USA-LIM-WAP';
            break;

        case 'Waterloo':
            return 'USA-WTL-WAT';
            break;

        case 'West Palm Beach':
            return 'USA-MIA-WES';
            break;

        case 'Wheeling':
            return 'USA-WHE-WHE';
            break;

        case 'Wichita Falls':
            return 'USA-WIF-WIC';
            break;

        case 'Williamsport':
            return 'USA-WIA-WIL';
            break;

        case 'Yakima':
            return 'USA-YAK-YAK';
            break;

        case 'Youngstown':
            return 'USA-YOU-YOU';
            break;

        case 'Warren':
            return 'USA-YOU-WAR';
            break;

        case 'Yuma':
            return 'USA-YUM-YUM';
            break;
    }
};	
		
var categoryDict = function(str) {
	switch (str) {
		case 'None':
			return '';
			break;
			
		case 'All Categories':
			return '';
			break;
			
		case 'wanted':
			return 'SWNT';
			break;
			
		case 'travel':
			return 'STVL';
			break;
			
		case 'toys & hobbies':
			return 'STOY';
			break;
			
		case 'tools':
			return 'STOO';
			break;
			
		case 'tickets':
			return 'STIX';
			break;
			
		case 'sports & fitness':
			return 'SSNF';
			break;
			
		case 'other goods':
			return 'SOTH';
			break;
			
		case 'restaurants':
			return 'SRES';
			break;
		 
		case 'musical instruments':
			return 'SMUS';
			break;
		
		case 'industrial':
			return 'SIND';
			break;
			
		case 'movies & music':
			return 'SMNM';
			break;
		
		case 'literature':
			return 'SLIT';
			break;
		
		case 'jewelry':
			return 'SJWL';
			break;
		
		case 'home & garden':
			return 'SHNG';
			break;
		
		case 'health & beauty':
			return 'SHNB';
			break;
		
		case 'gift cards':
			return 'SGFT';
			break;	
		
		case 'food & beverage':
			return 'SFNB';
			break;
		
		case 'furniture':
			return 'SFUR';
			break;
		
		case 'electronics & photo':
			return 'SELE';
			break;
			
		case 'computers':
			return 'SCOM';
			break;
		
		case 'educational':
			return 'SEDU';
			break;
		
		case 'collections':
			return 'SEDU';
			break;
		
		case 'businesses':
			return 'SBIZ';
			break;
		
		case 'bicycles':
			return 'SBIK';
			break;
		
		case 'barters':
			return 'SBAR';
			break;
		
		case 'babies & kids':
			return 'SKID';
			break;
		
		case 'arts & crafts':
			return 'SANC';
			break;
		
		case 'appliances':
			return 'SAPL';
			break;
		
		case 'apparel':
			return 'SAPP';
			break;
		
		case 'antiques':
			return 'SANT';
			break;
			
		//Vehicles group
		
		case 'parts':
			return 'VPAR';
			break;
		
		case 'other':
			return 'VOTH';
			break;
		
		case 'cars & trucks':
			return 'VAUT';
			break;
		
		// animals group
		
		case 'other':
			return 'AOTH';
			break;
		
		case 'pets':
			return 'APET';
			break;
		
		case 'supplies':
			return 'AOTH';
			break;
			
		//community group
		
		case 'rideshares':
			return 'CRID';
			break;
		
		case 'lost & found':
			return 'CLNF';
			break;
		
		case 'bulletin':
			return 'COMM';
			break;
		
		case '311':
			return 'C311';
			break;
			
		case 'Classes & Workshops':
			return "CCNW";
			break;
			
		//dispatch group
		
		case 'taxi':
			return 'DTAX';
			break;
		
		case 'tow':
			return 'DTOW';
			break;
		
		case 'delivery':
			return 'DDEL';
			break;
			
		//real estate group
		
		case 'want housing':
			return 'RWNT';
			break;
		
		case 'vacation properties':
			return 'RVAC';
			break;
		
		case 'room shares':
			return 'RSHR';
			break;
		
		case 'parking & storage':
			return 'RPNS';
			break;
		
		case 'housing swaps':
			return 'RSWP';
			break;
		
		case 'lots & land':
			return 'RLOT';
			break;
		
		case 'housing for sale':
			return 'RHFS';
			break;
		
		case 'housing sublets':
			return 'RSUB';
			break;
		
		case 'housing for rent':
			return 'RHFR';
			break;
		
		case 'commercial real estate':
			return 'RCRE';
			break;
			
		//services group
		
		case 'professional':
			return 'SVCP';
			break;
		
		case 'other':
			return 'SVCO';
			break;
		
		case 'household':
			return 'SVCH';
			break;
		
		case 'health':
			return 'SVCM';
			break;
		
		case 'financial':
			return 'SVCM';
			break;
		
		case 'education':
			return 'SVCE';
			break;
		
		case 'creative':
			return 'SVCC';
			break;
		
		//personals group
		
		case 'women seeking women':
			return 'PWSW';
			break;
					
		case 'other':
			return 'POTH';
			break;
		
		case 'women seeking men':
			return 'PWSM';
			break;
		
		case 'men seeking men':
			return 'PMSM';
			break;
		
		case 'men seeking women':
			return 'PMSW';
			break;
		
		//mature group
		case 'women for women':
			return 'MWFW';
			break;
		
		case 'women for men':
			return 'MWFM';
			break;
		
		case 'other':
			return 'MOTH';
			break;
		
		case 'men for women':
			return 'MMFW';
			break;
		
		case 'men for men':
			return 'MMFM';
			break;
		
		case 'gambling':
			return 'MGAM';
			break;
		
		case 'drugs':
			return 'MDRU';
			break;
		
		case 'arms':
			return 'MARM';
			break;
		
		case 'alcohol':
			return 'MALC';
			break;
		
		case 'adult industry':
			return 'MADU';
			break;
		
		// jobs group
		
		case 'writing & publishing':
			return 'JWNP';
			break;
		
		case 'transportation':
			return 'JTRA';
			break;
		
		case 'volunteer':
			return 'JVOL';
			break;
		
		case 'telecommunications':
			return 'JTEL';
			break;
		
		case 'skilled trade & general labor':
			return 'JSKL';
			break;
		
		case 'security':
			return 'JSEC';
			break;
		
		case 'science':
			return 'JSCI';
			break;
		
		case 'retail & wholesale':
			return 'JRNW';
			break;
		
		case 'resumes':
			return 'JRES';
			break;
		
		case 'recreation':
			return 'JREC';
			break;
		
		case 'real estate':
			return 'JREA';
			break;
		
		case 'quality assurance':
			return 'JQUA';
			break;
		
		case 'purchasing':
			return 'JPUR';
			break;
		
		case 'product, project & program management':
			return 'JPRO';
			break;
		
		case 'pharmaceutical':
			return 'JPHA';
			break;
		
		case 'other':
			return 'JOTH';
			break;
		
		case 'operations & logistics':
			return 'JOPS';
			break;
		
		case 'non-profit':
			return 'JNON';
			break;
		
		case 'marketing, advertising & public relations':
			return 'JMAR';
			break;
		
		case 'manufacturing & mechanical':
			return 'JMFT';
			break;
		
		case 'management & dictatorship':
			return 'JMAN';
			break;
		
		case 'legal':
			return 'JLEG';
			break;
		
		case 'law enforcement':
			return 'JLAW';
			break;
		
		case 'insurance':
			return 'JINS';
			break;
		
		case 'installation, maintenance & repair':
			return 'JMNT';
			break;
		
		case 'human resources':
			return 'JHUM';
			break;
		
		case 'hospitality & travel':
			return 'JHOS';
			break;
		
		case 'healthcare':
			return 'JHEA';
			break;
		
		case 'government':
			return 'JGOV';
			break;
		
		case 'food & beverage':
			return 'JFNB';
			break;
			
		case 'gigs':
			return 'JGIG';
			break;
		
		case 'finance':
			return 'JFIN';
			break;
		
		case 'entertainment & media':
			return 'JENT';
			break;
		
		case 'events':
			return 'JEVE';
			break;
		
		case 'engineering':
			return 'JENG';
			break;
		
		case 'energy':
			return 'JENE';
			break;
		
		case 'education':
			return 'JEDU';
			break;
		
		case 'customer service':
			return 'JCUS';
			break;
		
		case 'design':
			return 'JDES';
			break;
		
		case 'construction & facilities':
			return 'JCST';
			break;
		
		case 'consulting':
			return 'JCON';
			break;
		
		case 'business development':
			return 'JBIZ';
			break;
		
		case 'computer & web':
			return 'JWEB';
			break;
		
		case 'beauty':
			return 'JBEA';
			break;
		
		case 'automobile':
			return 'JAUT';
			break;
		
		case 'art':
			return 'JART';
			break;
		
		case 'architecture':
			return 'JARC';
			break;
		
		case 'animals & agriculture':
			return 'JANA';
			break;
		
		case 'analyst':
			return 'JANL';
			break;
		
		case 'aerospace & defense':
			return 'JAER';
			break;
		
		case 'administrative':
			return 'JADM';
			break;
		
		case 'accounting':
			return 'JACC';
			break;
		
		case 'pharmaceutical':
			return 'JPHA';
			break;
		
		case 'international':
			return 'JINT';
			break;
		
		case 'Sales':
			return 'JSAL'; // wtf?
			break;
		
		case '911':
			return 'C911';
			break;
		}
};

//var cityList = ["Abbotsford", "Aberdeen", "Abidjan", "Abilene", "Abu Dhabi", "Abuja", "Acapulco", "Accra", "Addis Ababa", "Adelaide", "Agadir", "Aguadilla", "Aguascalientes", "Ahmedabad", "Akron/Canton", "Albany", "Albany", "Albuquerque", "Alexandria", "Algiers", "Alicante", "Allentown/Bethlehem/Easton", "Almaty", "Altoona", "Amarillo", "Ames", "Amman", "Amritsar", "Amsterdam", "Anchorage", "Anegada", "Anguilla", "Ankara", "Anniston", "Antalya", "Antananarivo", "Antigua", "Appleton", "Aruba", "Asheville", "Ashgabat", "Asmara", "Asturias", "Asuncion", "Athens", "Athens", "Atlanta", "Auburn", "Auckland", "Augusta", "Austin", "Baghdad", "Bahrain", "Bakersfield", "Baku", "Balikpapan", "Baltimore", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangor", "Bangui", "Banjul", "Barcelona", "Bari", "Barranquilla", "Basel/Mulhouse", "Baton Rouge", "Beaumont/Port Arthur", "Beckley", "Beijing", "Beirut", "Belfast", "Belgrade", "Bellingham", "Belo Horizonte", "Bengaluru", "Benton Harbor", "Bergen", "Berlin", "Bern", "Bilbao", "Billings", "Billund", "Binghamton", "Birmingham", "Birmingham", "Bishkek", "Bismarck", "Bloomington", "Bloomington/Normal", "Bogota", "Boise", "Bologna", "Bonaire", "Bordeaux", "Bossaso", "Boston", "Bournemouth", "Bratislava", "Brazzaville", "Bremen", "Bridgetown", "Brisbane", "Bristol", "Bristol/Johnson/Kingsport", "Brownsville", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Buffalo", "Bujumbura", "Burlington", "Busan", "Cairns", "Cairo", "Calgary", "Cali", "Camden", "Cancun", "Cape Girardeau", "Cape Town", "Caracas", "Cardiff", "Cartagena", "Casablanca", "Casper", "Catania", "Cayenne", "Cebu", "Cedar Rapids", "Champaign/Urbana", "Charleston", "Charleston", "Charlotte", "Charlottesville", "Charlottetown", "Chattanooga", "Chengdu", "Chennai", "Cheyenne", "Chiang Mai", "Chicago", "Chicago/Rockford", "Chico", "Chisinau", "Christchurch", "Cincinnati/Covington", "Claremont", "Clarksburg", "Clarksville", "Cleveland", "Clovis", "Cluj Napoca", "College Station", "Cologne", "Colombo", "Colorado Springs", "Columbia", "Columbia", "Columbus", "Columbus", "Columbus/W Point/Starkville", "Comox", "Conakry", "Copenhagen", "Cordoba", "Cork", "Corpus Christi", "Corvallis", "Cotonou", "Cozumel", "Culiacan", "Cumberland Heights", "Curacao", "Curitiba", "Cuzco", "Dakar", "Dalaman", "Dalian", "Dallas/Fort Worth", "Damascus", "Dammam", "Danville", "Dar Es Salaam", "Davao", "Dayton", "Decatur", "Decatur", "Delhi", "Denpasar Bali", "Denver", "Des Moines", "Detroit", "Dhaka", "Dili", "Doha", "Doncaster", "Dortmund", "Dothan", "Douala", "Dover-Cheswold", "Dresden", "Dubai", "Dublin", "Dubuque", "Duesseldorf", "Duluth", "Dunedin", "Durban", "Dushanbe", "Dzaoudzi", "Eau Claire", "Edinburgh", "Edmonton", "El Calafate", "El Paso", "Elmira/Corning", "Enid", "Entebbe", "Erie", "Eugene", "Evansville", "Exeter", "Fargo", "Faro", "Fayetteville", "Fayetteville", "Findlay", "Flagstaff", "Florence", "Florence", "Fond du Lac", "Fort Collins/Loveland", "Fort De France", "Fort Hood/Killeen", "Fort McMurray", "Fort Myers", "Fort Polk", "Fort Smith", "Fort Wayne", "Fortaleza", "Frankfurt am Main", "Fredericton", "Freeport", "Freetown", "Fresno", "Fuerteventura", "Fukuoka", "Gaborone", "Gadsden", "Gainesville", "Galway", "Gaza", "Geneva", "Genoa", "George", "Georgetown", "Gettysburg", "Glasgow", "Goa", "Goldsboro", "Goshen", "Granada", "Grand Cayman Island", "Grand Forks", "Grand Junction", "Grand Rapids", "Grande Prairie", "Great Falls", "Green Bay", "Greensboro", "Greenville", "Greer", "Grenoble", "Guadalajara", "Guangzhou", "Guayaquil", "Guilin", "Gulfport", "Halifax", "Hamburg", "Hamilton", "Hamilton", "Hangzhou", "Hannover", "Hanoi", "Harare", "Harlingten", "Harrisburg", "Hartford", "Hattiesburg/Laurel", "Havana", "Helsinki", "Heraklion", "Hermosillo", "Hickory", "Ho Chi Minh City", "Hong Kong", "Honolulu", "Houma", "Houston", "Huatulco", "Humberside", "Huntington", "Huntsville", "Hurghada", "Hyannis", "Hyderabad", "Ibiza", "Idaho Falls", "Imam Khomeini", "Indianapolis", "Inverness", "Iowa City", "Islamabad", "Isle Of Man", "Istanbul", "Ithaca", "Ixtapa/Zihuatanejo", "Jackson", "Jackson", "Jackson", "Jacksonville", "Jacksonville", "Jaipur", "Jakarta", "Jamestown", "Janesville", "Jeddah", "Jefferson", "Jerez de la Frontera", "Jersey", "Johannesburg", "Johnstown", "Jonesboro", "Joplin", "Jost Van Dyke", "Kabul", "Kalamazoo", "Kamloops", "Kansas City", "Kaohsiung", "Karachi", "Kathmandu", "Katowice", "Kelowna", "Khartoum", "Kiev", "Kigali", "Kilimanjaro", "Kingston", "Kingston", "Kinshasa", "Kitchener/Waterloo", "Knoxville", "Ko Samui", "Kochi", "Kolkata", "Kota Kinabalu", "Kozhikode", "Krabi", "Krakow", "Kuala Lumpur", "Kunming", "La Crosse", "La Paz", "La Paz", "La Romana", "Lafayette", "Lafayette", "Lagos", "Lahore", "Lake Charles", "Lakeland", "Lancaster", "Lansing", "Lanzarote", "Laredo", "Larnaca", "Las Cruces", "Las Palmas", "Las Vegas", "Lawrence", "Lawton", "Leeds", "Leipzig/Halle", "Leon/Guanajuato", "Lexington", "Lhasa", "Libreville", "Lilongwe", "Lima", "Lincoln", "Lisbon", "Little Rock", "Liverpool", "Ljubljana", "Lome", "London", "London", "London", "Longview", "Longyearbyen", "Los Angeles", "Louisville", "Luanda", "Lubbock", "Lumberton", "Lusaka", "Luxor", "Lynchburg", "Lyon", "Macon", "Madeira", "Madison", "Madrid", "Mahe Island", "Malabo", "Malaga", "Male", "Manchester", "Manila", "Mansfield", "Manzanillo", "Manzini", "Maputo", "Marrakesh", "Marseille", "Marsh Harbour", "Maseru", "Mauritius", "Mayaguez", "Mazatlan", "McAllen", "Medellin", "Medford", "Melbourne", "Melbourne", "Memphis", "Mendoza", "Merced", "Merida", "Mersa Matruh", "Mexico City", "Miami", "Midland", "Milan", "Milwaukee", "Minneapolis", "Minsk", "Missoula", "Mobile", "Modesto", "Moline", "Mombasa", "Moncton", "Monroe", "Monrovia", "Monte Carlo", "Montego Bay", "Monterrey", "Montevideo", "Montgomery", "Montpellier", "Montreal", "Morelia", "Moroni", "Moscow", "Mosinee", "Mount Pleasant", "Muenster", "Mumbai", "Muncie", "Munich", "Murcia", "Muscat", "Muscle Shoals", "Myrtle Beach", "Nagoya", "Nairobi", "Nanking/Nanjing", "Nantes", "Naples", "Naples", "Nashville", "Nassau", "Ndjamena", "New Haven", "New Orleans", "New York", "Newburgh", "Newcastle", "Newport News", "Niamey", "Nice", "Norfolk", "Norwich", "Nottingham", "Nouakchott", "Nuremberg", "Nuuk", "Oaxaca", "Ocala", "Odessa", "Okinawa", "Oklahoma City", "Omaha", "Orlando", "Osaka", "Oslo", "Ottawa", "Ouagadougou", "Owensboro", "Paducah", "Palermo", "Palma de Mallorca", "Palmerston North", "Panama City", "Paramaribo", "Paris", "Parkersburg", "Paro", "Pasco", "Penang", "Pensacola", "Peoria", "Pereira", "Perth", "Peru", "Philadelphia", "Phnom Penh", "Phoenix", "Phuket", "Pisa", "Pittsburgh", "Pittsfield", "Pocatello", "Podgorica", "Pointe-a-Pitre", "Ponce", "Port Au Prince", "Port Elizabeth", "Port Of Spain/Trinidad", "Portland", "Portland", "Porto", "Porto Alegre", "Poznan", "Prague", "Prince George", "Pristina", "Providence", "Providenciales", "Provo", "Puebla", "Pueblo", "Puerto Iguazu", "Puerto Plata", "Puerto Vallarta", "Pune", "Punta Arenas", "Punta Cana", "Pyongyang", "Qingdao", "Quebec City", "Queretaro", "Quito", "Rabat", "Raleigh/Durham", "Rapid City", "Recife", "Redmond", "Regina", "Reno", "Rhodes", "Richmond", "Riga", "Rio de Janeiro", "Riyadh", "Roanoke", "Rochester", "Rochester", "Rocky Mount", "Rome", "Rome", "Rotorua", "Rotterdam", "Sacramento", "Saginaw", "Saint Denis", "Saint John", "Saint Johns", "Saint Petersburg", "Sal", "Salinas", "Salisbury", "Salt Lake City", "Salvador", "San Angelo", "San Antonio", "San Diego", "San Francisco", "San Jose", "San Jose", "San Jose Cabo", "San Juan", "San Luis Obispo", "Sanaa", "Santa Barbara", "Santa Cruz", "Santa Fe", "Santa Rosa", "Santiago", "Santiago", "Santiago de Compostela", "Santo Domingo", "Sanya", "Sarajevo", "Sarasota/Bradenton", "Saskatoon", "Savannah", "Seattle", "Selinsgrove", "Seoul", "Sevilla", "Shanghai", "Shannon", "Sharm el Sheikh", "Sheboygan", "Shenyang", "Shenzhen", "Shreveport", "Sioux City", "Sioux Falls", "Skopje", "Sofia", "South Bend", "Southampton", "Spokane", "Springfield", "Springfield", "St Croix Island", "St John Island", "St Joseph", "St Louis", "St Maarten", "St Thomas Island", "State College", "Stavanger", "Stockholm", "Stockton", "Strasbourg", "Stuart", "Stuttgart", "Sumter", "Surabaya", "Sydney", "Sydney", "Syracuse", "Taipei", "Tallahassee", "Tallinn", "Tampa", "Tangier", "Tashkent", "Tauranga", "Tbilisi", "Teesside", "Tehran", "Tel Aviv Yafo", "Tenerife", "Terre Haute", "Texarkana", "Thessaloniki", "Thiruvananthapuram", "Thunder Bay", "Tijuana", "Timisoara", "Tirana", "Tobago", "Tokyo", "Toledo", "Topeka", "Toronto", "Tortola", "Toulouse", "Trieste", "Tripoli", "Tucson", "Tulsa", "Tunis", "Turin", "Tuscaloosa", "Tyler", "Ulaanbaatar", "Union City", "Ushuaia", "Vadodara", "Vaduz", "Valencia", "Valparaiso", "Vancouver", "Venice", "Veracruz", "Verona", "Victoria", "Victoria", "Vienna", "Vientiane", "Vigo", "Vilnius", "Virgin Gorda", "Visalia", "Waco", "Wapakoneta", "Warsaw", "Washington", "Waterloo", "Wellington", "West Palm Beach", "Wheeling", "Whitehorse", "Wichita", "Wichita Falls", "Wilkes-Barre/Scranton", "Williamsport", "Wilmington", "Windhoek", "Windsor", "Winnipeg", "Wroclaw", "Wuhan", "Xiamen", "Xian", "Yakima", "Yangon", "Yellowknife", "Yerevan", "Youngstown/Warren", "Yuma", "Zagreb", "Zanzibar", "Zurich"];

var catForSale = ['cars & trucks', 'wanted','travel','toys & hobbies','tools','tickets',
	'sports & fitness','other goods','restaurants','musical instruments','industrial',
	'movies & music','literature','jewelry','home & garden','health & beauty',
	'gift cards','food & beverage','furniture','electronics & photo','computers',
	'educational','collections','businesses','bicycles','barters','babies & kids',
	'arts & crafts','appliances','apparel','antiques'];
		
var catPersonals = ['women seeking women','other',
	'women seeking men','men seeking men','men seeking women'];

var catHousing = ['want housing','vacation properties','room shares',
	'parking & storage','housing swaps','lots & land','housing for sale',
	'housing sublets', 'housing for rent','commercial real estate'];

	
var catCommunity = ['rideshares', 'lost & found'];    
    
var catServices = ['professional','other','household','health','financial','education',
	'creative'];
	
var catJobs = ['writing & publishing','transportation','volunteer','telecommunications',
	'skilled trade & general labor','security','science','retail & wholesale','resumes',
	'recreation','real estate','quality assurance','purchasing','product, project & program management',
	'pharmaceutical','other','operations & logistics','non-profit','marketing, advertising & public relations',
	'manufacturing & mechanical','management & dictatorship','legal','law enforcement','insurance',
	'installation, maintenance & repair','human resources','hospitality & travel','healthcare',
	'government','food & beverage','gigs','finance','entertainment & media','events',
	'engineering','energy','education','customer service','design','construction & facilities',
	'consulting','business development','computer & web','beauty','automobile','art','architecture',
	'animals & agriculture', 'analyst','aerospace & defense','administrative','accounting',
	'pharmaceutical','international','Sales'];
		
var emailLink = function(str) {
	var link = new String();
	link = '<a href=\"mailto:' + str + '\">';
	//document.write(name + '@' + domain + '</a>');
	return link;
};

// Dynamically create the location map each time we load? 
var locationMap = {};

var stripPrefix = function(list){
		if (list.length == 0) {
			//console.log(list);
			return null;
		}
		for (var i = 0; i < list.length; i++) {
			list[i] = list[i].full;
		}
		return list;
	};
		
var mf2 = function(results, temp, control, target) {
    console.log("Collecting results...");	
	console.log(results);
    var count = results.numResults;
    if (count == 0) {
        //alert("No search results found!");
        }
    else {
        var results2 = results.postings;
        var items = new Array();
        for (var i = 0; i < 10; i++) {
            items[i]={
                    title: results2[i].heading,
                    price: results2[i].price,
                    images: stripPrefix(results2[i].images),
                    bodyText: results2[i].body,
                    //email: results2[i].accountName,
                    url: results2[i].external_url,
					date: results2[i].timestamp
                };
        }
        //console.log("Search Item: " + query.text);
        //console.log("Search City: " + query.location);
        //console.log("Search Category: " + query.category);
		
        //SEARCH API HERE
        temp.addItems(items);	
        //temp.items = items;
        temp.work();
		/*
        console.log("Second Search finished");
		console.log("Control value: ");
        console.log(control);
		console.log(target);
		console.log(spinner);
		*/
        if (control == 10) {
            spinner.stop(target);
			//console.log("Search: Stopping spinner");
            }
			
    }
};