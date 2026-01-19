import { supabaseClient } from "../db/supabase.client.js";
const rawAdvisors = [
  {
    "Name": "1 Finance Private Limited",
    "Registration No": "INA000017523",
    "E-mail": "compliance@1finance.co.in",
    "Telephone": "00007738942481",
    "Fax No": "00007738942481",
    "Address": "Marwadi Financial Plaza Nana Mava  Main Road, Off 150 Feet Ring Road, RAJKOT, GUJARAT, 360001",
    "Contact Person": "Mohan Kumar",
    "Correspondence Address": "Unit No B- 1101/1102, 11th Floor B Wing, Lotus Corporate Park Off Western Express Highway Goregaon (E), MUMBAI, MAHARASHTRA, 400063",
    "Validity": "Dec 22, 2022 - Perpetual"
  },
  {
    "Name": "21G INVESTMENT ADVISERS PRIVATE LIMITED",
    "Registration No": "INA000017231",
    "E-mail": "INFO@21GINVESTMENTS.COM",
    "Telephone": "917717577141",
    "Fax No": "917717577141",
    "Address": "2455 GR, DN ARJAN NAGAR, R S ROAD, LUDHIANA, PUNJAB, 141003",
    "Contact Person": "GAURAV VERMA",
    "Correspondence Address": "2455 GR, DN ARJAN NAGAR, R S ROAD, LUDHIANA, PUNJAB, 141003",
    "Validity": "Oct 07, 2022 - Perpetual"
  },
  {
    "Name": "29K INVESTMENT ADVISERS PRIVATE LTD",
    "Registration No": "INA200000365",
    "E-mail": "adviser@29kadvisers.com",
    "Telephone": "919900422411",
    "Fax No": "919900422411",
    "Address": "No.390, 7th Main, 9th Cross, Jayanagar 2nd Block, BANGALORE, KARNATAKA, 560011",
    "Contact Person": "Prashanth Prabhu",
    "Correspondence Address": "No.390, 7th Main, 9th Cross, Jayanagar 2nd Block, BANGALORE, KARNATAKA, 560011",
    "Validity": "Nov 27, 2013 - Perpetual"
  },
  {
    "Name": "360 ONE Investment Adviser and Trustee Services Limited",
    "Registration No": "INA000000888",
    "E-mail": "Rupam.nagvekar@iiflw.com",
    "Telephone": "022 39575793",
    "Fax No": "022 39575793",
    "Address": "IIFL Centre, Kamala Mills, Senapati Bapat Marg, Lower Parel, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "MR. RUPAM NAGVEKAR",
    "Correspondence Address": "7th Floor,IIFL Centre, Kamala Mills Compound,Senapati Bapat Marg,Lower Parel (West), MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Jan 22, 2014 - Perpetual"
  },
  {
    "Name": "3Q Financial Services LLP",
    "Registration No": "INA000020794",
    "E-mail": "ketan@3qwealth.com",
    "Telephone": "00919833822825",
    "Fax No": "00919833822825",
    "Address": "1195/2Anandi Gopal Apts, F C Road, Shivajinagar, Pune, PUNE, MAHARASHTRA, 411005",
    "Contact Person": "Ketan Sarda",
    "Correspondence Address": "1195/2Anandi Gopal Apts, F C Road, Shivajinagar, Pune, PUNE, MAHARASHTRA, 411005",
    "Validity": "Aug 05, 2025 - Perpetual"
  },
  {
    "Name": "6 SIGMA WEALTH ADVISORS",
    "Registration No": "INA200002536",
    "E-mail": "6sigmawealth@gmail.com",
    "Telephone": "44330033",
    "Fax No": "44330033",
    "Address": "New No. 66, 3rd Main Road, Kasturba Nagar, Adyar, CHENNAI, TAMIL NADU, 600020",
    "Contact Person": "MR. S VENKATRAMAN MANAGING PARTNER",
    "Correspondence Address": "Suite 806, MLS Business Centre - Tower II - Floor 8, TVH Beliciaa Towers, MRC Nagar, CHENNAI, TAMIL NADU, 600028",
    "Validity": "Dec 31, 2014 - Perpetual"
  },
  {
    "Name": "90-10 Financial Planners Pvt Ltd",
    "Registration No": "INA200008291",
    "E-mail": "rajesh@90to10.com",
    "Address": "Jaiganesh, New No.1 and Old No. 321, 36th A Cross, 7th Main, 5th Block, Jayanagar,, BANGALORE, KARNATAKA, 560041",
    "Contact Person": "Rajesh Rao",
    "Correspondence Address": "Jaiganesh, New No.1 and Old No. 321, 36th A Cross, 7th Main, 5th Block, Jayanagar, BANGALORE, KARNATAKA, 560041",
    "Validity": "Aug 22, 2017 - Perpetual"
  },
  {
    "Name": "Aarti Mohan (Proprietor : Aurion Advisors)",
    "Registration No": "INA000016454",
    "E-mail": "AARTIM159@GMAIL.COM",
    "Address": "Flat No. 5 Friendship Apartment, 23rd Rd, Bandra West, MUMBAI, MAHARASHTRA, 400050",
    "Contact Person": "AARTI MOHAN",
    "Correspondence Address": "Flat No. 5 Friendship Apartment, 23rd Rd, Bandra West, MUMBAI, MAHARASHTRA, 400050",
    "Validity": "Dec 07, 2021 - Perpetual"
  },
  {
    "Name": "AAUM INVESTMENT ADVISERS PRIVATE LIMITED",
    "Registration No": "INA100005050",
    "E-mail": "mahesh.parasuraman@gmail.com",
    "Telephone": "00918046316666",
    "Fax No": "00918046316666",
    "Address": "Flat no. No. 6, Flat No. 006, Nanda Ashirwad Apartments, , No.1, Canara Bank Colony, 2nd Main, Chandra Layout, Nagarbhavi, Bengaluru North, BANGALORE, KARNATAKA, 560072",
    "Contact Person": "Mahesh Parasuraman",
    "Correspondence Address": "Flat no. No. 6, Flat No. 006, Nanda Ashirwad Apartments, , No.1, Canara Bank Colony, 2nd Main, Chandra Layout, Nagarbhavi, Bengaluru North, BANGALORE, KARNATAKA, 560072",
    "Validity": "Jun 28, 2016 - Perpetual"
  },
  {
    "Name": "Aavishkaar Investment Advisers IFSC Private Limited",
    "Registration No": "INAIFSC10001",
    "E-mail": "shyam@aavishkaar.in",
    "Telephone": "912261248915",
    "Fax No": "912261248915",
    "Address": "Unit 608, Signature, 6th Floor, Bldg No 13B, Block No 13, Zone 1, Road 1C, Gift SEZ, Gift City, GANDHINAGAR, GUJARAT, 382355",
    "Contact Person": "Shyamkant Joshi",
    "Correspondence Address": "13B, 6th Floor, Techniplex II, Off. Veer Savarkar Flyover, Goregaon West, MUMBAI, MAHARASHTRA, 400062",
    "Validity": "Aug 28, 2020 - Perpetual"
  },
  {
    "Name": "Abakkus Asset Manager Private Limited",
    "Registration No": "INA000015729",
    "E-mail": "merlin.nadar@abakkusinvest.com",
    "Telephone": "0917039820098",
    "Fax No": "0917039820098",
    "Address": "6th Floor,Param House,Shanti Nagar,Santacruz Chembur Link Road, Santacruz East, MUMBAI, MAHARASHTRA, 400055",
    "Contact Person": "Merlin Nadar",
    "Correspondence Address": "6th Floor,Param House,Shanti Nagar,Santacruz Chembur Link Road, Santacruz East, MUMBAI, MAHARASHTRA, 400055",
    "Validity": "Feb 03, 2021 - Perpetual"
  },
  {
    "Name": "Abhijit Talukdar",
    "Registration No": "INA000006703",
    "E-mail": "abhijit.talukdar@attainix.com",
    "Address": "A602, Magnolia Enclave, Nahar Amrit Shakti, Chandivali, MUMBAI, MAHARASHTRA, 400072",
    "Contact Person": "Abhijit Talukdar",
    "Correspondence Address": "E-404, Ivy building, Mahindra Splendour, LBS road, Bhandup (West), MUMBAI, MAHARASHTRA, 400078",
    "Validity": "Nov 29, 2016 - Perpetual"
  },
  {
    "Name": "Abhishake Mathur",
    "Registration No": "INA000016029",
    "E-mail": "matshivas@gmail.com",
    "Address": "301 Wing B, Hubtown Sunmist, N S Phadke Road, Andheri East, MUMBAI, MAHARASHTRA, 400069",
    "Contact Person": "Abhishake Mathur",
    "Correspondence Address": "301 Wing B, Hubtown Sunmist, N S Phadke Road, Andheri East, MUMBAI, MAHARASHTRA, 400069",
    "Validity": "Jul 28, 2021 - Perpetual"
  },
  {
    "Name": "ABHISHEK AGARWAL",
    "Registration No": "INA000004047",
    "E-mail": "abhishek@horusfinancials.com",
    "Telephone": "9970186926",
    "Fax No": "9970186926",
    "Address": "C-18, IKE-NO-MIDORI, NEAR MARATHA MANDIR, NDA ROAD, BAVDHAN, PUNE, MAHARASHTRA, 411021",
    "Contact Person": "ABHISHEK AGARWAL",
    "Correspondence Address": "4th Floor, Bundal Capital, Kothrud Depot, PUNE, MAHARASHTRA, 411038",
    "Validity": "Jan 22, 2016 - Perpetual"
  },
  {
    "Name": "Abhishek Goel proprietor Primedin Investment Adviser",
    "Registration No": "INA000018258",
    "E-mail": "abhi@finexadvisors.in",
    "Telephone": "918800572090",
    "Address": "G-502, Parsvnath Prestige, Sector 93A, Noida,, NOIDA, UTTAR PRADESH, 201309",
    "Contact Person": "Abhishek Goel",
    "Correspondence Address": "G-502, Parsvnath Prestige, Sector 93A, Noida, NOIDA, UTTAR PRADESH, 201309",
    "Validity": "Jul 24, 2023 - Perpetual"
  },
  {
    "Name": "ABHISHEK KUMAR",
    "Registration No": "INA100008045",
    "E-mail": "abhishekk@sahajmoney.com",
    "Telephone": "918861764646",
    "Address": "H-301, Umang Winter Hills, Metro Pillar 768,, Dwarka Mor, Sewak Park,, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110059",
    "Contact Person": "Abhishek Kumar",
    "Correspondence Address": "H-301, Umang Winter Hills, Metro Pillar 768, Dwarka Mor, Sewak Park, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110059",
    "Validity": "Jul 13, 2017 - Perpetual"
  },
  {
    "Name": "Abhishek Phore - Proprietor Control Wealth Advisers",
    "Registration No": "INA000019442",
    "E-mail": "abhishek.phore@controlwealth.co.in",
    "Telephone": "917042121964",
    "Address": "146-C 1st Floor, Hastsal, Uttam Nagar,, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110059",
    "Contact Person": "Abhishek Phore",
    "Correspondence Address": "146-C 1st Floor, Hastsal, Uttam Nagar, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110059",
    "Validity": "Jul 31, 2024 - Perpetual"
  },
  {
    "Name": "Abraham Cherian Proprietor 360 wealth advice",
    "Registration No": "INA000019594",
    "E-mail": "abraham.cherian.ria@gmail.com",
    "Telephone": "916282316509",
    "Address": "D705, Kumaradhara Block,, National Games Village Koramangala,, BANGALORE, KARNATAKA, 560047",
    "Contact Person": "ABRAHAM CHERIAN",
    "Correspondence Address": "D705, Kumaradhara Block, National Games Village Koramangala, BANGALORE, KARNATAKA, 560047",
    "Validity": "Oct 04, 2024 - Perpetual"
  },
  {
    "Name": "ABUBAKR SIDDIQUE. A.G.",
    "Registration No": "INA200000910",
    "E-mail": "myplanner@wealthtraits.com",
    "Telephone": "4422641424",
    "Fax No": "4422641424",
    "Address": "No.46, 2nd Cross Street, Sri Moogambigai Nagar, Thanampalayam, PUDUCHERRY, PUDUCHERRY, 605007",
    "Contact Person": "ABUBAKR SIDDIQUE. A.G.",
    "Correspondence Address": "No.6, Ponni Amman Koil 2nd Street, C. Pallavaram, CHENNAI, TAMIL NADU, 600043",
    "Validity": "Jan 27, 2014 - Perpetual"
  },
  {
    "Name": "Accelpru Investment Advisors",
    "Registration No": "INA000015774",
    "E-mail": "info@accelpru.com",
    "Telephone": "912235128492",
    "Fax No": "912235128492",
    "Address": "95, Floor- 9, Plot- 223, Maker Chamber III,, Jamnalal Bajaj Marg, Nariman Point,, MUMBAI, MAHARASHTRA, 400021",
    "Contact Person": "Umang Parekh",
    "Correspondence Address": "95, Floor- 9, Plot- 223, Maker Chamber III, Jamnalal Bajaj Marg, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Validity": "Feb 23, 2021 - Perpetual"
  },
  {
    "Name": "ACME INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000017718",
    "Address": "F 23 1 Lane F 23 Block F Krishna Nagar Gandhi Nagar Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110051",
    "Correspondence Address": "622 Tower B 6th Floor World Trade Tower Sector 16 Noida, NOIDA, UTTAR PRADESH, 201301",
    "Validity": "Mar 16, 2023 - Perpetual"
  },
  {
    "Name": "ACUITAS CAPITAL ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000003957",
    "E-mail": "dinesh@acuitascapital.in",
    "Telephone": "2261120102",
    "Fax No": "2261120102",
    "Address": "101, MAKER CHAMBERS III, PLOT NO. 223, NARIMAN POINT, MUMBAI, MAHARASHTRA, 400021",
    "Contact Person": "MR. DINESH NANIK VASWANI",
    "Correspondence Address": "101, Maker Chambers III, Plot No. 223, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Validity": "Dec 29, 2015 - Perpetual"
  },
  {
    "Name": "ADARSH AGRAWAL PROP. REGROW INVESTMENT",
    "Registration No": "INA000005515",
    "E-mail": "adi.agrawal9@gmail.com",
    "Telephone": "07313319509",
    "Fax No": "07313319509",
    "Address": "Office no 103-104 sneha nagar scheme no 31 navrang plaza sapna sangeeta, INDORE, MADHYA PRADESH, 452001",
    "Correspondence Address": "Apollo Square 232, Plot No. 7/2, Race Course Road, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Aug 31, 2016 - Perpetual"
  },
  {
    "Name": "ADARSH NIMBORKAR",
    "Registration No": "INA000019789",
    "E-mail": "ADARSHMNIMBORKAR99@GMAIL.COM",
    "Telephone": "919130997271",
    "Address": "49, PRASAD NAGAR, JAITALA ROAD, NAGPUR CITY, MAHARASHTRA, NAGPUR, MAHARASHTRA, 440022",
    "Contact Person": "ADARSH NIMBORKAR",
    "Correspondence Address": "49, PRASAD NAGAR, JAITALA ROAD, NAGPUR CITY, MAHARASHTRA, NAGPUR, MAHARASHTRA, 440022",
    "Validity": "Jan 06, 2025 - Perpetual"
  },
  {
    "Name": "Adhish patel",
    "Registration No": "INA000013183",
    "E-mail": "adhishpatel@gmail.com",
    "Address": "3 Royal Kadamb Bungalows, Nr. Silver Square Complex, Thaltej, AHMEDABAD, GUJARAT, 380059",
    "Contact Person": "Adhish Patel",
    "Correspondence Address": "3 Royal Kadamb Bungalows, Nr. Silver Square Complex, Thaltej, AHMEDABAD, GUJARAT, 380059",
    "Validity": "May 06, 2019 - Perpetual"
  },
  {
    "Name": "Aditya Govindaraj",
    "Registration No": "INA200011736",
    "E-mail": "aditya.invest@outlook.com",
    "Address": "New 2 Old 75 2nd Street Karpagam Avenue, R A Puram, CHENNAI, TAMIL NADU, 600028",
    "Contact Person": "Aditya Govindaraj",
    "Correspondence Address": "New 2 Old 75 2nd Street Karpagam Avenue, R A Puram, CHENNAI, TAMIL NADU, 600028",
    "Validity": "Sep 24, 2018 - Perpetual"
  },
  {
    "Name": "ADV PARTNERS INVESTMENT ADVISER INDIA PRIVATE LIMITED",
    "Registration No": "INA000015312",
    "E-mail": "apatil@advpartners.com",
    "Telephone": "0919987044140",
    "Fax No": "0919987044140",
    "Address": "Unit No 1509 and 1510, 15th Floor, ONE BKC, Plot No. C 66, G Block, BKC, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Ashwini Patil",
    "Correspondence Address": "Unit No 1509 and 1510, 15th Floor, ONE BKC, Plot No. C 66, G Block, BKC, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Oct 22, 2020 - Perpetual"
  },
  {
    "Name": "Affirma Capital Investment Adviser India Private Limited",
    "Registration No": "INA000013262",
    "E-mail": "udai.dhawan@gmail.com",
    "Address": "9th Floor, Avighna House, 82,, Dr.Annie Besant Road, Worli Naka, Worli,, MUMBAI, MAHARASHTRA, 400018",
    "Contact Person": "Udai Dhawan",
    "Correspondence Address": "9th Floor, Avighna House, 82, Dr.Annie Besant Road, Worli Naka, Worli, MUMBAI, MAHARASHTRA, 400018",
    "Validity": "May 08, 2019 - Perpetual"
  },
  {
    "Name": "AGNAM ADVISORS LLP",
    "Registration No": "INA200013886",
    "E-mail": "prashant@agnam.in",
    "Address": "B-2082, SOBHA TULIP, 24TH MAIN ROAD, JP NAGAR,, 6TH PHASE, BANGALORE, BANGALORE, KARNATAKA, 560078",
    "Contact Person": "PRASHANT MISHRA",
    "Correspondence Address": "Office No 02B118 WEWORK SALARPURIA SYMBIOSIS, AREKERE VILLAGE BEGUR BANNERGHATTA MAIN ROAD, BANGALORE, KARNATAKA, 560076",
    "Validity": "Aug 26, 2019 - Perpetual"
  },
  {
    "Name": "Aishwarya Agarwal",
    "Registration No": "INA000014322",
    "E-mail": "aishwaryaagrawal06@gmail.com",
    "Address": "3403/3404,34TH FLR,SHREEPATI ARCADE, NANA CHOWK, August kranti Marg, MUMBAI, MAHARASHTRA, 400036",
    "Contact Person": "Aishwarya Agarwal",
    "Correspondence Address": "3403/3404,34TH FLR,SHREEPATI ARCADE, NANA CHOWK, August kranti Marg, MUMBAI, MAHARASHTRA, 400036",
    "Validity": "Dec 17, 2019 - Perpetual"
  },
  {
    "Name": "Ajay Jajam Proprietor Chanakya Investment",
    "Registration No": "INA000021049",
    "E-mail": "chanakyainvestment75@gmail.com",
    "Telephone": "00919718774422",
    "Fax No": "00919718774422",
    "Address": "Office no' R-3/106 First Floor,, M3M, Urbana, Sector 67,, GURUGRAM, HARYANA, 122101",
    "Contact Person": "Ajay Jajam",
    "Correspondence Address": "Office no' R-3/106 First Floor, M3M, Urbana, Sector 67, GURUGRAM, HARYANA, 122101",
    "Validity": "Sep 24, 2025 - Perpetual"
  },
  {
    "Name": "Ajay Kejriwal",
    "Registration No": "INA000010803",
    "E-mail": "ajay@choiceindia.com",
    "Telephone": "919389242424",
    "Address": "Shree Shakambhari Corporate Park,, Plot no 156-158,JB Nagar,Andheri, MUMBAI, MAHARASHTRA, 400099",
    "Contact Person": "Ajay Kejriwal",
    "Correspondence Address": "Shree Shakambhari Corporate Park, Plot no 156-158,JB Nagar,Andheri, MUMBAI, MAHARASHTRA, 400099",
    "Validity": "Jun 11, 2018 - Perpetual"
  },
  {
    "Name": "Ajay Pradhan",
    "Registration No": "INA000018160",
    "E-mail": "ajaypradhan@live.in",
    "Telephone": "91009619990991",
    "Fax No": "91009619990991",
    "Address": "Millennium Towers, Bldg A4,, 1th Floor, Flat no 2, Sector 9, Sanpada East, NAVI MUMBAI, MAHARASHTRA, 400705",
    "Contact Person": "Ajay Pradhan",
    "Correspondence Address": "Millennium Towers, Bldg A4, 1th Floor, Flat no 2, Sector 9, Sanpada East, NAVI MUMBAI, MAHARASHTRA, 400705",
    "Validity": "Jul 03, 2023 - Perpetual"
  },
  {
    "Name": "Ajeet Kumar Pandey- Proprietor of Investment Climb Advisory",
    "Registration No": "INA000018726",
    "E-mail": "ajeet05052007@gmail.com",
    "Telephone": "00919742543604",
    "Fax No": "00919742543604",
    "Address": "Second Floor, No. 43, Wilson Garden Housing Society,, JP Nagar 7th Phase, BANGALORE, KARNATAKA, 560078",
    "Contact Person": "Ajeet Kumar Pandey",
    "Correspondence Address": "Second Floor, No. 43, Wilson Garden Housing Society, JP Nagar 7th Phase, BANGALORE, KARNATAKA, 560078",
    "Validity": "Dec 20, 2023 - Perpetual"
  },
  {
    "Name": "Ajendra",
    "Registration No": "INA000009931",
    "E-mail": "ajendraikar@gmail.com",
    "Address": "391-B Narayan Peth, Shop No 2, Vinay Apartment,, PUNE, MAHARASHTRA, 411030",
    "Contact Person": "Ajendra Raikar",
    "Correspondence Address": "391-B Narayan Peth, Shop No 2, Vinay Apartment, PUNE, MAHARASHTRA, 411030",
    "Validity": "Feb 26, 2018 - Perpetual"
  },
  {
    "Name": "AJIT ROONGTA",
    "Registration No": "INA000002611",
    "E-mail": "ajitroongta@yahoo.com",
    "Telephone": "2222035039",
    "Fax No": "2222035039",
    "Address": "31, GOPAL BHAVAN, 2ND FLOOR,, 199 PRINCESS STREET,, MUMBAI, MAHARASHTRA, 400002",
    "Contact Person": "AJIT ROONGTA",
    "Correspondence Address": "31, Gopal Bhavan, 2nd Floor, 199 Princess Street, MUMBAI, MAHARASHTRA, 400002",
    "Validity": "Jan 29, 2015 - Perpetual"
  },
  {
    "Name": "AJIT SINGH DUA",
    "Registration No": "INA000000631",
    "E-mail": "ajit@wallflower.co.in",
    "Telephone": "022 27707047",
    "Fax No": "022 27707047",
    "Address": "A-706, COTTAGE LAND,, SECTOR 19QA, NERUL,, NAVI MUMBAI, MAHARASHTRA, 400706",
    "Contact Person": "AJIT SINGH DUA",
    "Correspondence Address": "A-706, Cottage Land, Sector 19QA, Nerul, NAVI MUMBAI, MAHARASHTRA, 400706",
    "Validity": "Dec 26, 2013 - Perpetual"
  },
  {
    "Name": "AKANSHA JAIN PROPRIETOR DYNAMIC MONEY RESEARCH ADVISORY SERVICES",
    "Registration No": "INA000003254",
    "E-mail": "akanshajain.soe@gmail.com",
    "Telephone": "0731000000",
    "Fax No": "0731000000",
    "Address": "OFFICE NO 405 RAFAEL TOWER, 8/2 OLD PALASIA, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "AKANSHA JAIN",
    "Correspondence Address": "414, Trade House, 14/3 South Tukoganj, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Jul 20, 2015 - Perpetual"
  },
  {
    "Name": "AKHILESH JAIN PROPRIETOR EH RESEARCH",
    "Registration No": "INA000003767",
    "E-mail": "akhileshjai@gmail.com",
    "Telephone": "07314064462",
    "Fax No": "07314064462",
    "Address": "ENERGY HOUSE 51, MAHADEV TOTLA NAGAR, NEAR BANK OF BARODA, BENGALI SQUARE, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "AKHILESH JAIN",
    "Correspondence Address": "Energy House 51, Mahadev Totla Nagar, Near Bank of Baroda, Bengali Square, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Nov 09, 2015 - Perpetual"
  },
  {
    "Name": "AKHILESH V GOKARAJU",
    "Registration No": "INA000020299",
    "E-mail": "akhileshvarma@yahoo.com",
    "Telephone": "919866677897",
    "Address": "House No.7-1-644/48 Plot No. 48,, Sundarnagar, Erragadda,, HYDERABAD, TELANGANA, 500038",
    "Contact Person": "AKHILESH V GOKARAJU",
    "Correspondence Address": "House No.7-1-644/48 Plot No. 48, Sundarnagar, Erragadda, HYDERABAD, TELANGANA, 500038",
    "Validity": "Jun 04, 2025 - Perpetual"
  },
  {
    "Name": "Akshay Sunil Deora Proprietor DEORA INVESTMENT ADVISORY",
    "Registration No": "INA000018993",
    "E-mail": "akshaydeora1@gmail.com",
    "Telephone": "00009423106094",
    "Fax No": "00009423106094",
    "Address": "Sr No 46, Office No 202, Insignia, Second Floor,, Wadiya, PUNE, MAHARASHTRA, 411001",
    "Contact Person": "Akshay Deora",
    "Correspondence Address": "Sr No 46, Office No 202, Insignia, Second Floor, Wadiya, PUNE, MAHARASHTRA, 411001",
    "Validity": "Mar 22, 2024 - Perpetual"
  },
  {
    "Name": "AKSHAYA WEALTH MANAGEMENT PRIVATE LTD",
    "Registration No": "INA200001249",
    "E-mail": "sudarshan@ akshayawealthadvisers.com",
    "Telephone": "8026535701",
    "Fax No": "8026535701",
    "Address": "690, 16TH MAIN,, 4TH BLOCK, JAYANAGAR, BANGALORE, KARNATAKA, 560041",
    "Contact Person": "MR.G.V.SUDARSHAN",
    "Correspondence Address": "690, 16TH MAIN, 4TH BLOCK, JAYANAGAR, BANGALORE, KARNATAKA, 560041",
    "Validity": "Mar 14, 2014 - Perpetual"
  },
  {
    "Name": "ALFACCURATE ADVISORS PVT LTD",
    "Registration No": "INA000015701",
    "E-mail": "bhushankoli@alfaccurate.com",
    "Address": "503 B WING NAMAN MIDTOWN, SENAPATI BAPAT MARG ELPHINSTON ROAD, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "BHUSHAN KOLI",
    "Correspondence Address": "503 B WING NAMAN MIDTOWN, SENAPATI BAPAT MARG ELPHINSTON ROAD, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Jan 12, 2021 - Perpetual"
  },
  {
    "Name": "Alfama Research & Advisory",
    "Registration No": "INA000017754",
    "E-mail": "jayashree@alfama.in",
    "Telephone": "022918310351915",
    "Fax No": "022918310351915",
    "Address": "B 702, Salarpuria Silverwoods, 15 Varthur road, CV Raman Nagar, Nagavarapalya,, Bangalore, Karnataka, 560093, BANGALORE, KARNATAKA, 560093",
    "Contact Person": "Jayashree Ramachandran",
    "Correspondence Address": "B 702, Salarpuria Silverwoods, 15 Varthur road, CV Raman Nagar, Nagavarapalya, Bangalore, Karnataka, 560093, BANGALORE, KARNATAKA, 560093",
    "Validity": "Mar 23, 2023 - Perpetual"
  },
  {
    "Name": "ALGONAUTS ADVISORY SERVICES PRIVATE LIMITED",
    "Registration No": "INA000017277",
    "E-mail": "sharad.sankaran@algonauts.in",
    "Telephone": "919820551555",
    "Fax No": "919820551555",
    "Address": "B1006, UNIQUE AURUM, , POONAM GARDEN, MIRA ROAD EAST, THANE, MAHARASHTRA, 401107",
    "Contact Person": "SHARAD SANKARAN",
    "Correspondence Address": "B1006, UNIQUE AURUM, , POONAM GARDEN, MIRA ROAD EAST, THANE, MAHARASHTRA, 401107",
    "Validity": "Oct 28, 2022 - Perpetual"
  },
  {
    "Name": "Alok Saxena",
    "Registration No": "INA000021535",
    "E-mail": "aloksaxena1001@gmail.com",
    "Telephone": "00917428445444",
    "Fax No": "00917428445444",
    "Address": "84 National Park, Lajpat Nagar, IV, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110024",
    "Contact Person": "Alok Saxena",
    "Correspondence Address": "84 National Park, Lajpat Nagar, IV, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110024",
    "Validity": "Dec 11, 2025 - Perpetual"
  },
  {
    "Name": "Alpha Alternatives Fund Advisors LLP",
    "Registration No": "INA000016171",
    "E-mail": "compliance@alt-alpha.com",
    "Address": "34th Floor, Sunshine Tower, Senapati Bapat Marg, Dadar West, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "Mayank Varshney",
    "Correspondence Address": "34th Floor, Sunshine Tower, Senapati Bapat Marg, Dadar West, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Aug 30, 2021 - Perpetual"
  },
  {
    "Name": "Alpha Capital",
    "Registration No": "INA100016390",
    "E-mail": "contact@alphacapital.in",
    "Address": "1154 11TH FLOOR TOWER B2 SPAzE IT PARK, SOHNA ROAD Sector  -49, GURGAON, HARYANA, 122018",
    "Contact Person": "Akhil Bhardwaj",
    "Correspondence Address": "1154 11TH FLOOR TOWER B2 SPAzE IT PARK, SOHNA ROAD Sector  -49, GURGAON, HARYANA, 122018",
    "Validity": "Nov 18, 2021 - Perpetual"
  },
  {
    "Name": "ALPHA INVESTMENT ADVISER",
    "Registration No": "INA000007580",
    "E-mail": "adviseralpha@gmail.com",
    "Address": "Gurunanak ward Katanga Colony Near Praska kids Zone, Panagar Dist Jabalpur, JABALPUR, MADHYA PRADESH, 483220",
    "Contact Person": "YOGESH PATEL",
    "Correspondence Address": "Gurunanak ward Katanga Colony Near Praska kids Zone, Panagar Dist Jabalpur, JABALPUR, MADHYA PRADESH, 483220",
    "Validity": "Apr 28, 2017 - Perpetual"
  },
  {
    "Name": "Alphafront Finserv Private Limited",
    "Registration No": "INA000006651",
    "E-mail": "swapnil@alphafront.com",
    "Address": "10th Floor, G 1003 B G1004, Gamma Block, Sigma Soft Tech Park,, Varthur Hobli, Whitefield, BANGALORE, KARNATAKA, 560066",
    "Contact Person": "Swapnil Bhaskar",
    "Correspondence Address": "Niyo, 5th Floor, Delta Block, Sigma Technology Park, Varthur Rd, Phase 2, Whitefield, BANGALORE, KARNATAKA, 560066",
    "Validity": "Nov 26, 2020 - Perpetual"
  },
  {
    "Name": "AlphaGrep Advisors Private Limited",
    "Registration No": "INA000018470",
    "E-mail": "punit.sahi@alphagrepadvisors.com",
    "Telephone": "00917710993310",
    "Fax No": "00917710993310",
    "Address": "Parinee Crescenzo, Unit No. I406, 14th Floor, G Block, Bandra Kurla Complex, Bandra East, Mumbai, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Punit Sahi",
    "Correspondence Address": "Parinee Crescenzo, Unit No. I406, 14th Floor, G Block, Bandra Kurla Complex, Bandra East, Mumbai, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Jan 08, 2026 - Perpetual"
  },
  {
    "Name": "Alphaniti Fintech Private Limited",
    "Registration No": "INA000009481",
    "E-mail": "gautami.m@alphaniti.com",
    "Telephone": "00919773564292",
    "Fax No": "00919773564292",
    "Address": "401 402, Varsha-Airawat, Plot No.12B, S.No. 6/1/7, Baner, Pune, PUNE, MAHARASHTRA, 411045",
    "Contact Person": "GAUTAMI  MORE",
    "Correspondence Address": "401 402, Varsha-Airawat, Plot No.12B, S.No. 6/1/7, Baner, Pune, PUNE, MAHARASHTRA, 411045",
    "Correspondence E-mail": "tanya.bhogal@finaureus.com",
    "Validity": "Apr 21, 2025 - Perpetual"
  },
  {
    "Name": "Alphaware Advisory Services Private Limited",
    "Registration No": "INA000015747",
    "E-mail": "admin@rupeeting.com",
    "Telephone": "912226730892",
    "Fax No": "912226730892",
    "Address": "1 Janki Centre, Off Veera Desai Road, MUMBAI, MAHARASHTRA, 400053",
    "Contact Person": "Sagar Lele",
    "Correspondence Address": "1 Janki Centre, Off Veera Desai Road, MUMBAI, MAHARASHTRA, 400053",
    "Validity": "Feb 08, 2021 - Perpetual"
  },
  {
    "Name": "Altinvest Capital Advisors Private Limited",
    "Registration No": "INA200014706",
    "E-mail": "kunal.moktan@propsharecapital.com",
    "Telephone": "9108042283385",
    "Fax No": "9108042283385",
    "Address": "10th Floor,SKAV Seethalakshmi, 21/22, Kasturba Road, Banglore, BANGALORE, KARNATAKA, 560001",
    "Contact Person": "Kunal Moktan",
    "Correspondence Address": "10th Floor, SKAV, Seethalakshmi, Kasturba Road 21/22, BANGALORE, KARNATAKA, 560001",
    "Validity": "May 29, 2020 - Perpetual"
  },
  {
    "Name": "AM INVESTMENT ADVISORS AND ASSOCIATES",
    "Registration No": "INA100004871",
    "E-mail": "arunwealthmanagement@gmail.com",
    "Address": "Ground Floor, D-33, SECTOR-2, NOIDA, NOIDA, UTTAR PRADESH, 201301",
    "Correspondence Address": "1ST FLOOR, C-16, SECTOR-2, NOIDA, NOIDA, UTTAR PRADESH, 201301",
    "Validity": "May 31, 2016 - Perpetual"
  },
  {
    "Name": "Aman Rakesh Shah",
    "Registration No": "INA000020730",
    "E-mail": "ca.aman.shah@gmail.com",
    "Telephone": "00919867066755",
    "Fax No": "00919867066755",
    "Address": "C 1502, Ashford Royale, S Samuel Marg, Nahur West, THANE, MAHARASHTRA, 400078",
    "Contact Person": "Aman Shah",
    "Correspondence Address": "C 1502, Ashford Royale, S Samuel Marg, Nahur West, THANE, MAHARASHTRA, 400078",
    "Validity": "Jul 31, 2025 - Perpetual"
  },
  {
    "Name": "Amandeep Singh",
    "Registration No": "INA000021225",
    "E-mail": "amandeep87singh@gmail.com",
    "Telephone": "00918130085570",
    "Fax No": "00918130085570",
    "Address": "108, Tower 8, RPS SAVANA, SEC 88,Faridabad, FARIDABAD, HARYANA, 121002",
    "Contact Person": "Amandeep Singh",
    "Correspondence Address": "108, Tower 8, RPS SAVANA, SEC 88,Faridabad, FARIDABAD, HARYANA, 121002",
    "Validity": "Oct 31, 2025 - Perpetual"
  },
  {
    "Name": "AMIT A MEHRA",
    "Registration No": "INA000020767",
    "E-mail": "amitmehra.ia1@gmail.com",
    "Telephone": "00919892491772",
    "Fax No": "00919892491772",
    "Address": "C/205 Kanakia Samarpan OFF W.E.HIGHWAY, NR.Vasant Marvel Borivali (E) MUMBAI, MUMBAI, MAHARASHTRA, 400066",
    "Contact Person": "AMIT A MEHRA",
    "Correspondence Address": "C/205 Kanakia Samarpan OFF W.E.HIGHWAY, NR.Vasant Marvel Borivali (E) MUMBAI, MUMBAI, MAHARASHTRA, 400066",
    "Validity": "Aug 04, 2025 - Perpetual"
  },
  {
    "Name": "AMIT GORISHANKAR  DHANUKA",
    "Registration No": "INA000021298",
    "E-mail": "ca.dhanukaamit@gmail.com",
    "Telephone": "00919924675580",
    "Fax No": "00919924675580",
    "Address": "G 601 CASA VYOMA , BEHIND  AHMEDABAD ONE MALL VASTRAPUR, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "AMIT DHANUKA",
    "Correspondence Address": "G 601 CASA VYOMA , BEHIND  AHMEDABAD ONE MALL VASTRAPUR, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Nov 04, 2025 - Perpetual"
  },
  {
    "Name": "AMIT GURUH SACHDEVA",
    "Registration No": "INA100007745",
    "E-mail": "amitguruhsachdeva@yahoo.com",
    "Address": "567/10 Anand Nagar Jail Road, Lucknow, LUCKNOW, UTTAR PRADESH, 226005",
    "Contact Person": "AMIT SACHDEVA",
    "Correspondence Address": "567/10 Anand Nagar Jail Road, Lucknow, LUCKNOW, UTTAR PRADESH, 226005",
    "Validity": "May 29, 2017 - Perpetual"
  },
  {
    "Name": "AMIT KUKREJA",
    "Registration No": "INA100000051",
    "E-mail": "akukreja@gmail.com",
    "Telephone": "91009810353040",
    "Fax No": "91009810353040",
    "Address": "DW-260, Nirvana Country, Sector-50, GURGAON, HARYANA, 122018",
    "Contact Person": "AMIT  KUKREJA",
    "Correspondence Address": "405, Tower-C, Nirvana Courtyard, Sector-50, GURGAON, HARYANA, 122018",
    "Validity": "Aug 02, 2013 - Perpetual"
  },
  {
    "Name": "Amit Malviya Proprietor of Moneyplant Investment Advisory",
    "Registration No": "INA000007924",
    "E-mail": "amitmalviya1987@gmail.com",
    "Telephone": "919039574540",
    "Address": "326-A ,3RD FLOOR,, PU-4 COMMERCIAL, SCHEME NO 54, VIJAYNAGAR,, INDORE, MADHYA PRADESH, 452010",
    "Contact Person": "AMIT MALVIYA. Proprieter MONEYPLANT INVESTMENT ADVISORY",
    "Correspondence Address": "326-A ,3RD FLOOR, PU-4 COMMERCIAL, SCHEME NO 54, VIJAYNAGAR, INDORE, MADHYA PRADESH, 452010",
    "Validity": "Jun 28, 2017 - Perpetual"
  },
  {
    "Name": "Amit Vinayak Ghag",
    "Registration No": "INA000019646",
    "E-mail": "amitghag@gmail.com",
    "Telephone": "919819513617",
    "Address": "C802, Park Royale Housing Society, Near, Kokane Chowk, Rahatani, Pune, PUNE, MAHARASHTRA, 411017",
    "Contact Person": "Amit Ghag",
    "Correspondence Address": "C802, Park Royale Housing Society, Near, Kokane Chowk, Rahatani, Pune, PUNE, MAHARASHTRA, 411017",
    "Validity": "Oct 21, 2024 - Perpetual"
  },
  {
    "Name": "AMPLE INVESTMENT ADVISER",
    "Registration No": "INA000010779",
    "E-mail": "info@ampleia.com",
    "Telephone": "917999149031",
    "Address": "H. No.310-B, Chinar, Incube Business Centre, Near Vrindavan Dhaba, Bhopal, BHOPAL, MADHYA PRADESH, 462026",
    "Contact Person": "AKHAND TRIPATHI",
    "Correspondence Address": "H. No.310-B, Chinar, Incube Business Centre, Near Vrindavan Dhaba, Bhopal, BHOPAL, MADHYA PRADESH, 462026",
    "Correspondence E-mail": "akhandtripathy@gmail.com",
    "Validity": "Jun 06, 2018 - Perpetual"
  },
  {
    "Name": "ANAND D NANAVATI (PROPRIETOR OF ARYA ADVISORY SERVICE)",
    "Registration No": "INA000005846",
    "Validity": "Mar 07, 2017 - Perpetual"
  },
  {
    "Name": "Anand Manish",
    "Registration No": "INA000021119",
    "E-mail": "anand.manish1@gmail.com",
    "Telephone": "919775035496",
    "Address": "1 BL, Sanjeeva Town Duplex, Thakdari, Newtown, KOLKATA, WEST BENGAL, 700156",
    "Contact Person": "Anand Manish",
    "Correspondence Address": "1 BL, Sanjeeva Town Duplex, Thakdari, Newtown, KOLKATA, WEST BENGAL, 700156",
    "Validity": "Oct 08, 2025 - Perpetual"
  },
  {
    "Name": "Ananya Roy - Proprietor of Credibull Capital",
    "Registration No": "INA000018878",
    "E-mail": "ananya.roy@credibullcapital.in",
    "Telephone": "917045354602",
    "Address": "0 Diet Road, Kanjari,, Silor,, BUNDI, RAJASTHAN, 323001",
    "Contact Person": "Ananya Roy",
    "Correspondence Address": "0 Diet Road, Kanjari, Silor, BUNDI, RAJASTHAN, 323001",
    "Validity": "Feb 16, 2024 - Perpetual"
  },
  {
    "Name": "Angel One Investment Managers & Advisors Private Limited",
    "Registration No": "INA000019804",
    "E-mail": "compliance@angeloneim.in",
    "Telephone": "0002240003600",
    "Fax No": "0002240003600",
    "Address": "Office No. 601, 6th Floor, Ackruti Star, Ackruti Star Pocket 5, Central Road,Marol, MIDC Andheri, MUMBAI, MAHARASHTRA, 400093",
    "Contact Person": "Nipun Doshi",
    "Correspondence Address": "Office No. 601, 6th Floor, Ackruti Star, Ackruti Star Pocket 5, Central Road,Marol, MIDC Andheri, MUMBAI, MAHARASHTRA, 400093",
    "Validity": "Jan 07, 2025 - Perpetual"
  },
  {
    "Name": "ANGEL ONE LIMITED",
    "Registration No": "INA000008172",
    "E-mail": "compliance@angelbroking.com",
    "Telephone": "9102240003600",
    "Fax No": "9102240003600",
    "Address": "601, 6th Floor, Ackruti Star, Central Road,, MIDC, Andheri East, MUMBAI, MAHARASHTRA, 400093",
    "Contact Person": "Bineet Jha",
    "Correspondence Address": "601, 6th Floor, Ackruti Star, Central Road, MIDC, Andheri East, MUMBAI, MAHARASHTRA, 400093",
    "Validity": "Aug 01, 2017 - Perpetual"
  },
  {
    "Name": "Aniket Arun Likhite",
    "Registration No": "INA000018346",
    "E-mail": "aniket.likhite@quantigma.in",
    "Telephone": "91009870466296",
    "Fax No": "91009870466296",
    "Address": "Flat No 61, 6th Floor, Suhana CHS, Gundivali, Azad Road, Andheri East, MUMBAI, MAHARASHTRA, 400069",
    "Contact Person": "Aniket Likhite",
    "Correspondence Address": "Flat No 61, 6th Floor, Suhana CHS, Gundivali, Azad Road, Andheri East, MUMBAI, MAHARASHTRA, 400069",
    "Validity": "Aug 09, 2023 - Perpetual"
  },
  {
    "Name": "Animesh Poddar",
    "Registration No": "INA000018799",
    "E-mail": "animesh.r.poddar@gmail.com",
    "Telephone": "00919970137827",
    "Fax No": "00919970137827",
    "Address": "PLOT NO - 46, WEST PARK ROAD, DHANTOLI, NEAR DHANTOLI PARK,, PATWARDHAN GROUND, NAGPUR, MAHARASHTRA, 440012",
    "Contact Person": "ANIMESH PODDAR",
    "Correspondence Address": "PLOT NO - 46, WEST PARK ROAD, DHANTOLI, NEAR DHANTOLI PARK, PATWARDHAN GROUND, NAGPUR, MAHARASHTRA, 440012",
    "Validity": "Jan 19, 2024 - Perpetual"
  },
  {
    "Name": "Ankhonia Advisors Pvt. Ltd.",
    "Registration No": "INA200012568",
    "E-mail": "mukesh@ankhonia.com",
    "Address": "No. 3 Banaswadi Road, Cooke Town, BANGALORE, KARNATAKA, 560005",
    "Contact Person": "Mukesh Sinha",
    "Correspondence Address": "No. 3 Banaswadi Road, Cooke Town, BANGALORE, KARNATAKA, 560005",
    "Validity": "Feb 28, 2019 - Perpetual"
  },
  {
    "Name": "Ankit Shah - Proprietor of White Equity",
    "Registration No": "INA000007757",
    "E-mail": "shahankit86@gmail.com",
    "Address": "B/203, UMANG CHS, MATHURADAS ROAD EXT, KANDIVALI WEST, MUMBAI, MAHARASHTRA, 400067",
    "Contact Person": "Ankit Shah",
    "Correspondence Address": "B/203, UMANG CHS, MATHURADAS ROAD EXT, KANDIVALI WEST, MUMBAI, MAHARASHTRA, 400067",
    "Validity": "May 29, 2017 - Perpetual"
  },
  {
    "Name": "ANKUR CHOUDHARY",
    "Registration No": "INA300004853",
    "E-mail": "ankurc07@gmail.com",
    "Telephone": "8069000068",
    "Fax No": "8069000068",
    "Address": "2-B ANKUR APARTMENT, BANSIKUNJ,, DR R P ROAD, BHAGALPUR, BIHAR, 812002",
    "Correspondence Address": "2-B Ankur Apartment, Bansikunj, Dr R P Road, BHAGALPUR, BIHAR, 812002",
    "Validity": "May 31, 2016 - Perpetual"
  },
  {
    "Name": "Ankur Jain Proprietor Winway Research",
    "Registration No": "INA000007492",
    "E-mail": "ANKURJAINS84@GMAIL.COM",
    "Address": "M-27 Starling tower, 2 MG Road, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "ANKUR  JAIN",
    "Correspondence Address": "M-27 Starling tower, 2 MG Road, INDORE, MADHYA PRADESH, 452001",
    "Correspondence E-mail": "ANKURJAINS84@GMAIL.COM",
    "Validity": "Apr 11, 2017 - Perpetual"
  },
  {
    "Name": "Ankur Vipul Shah Proprietor Quasar Capital Investment Advisors",
    "Registration No": "INA000019813",
    "E-mail": "ankurshah1989@gmail.com",
    "Telephone": "919819370084",
    "Address": "505, Rotunda Towers, BSE Building, Bombay, Samachar Marg, Mumbai, MUMBAI, MAHARASHTRA, 400001",
    "Contact Person": "Ankur Shah",
    "Correspondence Address": "505, Rotunda Towers, BSE Building, Bombay, Samachar Marg, Mumbai, MUMBAI, MAHARASHTRA, 400001",
    "Validity": "Jan 22, 2025 - Perpetual"
  },
  {
    "Name": "ANKUSH SANODIYA  PROPRIE TOR  of DELIGHT FINANCIAL SERVICES",
    "Registration No": "INA000009278",
    "E-mail": "delightfinancial@gmail.com",
    "Telephone": "919713959453",
    "Address": "Delight Financial Services, G1 BLK B SCHNO114 PART 2 PRIME QUEENS APPT KANCHAN VIHAR COLONY NIRANJANPUR INDORE, INDORE, MADHYA PRADESH, 452010",
    "Contact Person": "ANKUSH SANODIYA Proprietor DELIGHT FINANCIAL SERVICES",
    "Correspondence Address": "Delight Financial Services, G1 BLK B SCHNO114 PART 2 PRIME QUEENS APPT KANCHAN VIHAR COLONY NIRANJANPUR INDORE, INDORE, MADHYA PRADESH, 452010",
    "Validity": "Dec 14, 2017 - Perpetual"
  },
  {
    "Name": "ANMOL GUPTA PROP. SEVEN PROSPER FINANCIAL PLANNERS",
    "Registration No": "INA000005622",
    "E-mail": "anmol@sevenprosper.com",
    "Telephone": "07314041638",
    "Fax No": "07314041638",
    "Address": "2308 D, SECTOR E, SUDAMA NAGAR, INDORE, MADHYA PRADESH, 452009",
    "Contact Person": "ANMOL GUPTA",
    "Correspondence Address": "2308 D, Sector E, Sudama Nagar, INDORE, MADHYA PRADESH, 452009",
    "Validity": "Oct 17, 2016 - Perpetual"
  },
  {
    "Name": "Anshul Khare Proprietor of Inertia Equities for Wealth",
    "Registration No": "INA000018090",
    "E-mail": "anshul.khare@equities4wealth.com",
    "Telephone": "91009881127924",
    "Fax No": "91009881127924",
    "Address": "S No.227,228,229, Bldg E4, F No. 403, Rohan Mithilla, PUNE, MAHARASHTRA, 411014",
    "Contact Person": "Anshul  Khare",
    "Correspondence Address": "S No.227,228,229, Bldg E4, F No. 403, Rohan Mithilla, PUNE, MAHARASHTRA, 411014",
    "Validity": "Jun 16, 2023 - Perpetual"
  },
  {
    "Name": "Anubhuti Advisors LLP",
    "Registration No": "INA000019035",
    "E-mail": "meet@anubhutiadvisory.com",
    "Telephone": "910799892707286",
    "Fax No": "910799892707286",
    "Address": "South Tower 601 603 One 42 Ambli Road, Ashok Vatika Bopal Ahmedabad, AHMEDABAD, GUJARAT, 380054",
    "Contact Person": "Meet Rachchh",
    "Correspondence Address": "South Tower 601 603 One 42 Ambli Road, Ashok Vatika Bopal Ahmedabad, AHMEDABAD, GUJARAT, 380054",
    "Validity": "Mar 27, 2024 - Perpetual"
  },
  {
    "Name": "Anudeep Yadav",
    "Registration No": "INA000020961",
    "E-mail": "iawithanudeep@gmail.com",
    "Telephone": "00919910109683",
    "Fax No": "00919910109683",
    "Address": "Flat No 122, 2nd Floor , Rose Apptt. Sector 18B, Dwarka NSIT Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110078",
    "Contact Person": "Anudeep Yadav",
    "Correspondence Address": "Flat No 122, 2nd Floor , Rose Apptt. Sector 18B, Dwarka NSIT Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110078",
    "Validity": "Aug 25, 2025 - Perpetual"
  },
  {
    "Name": "ANUGYA SINGH",
    "Registration No": "INA000009959",
    "E-mail": "ANUGYASINGH05@GMAIL.COM",
    "Address": "Office No. 1309, Skye Corporate Park,, Scheme No. 78, Vijay Nagar,, INDORE, MADHYA PRADESH, 452010",
    "Contact Person": "ANUGYA SINGH",
    "Correspondence Address": "101 First Floor, 79 Radhika Palace, Tulsi Nagar, INDORE, MADHYA PRADESH, 452010",
    "Validity": "Mar 01, 2018 - Perpetual"
  },
  {
    "Name": "Anup Kalra",
    "Registration No": "INA100010439",
    "E-mail": "anup_kalra@yahoo.com",
    "Address": "28 GF, NRI Complex, Greater Kailash IV, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110019",
    "Contact Person": "Anup Kalra",
    "Correspondence Address": "28 GF, NRI Complex, Greater Kailash IV, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110019",
    "Validity": "May 07, 2018 - Perpetual"
  },
  {
    "Name": "Anushree Agarwal",
    "Registration No": "INA000020402",
    "E-mail": "anushreeagarwal97@gmail.com",
    "Telephone": "00919560426481",
    "Fax No": "00919560426481",
    "Address": "Flat 31, Dhanushree Complex,, Sigra, Varanasi,, VARANASI, UTTAR PRADESH, 221010",
    "Contact Person": "Anushree Agarwal",
    "Correspondence Address": "Flat 31, Dhanushree Complex, Sigra, Varanasi, VARANASI, UTTAR PRADESH, 221010",
    "Validity": "Jun 30, 2025 - Perpetual"
  },
  {
    "Name": "Anuvitt Fintech Private Limited",
    "Registration No": "INA000016126",
    "E-mail": "priyesh@cumulativeventures.com",
    "Address": "Flat No. B. 5, Matruashish CHS Ltd,  , SV Road, Plot No. 378-B, Nr Balbharti School, MUMBAI, MAHARASHTRA, 400067",
    "Contact Person": "Priyesh Karia",
    "Correspondence Address": "C-1104, Tower 4, The Crest Towers, Pheonix Market City, , Velacherry Main Road, Velachery, CHENNAI, TAMIL NADU, 600042",
    "Validity": "Aug 23, 2021 - Perpetual"
  },
  {
    "Name": "Appreciate Investment Advisory Private Limited",
    "Registration No": "INA000016719",
    "E-mail": "shlok@ppreciate.com",
    "Address": "0-14, Floor-2 Mahalakshmi Industrial Estate,, Dainik Shivneri Marg, Worli, MUMBAI, MAHARASHTRA, 400018",
    "Contact Person": "Shlok Srivastav",
    "Correspondence Address": "0-14, Floor-2 Mahalakshmi Industrial Estate, Dainik Shivneri Marg, Worli, MUMBAI, MAHARASHTRA, 400018",
    "Validity": "Feb 21, 2022 - Perpetual"
  },
  {
    "Name": "Apricus Wealth Investment Managers LLP",
    "Registration No": "INA000017657",
    "E-mail": "vikrant@apricuswealth.in",
    "Telephone": "022919810302008",
    "Fax No": "022919810302008",
    "Address": "F3/16 Model Town-2, Delhi - 110009, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110009",
    "Contact Person": "Vikrant Gupta",
    "Correspondence Address": "F3/16 Model Town-2, Delhi - 110009, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110009",
    "Validity": "Feb 20, 2023 - Perpetual"
  },
  {
    "Name": "ARC Spire Advisory Private Limited",
    "Registration No": "INA000021058",
    "E-mail": "nitish@paasa.co",
    "Telephone": "00919899354394",
    "Fax No": "00919899354394",
    "Address": "AG-82, Aspen Green, Unitech Nirvana Country, Sector 50, Gurgaon, Haryana, GURUGRAM, HARYANA, 122018",
    "Contact Person": "Nitish Sahni",
    "Correspondence Address": "AG-82, Aspen Green, Unitech Nirvana Country, Sector 50, Gurgaon, Haryana, GURUGRAM, HARYANA, 122018",
    "Validity": "Sep 25, 2025 - Perpetual"
  },
  {
    "Name": "Ardeko Asset Management Private Limited",
    "Registration No": "INA000019831",
    "E-mail": "info@ardeko.in",
    "Telephone": "00917859980782",
    "Fax No": "00917859980782",
    "Address": "705, 7th Floor, The Ridge, Opp. Novotel,, Nr Iscon Cross Road,  SG Highway, AHMEDABAD, GUJARAT, 380060",
    "Contact Person": "Dwaitin Dave",
    "Correspondence Address": "705, 7th Floor, The Ridge, Opp. Novotel, Nr Iscon Cross Road,  SG Highway, AHMEDABAD, GUJARAT, 380060",
    "Validity": "Jan 28, 2025 - Perpetual"
  },
  {
    "Name": "ARETE SECURITIES LIMITED",
    "Registration No": "INA000014614",
    "E-mail": "dinesh.agarwal@aretesecurities.com",
    "Telephone": "9102240439000",
    "Fax No": "9102240439000",
    "Address": "101 A,Mittal Court,, Nariman Point,Mumbai, MUMBAI, MAHARASHTRA, 400021",
    "Contact Person": "DINESH AGARWAL",
    "Correspondence Address": "101 A Mittal Court, Nariman Point, Mumbai, MUMBAI, MAHARASHTRA, 400021",
    "Validity": "Apr 27, 2020 - Perpetual"
  },
  {
    "Name": "Arevuk Advisory Services Private Limited",
    "Registration No": "INA200005166",
    "E-mail": "yogesh.parulekar@kuvera.in",
    "Telephone": "00919819913116",
    "Fax No": "00919819913116",
    "Address": "74/II, Techno Park, C Cross Road, MIDC, Andheri East Opp., SEEPZ Gate No. 2, Chakala Midc, Mumbai, MUMBAI, MAHARASHTRA, 400093",
    "Contact Person": "Yogesh Parulekar",
    "Correspondence Address": "74/II, Techno Park, C Cross Road, MIDC, Andheri East Opp., SEEPZ Gate No. 2, Chakala Midc, Mumbai, MUMBAI, MAHARASHTRA, 400093",
    "Validity": "Jan 02, 2026 - Perpetual"
  },
  {
    "Name": "Arigamoney India Pvt. Ltd.",
    "Registration No": "INA000020776",
    "E-mail": "manav42224@gmail.com",
    "Telephone": "00919627077899",
    "Fax No": "00919627077899",
    "Address": "WARD NO 03, H.N. 11, CANTT, Bareilly Cantt, Bareilly, Uttar Pradesh, BAREILLY, UTTAR PRADESH, 243001",
    "Contact Person": "AJITKUMAR SINGH CHAUHAN",
    "Correspondence Address": "WARD NO 03, H.N. 11, CANTT, Bareilly Cantt, Bareilly, Uttar Pradesh, BAREILLY, UTTAR PRADESH, 243001",
    "Validity": "Aug 04, 2025 - Perpetual"
  },
  {
    "Name": "ARIJIT MAZUMDAR",
    "Registration No": "INA300011609",
    "E-mail": "arijit.maz@gmail.com",
    "Telephone": "919748805020",
    "Address": "HARIDRADANGA,GOALAPARA, PO&PS-CHANDANNAGORE, KOLKATA, WEST BENGAL, 712136",
    "Contact Person": "ARIJIT MAZUMDAR",
    "Correspondence Address": "HARIDRADANGA,GOALAPARA, PO&PS-CHANDANNAGORE, KOLKATA, WEST BENGAL, 712136",
    "Validity": "Sep 04, 2018 - Perpetual"
  },
  {
    "Name": "Arijit Sen",
    "Registration No": "INA300012723",
    "E-mail": "arijitsen@merrymind.in",
    "Telephone": "09674663431",
    "Address": "Arup Residency II, Block B, 2nd Floor, Flat No. 2B,, 1827/1, Chakgaria, Panchasayar, KOLKATA, WEST BENGAL, 700094",
    "Contact Person": "Arijit Sen",
    "Correspondence Address": "Arup Residency II, Block B, 2nd Floor, Flat No. 2B, 1827/1, Chakgaria, Panchasayar, KOLKATA, WEST BENGAL, 700094",
    "Validity": "Mar 18, 2019 - Perpetual"
  },
  {
    "Name": "Arjun K A Proprietor Sukruthi",
    "Registration No": "INA000020493",
    "E-mail": "sukruthifincap@gmail.com",
    "Telephone": "910808123426999",
    "Fax No": "910808123426999",
    "Address": "006 1st floor cubics apartment, 1st main coffee board layout Kempapura, BANGALORE, KARNATAKA, 560024",
    "Contact Person": "ARJUN K A",
    "Correspondence Address": "167/12, SUKRUTHI, 2nd floor, 12th cross, , Mahalakshmi layout, BANGALORE, KARNATAKA, 560086",
    "Validity": "Jul 10, 2025 - Perpetual"
  },
  {
    "Name": "ARK PRIMARY ADVISORS PVT. LTD",
    "Registration No": "INA100001927",
    "E-mail": "hemantbeniwal@TFLguide.com",
    "Telephone": "01414007474",
    "Fax No": "01414007474",
    "Address": "FIRST FLOOR, B-16, JANTA COLONY,, BEHIND PINK SQUARE MALL, JAIPUR, JAIPUR, RAJASTHAN, 302004",
    "Contact Person": "HEMANT KUMAR BENIWAL",
    "Correspondence Address": "First floor, B-16, Janta Colony, behind Pink Square Mall, Jaipur, JAIPUR, RAJASTHAN, 302004",
    "Validity": "Jun 24, 2014 - Perpetual"
  },
  {
    "Name": "AROHA CAPITAL PRIVATE LTD",
    "Registration No": "INA200000175",
    "E-mail": "vivekpai@arohacapital.com",
    "Telephone": "08023613602",
    "Fax No": "08023613602",
    "Address": "No 10/1 Lakshminarayan Complex, Ground Floor, Palace Road, BANGALORE, KARNATAKA, 560052",
    "Contact Person": "Mr.Vivek Pai",
    "Correspondence Address": "113, Ground Floor, 7th Cross, RMV Extension, Sadashivanagar, BANGALORE, KARNATAKA, 560080",
    "Validity": "Oct 07, 2013 - Perpetual"
  },
  {
    "Name": "ARPIT AGARWAL",
    "Registration No": "INA000021641",
    "E-mail": "arpit2491@gmail.com",
    "Telephone": "00919953278236",
    "Fax No": "00919953278236",
    "Address": "B 1206, PRATEEK FEDORA, SECTOR 61, NOIDA, NOIDA, UTTAR PRADESH, 201301",
    "Contact Person": "ARPIT AGARWAL",
    "Correspondence Address": "B 1206, PRATEEK FEDORA, SECTOR 61, NOIDA, NOIDA, UTTAR PRADESH, 201301",
    "Validity": "Dec 30, 2025 - Perpetual"
  },
  {
    "Name": "Arpit Goel",
    "Registration No": "INA100014055",
    "E-mail": "arpitgoel075@gmail.com",
    "Address": "309, Ward 5, Vijay Dharamshala Road, Vijay Mandi, Muradnagar, GHAZIABAD, UTTAR PRADESH, 201206",
    "Contact Person": "Arpit Goel",
    "Correspondence Address": "309, Ward 5, Vijay Dharamshala Road, Vijay Mandi, Muradnagar, GHAZIABAD, UTTAR PRADESH, 201206",
    "Validity": "Oct 10, 2019 - Perpetual"
  },
  {
    "Name": "Arpit Jain (Proprietor, Duvera Capital Advisors)",
    "Registration No": "INA000012652",
    "E-mail": "arpit@duveracapital.com",
    "Address": "Shop no. 214, Morya estate, New Link Road, Andheri West. Mumbai, MUMBAI, MAHARASHTRA, 400053",
    "Contact Person": "Arpit Jain",
    "Correspondence Address": "Shop no. 214, Morya estate, New Link Road, Andheri West. Mumbai, MUMBAI, MAHARASHTRA, 400053",
    "Validity": "Mar 06, 2019 - Perpetual"
  },
  {
    "Name": "Arpita Harshavardhan Kulkarni",
    "Registration No": "INA000021483",
    "E-mail": "ca.arpitakulkarni@gmail.com",
    "Telephone": "00919881331616",
    "Fax No": "00919881331616",
    "Address": "S N 40, Flat No. 3, Deep Vishwa Housing Society,, Narayandas Gandhi Road, Erandwane, Pune, PUNE, MAHARASHTRA, 411038",
    "Contact Person": "Arpita Kulkarni",
    "Correspondence Address": "S N 40, Flat No. 3, Deep Vishwa Housing Society, Narayandas Gandhi Road, Erandwane, Pune, PUNE, MAHARASHTRA, 411038",
    "Validity": "Dec 11, 2025 - Perpetual"
  },
  {
    "Name": "ArthaVidhi Investment Advisors LLP",
    "Registration No": "INA000019451",
    "E-mail": "vkrg.cfp@gmail.com",
    "Telephone": "91009833388992",
    "Fax No": "91009833388992",
    "Address": "Flat No 5513, Propulsive Pinnacle, Kumbena, Kadugodi, Hosakote, Bengaluru, BANGALORE, KARNATAKA, 560067",
    "Contact Person": "Krishnan Venkatachalam",
    "Correspondence Address": "Flat No 5513, Propulsive Pinnacle, Kumbena, Kadugodi, Hosakote, Bengaluru, BANGALORE, KARNATAKA, 560067",
    "Validity": "Aug 06, 2024 - Perpetual"
  },
  {
    "Name": "ARTHOS FINSERV LLP",
    "Registration No": "INA000021632",
    "E-mail": "aakashashokjajoo@gmail.com",
    "Telephone": "00919924248934",
    "Fax No": "00919924248934",
    "Address": "C-1B/150/B/GIDC, Makarpura, Vadsar, Vadodara, Gujarat, VADODARA, GUJARAT, 390010",
    "Contact Person": "Aakash Jajoo",
    "Correspondence Address": "C-1B/150/B/GIDC, Makarpura, Vadsar, Vadodara, Gujarat, VADODARA, GUJARAT, 390010",
    "Validity": "Dec 23, 2025 - Perpetual"
  },
  {
    "Name": "Arthvruksh Capital Management LLP",
    "Registration No": "INA000020712",
    "E-mail": "himanjal@gmail.com",
    "Telephone": "00919638283312",
    "Fax No": "00919638283312",
    "Address": "705B, Iscon Elegance, BS Shapath V, Prahladnagar, SG Highway, Ahmedabad, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "Himanjal Brahmbhatt",
    "Correspondence Address": "705B, Iscon Elegance, BS Shapath V, Prahladnagar, SG Highway, Ahmedabad, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Jul 25, 2025 - Perpetual"
  },
  {
    "Name": "ARTHYA WEALTH AND INVESTMENTS PRIVATE LIMITED",
    "Registration No": "INA000015279",
    "E-mail": "gaurav@arthyawealth.com",
    "Address": "Flat No. 12, Jumbo Co operative Housing Society, TPS IV, Road No. 1, Bandra West, MUMBAI, MAHARASHTRA, 400050",
    "Contact Person": "GAURAV ARORA",
    "Correspondence Address": "Flat No. 12, Jumbo Co operative Housing Society, TPS IV, Road No. 1, Bandra West, MUMBAI, MAHARASHTRA, 400050",
    "Validity": "Oct 07, 2020 - Perpetual"
  },
  {
    "Name": "Arul Valan Lawrence",
    "Registration No": "INA000008604",
    "Address": "C117 Westend Raheja Vihar, Chandivali Andheri East, MUMBAI, MAHARASHTRA, 400072",
    "Validity": "Oct 26, 2017 - Perpetual"
  },
  {
    "Name": "Arun Baijnath Sharma",
    "Registration No": "INA000021270",
    "E-mail": "abswealthadvisor@gmail.com",
    "Telephone": "919962582833",
    "Fax No": "919962582833",
    "Address": "M76, Cactus Corporate Coworking, 173, , 2nd Floor, Block B, Tecci Park, OMR, Sholinganallur, CHENNAI, TAMIL NADU, 600119",
    "Contact Person": "Arun Sharma",
    "Correspondence Address": "M76, Cactus Corporate Coworking, 173, , 2nd Floor, Block B, Tecci Park, OMR, Sholinganallur, CHENNAI, TAMIL NADU, 600119",
    "Validity": "Nov 03, 2025 - Perpetual"
  },
  {
    "Name": "ARUN KUMAR MANTRI",
    "Registration No": "INA200016555",
    "E-mail": "ca.arunmantri@gmail.com",
    "Address": "H NO 16-2-147/16/5  ANAND NAGAR, MALAKPET, HYDERABAD, TELANGANA, 500036",
    "Contact Person": "ARUN MANTRI",
    "Correspondence Address": "H NO 16-2-147/16/5  ANAND NAGAR, MALAKPET, HYDERABAD, TELANGANA, 500036",
    "Validity": "Jan 24, 2022 - Perpetual"
  },
  {
    "Name": "Arun Mathur Proprietor of Dhantripti Financial Planners",
    "Registration No": "INA000017499",
    "E-mail": "arunmathur@dhantripti.com",
    "Telephone": "919910253723",
    "Address": "Flat No 803 Tower 38 , Lotus Espacia Sector 100 Gautam Buddha Nagar, NOIDA, UTTAR PRADESH, 201301",
    "Contact Person": "Arun  Mathur",
    "Correspondence Address": "Flat No 803 Tower 38 , Lotus Espacia Sector 100 Gautam Buddha Nagar, NOIDA, UTTAR PRADESH, 201301",
    "Validity": "Dec 20, 2022 - Perpetual"
  },
  {
    "Name": "Arun Ramabhadran",
    "Registration No": "INA000020590",
    "E-mail": "arun_27march@yahoo.com",
    "Telephone": "919015532329",
    "Address": "C-703, Lovely Home Society, Dwarika Sector  5, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110075",
    "Contact Person": "Arun  Ramabhadran",
    "Correspondence Address": "C-703, Lovely Home Society, Dwarika Sector  5, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110075",
    "Validity": "Jul 14, 2025 - Perpetual"
  },
  {
    "Name": "ARVIND BAJRANGRAO TULALWAR",
    "Registration No": "INA000011015",
    "E-mail": "arvindtul@gmail.com",
    "Address": "INDIGO-2604,OROVIA, WAGHBILL ROAD, KAVESAR THANE WEST, THANE, MAHARASHTRA, 400615",
    "Contact Person": "ARVIND TULALWAR",
    "Correspondence Address": "INDIGO-2604,OROVIA, WAGHBILL ROAD, KAVESAR THANE WEST, THANE, MAHARASHTRA, 400615",
    "Correspondence E-mail": "arvindtul@gmail.com",
    "Validity": "Jul 02, 2018 - Perpetual"
  },
  {
    "Name": "ARVO WEALTH ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000016922",
    "E-mail": "anuj@arvowealth.com",
    "Telephone": "0919503133117",
    "Fax No": "0919503133117",
    "Address": "Office 312 Metrohouse, 21/8 Mangaldas road, PUNE, MAHARASHTRA, 411001",
    "Contact Person": "ANUJ MEHTA",
    "Correspondence Address": "Office 312 Metrohouse, 21/8 Mangaldas road, PUNE, MAHARASHTRA, 411001",
    "Validity": "May 30, 2022 - Perpetual"
  },
  {
    "Name": "Aryan Singhal Proprietor Ethos Investment Adviser",
    "Registration No": "INA000021182",
    "E-mail": "ethosadviser@gmail.com",
    "Telephone": "00919999501149",
    "Fax No": "00919999501149",
    "Address": "Villa No 7/3, Land 2, Jaypee Greens, , Greater Noida,, NOIDA, UTTAR PRADESH, 201306",
    "Contact Person": "Aryan Singhal",
    "Correspondence Address": "Villa No 7/3, Land 2, Jaypee Greens, , Greater Noida, NOIDA, UTTAR PRADESH, 201306",
    "Validity": "Oct 20, 2025 - Perpetual"
  },
  {
    "Name": "ARYZEN CAPITAL ADVISORS LLP",
    "Registration No": "INA000018018",
    "E-mail": "anubhav@aryzen.in",
    "Telephone": "910229820610997",
    "Fax No": "910229820610997",
    "Address": "Flat 20174, Prestige Lake Side Habitat, Varthur Main Road, Gunjur,, Near To Dominos Pizza,, BANGALORE, KARNATAKA, 560087",
    "Contact Person": "Anubhav Srivastava",
    "Correspondence Address": "Flat 20174, Prestige Lake Side Habitat, Varthur Main Road, Gunjur, Near To Dominos Pizza, BANGALORE, KARNATAKA, 560087",
    "Validity": "Jun 02, 2023 - Perpetual"
  },
  {
    "Name": "ASCENT CAPITAL ADVISORS INDIA PRIVATE LIMITED",
    "Registration No": "INA200007645",
    "E-mail": "subhasis@ascentcapital.in",
    "Address": "No 1, Ali Asker Road, Off Palace Road, BANGALORE, KARNATAKA, 560052",
    "Contact Person": "Subhasis Majumder",
    "Correspondence Address": "No 1, Ali Asker Road, Off Palace Road, BANGALORE, KARNATAKA, 560052",
    "Validity": "May 15, 2017 - Perpetual"
  },
  {
    "Name": "ASCENT FINANCIAL SOLUTIONS PVT LTD",
    "Registration No": "INA000017064",
    "E-mail": "LOHANA_PRAKASH@ASCENTSOLUTIONS.IN",
    "Address": "315-316, NOTUS IT PARK, SARABHAI CAMPUS, NEAR GENDA CIRCLE, VADODARA, GUJARAT, 390023",
    "Contact Person": "PRAKASH LOHANA",
    "Correspondence Address": "315-316, NOTUS IT PARK, SARABHAI CAMPUS, NEAR GENDA CIRCLE, VADODARA, GUJARAT, 390023",
    "Validity": "Jun 28, 2022 - Perpetual"
  },
  {
    "Name": "Aseem Sen Gupta",
    "Registration No": "INA100012279",
    "E-mail": "aseemsengupta@gmail.com",
    "Address": "406, Cedar Estate, GH 90, Sector 54, Gurgaon sector 56, GURGAON, HARYANA, 122011",
    "Contact Person": "Aseem Gupta",
    "Correspondence Address": "406, Cedar Estate, GH 90, Sector 54, Gurgaon sector 56, GURGAON, HARYANA, 122011",
    "Validity": "Dec 27, 2018 - Perpetual"
  },
  {
    "Name": "Ashim Sharma",
    "Registration No": "INA100010323",
    "E-mail": "sharmaashim@hotmail.com",
    "Address": "3/2 Shanti Niketan, First Floor, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110021",
    "Contact Person": "Ashim  Sharma",
    "Correspondence Address": "3/2 Shanti Niketan, First Floor, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110021",
    "Validity": "Apr 13, 2018 - Perpetual"
  },
  {
    "Name": "ASHISH CHAUDHARY",
    "Registration No": "INA000020943",
    "E-mail": "ashish12.chaudhary@gmail.com",
    "Telephone": "00918287647430",
    "Fax No": "00918287647430",
    "Address": "A-268 , Vikas Puri  New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110018",
    "Contact Person": "ASHISH  CHAUDHARY",
    "Correspondence Address": "A-268 , Vikas Puri  New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110018",
    "Validity": "Aug 20, 2025 - Perpetual"
  },
  {
    "Name": "Ashish Khetan- Proprietor of Meeraj Advisors",
    "Registration No": "INA000017763",
    "E-mail": "ashishkhetan72@gmail.com",
    "Telephone": "919833706244",
    "Address": "B-2103-2104 , Oberoi Exquisite, Goregaon East, Mumbai - 400063, MUMBAI, MAHARASHTRA, 400063",
    "Contact Person": "Ashish Khetan",
    "Correspondence Address": "B-2103-2104 , Oberoi Exquisite, Goregaon East, Mumbai - 400063, MUMBAI, MAHARASHTRA, 400063",
    "Validity": "Mar 23, 2023 - Perpetual"
  },
  {
    "Name": "ASHIWANI KUMAR SINGH",
    "Registration No": "INA300001974",
    "E-mail": "ashiwani2@gmail.com",
    "Telephone": "03436533333",
    "Fax No": "03436533333",
    "Address": "B-205, KALPATARU BUILDING, BENGAL SRISHTI COMPLEX CITY CENTRE, DURGAPUR, WEST BENGAL, 713216",
    "Contact Person": "ASHIWANI KUMAR SINGH",
    "Correspondence Address": "B-205, KALPATARU BUILDING, BENGAL SRISHTI COMPLEX CITY CENTRE, DURGAPUR, WEST BENGAL, 713216",
    "Validity": "Jul 03, 2014 - Perpetual"
  },
  {
    "Name": "Ashmore Investment Management India LLP",
    "Registration No": "INA000006846",
    "E-mail": "anila@aaia.in",
    "Telephone": "9102262690025",
    "Fax No": "9102262690025",
    "Address": "Units 206, 207, 208 Ceejay House, Shivsagar Estate,, Dr Annie Besant Road, Worli,, MUMBAI, MAHARASHTRA, 400018",
    "Contact Person": "Anila Goyal",
    "Correspondence Address": "Units 206, 207, 208 Ceejay House, Shivsagar Estate, Dr Annie Besant Road, Worli, MUMBAI, MAHARASHTRA, 400018",
    "Validity": "Jun 02, 2023 - Perpetual"
  },
  {
    "Name": "ASHUTOSH FINANCIAL SERVICES PRIVATE LIMITED",
    "Registration No": "INA000020068",
    "E-mail": "RIA@ASHUTOSHFINSERV.COM",
    "Telephone": "00919227896922",
    "Fax No": "00919227896922",
    "Address": "STERLING APPARTMENTS, NEAR JUBILEE BAUG CHOWK, JAWAHAR ROAD, RAJKOT, RAJKOT, GUJARAT, 360001",
    "Contact Person": "SANDEEP VERMA",
    "Correspondence Address": "STERLING APPARTMENTS, NEAR JUBILEE BAUG CHOWK, JAWAHAR ROAD, RAJKOT, RAJKOT, GUJARAT, 360001",
    "Validity": "Apr 01, 2025 - Perpetual"
  },
  {
    "Name": "Ashutosh Kumar Gupta",
    "Registration No": "INA000019974",
    "E-mail": "gupta.ashutoshh@gmail.com",
    "Telephone": "919611879940",
    "Address": "Flat No- 202 S/F Front Side Right Side, Dall Mill Road, Uttam nagar, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110059",
    "Contact Person": "Ashutosh Gupta",
    "Correspondence Address": "Flat No- 202 S/F Front Side Right Side, Dall Mill Road, Uttam nagar, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110059",
    "Validity": "Mar 06, 2025 - Perpetual"
  },
  {
    "Name": "Ashwin Ramakrishnan",
    "Registration No": "INA000019150",
    "E-mail": "ashwinsden@gmail.com",
    "Telephone": "918438907369",
    "Address": "C-6, Mohana Apartments, 96, Arcot Road, Virugambakkam, CHENNAI, TAMIL NADU, 600092",
    "Contact Person": "Ashwin  Ramakrishnan",
    "Correspondence Address": "C-6, Mohana Apartments, 96, Arcot Road, Virugambakkam, CHENNAI, TAMIL NADU, 600092",
    "Validity": "Jun 13, 2024 - Perpetual"
  },
  {
    "Name": "ASK LONG-SHORT FUND MANAGERS PRIVATE LIMITED",
    "Registration No": "INA000020536",
    "E-mail": "gaurik.shah@askhedgesolutions.com",
    "Telephone": "00919820189502",
    "Fax No": "00919820189502",
    "Address": "Birla Aurora, Level 16, Century Mill, Dr. Annie Besant Road, Worli, Mumbai, MUMBAI, MAHARASHTRA, 400030",
    "Contact Person": "GAURIK SHAH",
    "Correspondence Address": "Birla Aurora, Level 16, Century Mill, Dr. Annie Besant Road, Worli, Mumbai, MUMBAI, MAHARASHTRA, 400030",
    "Validity": "Jul 10, 2025 - Perpetual"
  },
  {
    "Name": "ASK Wealth Advisors Private Limited",
    "Registration No": "INA000000532",
    "E-mail": "askwa_compliance@askwealthadvisors.com",
    "Telephone": "0919930235443",
    "Fax No": "0919930235443",
    "Address": "Birla Aurora, 16 Level, Office Floor 9 , Dr. Annie Besant Road, Worli, MUMBAI, MAHARASHTRA, 400030",
    "Contact Person": "Vijay Shah",
    "Correspondence Address": "28th floor, 2803, 2804 and 2805, One Lodha Place, Senapati Bapat Marg, Lower Parel, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Mar 31, 2023 - Perpetual"
  },
  {
    "Name": "ASSETZ PREMIER WEALTH ADVISORY PVT LTD",
    "Registration No": "INA200015671",
    "E-mail": "sivakumar@assetzindia.net",
    "Address": "E 29, MEGAWIN TOWERS, THIRD FLOOR, SECOND AVENUE, BESANT NAGAR, CHENNAI, TAMIL NADU, 600090",
    "Contact Person": "SIVAKUMAR  PULLOT",
    "Correspondence Address": "E 29, MEGAWIN TOWERS, THIRD FLOOR, SECOND AVENUE, BESANT NAGAR, CHENNAI, TAMIL NADU, 600090",
    "Validity": "Jan 08, 2021 - Perpetual"
  },
  {
    "Name": "ASTEYA INVESTMENT MANAGERS LLP",
    "Registration No": "INA000000276",
    "E-mail": "arun.bhal@asteyaglobal.com",
    "Telephone": "2226514252",
    "Fax No": "2226514252",
    "Address": "4G/4H, SIDDHIVINAYAK CHAMBERS,, 643, GANDHI NAGAR, OPP. MIG CLUB, BANDRA EAST, MUMBAI, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "MR. ARUN BHAL",
    "Correspondence Address": "4G/4H, Siddhivinayak Chambers, 643, Gandhi Nagar, Opp. MIG Club, Bandra East, Mumbai, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Nov 21, 2013 - Perpetual"
  },
  {
    "Name": "Athena Investment Advisers",
    "Registration No": "INA000010557",
    "E-mail": "nilesh.borana@gmail.com",
    "Address": "AWFIS, 10 Floor, Parinee Crescenzo, G Block BKC, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Nilesh Borana",
    "Correspondence Address": "AWFIS, 10 Floor, Parinee Crescenzo, G Block BKC, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "May 15, 2018 - Perpetual"
  },
  {
    "Name": "Atul Gupta",
    "Registration No": "INA000016977",
    "E-mail": "atulashokgupta@gmail.com",
    "Telephone": "919820596208",
    "Address": "71 Maker Tower B, Near World Trade Centre Cuffe Parade, MUMBAI, MAHARASHTRA, 400005",
    "Contact Person": "Atul Gupta",
    "Correspondence Address": "71 Maker Tower B, Near World Trade Centre Cuffe Parade, MUMBAI, MAHARASHTRA, 400005",
    "Validity": "Jun 10, 2022 - Perpetual"
  },
  {
    "Name": "Atul Mishra (Proprietor - AMIGOS FINSERV)",
    "Registration No": "INA000004245",
    "E-mail": "atul@amigosfinserv.com",
    "Mobile No": "91-9820798844",
    "Telephone": "00919820798844",
    "Fax No": "00919820798844",
    "Address": "1, Ambika Estate, S.V. Road, Jogeshwari West, MUMBAI, MAHARASHTRA, 400102",
    "Contact Person": "ATUL MISHRA",
    "Correspondence Address": "1202, Rustomjee Pinnacle, Rajendra Nagar, Borivali East, MUMBAI, MAHARASHTRA, 400066",
    "Validity": "Feb 26, 2016 - Perpetual"
  },
  {
    "Name": "Augmenta Research Private Limited",
    "Registration No": "INA300015881",
    "E-mail": "subhabrata@augmenta.co.in",
    "Telephone": "0919051389015",
    "Fax No": "0919051389015",
    "Address": "C - 2444,SPANDAN SP, SUKHOBRISHTI, AAA- 111, C/244/0301, KOLKATA, WEST BENGAL, 700135",
    "Contact Person": "Subhabrata Mitra",
    "Correspondence Address": "2nd Floor, No.579/B, R.T. SQUARE, SECTOR-6, H.S.R.Layout, BANGALORE, KARNATAKA, 700157",
    "Validity": "Apr 29, 2021 - Perpetual"
  },
  {
    "Name": "Aurostarinvestment Advisory Private Limited",
    "Registration No": "INA000018434",
    "E-mail": "aurostarpvtltd@gmail.com",
    "Telephone": "00919554688112",
    "Fax No": "00919554688112",
    "Address": "5 B/1, Calvin Road, Civil Lines, ALLAHABAD, UTTAR PRADESH, 211001",
    "Contact Person": "Nikhil Kabra",
    "Correspondence Address": "5 B/1, Calvin Road, Civil Lines, ALLAHABAD, UTTAR PRADESH, 211001",
    "Validity": "Sep 14, 2023 - Perpetual"
  },
  {
    "Name": "Aurum Softwares and Solutions Private Limited",
    "Registration No": "INA000018188",
    "E-mail": "sonia.jain@aurumproptech.in",
    "Telephone": "9102230001700",
    "Fax No": "9102230001700",
    "Address": "MNDC, MBP-P-136, Mahape, Navi Mumbai,, Thane, NAVI MUMBAI, MAHARASHTRA, 400710",
    "Contact Person": "Sonia Jain",
    "Correspondence Address": "MNDC, MBP-P-136, Mahape, Navi Mumbai, Thane, NAVI MUMBAI, MAHARASHTRA, 400710",
    "Validity": "Jul 05, 2023 - Perpetual"
  },
  {
    "Name": "AVEEK MITRA",
    "Registration No": "INA100004814",
    "E-mail": "mitraaveek1@gmail.com",
    "Address": "A-4 Rani Debendra Bala Road, Indraloke Estate, Flat No A-4 7 Kolkata, KOLKATA, WEST BENGAL, 700002",
    "Correspondence Address": "Unit NO. 817, 8th Floor, PS Abacus, Plot No. 11E/23, New Town, KOLKATA, WEST BENGAL, 700156",
    "Validity": "May 25, 2016 - Perpetual"
  },
  {
    "Name": "Avendus Wealth Management Private Limited",
    "Registration No": "INA000006527",
    "E-mail": "kartik.kini@avendus.com",
    "Telephone": "912266481401",
    "Fax No": "912266481401",
    "Address": "901, PLATINA, 9TH FLOOR, PLOT NO. C-59,BANDRA KURLA COMPLEX,, BANDRA EAST, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Kartik Kini",
    "Correspondence Address": "901, PLATINA, 9TH FLOOR, PLOT NO. C-59,BANDRA KURLA COMPLEX, BANDRA EAST, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Sep 09, 2016 - Perpetual"
  },
  {
    "Name": "AVINASH KHATOO LUTHRIA",
    "Registration No": "INA200011125",
    "E-mail": "avinashluthria@gmail.com",
    "Telephone": "9820196205",
    "Fax No": "9820196205",
    "Address": "C 1203 The Gardens No 9 Magadi Road, Near Binny Circle, BANGALORE, KARNATAKA, 560023",
    "Contact Person": "AVINASH LUTHRIA",
    "Correspondence Address": "C 1203 The Gardens, No 9 Magadi Road Near Binny Mill Circle, BANGALORE, KARNATAKA, 560023",
    "Validity": "Jul 12, 2018 - Perpetual"
  },
  {
    "Name": "AXIS SECURITIES LIMITED",
    "Registration No": "INA000000615",
    "E-mail": "rajiv.kejriwal@axissecurities.in",
    "Telephone": "0918879665752",
    "Fax No": "0918879665752",
    "Address": "AXIS HOUSE, 8TH FLOOR, WADIA INTERNATIONAL CENTRE,, PANDURANG BUDHKAR MARG, WORLI, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "Rajiv Kejriwal",
    "Correspondence Address": "Unit No.2, Phoenix Market City, 15, LBS Marg, Near Kamani  Junction, Kurla (West), MUMBAI, MAHARASHTRA, 400070",
    "Validity": "Dec 26, 2013 - Perpetual"
  },
  {
    "Name": "AYUSH BHARAT BHUTADA",
    "Registration No": "INA000021614",
    "E-mail": "Bhutadaayush09@gmail.com",
    "Telephone": "00919552977000",
    "Fax No": "00919552977000",
    "Address": "55/8B SALISBARY PARK FL NO 203 RAISONI PARK, GULTEKADI PUNE, PUNE, MAHARASHTRA, 411037",
    "Contact Person": "Ayush Bhutada",
    "Correspondence Address": "55/8B SALISBARY PARK FL NO 203 RAISONI PARK, GULTEKADI PUNE, PUNE, MAHARASHTRA, 411037",
    "Validity": "Dec 22, 2025 - Perpetual"
  },
  {
    "Name": "AYUSH BHARGAVA PROPRIETOR BHARGAVA FINANCIAL PLANNERS",
    "Registration No": "INA000004385",
    "E-mail": "bhargavaayush@gmail.com",
    "Address": "3/1, KAMLA NEHRU MARG,, NEAR SHAHEED PARK, FREEGANJ, UJJAIN, MADHYA PRADESH, 456001",
    "Correspondence Address": "3/1, Kamla Nehru Marg, Near Shaheed Park, UJJAIN, MADHYA PRADESH, 456001",
    "Validity": "Mar 17, 2016 - Perpetual"
  },
  {
    "Name": "Ayush Lath",
    "Registration No": "INA000021368",
    "E-mail": "lathayush1@gmail.com",
    "Telephone": "00917813933422",
    "Fax No": "00917813933422",
    "Address": "TR-154, Altf Orchid Business Park, Badshahpur, Sohna Road Highway, Central Park-II, Sector-48, Gurugram, GURUGRAM, HARYANA, 122004",
    "Contact Person": "Ayush Lath",
    "Correspondence Address": "TR-154, Altf Orchid Business Park, Badshahpur, Sohna Road Highway, Central Park-II, Sector-48, Gurugram, GURUGRAM, HARYANA, 122004",
    "Validity": "Nov 07, 2025 - Perpetual"
  },
  {
    "Name": "Ayush Sharma",
    "Registration No": "INA000020475",
    "E-mail": "ayushsharma864@gmail.com",
    "Telephone": "00919530005226",
    "Fax No": "00919530005226",
    "Address": "A-240 Nehru Nagar Pani Pech, Jaipur, Rajasthan, JAIPUR, RAJASTHAN, 302016",
    "Contact Person": "Ayush Sharma",
    "Correspondence Address": "A-240 Nehru Nagar Pani Pech, Jaipur, Rajasthan, JAIPUR, RAJASTHAN, 302016",
    "Validity": "Jul 09, 2025 - Perpetual"
  },
  {
    "Name": "Ayushi Chauksey Adviser Private Limited",
    "Registration No": "INA000019707",
    "E-mail": "ayushichaukseyadviser2024@gmail.com",
    "Telephone": "91007777024549",
    "Fax No": "91007777024549",
    "Address": "801 SAHKARWADI SAHAKAR SOC BHD VIRWANI INDL ESTATE MULUND GOREGAON LK RD, GOREGAON EAST, MUMBAI, MAHARASHTRA, 400063",
    "Contact Person": "AYUSHI CHAUKSEY",
    "Correspondence Address": "801 SAHKARWADI SAHAKAR SOC BHD VIRWANI INDL ESTATE MULUND GOREGAON LK RD, GOREGAON EAST, MUMBAI, MAHARASHTRA, 400063",
    "Validity": "Dec 06, 2024 - Perpetual"
  },
  {
    "Name": "AYUSMAN DAS",
    "Registration No": "INA000013651",
    "E-mail": "WORTHMARKETRESEARCH@GMAIL.COM",
    "Telephone": "917089789789",
    "Fax No": "917089789789",
    "Address": "21/476, OM FLAT, NEW IPCL ROAD , OPP BHAILAL MARRIAGE HALL,, GORWA, VADODARA, GUJARAT, 390016",
    "Contact Person": "AYUSMAN DAS",
    "Correspondence Address": "21/476, OM FLAT, NEW IPCL ROAD , OPP BHAILAL MARRIAGE HALL, GORWA, VADODARA, GUJARAT, 390016",
    "Correspondence E-mail": "WORTHMARKETRESEARCH@GMAIL.COM",
    "Validity": "Jul 19, 2019 - Perpetual"
  },
  {
    "Name": "BADAL BHARTI PROPRIETOR RESEARCH PANEL INVESTMENT ADVISERS",
    "Registration No": "INA000005390",
    "E-mail": "badalbharti19871@gmail.com",
    "Telephone": "07316550005",
    "Fax No": "07316550005",
    "Address": "A-322, SINGAPORE NEST, NEAR PANCHWATI COLONY, INDORE, MADHYA PRADESH, 452001",
    "Correspondence Address": "A-322, Singapore Nest, Near Panchwati Colony, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Aug 18, 2016 - Perpetual"
  },
  {
    "Name": "BAJAJ CAPITAL INVESTMENT ADVISERS PRIVATE LIMITED",
    "Registration No": "INA100001398",
    "E-mail": "reenakumari@bajajcapital.com",
    "Telephone": "1166161111",
    "Fax No": "1166161111",
    "Address": "506, 5TH FLOOR, BAJAJ HOUSE, 97, NEHRU PLACE, NEW DELHI, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110019",
    "Contact Person": "Reena Kumari",
    "Correspondence Address": "506, 5th Floor, Bajaj House, 97, Nehru Place, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110019",
    "Validity": "Mar 31, 2014 - Perpetual"
  },
  {
    "Name": "Bajaj Finserv Direct Limited",
    "Registration No": "INA000016083",
    "Validity": "Aug 11, 2021 - Perpetual"
  },
  {
    "Name": "Banafshe Pashootanizadeh",
    "Registration No": "INA000019008",
    "E-mail": "banafshe.pzadeh@gmail.com",
    "Telephone": "918552090237",
    "Address": "F1 Cananught Plaza 5 Cannaught Road , Opp GPO Pune, PUNE, MAHARASHTRA, 411001",
    "Contact Person": "Banafshe Pashootanizadeh",
    "Correspondence Address": "F1 Cananught Plaza 5 Cannaught Road , Opp GPO Pune, PUNE, MAHARASHTRA, 411001",
    "Validity": "Mar 22, 2024 - Perpetual"
  },
  {
    "Name": "Banayantree Services Limited",
    "Registration No": "INA100006898",
    "E-mail": "compliance@etmoney.com",
    "Telephone": "00919871396095",
    "Fax No": "00919871396095",
    "Address": "Express Building, 9-10 Bahadurshah, Zafar Marg, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110002",
    "Contact Person": "Neeraj Gugnani",
    "Correspondence Address": "Plot no. 391, Udyog Vihar-III, Gurgaon, Haryana, GURUGRAM, HARYANA, 122016",
    "Validity": "Nov 18, 2025 - Perpetual"
  },
  {
    "Name": "BARCLAYS SECURITIES (INDIA) PRIVATE LIMITED",
    "Registration No": "INA000000391",
    "E-mail": "arunima.basu@barclaysasia.com",
    "Telephone": "2267315136",
    "Fax No": "2267315136",
    "Address": "Nirlon Knowledge Park, Level 9, Block B 6, Off Western Express Highway, Goregaon East, MUMBAI, MAHARASHTRA, 400063",
    "Contact Person": "MS. ARUNIMA BASU",
    "Correspondence Address": "208, Ceejay House, Shiv Sagar Estate, Goregaon (East), MUMBAI, MAHARASHTRA, 400063",
    "Validity": "Dec 03, 2013 - Perpetual"
  },
  {
    "Name": "Basant Maheshwari Wealth Advisers LLP",
    "Registration No": "INA000018498",
    "E-mail": "info@theequitydesk.com",
    "Telephone": "91009830627071",
    "Fax No": "91009830627071",
    "Address": "Office No. 701, 7th Floor, Plot 211, Dalamal Tower,, Free Press Journal Marg, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Contact Person": "Basant Maheshwari",
    "Correspondence Address": "Office No. 701, 7th Floor, Plot 211, Dalamal Tower, Free Press Journal Marg, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Validity": "Oct 16, 2023 - Perpetual"
  },
  {
    "Name": "BasuNivesh Fee Only Financial Planners",
    "Registration No": "INA000019053",
    "E-mail": "basunivesh@gmail.com",
    "Telephone": "91006361835871",
    "Fax No": "91006361835871",
    "Address": "Ground Floor, No. 1446, Aastha, Ullal Main Road,, 5th Block, Sir M V Layout, Bengaluru, BANGALORE, KARNATAKA, 560110",
    "Contact Person": "Basavaraj Tonagatti",
    "Correspondence Address": "Ground Floor, No. 1446, Aastha, Ullal Main Road, 5th Block, Sir M V Layout, Bengaluru, BANGALORE, KARNATAKA, 560110",
    "Validity": "Apr 18, 2024 - Perpetual"
  },
  {
    "Name": "BESTPALS RESEARCH & ADVISORY LLP",
    "Registration No": "INA200005141",
    "E-mail": "tvkvivek@bestpals.in",
    "Telephone": "9030330125",
    "Fax No": "9030330125",
    "Address": "8-45, 6TH LANE, LAWYERPETA EXTENSION, , ONGOLE PRAKASAM DISTRICT, ANDHRA PRADESH, 523001",
    "Correspondence Address": "6-3-886, B-104, MY HOME HILL VIEW APARTMENT, RAJ BHAVAN ROAD, SOMAJIGUDA, HYDERABAD, 500082",
    "Validity": "Jul 15, 2016 - Perpetual"
  },
  {
    "Name": "BESTWAY SMART FINANCIAL PRIVATE LIMITED",
    "Registration No": "INA000017392",
    "E-mail": "bsemanoj@gmail.com",
    "Address": "H.no 3232, Pl no. 368, Sindhi Colony, Khamla road, NAGPUR, MAHARASHTRA, 440022",
    "Contact Person": "Manoj Varyani",
    "Correspondence Address": "H.no 3232, Pl no. 368, Sindhi Colony, Khamla road, NAGPUR, MAHARASHTRA, 440022",
    "Validity": "Nov 25, 2022 - Perpetual"
  },
  {
    "Name": "BFC Capital Private Limited",
    "Registration No": "INA000021669",
    "E-mail": "Sunilgupta@bfccapital.com",
    "Telephone": "00918960006601",
    "Fax No": "00918960006601",
    "Address": "CP 61 Viraj Khand Gomti Nagar, Lucknow, LUCKNOW, UTTAR PRADESH, 226010",
    "Contact Person": "Sunil Gupta",
    "Correspondence Address": "CP 61 Viraj Khand Gomti Nagar, Lucknow, LUCKNOW, UTTAR PRADESH, 226010",
    "Validity": "Jan 08, 2026 - Perpetual"
  },
  {
    "Name": "Bharat Jain (Proprietor of Manthan Research and Advisory)",
    "Registration No": "INA200005109",
    "E-mail": "info@manthanresearch.com",
    "Telephone": "919884623521",
    "Address": "ABHINANDAN KLP PROJECTS PVT LTD, 1B BLOCK SHOP NO S4 E, STRAHANS ROAD,, CHENNAI, TAMIL NADU, 600012",
    "Contact Person": "BHARAT  JAIN",
    "Correspondence Address": "KLP ABHINADNAN APTS,  P BLOCK, , FLAT 701, 7th FLOOR  1-30 PERAMBUR BARRACKS ROAD, CHENNAI, TAMIL NADU, 600012",
    "Validity": "Jul 11, 2016 - Perpetual"
  },
  {
    "Name": "Bhargav Bujarbaruah",
    "Registration No": "INA300012316",
    "E-mail": "bhargav.b@consultant.com",
    "Address": "c/o Ms. Pubalee D Bujarbaruah, Upper New Colony, Near Womens' College, SHILLONG, MEGHALAYA, 793003",
    "Contact Person": "Bhargav Bujarbaruah",
    "Correspondence Address": "c/o Ms. Pubalee D Bujarbaruah, Upper New Colony, Near Womens' College, SHILLONG, MEGHALAYA, 793003",
    "Validity": "Jan 03, 2019 - Perpetual"
  },
  {
    "Name": "BHAROSA TECHNOSERVE PRIVATE LIMITED",
    "Registration No": "INA100004657",
    "E-mail": "anita@bharosaclub.com",
    "Telephone": "910229899113595",
    "Fax No": "910229899113595",
    "Address": "401, Aradhana Apartments, , Sector 13 R K Puram, NEW DELHI, 110066",
    "Contact Person": "Anita Bhargava",
    "Correspondence Address": "401, Aradhana Apartments, , Sector 13 R K Puram, NEW DELHI, 110066",
    "Validity": "May 06, 2016 - Perpetual"
  },
  {
    "Name": "BIA INVESTMENT ADVISORS",
    "Registration No": "INA000005564",
    "E-mail": "anil.bhambhani@gmail.com",
    "Telephone": "07940328998",
    "Fax No": "07940328998",
    "Address": "904 SATKAR BUILDING, NR. LAL BUNGALOW, C G ROAD, MITHAKALI, AHMEDABAD, GUJARAT, 380006",
    "Contact Person": "MR. ANIL BHAMBHANI",
    "Correspondence E-mail": "anil.bhambhani@gmail.com",
    "Correspondence Telephone": "7940328998",
    "Correspondence Fax": "7940328998",
    "Validity": "Sep 17, 2016 - Perpetual"
  },
  {
    "Name": "BIGMANS CONSULTANT & MARKETING PVT. LTD.",
    "Registration No": "INA000019123",
    "E-mail": "advdrsuman@gmail.com",
    "Telephone": "91007992372875",
    "Fax No": "91007992372875",
    "Address": "House No.-1050, Main 25 Foota Road, B Block, Kh. No.- 135/1/1/2, , pp. Gali  No.-71, Sant Nagar, Burari, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110084",
    "Contact Person": "SUMAN KUMAR",
    "Correspondence Address": "Chandeshwari Bhawan, Taregana Gola Road, , Beside Bada Mill, Patna, PATNA, BIHAR, 804452",
    "Validity": "Jun 11, 2024 - Perpetual"
  },
  {
    "Name": "Biswarup Sinha Ray",
    "Registration No": "INA300008614",
    "E-mail": "biswarup@viniyogindia.com",
    "Telephone": "00916291268415",
    "Fax No": "00916291268415",
    "Address": "17/2D K. P. Chatterjee Lane, Behala, KOLKATA, WEST BENGAL, 700034",
    "Contact Person": "Biswarup Sinha Ray",
    "Correspondence Address": "17/2D K. P. Chatterjee Lane, Behala, KOLKATA, WEST BENGAL, 700034",
    "Validity": "Oct 26, 2017 - Perpetual"
  },
  {
    "Name": "BLUE OCEAN FINANCIAL SERVICES PRIVATE LIMITED",
    "Registration No": "INA000003833",
    "Address": "15TH Floor, 1505, Meraki Arena, Sion-Trombay Road,, Opp. R K Studio, Chembur East, MUMBAI, MAHARASHTRA, 400071",
    "Validity": "Nov 30, 2015 - Perpetual"
  },
  {
    "Name": "BLUESTRIDES FINANCIAL SERVICES PRIVATE LIMITED",
    "Registration No": "INA000020192",
    "E-mail": "akshay@bluestrides.com",
    "Telephone": "00919881881246",
    "Fax No": "00919881881246",
    "Address": "NO 1015, 3rd Cross, 1st Block,, HRBR Layout, Kalyan nagar, BANGALORE, KARNATAKA, 560043",
    "Contact Person": "Akshay Bommena",
    "Correspondence Address": "Flat No 301, 3rd Floor, Y V Rao Mansion, next to TTD kalyana Mandapam, Liberty Cross Road, Himayatnagar, HYDERABAD, TELANGANA, 500029",
    "Validity": "May 19, 2025 - Perpetual"
  },
  {
    "Name": "Bodeddula Siva Prasad Reddy",
    "Registration No": "INA000018461",
    "E-mail": "sivajnv@gmail.com",
    "Telephone": "918179360549",
    "Address": "3 12 Mangapatnam Muddanur Cuddapah, KADAPA, ANDHRA PRADESH, 516444",
    "Contact Person": "Bodeddula Reddy",
    "Correspondence Address": "3 12 Mangapatnam Muddanur Cuddapah, KADAPA, ANDHRA PRADESH, 516444",
    "Validity": "Oct 09, 2023 - Perpetual"
  },
  {
    "Name": "BON4EQUI GLOBAL CONSULTING PRIVATE LIMITED",
    "Registration No": "INA000018300",
    "E-mail": "bkmpnb2008@gmail.com",
    "Telephone": "02202268831566",
    "Fax No": "02202268831566",
    "Address": "Flat No. 304, Wing D, Aakar Residency,, Ghodbunder Road, Thane West, THANE, MAHARASHTRA, 400615",
    "Contact Person": "BHAVANAND KUMAR MISHRA",
    "Correspondence Address": "B/4076, Oberai Garden Estate, Chandivali, Andheri East, MUMBAI, MAHARASHTRA, 400072",
    "Validity": "Aug 01, 2023 - Perpetual"
  },
  {
    "Name": "BOWHEAD INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA100014648",
    "E-mail": "accounts@eradvisors.in",
    "Address": "Office No. 620, 624, LEVEL 6, WING B, TWO HORIZON CENTER, DLF 5, GOLF COURSE ROAD, SEC 43 GURGAON HA, GURGAON, HARYANA, 122002",
    "Contact Person": "Sonaal Kohli",
    "Correspondence Address": "Corporate Edge Business Centre, LEVEL 6, WING B, TWO HORIZON CENTER, DLF 5, GOLF COURSE ROAD, SEC 43, GURGAON, HARYANA, 122002",
    "Validity": "May 08, 2020 - Perpetual"
  },
  {
    "Name": "BR Fiduciary Investment Advisory LLP",
    "Registration No": "INA000019433",
    "Address": "404, Neptune Prime, Nr. ABS Tower, OP Road, Racecourse, Vadodara, VADODARA, GUJARAT, 390007",
    "Correspondence Address": "404, Neptune Prime, Nr. ABS Tower, OP Road, Racecourse, Vadodara, VADODARA, GUJARAT, 390007",
    "Validity": "Jul 22, 2024 - Perpetual"
  },
  {
    "Name": "BRIGHTER MIND EQUITY ADVISOR PRIVATE LIMITED",
    "Registration No": "INA100016363",
    "E-mail": "brightermindadvisor@gmail.com",
    "Address": "53 B, Upper Ground Floor Vijay Block Laxmi Nagar, Near Nathu Sweets, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110092",
    "Contact Person": "RAJEEV  RANJAN",
    "Correspondence Address": "305, Tower-4, Assotech Business Cresterra Sector-135, NOIDA, UTTAR PRADESH, 201304",
    "Validity": "Nov 08, 2021 - Perpetual"
  },
  {
    "Name": "BRIJESH C PARIKH (PROPRIETOR OF PLANETWEALTH FINANCIAL ADVISORS)",
    "Registration No": "INA000004492",
    "E-mail": "parikhbrijesh@planetvidya.org.in",
    "Telephone": "9328190022",
    "Fax No": "9328190022",
    "Address": "MODH MAHOADAYA BHAVAN, SIR PATTANI ROAD, NR. MEGHANI CIRCLE, BHAVNAGAR, GUJARAT, 364001",
    "Correspondence Address": "Modh Mahoadaya Bhavan, Sir Pattani Road, Nr. Meghani Circle, BHAVNAGAR, GUJARAT, 364001",
    "Validity": "Apr 04, 2016 - Perpetual"
  },
  {
    "Name": "Brijesh Vappala",
    "Registration No": "INA200008592",
    "E-mail": "brijeshvappala77@gmail.com",
    "Address": "BVare Financial Planners & Trainers, 18/424(20), II Floor, Kanakath Towers,, Near Rappadi Auditorium, West Fort Road, PALAKKAD, KERALA, 678001",
    "Contact Person": "Brijesh Vappala",
    "Correspondence Address": "BVare Financial Planners & Trainers, 18/424(20), II Floor, Kanakath Towers, Near Rappadi Auditorium, West Fort Road, PALAKKAD, KERALA, 678001",
    "Validity": "Oct 16, 2017 - Perpetual"
  },
  {
    "Name": "BUGLEROCK BHUVI INVESTMENT ADVISERS PRIVATE LIMITED",
    "Registration No": "INA200012674",
    "E-mail": "compliance.ria@buglerock.asia",
    "Telephone": "918069029000",
    "Fax No": "918069029000",
    "Address": "Prestige Takt, 1st Floor, No. 23,, Kasturba Road Cross,, BANGALORE, KARNATAKA, 560001",
    "Contact Person": "Neha Sharma",
    "Correspondence Address": "Prestige Takt, 1st Floor, No. 23, Kasturba Road Cross, BANGALORE, KARNATAKA, 560001",
    "Validity": "Mar 12, 2019 - Perpetual"
  },
  {
    "Name": "Bullsstrategy Advisory Private Limited",
    "Registration No": "INA000019257",
    "E-mail": "naresh.pandya@bseasl.com",
    "Address": "Office No. TF-55, Shree, Siddheshwar Hallmark, Ajwa Road, VADODARA, GUJARAT, 390019",
    "Contact Person": "Maya Devi  Agrawal",
    "Correspondence Address": "Office No. TF-55, Shree, Siddheshwar Hallmark, Ajwa Road, VADODARA, GUJARAT, 390019",
    "Validity": "Jun 21, 2024 - Perpetual"
  },
  {
    "Name": "Buoyant Capital Private Limited",
    "Registration No": "INA000016995",
    "E-mail": "mayuri.jangid@buoyantcap.com",
    "Telephone": "912269319912",
    "Fax No": "912269319912",
    "Address": "Office No.1605,16th Floor,Lodha Supremus, Senapati Bapat Marg, Lower Parel, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "Mayuri Jangid",
    "Correspondence Address": "Office No. B - 3501, B-Wing, Kohinoor Square, N.C. Kelkar Marg, R.G. Gadkari Chowk, Shivaji Park, Dadar West, MUMBAI, MAHARASHTRA, 400028",
    "Validity": "Jun 13, 2022 - Perpetual"
  },
  {
    "Name": "Candour Asset Management LLP",
    "Registration No": "INA000019479",
    "E-mail": "amey.kulkarni@candorinvesting.com",
    "Telephone": "917841852436",
    "Fax No": "917841852436",
    "Address": "CTS NO 155 / 156 SAMRUDHHI HEIGHT, 1 ST FLOOR PARVATI PUNE, PUNE, MAHARASHTRA, 411009",
    "Contact Person": "Amey Kulkarni",
    "Correspondence Address": "Office 302, CTS NO. 681, S.No, 15/1A. Dattakrupa Soc, Kothrud Pune City, PUNE, MAHARASHTRA, 411038",
    "Validity": "Aug 06, 2024 - Perpetual"
  },
  {
    "Name": "CANDURA INVESTMENT ADVISORS",
    "Registration No": "INA100015151",
    "E-mail": "Amit@canduraia.com",
    "Telephone": "00919910365634",
    "Fax No": "00919910365634",
    "Address": "APT- PNA-102, The Pinnacle, DLF,, Phase-V, Sector-43, GURGAON, HARYANA, 122009",
    "Contact Person": "Amit Jeffrey",
    "Correspondence Address": "APT- PNA-102, The Pinnacle, DLF, Phase-V, Sector-43, GURGAON, HARYANA, 122009",
    "Validity": "Nov 23, 2023 - Perpetual"
  },
  {
    "Name": "CAPITAL LEAGUE LLP",
    "Registration No": "INA000017365",
    "Address": "GL-705 & GL-706, 7TH FLOOR, DLF CROSS POINT,, DLF CITY PHASE-IV, GURGAON, HARYANA, 122009",
    "Validity": "Nov 21, 2022 - Perpetual"
  },
  {
    "Name": "Care Portfolio Managers Private Limited",
    "Registration No": "INA000017444",
    "E-mail": "IA@carepms.com",
    "Telephone": "918652389955",
    "Fax No": "918652389955",
    "Address": "201, Silver Heights, TPS III 51st Road,, Borivli (W), Mumbai, MUMBAI, MAHARASHTRA, 400092",
    "Contact Person": "Vatsal  Zaveri",
    "Correspondence Address": "201, Silver Heights, TPS III 51st Road, Borivli (W), Mumbai, MUMBAI, MAHARASHTRA, 400092",
    "Validity": "Dec 13, 2022 - Perpetual"
  },
  {
    "Name": "Cashvisory Pvt. Ltd.",
    "Registration No": "INA300017162",
    "E-mail": "partners@cashvisory.com",
    "Telephone": "919830023995",
    "Fax No": "919830023995",
    "Address": "9/2A, Topsia Road, South Apartment No. 4B, Pushpanjali Chambers,, KOLKATA, WEST BENGAL, 700046",
    "Contact Person": "Utkarsh Choudhary",
    "Correspondence Address": "9/2A, Topsia Road, South Apartment No. 4B, Pushpanjali Chambers, KOLKATA, WEST BENGAL, 700046",
    "Validity": "Mar 01, 2024 - Perpetual"
  },
  {
    "Name": "CASPIAN IMPACT INVESTMENT ADVISER PRIVATE LIMITED",
    "Registration No": "INA200000753",
    "E-mail": "prasad@caspian.in",
    "Telephone": "04066297100",
    "Fax No": "04066297100",
    "Address": "3RD FLOOR, 8-2-595/5/B/1, ROAD NO.10, BANJARA HILLS, HYDERABAD, ANDHRA PRADESH, 500034",
    "Contact Person": "VISWANATHA PRASAD",
    "Correspondence Address": "3rd floor, 8-2-595/5/B/1, Road No.10, Banjara Hills, ANDHRA PRADESH, 500034",
    "Validity": "Dec 31, 2013 - Perpetual"
  },
  {
    "Name": "CASTLEGATE CAPITAL SERVICES PRIVATE LIMITED",
    "Registration No": "INA000020253",
    "E-mail": "vaibhavi@castlegate.in",
    "Telephone": "00919920444888",
    "Fax No": "00919920444888",
    "Address": "B-1212 Central Tower, Kohinoor Square, Dadar, , Mumbai, MUMBAI, MAHARASHTRA, 400028",
    "Contact Person": "Vaibhavi Rao",
    "Correspondence Address": "B-1212 Central Tower, Kohinoor Square, Dadar, , Mumbai, MUMBAI, MAHARASHTRA, 400028",
    "Validity": "Jun 04, 2025 - Perpetual"
  },
  {
    "Name": "CEDRUS CONSULTANTS PRIVATE LIMITED",
    "Registration No": "INA000005457",
    "E-mail": "nilesh@cedruswealth.com",
    "Telephone": "00919890521315",
    "Fax No": "00919890521315",
    "Address": "S. No. 13, CTS No. 881 P, F. No. 1501 A 1, Kumar Sanctum,, Pashan Bavdhan, PUNE, MAHARASHTRA, 411021",
    "Contact Person": "Nilesh Bajaj",
    "Correspondence Address": "2nd Floor, 202- A, Amelia Apartment, Model Colony, Next to Kirloskar Bungalow, Lakaki Road, PUNE, MAHARASHTRA, 411016",
    "Validity": "Aug 25, 2016 - Perpetual"
  },
  {
    "Name": "CENTRICITY ADVISORY SERVICES PRIVATE LIMITED",
    "Registration No": "INA000018559",
    "E-mail": "ah@centricity.co.in",
    "Telephone": "00919619623465",
    "Fax No": "00919619623465",
    "Address": "203B, 2nd Floor, Tower B, Global Business Park, Mehrauli Gurgaon Road, GURGAON, HARYANA, 122002",
    "Contact Person": "Arpita Hegde",
    "Correspondence Address": "Unit No. 203-B, 2nd Floor, Tower B, Global Business Park, MG Road, Gurugram, GURGAON, HARYANA, 122002",
    "Validity": "Nov 13, 2023 - Perpetual"
  },
  {
    "Name": "CENTRUM INVESTMENT ADVISORS LIMITED",
    "Registration No": "INA000001761",
    "E-mail": "akshay.vora@centrum.co.in",
    "Telephone": "00919833770407",
    "Fax No": "00919833770407",
    "Address": "Centrum House, CST Road, Vidyanagari Marg, , Kalina, Santacruz East, MUMBAI, MAHARASHTRA, 400098",
    "Contact Person": "Akshay Vora",
    "Correspondence Address": "Centrum House, CST Road, Vidyanagri Marg, Kalina, Santacruz East, MUMBAI, MAHARASHTRA, 400098",
    "Validity": "May 20, 2014 - Perpetual"
  },
  {
    "Name": "Cervin Family Office & Advisors Pvt. Ltd.",
    "Registration No": "INA000015385",
    "E-mail": "munish@cervinfamilyoffice.com",
    "Address": "4201,42 Floor, C Wing, Oberoi Exquisite, Goregaon-East, MUMBAI, MAHARASHTRA, 400063",
    "Contact Person": "Munish Randev",
    "Correspondence Address": "4201,42 Floor, C Wing, Oberoi Exquisite, Goregaon-East, MUMBAI, MAHARASHTRA, 400063",
    "Validity": "Nov 05, 2020 - Perpetual"
  },
  {
    "Name": "Cettlx Services Private Limited",
    "Registration No": "INA000020633",
    "E-mail": "rajesh@4iairavat.com",
    "Telephone": "00919940327999",
    "Fax No": "00919940327999",
    "Address": "495 7TH SECTOR, HSR LAYOUT, HSR Layout, Bangalore, BANGALORE, KARNATAKA, 560102",
    "Contact Person": "Rajeshkumar Guruswamy",
    "Correspondence Address": "495 7TH SECTOR, HSR LAYOUT, HSR Layout, Bangalore, BANGALORE, KARNATAKA, 560102",
    "Validity": "Jul 14, 2025 - Perpetual"
  },
  {
    "Name": "CHADHA INVESTMENT CONSULTANT PRIVATE LIMITED",
    "Registration No": "INA100004533",
    "E-mail": "kannan@chadhainvestment.com",
    "Telephone": "1141658986",
    "Fax No": "1141658986",
    "Address": "NO:3, BHIKAJI CAMA PLACE, R-5, ANSAL CHAMBERS-1, NEW DELHI, 110066",
    "Correspondence Address": "No:3, Bhikaji Cama Place, R-5, Ansal Chambers-1, NEW DELHI, 110066",
    "Validity": "Apr 12, 2016 - Perpetual"
  },
  {
    "Name": "Challa Surya Teja - Proprietor of Empirai Research and Advisory",
    "Registration No": "INA000019266",
    "E-mail": "challa.suryateja@gmail.com",
    "Telephone": "919032971920",
    "Address": "109 3rd Floor 3rd Cross Singasandra Kudlu Bangalore, BANGALORE, KARNATAKA, 560068",
    "Contact Person": "Challa Teja",
    "Correspondence Address": "109 3rd Floor 3rd Cross Singasandra Kudlu Bangalore, BANGALORE, KARNATAKA, 560068",
    "Validity": "Jun 21, 2024 - Perpetual"
  },
  {
    "Name": "Chandan Singh Padiyar",
    "Registration No": "INA000008251",
    "E-mail": "cspfs@live.com",
    "Address": "D-7/1, Nirmal Township, , Kale Padal Road, Sasane Nagar, Hadapsar, PUNE, MAHARASHTRA, 411028",
    "Contact Person": "Chandan Singh Padiyar",
    "Correspondence Address": "D-7/1, Nirmal Township, , Kale Padal Road, Sasane Nagar, Hadapsar, PUNE, MAHARASHTRA, 411028",
    "Validity": "Aug 16, 2017 - Perpetual"
  },
  {
    "Name": "Chander P Chellani - Proprietor IDA Wealth",
    "Registration No": "INA000017851",
    "E-mail": "cchellani@yahoo.co.in",
    "Telephone": "919811210001",
    "Address": "PP- 168, EMAAR Mohali Hills, , Sector 108, Mohali, Tricity of Chandigarh, CHANDIGARH, CHANDIGARH, 160055",
    "Contact Person": "Chander P Chellani",
    "Correspondence Address": "PP- 168, EMAAR Mohali Hills, , Sector 108, Mohali, Tricity of Chandigarh, CHANDIGARH, CHANDIGARH, 160055",
    "Validity": "Apr 24, 2023 - Perpetual"
  },
  {
    "Name": "Chandrachuda Sarma Yemmanuru Proprietor Finwiser",
    "Registration No": "INA000021331",
    "E-mail": "chandrachudasarma@gmail.com",
    "Telephone": "00918801294657",
    "Fax No": "00918801294657",
    "Address": "H.No. 181, 14th Cross, Bluejay Atmosphere Phase II, , Andhrahalli Main Road, Nagasandra Post,, BANGALORE, KARNATAKA, 560073",
    "Contact Person": "Chandrachuda Yemmanuru",
    "Correspondence Address": "H.No. 181, 14th Cross, Bluejay Atmosphere Phase II, , Andhrahalli Main Road, Nagasandra Post, BANGALORE, KARNATAKA, 560073",
    "Validity": "Nov 04, 2025 - Perpetual"
  },
  {
    "Name": "Chandrakant Kanase",
    "Registration No": "INA100011784",
    "E-mail": "chandrakant.kanase@ericsson.com",
    "Address": "Flat Number 1902 24K Opula, Survey Number 17-18 Pimple Nilakh, PUNE, MAHARASHTRA, 411027",
    "Contact Person": "Chandrakant Kanase",
    "Correspondence Address": "Flat Number 1902 24K Opula, Survey Number 17-18 Pimple Nilakh, PUNE, MAHARASHTRA, 411027",
    "Validity": "Oct 03, 2018 - Perpetual"
  },
  {
    "Name": "Chase Alpha Partners LLP",
    "Registration No": "INA000016843",
    "E-mail": "info@chasealpha.in",
    "Address": "H. No. 15-41/A/F-4, Mangal Murti, A Wing, Khariwad, Nani Daman, DAMAN, DAMAN AND DIU, 396210",
    "Contact Person": "Pinkal Vishvesh",
    "Correspondence Address": "Fortune Square Extn 2, Shop No. 216,217, 218,219 & 220, 2nd Floor, Chala Road, VAPI, GUJARAT, 396191",
    "Validity": "Apr 26, 2022 - Perpetual"
  },
  {
    "Name": "Chavod Dasharathbhai Narsangabhai",
    "Registration No": "INA000019354",
    "E-mail": "DASARTHSINGH@GMAIL.COM",
    "Telephone": "919725391258",
    "Address": "5th Floor, Office No 12, Vihav Supremus,, Near Amin Party Plot,, VADODARA, GUJARAT, 391101",
    "Contact Person": "Dasharathbhai Chavod",
    "Correspondence Address": "5th Floor, Office No 12, Vihav Supremus, Near Amin Party Plot, VADODARA, GUJARAT, 391101",
    "Validity": "Jul 02, 2024 - Perpetual"
  },
  {
    "Name": "CHEKURI SUBBARAJU",
    "Registration No": "INA200006594",
    "E-mail": "subbarajuprem@gmail.com",
    "Address": "72/8,sector 8,, m v p colony, VISAKHAPATNAM, ANDHRA PRADESH, 530017",
    "Contact Person": "CHEKURI SUBBARAJU",
    "Correspondence Address": "72/8,sector 8, m v p colony, VISAKHAPATNAM, ANDHRA PRADESH, 530017",
    "Validity": "Oct 20, 2016 - Perpetual"
  },
  {
    "Name": "Chethan Dhruva",
    "Registration No": "INA200014724",
    "E-mail": "chethan_dhruva@yahoo.com",
    "Address": "605B, Renaissance Park 3  Apartments, Subramanyanagar 1st Main Road, BANGALORE, KARNATAKA, 560055",
    "Contact Person": "CHETHAN DHRUVA",
    "Correspondence Address": "605B, Renaissance Park 3  Apartments, Subramanyanagar 1st Main Road, BANGALORE, KARNATAKA, 560055",
    "Validity": "Jun 02, 2020 - Perpetual"
  },
  {
    "Name": "Chinmay D Naik Proprietor Kautilya Capital Management",
    "Registration No": "INA000021252",
    "E-mail": "chinmay.naik@kcmehta.com",
    "Telephone": "912652440468",
    "Fax No": "912652440468",
    "Address": "303, Meghdhanush Complex, Race Course, VADODARA, GUJARAT, 390007",
    "Contact Person": "Chinmay  D Naik",
    "Correspondence Address": "303, Meghdhanush Complex, Race Course, VADODARA, GUJARAT, 390007",
    "Validity": "Nov 03, 2025 - Perpetual"
  },
  {
    "Name": "Chinmay Harshad Kelkar",
    "Registration No": "INA000006837",
    "E-mail": "chinmayk@gmail.com",
    "Address": "s/o Harshad Kelkar, 552 Punarnava Apartments, Behind Tuli Imperial Hotel, Old Ramdaspeth, NAGPUR, MAHARASHTRA, 440010",
    "Contact Person": "Chinmay Kelkar",
    "Correspondence Address": "s/o Harshad Kelkar, 552 Punarnava Apartments, Behind Tuli Imperial Hotel, Old Ramdaspeth, NAGPUR, MAHARASHTRA, 440010",
    "Validity": "Jan 03, 2017 - Perpetual"
  },
  {
    "Name": "Chintan Shantilal Madhvani Proprietor Be Wealth Wise",
    "Registration No": "INA000018221",
    "E-mail": "chintanmadhvani@gmail.com",
    "Telephone": "918401889797",
    "Address": "2, Siddhivainyak Apartment, 6 Milpara Kanta Stree, Vikas Gruh Main Road, RAJKOT, GUJARAT, 360002",
    "Contact Person": "Chintan Madhvani",
    "Correspondence Address": "2, Siddhivainyak Apartment, 6 Milpara Kanta Stree, Vikas Gruh Main Road, RAJKOT, GUJARAT, 360002",
    "Validity": "Jul 14, 2023 - Perpetual"
  },
  {
    "Name": "CHIRAG GOKANI (PROPRIETOR OF WEALTHWIZ ADVISORS)",
    "Registration No": "INA000004294",
    "E-mail": "chirag@wealthwiz.in",
    "Telephone": "02232275492",
    "Fax No": "02232275492",
    "Address": "L/402, COUNTRY PARK, DATTA PADA ROAD, BORIVALI (EAST), MUMBAI, MAHARASHTRA, 400066",
    "Contact Person": "CHIRAG GOKANI",
    "Correspondence Address": "L/402, Country Park, Datta Pada Road, Borivali (East), MUMBAI, MAHARASHTRA, 400066",
    "Validity": "Mar 04, 2016 - Perpetual"
  },
  {
    "Name": "CHIRAG V GANDHI",
    "Registration No": "INA000008084",
    "E-mail": "advisorysamruddhi@gmail.com",
    "Address": "103 DEVSYA FLATS, KARAMSAD ROAD, AHMEDABAD, GUJARAT, 388120",
    "Contact Person": "CHIRAG GANDHI",
    "Correspondence Address": "103 DEVSYA FLATS, KARAMSAD ROAD, AHMEDABAD, GUJARAT, 388120",
    "Validity": "Jul 19, 2017 - Perpetual"
  },
  {
    "Name": "Chiratae Ventures India Advisors Private Limited",
    "Registration No": "INA200001348",
    "Validity": "Mar 25, 2014 - Perpetual"
  },
  {
    "Name": "CIRCLE WEALTH ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000016782",
    "E-mail": "MANAGE@CWA.CO.IN",
    "Address": "701 702 MADHAVA BUILDING BKC, ADAJCENT TO FAMILY COURT, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "MUKUL AGARWAL",
    "Correspondence Address": "701 702 MADHAVA BUILDING BKC, ADAJCENT TO FAMILY COURT, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Mar 21, 2022 - Perpetual"
  },
  {
    "Name": "Citrus Advisors Private Limited",
    "Registration No": "INA000016348",
    "E-mail": "jeni.shukla@citrusadvisors.com",
    "Address": "2B, 2, Neptune Apartments CHS,, Juhu Tara Road, Santacruz West, MUMBAI, MAHARASHTRA, 400054",
    "Contact Person": "Jeni Chaudhary",
    "Correspondence Address": "Plot No. 116, Sector 21, Near Iskcon Temple, Opp Bhagwati Gardens, Kharghar, NAVI MUMBAI, MAHARASHTRA, 410210",
    "Validity": "Oct 28, 2021 - Perpetual"
  },
  {
    "Name": "CKREDENCE WEALTH MANAGEMENT PRIVATE LIMITED",
    "Registration No": "INA000020846",
    "E-mail": "prakash.mavani@ckredencewealth.com",
    "Telephone": "912612614084406",
    "Fax No": "912612614084406",
    "Address": "901,902 & 903, , International Wealth Center, VIP Road, Vesu,, SURAT, GUJARAT, 395007",
    "Contact Person": "Prakashkumar Mavani",
    "Correspondence Address": "901,902 & 903, , International Wealth Center, VIP Road, Vesu, SURAT, GUJARAT, 395007",
    "Validity": "Aug 07, 2025 - Perpetual"
  },
  {
    "Name": "Clearsharp Technology Private Limited",
    "Registration No": "INA000020439",
    "E-mail": "adithya.v@clearsharp.in",
    "Telephone": "00919538192952",
    "Fax No": "00919538192952",
    "Address": "X - 58, IInd FLOOR, LOHA MANDI,NARAINA, West Delhi, NEW DELHI, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110028",
    "Contact Person": "Adithya V V",
    "Correspondence Address": "23&24 AMR Tech Park 2A Ground Floor, House road, Bommanahalli, Bangalore, BANGALORE, KARNATAKA, 560068",
    "Validity": "Jul 01, 2025 - Perpetual"
  },
  {
    "Name": "Clovek Wealth Management Private Limited",
    "Registration No": "INA100014879",
    "E-mail": "sachin.kapoor@clovekwealth.com",
    "Address": "Unit No B 91 9 Floor Tower B Advant, IT Park Plot No 7 Sector 142 Noida Gautam Buddha Nagar, NOIDA, UTTAR PRADESH, 201305",
    "Contact Person": "Sachin KAPOOR",
    "Correspondence Address": "UNIT No 915, 9th FLOOR, TOWER B, ADVANT IT PARK, PLOT No. 7, SECTOR 142, NOIDA EXPRESSWAY, NOIDA, UTTAR PRADESH, 201305",
    "Validity": "Jul 27, 2020 - Perpetual"
  },
  {
    "Name": "Coinwise Research Private Limited",
    "Registration No": "INA000018382",
    "E-mail": "info@coinstreet.in",
    "Telephone": "000229310855217",
    "Fax No": "000229310855217",
    "Address": "Flat No 1603, Almond B, Omaxe Residency 2, Arjunganj,, Lucknow, Uttar Pradesh, LUCKNOW, UTTAR PRADESH, 226002",
    "Contact Person": "Rohit Prakash",
    "Correspondence Address": "1003, 10th Floor, Tower B, Emerald Estate Apartments, Sector 65, Haryana, Gurgaon, GURUGRAM, HARYANA, 122001",
    "Validity": "Aug 23, 2023 - Perpetual"
  },
  {
    "Name": "Compound Everyday Capital Management LLP",
    "Registration No": "INA000017198",
    "E-mail": "surbhi@cedcapital.in",
    "Telephone": "9107312510070",
    "Fax No": "9107312510070",
    "Address": "Sakar Bhawan 2nd floor, ATM side,, 21/4 Ratlam Kothi Main Road, Above Federal Bank, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "Surbhi Sarda",
    "Correspondence Address": "Sakar Bhawan 2nd floor, ATM side, 21/4 Ratlam Kothi Main Road, Above Federal Bank, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Sep 23, 2022 - Perpetual"
  },
  {
    "Name": "Compounding Wealth Advisors LLP",
    "Registration No": "INA000011219",
    "E-mail": "rakeshkpujara@gmail.com",
    "Address": "18, 2nd Floor, Raghuleela Mall, S.V. Road,, Behind Poisar BEST Bus Depot, Kandivali West, MUMBAI, MAHARASHTRA, 400067",
    "Contact Person": "Rakesh Pujara",
    "Correspondence Address": "18, 2nd Floor, Raghuleela Mall, S.V. Road, Behind Poisar BEST Bus Depot, Kandivali West, MUMBAI, MAHARASHTRA, 400067",
    "Validity": "Jul 18, 2018 - Perpetual"
  },
  {
    "Name": "Concept Investwell Private Limited",
    "Registration No": "INA000018337",
    "E-mail": "hemant@conceptinvestwell.com",
    "Telephone": "026102206001",
    "Fax No": "026102206001",
    "Address": "10/A, Union Heights, Maharana Pratap Road,, Rahul Raj Mall Lane, Dumas Road, Surat, Gujarat, SURAT, GUJARAT, 395007",
    "Contact Person": "Hemantkumar Desai",
    "Correspondence Address": "10/A, Union Heights, Maharana Pratap Road, Rahul Raj Mall Lane, Dumas Road, Surat, Gujarat, SURAT, GUJARAT, 395007",
    "Validity": "Aug 02, 2023 - Perpetual"
  },
  {
    "Name": "CORPCARE INVESTMENT ADVISORY PRIVATE LIMITED",
    "Registration No": "INA000018249",
    "E-mail": "sourabh.kumar@corpcare.co.in",
    "Telephone": "0919820499819",
    "Fax No": "0919820499819",
    "Address": "Office No. 411, 4th Floor, INS Tower A,, CTS No. 4207, G Block, Bandra-Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Sourabh Kumar",
    "Correspondence Address": "Office No. 411, 4th Floor, INS Tower A, CTS No. 4207, G Block, Bandra-Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Jul 21, 2023 - Perpetual"
  },
  {
    "Name": "Creaegis Investment Advisers Private Limited",
    "Registration No": "INA200014061",
    "Validity": "Oct 30, 2019 - Perpetual"
  },
  {
    "Name": "Credcap Consultants LLP",
    "Registration No": "INA000017480",
    "E-mail": "jainpratibha2021@gmail.com",
    "Address": "T1, 15B, SNN, Clermont, , Opp. Nagawara Lake, Nagawara,, BANGALORE, KARNATAKA, 560045",
    "Contact Person": "Pratibha Jain",
    "Correspondence Address": "T1, 15B, SNN, Clermont, , Opp. Nagawara Lake, Nagawara, BANGALORE, KARNATAKA, 560045",
    "Validity": "Dec 20, 2022 - Perpetual"
  },
  {
    "Name": "Credent Asset Management Services Private Limited",
    "Registration No": "INA000019859",
    "E-mail": "harshal@credentglobal.com",
    "Telephone": "00918657032041",
    "Fax No": "00918657032041",
    "Address": "Unit No. 609, 6th Floor, C-Wing, One BKC, G Block, Bandra Kurla, Complex, Bandra East, Mumbai City, Mumbai, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Harshal Gosarani",
    "Correspondence Address": "Unit No. 609, 6th Floor, C-Wing, One BKC, G Block, Bandra Kurla, Complex, Bandra East, Mumbai City, Mumbai, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Jan 30, 2025 - Perpetual"
  },
  {
    "Name": "Credit Suisse Securities India Private Limited",
    "Registration No": "INA000019372",
    "E-mail": "list.indiapbcompliance@credit-suisse.com",
    "Telephone": "912267773777",
    "Fax No": "912267773777",
    "Address": "9th Floor, Ceejay House, Plot F,, Shivsagar Estate, Dr Annie Besant Road, Worli, MUMBAI, MAHARASHTRA, 400018",
    "Contact Person": "Coralisa Rocher",
    "Correspondence Address": "9th Floor, Ceejay House, Plot F, Shivsagar Estate, Dr Annie Besant Road, Worli, MUMBAI, MAHARASHTRA, 400018",
    "Validity": "Jul 04, 2024 - Perpetual"
  },
  {
    "Name": "Crest Capital Management Private Limited",
    "Registration No": "INA000020907",
    "E-mail": "zuhaib@crest-group.co",
    "Telephone": "00919871396555",
    "Fax No": "00919871396555",
    "Address": "B/601, Lantane Mahindra S, LBS Marg, Bhandup West, Mumbai, MUMBAI, MAHARASHTRA, 400078",
    "Contact Person": "Zuhaib Khan",
    "Correspondence Address": "B Wing, 6th Floor, Supreme Business Park, Cliff Avenue, Unit No. B, 501/A, Hiranandani Gardens, Powai, MUMBAI, MAHARASHTRA, 400076",
    "Validity": "Aug 07, 2025 - Perpetual"
  },
  {
    "Name": "CUBERA ASSET ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000020624",
    "E-mail": "nilesh@cuberaadvisors.com",
    "Telephone": "00919833144266",
    "Fax No": "00919833144266",
    "Address": "UNIT 801- 802 8TH FLOOR,Tower, 1,Senapati Bapat Marg,Dadar  West,Prabhadevi,Lower Parel, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "Nilesh Borana",
    "Correspondence Address": "UNIT 801- 802 8TH FLOOR,Tower, 1,Senapati Bapat Marg,Dadar  West,Prabhadevi,Lower Parel, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Jul 14, 2025 - Perpetual"
  },
  {
    "Name": "CUSP MONEY ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000020004",
    "E-mail": "hardik.thakkar@cusp.money",
    "Telephone": "00919724325983",
    "Fax No": "00919724325983",
    "Address": "402, Gala Hub Anx,  Bopal, Daskro,, AHMEDABAD, GUJARAT, 380058",
    "Contact Person": "HARDIK THAKKAR",
    "Correspondence Address": "402, Gala Hub Anx,  Bopal, Daskro, AHMEDABAD, GUJARAT, 380058",
    "Validity": "Mar 24, 2025 - Perpetual"
  },
  {
    "Name": "CX Advisors LLP",
    "Registration No": "INA100008267",
    "E-mail": "jayanta@cxpartners.in",
    "Address": "Atelier, Level-1, Suite No.3, Worldmark 2, Aerocity, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110037",
    "Contact Person": "Jayanta Kumar Basu",
    "Correspondence Address": "Atelier, Level-1, Suite No.3, Worldmark 2, Aerocity, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110037",
    "Validity": "Aug 21, 2017 - Perpetual"
  },
  {
    "Name": "D C INVESTMENT ADVISORS",
    "Registration No": "INA200008006",
    "E-mail": "das.mrunmay@gmail.com",
    "Address": "17 HEERACHAND ROAD, 4TH CROSS, CHARLES CAMPBELL ROAD, COX TOWN, BANGALORE, KARNATAKA, 560005",
    "Contact Person": "MRUNMAY DAS",
    "Correspondence Address": "17 HEERACHAND ROAD, 4TH CROSS, CHARLES CAMPBELL ROAD, COX TOWN, BANGALORE, KARNATAKA, 560005",
    "Validity": "Jul 04, 2017 - Perpetual"
  },
  {
    "Name": "Dalton Investment Advisory Services Private Limited",
    "Registration No": "INA000012874",
    "E-mail": "legal@daltoninvestments.com",
    "Telephone": "9102262606888",
    "Fax No": "9102262606888",
    "Address": "3rd floor, Prudential Building,, Prudential IT Park, Hiranandani Gardens, Powai,, MUMBAI, MAHARASHTRA, 400076",
    "Contact Person": "Siva Thiravidamony",
    "Correspondence Address": "3rd floor, Prudential Building, Prudential IT Park, Hiranandani Gardens, Powai, MUMBAI, MAHARASHTRA, 400076",
    "Validity": "Mar 28, 2019 - Perpetual"
  },
  {
    "Name": "Datla Venkata Satya Teja Krishnam Raju",
    "Registration No": "INA000021003",
    "E-mail": "rajudatla17799@gmail.com",
    "Telephone": "00919603540541",
    "Fax No": "00919603540541",
    "Address": "208 Tower-B, Chitturi Metro,, Behind D Mart, Tuni,, KAKINADA, ANDHRA PRADESH, 533401",
    "Contact Person": "Datla Venkata Krishnam Raju",
    "Correspondence Address": "208 Tower-B, Chitturi Metro, Behind D Mart, Tuni, KAKINADA, ANDHRA PRADESH, 533401",
    "Validity": "Sep 15, 2025 - Perpetual"
  },
  {
    "Name": "DAYCO SECURITIES PVT LTD",
    "Registration No": "INA300016701",
    "E-mail": "aditi@daycoindia.com",
    "Address": "113 Park Street, Poddar Point B Block 7th Floor, KOLKATA, WEST BENGAL, 700016",
    "Contact Person": "Aditi Nundy",
    "Correspondence Address": "113 Park Street, Poddar Point B Block 7th Floor, KOLKATA, WEST BENGAL, 700016",
    "Validity": "Feb 18, 2022 - Perpetual"
  },
  {
    "Name": "Deep Bhavesh  Dhanecha",
    "Registration No": "INA000020262",
    "E-mail": "deepdhanecha@gmail.com",
    "Telephone": "919373013606",
    "Fax No": "919373013606",
    "Address": "Shop No, F-7, 1st Floor, Virar West, Cosmos Square, Chikhal Dongari road, MUMBAI, MAHARASHTRA, 401303",
    "Contact Person": "Deep  Dhanecha",
    "Correspondence Address": "Shop No, F-7, 1st Floor, Virar West, Cosmos Square, Chikhal Dongari road, MUMBAI, MAHARASHTRA, 401303",
    "Validity": "Jun 04, 2025 - Perpetual"
  },
  {
    "Name": "DEEP KANDPAL PROP. RESEARCH INN INVESTMENT ADVISOR",
    "Registration No": "INA000004450",
    "E-mail": "my.researchinn@gmail.com",
    "Address": "B-702, 7th FLOOR, METRO TOWER, VIJAY NAGAR, INDORE, MADHYA PRADESH, 452001",
    "Correspondence Address": "TF-01, Shubham Corporate, 27 Patel Nagar, Sapna Sangeeta Road, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Mar 31, 2016 - Perpetual"
  },
  {
    "Name": "DEEPAK KUMAR AGARWAL",
    "Registration No": "INA000017709",
    "E-mail": "DEEPAKKRAGARWAL@GMAIL.COM",
    "Telephone": "919830916800",
    "Address": "70A, DEVDHARA COLONY,, MURLIPURA SCHEME, MURLIPURA, JAIPUR, JAIPUR, RAJASTHAN, 302039",
    "Contact Person": "DEEPAK AGARWAL",
    "Correspondence Address": "70A, DEVDHARA COLONY, MURLIPURA SCHEME, MURLIPURA, JAIPUR, JAIPUR, RAJASTHAN, 302039",
    "Validity": "Feb 28, 2023 - Perpetual"
  },
  {
    "Name": "DEEPAK KUMAR PANDEY PROPRIETOR ABR VENTURE FINANCIAL SERVICES",
    "Registration No": "INA000005309",
    "E-mail": "contact@abrventure.com",
    "Address": "PLOT NO 107, PU4,SCHEME NO 54,VIJAY NAGAR, INDORE, MADHYA PRADESH, 452001",
    "Correspondence Address": "12-B, Swarn Vatika, Vandana Nagar, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Aug 03, 2016 - Perpetual"
  },
  {
    "Name": "Deepak Motwani (Proprietor: Marquee Investment Managers)",
    "Registration No": "INA000017347",
    "E-mail": "deepak@marqueeinvestment.in",
    "Telephone": "918878311101",
    "Address": "F-16, Maruti Nandan Complex, Sahyog Vihar, Bawadiya Kalan, Near Aura Mall, BHOPAL, MADHYA PRADESH, 462039",
    "Contact Person": "Deepak Motwani",
    "Correspondence Address": "F-16, Maruti Nandan Complex, Sahyog Vihar, Bawadiya Kalan, Near Aura Mall, BHOPAL, MADHYA PRADESH, 462039",
    "Validity": "Nov 16, 2022 - Perpetual"
  },
  {
    "Name": "DEEPAK OSTWAL PROPRIETOR OF  CAPITAL WAYS INVESTMENT ADVISER",
    "Registration No": "INA000008862",
    "E-mail": "deepakostwal@gmail.com",
    "Address": "236, Hi Link City Chhota Bangarda, INDORE, MADHYA PRADESH, 453112",
    "Contact Person": "DEEPAK OSTWAL",
    "Correspondence Address": "236, Hi Link City Chhota Bangarda, INDORE, MADHYA PRADESH, 453112",
    "Validity": "Nov 08, 2017 - Perpetual"
  },
  {
    "Name": "DEEPAK PARNAMI",
    "Registration No": "INA100003279",
    "E-mail": "dpparnami@yahoo.co.in",
    "Telephone": "1140533668",
    "Fax No": "1140533668",
    "Address": "44, NILGIRI APARTMENTS,, ALAKNANDA KALKAJI, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110019",
    "Contact Person": "DEEPAK PARNAMI",
    "Correspondence Address": "44, NILGIRI APARTMENTS, ALAKNANDA KALKAJI, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110019",
    "Validity": "Jul 29, 2015 - Perpetual"
  },
  {
    "Name": "Deepesh Jain",
    "Registration No": "INA000016384",
    "E-mail": "jain.deepesh@icai.org",
    "Telephone": "919892075349",
    "Address": "203, VIDYA VIHAR CHS, KASTURBA ROAD NO 5,, MUMBAI, MAHARASHTRA, 400066",
    "Contact Person": "Deepesh JAIN",
    "Correspondence Address": "203, VIDYA VIHAR CHS, KASTURBA ROAD NO 5, MUMBAI, MAHARASHTRA, 400066",
    "Validity": "Nov 15, 2021 - Perpetual"
  },
  {
    "Name": "DEEPESH RAGHAW",
    "Registration No": "INA100002719",
    "E-mail": "deepesh.raghaw@gmail.com",
    "Telephone": "9619746992",
    "Fax No": "9619746992",
    "Address": "H-5,GYAN SAROVAR COLONY, RAMGHAT ROAD, ALIGARH, ALIGARH, UTTAR PRADESH, 202001",
    "Contact Person": "DEEPESH RAGHAW",
    "Correspondence Address": "H-5,Gyan Sarovar Colony, Ramghat Road, Aligarh, ALIGARH, UTTAR PRADESH, 202001",
    "Validity": "Feb 19, 2015 - Perpetual"
  },
  {
    "Name": "Degree 212 Investment Services & IMF Private Limited",
    "Registration No": "INA000016603",
    "E-mail": "pravinbudhauliya@degree212.in",
    "Address": "B 601, Grand View - 7, Near Ashok Leyland,, Ambegaon, Pune, PUNE, MAHARASHTRA, 411046",
    "Contact Person": "Pravin Budhauliya",
    "Correspondence Address": "1st Floor, GV 7 Capital, Grand View 7, S. No. 8/12, Ambegaon BK, Pune, PUNE, MAHARASHTRA, 411046",
    "Validity": "Jan 31, 2022 - Perpetual"
  },
  {
    "Name": "DEV ASHISH",
    "Registration No": "INA100005241",
    "E-mail": "d.ashish@gmail.com",
    "Address": "ADITYA BHAWAN, AMINABAD, LUCKNOW, UTTAR PRADESH, 226018",
    "Correspondence Address": "Aditya Bhawan, Aminabad, LUCKNOW, UTTAR PRADESH, 226018",
    "Validity": "Jul 27, 2016 - Perpetual"
  },
  {
    "Name": "DEVAGNAYA R SHAH",
    "Registration No": "INA000018531",
    "E-mail": "devagnaya@gmail.com",
    "Telephone": "919428404540",
    "Address": "113, FLORIS, SKYCITY, NEAR CLUB O-7, SHELA,, AHMEDABAD, GUJARAT, 380058",
    "Contact Person": "DEVAGNAYA R SHAH",
    "Correspondence Address": "113, FLORIS, SKYCITY, NEAR CLUB O-7, SHELA, AHMEDABAD, GUJARAT, 380058",
    "Validity": "Nov 09, 2023 - Perpetual"
  },
  {
    "Name": "DEVENDRA KUMAR BAIRATHI",
    "Registration No": "INA000004039",
    "E-mail": "devendra.bairathi@gmail.com",
    "Telephone": "9820457776",
    "Fax No": "9820457776",
    "Address": "E-1607, OBEROI SPLENDOR, OPP. MAJAS DEPOT, JV LINK ROAD, ANDHERI (EAST), MUMBAI, MAHARASHTRA, 400060",
    "Contact Person": "DEVENDRA KUMAR BAIRATHI",
    "Correspondence Address": "E-1607, OBEROI SPLENDOR, OPP. MAJAS DEPOT, JV LINK ROAD, ANDHERI (EAST), MUMBAI, MAHARASHTRA, 400060",
    "Validity": "Jan 21, 2016 - Perpetual"
  },
  {
    "Name": "DEVENDRA KUMAR CHAUDHARY-Proprietor-TRADE MANIACS INVESTMENT ADVISOR",
    "Registration No": "INA000018601",
    "E-mail": "tmaniacs07@gmail.com",
    "Telephone": "000009145888499",
    "Fax No": "000009145888499",
    "Address": "Office No 603, 6th Floor, Shree RMI City Centre, 56 Shastri Marg, Ashok Nagar Road, UDAIPUR, RAJASTHAN, 313001",
    "Contact Person": "DEVENDRA KUMAR  CHAUDHARY",
    "Correspondence Address": "Office No 603, 6th Floor, Shree RMI City Centre, 56 Shastri Marg, Ashok Nagar Road, UDAIPUR, RAJASTHAN, 313001",
    "Validity": "Nov 28, 2023 - Perpetual"
  },
  {
    "Name": "Devendra Tripathi Sole Proprietor Stock Bull Investment Advisory Services",
    "Registration No": "INA000013493",
    "E-mail": "devendram2fs@gmail.com",
    "Address": "10th Floor,Levana Cyber Heights , Vibhuti khand Gomati Nagar LUCKNOW 226010 UTTAR PRADESH LUCKNOW, LUCKNOW, UTTAR PRADESH, 226010",
    "Contact Person": "DEVENDRA TRIPATHI",
    "Correspondence Address": "10th Floor,Levana Cyber Heights , Vibhuti khand Gomati Nagar LUCKNOW 226010 UTTAR PRADESH LUCKNOW, LUCKNOW, UTTAR PRADESH, 226010",
    "Validity": "Jun 13, 2019 - Perpetual"
  },
  {
    "Name": "DEVERE GROUP INVESTMENT ADVISORS PVT LTD",
    "Registration No": "INA100002693",
    "E-mail": "stuart.gitsham@devere-group.com",
    "Telephone": "1244712257",
    "Fax No": "1244712257",
    "Address": "1309 PRAGATI TOWER, 26, RAJENDRA PLACE, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110008",
    "Contact Person": "STUART IAN GITSHAM",
    "Correspondence Address": "German  Centre, Office No.8, Building, No.9B, Level 12, DLF Cyber City , Phase III, Gurgaon, GURGAON, HARYANA, 122002",
    "Validity": "Feb 19, 2015 - Perpetual"
  },
  {
    "Name": "Devraj Dhagat",
    "Registration No": "INA000017888",
    "Address": "B-56 VIP Estate Shankar Nagar , Khamardih Raipur, RAIPUR, CHHATTISGARH, 492007",
    "Correspondence Address": "B-56 VIP Estate Shankar Nagar , Khamardih Raipur, RAIPUR, CHHATTISGARH, 492007",
    "Validity": "Apr 24, 2023 - Perpetual"
  },
  {
    "Name": "DHANAYUSH CAPITAL SERVICES PRIVATE LIMITED",
    "Registration No": "INA000021021",
    "E-mail": "compliance@dhanayushcapital.com",
    "Telephone": "00919821619410",
    "Fax No": "00919821619410",
    "Address": "63A Proctor Road, Sunder Sadan, 3rd Floor, Mumbai, MUMBAI, MAHARASHTRA, 400004",
    "Contact Person": "Parag Telang",
    "Correspondence Address": "63A Proctor Road, Sunder Sadan, 3rd Floor, Mumbai, MUMBAI, MAHARASHTRA, 400004",
    "Validity": "Sep 18, 2025 - Perpetual"
  },
  {
    "Name": "DHARMENDRA PATIDAR PROPRIETOR MARKET ERA",
    "Registration No": "INA000004864",
    "E-mail": "marketeraa@gmail.com",
    "Address": "FLAT NUMBER 108, AYUSHMAN RESIDENCY K - BLOCK. RAU, INDORE, MADHYA PRADESH, 452016",
    "Correspondence Address": "A/39, Ganeshpuri Colony, Khajrana, INDORE, MADHYA PRADESH, 452016",
    "Validity": "May 31, 2016 - Perpetual"
  },
  {
    "Name": "Dhilip Krishna SS Proprietor of Apta Investment Advisors",
    "Registration No": "INA000019071",
    "E-mail": "dhilipkrishna@gmail.com",
    "Telephone": "919769497239",
    "Address": "Apartment No S2, 2nd Floor, Sri Venkadam, Plot No 889, Munusamy Salai, KK Nagar, CHENNAI, TAMIL NADU, 600078",
    "Contact Person": "Dhilip Krishna SS",
    "Correspondence Address": "Apartment No S2, 2nd Floor, Sri Venkadam, Plot No 889, Munusamy Salai, KK Nagar, CHENNAI, TAMIL NADU, 600078",
    "Validity": "Apr 30, 2024 - Perpetual"
  },
  {
    "Name": "Dhruvin Jagdish Bhanushali",
    "Registration No": "INA000019017",
    "E-mail": "dhruvinjb@gmail.com",
    "Telephone": "918767422422",
    "Address": "524-Homeland and City opp, JH Ambani School,, Udhna Magdalla Road,  Vesu,, SURAT, GUJARAT, 395007",
    "Contact Person": "Dhruvin  Bhanushali",
    "Correspondence Address": "524-Homeland and City opp, JH Ambani School, Udhna Magdalla Road,  Vesu, SURAT, GUJARAT, 395007",
    "Validity": "Mar 26, 2024 - Perpetual"
  },
  {
    "Name": "DIBYAJIT SAHA",
    "Registration No": "INA300005835",
    "E-mail": "dibanalysis@gmail.com",
    "Telephone": "8585008483",
    "Fax No": "8585008483",
    "Address": "31/1 SANTI GHOSH STREET, KOLKATA, WEST BENGAL, 700003",
    "Contact Person": "DIBYAJIT SAHA",
    "Correspondence Address": "31/1 Santi Ghosh Street, KOLKATA, WEST BENGAL, 700003",
    "Validity": "Mar 01, 2017 - Perpetual"
  },
  {
    "Name": "DILZER CONSULTANTS PRIVATE LTD",
    "Registration No": "INA200002239",
    "E-mail": "dilshad@dilzer.net",
    "Telephone": "080 41512337",
    "Fax No": "080 41512337",
    "Address": "NO.404, 4th Floor, Embassy Centre, No. 11, Crescent Road, BANGALORE, KARNATAKA, 560001",
    "Contact Person": "MS DILSHAD BILLIMORIA",
    "Correspondence Address": "NO.307, EMBASSY CENTER, 11, CRESCENT ROAD, BANGALORE, KARNATAKA, 560001",
    "Validity": "Sep 19, 2014 - Perpetual"
  },
  {
    "Name": "DINESH DA COSTA (PROPRIETOR ZARA INVESTMENT ADVISORY)",
    "Registration No": "INA000003395",
    "E-mail": "dineshdacosta@gmail.com",
    "Telephone": "000 00000000",
    "Fax No": "000 00000000",
    "Address": "HOUSE NO. 214, MAZALWADDO,, NEAR TO PALLOTTI HOUSE,ASSAGAO, BARDEZ,, GOA, 403507",
    "Contact Person": "MR. DINESH DA COSTA",
    "Correspondence Address": "House No. 214, MazalWaddo, Near to Pallotti House,Assagao, Bardez, GOA, 403507",
    "Validity": "Aug 25, 2015 - Perpetual"
  },
  {
    "Name": "DIPEN DEEPAK DOSHI (SOLE PROPRIETOR OF FOCUS INVESTING)",
    "Registration No": "INA000013855",
    "E-mail": "dipendoshi@hotmail.com",
    "Address": "108/A Walkeshwar Road, 5 Pushpanjali Bldg, 4th Floor, MUMBAI, MAHARASHTRA, 400006",
    "Contact Person": "DIPEN DOSHI",
    "Correspondence Address": "108/A Walkeshwar Road, 5 Pushpanjali Bldg, 4th Floor, MUMBAI, MAHARASHTRA, 400006",
    "Validity": "Aug 21, 2019 - Perpetual"
  },
  {
    "Name": "Dolat Finserv Private Limited",
    "Registration No": "INA000020101",
    "E-mail": "Viplabd@dolatcapital.com",
    "Telephone": "00919870193603",
    "Fax No": "00919870193603",
    "Address": "301-308, Bhagwati House, A-19, Veera Desai Road,, Andheri West, MUMBAI, MAHARASHTRA, 400058",
    "Contact Person": "Viplab Dasgupta",
    "Correspondence Address": "Unit No. 1201, B Wing, 12th Floor, Naman Midtown B wing Premises C. S. Ltd., Senapati Bapat Marg, Elphinstone, Prabhadevi, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Apr 19, 2025 - Perpetual"
  },
  {
    "Name": "DRCHOKSEY FINSERV PRIVATE LIMITED",
    "Registration No": "INA000017903",
    "E-mail": "compliance@devenchoksey.com",
    "Telephone": "918104482640",
    "Fax No": "918104482640",
    "Address": "C-5/6, 5th Floor, Abhishek Building, Behind Monginis Cake Factory, Off New Link Road,, Andheri West,, MUMBAI, MAHARASHTRA, 400058",
    "Contact Person": "Maulik  Trivedi",
    "Correspondence Address": "C-5/6, 5th Floor, Abhishek Building, Behind Monginis Cake Factory, Off New Link Road, Andheri West, MUMBAI, MAHARASHTRA, 400058",
    "Validity": "Apr 24, 2023 - Perpetual"
  },
  {
    "Name": "Dreamplug Advisory Solutions Private Limited",
    "Registration No": "INA000018841",
    "E-mail": "principalofficer@daspl.co.in",
    "Telephone": "91228951765699",
    "Fax No": "91228951765699",
    "Address": "404, Uphar II CHS Ltd, Plot No. 5 BHD Sanjeeva ENCL, 7 Bunglows, Near Juhu Circle,, MUMBAI, MAHARASHTRA, 400061",
    "Contact Person": "Ajit Kumar",
    "Correspondence Address": "769 and 770, 100 Feet Road, 12th Main, HAL 2nd Stage, Indiranagar, Bengaluru Urban, BANGALORE, KARNATAKA, 560038",
    "Validity": "Feb 09, 2024 - Perpetual"
  },
  {
    "Name": "DSIJ PRIVATE LIMITED",
    "Registration No": "INA000001142",
    "E-mail": "rajeshp@dsij.in",
    "Telephone": "2040197219",
    "Fax No": "2040197219",
    "Address": "419-A, 4TH FLOOR, ARUN CHAMBERS,, TARDEO, NEXT TO AC MARKET,, MUMBAI, MAHARASHTRA, 400034",
    "Contact Person": "MR. RAJESH PADODE",
    "Correspondence Address": "Office No. ? 303, 3rd Floor, Siddhivinayak Aurum, Behind Eden Garden Society, Near IBIS Hotel, Vimannagar, PUNE, MAHARASHTRA, 411014",
    "Validity": "Feb 24, 2014 - Perpetual"
  },
  {
    "Name": "DSK INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000018416",
    "E-mail": "dsk@richify.in",
    "Telephone": "00919311061312",
    "Fax No": "00919311061312",
    "Address": "124, Sunder Nagar, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110003",
    "Contact Person": "Daljit Singh Kochhar",
    "Correspondence Address": "124, Sunder Nagar, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110003",
    "Validity": "Aug 30, 2023 - Perpetual"
  },
  {
    "Name": "DUDEKULA HASAN CHAITHANYA",
    "Registration No": "INA200014292",
    "E-mail": "hasan.chaitanya@gmail.com",
    "Address": "1394, 2ND FLOOR, LAKSHMI RESIDENCY, 21ST MAIN, HSR LAYOUT, SECTOR-1, BANGALORE, KARNATAKA, 560102",
    "Contact Person": "HASAN DUDEKULA",
    "Correspondence Address": "1394, 2ND FLOOR, LAKSHMI RESIDENCY, 21ST MAIN, HSR LAYOUT, SECTOR-1, BANGALORE, KARNATAKA, 560102",
    "Validity": "Dec 09, 2019 - Perpetual"
  },
  {
    "Name": "Dushyant Vipinchandra Acharya",
    "Registration No": "INA000021562",
    "E-mail": "dushyant.acharya_77@yahoo.co.in",
    "Telephone": "00919870128333",
    "Fax No": "00919870128333",
    "Address": "C/17,Veena Santoor, Near Pawan Dham, Borivali west, Mumbai, MUMBAI, MAHARASHTRA, 400092",
    "Contact Person": "Dushyant Acharya",
    "Correspondence Address": "C/17,Veena Santoor, Near Pawan Dham, Borivali west, Mumbai, MUMBAI, MAHARASHTRA, 400092",
    "Validity": "Dec 16, 2025 - Perpetual"
  },
  {
    "Name": "DV Investment Advisors LLP",
    "Registration No": "INA000016302",
    "E-mail": "operations@dvia.in",
    "Telephone": "0919819741338",
    "Fax No": "0919819741338",
    "Address": "2001, Sumer Trinity, Tower 1,, New Prabhadevi Road, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "Preet Deepak Shah",
    "Correspondence Address": "C 704 Trade World, Kamala Mills, Lower Parel, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Oct 26, 2021 - Perpetual"
  },
  {
    "Name": "Dymon Asia Capital Investment Adviser India Private Limited",
    "Registration No": "INA000019488",
    "E-mail": "dymmumbai@dymonasia.com",
    "Telephone": "91009821197376",
    "Fax No": "91009821197376",
    "Address": "HD-136, 1st Floor, Commerz II, CTS No 95 4 B 3 & 4 590,, Oberoi Garden City, Off Western Express Highway, Goregaon East, MUMBAI, MAHARASHTRA, 400063",
    "Contact Person": "Aafreen  Kashyap",
    "Correspondence Address": "814, 8th Floor, The Capital Building, Bandra Kurla Complex, Bandra (East), MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Aug 09, 2024 - Perpetual"
  },
  {
    "Name": "DYNAMIC EQUITIES PVT. LTD.",
    "Registration No": "INA300002022",
    "E-mail": "compliance@dynamiclevels.com",
    "Telephone": "9133 40099400",
    "Fax No": "9133 40099400",
    "Address": "TECHNOPOLIS BUILDING, 14TH. FLOOR, PLOT NO. BP 4, SECTOR-V,SALTLAKE,, KOLKATA, WEST BENGAL, 700091",
    "Contact Person": "MS. DOLLY DHAVLE",
    "Correspondence Address": "Technopolis Building, 14th. Floor, Plot No. BP 4, Sector-V,Saltlake, KOLKATA, WEST BENGAL, 700091",
    "Validity": "Jul 28, 2014 - Perpetual"
  },
  {
    "Name": "Dyota Solutions Private Limited",
    "Registration No": "INA000007216",
    "E-mail": "kaushik@dyotasolutions.com",
    "Address": "B-615, TWIN TOWER CHS, MANISH PARK PUMP HOUSE,, ANDHERI (EAST), CHAKAL, MIDC, MUMBAI, MAHARASHTRA, 400093",
    "Contact Person": "Kaushik Ramachandran",
    "Correspondence Address": "408, 3rd Main, HMT Layout, Anand Nagar, (Near Punjab National Bank), BANGALORE, KARNATAKA, 560024",
    "Validity": "Mar 06, 2017 - Perpetual"
  },
  {
    "Name": "Econ Ventures LLP",
    "Registration No": "INA000018948",
    "E-mail": "akshay@ecoventures.in",
    "Telephone": "022919167930044",
    "Fax No": "022919167930044",
    "Address": "Lovely Niwas Kishan Nagar 2 Road No 16 Wagle Estate Thane West Thane, THANE, MAHARASHTRA, 400604",
    "Contact Person": "Akshay  Gupta",
    "Correspondence Address": "Lovely Niwas Kishan Nagar 2 Road No 16 Wagle Estate Thane West Thane, THANE, MAHARASHTRA, 400604",
    "Validity": "Mar 06, 2024 - Perpetual"
  },
  {
    "Name": "Eiko Quantum Solutions Pvt Ltd",
    "Registration No": "INA000020819",
    "E-mail": "utkarshsomaiya@eikoquantum.com",
    "Telephone": "00919930425125",
    "Fax No": "00919930425125",
    "Address": "29,FLR-1,MINERVA, SEWREE BUNDER ROAD, Sewri, Mumbai, MUMBAI, MAHARASHTRA, 400015",
    "Contact Person": "Utkarsh Somaiya",
    "Correspondence Address": "29,FLR-1,MINERVA, SEWREE BUNDER ROAD, Sewri, Mumbai, MUMBAI, MAHARASHTRA, 400015",
    "Validity": "Aug 05, 2025 - Perpetual"
  },
  {
    "Name": "Ekvity Investment Advisors",
    "Registration No": "INA000006952",
    "E-mail": "info@finstream.in",
    "Address": "21, Vidya Villa, Bldg. No.2, , Old Nagardas Road, Andheri East, MUMBAI, MAHARASHTRA, 400069",
    "Contact Person": "Kharanshu Parikh",
    "Correspondence Address": "1320, 13th Floor Solaris One Sai Wadi Teli Galli, Andheri East, Mumbai, MUMBAI, MAHARASHTRA, 400069",
    "Validity": "Jan 13, 2017 - Perpetual"
  },
  {
    "Name": "Elbee Investment Advisors Private Limited",
    "Registration No": "INA300016969",
    "E-mail": "info@elbeeinvest.com",
    "Address": "19, R N Mukherjee Road, 2nd Floor, Eastern Building, KOLKATA, WEST BENGAL, 700001",
    "Contact Person": "Harsh  Agarwal",
    "Correspondence Address": "19, R N Mukherjee Road, 2nd Floor, Eastern Building, KOLKATA, WEST BENGAL, 700001",
    "Validity": "Jun 09, 2022 - Perpetual"
  },
  {
    "Name": "Elystar Investment Management Private Limited",
    "Registration No": "INA200017022",
    "E-mail": "compliance@elystarinvest.com",
    "Telephone": "00917304434100",
    "Fax No": "00917304434100",
    "Address": "Flat 1082, Level 8, Tower 1,, Prestige Ivy League, Kondapur,, HYDERABAD, TELANGANA, 500084",
    "Contact Person": "Manasa Vedula",
    "Correspondence Address": "91 Springboard Business Hub, 1st Floor & 2nd Floor, Kagalwala House, Behind Shaman Wheels, Kalina, Santacruz East, MUMBAI, MAHARASHTRA, 400098",
    "Validity": "Jun 14, 2022 - Perpetual"
  },
  {
    "Name": "Eminent Investments",
    "Registration No": "INA000013697",
    "E-mail": "eminent.investments@yahoo.com",
    "Address": "90-B, New Grain Mandi, KOTA, RAJASTHAN, 324007",
    "Contact Person": "RAMESH KHATUWALA",
    "Correspondence Address": "90-B, New Grain Mandi, KOTA, RAJASTHAN, 324007",
    "Validity": "Aug 02, 2019 - Perpetual"
  },
  {
    "Name": "Emkay Wealth Advisory Limited",
    "Registration No": "INA000013961",
    "E-mail": "compliance@emkayglobal.com",
    "Telephone": "9102266299299",
    "Fax No": "9102266299299",
    "Address": "7th Floor, The Ruby,, Senapati Bapat Marg, Dadar West,, MUMBAI, MAHARASHTRA, 400028",
    "Contact Person": "Sonal Jadhav",
    "Correspondence Address": "Paragon Center, C-06, Ground Floor, Pandurang Budhkar Marg, Worli, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Sep 16, 2019 - Perpetual"
  },
  {
    "Name": "ENSURE WEALTH INVESTMENT ADVISER",
    "Registration No": "INA100007718",
    "E-mail": "bimalcjha@yahoo.co.in",
    "Address": "Flat No-1003, Tower-A, The View, Sector-37D,, Ramprastha City, Gurugram, GURGAON, HARYANA, 122001",
    "Contact Person": "Bimal Jha",
    "Correspondence Address": "Flat No-1335 SF, Sector-7, , Housing Board Colony, Bahadurgarh, ROHTAK, HARYANA, 124507",
    "Validity": "May 23, 2017 - Perpetual"
  },
  {
    "Name": "ENTRUST FAMILY OFFICE INVESTMENT ADVISORS PVT. LTD.",
    "Registration No": "INA200004201",
    "E-mail": "compliance@entrust.co.in",
    "Telephone": "910228041479777",
    "Fax No": "910228041479777",
    "Address": "N0.24, 4th floor,1st Cross, Magrath Road, BANGALORE, KARNATAKA, 560025",
    "Contact Person": "Pradeep A N",
    "Correspondence Address": "NO.24, 4TH FLOOR, 1ST CROSS, MAGRATH ROAD, BEHIND GARUDA MALL, BANGALORE, KARNATAKA, 560025",
    "Validity": "Feb 16, 2016 - Perpetual"
  },
  {
    "Name": "Epifi Wealth Private Limited",
    "Registration No": "INA200015185",
    "E-mail": "compliance.wealth@epifi.com",
    "Telephone": "00919550764681",
    "Fax No": "00919550764681",
    "Address": "Salarpuria Sattva Knowledge Court,, Survey No.77, Plot no. 9, 06th Floor, Doddenakundi, KR Puram Hobli,, BANGALORE, KARNATAKA, 560048",
    "Contact Person": "MEKA  RAGHUVAMSI",
    "Correspondence Address": "No. 293, IndiQube Gamma, 154/172, Outer Ring Rd, Kadubeesanahalli, Bengaluru, Karnataka 560103, BANGALORE, KARNATAKA, 560103",
    "Validity": "Sep 24, 2020 - Perpetual"
  },
  {
    "Name": "Epsilon Money Investment Management Private Limited",
    "Registration No": "INA000018504",
    "E-mail": "compliance@arkcaps.com",
    "Telephone": "9102250054260",
    "Fax No": "9102250054260",
    "Address": "Unit No.101, 1st Floor, Simba Towers CTS No 67- A 1 Village, Dindoshi, Goregaon, MUMBAI, MAHARASHTRA, 400063",
    "Contact Person": "Diksha Vaish",
    "Correspondence Address": "Unit No.101, 1st Floor, Simba Towers CTS No 67- A 1 Village, Dindoshi, Goregaon, MUMBAI, MAHARASHTRA, 400063",
    "Validity": "Oct 19, 2023 - Perpetual"
  },
  {
    "Name": "Equal Identity Private Limited",
    "Registration No": "INA000018124",
    "E-mail": "abhishek.s@equal.in",
    "Telephone": "022229840842236",
    "Fax No": "022229840842236",
    "Address": "2nd floor The sky view sky view 10 SY No 83 1 Raidurg Hyderabad, HYDERABAD, TELANGANA, 500081",
    "Contact Person": "Abhishek Sambangi",
    "Correspondence Address": "2nd floor The sky view sky view 10 SY No 83 1 Raidurg Hyderabad, HYDERABAD, TELANGANA, 500081",
    "Validity": "Jun 27, 2023 - Perpetual"
  },
  {
    "Name": "EQUENTIS WEALTH ADVISORY SERVICES LIMITED",
    "Registration No": "INA000003874",
    "E-mail": "compliance@equentis.com",
    "Telephone": "919152000163",
    "Fax No": "919152000163",
    "Address": "A-603, Marathon Futurex, Mafatlal Mills Compound,, N. M. Joshi Marg, Lower Parel,, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "Rakesh Gupta",
    "Correspondence Address": "A-603, Marathon Futurex, Mafatlal Mills Compound, N. M. Joshi Marg, Lower Parel, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Dec 08, 2015 - Perpetual"
  },
  {
    "Name": "Equichain Wealth Advisors",
    "Registration No": "INA000016472",
    "E-mail": "nikunj200531@gmail.com",
    "Address": "A-802, SUKIRTI TOWER, NEAR PRERNATHIRTH -2 BUNGLOWS, OPP SREYAS PARK SOCIETY, SATELLLITE, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "Nikunj Vithlani",
    "Correspondence Address": "A-802, SUKIRTI TOWER, NEAR PRERNATHIRTH -2 BUNGLOWS, OPP SREYAS PARK SOCIETY, SATELLLITE, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Dec 20, 2021 - Perpetual"
  },
  {
    "Name": "Equisense Advisors Private Limited",
    "Registration No": "INA000019840",
    "E-mail": "india.nishant@gmail.com",
    "Telephone": "00919926855365",
    "Fax No": "00919926855365",
    "Address": "140, Sai Kripa Colony, Opp Mahalaxmi Nagar, Vijay Nagar, INDORE, MADHYA PRADESH, 452010",
    "Contact Person": "Nishant Joshi",
    "Correspondence Address": "140, Sai Kripa Colony, Opp Mahalaxmi Nagar, Vijay Nagar, INDORE, MADHYA PRADESH, 452010",
    "Validity": "Jan 30, 2025 - Perpetual"
  },
  {
    "Name": "EQUITY99",
    "Registration No": "INA000005358",
    "E-mail": "profittrack@rediff.com",
    "Telephone": "07554204534",
    "Fax No": "07554204534",
    "Address": "A wing, 912 Dalamal Tower, 9th Floor,, Free Press Journal Marg, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Correspondence Address": "301, Sahyog Towers, E-8 Extension, Trilanga, BHOPAL, MADHYA PRADESH, 462023",
    "Validity": "Aug 16, 2016 - Perpetual"
  },
  {
    "Name": "EQUITYPANDIT FINANCIAL SERVICES PRIVATE LIMITED",
    "Registration No": "INA000006688",
    "E-mail": "ABHISHEK.PARAKH@EQUITYPANDIT.COM",
    "Address": "A-488, VIDHYUT NAGAR,, AJMER ROAD, JAIPUR, RAJASTHAN, 302019",
    "Contact Person": "ABHISHEK PARAKH",
    "Correspondence Address": "305, Trinnity Business Park, LP Savani Road, SURAT, GUJARAT, 395009",
    "Validity": "Nov 15, 2016 - Perpetual"
  },
  {
    "Name": "Essential Investment Managers Private Limited",
    "Registration No": "INA000017912",
    "E-mail": "compliance@essentialadviser.com",
    "Telephone": "00918879543021",
    "Fax No": "00918879543021",
    "Address": "No. 51, 3rd Floor, Le Parc Richmonde, Richmond Road,, Shantala Nagar, Bangalore, Karnataka, India, 560025, BANGALORE, KARNATAKA, 560025",
    "Contact Person": "Abhishek Jadon",
    "Correspondence Address": "No. 51, 3rd Floor, Le Parc Richmonde, Richmond Road, Shantala Nagar, Bangalore, Karnataka, India, 560025, BANGALORE, KARNATAKA, 560025",
    "Validity": "Apr 24, 2023 - Perpetual"
  },
  {
    "Name": "Estee Advisors Private Limited",
    "Registration No": "INA000016463",
    "E-mail": "ebo@esteeadvisors.com",
    "Address": "PO5-01A, PO5-01B, PO5-01C, 5th Floor, Tower A,, WTC, Block 51, Road 5E, Zone 5,Gift City, GANDHINAGAR, GUJARAT, 382355",
    "Contact Person": "Keshav Kumar",
    "Correspondence Address": "PO5-01A, PO5-01B, PO5-01C, 5th Floor, Tower A, WTC, Block 51, Road 5E, Zone 5,Gift City, GANDHINAGAR, GUJARAT, 382355",
    "Validity": "Dec 17, 2021 - Perpetual"
  },
  {
    "Name": "ETHINVEST ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000016010",
    "E-mail": "owaisgore@gmail.com",
    "Address": "03 turner road, 6th floor, CST No. F1, Above Rel. Office,, Bandra West,, MUMBAI, MAHARASHTRA, 400050",
    "Contact Person": "Owais Gore",
    "Correspondence Address": "03 turner road, 6th floor, CST No. F1, Above Rel. Office, Bandra West, MUMBAI, MAHARASHTRA, 400050",
    "Validity": "Jul 28, 2021 - Perpetual"
  },
  {
    "Name": "EUREKA STOCK & SHARE BROKING SERVICES LIMITED",
    "Registration No": "INA000021137",
    "E-mail": "debomita@eurekasec.com",
    "Telephone": "0091983600908",
    "Fax No": "0091983600908",
    "Address": "1101, Merlin Infinite, DN 51, 11th Floor, Salt Lake, Sector 5, Kolkata,West Bengal, KOLKATA, WEST BENGAL, 700091",
    "Contact Person": "Debomita Maity",
    "Correspondence Address": "1101, Merlin Infinite, DN 51, 11th Floor, Salt Lake, Sector 5, Kolkata,West Bengal, KOLKATA, WEST BENGAL, 700091",
    "Validity": "Oct 08, 2025 - Perpetual"
  },
  {
    "Name": "EVAREAP INVESTMENT ADVISORS LLP",
    "Registration No": "INA000017383",
    "E-mail": "infoevareap@gmail.com",
    "Address": "1 FOURTH STREET, GOPALAPURAM, CHENNAI, TAMIL NADU, 600086",
    "Contact Person": "Arvind Bharadwaj",
    "Correspondence Address": "1 FOURTH STREET, GOPALAPURAM, CHENNAI, TAMIL NADU, 600086",
    "Validity": "Nov 22, 2022 - Perpetual"
  },
  {
    "Name": "Everest Creators Pvt Ltd",
    "Registration No": "INA000020855",
    "E-mail": "tapy17@gmail.com",
    "Telephone": "00919898098600",
    "Fax No": "00919898098600",
    "Address": "2nd Floor, N.B.C.C House, Opp. Ambawadi, Ahemdabad, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "Tapan Jani",
    "Correspondence Address": "2nd Floor, N.B.C.C House, Opp. Ambawadi, Ahemdabad, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Aug 07, 2025 - Perpetual"
  },
  {
    "Name": "FEE ONLY INVESTMENT ADVISERS LLP",
    "Registration No": "INA000014836",
    "E-mail": "harsh@harshroongta.com",
    "Address": "701/702, Madhava Building, E Block, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "HARSH ROONGTA",
    "Correspondence Address": "702 Balarama Building E Block, Bandra Kurla Complex Bandra east, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Jul 21, 2020 - Perpetual"
  },
  {
    "Name": "FERMI 325 INVESTMENT ADVISER",
    "Registration No": "INA000015543",
    "E-mail": "sanket.rathod@fermi325.com",
    "Telephone": "9102025868705",
    "Fax No": "9102025868705",
    "Address": "Flat No 4, Venu Apartment , opp to vidhya bhawan school, Model Colony, PUNE, MAHARASHTRA, 411016",
    "Contact Person": "SANKET RATHOD",
    "Correspondence Address": "Flat No 4, Venu Apartment , opp to vidhya bhawan school, Model Colony, PUNE, MAHARASHTRA, 411016",
    "Validity": "Dec 07, 2020 - Perpetual"
  },
  {
    "Name": "FIN2RESEARCH INVESTMENT ADVISOR PRIVATE LIMITED",
    "Registration No": "INA000018425",
    "E-mail": "raushanstar02@gmail.com",
    "Telephone": "91009999173613",
    "Fax No": "91009999173613",
    "Address": "PLOT NO A 2ND FLOOR STREET NO BUNGLOW ROAD, Malka Ganj Delhi North Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110007",
    "Contact Person": "Raushan Kumar",
    "Correspondence Address": "PLOT NO A 2ND FLOOR STREET NO BUNGLOW ROAD, Malka Ganj Delhi North Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110007",
    "Validity": "Sep 05, 2023 - Perpetual"
  },
  {
    "Name": "Finance First Advisers",
    "Registration No": "INA000013527",
    "E-mail": "adviser@financefirst.in",
    "Telephone": "919881710432",
    "Fax No": "919881710432",
    "Address": "H 502, Maestros, Opp Salunke Vihar, Wanawadi, PUNE, MAHARASHTRA, 411040",
    "Contact Person": "Nandlal Bhatkar",
    "Correspondence Address": "H 502, Maestros, Opp Salunke Vihar, Wanawadi, PUNE, MAHARASHTRA, 411040",
    "Validity": "Jun 19, 2019 - Perpetual"
  },
  {
    "Name": "FINANCIAL INDEPENDENCE SERVICES",
    "Registration No": "INA100008939",
    "E-mail": "ankit71187@gmail.com",
    "Address": "1, 239, Ground floor Subhash Nagar, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110027",
    "Contact Person": "ANKIT CHOUDHARY",
    "Correspondence Address": "1, 239, Ground floor Subhash Nagar, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110027",
    "Validity": "Nov 10, 2017 - Perpetual"
  },
  {
    "Name": "FINATWORK INVESTMENT ADVISOR",
    "Registration No": "INA200002387",
    "E-mail": "saurabh.bansal@finatwork.com",
    "Telephone": "8041227738",
    "Fax No": "8041227738",
    "Address": "G-1, EBONY, NO.7/1-2, HOSUR ROAD,, LANGFORD TOWN, BANGALORE, KARNATAKA, 560025",
    "Contact Person": "SAURABH BANSAL",
    "Correspondence Address": "G-1, EBONY, NO.7/1-2, HOSUR ROAD, LANGFORD TOWN, BANGALORE, KARNATAKA, 560025",
    "Validity": "Nov 12, 2014 - Perpetual"
  },
  {
    "Name": "FINCORE ADVISORY SERVICES PVT LTD",
    "Registration No": "INA000015914",
    "E-mail": "jyotibaborate@gmail.com",
    "Address": "101 B, FARRO ABODE,, LAZRUS ROAD, CHARAI,, THANE, MAHARASHTRA, 400601",
    "Contact Person": "JYOTIBA BORATE",
    "Correspondence Address": "Office No. 310, Bhairaav Milestone, 3rd Floor, Road No. 16, Wagle Estate, MIDC, THANE, MAHARASHTRA, 400604",
    "Validity": "Jul 02, 2021 - Perpetual"
  },
  {
    "Name": "Findoc Investmart Private Limited",
    "Registration No": "INA000019637",
    "E-mail": "ns@myfindoc.com",
    "Telephone": "00919781848000",
    "Fax No": "00919781848000",
    "Address": "1210 1211 1212 1213,1213A,  Exchange Plaza, Near Mercury Hotel,, Opposite WTC Tower, Gift City, GANDHINAGAR, GUJARAT, 382355",
    "Contact Person": "Nitin Shahi",
    "Correspondence Address": "4th Floor, Kartar Bhawan,  Near PAU Gate No.01, Ferozepur Road, LUDHIANA, PUNJAB, 141001",
    "Validity": "Oct 21, 2024 - Perpetual"
  },
  {
    "Name": "Finfam Investment Advisors Private Limited",
    "Registration No": "INA000018036",
    "E-mail": "compliance@thefinancialist.co",
    "Telephone": "918779728779",
    "Fax No": "918779728779",
    "Address": "A -1201, Silver Leaf CHS, Akruli Road, Kandivali East, Mumbai, MUMBAI, MAHARASHTRA, 400101",
    "Contact Person": "Priyank Shah",
    "Correspondence Address": "A -1201, Silver Leaf CHS, Akruli Road, Kandivali East, Mumbai, MUMBAI, MAHARASHTRA, 400101",
    "Validity": "Aug 05, 2025 - Perpetual"
  },
  {
    "Name": "Finfix Research and Analytics Private Limited",
    "Registration No": "INA000020378",
    "E-mail": "prableen.bajpai@finfix.co.in",
    "Telephone": "00919501777447",
    "Fax No": "00919501777447",
    "Address": "H NO. 6365A, RAJEEV VIHAR, MANIMAJRA, Chandigarh, CHANDIGARH, CHANDIGARH, 160101",
    "Contact Person": "PRABLEEN BAJPAI",
    "Correspondence Address": "D/1/227,SECTOR-D POCKET-1, SUSHANT GOLF CITY, LUCKNOW, UTTAR PRADESH, 226030",
    "Validity": "Jun 24, 2025 - Perpetual"
  },
  {
    "Name": "FINIDEAS INVESTMENT ADVISOR PRIVATE LIMITED",
    "Registration No": "INA000018045",
    "E-mail": "udipth.talera@finideas.com",
    "Telephone": "912619377745459",
    "Fax No": "912619377745459",
    "Address": "1002 LUXURIA BUSINESS HUB, , DUMAS ROAD, NEW MAGDALLA, SURAT, GUJARAT, 395007",
    "Contact Person": "UDIPTH TALERA",
    "Correspondence Address": "1002 LUXURIA BUSINESS HUB, , DUMAS ROAD, NEW MAGDALLA, SURAT, GUJARAT, 395007",
    "Validity": "Jun 02, 2023 - Perpetual"
  },
  {
    "Name": "FinIntent Investment Adviser",
    "Registration No": "INA000010919",
    "E-mail": "ravi@finintent.com",
    "Address": "P 1701, 17th floor, Marina Enclave,, Jan Kalyan Nagar, Malad west,, MUMBAI, MAHARASHTRA, 400095",
    "Contact Person": "Ravi  Natarajan",
    "Correspondence Address": "BloomDesk 2.0 204, Neelkanth, CHS, S.V.Road, Borivali West, MUMBAI, MAHARASHTRA, 400092",
    "Validity": "Jun 25, 2018 - Perpetual"
  },
  {
    "Name": "Finkasturi Nivesh Private Limited",
    "Registration No": "INA000014128",
    "E-mail": "care@finkasturi.com",
    "Telephone": "00919833999267",
    "Fax No": "00919833999267",
    "Address": "302, Sunset Heights, Kanjurbhatwadi, Eknath Hatiskar Marg, Prabhadevi, Mumbai, MUMBAI, MAHARASHTRA, 400030",
    "Contact Person": "Nirakar Pradhan",
    "Correspondence Address": "302, Sunset Heights, Kanjurbhatwadi, Eknath Hatiskar Marg, Prabhadevi, Mumbai, MUMBAI, MAHARASHTRA, 400030",
    "Validity": "Nov 07, 2025 - Perpetual"
  },
  {
    "Name": "FINMO INVESTMENTS ADVISORS PRIVATE LIMITED",
    "Registration No": "INA200014900",
    "E-mail": "sumanta@wealthvruddhi.com",
    "Address": "New 05, Old 123/5E, 6th Main Road,, Hosakerahalli, BSK III Stage,, BANGALORE, KARNATAKA, 560085",
    "Contact Person": "SUMANTA  RAY",
    "Correspondence Address": "New 05, Old 123/5E, 6th Main Road, Hosakerahalli, BSK III Stage, BANGALORE, KARNATAKA, 560085",
    "Validity": "Aug 04, 2020 - Perpetual"
  },
  {
    "Name": "FINNOVATE FINANCIAL SERVICES PVT LTD",
    "Registration No": "INA000013518",
    "E-mail": "nehal.mota@finnovate.in",
    "Address": "UNIT NO. 703, 7th FLOOR, THE SUMMIT BUSINESS BAY, OFF ANDHERI KURLA ROAD, PVR CINEMAS ANDHERI EAST, MUMBAI, MAHARASHTRA, 400093",
    "Contact Person": "NEHAL MOTA",
    "Correspondence Address": "UNIT NO. 703, 7th FLOOR, THE SUMMIT BUSINESS BAY, OFF ANDHERI KURLA ROAD, PVR CINEMAS ANDHERI EAST, MUMBAI, MAHARASHTRA, 400093",
    "Validity": "Jun 19, 2019 - Perpetual"
  },
  {
    "Name": "FINOFIN INSURANCE &  ADVISORY SERVICES PRIVATE LIMITED",
    "Registration No": "INA000020679",
    "E-mail": "ccofsl@shoonya.com",
    "Telephone": "00919888874686",
    "Fax No": "00919888874686",
    "Address": "FINVASIA CENTRE, D -179, Industrial Area, Sector 74 phase 8B SAS Nagar Mohali, Punjab, MOHALI, PUNJAB, 160055",
    "Contact Person": "Gurjot singh",
    "Correspondence Address": "FINVASIA CENTRE, D -179, Industrial Area, Sector 74 phase 8B SAS Nagar Mohali, Punjab, MOHALI, PUNJAB, 160055",
    "Validity": "Jul 18, 2025 - Perpetual"
  },
  {
    "Name": "Finology Ventures Private Limited",
    "Registration No": "INA000012218",
    "E-mail": "Compliance@finology.in",
    "Telephone": "917880104817",
    "Fax No": "917880104817",
    "Address": "402-405, 4th Floor, Avinash One, VIP Road, Opposite to Magneto Mall,, RAIPUR, CHHATTISGARH, 492001",
    "Contact Person": "pranjal Kamra",
    "Correspondence Address": "402-405, 4th Floor, Avinash One, VIP Road, Opposite to Magneto Mall, RAIPUR, CHHATTISGARH, 492001",
    "Validity": "Dec 17, 2018 - Perpetual"
  },
  {
    "Name": "FINOME TECHNOLOGIES PRIVATE LIMITED",
    "Registration No": "INA000018373",
    "E-mail": "chanpreet515@gmail.com",
    "Telephone": "051010965651",
    "Fax No": "051010965651",
    "Address": "12 THIRD FLOOR, LAD WORKSPACES, , OUTER RING ROAD BELLANDUR, BANGALORE, KARNATAKA, 560103",
    "Contact Person": "Chanpreet Singh",
    "Correspondence Address": "12 THIRD FLOOR, LAD WORKSPACES, , OUTER RING ROAD BELLANDUR, BANGALORE, KARNATAKA, 560103",
    "Validity": "Aug 17, 2023 - Perpetual"
  },
  {
    "Name": "FINSHARPE PRIVATE LIMITED",
    "Registration No": "INA000018489",
    "E-mail": "rohan@finsharpe.com",
    "Telephone": "91009923411966",
    "Fax No": "91009923411966",
    "Address": "Office No. 506, S. No. 128, SEASONS BUSINESS SQUARE, AUNDH, HAVELI,, PUNE, MAHARASHTRA, 411007",
    "Contact Person": "Rohan  Borawake",
    "Correspondence Address": "Office No. 506, S. No. 128, SEASONS BUSINESS SQUARE, AUNDH, HAVELI, PUNE, MAHARASHTRA, 411007",
    "Validity": "Oct 13, 2023 - Perpetual"
  },
  {
    "Name": "Finshield Investment Advisors",
    "Registration No": "INA200011268",
    "E-mail": "rajiv@finshieldadvisors.com",
    "Telephone": "91008660963623",
    "Fax No": "91008660963623",
    "Address": "No. 443, 3rd Floor,  F Block, 13th Cross, 18th Main Road,Sahakarnagar, BANGALORE, KARNATAKA, 560092",
    "Contact Person": "Rajiv Radhakrishnan",
    "Correspondence Address": "No. 443, 3rd Floor,  F Block, 13th Cross, 18th Main Road,Sahakarnagar, BANGALORE, KARNATAKA, 560092",
    "Validity": "Sep 27, 2023 - Perpetual"
  },
  {
    "Name": "Fintoo Wealth Private Limited",
    "Registration No": "INA000020031",
    "Validity": "Mar 26, 2025 - Perpetual"
  },
  {
    "Name": "Fintrek Research Advisors Private Limited",
    "Registration No": "INA000019284",
    "E-mail": "varun@fintrek.co.in",
    "Telephone": "00918879989687",
    "Fax No": "00918879989687",
    "Address": "A wing, 5th Floor, 501, Rustomjee Central Park,, Andheri Kurla Road, Opp. Kanakia Wall Street, Andheri East, MUMBAI, MAHARASHTRA, 400059",
    "Contact Person": "Varun Mittal",
    "Correspondence Address": "A wing, 5th Floor, 501, Rustomjee Central Park, Andheri Kurla Road, Opp. Kanakia Wall Street, Andheri East, MUMBAI, MAHARASHTRA, 400059",
    "Validity": "Jun 21, 2024 - Perpetual"
  },
  {
    "Name": "Finuture Technologies Private Limited",
    "Registration No": "INA000019521",
    "E-mail": "munmun@finuture.in",
    "Telephone": "00009821676390",
    "Fax No": "00009821676390",
    "Address": "LOOR 2, PLOT 264/265, VASWANI CHAMBERS, DR ANNIE BESANT ROAD, WORLI COLONY, MUMBAI, MUMBAI, MAHARASHTRA, 400030",
    "Contact Person": "Munmun Desai",
    "Correspondence Address": "01-126, We Work Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur Village Varthur Hobli, Bengaluru, Karnataka, BANGALORE, KARNATAKA, 560103",
    "Validity": "Sep 11, 2024 - Perpetual"
  },
  {
    "Name": "Finvin Financial Planners",
    "Registration No": "INA000015534",
    "E-mail": "melvin@finvin.in",
    "Address": "Chakkungal House Muthalakodam PO Near Stadium, Thodupuzha Kerala, KOCHI, KERALA, 685605",
    "Contact Person": "Melvin Joseph",
    "Correspondence Address": "Chakkungal House, Muthalakodam PO, Near Stadium, Thodupuzha, Kerala, KOCHI, KERALA, 685605",
    "Validity": "Dec 03, 2020 - Perpetual"
  },
  {
    "Name": "FINWIZARD TECHNOLOGY PVT. LTD.",
    "Registration No": "INA200005323",
    "Validity": "Aug 11, 2016 - Perpetual"
  },
  {
    "Name": "Flameback Capital Private Limited",
    "Registration No": "INA200013798",
    "E-mail": "kishan@flamebackcapital.com",
    "Address": "61, MKK Road, deviah park, Srirampuram, BANGALORE, KARNATAKA, 560021",
    "Contact Person": "Kishan Nair",
    "Correspondence Address": "61, MKK Road, deviah park, Srirampuram, BANGALORE, KARNATAKA, 560021",
    "Validity": "Aug 19, 2019 - Perpetual"
  },
  {
    "Name": "Fluid Fincap Private Limited",
    "Registration No": "INA000018762",
    "E-mail": "aniket@liquide.life",
    "Telephone": "91007718957000",
    "Fax No": "91007718957000",
    "Address": "Obeya Signal, Ground Floor, Embassy Signet, Embassy Tech Square, Kaverappa Layout, Kad.besanahall,, BANGALORE, KARNATAKA, 560103",
    "Contact Person": "Aniket Shirke",
    "Correspondence Address": "Obeya Signal, Ground Floor, Embassy Signet, Embassy Tech Square, Kaverappa Layout, Kad.besanahall, BANGALORE, KARNATAKA, 560103",
    "Validity": "Jan 16, 2024 - Perpetual"
  },
  {
    "Name": "FORT CAPITAL INVESTMENT ADVISORY PRIVATE LIMITED",
    "Registration No": "INA000002751",
    "Validity": "Mar 03, 2015 - Perpetual"
  },
  {
    "Name": "Fort Investments",
    "Registration No": "INA000017532",
    "E-mail": "ketuls@gmail.com",
    "Address": "D 226/227, Kalvibid, Near Water Tank, Bhavnagar, Gujarat, 364002, BHAVNAGAR, GUJARAT, 364002",
    "Contact Person": "Ketul Sakhpara",
    "Correspondence Address": "D 226/227, Kalvibid, Near Water Tank, Bhavnagar, Gujarat, 364002, BHAVNAGAR, GUJARAT, 364002",
    "Validity": "Dec 22, 2022 - Perpetual"
  },
  {
    "Name": "FRR SHARES AND SECURITIES LIMITED",
    "Registration No": "INA000008668",
    "E-mail": "NITIN.LAKHOTIA@FRRSHARES.COM",
    "Address": "205, EMBASSY CENTRE, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Contact Person": "NITIN  LAKHOTIA",
    "Correspondence Address": "103/C, MITTAL TOWER, NARIMAN POINT, MUMBAI, MAHARASHTRA, 400021",
    "Validity": "Oct 26, 2017 - Perpetual"
  },
  {
    "Name": "Fund Navigator Financial Advisers",
    "Registration No": "INA000010168",
    "E-mail": "rajeshparaouha@gmail.com",
    "Address": "422 RAFAEL TOWER 8 2 OLD PLASIA, INDORE MP, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "Rajesh Parauha",
    "Correspondence Address": "422 RAFAEL TOWER 8 2 OLD PLASIA, INDORE MP, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Apr 02, 2018 - Perpetual"
  },
  {
    "Name": "FUNDWISERS",
    "Registration No": "INA000012713",
    "E-mail": "akoyani@gmail.com",
    "Address": "JK COMPLEX, FIRST FLOOR DIWAN PARA-2, RAJKOT, GUJARAT, 360001",
    "Contact Person": "ASHOKKUMAR KOYANI",
    "Correspondence Address": "JK COMPLEX, 1ST FLOOR, DIWANPARA-2, RAJKOT, GUJARAT, 360003",
    "Validity": "Mar 14, 2019 - Perpetual"
  },
  {
    "Name": "FW Fintech Private Limited",
    "Registration No": "INA000019415",
    "E-mail": "compliance@noveltywealth.in",
    "Telephone": "00917976763434",
    "Fax No": "00917976763434",
    "Address": "P NO 224 3RD FL RANKA, JUNCTION 80/3 VIJINAPUR, Krishnarajapuram R S, Bangalore North, BANGALORE, KARNATAKA, 560016",
    "Contact Person": "Naveen Changoiwala",
    "Correspondence Address": "P NO 224 3RD FL RANKA, JUNCTION 80/3 VIJINAPUR, Krishnarajapuram R S, Bangalore North, BANGALORE, KARNATAKA, 560016",
    "Validity": "Jul 22, 2024 - Perpetual"
  },
  {
    "Name": "G KANNAN PROPRIETOR HAWKEYE TRADING FINANCE ACADEMY",
    "Registration No": "INA000019628",
    "E-mail": "GKANNAN93232@REDIFFMAIL.COM",
    "Telephone": "919176094128",
    "Address": "RAVILLA TOWERS, SENATE SPACE, W BLOCK,, W-32/117, PLOT C-10, 3 RD AVENUE, ANNA NAGAR, CHENNAI, TAMIL NADU, 600040",
    "Contact Person": "GOPALAKRISHNAN KANNAN",
    "Correspondence Address": "RAVILLA TOWERS, SENATE SPACE, W BLOCK, W-32/117, PLOT C-10, 3 RD AVENUE, ANNA NAGAR, CHENNAI, TAMIL NADU, 600040",
    "Validity": "Oct 21, 2024 - Perpetual"
  },
  {
    "Name": "GAGAN GUPTA PROPRIETOR ASIAN RESEARCH HOUSE",
    "Registration No": "INA000004732",
    "E-mail": "gagangupta487@gmail.com",
    "Address": "C-18, HIG COLONY, ABOVE BANK OF BARODA, NEAR ATAL DWAR, INDORE, MADHYA PRADESH, 452001",
    "Correspondence Address": "C-18, HIG Colony, Above Bank of Baroda, Near Atal Dwar, INDORE, MADHYA PRADESH, 452001",
    "Validity": "May 16, 2016 - Perpetual"
  },
  {
    "Name": "Ganesh Jayaraman",
    "Registration No": "INA200016281",
    "E-mail": "ganeshjayaraman.chennai@gmail.com",
    "Address": "1 Prashanti Nilayam West Mada Street, Srinagar Colony Saidapet, CHENNAI, TAMIL NADU, 600015",
    "Contact Person": "Ganesh Jayaraman",
    "Correspondence Address": "1 Prashanti Nilayam West Mada Street, Srinagar Colony Saidapet, CHENNAI, TAMIL NADU, 600015",
    "Validity": "Oct 25, 2021 - Perpetual"
  },
  {
    "Name": "Gaurav Agrawal",
    "Registration No": "INA000018814",
    "E-mail": "gaurav.agrawal47@gmail.com",
    "Telephone": "918860280945",
    "Address": "W2c-064, Wellington Estate,, DLF phase 5, Galleria DLF-IV,, GURGAON, HARYANA, 122009",
    "Contact Person": "Gaurav Agrawal",
    "Correspondence Address": "W2c-064, Wellington Estate, DLF phase 5, Galleria DLF-IV, GURGAON, HARYANA, 122009",
    "Validity": "Jan 23, 2024 - Perpetual"
  },
  {
    "Name": "GAURAV AGRAWAL PROPRIETOR PROFIT VISTA FINANCIAL RESEARCH",
    "Registration No": "INA000002678",
    "E-mail": "profitvista.info@gmail.com",
    "Telephone": "731000000",
    "Fax No": "731000000",
    "Address": "401 SHAGUN ARCADE, VIJAY NAGAR SQUARE, INDORE, MADHYA PRADESH, 452010",
    "Contact Person": "GAURAV AGRAWAL",
    "Correspondence Address": "301, Sapphire House, 319 Tower Chouraha, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Feb 19, 2015 - Perpetual"
  },
  {
    "Name": "GAURAV GOEL",
    "Registration No": "INA100014426",
    "E-mail": "gauravgoel1976@gmail.com",
    "Address": "C-304 Krishna Apra Reidency, Sector 61, NOIDA, UTTAR PRADESH, 201307",
    "Contact Person": "Gaurav Goel",
    "Correspondence Address": "C-304 Krishna Apra Reidency, Sector 61, NOIDA, UTTAR PRADESH, 201307",
    "Validity": "Feb 03, 2020 - Perpetual"
  },
  {
    "Name": "GAURAV JAIN",
    "Registration No": "INA300016862",
    "E-mail": "connectgauravjain@gmail.com",
    "Telephone": "919706000101",
    "Address": "7TH FLOOR, MAINAAK TOWERS, CHRISTAN BASTI, G.S ROAD, GUWAHATI, ASSAM, 781005",
    "Contact Person": "GAURAV JAIN",
    "Correspondence Address": "7TH FLOOR, MAINAAK TOWERS, CHRISTAN BASTI, G.S ROAD, GUWAHATI, ASSAM, 781005",
    "Validity": "May 14, 2022 - Perpetual"
  },
  {
    "Name": "GAURAV MASHRUWALA",
    "Registration No": "INA000004013",
    "E-mail": "gmashruwala@gmail.com",
    "Telephone": "2222630686",
    "Fax No": "2222630686",
    "Address": "14-C, CRYSTAL,, 36 ALTAMOUNT ROAD,, MUMBAI, MAHARASHTRA, 400026",
    "Contact Person": "GAURAV MASHRUWALA",
    "Correspondence Address": "14-C, Crystal, 36 Altamount Road, MUMBAI, MAHARASHTRA, 400026",
    "Validity": "Jan 14, 2016 - Perpetual"
  },
  {
    "Name": "GAURI ANAND",
    "Registration No": "INA000017471",
    "E-mail": "gaurianand212@yahoo.com",
    "Telephone": "002046022562",
    "Fax No": "002046022562",
    "Address": "J, H. No. 504, RIVER RESIDENCY, GATE 90,DEHU ALANDI ROAD,CHIKALI, PUNE, MAHARASHTRA, 412114",
    "Contact Person": "GAURI ANAND",
    "Correspondence Address": "FLAT NO. C 1232, 12TH FLOOR, FIVE GARDENS 2 PHASE, RAHATANI ROAD, PUNE, MAHARASHTRA, 411017",
    "Validity": "Dec 20, 2022 - Perpetual"
  },
  {
    "Name": "GEOJIT FINANCIAL SERVICES LIMITED",
    "Registration No": "INA200002817",
    "E-mail": "jeevan@geojit.com",
    "Telephone": "04842901000",
    "Fax No": "04842901000",
    "Address": "34/659-P, CIVIL LINE ROAD, PADIVATTOM,, KOCHI, KERALA, 682024",
    "Contact Person": "JEEVAN K C",
    "Correspondence Address": "34/659-P, Civil Line Road, Padivattom, KOCHI, KERALA, 682024",
    "Validity": "Mar 20, 2015 - Perpetual"
  },
  {
    "Name": "GEPL INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000002744",
    "E-mail": "advisors@geplcapital.com",
    "Telephone": "2266142751",
    "Fax No": "2266142751",
    "Address": "C-14, DHANRAJ MAHAL,C.S.M MARG,, COLABA,, MUMBAI, MAHARASHTRA, 400001",
    "Contact Person": "ABHISHEK A MISTRY",
    "Correspondence Address": "C-14, Dhanraj Mahal,C.S.M Marg, Colaba, MUMBAI, MAHARASHTRA, 400001",
    "Validity": "Mar 03, 2015 - Perpetual"
  },
  {
    "Name": "Ginteja Fintech Private Limited",
    "Registration No": "INA300016738",
    "E-mail": "info@ginteja.com",
    "Address": "Microsec Block, Azimganj House, 2nd Floor, 7, Abanindra Nath Thakur Sarani, KOLKATA, WEST BENGAL, 700017",
    "Contact Person": "Keshav Beriwala",
    "Correspondence Address": "Microsec Block, Azimganj House, 2nd Floor, 7, Abanindra Nath Thakur Sarani, KOLKATA, WEST BENGAL, 700017",
    "Validity": "Mar 02, 2022 - Perpetual"
  },
  {
    "Name": "Girish Ganaraj Proprietor of Finwise Financial Planners and Advisors",
    "Registration No": "INA000018850",
    "E-mail": "girishg.ria@finwise.in",
    "Telephone": "00919820818007",
    "Fax No": "00919820818007",
    "Address": "141-A, Centrum Tower, Barkat Ali Road,, Wadala East, MUMBAI, MAHARASHTRA, 400037",
    "Contact Person": "Girish Ganaraj",
    "Correspondence Address": "141-A, Centrum Tower, Barkat Ali Road, Wadala East, MUMBAI, MAHARASHTRA, 400037",
    "Validity": "Feb 09, 2024 - Perpetual"
  },
  {
    "Name": "GODREJ VENTURES AND INVESTMENT ADVISERS PRIVATE LIMITED",
    "Registration No": "INA000010380",
    "Validity": "Apr 19, 2018 - Perpetual"
  },
  {
    "Name": "GOELA FINANCIAL SERVICES LLP",
    "Registration No": "INA000020952",
    "E-mail": "adityagoela@gmail.com",
    "Telephone": "00919999455868",
    "Fax No": "00919999455868",
    "Address": "A-197, 3rd Floor, Sector-92, Maharishi Nagar, Gautam Buddha Nagar, NOIDA, UTTAR PRADESH, 201304",
    "Contact Person": "Aditya Goela",
    "Correspondence Address": "A-197, 3rd Floor, Sector-92, Maharishi Nagar, Gautam Buddha Nagar, NOIDA, UTTAR PRADESH, 201304",
    "Validity": "Aug 21, 2025 - Perpetual"
  },
  {
    "Name": "Goldmine Assets Private Limited",
    "Registration No": "INA000018054",
    "E-mail": "goldmineassets@goldmine.co.in",
    "Telephone": "07926688213",
    "Fax No": "07926688213",
    "Address": "Block A 209, Second Floor, Navratna Corporate Park,, Ambali Bopal Road, Jayantilal Park,, AHMEDABAD, GUJARAT, 380058",
    "Contact Person": "Samir Gandhi",
    "Correspondence Address": "Block A 209, Second Floor, Navratna Corporate Park, Ambali Bopal Road, Jayantilal Park, AHMEDABAD, GUJARAT, 380058",
    "Validity": "Jun 02, 2023 - Perpetual"
  },
  {
    "Name": "GOLDVEST CAPITAL SERVICES PRIVATE LIMITED",
    "Registration No": "INA000018902",
    "E-mail": "amar@goldvest.in",
    "Telephone": "91009908004646",
    "Fax No": "91009908004646",
    "Address": "Plot No.26, Road No-3, Site- II , Film Nagr, Jubilee Hills,, HYDERABAD, TELANGANA, 500096",
    "Contact Person": "Amarendra Hanumanula",
    "Correspondence Address": "Plot No.26, Road No-3, Site- II , Film Nagr, Jubilee Hills, HYDERABAD, TELANGANA, 500096",
    "Validity": "Feb 29, 2024 - Perpetual"
  },
  {
    "Name": "GOOD MONEYING WEALTH PLANNERS PRIVATE LIMITED",
    "Registration No": "INA000018744",
    "E-mail": "mks@goodmoneying.com",
    "Telephone": "00911724103547",
    "Fax No": "00911724103547",
    "Address": "SCO 333-34 Cabin No. 206,, First Floor Sector 35-B,, CHANDIGARH, CHANDIGARH, 160022",
    "Contact Person": "Manikaran Singal",
    "Correspondence Address": "SCO 333-34 Cabin No. 206, First Floor Sector 35-B, CHANDIGARH, CHANDIGARH, 160022",
    "Validity": "Jan 09, 2024 - Perpetual"
  },
  {
    "Name": "Gopalakrishna Narayana Moni",
    "Registration No": "INA000019664",
    "E-mail": "ngopalakrishna@gmail.com",
    "Telephone": "919845077841",
    "Address": "75,76 F2, VGN Krona, Madhatown Extension, Gerugambakkam, CHENNAI, TAMIL NADU, 600122",
    "Contact Person": "Gopalakrishna Narayana Moni",
    "Correspondence Address": "75,76 F2, VGN Krona, Madhatown Extension, Gerugambakkam, CHENNAI, TAMIL NADU, 600122",
    "Validity": "Nov 07, 2024 - Perpetual"
  },
  {
    "Name": "GORAKH KADAM",
    "Registration No": "INA000000441",
    "E-mail": "gorakhkadam@gmail.com",
    "Telephone": "9373004167",
    "Fax No": "9373004167",
    "Address": "S 86 DESTINATION CENTRE, NANDED CITY, PUNE, MAHARASHTRA, 411041",
    "Contact Person": "GORAKH KADAM",
    "Correspondence Address": "Flat 13 B Building,Siddhivinayak Complex, Near Shinde Pool, PUNE, MAHARASHTRA, 411023",
    "Validity": "Dec 10, 2013 - Perpetual"
  },
  {
    "Name": "GreenEdge Wealth Services LLP",
    "Registration No": "INA000011574",
    "Validity": "Aug 31, 2018 - Perpetual"
  },
  {
    "Name": "GreenOak India Investment Advisors Private Limited",
    "Registration No": "INA000015817",
    "E-mail": "gautam.subramani@bentallgreenoak.com",
    "Address": "First International Financial Center, 1st Floor, Plot No.C-54 & C-55, G Block, BKC, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Gautam Subramani",
    "Correspondence Address": "First International Financial Center, 1st Floor, Plot No.C-54 & C-55, G Block, BKC, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Mar 31, 2021 - Perpetual"
  },
  {
    "Name": "Griffin Family Office",
    "Registration No": "INA200014195",
    "E-mail": "ravi@griffincap.in",
    "Address": "35/1, Central Quay,, Yellappa Chetty Layout, Halasuru Road, BANGALORE, KARNATAKA, 560001",
    "Contact Person": "Ravi  Narayan",
    "Correspondence Address": "35/1, Central Quay, Yellappa Chetty Layout, Halasuru Road, BANGALORE, KARNATAKA, 560001",
    "Validity": "Nov 22, 2019 - Perpetual"
  },
  {
    "Name": "Growtheum Investment Advisors India Private Limited",
    "Registration No": "INA000019965",
    "E-mail": "Saurabh@growtheumcapital.com",
    "Telephone": "91008826569000",
    "Fax No": "91008826569000",
    "Address": "Unit No. 1210-C, 12 Floor, C Wing, One BKC, Bandra Kurla, Complex, Bandra Kurla Complex East, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Saurabh Mehta",
    "Correspondence Address": "Unit No. 1210-C, 12 Floor, C Wing, One BKC, Bandra Kurla, Complex, Bandra Kurla Complex East, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Feb 20, 2025 - Perpetual"
  },
  {
    "Name": "Growthlift Investment Advisories Pvt Ltd",
    "Registration No": "INA200014283",
    "E-mail": "growthlift@gmail.com",
    "Address": "No 3 Educational Insitution, Jayadeva, BANGALORE, KARNATAKA, 560078",
    "Contact Person": "Sandeep Pai",
    "Correspondence Address": "No 3 Educational Insitution, Jayadeva, BANGALORE, KARNATAKA, 560078",
    "Validity": "Dec 09, 2019 - Perpetual"
  },
  {
    "Name": "Growthvine Capital Private Limited",
    "Registration No": "INA000018665",
    "E-mail": "shubham@growthvine.in",
    "Telephone": "91008879974537",
    "Fax No": "91008879974537",
    "Address": "X 37, Loha Mandi, Naraina Industrial Area, South West Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110028",
    "Contact Person": "SHUBHAM GUPTA",
    "Correspondence Address": "C-376 A, 1st FLOOR, SUSHANT LOK-1, C-BLOCK, GURGAON, HARYANA, GURGAON, HARYANA, 122002",
    "Validity": "Dec 11, 2023 - Perpetual"
  },
  {
    "Name": "GUARDIAN CAPITAL INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA200005380",
    "E-mail": "kartik.damodar@guardiancapital.in",
    "Telephone": "4023544640",
    "Fax No": "4023544640",
    "Address": "4B, 4th Floor Saha Building,8-2-616/1,, Road No.11 Banjara Hills, HYDERABAD, TELANGANA, 500034",
    "Contact Person": "KARTIK DAMODAR",
    "Correspondence Address": "Plot no. 1052, Road no. 52, Jubilee Hills, HYDERABAD, 500033",
    "Validity": "Aug 18, 2016 - Perpetual"
  },
  {
    "Name": "GULSHAN KHERA",
    "Registration No": "INA100011988",
    "E-mail": "thegkbull@gmail.com",
    "Telephone": "919041060460",
    "Address": "Office no 2, B-XXXII-E-13/82,, MAIN ROAD BHAURA, AMAN NAGAR, LUDHIANA, PUNJAB, 141008",
    "Contact Person": "Gulshan Khera",
    "Correspondence Address": "Office no 2, B-XXXII-E-13/82, MAIN ROAD BHAURA, AMAN NAGAR, LUDHIANA, PUNJAB, 141008",
    "Validity": "Nov 12, 2018 - Perpetual"
  },
  {
    "Name": "Gunjal Jayadrath Suresh",
    "Registration No": "INA000020420",
    "E-mail": "jdgunjal@gmail.com",
    "Telephone": "00919717001609",
    "Fax No": "00919717001609",
    "Address": "Plot no 61, Maharathi Bungalow, Lavhate Nagar,, Trimbak Road, Nashik, NASHIK, MAHARASHTRA, 422002",
    "Contact Person": "Gunjal Suresh",
    "Correspondence Address": "Plot no 61, Maharathi Bungalow, Lavhate Nagar, Trimbak Road, Nashik, NASHIK, MAHARASHTRA, 422002",
    "Validity": "Jun 30, 2025 - Perpetual"
  },
  {
    "Name": "Gurpreet Singh",
    "Registration No": "INA000020244",
    "E-mail": "79.gurpreet@gmail.com",
    "Telephone": "919425610337",
    "Address": "H/no. 2577, Mohalla Mehna., Street Sucha singh Nambardar., BATHINDA, PUNJAB, 151001",
    "Contact Person": "Gurpreet  Singh",
    "Correspondence Address": "H/no. 2577, Mohalla Mehna., Street Sucha singh Nambardar., BATHINDA, PUNJAB, 151001",
    "Validity": "Jun 04, 2025 - Perpetual"
  },
  {
    "Name": "Gursimran Singh",
    "Registration No": "INA100009798",
    "E-mail": "gursimran59@hotmail.com",
    "Address": "P-9 , 1st Floor , Green Park Extension, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110016",
    "Contact Person": "Gursimran Singh",
    "Correspondence Address": "P-9 , 1st Floor , Green Park Extension, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110016",
    "Validity": "Feb 13, 2018 - Perpetual"
  },
  {
    "Name": "GYR Financial Planners Private Limited",
    "Registration No": "INA000015996",
    "Address": "Office No. 201, 2nd Floor, Corporate Arena, Piramal Cross Road,, Goregaon West, MUMBAI, MAHARASHTRA, 400104",
    "Validity": "Jul 23, 2021 - Perpetual"
  },
  {
    "Name": "Hardik Jain- Proprietor of Eternal Research Investment Advisor",
    "Registration No": "INA000017879",
    "E-mail": "dearhardik25@gmail.com",
    "Telephone": "917771997647",
    "Address": "Office Near Akansha Apparment Patel Nagar City Center Village, Thatipur Gwalior, GWALIOR, MADHYA PRADESH, 474010",
    "Contact Person": "Hardik  Jain",
    "Correspondence Address": "Office Near Akansha Apparment Patel Nagar City Center Village, Thatipur Gwalior, GWALIOR, MADHYA PRADESH, 474010",
    "Validity": "Apr 24, 2023 - Perpetual"
  },
  {
    "Name": "HAREN JAYENDRA BANKER",
    "Registration No": "INA000001522",
    "E-mail": "harenbaker@gmail.com",
    "Telephone": "9820151644",
    "Fax No": "9820151644",
    "Address": "33, SAILESH,, LINKING ROAD, SANTACRUZ (W),, MUMBAI, MAHARASHTRA, 400054",
    "Contact Person": "HAREN JAYENDRA BANKER",
    "Correspondence Address": "33, SAILESH, LINKING ROAD, SANTACRUZ (W), MUMBAI, MAHARASHTRA, 400054",
    "Validity": "Apr 10, 2014 - Perpetual"
  },
  {
    "Name": "HARISH MENON",
    "Registration No": "INA000012838",
    "E-mail": "hcmenon@gmail.com",
    "Address": "803, Dahlia, Building 3,, Vasant Valley, Wayale Nagar, Near Khadakpada, KALYAN-DOMBIVALI, MAHARASHTRA, 421301",
    "Contact Person": "HARISH MENON",
    "Correspondence Address": "803, Dahlia, Building 3, Vasant Valley, Wayale Nagar, Near Khadakpada, KALYAN-DOMBIVALI, MAHARASHTRA, 421301",
    "Validity": "Mar 27, 2019 - Perpetual"
  },
  {
    "Name": "HARSH VARDHAN DAWAR",
    "Registration No": "INA000002173",
    "E-mail": "harsh@wealthcafe.in",
    "Telephone": "022 28878545",
    "Fax No": "022 28878545",
    "Address": "1301/A, HILL VIEW PARK, THAKUR VILLAGE, KANDIVALI EAST, MUMBAI, MAHARASHTRA, 400101",
    "Contact Person": "HARSH VARDHAN DAWAR",
    "Correspondence Address": "1301/A, HILL VIEW PARK, THAKUR VILLAGE, KANDIVALI EAST, MUMBAI, MAHARASHTRA, 400101",
    "Validity": "Sep 01, 2014 - Perpetual"
  },
  {
    "Name": "Harshad Chetanwala",
    "Registration No": "INA000015455",
    "E-mail": "harshad_dc@yahoo.com",
    "Telephone": "919320344998",
    "Address": "Moraj Residency, G-4, Sec 16, Palm Beach Road, Sanpada, NAVI MUMBAI, MAHARASHTRA, 400705",
    "Contact Person": "Harshad Chetanwala",
    "Correspondence Address": "Moraj Residency, G-4, Sec 16, Palm Beach Road, Sanpada, NAVI MUMBAI, MAHARASHTRA, 400705",
    "Validity": "Nov 20, 2020 - Perpetual"
  },
  {
    "Name": "HDFC SECURITIES LIMITED",
    "Registration No": "INA000011538",
    "E-mail": "murli.karkera@hdfcsec.com",
    "Telephone": "02202230750052",
    "Fax No": "02202230750052",
    "Address": "I Think Techno Campus Building-B, 'Alpha', 8th Floor, Opp. Crompton Greaves, Near Kanjurmarg Station, Kanjurmarg(East),, MUMBAI, MAHARASHTRA, 400042",
    "Contact Person": "MURLI KARKERA",
    "Correspondence Address": "I Think Techno Campus Building-B, 'Alpha', 8th Floor, Opp. Crompton Greaves, Near Kanjurmarg Station, Kanjurmarg(East), MUMBAI, MAHARASHTRA, 400042",
    "Validity": "Aug 23, 2018 - Perpetual"
  },
  {
    "Name": "HEDGELOOP TECHNOLOGIES PVT LTD",
    "Registration No": "INA200007265",
    "E-mail": "vish@hedgeloop.com",
    "Address": "8-2-334/27, PLOT NO. 27, T&T CORP VISION SPACE, 2ND FLOOR, ROAD NO. 3, BANJARA HILLS, HYDERABAD, TELANGANA, 500034",
    "Contact Person": "VISHNU BODAPATI",
    "Correspondence Address": "8-2-334/27, PLOT NO. 27, T&T CORP VISION SPACE, 2ND FLOOR, ROAD NO. 3, BANJARA HILLS, HYDERABAD, TELANGANA, 500034",
    "Validity": "Mar 13, 2017 - Perpetual"
  },
  {
    "Name": "HEMANG MEHTA",
    "Registration No": "INA000003783",
    "E-mail": "hemangm78@yahoo.com",
    "Telephone": "2224157875",
    "Fax No": "2224157875",
    "Address": "A604, MAHALAXMI APARTMENTS,, RAJKAMAL STUDIO COMPOUND, PAREL,, MUMBAI, MAHARASHTRA, 400012",
    "Contact Person": "HEMANG MEHTA",
    "Correspondence Address": "A604, Mahalaxmi Apartments, Rajkamal Studio Compound, Parel, MUMBAI, MAHARASHTRA, 400012",
    "Validity": "Nov 10, 2015 - Perpetual"
  },
  {
    "Name": "HEMENDRA GANDHI",
    "Registration No": "INA000004237",
    "E-mail": "Hemendra.gandhi@gmail.com",
    "Telephone": "022 28937147",
    "Fax No": "022 28937147",
    "Address": "38th Floor, E, A Wing Wintergreen, Rivali Park, Near Metro Mall,, Datta Pada Road, Magathane, Borivali East, MUMBAI, MAHARASHTRA, 400066",
    "Contact Person": "HEMENDRA GANDHI",
    "Correspondence Address": "Prem Nagar No. 5, B Wing, Flat no. 309, S.V.P. Road, Borivali (West), Mumbai, MUMBAI, MAHARASHTRA, 400092",
    "Validity": "Feb 24, 2016 - Perpetual"
  },
  {
    "Name": "HEMLATA SOMANI",
    "Registration No": "INA000019770",
    "E-mail": "hemlata.somani46@gmail.com",
    "Telephone": "919460362385",
    "Address": "Parakhet, Near RICCO industrial Chouraha, Kaladwas, Udaipur, UDAIPUR, RAJASTHAN, 313001",
    "Contact Person": "Hemlata Somani",
    "Correspondence Address": "Parakhet, Near RICCO industrial Chouraha, Kaladwas, Udaipur, UDAIPUR, RAJASTHAN, 313001",
    "Validity": "Jan 01, 2025 - Perpetual"
  },
  {
    "Name": "HENSEX SECURITIES PRIVATE LIMITED",
    "Registration No": "INA000019327",
    "E-mail": "tahir@hensex.com",
    "Telephone": "9129126630000",
    "Fax No": "9129126630000",
    "Address": "7, BHAGAT KI KOTHI EXTN, N.H.65,, PALI ROAD,, JODHPUR, RAJASTHAN, 342005",
    "Contact Person": "TAHIR HUSSAIN",
    "Correspondence Address": "7, BHAGAT KI KOTHI EXTN, N.H.65, PALI ROAD, JODHPUR, RAJASTHAN, 342005",
    "Validity": "Jun 26, 2024 - Perpetual"
  },
  {
    "Name": "Hersh Tolani",
    "Registration No": "INA000010584",
    "E-mail": "hersh.tolani@gmail.com",
    "Address": "902, Citadel,, 18, L.D. Ruparel Road,, MUMBAI, MAHARASHTRA, 400006",
    "Contact Person": "Hersh Tolani",
    "Correspondence Address": "902, Citadel, 18, L.D. Ruparel Road, MUMBAI, MAHARASHTRA, 400006",
    "Validity": "May 17, 2018 - Perpetual"
  },
  {
    "Name": "HEXAGON CAPITAL ADVISORS PRIVATE LTD",
    "Registration No": "INA200001702",
    "E-mail": "bhagavat@hexagonwealth.com",
    "Telephone": "0008026717990",
    "Fax No": "0008026717990",
    "Address": "S 209, Suraj Ganga Arcade, 332 7, 15th Cross Rd, 2nd Block, Jaya Nagar, Bengaluru, 560011, BANGALORE, KARNATAKA, 560011",
    "Contact Person": "Thumpudi Krishna Kumar Bhagavat",
    "Correspondence Address": "S 209, Suraj Ganga Arcade, 332 7, 15th Cross Rd, 2nd Block, Jaya Nagar, Bengaluru, 560011, BANGALORE, KARNATAKA, 560011",
    "Validity": "May 06, 2014 - Perpetual"
  },
  {
    "Name": "HEXAWEALTH FINANCIAL TECHNOLOGIES PRIVATE LIMITED",
    "Registration No": "INA000019080",
    "E-mail": "founders@hexawealth.in",
    "Telephone": "022919177554470",
    "Fax No": "022919177554470",
    "Address": "BLOCK-A FT NO 1504 LODHA MERIDIAN KPHB-V MALAYSIAN TOWN, SHIP KKP MEDCHAL MALKAJGIRI KUKATPALL Y TIRUMALAGI Hyderabad, HYDERABAD, TELANGANA, 500072",
    "Contact Person": "Abhinav Singhvi",
    "Correspondence Address": "THH-6F/031-052, 6th Floor, C/o T-HUB Foundation, 1/C, 83/1, Raidurg Panmakhta, Near Hitech City, Ranga Reddi, HYDERABAD, TELANGANA, 500081",
    "Validity": "Apr 30, 2024 - Perpetual"
  },
  {
    "Name": "Himanshu Mahajan",
    "Registration No": "INA100008425",
    "E-mail": "himanshumahajan0293@gmail.com",
    "Address": "16- A, Aggar Nagar Extension, LUDHIANA, PUNJAB, 141012",
    "Contact Person": "Himanshu  Mahajan",
    "Correspondence Address": "16- A, Aggar Nagar Extension, LUDHIANA, PUNJAB, 141012",
    "Validity": "Sep 11, 2017 - Perpetual"
  },
  {
    "Name": "HIMANSHU MURALIA PROPRIETOR OF  TRADE GYAN SOLUTIONS",
    "Registration No": "INA000008808",
    "E-mail": "himanshu.muralia11@gmail.com",
    "Address": "PLOT NO.9, SECTOR C , GOVINDPURA INDUSTRIAL AREA, J.K.ROAD, BHOPAL, MADHYA PRADESH, 462023",
    "Contact Person": "HIMANSHU MURALIA",
    "Correspondence Address": "PLOT NO.9, SECTOR C , GOVINDPURA INDUSTRIAL AREA, J.K.ROAD, BHOPAL, MADHYA PRADESH, 462023",
    "Validity": "Nov 02, 2017 - Perpetual"
  },
  {
    "Name": "Himanshu Pravinchandra Pandya",
    "Registration No": "INA000017310",
    "E-mail": "himanshuppandya@outlook.com",
    "Address": "C1404, Raheja Serenity CHS,, Thakur Village, Kandivali East, MUMBAI, MAHARASHTRA, 400101",
    "Contact Person": "Himanshu Pandya",
    "Correspondence Address": "C1404, Raheja Serenity CHS, Thakur Village, Kandivali East, MUMBAI, MAHARASHTRA, 400101",
    "Validity": "Nov 03, 2022 - Perpetual"
  },
  {
    "Name": "Himanshu Somani",
    "Registration No": "INA000021216",
    "E-mail": "himanshusomani007@gmail.com",
    "Telephone": "00919555630096",
    "Fax No": "00919555630096",
    "Address": "107, 1st floor, BTC Market, Opp Harsh Palace, Old RTO road,, BHILWARA, RAJASTHAN, 311001",
    "Contact Person": "Himanshu Somani",
    "Correspondence Address": "107, 1st floor, BTC Market, Opp Harsh Palace, Old RTO road, BHILWARA, RAJASTHAN, 311001",
    "Validity": "Oct 30, 2025 - Perpetual"
  },
  {
    "Name": "HIRENSINH P BHATTI (PROPRIETOR OF SANCHI CONSULTANCY)",
    "Registration No": "INA000005713",
    "E-mail": "hiren_20045@yahoo.co.in",
    "Telephone": "9898373719",
    "Fax No": "9898373719",
    "Address": "SF/10, SAMRUDDHI BHAVAN, 4TH FLOOR, GONDAL ROAD, RAJKOT, GUJARAT, 360002",
    "Contact Person": "HIRENSINH P BHATTI",
    "Correspondence Address": "SF/10, Samruddhi Bhavan, 4th Floor, Gondal Road, RAJKOT, GUJARAT, 360002",
    "Validity": "Nov 18, 2016 - Perpetual"
  },
  {
    "Name": "Hrushikesh Kale",
    "Registration No": "INA000013800",
    "E-mail": "hrush4u@gmail.com",
    "Address": "1875/4, Saraswati Bhawan,Akhada Road,, Rani Laxmibai Ward, Pandharkawada, NAGPUR, MAHARASHTRA, 445302",
    "Contact Person": "Hrushikesh Kale",
    "Correspondence Address": "1875/4, Saraswati Bhawan,Akhada Road, Rani Laxmibai Ward, Pandharkawada, NAGPUR, MAHARASHTRA, 445302",
    "Validity": "Aug 19, 2019 - Perpetual"
  },
  {
    "Name": "Hum Fauji Financial Services Pvt Ltd",
    "Registration No": "INA000018197",
    "E-mail": "sgovila@humfauji.in",
    "Telephone": "91009999022033",
    "Fax No": "91009999022033",
    "Address": "2nd Floor, Bimal Plaza, Plot 9, Pocket 4 Market,, Sector 11, Dwarka, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110075",
    "Contact Person": "Sanjeev Govila",
    "Correspondence Address": "2nd Floor, Bimal Plaza, Plot 9, Pocket 4 Market, Sector 11, Dwarka, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110075",
    "Validity": "Jul 05, 2023 - Perpetual"
  },
  {
    "Name": "I VENTURES CAPITAL PRIVATE LIMITED",
    "Registration No": "INA000019026",
    "E-mail": "nitin.jindal@iventures.in",
    "Telephone": "9101244634433",
    "Fax No": "9101244634433",
    "Address": "17, First Floor, Hemkunt Colony, Greater Kailash, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110048",
    "Contact Person": "Nitin Jindal",
    "Correspondence Address": "12 B Ground Floor, Vipul Agora Tower, M.G. Road, GURGAON, HARYANA, 122001",
    "Validity": "Mar 26, 2024 - Perpetual"
  },
  {
    "Name": "ICICI Investment Management Company Ltd",
    "Registration No": "INA000013785",
    "E-mail": "nilesh.mundra@iciciinvestments.com",
    "Telephone": "912240088811",
    "Fax No": "912240088811",
    "Address": "ICICI Investment Management Company Ltd, ICICI Bank Towers Bandra-Kurla Complex Mumbai, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Nilesh   Mundra",
    "Correspondence Address": "ICICI Investment Management Company Ltd, ICICI Bank Towers Bandra-Kurla Complex Mumbai, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Aug 14, 2019 - Perpetual"
  },
  {
    "Name": "ICICI SECURITIES LIMITED",
    "Registration No": "INA000000094",
    "E-mail": "abhishake.mathur@icicisecurities.com",
    "Telephone": "2240701382",
    "Fax No": "2240701382",
    "Address": "ICICI VENTURE HOUSE, APPASAHEB MARATHE MARG, PRABHADEVI, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "Abhishake Mathur Senior Vice President",
    "Correspondence Address": "ICICI Centre, H.T.Parekh Marg, Near Juinagar Railway Station, NAVI MUMBAI, MAHARASHTRA, 400705",
    "Validity": "Aug 05, 2013 - Perpetual"
  },
  {
    "Name": "IDBI Capital Markets & Securities Limited",
    "Registration No": "INA000011802",
    "E-mail": "christina.dsouza@idbicapital.com",
    "Address": "3rd Floor, Mafatlal Centre, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Contact Person": "Christina Dsouza",
    "Correspondence Address": "3rd Floor, Mafatlal Centre, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Validity": "Oct 05, 2018 - Perpetual"
  },
  {
    "Name": "IIFL Capital Asset Management Limited",
    "Registration No": "INA000019956",
    "E-mail": "prashant.parmar6@iiflcapital.com",
    "Telephone": "00919029240089",
    "Fax No": "00919029240089",
    "Address": "Gr Flr 01 Hubtown Solaris, Saiwadi, N S Phadke Road, Andheri East, MUMBAI, MAHARASHTRA, 400069",
    "Contact Person": "Prashant Parmar",
    "Correspondence Address": "Gr Flr 01 Hubtown Solaris, Saiwadi, N S Phadke Road, Andheri East, MUMBAI, MAHARASHTRA, 400069",
    "Validity": "Feb 17, 2025 - Perpetual"
  },
  {
    "Name": "IIFL Capital Services Limited",
    "Registration No": "INA000000623",
    "Validity": "Dec 26, 2013 - Perpetual"
  },
  {
    "Name": "IMPERIAL RESEARCH INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000016205",
    "E-mail": "vin.biz91@gmail.com",
    "Address": "Fl No. B-303, Vanashree Soc SNo. 179/1 A, Magarpatta, Hadapsar, PUNE, MAHARASHTRA, 411028",
    "Contact Person": "SHASHANK JAIN",
    "Correspondence Address": "Fl No. B-303, Vanashree Soc SNo. 179/1 A, Magarpatta, Hadapsar, PUNE, MAHARASHTRA, 411028",
    "Validity": "Oct 01, 2021 - Perpetual"
  },
  {
    "Name": "INCOFIN INDIA INVESTMENT MANAGEMENT PRIVATE LIMITED",
    "Registration No": "INA200014043",
    "E-mail": "sanjay.kumar@incofin.com",
    "Address": "JAMBU TOWERS No 99 1st floor, New Avadi Road Kilpauk, CHENNAI, TAMIL NADU, 600010",
    "Contact Person": "Sanjay Kumar",
    "Correspondence Address": "JAMBU TOWERS No 99 1st floor, New Avadi Road Kilpauk, CHENNAI, TAMIL NADU, 600010",
    "Validity": "Oct 04, 2019 - Perpetual"
  },
  {
    "Name": "Incred Capital Wealth Portfolio Managers Private Limited",
    "Registration No": "INA000014890",
    "E-mail": "compliance@incredcapital.com",
    "Telephone": "91009820455802",
    "Fax No": "91009820455802",
    "Address": "Unit No. 1502-A, 15th Floor, The Capital Building, C-70, G Block, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Preeti Lalwani",
    "Correspondence Address": "Unit No. 1502-A, 15th Floor, The Capital Building, C-70, G Block, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Jul 31, 2020 - Perpetual"
  },
  {
    "Name": "Independent Advisors Private Limited",
    "Registration No": "INA100008443",
    "E-mail": "compliance@valueresearch.in",
    "Telephone": "910229899638444",
    "Fax No": "910229899638444",
    "Address": "5, Commercial Complex, , Chitra Vihar,, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110092",
    "Contact Person": "Rahul  Rastogi",
    "Correspondence Address": "C-103, Sector 65, NOIDA, UTTAR PRADESH, 201301",
    "Validity": "Sep 14, 2017 - Perpetual"
  },
  {
    "Name": "Indira Securities Private Limited",
    "Registration No": "INA000021410",
    "E-mail": "dharmeshk@indiratrade.com",
    "Telephone": "00917314797158",
    "Fax No": "00917314797158",
    "Address": "Indira House, 3rd Floor, 5 Topiwala Lane, Lamington Road, Mumbai, MUMBAI, MAHARASHTRA, 400007",
    "Contact Person": "SUMEET PATEL",
    "Correspondence Address": "204-205 Amardarshan, 28/2 Old Palasia, Indore, INDORE, MADHYA PRADESH, 452018",
    "Validity": "Nov 27, 2025 - Perpetual"
  },
  {
    "Name": "INDIUM INVESTMENT ADVISERS PRIVATE LIMITED",
    "Registration No": "INA000020660",
    "E-mail": "tridib.pathak@indium.in",
    "Telephone": "00919833579215",
    "Fax No": "00919833579215",
    "Address": "403, OBEROI SPLENDOR-C, JOGESHWARI VIKHROLI LINK, JOGESHWARI EAST, MUMBAI, MUMBAI, MAHARASHTRA, 400060",
    "Contact Person": "Tridib Pathak",
    "Correspondence Address": "403, OBEROI SPLENDOR-C, JOGESHWARI VIKHROLI LINK, JOGESHWARI EAST, MUMBAI, MUMBAI, MAHARASHTRA, 400060",
    "Validity": "Jul 17, 2025 - Perpetual"
  },
  {
    "Name": "Indrani Banerjee",
    "Registration No": "INA000018610",
    "E-mail": "indrani@ibaasca.com",
    "Telephone": "919886302903",
    "Address": "Villa 37 Alliance 10 Downing Whitefield Hoskote Main Road Kannamangala Bangalore, BANGALORE, KARNATAKA, 560067",
    "Contact Person": "Indrani Banerjee",
    "Correspondence Address": "Villa 37 Alliance 10 Downing Whitefield Hoskote Main Road Kannamangala Bangalore, BANGALORE, KARNATAKA, 560067",
    "Validity": "Nov 28, 2023 - Perpetual"
  },
  {
    "Name": "INDRESH MALIK",
    "Registration No": "INA100002438",
    "E-mail": "indreshmalik@gmail.com",
    "Telephone": "9811974722",
    "Fax No": "9811974722",
    "Address": "C-58, 1ST FLOOR, PALAM VYAPAAR KENDRA, PALAM VIHAR, GURGAON, GURGAON, HARYANA, 122017",
    "Contact Person": "INDRESH MALIK",
    "Correspondence Address": "C-58, 1st Floor, Palam Vyapaar Kendra, MUMBAI, MAHARASHTRA, 400060",
    "Validity": "Dec 03, 2014 - Perpetual"
  },
  {
    "Name": "Induswealth Advisors",
    "Registration No": "INA200016856",
    "E-mail": "PRAVEEN.REDDY@INDUSWEALTH.COM",
    "Address": "SUITE NO. 614 DBS HOUSE 31-A, CATHEDRAL GARDEN, NUNGAMBAKKAM CHENNAI, CHENNAI, TAMIL NADU, 600034",
    "Contact Person": "Praveen Reddy",
    "Correspondence Address": "SUITE NO. 614 DBS HOUSE 31-A, CATHEDRAL GARDEN, NUNGAMBAKKAM CHENNAI, CHENNAI, TAMIL NADU, 600034",
    "Validity": "May 13, 2022 - Perpetual"
  },
  {
    "Name": "INFINASK ADVISORS LLP",
    "Registration No": "INA000020509",
    "E-mail": "pawan@infinask.com",
    "Telephone": "00919322551321",
    "Fax No": "00919322551321",
    "Address": "Flat No 806 Solitaire Heights 150 Feet Link Road, Bhayandar (W), Ahead of Planeteria Complex, THANE, MAHARASHTRA, 401101",
    "Contact Person": "Pawan Somani",
    "Correspondence Address": "Flat No 806 Solitaire Heights 150 Feet Link Road, Bhayandar (W), Ahead of Planeteria Complex, THANE, MAHARASHTRA, 401101",
    "Validity": "Jul 10, 2025 - Perpetual"
  },
  {
    "Name": "INNOVAGE INVESTMENT ADVISERS PVT LTD",
    "Registration No": "INA000003809",
    "E-mail": "dinesh@innovage.co.in",
    "Telephone": "022 42646414",
    "Fax No": "022 42646414",
    "Address": "B1, 204, ROSE PARADE, OFF, NIBM ROAD, KONDHWA,, PUNE, MAHARASHTRA, 411048",
    "Contact Person": "DINESH ROHIRA",
    "Correspondence Address": "B1, 204, Rose Parade, Off, MUMBAI, MAHARASHTRA, 40006",
    "Validity": "Nov 13, 2015 - Perpetual"
  },
  {
    "Name": "Insightful",
    "Registration No": "INA200015732",
    "E-mail": "vikram@insightful.in",
    "Telephone": "9109655566165",
    "Fax No": "9109655566165",
    "Address": "29A, North End Road, Krishnaswamy Nagar 2, Ramanathapuram, COIMBATORE, TAMIL NADU, 641045",
    "Contact Person": "Vikram Krishnamoorthy",
    "Correspondence Address": "29A, North End Road, Krishnaswamy Nagar 2, Ramanathapuram, COIMBATORE, TAMIL NADU, 641045",
    "Validity": "Feb 04, 2021 - Perpetual"
  },
  {
    "Name": "International Money Matters Private Limited",
    "Registration No": "INA200010676",
    "Validity": "May 24, 2018 - Perpetual"
  },
  {
    "Name": "Invesmate Insights Private Limited",
    "Registration No": "INA000021544",
    "E-mail": "santanusaha@insights.market",
    "Telephone": "00919230975228",
    "Fax No": "00919230975228",
    "Address": "5, Narendra Nagar, Belgharia, North 24 Parganas, , Belgharia, West Bengal,, KOLKATA, WEST BENGAL, 700056",
    "Contact Person": "Santanu Saha",
    "Correspondence Address": "Nanaksar Tower, 137/1, B.T. Road, Dunlop, Baranagar, West Bengal, BARANAGAR, WEST BENGAL, 700108",
    "Validity": "Dec 12, 2025 - Perpetual"
  },
  {
    "Name": "InvesQ Investment Advisors Private Limited",
    "Registration No": "INA000015808",
    "E-mail": "aashish@invesq.in",
    "Address": "SR NO 270/1/20, FLAT NO 101, HARMONY, BANER ROAD,, OPP MAULI PETROL PUMP, BANER, PUNE, PUNE, MAHARASHTRA, 411045",
    "Contact Person": "Aashish Upganlawar",
    "Correspondence Address": "SR NO 270/1/20, FLAT NO 101, HARMONY, BANER ROAD, OPP MAULI PETROL PUMP, BANER, PUNE, PUNE, MAHARASHTRA, 411045",
    "Validity": "Mar 24, 2021 - Perpetual"
  },
  {
    "Name": "InvestAscent Wealth Advisors Private Limited",
    "Registration No": "INA200015857",
    "E-mail": "anuja@Investascent.com",
    "Address": "1010, 4th floor, 26th main, 4th T block, Jayanagar, BANGALORE, KARNATAKA, 560041",
    "Contact Person": "Anuja Agrawal",
    "Correspondence Address": "1010, 4th floor, 26th main, 4th T block, Jayanagar, BANGALORE, KARNATAKA, 560041",
    "Validity": "Apr 15, 2021 - Perpetual"
  },
  {
    "Name": "INVESTCUES CAPITAL INVESTMENT ADVISORS",
    "Registration No": "INA000020387",
    "E-mail": "abhishek.misra@investcues.com",
    "Telephone": "00919867728579",
    "Fax No": "00919867728579",
    "Address": "SAKET 59, Aishwarya Residency, , Telibandha  G E Road, RAIPUR, CHHATTISGARH, 492001",
    "Contact Person": "ABHISHEK MISRA",
    "Correspondence Address": "SAKET 59, Aishwarya Residency, , Telibandha  G E Road, RAIPUR, CHHATTISGARH, 492001",
    "Validity": "Jun 25, 2025 - Perpetual"
  },
  {
    "Name": "INVESTGOAL CAPITAL ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000021623",
    "E-mail": "kekinnandu25@gmail.com",
    "Telephone": "00919820464524",
    "Fax No": "00919820464524",
    "Address": "D-317, Dheeraj Valley Bldg. No. 2, Gokhale Road, Near, Saibaba Complex, Goregaon East, Mumbai, MUMBAI, MAHARASHTRA, 400063",
    "Contact Person": "Kekin Nandu",
    "Correspondence Address": "D-317, Dheeraj Valley Bldg. No. 2, Gokhale Road, Near, Saibaba Complex, Goregaon East, Mumbai, MUMBAI, MAHARASHTRA, 400063",
    "Validity": "Dec 23, 2025 - Perpetual"
  },
  {
    "Name": "Investor First Advisors",
    "Registration No": "INA000016515",
    "E-mail": "danesh@investorfirstadvisors.com",
    "Address": "Flat No -12, 3rd Floor, , Kala Niketan Building, 95 Queens Road,, MUMBAI, MAHARASHTRA, 400020",
    "Contact Person": "Danesh  Mistry",
    "Correspondence Address": "Flat No -12, 3rd Floor, , Kala Niketan Building, 95 Queens Road, MUMBAI, MAHARASHTRA, 400020",
    "Validity": "Dec 28, 2021 - Perpetual"
  },
  {
    "Name": "INVESTORAI INVESTMENT MANAGEMENT SERVICES PRIVATE LIMITED",
    "Registration No": "INA000020606",
    "E-mail": "lakshit.maheshwari3@gmail.com",
    "Telephone": "00919637281073",
    "Fax No": "00919637281073",
    "Address": "INNOV8 Mantri Commercio, Tower A, 5th Floor, Dever,, Bellandur, BANGALORE, KARNATAKA, 560103",
    "Contact Person": "Lakshit Maheshwari",
    "Correspondence Address": "INNOV8 Mantri Commercio, Tower A, 5th Floor, Dever, Bellandur, BANGALORE, KARNATAKA, 560103",
    "Validity": "Jul 14, 2025 - Perpetual"
  },
  {
    "Name": "Investrite Fintech LLP",
    "Registration No": "INA000021164",
    "E-mail": "investrite_advisory@yahoo.com",
    "Telephone": "00919820099842",
    "Fax No": "00919820099842",
    "Address": "3rd Floor, Plot No 26, Hatkesh Society Scheme, 5th Road JVPD, Vile Parle West Mumbai,, MUMBAI, MAHARASHTRA, 400056",
    "Contact Person": "Sohesh Shah",
    "Correspondence Address": "Mitali Trust 8-B Shirin Shorab Palace, Nariman Road Vile Parle East, MUMBAI, MAHARASHTRA, 400057",
    "Validity": "Oct 13, 2025 - Perpetual"
  },
  {
    "Name": "Invexa Capital LLP",
    "Registration No": "INA000018443",
    "E-mail": "compliance@invexacapital.com",
    "Telephone": "91009833495336",
    "Fax No": "91009833495336",
    "Address": "151 A, Mittal Court, A Wing, 15th Floor, Nariman Point, Mumbai city, MUMBAI, MAHARASHTRA, 400021",
    "Contact Person": "Ayushi Shah",
    "Correspondence Address": "11th Floor, Express Towers, Nariman Point, Churchgate, MUMBAI, MAHARASHTRA, 400021",
    "Validity": "Sep 26, 2023 - Perpetual"
  },
  {
    "Name": "Invsify Technologies Private Limited",
    "Registration No": "INA000020572",
    "E-mail": "shlok.sobti@gmail.com",
    "Telephone": "01101143500700",
    "Fax No": "01101143500700",
    "Address": "F-33/3, Okhla Industrial Area, Phase-II, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110020",
    "Contact Person": "Shlok Sobti",
    "Correspondence Address": "Module No. 409, 4th Floor, , NSIC Business Park Building Okhla, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110020",
    "Validity": "Jul 14, 2025 - Perpetual"
  },
  {
    "Name": "IPK WEALTH SERVICES PRIVATE LIMITED",
    "Registration No": "INA000021386",
    "E-mail": "prabhukumarasamy@ipkwealth.com",
    "Telephone": "00919789472732",
    "Fax No": "00919789472732",
    "Address": "1st Floor,Office no.111,   D.No.100B/26, SCS tower,Opp to  Court, Sankari Main Road, Seetharampalayam, Tiruchengode, CHENNAI, TAMIL NADU, 637209",
    "Contact Person": "PRABHU KUMARASAMY",
    "Correspondence Address": "1st Floor,Office no.111,   D.No.100B/26, SCS tower,Opp to  Court, Sankari Main Road, Seetharampalayam, Tiruchengode, CHENNAI, TAMIL NADU, 637209",
    "Validity": "Nov 14, 2025 - Perpetual"
  },
  {
    "Name": "J Satheesh Kannan",
    "Registration No": "INA200013503",
    "E-mail": "jrmskannan@gmail.com",
    "Telephone": "09663078930",
    "Address": "NO 80/1, Flat No 07 2nd Floor, 1st Main Road, B Channasandra, BANGALORE, KARNATAKA, 560016",
    "Contact Person": "J Satheesh Kannan",
    "Correspondence Address": "NO 80/1, Flat No 07 2nd Floor, 1st Main Road, B Channasandra, BANGALORE, KARNATAKA, 560016",
    "Validity": "Jun 17, 2019 - Perpetual"
  },
  {
    "Name": "Jahnvi Deepak Goradia",
    "Registration No": "INA000018753",
    "E-mail": "connect@jcurvecapital.in",
    "Telephone": "0002221025378",
    "Fax No": "0002221025378",
    "Address": "101, Sahyadri Building, Neelkanth Valley,, 7th Road Rajawadi, Ghatkopar East, MUMBAI, MAHARASHTRA, 400077",
    "Contact Person": "Jahnvi Goradia",
    "Correspondence Address": "101, Sahyadri Building, Neelkanth Valley, 7th Road Rajawadi, Ghatkopar East, MUMBAI, MAHARASHTRA, 400077",
    "Validity": "Jan 10, 2024 - Perpetual"
  },
  {
    "Name": "Jaima Scientific Ventures LLP",
    "Registration No": "INA000021030",
    "E-mail": "saurabhscientificventures@gmail.com",
    "Telephone": "00918884550110",
    "Fax No": "00918884550110",
    "Address": "4 A Street, Ground Floor, Musneshwara Temple, Frazer Town, Bengaluru,, BANGALORE, KARNATAKA, 560005",
    "Contact Person": "Kumar Saurabh",
    "Correspondence Address": "4 A Street, Ground Floor, Musneshwara Temple, Frazer Town, Bengaluru, BANGALORE, KARNATAKA, 560005",
    "Validity": "Sep 24, 2025 - Perpetual"
  },
  {
    "Name": "JAISAL DINESHCHANDRA SHAH",
    "Registration No": "INA000018805",
    "E-mail": "shah.jaisal@gmail.com",
    "Telephone": "919920872747",
    "Address": "BLOCK NO 303, N-WING, VARDHAMAN NAGAR,, DR. R P ROAD, MULUND WEST,, MUMBAI, MAHARASHTRA, 400080",
    "Contact Person": "JAISAL SHAH",
    "Correspondence Address": "BLOCK NO. 301, GANESH KRUPA, DR. AMBEDKAR ROAD, NEAR BALAJI MANDIR, MULUND WEST, MUMBAI, MAHARASHTRA, 400080",
    "Validity": "Jan 23, 2024 - Perpetual"
  },
  {
    "Name": "Jashan Subhedar",
    "Registration No": "INA000018717",
    "E-mail": "jashansubhedar@gmail.com",
    "Telephone": "00919822197293",
    "Fax No": "00919822197293",
    "Address": "B-20, Pinnac Memories, Near City Pride,, Kothrud, PUNE, MAHARASHTRA, 411038",
    "Contact Person": "Jashan Subhedar",
    "Correspondence Address": "B-20, Pinnac Memories, Near City Pride, Kothrud, PUNE, MAHARASHTRA, 411038",
    "Validity": "Dec 18, 2023 - Perpetual"
  },
  {
    "Name": "JAVERI FISCAL SERVICES LIMITED",
    "Registration No": "INA000010070",
    "E-mail": "sdj@vsnl.com",
    "Address": "PS-17, 2ND FLOOR, ROTUNDA, STOCK EXCHANGE, BOMBAY SAMACHAR MARG, MUMBAI, MAHARASHTRA, 400001",
    "Contact Person": "HARSH JAVERI",
    "Correspondence Address": "PS-17, 2ND FLOOR, ROTUNDA, STOCK EXCHANGE, BOMBAY SAMACHAR MARG, MUMBAI, MAHARASHTRA, 400001",
    "Validity": "Mar 14, 2018 - Perpetual"
  },
  {
    "Name": "Jay Distribution Links",
    "Registration No": "INA000019062",
    "E-mail": "finvisors@outlook.com",
    "Telephone": "00009820900957",
    "Fax No": "00009820900957",
    "Address": "Office 1 and 2, Ratan House,, RRR Marg, Charni Road, MUMBAI, MAHARASHTRA, 400004",
    "Contact Person": "Jay  Sheth",
    "Correspondence Address": "Office 1 and 2, Ratan House, RRR Marg, Charni Road, MUMBAI, MAHARASHTRA, 400004",
    "Validity": "Apr 18, 2024 - Perpetual"
  },
  {
    "Name": "Jay Rajnikant Thacker",
    "Registration No": "INA000014809",
    "E-mail": "jayrgadhai@outlook.com",
    "Address": "104 Vijay Nagar Hospital Road, Opposite Santosh Tower, BHUJ, GUJARAT, 370001",
    "Contact Person": "Jay Thacker",
    "Correspondence Address": "104 Vijay Nagar Hospital Road, Opposite Santosh Tower, BHUJ, GUJARAT, 370001",
    "Validity": "Jul 09, 2020 - Perpetual"
  },
  {
    "Name": "JAYAPRAKASH",
    "Registration No": "INA000020466",
    "E-mail": "kjayaprakashk@gmail.com",
    "Telephone": "917022411404",
    "Address": "K No. 31/2B, Nagaloothu Street, Kancheepuram, KANCHEEPURAM, TAMIL NADU, 631501",
    "Contact Person": "Jaya Prakash",
    "Correspondence Address": "K No. 31/2B, Nagaloothu Street, Kancheepuram, KANCHEEPURAM, TAMIL NADU, 631501",
    "Validity": "Jul 08, 2025 - Perpetual"
  },
  {
    "Name": "JBV Share Broker And Fintech Private Limited",
    "Registration No": "INA000021429",
    "E-mail": "asit@growthavenues.co.in",
    "Telephone": "00919825145217",
    "Fax No": "00919825145217",
    "Address": "1018, Millenium Business Hub, Sarthana, Varachha Road, Surat, SURAT, GUJARAT, 395006",
    "Contact Person": "Asit Mistry",
    "Correspondence Address": "OFFICE NO.2001, THE JUNOMONETA TOWER, OPP. PAL RTO, NEAR RAJHANS CINEMA, PAL ADAJAN, SURAT, GUJARAT, 395009",
    "Validity": "Dec 01, 2025 - Perpetual"
  },
  {
    "Name": "JEENA SCRIPTECH ALPHA ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000013217",
    "E-mail": "gaurav@jsalphaa.com",
    "Address": "JEENA HOUSE , PLOT NO 170, OM NAGAR , OFF PIPELINE ROAD , ANDHERI EAST, MUMBAI, MAHARASHTRA, 400099",
    "Contact Person": "Gaurav Parikh",
    "Correspondence Address": "JEENA HOUSE , PLOT NO 170, OM NAGAR , OFF PIPELINE ROAD , ANDHERI EAST, MUMBAI, MAHARASHTRA, 400099",
    "Validity": "May 07, 2019 - Perpetual"
  },
  {
    "Name": "Jenil k shah",
    "Registration No": "INA000011477",
    "E-mail": "Jenil005@gmail.com",
    "Address": "FLAT NO. 003, A-12 YOGI SWAMI BLDG,, YOGI NAGAR, BORIVLI WEST, MUMBAI, MAHARASHTRA, 400091",
    "Contact Person": "Jenil Shah",
    "Correspondence Address": "FLAT NO. 003, A-12 YOGI SWAMI BLDG, YOGI NAGAR, BORIVLI WEST, MUMBAI, MAHARASHTRA, 400091",
    "Validity": "Aug 21, 2018 - Perpetual"
  },
  {
    "Name": "JHANAVIKA SINGH PROPRIETOR FINTHERP WEALTH MANAGEMENT",
    "Registration No": "INA000007997",
    "E-mail": "chhavi1391@gmail.com",
    "Address": "House no. 843, A-33,, Scheme no. 114, part 1, INDORE, MADHYA PRADESH, 452010",
    "Contact Person": "JHANAVIKA SINGH",
    "Correspondence Address": "House no. 843, A-33, Scheme no. 114, part 1, INDORE, MADHYA PRADESH, 452010",
    "Validity": "Jul 04, 2017 - Perpetual"
  },
  {
    "Name": "Jigar Pradipchandra Shah",
    "Registration No": "INA000018577",
    "E-mail": "ip.jigar@gmail.com",
    "Telephone": "919662542466",
    "Address": "B/801 Gopal Palace, Nr. Shiromani Complex,, Nehrunagar, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "Jigar Shah",
    "Correspondence Address": "B/801 Gopal Palace, Nr. Shiromani Complex, Nehrunagar, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Nov 13, 2023 - Perpetual"
  },
  {
    "Name": "JIGNESH HARSHADRAI SHAH",
    "Registration No": "INA000000789",
    "E-mail": "mr.jignesh.shah@gmail.com",
    "Telephone": "02223683782",
    "Fax No": "02223683782",
    "Address": "JIGNESH HARSHADRAI SHAH, 308, VIMAL SOCIETY, BANGANGA, WALKESHWAR,, MUMBAI, MAHARASHTRA, 400006",
    "Contact Person": "JIGNESH HARSHADRAI SHAH",
    "Correspondence Address": "Jignesh Harshadrai Shah, 308, Vimal Society, Banganga, Walkeshwar, MUMBAI, MAHARASHTRA, 400006",
    "Validity": "Jan 02, 2014 - Perpetual"
  },
  {
    "Name": "Jio BlackRock Investment Advisers Private Limited",
    "Registration No": "INA000020314",
    "E-mail": "investment.advisers@jioblackrock.com",
    "Telephone": "0919082019285",
    "Fax No": "0919082019285",
    "Address": "Unit No. 1301A, 13th Floor, Altimus Building, Plot No. 130, Worli Estate,, Pandurang Budhkar Marg, Worli Colony, Mumbai, MUMBAI, MAHARASHTRA, 400030",
    "Contact Person": "Sudha Gurnani",
    "Correspondence Address": "Unit No. 1301A, 13th Floor, Altimus Building, Plot No. 130, Worli Estate, Pandurang Budhkar Marg, Worli Colony, Mumbai, MUMBAI, MAHARASHTRA, 400030",
    "Validity": "Jun 10, 2025 - Perpetual"
  },
  {
    "Name": "Jio Finance Platform and Service Limited",
    "Registration No": "INA000019938",
    "E-mail": "jasmine.jiwani@jfs.in",
    "Telephone": "00919892187312",
    "Fax No": "00919892187312",
    "Address": "1st Floor, Building 4NA, Maker Maxity, BKC, Bandra, East Mumbai, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Pranav Gupta",
    "Correspondence Address": "1st Floor, Building 4NA, Maker Maxity, BKC, Bandra, East Mumbai, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Feb 11, 2025 - Perpetual"
  },
  {
    "Name": "Jitendra Dangi",
    "Registration No": "INA000007058",
    "E-mail": "capitalfederation@gmail.com",
    "Address": "204, 2nd Floor, Icon Building, Kalani Bagh, DEWAS, MADHYA PRADESH, 455001",
    "Contact Person": "Jitendra Dangi",
    "Correspondence Address": "204, 2nd Floor, Icon Building, Kalani Bagh, DEWAS, MADHYA PRADESH, 455001",
    "Validity": "Feb 07, 2017 - Perpetual"
  },
  {
    "Name": "JITENDRA PRATAP SINGH SOLANKI",
    "Registration No": "INA100000184",
    "Address": "C 32, First Floor, Above Allahabad Bank, Kaushambi, GHAZIABAD, UTTAR PRADESH, 201010",
    "Validity": "Oct 09, 2013 - Perpetual"
  },
  {
    "Name": "JM FINANCIAL SERVICES LIMITED",
    "Registration No": "INA000012351",
    "E-mail": "compliance.jmfs@jmfl.com",
    "Telephone": "912266303030",
    "Fax No": "912266303030",
    "Address": "7th Floor, Cnergy, Appasaheb Marathe Marg, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "Amar Agarwal",
    "Correspondence Address": "5th Floor, Cnergy, Appasaheb Marathe Marg, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Validity": "Jan 14, 2019 - Perpetual"
  },
  {
    "Name": "JMP GOLDEN AEGIS INVESTMENT ADVISOR",
    "Registration No": "INA000010098",
    "E-mail": "ayushsahu.pimr2012@gmail.com",
    "Address": "201/1, Plot No. 351-A, Parneet Appartment,, Mahalaxmi Nagar, Main Road, INDORE, MADHYA PRADESH, 452010",
    "Contact Person": "AYUSH SAHU",
    "Correspondence Address": "201/1, Plot No. 351-A, Parneet Appartment, Mahalaxmi Nagar, Main Road, INDORE, MADHYA PRADESH, 452010",
    "Correspondence E-mail": "ayushsahu.pimr2012@gmail.com",
    "Validity": "Mar 20, 2018 - Perpetual"
  },
  {
    "Name": "Jose Varkey Naduthottam",
    "Registration No": "INA200009573",
    "E-mail": "vnjose@hotmail.com",
    "Address": "Flat no. 1021, Embassy Habitat, 59, Palace Road, BANGALORE, KARNATAKA, 560001",
    "Contact Person": "Jose  Naduthottam",
    "Correspondence Address": "Flat no. 1021, Embassy Habitat, 59, Palace Road, BANGALORE, KARNATAKA, 560001",
    "Validity": "Jan 19, 2018 - Perpetual"
  },
  {
    "Name": "Julius Baer Wealth Advisors (India) Private Limited",
    "Registration No": "INA000003130",
    "E-mail": "naynesh.sampat@juliusbaer.com",
    "Telephone": "91009823420785",
    "Fax No": "91009823420785",
    "Address": "Altimus, 2501, 25th Level, Pandurang Budhkar Marg, Worli, MUMBAI, MAHARASHTRA, 400018",
    "Contact Person": "Naynesh Sampat",
    "Correspondence Address": "Altimus, 2501, 25th Level, Pandurang Budhkar Marg, Worli, MUMBAI, MAHARASHTRA, 400018",
    "Validity": "Jun 30, 2015 - Perpetual"
  },
  {
    "Name": "Jupiter Capital Wealth Management Private Limited",
    "Registration No": "INA000019141",
    "Address": "Prestige Sigma, 5th Floor No. 3, Vitthal Mallya Road, Mahatma Gandhi Road,, BANGALORE, KARNATAKA, 560001",
    "Correspondence Address": "Prestige Sigma, 5th Floor No. 3, Vitthal Mallya Road, Mahatma Gandhi Road, BANGALORE, KARNATAKA, 560001",
    "Validity": "Jun 13, 2024 - Perpetual"
  },
  {
    "Name": "jUPITERR TECHNOLOGIES",
    "Registration No": "INA100010147",
    "E-mail": "piyush20gup@gmail.com",
    "Address": "B-58 1st Floor Harpal Nagar, MORADABAD, UTTAR PRADESH, 244001",
    "Contact Person": "Piyush Gupta",
    "Correspondence Address": "B-58 1st Floor Harpal Nagar, MORADABAD, UTTAR PRADESH, 244001",
    "Validity": "Apr 02, 2018 - Perpetual"
  },
  {
    "Name": "JVT Investment Adviser LLP",
    "Registration No": "INA000019132",
    "E-mail": "Nishant@cxpartners.in",
    "Telephone": "911147640000",
    "Fax No": "911147640000",
    "Address": "Atelier Level 1, Suite No. 3, Worldmark 2,, Aerocity, IGI Airport, South West Delhi, New Delhi,, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110037",
    "Contact Person": "Nishant Mangla",
    "Correspondence Address": "Atelier Level 1, Suite No. 3, Worldmark 2, Aerocity, IGI Airport, South West Delhi, New Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110037",
    "Validity": "Jun 11, 2024 - Perpetual"
  },
  {
    "Name": "JWA Wealth Private Limited",
    "Registration No": "INA000021146",
    "E-mail": "radha@jupiter-wealth.com",
    "Telephone": "917770025145",
    "Address": "5th Floor B Wing Supreme, Business Park, Hiranandani,, MUMBAI, MAHARASHTRA, 400076",
    "Contact Person": "Radha Gupta",
    "Correspondence Address": "Sr.No.52, Office No.301, Baner Business Bay Pune, PUNE, MAHARASHTRA, 411045",
    "Validity": "Oct 10, 2025 - Perpetual"
  },
  {
    "Name": "K Prabhu",
    "Registration No": "INA000018638",
    "E-mail": "prabhu2052@gmail.com",
    "Telephone": "91009789472732",
    "Fax No": "91009789472732",
    "Address": "D.NO 100 B/26, Room No 111 SCS Towers, First Floor,, Namakkal District,, SALEM, TAMIL NADU, 637209",
    "Contact Person": "K Prabhu Kumarasamy",
    "Correspondence Address": "D.NO 100 B/26, Room No 111 SCS Towers, First Floor, Namakkal District, SALEM, TAMIL NADU, 637209",
    "Validity": "Dec 04, 2023 - Perpetual"
  },
  {
    "Name": "Kaitav Shailesh Shah Proprietor Labdhi Advisory",
    "Registration No": "INA000018522",
    "E-mail": "advisory.labdhi@gmail.com",
    "Telephone": "919029332002",
    "Address": "B-41, Harmony, Derasar Lane, Near Jain Temple,, Ram Nagar, Borivali West, MUMBAI, MAHARASHTRA, 400092",
    "Contact Person": "Kaitav  Shah",
    "Correspondence Address": "B-41, Harmony, Derasar Lane, Near Jain Temple, Ram Nagar, Borivali West, MUMBAI, MAHARASHTRA, 400092",
    "Validity": "Nov 07, 2023 - Perpetual"
  },
  {
    "Name": "KALEIDOFIN PRIVATE LIMITED",
    "Registration No": "INA200009874",
    "E-mail": "sucharita@kaleidofin.com",
    "Address": "Module No. A6 02, Block A, 6th Floor Phase 2, Kanagam Road, , IIIT Madras Research Park, Taramani, CHENNAI, TAMIL NADU, 600113",
    "Contact Person": "Sucharita  Mukherjee",
    "Correspondence Address": "Module No. A6 02, Block A, 6th Floor Phase 2, Kanagam Road, , IIIT Madras Research Park, Taramani, CHENNAI, TAMIL NADU, 600113",
    "Validity": "Feb 22, 2018 - Perpetual"
  },
  {
    "Name": "KALPESH N ASHAR",
    "Registration No": "INA000001027",
    "E-mail": "kalpeshashar6@yahoo.co.in",
    "Telephone": "2223429074",
    "Fax No": "2223429074",
    "Address": "OFFICE NO.402,ADAMJI BUILDING,413, NARSHI NATHA STREET MASJID (WEST), MUMBAI, MAHARASHTRA, 400009",
    "Contact Person": "KALPESH N ASHAR",
    "Correspondence Address": "Office No.402,Adamji Building,413, Narshi Natha Street Masjid (West), MUMBAI, MAHARASHTRA, 400009",
    "Validity": "Feb 06, 2014 - Perpetual"
  },
  {
    "Name": "Kanika Kunal Shah",
    "Registration No": "INA000012537",
    "E-mail": "kanikakshah@yahoo.com",
    "Address": "602 Sangam B, Opp Vijay Sales, S. V. Road, Santacruz West, MUMBAI, MAHARASHTRA, 400054",
    "Contact Person": "Kanika Shah",
    "Correspondence Address": "602 Sangam B, Opp Vijay Sales, S. V. Road, Santacruz West, MUMBAI, MAHARASHTRA, 400054",
    "Validity": "Feb 25, 2019 - Perpetual"
  },
  {
    "Name": "KARAT CAPITAL ADVISORS PRIVATE LIMITED",
    "Registration No": "INA200015219",
    "E-mail": "ramesh.bukka@hotmail.com",
    "Address": "Karat Capital Advisors Private Ltd . Villa 43B, Sobha Malachite Phase 1, Jakkur Plantation Road, Jakkur, BANGALORE, KARNATAKA, 560064",
    "Contact Person": "RAMESH BUKKA",
    "Correspondence Address": "Karat Capital Advisors Private Ltd . Villa 43B, Sobha Malachite Phase 1, Jakkur Plantation Road, Jakkur, BANGALORE, KARNATAKA, 560064",
    "Validity": "Sep 25, 2020 - Perpetual"
  },
  {
    "Name": "Kartik M Soni",
    "Registration No": "INA000021465",
    "E-mail": "kartik.iitdelhi@gmail.com",
    "Telephone": "00919717858454",
    "Fax No": "00919717858454",
    "Address": "A-801, Naman Habitat, opp Prabhu Pathare Hall,, Azad Nagar, JP Road, Andheri W, MUMBAI, MAHARASHTRA, 400058",
    "Contact Person": "Kartik  Soni",
    "Correspondence Address": "A-801, Naman Habitat, opp Prabhu Pathare Hall, Azad Nagar, JP Road, Andheri W, MUMBAI, MAHARASHTRA, 400058",
    "Validity": "Dec 08, 2025 - Perpetual"
  },
  {
    "Name": "Kashish Manjani",
    "Registration No": "INA000019822",
    "E-mail": "kashish.manjani@gmail.com",
    "Telephone": "919687520523",
    "Address": "No.20 8, Shanti Sadan, 16th A Main, 2nd Cross, Bysandra East, 3rd, Block, Jayanagar, Bangalore, BANGALORE, KARNATAKA, 560057",
    "Contact Person": "Kashish Manjani",
    "Correspondence Address": "No.20 8, Shanti Sadan, 16th A Main, 2nd Cross, Bysandra East, 3rd, Block, Jayanagar, Bangalore, BANGALORE, KARNATAKA, 560057",
    "Validity": "Jan 27, 2025 - Perpetual"
  },
  {
    "Name": "KASHYAP POPAT",
    "Registration No": "INA000015932",
    "E-mail": "kashyap.popat@gmail.com",
    "Address": "1601 C wing, RNA royal park, MG road, Kandivali, MUMBAI, MAHARASHTRA, 400067",
    "Contact Person": "KASHYAP POPAT",
    "Correspondence Address": "1601 C wing, RNA royal park, MG road, Kandivali, MUMBAI, MAHARASHTRA, 400067",
    "Validity": "Jul 08, 2021 - Perpetual"
  },
  {
    "Name": "Kaustubh Dattatraya Agashe",
    "Registration No": "INA000020785",
    "E-mail": "kaustubh.agashe@gmail.com",
    "Telephone": "919175171215",
    "Address": "277 Shaniwar Peth, Shridhar Building, 1st Floor, PUNE, MAHARASHTRA, 411030",
    "Contact Person": "Kaustubh Agashe",
    "Correspondence Address": "277 Shaniwar Peth, Shridhar Building, 1st Floor, PUNE, MAHARASHTRA, 411030",
    "Validity": "Aug 05, 2025 - Perpetual"
  },
  {
    "Name": "KAVITHA MENON",
    "Registration No": "INA000000037",
    "E-mail": "cavithamenon@gmail.com",
    "Telephone": "919821455882",
    "Address": "1203, Gala Altezza,, Near Shanmukhanand Hall and King Circle Station, Sion,, MUMBAI, MAHARASHTRA, 400022",
    "Contact Person": "KAVITHA MENON",
    "Correspondence Address": "1203, Gala Altezza, Near Shanmukhanand Hall and King Circle Station, Sion, MUMBAI, MAHARASHTRA, 400022",
    "Validity": "Aug 01, 2013 - Perpetual"
  },
  {
    "Name": "Kedia Capital Services Pvt. Ltd.",
    "Registration No": "INA000015525",
    "E-mail": "vijay@kediacapital.com",
    "Address": "Office No. 1-4 Tulip Flower Valley, Khadakpada Circle, KALYAN-DOMBIVALI, MAHARASHTRA, 421301",
    "Contact Person": "Vijay Kedia",
    "Correspondence Address": "Office No. 1-4 Tulip Flower Valley, Khadakpada Circle, KALYAN-DOMBIVALI, MAHARASHTRA, 421301",
    "Validity": "Dec 02, 2020 - Perpetual"
  },
  {
    "Name": "Ketan Doshi",
    "Registration No": "INA000016117",
    "E-mail": "ketandsh@gmail.com",
    "Address": "B-1503 Hubtown Sunmist, N S Phadke Marg, Saiwadi, Andheri (E), MUMBAI, MAHARASHTRA, 400069",
    "Contact Person": "Ketan Doshi",
    "Correspondence Address": "B-1503 Hubtown Sunmist, N S Phadke Marg, Saiwadi, Andheri (E), MUMBAI, MAHARASHTRA, 400069",
    "Validity": "Aug 18, 2021 - Perpetual"
  },
  {
    "Name": "Ketan Kiran Gogte",
    "Registration No": "INA000009649",
    "E-mail": "ketangogte@gmail.com",
    "Address": "865, Snehabandh Society, Bhandarkar Road, PUNE, MAHARASHTRA, 411004",
    "Contact Person": "Ketan Gogte",
    "Correspondence Address": "865, Snehabandh Society, Bhandarkar Road, PUNE, MAHARASHTRA, 411004",
    "Validity": "Feb 02, 2018 - Perpetual"
  },
  {
    "Name": "Khushboo Dhanuka",
    "Registration No": "INA300012547",
    "E-mail": "Khushboo.dhanuka2401@gmail.com",
    "Telephone": "918904181092",
    "Address": "101, Kiranshree Apartment, narayan nagar, arunoday path, GUWAHATI, ASSAM, 781009",
    "Contact Person": "Khushboo  Dhanuka",
    "Correspondence Address": "101, Kiranshree Apartment, narayan nagar, arunoday path, GUWAHATI, ASSAM, 781009",
    "Validity": "Feb 28, 2019 - Perpetual"
  },
  {
    "Name": "Kislay Upadhyay",
    "Registration No": "INA000016056",
    "E-mail": "kislay.upadhyay@iiml.org",
    "Address": "9A/30, Shiv Mandir Road, Indrapuri, shiv mandir road, indrapuri, PATNA, BIHAR, 800024",
    "Contact Person": "Kislay Upadhyay",
    "Correspondence Address": "9A/30, Shiv Mandir Road, Indrapuri, PATNA, BIHAR, 800024",
    "Validity": "Jul 29, 2021 - Perpetual"
  },
  {
    "Name": "Kivah Advisors",
    "Registration No": "INA200014186",
    "E-mail": "mithun@kivahadvisors.com",
    "Address": "624 Sobha Dewflower Sarakki Main Road JP Nagar 1st Phase, BANGALORE, KARNATAKA, 560078",
    "Contact Person": "mithun aswath",
    "Correspondence Address": "624 Sobha Dewflower Sarakki Main Road JP Nagar 1st Phase, BANGALORE, KARNATAKA, 560078",
    "Validity": "Nov 22, 2019 - Perpetual"
  },
  {
    "Name": "KOLADI UKKURU VARGHESE",
    "Registration No": "INA000021650",
    "E-mail": "kuvarghese@gmail.com",
    "Telephone": "00918606590287",
    "Fax No": "00918606590287",
    "Address": "2B Kalyan Habitat, Puthur Road, Chelakottukara, THRISSUR, KERALA, 680006",
    "Contact Person": "KOLADI VARGHESE",
    "Correspondence Address": "2B Kalyan Habitat, Puthur Road, Chelakottukara, THRISSUR, KERALA, 680006",
    "Validity": "Dec 30, 2025 - Perpetual"
  },
  {
    "Name": "KONGRUENT  WEALTH MANAGEMENT SERVICES LLP",
    "Registration No": "INA000004070",
    "E-mail": "bhaveshjhala@kongruent.co.in",
    "Telephone": "02240066650",
    "Fax No": "02240066650",
    "Address": "410 B HIVE67 ICON POISAR GYMKHANA ROAD LOKMANYA TILAK NAGAR POISAR, NEAR RAGHULEELA MALL KANDIVALI WEST MUMBAI, MUMBAI, MAHARASHTRA, 400067",
    "Contact Person": "MR. BHAVESH JHALA",
    "Correspondence Address": "G 73 Profit  Centre Gate  No 2, Opposite to Panchsheel  Height  Bldg, Mahavir  Nagar, Kandivali West, MUMBAI, MAHARASHTRA, 400067",
    "Validity": "Jan 25, 2016 - Perpetual"
  },
  {
    "Name": "Korman Capital Investment Advisors LLP",
    "Registration No": "INA000018656",
    "E-mail": "gaurav@kormancapital.com",
    "Telephone": "00919611877783",
    "Fax No": "00919611877783",
    "Address": "WeWork Prestige Atlanta,80 Feet Main Road, Koramangala 1A Block, Industrial Layout, BANGALORE, KARNATAKA, 560034",
    "Contact Person": "Gaurav Kumar  Somani",
    "Correspondence Address": "Unit 2, 4th Floor, Olsen Spaces, Site No. 41, Agara Village, 12th Main Road, 14th Cross, HSR Layout, Sector 6, Banglore, BANGALORE, KARNATAKA, 560102",
    "Validity": "Dec 06, 2023 - Perpetual"
  },
  {
    "Name": "Kotak Alternate Asset Managers Limited",
    "Registration No": "INA000012519",
    "E-mail": "sanjay.mitra@kotak.com",
    "Telephone": "912243360000",
    "Fax No": "912243360000",
    "Address": "27BKC, 7th Floor, Plot No. C-27, G Block, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Sanjay Mitra",
    "Correspondence Address": "27BKC, 7th Floor, Plot No. C-27, G Block, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Feb 25, 2019 - Perpetual"
  },
  {
    "Name": "Krati Garg",
    "Registration No": "INA100012367",
    "E-mail": "krati06@gmail.com",
    "Address": "I-5/29, Sector 16, Rohini, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110089",
    "Contact Person": "Krati Garg",
    "Correspondence Address": "I-5/29, Sector 16, Rohini, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110089",
    "Validity": "Jan 15, 2019 - Perpetual"
  },
  {
    "Name": "Kredent InfoEdge Private Limited",
    "Registration No": "INA000017781",
    "E-mail": "vivek@stockedge.com",
    "Telephone": "0919903048099",
    "Fax No": "0919903048099",
    "Address": "J-1/14, BLOCK - EP and GP, 9TH FLOOR, , SECTOR - V, SALTLAKE CITY KOLKATA, KOLKATA, WEST BENGAL, 700091",
    "Contact Person": "Vivek Bajaj",
    "Correspondence Address": "J-1/14, BLOCK - EP and GP, 9TH FLOOR, , SECTOR - V, SALTLAKE CITY KOLKATA, KOLKATA, WEST BENGAL, 700091",
    "Validity": "Mar 23, 2023 - Perpetual"
  },
  {
    "Name": "Krishna Goyal Proprietor Fynvestor Investment Advisory",
    "Registration No": "INA000020563",
    "E-mail": "krishnagoyal.ece@gmail.com",
    "Telephone": "917610025853",
    "Address": "2997, Sector 23, Market Road, GURGAON, HARYANA, 122017",
    "Contact Person": "Krishna Goyal",
    "Correspondence Address": "2997, Sector 23, Market Road, GURGAON, HARYANA, 122017",
    "Validity": "Jul 11, 2025 - Perpetual"
  },
  {
    "Name": "KRISHNA RATH",
    "Registration No": "INA000002892",
    "E-mail": "connect@finvestor.in",
    "Telephone": "221237219446724",
    "Fax No": "221237219446724",
    "Address": "8th Floor SRB Towers, Infocity Patia Bhubaneswar Odisha, BHUBANESWAR, ODISHA, 751024",
    "Contact Person": "KRISHNA  RATH",
    "Correspondence Address": "8th Floor SRB Towers Infocity Patia Bhubaneswar Odisha, BHUBANESWAR, ODISHA, 751024",
    "Validity": "Apr 01, 2015 - Perpetual"
  },
  {
    "Name": "KRISTAL ADVISORS PRIVATE LIMITED",
    "Registration No": "INA100014569",
    "E-mail": "Simson@kristal.ai",
    "Telephone": "00918861007993",
    "Fax No": "00918861007993",
    "Address": "Indiqube Orion, BBMP Khata No. 1802/55/13/55/11B, Sy. No. 55/11B & 55/13, 2nd Sector, 24th Main Road,HSR Layout, Haralukunte Village, Begur Hobli,, BANGALORE, KARNATAKA, 560102",
    "Contact Person": "SIMSON R SIMSON R",
    "Correspondence Address": "Indiqube Orion, 1st Floor, 2nd Sector, 24th Main Road, Haralukunte Village, Begur Hobli, HSR Layout, BANGALORE, KARNATAKA, 560102",
    "Validity": "Mar 11, 2020 - Perpetual"
  },
  {
    "Name": "KRUTIKA KATHAL",
    "Registration No": "INA000020280",
    "E-mail": "kathal.krutika@gmail.com",
    "Telephone": "919665995196",
    "Address": "FL No C-26, Jijaji Nagari, Borate Farms54/4 , Kothrud NR Mahatma, Pune , 411038, PUNE, MAHARASHTRA, 411038",
    "Contact Person": "KRUTIKA KATHAL",
    "Correspondence Address": "FL No C-26, Jijaji Nagari, Borate Farms54/4 , Kothrud NR Mahatma, Pune , 411038, PUNE, MAHARASHTRA, 411038",
    "Validity": "Jun 04, 2025 - Perpetual"
  },
  {
    "Name": "Kundan Mishra",
    "Registration No": "INA100013649",
    "E-mail": "info@cluefinserv.com",
    "Telephone": "919598539660",
    "Address": "592CHHA/672/1, SWAROOP NAGAR, TELIBAGH, LUCKNOW, UTTAR PRADESH, 226025",
    "Contact Person": "Kundan Mishra",
    "Correspondence Address": "592CHHA/672/1, SWAROOP NAGAR, TELIBAGH, LUCKNOW, UTTAR PRADESH, 226025",
    "Validity": "Jul 17, 2019 - Perpetual"
  },
  {
    "Name": "KUNJ AGARWAL",
    "Registration No": "INA300009312",
    "E-mail": "WRITE2KUNJ@GMAIL.COM",
    "Address": "Bidhan Market Road, Near Saibal Nursing Home, P. O / P . S. Siliguri, SILIGURI, WEST BENGAL, 734001",
    "Contact Person": "KUNJ AGARWAL",
    "Correspondence Address": "Bidhan Market Road, Near Saibal Nursing Home, P. O / P . S. Siliguri, SILIGURI, WEST BENGAL, 734001",
    "Validity": "Dec 18, 2017 - Perpetual"
  },
  {
    "Name": "KURTOSIS ANALYTICS & ADVISORS",
    "Registration No": "INA000005580",
    "E-mail": "k.anantrao@kurtosis.in",
    "Telephone": "022 65172483",
    "Fax No": "022 65172483",
    "Address": "1, 1ST FLOOR, C-5/7, GALAXY APARTMENTS, SECTOR- 3,  CBD BELAPUR, NAVI MUMBAI, MAHARASHTRA, 400614",
    "Contact Person": "MR. KRISHNAMOORTHY ANANT RAO",
    "Correspondence Address": "1, 1st Floor, C-5/7, Galaxy Apartments, Sector- 3,  CBD Belapur, NAVI MUMBAI, MAHARASHTRA, 400614",
    "Validity": "Oct 17, 2016 - Perpetual"
  },
  {
    "Name": "KUSH BOHRA",
    "Registration No": "INA000008525",
    "E-mail": "KUSH.BOHRA@GMAIL.COM",
    "Telephone": "919769114664",
    "Address": "k501 palm court complex new link road malad west, MUMBAI, MAHARASHTRA, 400064",
    "Contact Person": "KUSH BOHRA",
    "Correspondence Address": "k501 palm court complex new link road malad west, MUMBAI, MAHARASHTRA, 400064",
    "Validity": "Oct 03, 2017 - Perpetual"
  },
  {
    "Name": "KUSHAL BHATEJA PROPRIETOR OF FINCLIN INVESTMENT ADVISORS",
    "Registration No": "INA100010305",
    "E-mail": "KUSHALBHATEJA@GMAIL.COM",
    "Address": "512, Suneja Tower - 1, District Centre,, Janak Puri, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110058",
    "Contact Person": "KUSHAL BHATEJA",
    "Correspondence Address": "512, Suneja Tower - 1, District Centre, Janak Puri, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110058",
    "Validity": "Apr 12, 2018 - Perpetual"
  },
  {
    "Name": "L.F.C. SECURITIES PVT. LTD.",
    "Registration No": "INA000011617",
    "E-mail": "info@labdhi.in",
    "Address": "104-111, BHAVESHWAR MARKET, M.G. ROAD, GHATKOPAR- (E), MUMBAI, MAHARASHTRA, 400077",
    "Contact Person": "KETAN PAREKH",
    "Correspondence Address": "104-111, BHAVESHWAR MARKET, M.G. ROAD, GHATKOPAR- (E), MUMBAI, MAHARASHTRA, 400077",
    "Validity": "Sep 04, 2018 - Perpetual"
  },
  {
    "Name": "Ladder7 Wealth Planners Pvt. Ltd.",
    "Registration No": "INA000016001",
    "E-mail": "ladder7@gmail.com",
    "Address": "B-404, Kaveri CHS, 5th Road, Near RBI Quarters, Diamond Garden, Chembur (East), MUMBAI, MAHARASHTRA, 400071",
    "Contact Person": "Suresh Sadagopan",
    "Correspondence Address": "B-404, Kaveri CHS, 5th Road, Near RBI Quarters, Diamond Garden, Chembur (East), MUMBAI, MAHARASHTRA, 400071",
    "Validity": "Jul 27, 2021 - Perpetual"
  },
  {
    "Name": "LAMRON ANALYSTS PVT LTD",
    "Registration No": "INA300003772",
    "E-mail": "soumitra.sengupta@lamronanalysts.com",
    "Telephone": "03324740640",
    "Fax No": "03324740640",
    "Address": "109/40B HAZRA ROAD, KOLKATA, WEST BENGAL, 700026",
    "Contact Person": "SOUMITRA SENGUPTA",
    "Correspondence Address": "109/40B Hazra Road, KOLKATA, WEST BENGAL, 700026",
    "Validity": "Nov 09, 2015 - Perpetual"
  },
  {
    "Name": "Lazara Capital Advisors LLP",
    "Registration No": "INA000015899",
    "E-mail": "pranav@lazara.in",
    "Telephone": "919820859571",
    "Fax No": "919820859571",
    "Address": "7th Floor, Mephezalea Tower, Plot No 364/3, Lane No. 6, Koregaon Park,, PUNE, MAHARASHTRA, 411001",
    "Contact Person": "PRANAV VORA",
    "Correspondence Address": "7th Floor, Mephezalea Tower, Plot No 364/3, Lane No. 6, Koregaon Park, PUNE, MAHARASHTRA, 411001",
    "Validity": "May 21, 2021 - Perpetual"
  },
  {
    "Name": "Legacy Custodians Advisory Private Limited",
    "Registration No": "INA000019567",
    "E-mail": "jay.shah@thelegacycustodians.com",
    "Telephone": "00919920120999",
    "Fax No": "00919920120999",
    "Address": "WeWork, 2nd Floor, Plot 264/265, Vaswani Chambers,, Dr. Annie Besant Road, Worli Colony, MUMBAI, MAHARASHTRA, 400030",
    "Contact Person": "Jay Devang Shah",
    "Correspondence Address": "WeWork, 2nd Floor, Plot 264/265, Vaswani Chambers, Dr. Annie Besant Road, Worli Colony, MUMBAI, MAHARASHTRA, 400030",
    "Validity": "Sep 23, 2024 - Perpetual"
  },
  {
    "Name": "LEKH RAM",
    "Registration No": "INA200013761",
    "E-mail": "ram.lekh@gmail.com",
    "Address": "HNO 333,1ST FLOOR,14TH CROSS, 2ND BLOCK RT NAGAR NEAR PATEL'S INN, BANGALORE, KARNATAKA, 560032",
    "Contact Person": "LEKH RAM",
    "Correspondence Address": "HNO 333,1ST FLOOR,14TH CROSS, 2ND BLOCK RT NAGAR NEAR PATEL'S INN, BANGALORE, KARNATAKA, 560032",
    "Validity": "Aug 08, 2019 - Perpetual"
  },
  {
    "Name": "LGT Securities India Private Limited",
    "Registration No": "INA000019716",
    "E-mail": "nimish.shah@lgtindia.in",
    "Telephone": "91009821046488",
    "Fax No": "91009821046488",
    "Address": "7TH Floor, A Block, Shiv Sagar Estate, Dr Annie Besant Road,, Near Nehru Transit Camp Centre, Worli,, MUMBAI, MAHARASHTRA, 400018",
    "Contact Person": "Nimish Shah",
    "Correspondence Address": "7TH Floor, A Block, Shiv Sagar Estate, Dr Annie Besant Road, Near Nehru Transit Camp Centre, Worli, MUMBAI, MAHARASHTRA, 400018",
    "Validity": "Dec 06, 2024 - Perpetual"
  },
  {
    "Name": "Lightrock Investment Advisors Private Limited",
    "Registration No": "INA000010636",
    "E-mail": "neil@lightrock.com",
    "Telephone": "000009860217816",
    "Fax No": "000009860217816",
    "Address": "Cabin No. 1, 3rd Floor, No. 953, 12th Main,, HAL 2nd Stage, Indiranagar,, BANGALORE, KARNATAKA, 560038",
    "Contact Person": "Neil Deshpande",
    "Correspondence Address": "Cabin No. 1, 3rd Floor, No. 953, 12th Main, HAL 2nd Stage, Indiranagar, BANGALORE, KARNATAKA, 560038",
    "Validity": "Feb 08, 2022 - Perpetual"
  },
  {
    "Name": "Lime Internet Private Limited",
    "Registration No": "INA000018133",
    "Validity": "Jun 27, 2023 - Perpetual"
  },
  {
    "Name": "LKP Wealth Advisory Limited",
    "Registration No": "INA000009861",
    "E-mail": "ho_compliance@lkpsec.com",
    "Telephone": "919136525875",
    "Fax No": "919136525875",
    "Address": "203, Embassy Centre,, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Contact Person": "Ritesh  Tiwari",
    "Correspondence Address": "1303-1304, Raheja Centre, Free Press Marg, Nariman point, MUMBAI, MAHARASHTRA, 400001",
    "Validity": "Feb 21, 2018 - Perpetual"
  },
  {
    "Name": "Llama Research LLP",
    "Registration No": "INA000018780",
    "E-mail": "karan5987@gmail.com",
    "Telephone": "912618800395987",
    "Fax No": "912618800395987",
    "Address": "Plot no,106, Mulberry Homes,, Veluk, Olpad, Narthan,, SURAT, GUJARAT, 395005",
    "Contact Person": "Karan Shah",
    "Correspondence Address": "Plot no,106, Mulberry Homes, Veluk, Olpad, Narthan, SURAT, GUJARAT, 395005",
    "Validity": "Jan 18, 2024 - Perpetual"
  },
  {
    "Name": "LN FINTECH ADVISORY PRIVATE LIMITED",
    "Registration No": "INA000020545",
    "E-mail": "krishna.nagpal0409@gmail.com",
    "Telephone": "00919930158116",
    "Fax No": "00919930158116",
    "Address": "201, Swan View Chs Ltd, 14th Road, Plot No 396, Khar Colony,, MUMBAI, MAHARASHTRA, 400052",
    "Contact Person": "KRISHNA NAGPAL",
    "Correspondence Address": "201, Swan View Chs Ltd, 14th Road, Plot No 396, Khar Colony, MUMBAI, MAHARASHTRA, 400052",
    "Validity": "Jul 10, 2025 - Perpetual"
  },
  {
    "Name": "LOKENDRA SAHU PROPRIETOR AURUM FINANCIAL SERVICES",
    "Registration No": "INA000002520",
    "E-mail": "aurum.service4u@gmail.com",
    "Telephone": "07310000000",
    "Fax No": "07310000000",
    "Address": "340 D/AD, SCHEME NO. 74-C, VIJAY NAGAR INDORE, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "LOKENDRA SAHU",
    "Correspondence Address": "203, Sanchit Apartment, Scheme No. 78, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Dec 30, 2014 - Perpetual"
  },
  {
    "Name": "Lookinglaz Technologies LLP",
    "Registration No": "INA200016917",
    "E-mail": "vikram.biswas@fliber.in",
    "Telephone": "91009886767218",
    "Fax No": "91009886767218",
    "Address": "1296, 5th floor, 4th Main, 18th Cross road, Sector 7, HSR Layout, BANGALORE, KARNATAKA, 560102",
    "Contact Person": "Vikram  Biswas",
    "Correspondence Address": "1296, 5th floor, 4th Main, 18th Cross road, Sector 7, HSR Layout, BANGALORE, KARNATAKA, 560102",
    "Validity": "Oct 20, 2023 - Perpetual"
  },
  {
    "Name": "Lotusdew Wealth and Investment Advisors Private Limited",
    "Registration No": "INA200013770",
    "E-mail": "abhishek.banerjee@lotusdew.in",
    "Address": "cabin 3 4th Floor 1A and 1B Jyoti Imperial, Gachibowli Rd Janardana Hills Lumbini Avenue, HYDERABAD, TELANGANA, 500032",
    "Contact Person": "Abhishek Banerjee",
    "Correspondence Address": "3 Eurospace, 4th Floor, Jyothi Imperial, Vamsiram Building, Gachibowli, HYDERABAD, TELANGANA, 500032",
    "Validity": "Aug 13, 2019 - Perpetual"
  },
  {
    "Name": "Lunchbrake Classic Private Limited",
    "Registration No": "INA000018072",
    "E-mail": "arpit@fold.money",
    "Telephone": "00919654584496",
    "Fax No": "00919654584496",
    "Address": "97, 4th Main, 1st Cross Rd, New Tippasandra,, Bengaluru, Karnataka 560075, BANGALORE, KARNATAKA, 560075",
    "Contact Person": "Arpit Agarwal",
    "Correspondence Address": "4th Floor, 311, Binnamangala 1st Stage, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038, BANGALORE, KARNATAKA, 560038",
    "Validity": "Jun 08, 2023 - Perpetual"
  },
  {
    "Name": "M/s Cycas Investment Advisers",
    "Registration No": "INA200013017",
    "E-mail": "ajay.sharma@cycas.co.in",
    "Address": "Villa 350, Indu Fortune Fields, KPHB Road Phase 13, Kukatpally, HYDERABAD, TELANGANA, 500072",
    "Contact Person": "Ajay Sharma",
    "Correspondence Address": "Villa 350, Indu Fortune Fields, KPHB Road Phase 13, Kukatpally, HYDERABAD, TELANGANA, 500072",
    "Validity": "Apr 08, 2019 - Perpetual"
  },
  {
    "Name": "MADHUPAM KRISHNA",
    "Registration No": "INA100003899",
    "E-mail": "madhupam@gmail.com",
    "Telephone": "01412812904",
    "Fax No": "01412812904",
    "Address": "638-B, LANENO.-8, JANPATH, RANI SATI NAGAR, AJMER ROAD, JAIPUR, RAJASTHAN, 302019",
    "Contact Person": "MADHUPAM KRISHNA",
    "Correspondence Address": "638-B, LANENO.-8, JANPATH, RANI SATI NAGAR, AJMER ROAD, JAIPUR, RAJASTHAN, 302019",
    "Validity": "Dec 10, 2015 - Perpetual"
  },
  {
    "Name": "Madhur Gundecha Sole Proprietor of Ligna Wealth Advisors",
    "Registration No": "INA000019248",
    "E-mail": "madhur.gundecha@lignawealth.com",
    "Telephone": "919820765887",
    "Address": "Flat No. X-3118, 3rd Floor, Plot No-3, Akshar Business Park, , Sector 25 Vashi, Road, Navi Mumbai, NAVI MUMBAI, MAHARASHTRA, 400703",
    "Contact Person": "Madhur Gundecha",
    "Correspondence Address": "Flat No. X-3118, 3rd Floor, Plot No-3, Akshar Business Park, , Sector 25 Vashi, Road, Navi Mumbai, NAVI MUMBAI, MAHARASHTRA, 400703",
    "Validity": "Jun 21, 2024 - Perpetual"
  },
  {
    "Name": "MADHUVAN INVESTMENT ADVISORS",
    "Registration No": "INA000014207",
    "E-mail": "parita@madhuvan.com",
    "Telephone": "07930011972",
    "Fax No": "07930011972",
    "Address": "G3 Ground Floor, Madhuban, Nr. Mandalpur Under bridge, Ellisbridge, Ahmedabad, AHMEDABAD, GUJARAT, 380006",
    "Contact Person": "PARITA PATEL",
    "Correspondence Address": "G3 Ground Floor, Madhuban, Nr. Mandalpur Under bridge, Ellisbridge, Ahmedabad, AHMEDABAD, GUJARAT, 380006",
    "Validity": "Nov 22, 2019 - Perpetual"
  },
  {
    "Name": "MAHESH B PUTTAMADAPPA",
    "Registration No": "INA200002361",
    "E-mail": "maheshbp2006@gmail.com",
    "Telephone": "8026530991",
    "Fax No": "8026530991",
    "Address": "434, 13TH MAIN, 3RD CROSS, SRINIVASANAGAR, 2ND PHASE, BANGALORE, KARNATAKA, 560050",
    "Contact Person": "MAHESH B PUTTAMADAPPA",
    "Correspondence Address": "434, 13TH MAIN, 3RD CROSS, SRINIVASANAGAR, 2ND PHASE, BANGALORE, KARNATAKA, 560050",
    "Validity": "Nov 05, 2014 - Perpetual"
  },
  {
    "Name": "MAHESH KABRA (PROPRIETOR : TAURUSCAP INVESTMENT ADVISERS)",
    "Registration No": "INA000015923",
    "E-mail": "mahesh@tauruscap.in",
    "Telephone": "917710099850",
    "Address": "502 A, Maheshwar Prakash 2, Cottage Lane, SV Road, Santacruz West, MUMBAI, MAHARASHTRA, 400054",
    "Contact Person": "Mahesh Kabra",
    "Correspondence Address": "502 A, Maheshwar Prakash 2, Cottage Lane, SV Road, Santacruz West, MUMBAI, MAHARASHTRA, 400054",
    "Validity": "Jul 06, 2021 - Perpetual"
  },
  {
    "Name": "Mahesh Thangaraju -Proprietor EquityStreet Investment Advisor",
    "Registration No": "INA000019363",
    "E-mail": "naresh.pandya@bseasl.com",
    "Address": "504, Brigade Exotica Apartment, Old Madras Road, Before Budigere Cross, Avalahalli, Virgonagar, BANGALORE, KARNATAKA, 560049",
    "Contact Person": "Mahesh  Thangaraju",
    "Correspondence Address": "504, Brigade Exotica Apartment, Old Madras Road, Before Budigere Cross, Avalahalli, Virgonagar, BANGALORE, KARNATAKA, 560049",
    "Validity": "Jul 02, 2024 - Perpetual"
  },
  {
    "Name": "Malay Kirti Shah",
    "Registration No": "INA000019619",
    "E-mail": "malayshah@crispidea.com",
    "Telephone": "919916106105",
    "Address": "10th Floor, C-1005, August Park,, 1st B Cross Road, BANGALORE, KARNATAKA, 560093",
    "Contact Person": "Malay Kirti Shah",
    "Correspondence Address": "10th Floor, C-1005, August Park, 1st B Cross Road, BANGALORE, KARNATAKA, 560093",
    "Validity": "Oct 18, 2024 - Perpetual"
  },
  {
    "Name": "MANEK FINANCIAL ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000004401",
    "Address": "C/517, Avior Corporate Park,, Nirmal Galaxy, L.B.S Marg,, MUMBAI, MAHARASHTRA, 400080",
    "Validity": "Mar 21, 2016 - Perpetual"
  },
  {
    "Name": "Mangal Keshav Financial Services LLP",
    "Registration No": "INA000014331",
    "E-mail": "compliance@mangalkeshav.com",
    "Address": "501,Heritage Plaza, Opp Indian Oil COlony,J.P.Road.Andheri(W), MUMBAI, MAHARASHTRA, 400053",
    "Contact Person": "Gyan Prakash Sinha",
    "Correspondence Address": "501,Heritage Plaza, Opp Indian Oil COlony,J.P.Road.Andheri(W), MUMBAI, MAHARASHTRA, 400053",
    "Validity": "Dec 24, 2019 - Perpetual"
  },
  {
    "Name": "Manish Gupta, proprietor of M/s Equinox Investment Advisors",
    "Registration No": "INA100017186",
    "E-mail": "equinoxindiaria@gmail.com",
    "Address": "B-102, Sector 50, NOIDA, UTTAR PRADESH, 201301",
    "Contact Person": "Manish Gupta",
    "Correspondence Address": "B-102, Sector 50, NOIDA, UTTAR PRADESH, 201301",
    "Validity": "Jul 29, 2022 - Perpetual"
  },
  {
    "Name": "Manish K Shah",
    "Registration No": "INA000016180",
    "E-mail": "shahmani1@gmail.com",
    "Address": "701 A wing Krishna Palace, Asha Nagar, off, W.E. Highway, Near Sai Dham Temple, Kandivali(east), MUMBAI, MAHARASHTRA, 400101",
    "Contact Person": "Manish Shah",
    "Correspondence Address": "701 A wing Krishna Palace, Asha Nagar, off, W.E. Highway, Near Sai Dham Temple, Kandivali(east), MUMBAI, MAHARASHTRA, 400101",
    "Validity": "Sep 09, 2021 - Perpetual"
  },
  {
    "Name": "Manish Khandelwal",
    "Registration No": "INA000012953",
    "E-mail": "manishshri@hotmail.com",
    "Address": "B1401 Videocon Towers, Thakur Complex, Kandivali East, Mumbai, MUMBAI, MAHARASHTRA, 400101",
    "Contact Person": "Manish Khandelwal",
    "Correspondence Address": "B1401 Videocon Towers, Thakur Complex, Kandivali East, Mumbai, MUMBAI, MAHARASHTRA, 400101",
    "Validity": "Apr 05, 2019 - Perpetual"
  },
  {
    "Name": "MANISH KUMAR GOUR PROP. STAR WORLD RESEARCH",
    "Registration No": "INA000005499",
    "E-mail": "infoworldsrs@gmail.com",
    "Telephone": "07316544487",
    "Fax No": "07316544487",
    "Address": "PLOT NO. 42, FLAT 201, MR-3, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Aug 31, 2016 - Perpetual"
  },
  {
    "Name": "Mann Mishra",
    "Registration No": "INA000009515",
    "E-mail": "mishramanish70@gmail.com",
    "Address": "Office No. 424-425, 4th floor, Shagun Sterling Tower,, Above Manyawar Showroom, Vijaynagar,, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "MANISH MISHRA",
    "Correspondence Address": "Office No. 424-425, 4th floor, Shagun Sterling Tower, Above Manyawar Showroom, Vijaynagar, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Jan 11, 2018 - Perpetual"
  },
  {
    "Name": "Manoj Kumar Kaushik",
    "Registration No": "INA000021508",
    "E-mail": "manojkaush@gmail.com",
    "Telephone": "00919302176601",
    "Fax No": "00919302176601",
    "Address": "Plot 27 Power Green City, Chilhati Tifra Zone, Bilaspur Chilhati, BILASPUR, CHHATTISGARH, 495551",
    "Contact Person": "Manoj Kaushik",
    "Correspondence Address": "Plot 27 Power Green City, Chilhati Tifra Zone, Bilaspur Chilhati, BILASPUR, CHHATTISGARH, 495551",
    "Validity": "Dec 11, 2025 - Perpetual"
  },
  {
    "Name": "Manoj Thankamma Sasidharan",
    "Registration No": "INA200017077",
    "E-mail": "tsmanoj@yahoo.com",
    "Telephone": "917012705159",
    "Address": "520, Sasankom, Prasanth Nagar, Ulloor, THIRUVANANTHAPURAM, KERALA, 695011",
    "Contact Person": "Manoj Sasidharan",
    "Correspondence Address": "520, Sasankom, Prasanth Nagar, Ulloor, THIRUVANANTHAPURAM, KERALA, 695011",
    "Validity": "Jun 30, 2022 - Perpetual"
  },
  {
    "Name": "MANU CHHABRA",
    "Registration No": "INA200013992",
    "E-mail": "absolute.finserve@gmail.com",
    "Address": "D2, Saicharan appartment,10th Cross, Doddabanswadi,near ramamurthy chowk,kalyannagar, BANGALORE, KARNATAKA, 560043",
    "Contact Person": "MANU CHHABRA",
    "Correspondence Address": "D2, Saicharan appartment,10th Cross, Doddabanswadi,near ramamurthy chowk,kalyannagar, BANGALORE, KARNATAKA, 560043",
    "Validity": "Sep 23, 2019 - Perpetual"
  },
  {
    "Name": "MARATHON TRENDS ADVISORY PRIVATE LIMITED",
    "Registration No": "INA000018319",
    "E-mail": "vineet.ia@marathontrends.com",
    "Telephone": "000229819500166",
    "Fax No": "000229819500166",
    "Address": "202, Hill View No.1, 2nd Floor, 241,, Hill Road, Bandra West, MUMBAI, MAHARASHTRA, 400050",
    "Contact Person": "Vineet Kumar Singh",
    "Correspondence Address": "602, Landmark Platinum, Plot No. 337, 338, Corner of SV Road and 34th Road, Khar West, MUMBAI, MAHARASHTRA, 400052",
    "Validity": "Aug 01, 2023 - Perpetual"
  },
  {
    "Name": "Marcellus Capital Partners LLP",
    "Registration No": "INA000017204",
    "Address": "Boston House, 102, 1st Floor,Suren Road, Near WEH Metro Station,t, Andheri East, MUMBAI, MAHARASHTRA, 400093",
    "Validity": "Sep 23, 2022 - Perpetual"
  },
  {
    "Name": "MARKET HUB STOCK BROKING PRIVATE LIMITED",
    "Registration No": "INA000005333",
    "Validity": "Aug 11, 2016 - Perpetual"
  },
  {
    "Name": "MARWADI CHANDARANA  INTERMEDIARIES BROKERS PRIVATE LIMITED",
    "Registration No": "INA000021517",
    "E-mail": "mcibpl@chandaranaonline.net",
    "Telephone": "00919313923552",
    "Fax No": "00919313923552",
    "Address": "12th floor, office No. 1201 to 1205, X-Change Plaza, Building No. 53E, Road 5E, Zone 5, Gift City, Gandhinagar, GANDHINAGAR, GUJARAT, 382050",
    "Contact Person": "Chandni Chhabariya",
    "Correspondence Address": "Chandarana House, Dr Radhakrishnan Road, Nr Kathiawar, Gymkhana Opp. Rkc College, Rajkot, RAJKOT, GUJARAT, 360001",
    "Validity": "Dec 11, 2025 - Perpetual"
  },
  {
    "Name": "Maxie Jose (Sole Proprietor),  Affluenz Wealth Advisors",
    "Registration No": "INA200001231",
    "E-mail": "maxiejose@affluenzwealth.com",
    "Telephone": "00914843567751",
    "Fax No": "00914843567751",
    "Address": "Level 1, MIG 386, Panampilly Nagar, KOCHI, KERALA, 682036",
    "Contact Person": "Maxie Jose",
    "Correspondence Address": "LEVEL 1 MIG 386, PANAMPILLY NAGAR, KOCHI, KERALA, 682036",
    "Validity": "Mar 12, 2014 - Perpetual"
  },
  {
    "Name": "Maximus Financial Advisors LLP",
    "Registration No": "INA000019512",
    "E-mail": "arvindbansal76@gmail.com",
    "Telephone": "00919987163572",
    "Fax No": "00919987163572",
    "Address": "4302, Planet Godrej, T-2, K K Marg Mahalaxmi East, Jacob Circle,, Tambit naka Police Bit, MUMBAI, MAHARASHTRA, 400011",
    "Contact Person": "Arvind Bansal",
    "Correspondence Address": "4302, Planet Godrej, T-2, K K Marg Mahalaxmi East, Jacob Circle, Tambit naka Police Bit, MUMBAI, MAHARASHTRA, 400011",
    "Validity": "Aug 28, 2024 - Perpetual"
  },
  {
    "Name": "Mehak Wealth Management Private Limited",
    "Registration No": "INA000021401",
    "E-mail": "malhotra245@gmail.com",
    "Telephone": "00918799796119",
    "Fax No": "00918799796119",
    "Address": "245 2ND FLOOR , JAGRITI ENCLAVE VIKAS MARG EXTENSION, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110092",
    "Contact Person": "Rajan Malhotra",
    "Correspondence Address": "245 2ND FLOOR , JAGRITI ENCLAVE VIKAS MARG EXTENSION, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110092",
    "Validity": "Nov 27, 2025 - Perpetual"
  },
  {
    "Name": "MENTOR RING FINANCIAL ADVISORY PRIVATE LIMITED",
    "Registration No": "INA000018832",
    "E-mail": "info@mentorring.co.in",
    "Telephone": "91009880202808",
    "Fax No": "91009880202808",
    "Address": "No 3 3rd Floor 90 7th Main Rd  Kalyan Nagar, BANGALORE, KARNATAKA, 560043",
    "Contact Person": "Thejus Palathingal",
    "Correspondence Address": "No 3 3rd Floor 90 7th Main Rd  Kalyan Nagar, BANGALORE, KARNATAKA, 560043",
    "Validity": "Feb 09, 2024 - Perpetual"
  },
  {
    "Name": "Mercer Wealth India Private Limited",
    "Registration No": "INA200000571",
    "Address": "No 112, AKR Tech Park, B Block, 7th Mile Hosur Road,, Krishna Reddy Industrail Area, Bengaluru, BANGALORE, KARNATAKA, 560068",
    "Validity": "Dec 18, 2013 - Perpetual"
  },
  {
    "Name": "MFS Capital Partners",
    "Registration No": "INA000017295",
    "E-mail": "principalofficer@mfscapitalpartners.com",
    "Telephone": "00918976590131",
    "Fax No": "00918976590131",
    "Address": "A 203, 204, El Dorado CHS, Kashinath Dhuru Marg, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "Paras Shah",
    "Correspondence Address": "A 203, 204, El Dorado CHS, Kashinath Dhuru Marg, MUMBAI, MAHARASHTRA, 400025",
    "Validity": "Nov 03, 2022 - Perpetual"
  },
  {
    "Name": "Midas Wealth Advisory Private Ltd",
    "Registration No": "INA000016223",
    "E-mail": "ramkumar.agrawal@gmail.com",
    "Address": "A-8, Shri Mangal Palace, , Manik Bag,Sinhagad Road, PUNE, MAHARASHTRA, 411051",
    "Contact Person": "Ramkumar Agrawal",
    "Correspondence Address": "A-8, Shri Mangal Palace, , Manik Bag,Sinhagad Road, PUNE, MAHARASHTRA, 411051",
    "Validity": "Oct 07, 2021 - Perpetual"
  },
  {
    "Name": "Milan Kumar Sahu",
    "Registration No": "INA000021100",
    "E-mail": "milansahuiara@gmail.com",
    "Telephone": "00918310019657",
    "Fax No": "00918310019657",
    "Address": "Flat CG04, Innovative Aquafront, Lake View Road, Doddanekundi, Bengaluru, BANGALORE, KARNATAKA, 560037",
    "Contact Person": "Milan Sahu",
    "Correspondence Address": "Flat CG04, Innovative Aquafront, Lake View Road, Doddanekundi, Bengaluru, BANGALORE, KARNATAKA, 560037",
    "Validity": "Oct 08, 2025 - Perpetual"
  },
  {
    "Name": "Milind Jagannath More Proprietor of MUKUR Financial Planners and Consultants",
    "Registration No": "INA000017930",
    "Address": "M13 Fourth Floor Fourth Floor Shree Mahesh Building,, Uma Mahesh Co.Op Soc Mahatma Phule Road, Mulund East, MUMBAI, MAHARASHTRA, 400081",
    "Correspondence Address": "Office N0.110 1st Floor Kateeleshwari Arcade, L.B.S Road, Mulund West Mumbai, MUMBAI, MAHARASHTRA, 400080",
    "Validity": "May 18, 2023 - Perpetual"
  },
  {
    "Name": "Minal Wagh",
    "Registration No": "INA000020350",
    "E-mail": "minalwagh3010@gmail.com",
    "Telephone": "00919773460890",
    "Fax No": "00919773460890",
    "Address": "A 82 Primus Residences, Vakola, Santacruz East, , Near Grand Hyatt, Mumbai, MUMBAI, MAHARASHTRA, 400055",
    "Contact Person": "Minal  Wagh",
    "Correspondence Address": "A 82 Primus Residences, Vakola, Santacruz East, , Near Grand Hyatt, Mumbai, MUMBAI, MAHARASHTRA, 400055",
    "Validity": "Jun 24, 2025 - Perpetual"
  },
  {
    "Name": "MINERVA  ASSET ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000020332",
    "E-mail": "kapoor@minervaassetadvisors.com",
    "Telephone": "00919711300235",
    "Fax No": "00919711300235",
    "Address": "MGP-PS-2-14 a M3M, GOLF ESTATE-Ph-2,, Gurgaon, Gurugram,, GURGAON, HARYANA, 122018",
    "Contact Person": "Kunal Kapoor",
    "Correspondence Address": "Office-1042, 10th Floor, Tower-B, Unitech Cyber Park, Sector- 39, Gurgaon, GURGAON, HARYANA, 122001",
    "Validity": "Jun 17, 2025 - Perpetual"
  },
  {
    "Name": "Mintbox Advisory LLP",
    "Registration No": "INA300015641",
    "E-mail": "mintbox.advisory@gmail.com",
    "Address": "10 Deen Dayal Bhawan , Janpath Ashok Nagar, BHUBANESWAR, ODISHA, 751009",
    "Contact Person": "Arun Sahoo",
    "Correspondence Address": "10 Deen Dayal Bhawan , Janpath Ashok Nagar, BHUBANESWAR, ODISHA, 751009",
    "Validity": "Dec 29, 2020 - Perpetual"
  },
  {
    "Name": "Mobikwik Investment Adviser Private Limited",
    "Registration No": "INA000004773",
    "E-mail": "upasana@mobikwik.com",
    "Telephone": "911161266390",
    "Fax No": "911161266390",
    "Address": "18th Floor, Cyber One, Opp. CIDCO Exhibition Centre,, Sector-30, Vashi, NAVI MUMBAI, MAHARASHTRA, 400703",
    "Contact Person": "Upasana Taku",
    "Correspondence Address": "Unit No. 102, 1st Floor, Block-B, Pegasus One, Golf Course Road, Sector-53, GURUGRAM, HARYANA, 122003",
    "Validity": "Mar 16, 2020 - Perpetual"
  },
  {
    "Name": "MODULOR ADVISORY SERVICES",
    "Registration No": "INA100015115",
    "E-mail": "modulor.capital@gmail.com",
    "Telephone": "91009814016978",
    "Fax No": "91009814016978",
    "Address": "Plot No. 139, Industrial Area, Phase 2,, CHANDIGARH, CHANDIGARH, 160002",
    "Contact Person": "Sanjit Singh Paul",
    "Correspondence Address": "Plot No. 139, Industrial Area, Phase 2, CHANDIGARH, CHANDIGARH, 160002",
    "Validity": "Feb 09, 2024 - Perpetual"
  },
  {
    "Name": "Mohammed Shoaib Dayma Proprietor FiSC Capital",
    "Registration No": "INA000020457",
    "E-mail": "shoaibdayma96@gmail.com",
    "Telephone": "00919039184797",
    "Fax No": "00919039184797",
    "Address": "13/14 Ved Vyas Colony,, Behind Krishna Dharmshala, RATLAM,, RATLAM, MADHYA PRADESH, 457001",
    "Contact Person": "Mohammed Shoaib Dayma",
    "Correspondence Address": "13/14 Ved Vyas Colony, Behind Krishna Dharmshala, RATLAM, RATLAM, MADHYA PRADESH, 457001",
    "Validity": "Jul 08, 2025 - Perpetual"
  },
  {
    "Name": "mohammed yusuf gaffoor",
    "Registration No": "INA200008389",
    "E-mail": "usufg@hotmail.com",
    "Address": "no 938 21st cross hbr layout 1st, block behind narendra theatre, BANGALORE, KARNATAKA, 560043",
    "Contact Person": "mohammed gaffoor",
    "Correspondence Address": "no 938 21st cross hbr layout 1st, block behind narendra theatre, BANGALORE, KARNATAKA, 560043",
    "Validity": "Sep 04, 2017 - Perpetual"
  },
  {
    "Name": "Mohit Chawla",
    "Registration No": "INA000017356",
    "E-mail": "mohit.chawla276@gmail.com",
    "Telephone": "919811717876",
    "Address": "BJ-116 West shalimar bagh, near goodley public school, shalimar bagh, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110088",
    "Contact Person": "MOHIT CHAWLA",
    "Correspondence Address": "BJ-116 West shalimar bagh, near goodley public school, shalimar bagh, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110088",
    "Validity": "Nov 21, 2022 - Perpetual"
  },
  {
    "Name": "MOJO MARKETS PRIVATE LIMITED",
    "Registration No": "INA000012528",
    "E-mail": "mohit@MARKETSMOJO.COM",
    "Address": "Benefice Business House, Office No. 3B, 3rd Floor,, C.S. 242, Mathuradas Mills Estate, N.M. Joshi Marg, Tulsi Pipe Road, Lower Parel West,, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "MOHIT BATRA",
    "Correspondence Address": "Benefice Business House, Office No. 3B, 3rd Floor, C.S. 242, Mathuradas Mills Estate, N.M. Joshi Marg, Tulsi Pipe Road, Lower Parel West, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Feb 25, 2019 - Perpetual"
  },
  {
    "Name": "MONARCH NETWORTH INVESTMENT ADVISORS PVT. LTD.",
    "Registration No": "INA000005721",
    "E-mail": "vipul.shah@mnclgroup.com",
    "Telephone": "02230641600",
    "Fax No": "02230641600",
    "Address": "MONARCH HOUSE, NR. ISHWAR BHUWAN CROSS ROAD, NR. COMMERCE SIX ROAD, NAVRANGPURA, AHMEDABAD, GUJARAT, 380009",
    "Contact Person": "MR. VIPUL SHAH",
    "Correspondence Address": "Monarch House, Nr. Ishwar Bhuwan Cross Road, Nr. Commerce Six Road, Navrangpura, AHMEDABAD, GUJARAT, 380009",
    "Validity": "Nov 24, 2016 - Perpetual"
  },
  {
    "Name": "Moneybloom Advisory Services LLP",
    "Registration No": "INA200011046",
    "Validity": "Jul 02, 2018 - Perpetual"
  },
  {
    "Name": "Moneycontrol.Dot Com India Limited",
    "Registration No": "INA000008482",
    "E-mail": "ashis.panikkar@nw18.com",
    "Telephone": "02233634712",
    "Fax No": "02233634712",
    "Address": "Left Wing, 3rd Floor, Vrindavan Building, , Sriram Mill Compound, Ganpatrao Kadam Marg, Worli, Delisle Road,, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "Ashis Panikkar",
    "Correspondence Address": "Left Wing, 3rd Floor, Vrindavan Building, , Sriram Mill Compound, Ganpatrao Kadam Marg, Worli, Delisle Road, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Sep 22, 2017 - Perpetual"
  },
  {
    "Name": "MONEYDHAN INVESTMENT ADVISORY INDIA LLP",
    "Registration No": "INA000018984",
    "Address": "7 433 Alumavunchodu Thangalam Kothamangalam Kothamangalam, Kothamangalam Ernakulam Kerala, KOCHI, KERALA, 686691",
    "Correspondence Address": "7 433 Alumavunchodu Thangalam Kothamangalam Kothamangalam, Kothamangalam Ernakulam Kerala, KOCHI, KERALA, 686691",
    "Validity": "Mar 22, 2024 - Perpetual"
  },
  {
    "Name": "MONEYMAP INVESTMENT ADVISORS PVT LTD",
    "Registration No": "INA000004500",
    "Validity": "Aug 09, 2021 - Perpetual"
  },
  {
    "Name": "Moneyvesta Capital Services Private Limited",
    "Registration No": "INA000018407",
    "E-mail": "gargmanasv@gmail.com",
    "Telephone": "0000009999272055",
    "Fax No": "0000009999272055",
    "Address": "514-B, Unitech Arcadia, Unitech Arcadia,South City-II,South City, GURGAON, HARYANA, 122018",
    "Contact Person": "Manasvi Garg",
    "Correspondence Address": "514-B, Unitech Arcadia, Unitech Arcadia,South City-II,South City, GURGAON, HARYANA, 122018",
    "Validity": "Aug 24, 2023 - Perpetual"
  },
  {
    "Name": "Monica Vikram Malkani",
    "Registration No": "INA200009120",
    "E-mail": "mansukhanim@yahoo.com",
    "Address": "1083 Prestige Jade Pavilion, On Gear School Road, BANGALORE, KARNATAKA, 560103",
    "Contact Person": "Monica Malkani",
    "Correspondence Address": "1083 Prestige Jade Pavilion, On Gear School Road, BANGALORE, KARNATAKA, 560103",
    "Validity": "Nov 21, 2017 - Perpetual"
  },
  {
    "Name": "MOOL CAPITAL PRIVATE LIMITED",
    "Registration No": "INA000018708",
    "E-mail": "sharan@mool.one",
    "Telephone": "00919741248158",
    "Fax No": "00919741248158",
    "Address": "H N 4066, SECT B, PKT 5/6,, VASANT KUNJ, SOUTH DELHI, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110070",
    "Contact Person": "SRINIVASA SHARAN",
    "Correspondence Address": "H N 4066, SECT B, PKT 5/6, VASANT KUNJ, SOUTH DELHI, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110070",
    "Validity": "Dec 18, 2023 - Perpetual"
  },
  {
    "Name": "MOONBOW INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000017921",
    "E-mail": "mayankbdugar@gmail.com",
    "Telephone": "022918956373963",
    "Fax No": "022918956373963",
    "Address": "Office No. 206 Bramha Garden Bund Garden Road, PUNE, MAHARASHTRA, 411001",
    "Contact Person": "Mayank Binod  Dugar",
    "Correspondence Address": "Office No. 206 Bramha Garden Bund Garden Road, PUNE, MAHARASHTRA, 411001",
    "Validity": "Apr 24, 2023 - Perpetual"
  },
  {
    "Name": "Moral Financial Research",
    "Registration No": "INA000008093",
    "E-mail": "info@moralresearch.com",
    "Address": "208, II Floor, Gold Coin Plaza, , Tower Square, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "Gaurav Bhale",
    "Correspondence Address": "208, II Floor, Gold Coin Plaza, , Tower Square, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Jul 19, 2017 - Perpetual"
  },
  {
    "Name": "MOTILAL OSWAL WEALTH LIMITED",
    "Registration No": "INA000021094",
    "E-mail": "sandipan.roy@motilaloswal.com",
    "Telephone": "00919619963193",
    "Fax No": "00919619963193",
    "Address": "Motilal Oswal Tower, Rahimtullah Sayani Road, Opp. Parel ST Depot, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "Sandipan Roy",
    "Correspondence Address": "Motilal Oswal Tower, Rahimtullah Sayani Road, Opp. Parel ST Depot, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Validity": "Oct 07, 2025 - Perpetual"
  },
  {
    "Name": "Mr Dick Hosy Mody",
    "Registration No": "INA000007818",
    "E-mail": "dickmody@gmail.com",
    "Address": "1-A-704,SALSETTE PARSI CHS, PUMP HOUSE,ANDHERI EAST, MUMBAI, MAHARASHTRA, 400093",
    "Contact Person": "DICK MODY",
    "Correspondence Address": "1-A-704,SALSETTE PARSI CHS, PUMP HOUSE,ANDHERI EAST, MUMBAI, MAHARASHTRA, 400093",
    "Validity": "May 31, 2017 - Perpetual"
  },
  {
    "Name": "Mr. K Akshay Nayak",
    "Registration No": "INA200014672",
    "E-mail": "akshayadv93@gmail.com",
    "Address": "11/14, Embassy Centre, Crescent Road, High Grounds, Bangalore 560001, BANGALORE, KARNATAKA, 560001",
    "Contact Person": "Akshay  Nayak",
    "Correspondence Address": "11/14, Embassy Centre, Crescent Road, High Grounds, Bangalore 560001, BANGALORE, KARNATAKA, 560001",
    "Validity": "May 22, 2020 - Perpetual"
  },
  {
    "Name": "MR.MONEYWALA",
    "Registration No": "INA000010186",
    "E-mail": "abhivyaktipandey88@gmail.com",
    "Telephone": "918982222611",
    "Address": "1124 Sudama Nagar , Sec A, INDORE, MADHYA PRADESH, 452009",
    "Contact Person": "ABHIVYAKTI PANDEY",
    "Correspondence Address": "1124 Sudama Nagar , Sec A, INDORE, MADHYA PRADESH, 452009",
    "Validity": "Apr 02, 2018 - Perpetual"
  },
  {
    "Name": "MRA INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA100016956",
    "E-mail": "prastogi73@gmail.com",
    "Telephone": "0009953508820",
    "Fax No": "0009953508820",
    "Address": "Flat No. 805, 8th floor, Indra Prakash Building, Plot No.21, Brakhamba Road, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110001",
    "Contact Person": "Pankaj Rastogi",
    "Correspondence Address": "Flat No. 805, 8th floor, Indra Prakash Building, Plot No.21, Brakhamba Road, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110001",
    "Validity": "Jun 03, 2022 - Perpetual"
  },
  {
    "Name": "Mridu Agarwal",
    "Registration No": "INA000016153",
    "E-mail": "mridu.goyal@gmail.com",
    "Address": "E1207 Oberoi Splendor, Andheri East, Jogeshwari Vikhroli Link Road, MUMBAI, MAHARASHTRA, 400060",
    "Contact Person": "Mridu Agarwal",
    "Correspondence Address": "E1207 Oberoi Splendor, Andheri East, Jogeshwari Vikhroli Link Road, MUMBAI, MAHARASHTRA, 400060",
    "Validity": "Aug 26, 2021 - Perpetual"
  },
  {
    "Name": "MRS. SONAL SAKUNIA",
    "Registration No": "INA300004838",
    "E-mail": "natanisonal@gmail.com",
    "Telephone": "9776324223",
    "Fax No": "9776324223",
    "Address": "C/O MR. SANJAY SAKUNIA, MAIN ROAD, SHARBAHAL,, NEAR GO-KOOL RESTAURANT, JHARSUGUDA, 768201",
    "Correspondence Address": "C/o Mr. Sanjay Sakunia, Main Road, Sharbahal, Near Go-Kool Restaurant, Jharsuguda, 768201",
    "Validity": "May 30, 2016 - Perpetual"
  },
  {
    "Name": "MS SQUARE INVESTMENT ADVISORS LLP",
    "Registration No": "INA000020411",
    "E-mail": "mohnish.saini@mssquare.in",
    "Telephone": "00918527587900",
    "Fax No": "00918527587900",
    "Address": "501, KRIYANSH HEIGHTS, INDRAPRASTHA COLONY, VAISHALI NAGAR, JAIPUR, JAIPUR, RAJASTHAN, 302021",
    "Contact Person": "MOHNISH SAINI",
    "Correspondence Address": "501, KRIYANSH HEIGHTS, INDRAPRASTHA COLONY, VAISHALI NAGAR, JAIPUR, JAIPUR, RAJASTHAN, 302021",
    "Validity": "Jun 30, 2025 - Perpetual"
  },
  {
    "Name": "Mudit Madan",
    "Registration No": "INA000021395",
    "E-mail": "muditmadan.ia@gmail.com",
    "Telephone": "917045575567",
    "Address": "Flat No. 901, The Maa Bhagwati CGHS, Sector 43, GURUGRAM, HARYANA, 122009",
    "Contact Person": "Mudit Madan",
    "Correspondence Address": "Flat No. 901, The Maa Bhagwati CGHS, Sector 43, GURUGRAM, HARYANA, 122009",
    "Validity": "Nov 20, 2025 - Perpetual"
  },
  {
    "Name": "Multi Act Trade and Investments Private Limited",
    "Registration No": "INA000008589",
    "E-mail": "s_karkamkar@yahoo.co.in",
    "Address": "Ground Floor  ICC Chambers I, Powai Saki Vihar Road Opp Santogen Mills, MUMBAI, MAHARASHTRA, 400072",
    "Contact Person": "SanjeevKumar Karkamkar",
    "Correspondence Address": "Ground Floor  ICC Chambers I, Powai Saki Vihar Road Opp Santogen Mills, MUMBAI, MAHARASHTRA, 400072",
    "Validity": "Oct 13, 2017 - Perpetual"
  },
  {
    "Name": "Multibagger Securities Research & Advisory Private Limited",
    "Registration No": "INA100007736",
    "E-mail": "shailesh483@yahoo.com",
    "Address": "410, Pearl Best Heights-I, Netaji Subhash Place, Pitampura, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110034",
    "Contact Person": "Shailesh Goyal",
    "Correspondence Address": "410, Pearl Best Heights-I, Netaji Subhash Place, Pitampura, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110034",
    "Validity": "May 29, 2017 - Perpetual"
  },
  {
    "Name": "Multipl Wealth Management Private Limited",
    "Registration No": "INA200014681",
    "E-mail": "vikas@multipl.xyz",
    "Telephone": "91008369015170",
    "Fax No": "91008369015170",
    "Address": "SLV Arcade, 2nd Floor, No. 57, Old No. 320 D, , 9th Main Road, 40th Cross, 5th Block, Jayanagar,, BANGALORE, KARNATAKA, 560011",
    "Contact Person": "VIKAS JAIN",
    "Correspondence Address": "SLV Arcade, 2nd Floor, No. 57, Old No. 320 D, , 9th Main Road, 40th Cross, 5th Block, Jayanagar, BANGALORE, KARNATAKA, 560011",
    "Validity": "Nov 07, 2023 - Perpetual"
  },
  {
    "Name": "Multiplyy Investment Advisors LLP",
    "Registration No": "INA200016573",
    "E-mail": "saurabhkabra@multiplyy.in",
    "Address": "501, Sri Balaji Solitaire, 1-2-593/44, , Gaganmahal Colony, Domalguda,, HYDERABAD, TELANGANA, 500029",
    "Contact Person": "Saurabh Kabra",
    "Correspondence Address": "501, Sri Balaji Solitaire, 1-2-593/44, , Gaganmahal Colony, Domalguda, HYDERABAD, TELANGANA, 500029",
    "Validity": "Jan 24, 2022 - Perpetual"
  },
  {
    "Name": "Multistrato Capital Advisors Private Limited",
    "Registration No": "INA000015969",
    "E-mail": "kuntal@multistratocapital.com",
    "Telephone": "00919136935300",
    "Fax No": "00919136935300",
    "Address": "903, Ecostar Building, Off Aarey Road,, Churi Wadi, Goregaon East,, MUMBAI, MAHARASHTRA, 400063",
    "Contact Person": "Kuntal Bhansali",
    "Correspondence Address": "903, Ecostar Building, Off Aarey Road, Churi Wadi, Goregaon East, MUMBAI, MAHARASHTRA, 400063",
    "Validity": "Jul 14, 2021 - Perpetual"
  },
  {
    "Name": "MUNJAL RAJENDRA SHAH",
    "Registration No": "INA000002470",
    "E-mail": "munjals@gmail.com",
    "Telephone": "02226492353",
    "Fax No": "02226492353",
    "Address": "PLOT NO.61-B SHREENIKETAN 11 A, NORTH AVENUE,SANTACRUZ WEST, MUMBAI, MAHARASHTRA, 400054",
    "Contact Person": "MUNJAL RAJENDRA SHAH",
    "Correspondence Address": "Plot no.61-B Shreeniketan 11 A, North Avenue,Santacruz West, MUMBAI, MAHARASHTRA, 400054",
    "Validity": "Dec 16, 2014 - Perpetual"
  },
  {
    "Name": "MURALI KRISHNA SIVVALA",
    "Registration No": "INA000021261",
    "E-mail": "muralikrishnasivvala@gmail.com",
    "Telephone": "00916309253273",
    "Fax No": "00916309253273",
    "Address": "Door No. 14-13/5, Donkada Colony, Aganampudi,, Gajuwaka Mandal, Visakhapatnam, VISAKHAPATNAM, ANDHRA PRADESH, 530046",
    "Contact Person": "MURALI SIVVALA",
    "Correspondence Address": "Door No. 14-13/5, Donkada Colony, Aganampudi, Gajuwaka Mandal, Visakhapatnam, VISAKHAPATNAM, ANDHRA PRADESH, 530046",
    "Validity": "Nov 03, 2025 - Perpetual"
  },
  {
    "Name": "MYFI FINTECH ADVISORY SERVICES PRIVATE LIMITED",
    "Registration No": "INA000019099",
    "E-mail": "sebi@askmyfi.com",
    "Telephone": "91009867767406",
    "Fax No": "91009867767406",
    "Address": "601, 6th Floor, Pinnacle House Plot No 604,, TPS III Bandra, P.D. Hinduja Road, Bandra West,, MUMBAI, MAHARASHTRA, 400050",
    "Contact Person": "Kiran Nambiar",
    "Correspondence Address": "601, 6th Floor, Pinnacle House Plot No 604, TPS III Bandra, P.D. Hinduja Road, Bandra West, MUMBAI, MAHARASHTRA, 400050",
    "Validity": "May 06, 2024 - Perpetual"
  },
  {
    "Name": "Mysa Investment Advisors Private Limited",
    "Registration No": "INA000019275",
    "E-mail": "mohit.jain@mysafinance.com",
    "Telephone": "91009811371261",
    "Fax No": "91009811371261",
    "Address": "Mysa Innovations Private Limited, Hanto Tranquil,, 1811, 13th Cross Rd, Vanganahalli, 1st Sector, HSR Layout,, BANGALORE, KARNATAKA, 560102",
    "Contact Person": "Mohit Jain",
    "Correspondence Address": "Mysa Innovations Private Limited, Hanto Tranquil, 1811, 13th Cross Rd, Vanganahalli, 1st Sector, HSR Layout, BANGALORE, KARNATAKA, 560102",
    "Validity": "Jun 21, 2024 - Perpetual"
  },
  {
    "Name": "N Prabhanjan Rao Proprietor Elysian Investment Advisory Services",
    "Registration No": "INA000019406",
    "E-mail": "rao@cfooptimus.com",
    "Telephone": "917760796280",
    "Address": "7, Sridevi Complex, NAT Street,, Basavanagudi,, BANGALORE, KARNATAKA, 560004",
    "Contact Person": "N Prabhanjan Rao",
    "Correspondence Address": "7, Sridevi Complex, NAT Street, Basavanagudi, BANGALORE, KARNATAKA, 560004",
    "Validity": "Jul 18, 2024 - Perpetual"
  },
  {
    "Name": "N Raghu Kumar",
    "Registration No": "INA000020527",
    "E-mail": "raghu@finsim.in",
    "Telephone": "00919880627311",
    "Fax No": "00919880627311",
    "Address": "F263, 6th Cross, BEL Layout 1st Stage,, Anjananagar, Bangalore,, BANGALORE, KARNATAKA, 560091",
    "Contact Person": "N Raghu  Kumar",
    "Correspondence Address": "F263, 6th Cross, BEL Layout 1st Stage, Anjananagar, Bangalore, BANGALORE, KARNATAKA, 560091",
    "Validity": "Jul 10, 2025 - Perpetual"
  },
  {
    "Name": "Nag Munagapati wealth advisors",
    "Registration No": "INA000017435",
    "E-mail": "Nagaraj.Munagapati@gmail.com",
    "Address": "B5 1407 My Home Avatar Narsingi, Puppalaguda Hyderabad, HYDERABAD, TELANGANA, 500075",
    "Contact Person": "Hemambara Srinivasa  Munagapati",
    "Correspondence Address": "B5 1407 My Home Avatar Narsingi, Puppalaguda Hyderabad, HYDERABAD, TELANGANA, 500075",
    "Validity": "Dec 13, 2022 - Perpetual"
  },
  {
    "Name": "NANDINEE MANDAR VAIDYA",
    "Registration No": "INA000008880",
    "E-mail": "nandineevaidya@yahoo.com",
    "Address": "B6/9, SARITA VIHAR APT., SINHAGAD ROAD,PARVATI, PUNE, MAHARASHTRA, 411030",
    "Contact Person": "NANDINEE VAIDYA",
    "Correspondence Address": "B6/9, SARITA VIHAR APT., SINHAGAD ROAD,PARVATI, PUNE, MAHARASHTRA, 411030",
    "Validity": "Nov 09, 2017 - Perpetual"
  },
  {
    "Name": "Narasimha Krishnakumar",
    "Registration No": "INA000020226",
    "E-mail": "mknarasimha@gmail.com",
    "Telephone": "918050700233",
    "Address": "No 174/27 Gauthama Kuteera 4Th Main Road, Vyalikaval Bangalore, BANGALORE, KARNATAKA, 560003",
    "Contact Person": "Narasimha Krishnakumar",
    "Correspondence Address": "No 174/27 Gauthama Kuteera 4Th Main Road, Vyalikaval Bangalore, BANGALORE, KARNATAKA, 560003",
    "Validity": "May 29, 2025 - Perpetual"
  },
  {
    "Name": "Narayan Kamath Kandel Proprietor of Finplifi Financial Planners and Consultants",
    "Registration No": "INA200011240",
    "E-mail": "narayan.kamath@finplifi.com",
    "Telephone": "00919986004424",
    "Fax No": "00919986004424",
    "Address": "No. 206, Raja Rajeshwari Residency,, Chikka Banaswadi Main Road, Ramaiah Reddy Layout,, BANGALORE, KARNATAKA, 560043",
    "Contact Person": "Narayan Kamath",
    "Correspondence Address": "No. 206, Raja Rajeshwari Residency, Chikka Banaswadi Main Road, Ramaiah Reddy Layout, BANGALORE, KARNATAKA, 560043",
    "Validity": "Jul 24, 2018 - Perpetual"
  },
  {
    "Name": "NARAYANASWAMY RAMACHANDRAN",
    "Registration No": "INA200004326",
    "E-mail": "ram@ingccventures.in",
    "Telephone": "4428142949",
    "Fax No": "4428142949",
    "Address": "NO. 4, 77 STREET, 16 AVENUE, ASHOK NAGAR,, CHENNAI, TAMIL NADU, 600083",
    "Correspondence Address": "No. 4, 77 street, 16 Avenue, Ashok Nagar, CHENNAI, TAMIL NADU, 600083",
    "Validity": "Mar 09, 2016 - Perpetual"
  },
  {
    "Name": "Narendran",
    "Registration No": "INA000020615",
    "E-mail": "finvestinn@gmail.com",
    "Telephone": "917995556825",
    "Address": "Flat No 1203, Wing B, Utopia Gold,, Gate No 129, Borhadewadi, Moshi, PUNE, MAHARASHTRA, 412105",
    "Contact Person": "Narendran Venkataramalingam",
    "Correspondence Address": "903, Floor-9, Wing-C2, Woodsville Phase-1, Pimpri Chinchwad, Moshi, PUNE, MAHARASHTRA, 412105",
    "Validity": "Jul 14, 2025 - Perpetual"
  },
  {
    "Name": "NARNOLIA INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA300005439",
    "E-mail": "compliance@narnolia.com",
    "Telephone": "02200062701200",
    "Fax No": "02200062701200",
    "Address": "Marble Arch, 236B A.J.C. Bose Road, 2nd Floor, Room No. 201, KOLKATA, WEST BENGAL, 700020",
    "Contact Person": "Anchal Narnolia",
    "Correspondence Address": "Marble Arch, 236B A.J.C. Bose Road, 2nd Floor, Room No. 201, KOLKATA, WEST BENGAL, 700020",
    "Validity": "Aug 25, 2016 - Perpetual"
  },
  {
    "Name": "Naveen Rego Capital Private Limited",
    "Registration No": "INA000019211",
    "E-mail": "support@naveenrego.com",
    "Telephone": "00919845557582",
    "Fax No": "00919845557582",
    "Address": "1-17-1198/10, 1st Floor, N J Arcade, Ladyhill,, Dakshina Kannada, MANGALORE, KARNATAKA, 575006",
    "Contact Person": "Naveen Julian Rego",
    "Correspondence Address": "1-17-1198/10, 1st Floor, N J Arcade, Ladyhill, Dakshina Kannada, MANGALORE, KARNATAKA, 575006",
    "Validity": "Jun 20, 2024 - Perpetual"
  },
  {
    "Name": "Navi Investment Advisors Private Limited",
    "Registration No": "INA000020165",
    "E-mail": "ria.complaince@navi.com",
    "Telephone": "00918762965530",
    "Fax No": "00918762965530",
    "Address": "09th Floor, Vaishnavi Tech Square, Iballur Village, Bengaluru, Karnataka, BANGALORE, KARNATAKA, 560102",
    "Contact Person": "Sameer Hedge",
    "Correspondence Address": "09th Floor, Vaishnavi Tech Square, Iballur Village, Bengaluru, Karnataka, BANGALORE, KARNATAKA, 560102",
    "Validity": "May 15, 2025 - Perpetual"
  },
  {
    "Name": "NAVIN KUMAR CHOUDHARY",
    "Registration No": "INA000004922",
    "E-mail": "navinchoudhary76@gmail.com",
    "Address": "UNIT NO. 1101, WING ? I, GREENS SOCIETY,, ADITYA BIRLA HOSPITAL MARG, THERGAON,, PUNE, MAHARASHTRA, 411033",
    "Correspondence Address": "Unit No. 509, Pride Icon, Kharadi, Madhuwa-Hadapsar Bypass, PUNE, MAHARASHTRA, 411014",
    "Validity": "Jun 08, 2016 - Perpetual"
  },
  {
    "Name": "Navinkumar Mishra Proprietor NM India Investment Advisers",
    "Registration No": "INA000020235",
    "E-mail": "navin@nmindiaadvisers.com",
    "Telephone": "919702597119",
    "Address": "303, Konark Shram Building,, 156, Tardeo Road,, MUMBAI, MAHARASHTRA, 400034",
    "Contact Person": "Navinkumar Mishra",
    "Correspondence Address": "303, Konark Shram Building, 156, Tardeo Road, MUMBAI, MAHARASHTRA, 400034",
    "Validity": "May 30, 2025 - Perpetual"
  },
  {
    "Name": "Navneet Sharma",
    "Registration No": "INA000019691",
    "E-mail": "navneet.sharma22220@gmail.com",
    "Telephone": "919811022220",
    "Address": "House no. 547/1 sector C Sainik Colony, Jammu near Street restaurant, Jammu, Jammu and Kashmir, JAMMU, JAMMU AND KASHMIR, 180011",
    "Contact Person": "Navneet Sharma",
    "Correspondence Address": "House no. 113, Street no. 11, Upper Laxmi Nagar, Sarwal, Jammu, Jammu and Kashmir, JAMMU, JAMMU AND KASHMIR, 180005",
    "Validity": "Nov 13, 2024 - Perpetual"
  },
  {
    "Name": "NBHAVA CAPITAL PRIVATE LIMITED",
    "Registration No": "INA000021553",
    "E-mail": "caudayalakshmi@nbhava.com",
    "Telephone": "00919705161777",
    "Fax No": "00919705161777",
    "Address": "GOWRA PALLADIUM ,4TH FLOOR, UNIT 406,SY.NO 8A, 8B1 in SURVEY NO. 83/1, CYBERABAD , HYDERABAD SHAIKPET, TELANGANA, HYDERABAD, TELANGANA, 500081",
    "Contact Person": "BOGGAVARAPU LAKSHMI",
    "Correspondence Address": "GOWRA PALLADIUM ,4TH FLOOR, UNIT 406,SY.NO 8A, 8B1 in SURVEY NO. 83/1, CYBERABAD , HYDERABAD SHAIKPET, TELANGANA, HYDERABAD, TELANGANA, 500081",
    "Validity": "Dec 15, 2025 - Perpetual"
  },
  {
    "Name": "Neeraj Kumar",
    "Registration No": "INA300011885",
    "E-mail": "k.neeraj07@gmail.com",
    "Address": "S/O Rajendra Prasad, Q/100, Road No.10, Magadh Colony, GAYA, BIHAR, 823001",
    "Contact Person": "Neeraj Kumar",
    "Correspondence Address": "House no.138, 2nd Floor, 19th A Cross, 9th Main, HSR Layout, Sector-7, BANGALORE, KARNATAKA, 560102",
    "Validity": "Oct 23, 2018 - Perpetual"
  },
  {
    "Name": "NEERAJ KUMAR JAIN PROPRIETOR  of CAPITAL PRIDE",
    "Registration No": "INA000008792",
    "Validity": "Nov 02, 2017 - Perpetual"
  },
  {
    "Name": "Neha Goel",
    "Registration No": "INA100010970",
    "E-mail": "neha29goel1980@gmail.com",
    "Address": "E-405 SPS Residency,Vaibhav Khand, Indrapuram Shipra Sun City, GHAZIABAD, UTTAR PRADESH, 201014",
    "Contact Person": "Neha  Goel",
    "Correspondence Address": "E-405 SPS Residency,Vaibhav Khand, Indrapuram Shipra Sun City, GHAZIABAD, UTTAR PRADESH, 201014",
    "Validity": "Jun 29, 2018 - Perpetual"
  },
  {
    "Name": "Neha Porwal Proprietor Real Time Financial Services",
    "Registration No": "INA000010177",
    "E-mail": "excellence_india@hotmail.com",
    "Address": "Office No. 520 5th Floor Onam Plaza , 18 Palasia AB Road, INDORE, MADHYA PRADESH, 452009",
    "Contact Person": "Neha Pareta",
    "Correspondence Address": "Office No. 520 5th Floor Onam Plaza , 18 Palasia AB Road, INDORE, MADHYA PRADESH, 452009",
    "Validity": "Apr 02, 2018 - Perpetual"
  },
  {
    "Name": "NEHA SINHA",
    "Registration No": "INA000020208",
    "E-mail": "strategik.neha@gmail.com",
    "Telephone": "918433596335",
    "Address": "FLAT NO. 11, BLDG. NO. 5B-SWATI CHS, PLOT NO. 5-1, NNP COLONY,GOREGAON EAST, MUMBAI, MAHARASHTRA, 400065",
    "Contact Person": "NEHA SINHA",
    "Correspondence Address": "FLAT NO. 11, BLDG. NO. 5B-SWATI CHS, PLOT NO. 5-1, NNP COLONY,GOREGAON EAST, MUMBAI, MAHARASHTRA, 400065",
    "Validity": "May 29, 2025 - Perpetual"
  },
  {
    "Name": "NEHAL MAYANK JOSHIPURA (PROPRIETOR OF INVESTMENTWAVES)",
    "Registration No": "INA000005184",
    "E-mail": "nehal.joshipura@gmail.com",
    "Telephone": "9594365074",
    "Fax No": "9594365074",
    "Address": "C 201, KALADEEP APARTMENT, BEHIND SACHIN TOWER, NEAR SHYAMAL CROSS ROADS, SATELLITE, AHMEDABAD, GUJARAT, 380015",
    "Correspondence Address": "501, Parimal Heights, Off Juhu Lane, Behind Gazebo House, Gulmohar Cross Road No. 7, Andheri W, MUMBAI, MAHARASHTRA, 400058",
    "Validity": "Jul 20, 2016 - Perpetual"
  },
  {
    "Name": "Neo Wealth Management Private Limited",
    "Registration No": "INA000017286",
    "E-mail": "compliance@neo-wealth.com",
    "Telephone": "91229619523663",
    "Fax No": "91229619523663",
    "Address": "903, B wing, Floor 9, Marathon Futurex, N. M. Joshi Marg, Lower Parel, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "Nitesh Shah",
    "Correspondence Address": "903, B wing, Floor 9, Marathon Futurex, N. M. Joshi Marg, Lower Parel, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Nov 01, 2022 - Perpetual"
  },
  {
    "Name": "Neo Wealth Partners Private Limited",
    "Registration No": "INA000017958",
    "E-mail": "subhajit.b@neofamilyoffice.in",
    "Telephone": "00919113942302",
    "Fax No": "00919113942302",
    "Address": "B 903, Marathon Futurex, N M Joshi Marg,, Lower Parel, Mumbai 400013, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "Subhajit Bhattacharjee",
    "Correspondence Address": "B 903, Marathon Futurex, N M Joshi Marg, Lower Parel, Mumbai 400013, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "May 26, 2023 - Perpetual"
  },
  {
    "Name": "NERDYBIRD WEALTH ADVISORY LLP",
    "Registration No": "INA000020925",
    "E-mail": "shilpa@nerdybird.in",
    "Telephone": "00919586855398",
    "Fax No": "00919586855398",
    "Address": "A 801, Block -A, West gate business bay, NR Makarba Cross road, Beside Signature -1, Makarba, Jivraj Park, Ahmedabad, AHMEDABAD, GUJARAT, 380051",
    "Contact Person": "Shilpa Gole",
    "Correspondence Address": "A 801, Block -A, West gate business bay, NR Makarba Cross road, Beside Signature -1, Makarba, Jivraj Park, Ahmedabad, AHMEDABAD, GUJARAT, 380051",
    "Validity": "Aug 11, 2025 - Perpetual"
  },
  {
    "Name": "Networth Research And Investment Advisor, Proprietor Neha Saluja",
    "Registration No": "INA000010159",
    "E-mail": "salujaneha25@gmail.com",
    "Address": "206 2nd Floor Aditya Pratap Building , 85 Shree Nagar Main Road, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "Neha Saluja",
    "Correspondence Address": "206 2nd Floor Aditya Pratap Building , 85 Shree Nagar Main Road, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Apr 02, 2018 - Perpetual"
  },
  {
    "Name": "NETWORTH TRACKER SOLUTIONS PRIVATE LIMITED",
    "Registration No": "INA000020396",
    "E-mail": "support@networthtracker.in",
    "Telephone": "00919819982121",
    "Fax No": "00919819982121",
    "Address": "Flat No Office No.1018,Hubtown Solaris, Block Sector Andheri West, Road N. S. Phadke Marg, Mumbai, MUMBAI, MAHARASHTRA, 400069",
    "Contact Person": "Shashin Koradia",
    "Correspondence Address": "Flat No Office No.1018,Hubtown Solaris, Block Sector Andheri West, Road N. S. Phadke Marg, Mumbai, MUMBAI, MAHARASHTRA, 400069",
    "Validity": "Jun 30, 2025 - Perpetual"
  },
  {
    "Name": "Neuron Wealth Advisors LLP",
    "Registration No": "INA000016481",
    "E-mail": "neuronwealth@gmail.com",
    "Address": "803, Mauryansh Elanza, B/s Parekhs Hospital, Nr Shyamal Cross Road, Satellite, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "Jigar Patel",
    "Correspondence Address": "803, Mauryansh Elanza, B/s Parekhs Hospital, Nr Shyamal Cross Road, Satellite, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Dec 20, 2021 - Perpetual"
  },
  {
    "Name": "Newcamp Finserv Private Limited",
    "Registration No": "INA000020891",
    "E-mail": "ria.po@activv.money",
    "Telephone": "00917032653376",
    "Fax No": "00917032653376",
    "Address": "The Yard, Carlton Towers, A Wing,, 3rd , Floor, No.1 Carlton Towers, Old Airport Road, BANGALORE, KARNATAKA, 560008",
    "Contact Person": "Piyush Lahoti",
    "Correspondence Address": "The Yard, Carlton Towers, A Wing, 3rd , Floor, No.1 Carlton Towers, Old Airport Road, BANGALORE, KARNATAKA, 560008",
    "Validity": "Aug 07, 2025 - Perpetual"
  },
  {
    "Name": "Nexedge Investment Adviser Private Limited",
    "Registration No": "INA000019992",
    "E-mail": "nexedgecapital@gmail.com",
    "Telephone": "00919811632456",
    "Fax No": "00919811632456",
    "Address": "Unit No. OF-2 A 4th Floor, Plot no. A-2 and P2A, Metropolitan Saket District Centre Saket, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110017",
    "Contact Person": "Karan Nanda",
    "Correspondence Address": "Unit No. OF-2 A 4th Floor, Plot no. A-2 and P2A, Metropolitan Saket District Centre Saket, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110017",
    "Validity": "Mar 21, 2025 - Perpetual"
  },
  {
    "Name": "Nidhi Tripathi Proprietor of The Tradebond",
    "Registration No": "INA100012570",
    "E-mail": "thetradebond@gmail.com",
    "Address": "205, Apollo Avenue avenue,, greater Kailash Road, old Palasia,, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "NIDHI  SAXENA",
    "Correspondence Address": "205, Apollo Avenue avenue, greater Kailash Road, old Palasia, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Mar 01, 2019 - Perpetual"
  },
  {
    "Name": "NIFTYONLY",
    "Registration No": "INA000007526",
    "E-mail": "backoffice@niftyonly.in",
    "Address": "1/C,JIJIBHOY INDUSTRIAL ESTATE,, 2ND FLOOR,GOREGAON (WEST), MUMBAI, MAHARASHTRA, 400104",
    "Contact Person": "YATIN SHAH",
    "Correspondence Address": "1/C,JIJIBHOY INDUSTRIAL ESTATE, 2ND FLOOR,GOREGAON (WEST), MUMBAI, MAHARASHTRA, 400104",
    "Validity": "Apr 20, 2017 - Perpetual"
  },
  {
    "Name": "NIMISH DEHARIYA PROPRIETOR IR24",
    "Registration No": "INA000004187",
    "E-mail": "nimishd03@gmail.com",
    "Telephone": "07314224275",
    "Fax No": "07314224275",
    "Address": "14/7, BLOCK NO. 301, 3RD FLOOR, GYAN MANGALAM, NEW PALASIA, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "NIMISH DEHARIYA",
    "Correspondence Address": "14/7, Block No. 301, 3rd Floor, Gyan Mangalam, New Palasia, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Feb 12, 2016 - Perpetual"
  },
  {
    "Name": "NINEBARK ADVISORS PRIVATE LIMITED",
    "Registration No": "INA200007779",
    "E-mail": "saradhi@ninebark.in",
    "Telephone": "9107893274158",
    "Fax No": "9107893274158",
    "Address": "C 801, LAKEBREEZE, APARNA HILLPARK,, CHANDANAGAR, PJR ENCLAVE ROAD,, HYDERABAD, TELANGANA, 500050",
    "Contact Person": "Kankanala Vijaya Saradhi Reddy",
    "Correspondence Address": "C 801, LAKEBREEZE, APARNA HILLPARK, CHANDANAGAR, PJR ENCLAVE ROAD, HYDERABAD, TELANGANA, 500050",
    "Validity": "May 30, 2017 - Perpetual"
  },
  {
    "Name": "Niranjan Goyal",
    "Registration No": "INA000019336",
    "E-mail": "nirgoyal@yahoo.co.in",
    "Telephone": "919886969451",
    "Address": "E1001, Purva Westend, Garvebhavi Palya,, Kudlu Gate, Hosur Road, BANGALORE, KARNATAKA, 560068",
    "Contact Person": "Niranjan Goyal",
    "Correspondence Address": "E1001, Purva Westend, Garvebhavi Palya, Kudlu Gate, Hosur Road, BANGALORE, KARNATAKA, 560068",
    "Validity": "Jun 27, 2024 - Perpetual"
  },
  {
    "Name": "Nirmiti Investment Advisors LLP",
    "Registration No": "INA000016296",
    "Address": "A- 201 Rohan Nilay 2, Near Spicer School,, Aundh Pune, PUNE, MAHARASHTRA, 411007",
    "Validity": "Oct 25, 2021 - Perpetual"
  },
  {
    "Name": "Nischal Santosh Jain",
    "Registration No": "INA000016506",
    "E-mail": "nischaljain@hotmail.co.in",
    "Address": "C 404, Basil, Green Groves, Baif road,, Behind Moze college, Wagholi, PUNE, MAHARASHTRA, 412207",
    "Contact Person": "Nischal  Jain",
    "Correspondence Address": "C 404, Basil, Green Groves, Baif road, Behind Moze college, Wagholi, PUNE, MAHARASHTRA, 412207",
    "Validity": "Dec 27, 2021 - Perpetual"
  },
  {
    "Name": "NISHANT CHOPRA PROPRIETOR DEZIRE RESEARCH",
    "Registration No": "INA000004104",
    "E-mail": "chopra.nishant28@gmail.com",
    "Telephone": "07314062223",
    "Fax No": "07314062223",
    "Address": "PU-4,B-2,BLOCK,5TH FLOOR ,METRO TOWER, SCHEME NO 54,VIJAY NAGAR ,INDORE, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "NISHANT CHOPRA",
    "Correspondence Address": "205, Maruti Apartment, 255 Usha Nagar Ext., INDORE, MADHYA PRADESH, 452001",
    "Validity": "Feb 04, 2016 - Perpetual"
  },
  {
    "Name": "Nishit Vinay Shah",
    "Registration No": "INA000004146",
    "E-mail": "nishit@visolitech.com",
    "Telephone": "02240044744",
    "Fax No": "02240044744",
    "Address": "HIMALAYA APARTMENT, FLAT NO 5, NEW MANEKLAL ESTATE, RAMLEELA MAIDAN, GHATKOPAR WEST, MUMBAI, MAHARASHTRA, 400055",
    "Contact Person": "NISHIT SHAH",
    "Correspondence Address": "139, Jaygopal Industrial Estate, Bhavani Shankar X Road,Dadar (West), MUMBAI, MAHARASHTRA, 400028",
    "Validity": "Feb 12, 2016 - Perpetual"
  },
  {
    "Name": "NISHITH. B",
    "Registration No": "INA200005158",
    "E-mail": "nishith@shreefinancial.com",
    "Telephone": "4426613547",
    "Fax No": "4426613547",
    "Address": "B 502 GEETANJALI APARTMENT, , NO 15 MEDAVAKKAM TANK ROAD, 2ND STREET, KILPAUK, CHENNAI, TAMIL NADU, 600010",
    "Correspondence Address": "B 502 Geetanjali Apartment, , No 15 Medavakkam tank Road, 2nd Street, Kilpauk, CHENNAI, TAMIL NADU, 600010",
    "Validity": "Jul 19, 2016 - Perpetual"
  },
  {
    "Name": "NITESH JAIN PROPRIETOR PROFIT AIM RESEARCH",
    "Registration No": "INA000004757",
    "E-mail": "info@profitaim.com",
    "Address": "MEZZQNINE FLOOR, PLOT NO. 366, PU-4, SCHEME NO. 54, VIJAY NAGAR, INDORE, MADHYA PRADESH, 452010",
    "Correspondence Address": "Mezzqnine Floor, Plot no. 366, PU-4, Scheme No. 54, Vijay Nagar, INDORE, MADHYA PRADESH, 452010",
    "Validity": "May 19, 2016 - Perpetual"
  },
  {
    "Name": "NITIN KUMAR SINGHAL PROPRIETOR MYMONEYGURU",
    "Registration No": "INA100010402",
    "E-mail": "NITINSINGHALCFA@GMAIL.COM",
    "Address": "5/399A, B-1, Plot No 399A, Sector 5, VAISHALI, GHAZIABAD, UTTAR PRADESH, 201010",
    "Contact Person": "NITIN SINGHAL",
    "Correspondence Address": "5/399A, Flat Number G-1, Vaishali, Brahmaputra Lane, Sector-5, GHAZIABAD, UTTAR PRADESH, 201010",
    "Validity": "Apr 23, 2018 - Perpetual"
  },
  {
    "Name": "nitin sood",
    "Registration No": "INA100012075",
    "E-mail": "nitinsud10@gmail.com",
    "Address": "3RD FLOOR, RAMESH NIVAAS, STOKES PLACE, SHIMLA, HIMACHAL PRADESH, 171002",
    "Contact Person": "nitin sood",
    "Correspondence Address": "3RD FLOOR, RAMESH NIVAAS, STOKES PLACE, SHIMLA, HIMACHAL PRADESH, 171002",
    "Validity": "Nov 19, 2018 - Perpetual"
  },
  {
    "Name": "NITISH CONSUL",
    "Registration No": "INA000020642",
    "E-mail": "nitishconsul.ria@gmail.com",
    "Telephone": "00919873071152",
    "Fax No": "00919873071152",
    "Address": "G-1550, 11th Avenue Gaur City 2, Greater Noida West, Gautam Budhha Nagar,, NOIDA, UTTAR PRADESH, 201318",
    "Contact Person": "Nitish Consul",
    "Correspondence Address": "G-1550, 11th Avenue Gaur City 2, Greater Noida West, Gautam Budhha Nagar, NOIDA, UTTAR PRADESH, 201318",
    "Validity": "Jul 16, 2025 - Perpetual"
  },
  {
    "Name": "Nivesh Research",
    "Registration No": "INA000007951",
    "E-mail": "anishrai143@gmail.com",
    "Address": "D-74 Shopping Complex, A.B. Road Indore, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "Anish  Rai",
    "Correspondence Address": "D-74 Shopping Complex, A.B. Road Indore, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Jun 29, 2017 - Perpetual"
  },
  {
    "Name": "Nobias Analyst India Private Limited",
    "Registration No": "INA000019558",
    "E-mail": "lara.menezes@nobias.com",
    "Telephone": "91009822588993",
    "Fax No": "91009822588993",
    "Address": "14th Floor, Unit No 1417, One Lodha Palace, Lodha Codename No 1, Senapati Bapat Marg, Lower Parel,, MUMBAI, MAHARASHTRA, 400018",
    "Contact Person": "Lara Aramita  Menezes",
    "Correspondence Address": "14th Floor, Unit No 1417, One Lodha Palace, Lodha Codename No 1, Senapati Bapat Marg, Lower Parel, MUMBAI, MAHARASHTRA, 400018",
    "Validity": "Sep 23, 2024 - Perpetual"
  },
  {
    "Name": "NS WEALTH SOLUTION PVT. LTD.",
    "Registration No": "INA000009551",
    "E-mail": "nitin.sawant@nswealth.in",
    "Address": "A- 107 , FLOOR - 1, A, ASHIRWAD CHS, ACHARYA DONDE MARG , NEAR SEWREE FISH MARKET  - SEWREE, MUMBAI, MAHARASHTRA, 400015",
    "Contact Person": "NITIN SAWANT",
    "Correspondence Address": "2ND FLOOR , NABILAL COMPLEX , , SHIVAJI CHOWK  - VITA, SANGLI-MIRAJ & KUPWAD, MAHARASHTRA, 415311",
    "Validity": "Jan 18, 2018 - Perpetual"
  },
  {
    "Name": "Nuqi Wealth India Private Limited",
    "Registration No": "INA000016612",
    "E-mail": "shaf99304@gmail.com",
    "Address": "UNIT NO 206, PARINEE-I, SHAH INDUSTRIAL ESTATE,, OFF VEERA DESAI ROAD, ANDHERI WEST, MUMBAI, MAHARASHTRA, 400053",
    "Contact Person": "Shagufta Dhillon",
    "Correspondence Address": "Office 201, Maruti Business Park, Bldg 2, Veera Desai Road, Near Yashraj Studio, Andheri West, MUMBAI, MAHARASHTRA, 400053",
    "Validity": "Jan 31, 2022 - Perpetual"
  },
  {
    "Name": "Nuvama Wealth Management Limited",
    "Registration No": "INA000018364",
    "E-mail": "researchcompliance@nuvama.com",
    "Telephone": "91229004510449",
    "Fax No": "91229004510449",
    "Address": "801- 804, Wing A, Building No. 3,, Inspire BKC, G Block, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Abhijit Talekar",
    "Correspondence Address": "801- 804, Wing A, Building No. 3, Inspire BKC, G Block, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Aug 11, 2023 - Perpetual"
  },
  {
    "Name": "NVS WEALTH MANAGERS PVT. LTD.",
    "Registration No": "INA000003205",
    "E-mail": "saloni.nvswealthmanagers@gmail.com",
    "Telephone": "2266315511",
    "Fax No": "2266315511",
    "Address": "1 & 1A, BIRLA MANSION, 134 N.M. ROAD, FORT, MUMBAI, MAHARASHTRA, 400001",
    "Contact Person": "SALONI JAIN",
    "Correspondence Address": "702, Embassy Centre, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Validity": "Jul 14, 2015 - Perpetual"
  },
  {
    "Name": "NYE Investech Private Limited",
    "Registration No": "INA000020129",
    "E-mail": "tushar.goel@rapipay.com",
    "Telephone": "00919871465793",
    "Fax No": "00919871465793",
    "Address": "701, 7th Floor, Aggarwal Corporate Tower, Plot No. 23, Plot No. 23, District Centre, Rajendra Place, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110008",
    "Contact Person": "Tushar Goel",
    "Correspondence Address": "A-8, 8th Floor Q-Tower, Sector-68, Noida, NOIDA, UTTAR PRADESH, 201309",
    "Validity": "Apr 21, 2025 - Perpetual"
  },
  {
    "Name": "Ocean Finvest India Private Limited",
    "Registration No": "INA000020369",
    "E-mail": "compliance@inxits.com",
    "Telephone": "00918655618532",
    "Fax No": "00918655618532",
    "Address": "T F-310, Shivalik Shilp, Ambli - Bopal Road, Ahmedabad, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "KUNAL PAHWA",
    "Correspondence Address": "T F-310, Shivalik Shilp, Ambli - Bopal Road, Ahmedabad, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Jun 24, 2025 - Perpetual"
  },
  {
    "Name": "Octanom Tech Private Limited",
    "Registration No": "INA000021207",
    "E-mail": "Archit@octonom.com",
    "Telephone": "00919930180035",
    "Fax No": "00919930180035",
    "Address": "11th 1101, Moti Mahal Apex Building, C.T.S No F 902 Village Bandra,, Plot No 116 Near Junction of Waterfield and Gurunanak Rd, Bandra West, Mumbai,, MUMBAI, MAHARASHTRA, 400053",
    "Contact Person": "ARCHIT MAHAJAN",
    "Correspondence Address": "11th 1101, Moti Mahal Apex Building, C.T.S No F 902 Village Bandra, Plot No 116 Near Junction of Waterfield and Gurunanak Rd, Bandra West, Mumbai, MUMBAI, MAHARASHTRA, 400053",
    "Validity": "Oct 30, 2025 - Perpetual"
  },
  {
    "Name": "OMKAR RAMESHCHANDRA BHUTADA",
    "Registration No": "INA000015826",
    "E-mail": "caomkarbhutada@gmail.com",
    "Address": "BHUTADA BUILDING, LAXMI GIRLS HOSTEL,, INDUSTRIAL ESTATE,, LATUR, MAHARASHTRA, 413512",
    "Contact Person": "OMKAR BHUTADA",
    "Correspondence Address": "BHUTADA BUILDING, LAXMI GIRLS HOSTEL, INDUSTRIAL ESTATE, LATUR, MAHARASHTRA, 413512",
    "Validity": "Mar 31, 2021 - Perpetual"
  },
  {
    "Name": "Omkara Capital Private Limited",
    "Registration No": "INA000016825",
    "Address": "UNIT NO. 207 A/B, PENINSULA CENTRE, DR. S. S. RAO ROAD, BEHIND PIRAMAL CHAMBERS,, PAREL EAST, MUMBAI, MAHARASHTRA, 400012",
    "Validity": "Apr 11, 2022 - Perpetual"
  },
  {
    "Name": "OMNIBUS INVESTMENT ADVISORS LLP",
    "Registration No": "INA000019877",
    "E-mail": "mit@onecase.in",
    "Telephone": "00919904099117",
    "Fax No": "00919904099117",
    "Address": "B-4, Himmatlal Park, Opp. Azad Muncipal Garden, Satellite, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "Mit Gandhi",
    "Correspondence Address": "B-4, Himmatlal Park, Opp. Azad Muncipal Garden, Satellite, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Feb 04, 2025 - Perpetual"
  },
  {
    "Name": "Omniscience Capital Advisors Private Limited",
    "Registration No": "INA000007623",
    "E-mail": "chanchal.manglunia@omnisciencecapital.co",
    "Telephone": "0919004560540",
    "Fax No": "0919004560540",
    "Address": "Awfis, 1st Floor, B Wing, Parinee Crescenzo, G Block, BKC, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Chanchal Manglunia",
    "Correspondence Address": "Awfis, 1st Floor, B Wing, Parinee Crescenzo, G Block, BKC, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "May 12, 2017 - Perpetual"
  },
  {
    "Name": "ONE CENTURION VENTURES PRIVATE LIMITED",
    "Registration No": "INA000018896",
    "E-mail": "advisory@onecenturion.in",
    "Telephone": "918655742577",
    "Fax No": "918655742577",
    "Address": "15-17-897, Gokul, Shiva Bagh Main Road,, Near 4th Cross, Kadri,, MANGALORE, KARNATAKA, 575002",
    "Contact Person": "Priya  Shah",
    "Correspondence Address": "Unit No. 601, 604, 6th floor, Lotus Signature, , Off Veera Desai Road, Andheri (West), MUMBAI, MAHARASHTRA, 400053",
    "Validity": "Feb 29, 2024 - Perpetual"
  },
  {
    "Name": "Onebanc Technologies Private Limited",
    "Registration No": "INA000020174",
    "E-mail": "compliance@onebanc.ai",
    "Telephone": "00919990906990",
    "Fax No": "00919990906990",
    "Address": "12th FLOOR WELLDONE TECH PARK, SOHNA ROAD, SECTOR 48, Gurgaon, Gurugram, Haryana, GURGAON, HARYANA, 122018",
    "Contact Person": "Nishant Ahuja",
    "Correspondence Address": "12th FLOOR WELLDONE TECH PARK, SOHNA ROAD, SECTOR 48, Gurgaon, Gurugram, Haryana, GURGAON, HARYANA, 122018",
    "Validity": "May 15, 2025 - Perpetual"
  },
  {
    "Name": "OPPORTUNE WEALTH ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000005366",
    "Validity": "Aug 16, 2016 - Perpetual"
  },
  {
    "Name": "OPULENT INVESTMENT ADVISER PRIVATE LIMITED",
    "Registration No": "INA000011644",
    "E-mail": "opulentw@gmail.com",
    "Telephone": "91009619855094",
    "Fax No": "91009619855094",
    "Address": "61, Floor 6, Plot No-85, Maker Tower E, G D Somani Marg, , World Trade Centre, Cuffe Parade,, MUMBAI, MAHARASHTRA, 400005",
    "Contact Person": "Ajita Udeshi",
    "Correspondence Address": "61, Floor 6, Plot No-85, Maker Tower E, G D Somani Marg, , World Trade Centre, Cuffe Parade, MUMBAI, MAHARASHTRA, 400005",
    "Validity": "Sep 06, 2018 - Perpetual"
  },
  {
    "Name": "Orelius Financial Advisory and Management Services Private Limited",
    "Registration No": "INA000020688",
    "E-mail": "mohit.kanodia@gmail.com",
    "Telephone": "00919867783199",
    "Fax No": "00919867783199",
    "Address": "B-403, ELDORA BUILDING, , HIRANANDANI GARDENS POWAI,, MUMBAI, MAHARASHTRA, 400076",
    "Contact Person": "Mohit Kanodia",
    "Correspondence Address": "B-403, ELDORA BUILDING, , HIRANANDANI GARDENS POWAI, MUMBAI, MAHARASHTRA, 400076",
    "Validity": "Jul 18, 2025 - Perpetual"
  },
  {
    "Name": "ORIM ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000018294",
    "E-mail": "vedant.pathella@orim.in",
    "Telephone": "00919167470746",
    "Fax No": "00919167470746",
    "Address": "13/C,Mini Land,Tank Road,, Bhandup West ,Mumbai 400078, MUMBAI, MAHARASHTRA, 400078",
    "Contact Person": "Vedant Pathella",
    "Correspondence Address": "13/C,Mini Land,Tank Road, Bhandup West ,Mumbai 400078, MUMBAI, MAHARASHTRA, 400078",
    "Validity": "Jul 31, 2023 - Perpetual"
  },
  {
    "Name": "OYEPAISA CONSULTING PRIVATE LIMITED",
    "Registration No": "INA200004300",
    "E-mail": "uday.dhoot@oyepaisa.com",
    "Telephone": "080 552393",
    "Fax No": "080 552393",
    "Address": "24/9, Haudin Road, Ulsoor Road Cross, BANGALORE, KARNATAKA, 560042",
    "Contact Person": "MR. UDAY KUMAR DHOOT",
    "Correspondence Address": "B-73 GANGA HEIGHTS, 18TH MAIN, 24TH CROSS, 1ST STAGE, 5TH BLOCK, HBR LAYOUT, KALYAN NAGAR POST, NEAR NAGAVARA JUNCTION, BANGALORE, KARNATAKA, 560043",
    "Validity": "Mar 04, 2016 - Perpetual"
  },
  {
    "Name": "PAISABAZAAR MARKETING AND CONSULTING PRIVATE LIMITED",
    "Registration No": "INA100003949",
    "E-mail": "psinha@paisabazaar.com",
    "Telephone": "01244214403",
    "Fax No": "01244214403",
    "Address": "Plot No.135P, Sector 44, Gurugram -122001, GURUGRAM, HARYANA, 122001",
    "Contact Person": "PUSHKAR SINHA",
    "Correspondence Address": "Ground Floor, Plot No.129, Sector 44, Gurgaon -122001, HARYANA, 122001",
    "Validity": "Dec 17, 2015 - Perpetual"
  },
  {
    "Name": "Palnika Hemnani",
    "Registration No": "INA000021605",
    "E-mail": "palnika.hemnani@gmail.com",
    "Telephone": "00918879386822",
    "Fax No": "00918879386822",
    "Address": "A-17, Basement, Lajpat Nagar 3, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110024",
    "Contact Person": "Palnika Hemnani",
    "Correspondence Address": "A-17, Basement, Lajpat Nagar 3, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110024",
    "Validity": "Dec 19, 2025 - Perpetual"
  },
  {
    "Name": "Panchagnula Venkateswara Rama Prasad Proprietor RP Investment Advisor",
    "Registration No": "INA000021191",
    "E-mail": "ramaprasadpv.31@gmail.com",
    "Telephone": "919820735720",
    "Address": "2-1-565/3/A/1,, Nallakunta, HYDERABAD, TELANGANA, 500044",
    "Contact Person": "Panchagnula Rama Prasad",
    "Correspondence Address": "2-1-565/3/A/1, Nallakunta, HYDERABAD, TELANGANA, 500044",
    "Validity": "Oct 28, 2025 - Perpetual"
  },
  {
    "Name": "PANDURANG  N  PATKAR",
    "Registration No": "INA000017824",
    "E-mail": "pandurangpatkar101@gmail.com",
    "Telephone": "919535422995",
    "Address": "GF 2 Elegant Elite 2nd Main 1st Cross Near water Tank Vijaya Bank Layout Bangalore, BANGALORE, KARNATAKA, 560076",
    "Contact Person": "PANDURANG N PATKAR",
    "Correspondence Address": "GF 2 Elegant Elite 2nd Main 1st Cross Near water Tank Vijaya Bank Layout Bangalore, BANGALORE, KARNATAKA, 560076",
    "Validity": "Apr 20, 2023 - Perpetual"
  },
  {
    "Name": "Parami Financial Services Private Limited",
    "Registration No": "INA000016649",
    "Address": "FLATNO 402 PLOT NO 2 TOWER I NEELKANTH RESIDENCY, SECTOR 46 A INTERNAL ROAD NERUL NAVI MUMBAI, NAVI MUMBAI, MAHARASHTRA, 400706",
    "Validity": "Feb 01, 2022 - Perpetual"
  },
  {
    "Name": "Pararthya Capital Management LLP",
    "Registration No": "INA000021340",
    "E-mail": "just4ronak@gmail.com",
    "Telephone": "00919892570538",
    "Fax No": "00919892570538",
    "Address": "1301, Varun C.H.S. Pant Nagar Samaj Mandir Hall Bldg, Ghatkopar East Mumbai, MUMBAI, MAHARASHTRA, 400075",
    "Contact Person": "Gala Ronak",
    "Correspondence Address": "1301, Varun C.H.S. Pant Nagar Samaj Mandir Hall Bldg, Ghatkopar East Mumbai, MUMBAI, MAHARASHTRA, 400075",
    "Validity": "Nov 07, 2025 - Perpetual"
  },
  {
    "Name": "PARAS V. LAKHANI",
    "Registration No": "INA000017019",
    "E-mail": "paraslakhani74@gmail.com",
    "Address": "263/A, 16, MEHTA BLDG, L.N.ROAD, MATUNGA C.R, MUMBAI, MAHARASHTRA, 400019",
    "Contact Person": "PARAS LAKHANI",
    "Correspondence Address": "263/A, 16, MEHTA BLDG, L.N.ROAD, MATUNGA C.R, MUMBAI, MAHARASHTRA, 400019",
    "Validity": "Jun 13, 2022 - Perpetual"
  },
  {
    "Name": "Parekh Rutviz Bharatkumar Proprietor Tanviz Capital",
    "Registration No": "INA000021243",
    "E-mail": "rutviz.parekh@gmail.com",
    "Telephone": "00919428221591",
    "Fax No": "00919428221591",
    "Address": "Plot No. 19/A Paulomi, , Hariyala Plots, Manekwadi Station Street, BHAVNAGAR, GUJARAT, 364001",
    "Contact Person": "Rutviz Parekh",
    "Correspondence Address": "Plot No. 19/A Paulomi, , Hariyala Plots, Manekwadi Station Street, BHAVNAGAR, GUJARAT, 364001",
    "Validity": "Nov 03, 2025 - Perpetual"
  },
  {
    "Name": "Pari Washington Company Advisors Private Limited",
    "Registration No": "INA200013284",
    "E-mail": "jayanti@pariwashington.com",
    "Telephone": "9104445511599",
    "Fax No": "9104445511599",
    "Address": "18 Tiger Varadachari Road, 1st Street, Besant Nagar, CHENNAI, TAMIL NADU, 600090",
    "Contact Person": "Jayanti  Suresh",
    "Correspondence Address": "18 Tiger Varadachari Road, 1st Street, Besant Nagar, CHENNAI, TAMIL NADU, 600090",
    "Validity": "May 10, 2019 - Perpetual"
  },
  {
    "Name": "Parth Kotak Proprietor Plus91",
    "Registration No": "INA000018081",
    "Address": "703, Woodlands Apartment, Upper Govind Nagar,, Malad E, Mumbai 400097, MUMBAI, MAHARASHTRA, 400097",
    "Correspondence Address": "703, Woodlands Apartment, Upper Govind Nagar, Malad E, Mumbai 400097, MUMBAI, MAHARASHTRA, 400097",
    "Validity": "Jun 14, 2023 - Perpetual"
  },
  {
    "Name": "Patel Poojan Praful",
    "Registration No": "INA000020828",
    "E-mail": "poojan.patel.ria@gmail.com",
    "Telephone": "00919979518808",
    "Fax No": "00919979518808",
    "Address": "FF-7/A, Nirav Complex, , Near. Navrang School, Naranpura, AHMEDABAD, GUJARAT, 380014",
    "Contact Person": "Patel Praful",
    "Correspondence Address": "FF-7/A, Nirav Complex, , Near. Navrang School, Naranpura, AHMEDABAD, GUJARAT, 380014",
    "Validity": "Aug 06, 2025 - Perpetual"
  },
  {
    "Name": "Pavan Kumar Manchiraju Proprietor of Hubridge Investment Advisers",
    "Registration No": "INA000018975",
    "E-mail": "pavanm.mail@gmail.com",
    "Telephone": "918297006446",
    "Address": "KOTHARI CENTRUM BUILDING, 4TH FLOOR, REGUS, MURPHY ROAD BUSINESS CENTRE, KONDAPUR,, HYDERABAD, TELANGANA, 500084",
    "Contact Person": "Pavan Kumar Manchiraju",
    "Correspondence Address": "KOTHARI CENTRUM BUILDING, 4TH FLOOR, REGUS, MURPHY ROAD BUSINESS CENTRE, KONDAPUR, HYDERABAD, TELANGANA, 500084",
    "Validity": "Mar 22, 2024 - Perpetual"
  },
  {
    "Name": "PAWAN KUMAR",
    "Registration No": "INA000017602",
    "E-mail": "pawanvaidya@gmail.com",
    "Telephone": "02291123456789",
    "Fax No": "02291123456789",
    "Address": "DDA FLAT NO. - 2120, 3RD FLOOR, SECTOR-C, POCKET-2, VASANT KUNJ,, SOUTH WEST, NEW DELHI 110070, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110070",
    "Contact Person": "PAWAN KUMAR",
    "Correspondence Address": "DDA FLAT NO. - 2120, 3RD FLOOR, SECTOR-C, POCKET-2, VASANT KUNJ, SOUTH WEST, NEW DELHI 110070, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110070",
    "Validity": "Jan 12, 2023 - Perpetual"
  },
  {
    "Name": "PAWAN PATIDAR PROPRIETOR WEALTH GAINER",
    "Registration No": "INA000010797",
    "E-mail": "thewealthgainer@gmail.com",
    "Address": "E-365,, SCHEME NO.94, BANGALI SQUARE, INDORE, MADHYA PRADESH, 452010",
    "Contact Person": "PAWAN PATIDAR",
    "Correspondence Address": "E-365, SCHEME NO.94, BANGALI SQUARE, INDORE, MADHYA PRADESH, 452010",
    "Validity": "Jun 06, 2018 - Perpetual"
  },
  {
    "Name": "Peace Valley Ventures Private Limited",
    "Registration No": "INA000021012",
    "E-mail": "mukund@turtlefinance.in",
    "Telephone": "00919999885624",
    "Fax No": "00919999885624",
    "Address": "Z-188, First Floor, Naraina Industrial Area, Phase -1, Naraina Industrial Estate, South West Delhi, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110028",
    "Contact Person": "Mukund Lahoty",
    "Correspondence Address": "Z-188, First Floor, Naraina Industrial Area, Phase -1, Naraina Industrial Estate, South West Delhi, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110028",
    "Validity": "Sep 18, 2025 - Perpetual"
  },
  {
    "Name": "PeakAlpha Investment Services Pvt Ltd",
    "Registration No": "INA200007043",
    "E-mail": "priya.sunder@peakalpha.com",
    "Address": "Ground Floor, 'Kalpavriksh', 13, Brunton Road Cross, BANGALORE, KARNATAKA, 560025",
    "Contact Person": "Priya Sunder",
    "Correspondence Address": "Ground Floor, 'Kalpavriksh', 13, Brunton Road Cross, BANGALORE, KARNATAKA, 560025",
    "Validity": "Feb 06, 2017 - Perpetual"
  },
  {
    "Name": "Peeyush Kumar",
    "Registration No": "INA100016752",
    "E-mail": "capeeyush91@gmail.com",
    "Address": "1004, Ivory Towers, The Retreat, South City 1, GURGAON, HARYANA, 122001",
    "Contact Person": "Peeyush Kumar",
    "Correspondence Address": "1004, Ivory Towers, The Retreat, South City 1, GURGAON, HARYANA, 122001",
    "Validity": "Mar 09, 2022 - Perpetual"
  },
  {
    "Name": "PENAGALURU VENKATA RAVITEJA",
    "Registration No": "INA200010904",
    "E-mail": "raviteja@globallyunique.in",
    "Telephone": "09618355264",
    "Address": "6/133-C SANKARAPURAM, KADAPA, ANDHRA PRADESH, 516002",
    "Contact Person": "PENAGALURU VENKATA RAVITEJA",
    "Correspondence Address": "6/133-C SANKARAPURAM, KADAPA, ANDHRA PRADESH, 516002",
    "Validity": "Jun 25, 2018 - Perpetual"
  },
  {
    "Name": "PERPETUAL CAPITAL ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000018230",
    "E-mail": "nikhil@perpetualinv.com",
    "Telephone": "00919021987900",
    "Fax No": "00919021987900",
    "Address": "S. NO 588/2C CTS 3217, OFFICE 603 APEX BUSINESS COURT PHASE 2,, Bibvewadi, Pune, Pune City, PUNE, MAHARASHTRA, 411036",
    "Contact Person": "Nikhil  PORWAL",
    "Correspondence Address": "S. NO 588/2C CTS 3217, OFFICE 603 APEX BUSINESS COURT PHASE 2, Bibvewadi, Pune, Pune City, PUNE, MAHARASHTRA, 411036",
    "Validity": "Jul 21, 2023 - Perpetual"
  },
  {
    "Name": "PHAEDRUS ADVISORY LLP",
    "Registration No": "INA000015260",
    "E-mail": "govind@phaedrus.co.in",
    "Address": "301, Siddhi Grandeur, Plot 84, Sector 19, Kharghar, MUMBAI, MAHARASHTRA, 410210",
    "Contact Person": "GOVIND PATHAK",
    "Correspondence Address": "301, Siddhi Grandeur, Plot 84, Sector 19, Kharghar, MUMBAI, MAHARASHTRA, 410210",
    "Validity": "Oct 06, 2020 - Perpetual"
  },
  {
    "Name": "PHI CAPITAL SERVICES LLP",
    "Registration No": "INA200004284",
    "E-mail": "sp@phicapital.in",
    "Telephone": "04428286556",
    "Fax No": "04428286556",
    "Address": "LG 1A, Siddhartha Chambers, Near IIT Gate, Kalu Sarai, Hauz Khas, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110016",
    "Contact Person": "MR. P SIVARAM",
    "Correspondence Address": "3rd Floor, Jayalakshmi Estates, No. 29, Haddows Road, Nungambakkam, CHENNAI, TAMIL NADU, 600006",
    "Validity": "Mar 04, 2016 - Perpetual"
  },
  {
    "Name": "PHILLIPCAPITAL (INDIA) PVT. LTD.",
    "Registration No": "INA000004518",
    "E-mail": "sgupta@phillipcapital.in",
    "Address": "NO1,18 FLOOR,URMI ESTATE, 95,GANAPATRAO KADAM MARG, LOWER PAREL, MUMBAI, MAHARASHTRA, 400013",
    "Correspondence Address": "No1,18 Floor,Urmi Estate, 95,Ganapatrao Kadam Marg, Lower Parel, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Apr 12, 2016 - Perpetual"
  },
  {
    "Name": "PI DELTA ENTERPRISES",
    "Registration No": "INA000020721",
    "E-mail": "pideltaenterprises@gmail.com",
    "Telephone": "00917060246633",
    "Fax No": "00917060246633",
    "Address": "D-41, Sector 3, Ansal Sushant City, Meerut, Uttar Pradesh, MEERUT, UTTAR PRADESH, 250005",
    "Contact Person": "PRAKHAR SONI",
    "Correspondence Address": "D-41, Sector 3, Ansal Sushant City, Meerut, Uttar Pradesh, MEERUT, UTTAR PRADESH, 250005",
    "Validity": "Jul 30, 2025 - Perpetual"
  },
  {
    "Name": "Pi Square Advisors",
    "Registration No": "INA000018179",
    "E-mail": "vpathak@pisquareinvestments.com",
    "Telephone": "00918469186390",
    "Fax No": "00918469186390",
    "Address": "B-1808, Navratna Corporate Park, Ambli, AHMEDABAD, GUJARAT, 380058",
    "Contact Person": "Vishrut C Pathak",
    "Correspondence Address": "B-1808, Navratna Corporate Park, Ambli, AHMEDABAD, GUJARAT, 380058",
    "Validity": "Jul 05, 2023 - Perpetual"
  },
  {
    "Name": "Pinakin C Jaiswal",
    "Registration No": "INA000019655",
    "E-mail": "pinakinjaiswal@gmail.com",
    "Telephone": "919428819553",
    "Address": "8, Maharshi Arvind Society, R V Desai Road,, VADODARA, GUJARAT, 390001",
    "Contact Person": "Pinakin C  Jaiswal",
    "Correspondence Address": "8, Maharshi Arvind Society, R V Desai Road, VADODARA, GUJARAT, 390001",
    "Validity": "Oct 28, 2024 - Perpetual"
  },
  {
    "Name": "PINPOINT INVESTMENT ADVISORY SERVICES INDIA LLP",
    "Registration No": "INA000016728",
    "Address": "Unit No. 715 on the 7th Floor in C Wing, ONE BKC, G Block,, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Feb 25, 2022 - Perpetual"
  },
  {
    "Name": "Pioneer Client Associates Pvt Ltd",
    "Registration No": "INA100010660",
    "E-mail": "rakeshkhanna@clientassociates.com",
    "Telephone": "911244995400",
    "Fax No": "911244995400",
    "Address": "2nd floor block B vatika Towers , Golf course road sector 54, GURGAON, HARYANA, 122002",
    "Contact Person": "Rakesh Khanna",
    "Correspondence Address": "2nd floor block B vatika Towers , Golf course road sector 54, GURGAON, HARYANA, 122002",
    "Validity": "May 23, 2018 - Perpetual"
  },
  {
    "Name": "Pioneer Wealth Management Services Limited",
    "Registration No": "INA000017259",
    "E-mail": "riddhi.sidhpura@pinc.co.in",
    "Telephone": "009867654945",
    "Fax No": "009867654945",
    "Address": "1218 Maker Chambers V, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Contact Person": "Riddhi Sidhpura",
    "Correspondence Address": "1218 Maker Chambers V, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Correspondence E-mail": "amitc@pinc.co.in",
    "Validity": "Oct 18, 2022 - Perpetual"
  },
  {
    "Name": "PIYUSH SARAWAGI",
    "Registration No": "INA000015491",
    "E-mail": "piyushsarawagi1996@gmail.com",
    "Address": "Bunglow no. 5, Jay Jalaram Society, Piplod, SURAT, GUJARAT, 395007",
    "Contact Person": "PIYUSH SARAWAGI",
    "Correspondence Address": "Bunglow no. 5, Jay Jalaram Society, Piplod, SURAT, GUJARAT, 395007",
    "Validity": "Nov 24, 2020 - Perpetual"
  },
  {
    "Name": "PLAN AHEAD WEALTH ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000000409",
    "E-mail": "shalini.dhawan@planahead.in",
    "Telephone": "910026345000",
    "Fax No": "910026345000",
    "Address": "A-401, FAIRLINK CENTER, OFF ANDHERI LINK ROAD,, ANDHER (W), MUMBAI, MAHARASHTRA, 400058",
    "Contact Person": "Shalini  Dhawan",
    "Correspondence Address": "A-207/208/209/402, Fairlink Centre, Off Andheri Link Road, Andheri West, MUMBAI, MAHARASHTRA, 400058",
    "Validity": "Dec 03, 2013 - Perpetual"
  },
  {
    "Name": "PLIRIS CAPITAL PRIVATE LIMITED",
    "Registration No": "INA000019947",
    "E-mail": "meeshal.mehta@pliris.com",
    "Telephone": "91009823041888",
    "Fax No": "91009823041888",
    "Address": "God's Grace, 19 Gidney Park, Salisbury Park, Market Yard, Pune, PUNE, MAHARASHTRA, 411037",
    "Contact Person": "Meeshal Mehta",
    "Correspondence Address": "God's Grace, 19 Gidney Park, Salisbury Park, Market Yard, Pune, PUNE, MAHARASHTRA, 411037",
    "Validity": "Feb 12, 2025 - Perpetual"
  },
  {
    "Name": "PLNR INVESTMENT ADVISORS",
    "Registration No": "INA000018966",
    "E-mail": "ajaypruthi@gmail.com",
    "Telephone": "91008860000332",
    "Fax No": "91008860000332",
    "Address": "Shop No. 2, 1st Floor, Tulip Plaza, Plot No. 114, Sector 13, Kharghar,, NAVI MUMBAI, MAHARASHTRA, 410210",
    "Contact Person": "Ajay Pruthi",
    "Correspondence Address": "Shop No. 2, 1st Floor, Tulip Plaza, Plot No. 114, Sector 13, Kharghar, NAVI MUMBAI, MAHARASHTRA, 410210",
    "Validity": "Mar 22, 2024 - Perpetual"
  },
  {
    "Name": "PLOUTUS ASSET SERVICES LLP",
    "Registration No": "INA000020800",
    "E-mail": "sridevi@financialplanners.co.in",
    "Telephone": "00919841428055",
    "Fax No": "00919841428055",
    "Address": "No.7/13, Ground Floor, Baktavatsalam Nagar,, 4th Street, Adyar, CHENNAI, TAMIL NADU, 600020",
    "Contact Person": "Sridevi Viswanathan",
    "Correspondence Address": "No.7/13, Ground Floor, Baktavatsalam Nagar, 4th Street, Adyar, CHENNAI, TAMIL NADU, 600020",
    "Validity": "Aug 05, 2025 - Perpetual"
  },
  {
    "Name": "Plus91 Asset Management LLP",
    "Registration No": "INA000021526",
    "E-mail": "parthkotak7.pk@gmail.com",
    "Telephone": "00919930795667",
    "Fax No": "00919930795667",
    "Address": "703 Woodland Plot no-145 To 149 Upper Govind Nagar, Malad East, MUMBAI, MAHARASHTRA, 400097",
    "Contact Person": "Parth Kotak",
    "Correspondence Address": "703 Woodland Plot no-145 To 149 Upper Govind Nagar, Malad East, MUMBAI, MAHARASHTRA, 400097",
    "Validity": "Dec 11, 2025 - Perpetual"
  },
  {
    "Name": "Plutonomic Savtech Private Limited",
    "Registration No": "INA000011079",
    "E-mail": "saumya.shah@gmail.com",
    "Address": "801, Sapphire, Nr. Cargo Motors, opp - Ratnam, CG road, AHMEDABAD, GUJARAT, 380006",
    "Contact Person": "Saumya Shah",
    "Correspondence Address": "801, Sapphire, Nr. Cargo Motors, opp - Ratnam, CG road, AHMEDABAD, GUJARAT, 380006",
    "Validity": "Jul 04, 2018 - Perpetual"
  },
  {
    "Name": "Prabhudas Lilladher Private Limited",
    "Registration No": "INA000018267",
    "E-mail": "co@plindia.com",
    "Telephone": "02266322420",
    "Fax No": "02266322420",
    "Address": "3rd Floor, Sadhana House, 570,, PB Marg, Worli, Mumbai, MUMBAI, MAHARASHTRA, 400018",
    "Contact Person": "Roshan Jagannath Jamdare",
    "Correspondence Address": "3rd Floor, Sadhana House, 570, PB Marg, Worli, Mumbai, MUMBAI, MAHARASHTRA, 400018",
    "Validity": "Jul 25, 2023 - Perpetual"
  },
  {
    "Name": "Pradeep Gobind Mahtani",
    "Registration No": "INA000010742",
    "E-mail": "pgmahtani@gmail.com",
    "Address": "8 Hampton Court, A Wing, Wodehouse Road, MUMBAI, MAHARASHTRA, 400005",
    "Contact Person": "Pradeep Mahtani",
    "Correspondence Address": "8 Hampton Court, A Wing, Wodehouse Road, MUMBAI, MAHARASHTRA, 400005",
    "Validity": "Jun 04, 2018 - Perpetual"
  },
  {
    "Name": "Pradip Prabir Banerjee",
    "Registration No": "INA000020183",
    "E-mail": "info@pradippbanerjeeria.com",
    "Telephone": "919819788297",
    "Fax No": "919819788297",
    "Address": "A/149 ROOM NO 298 VIVEK APARTMENT FLAT NO 5 , NR GURUNANAK SCHOOL KURLA CAMP ULHASNAGAR, THANE, MAHARASHTRA, 421004",
    "Contact Person": "Pradip Banerjee",
    "Correspondence Address": "C-924/925 ROOM NO 1847/1848 OM SAI RAM APT, FLAT NO 304 KURLA CAMP ROAD KAILASH COLONY ULHASNAGAR, THANE, MAHARASHTRA, 421005",
    "Validity": "May 19, 2025 - Perpetual"
  },
  {
    "Name": "PRAKASH CHANDRA PRAHARAJ",
    "Registration No": "INA000000045",
    "E-mail": "Prakash.praharaj@gmail.com",
    "Telephone": "2227575648",
    "Fax No": "2227575648",
    "Address": "219,Skylark Building,Sector 11,Near Railway station(West), CBD Belapur, Navi Mumbai., NAVI MUMBAI, MAHARASHTRA, 400614",
    "Contact Person": "Prakash Chandra Praharaj",
    "Correspondence Address": "Flat No B 701, Sawan Harmony,Plot No G 90-95, Sector 20, CBD Belapur, NAVI MUMBAI, MAHARASHTRA, 400614",
    "Validity": "Aug 02, 2013 - Perpetual"
  },
  {
    "Name": "Pramiti Rawat",
    "Registration No": "INA000020697",
    "E-mail": "pramiti.rawat@outlook.com",
    "Telephone": "00919403451426",
    "Fax No": "00919403451426",
    "Address": "D-4 Kalyan Residency, Shivalaya CHS Ltd., Pashan-Sus Road, Pune, PUNE, MAHARASHTRA, 411021",
    "Contact Person": "Pramiti Rawat",
    "Correspondence Address": "D-4 Kalyan Residency, Shivalaya CHS Ltd., Pashan-Sus Road, Pune, PUNE, MAHARASHTRA, 411021",
    "Validity": "Jul 23, 2025 - Perpetual"
  },
  {
    "Name": "PRAMOD KANIPAKAM",
    "Registration No": "INA200012203",
    "E-mail": "pramodkanipakam@gmail.com",
    "Telephone": "919342540491",
    "Fax No": "919342540491",
    "Address": "B-304, DSR NAVEEN LAKESIDE APARTMENTS, 35 TH MAIN, 7TH CROSS, BTM 2ND STAGE, BANGALORE, KARNATAKA, 560068",
    "Contact Person": "PRAMOD KANIPAKAM",
    "Correspondence Address": "B-304, DSR NAVEEN LAKESIDE APARTMENTS, 35 TH MAIN, 7TH CROSS, BTM 2ND STAGE, BANGALORE, KARNATAKA, 560068",
    "Validity": "Dec 17, 2018 - Perpetual"
  },
  {
    "Name": "PRANAV KUMAR TIWARY",
    "Registration No": "INA000020341",
    "E-mail": "pranavtiwary@yahoo.com",
    "Telephone": "919035061978",
    "Fax No": "919035061978",
    "Address": "NO 605 BLOCK 34 VBHC VAIBHAVA, CHANDAPURA  ANEKAL ROAD, BANGALORE, KARNATAKA, 562106",
    "Contact Person": "Pranav Tiwary",
    "Correspondence Address": "NO 605 BLOCK 34 VBHC VAIBHAVA, CHANDAPURA  ANEKAL ROAD, BANGALORE, KARNATAKA, 562106",
    "Validity": "Jun 23, 2025 - Perpetual"
  },
  {
    "Name": "prashant Dubey",
    "Registration No": "INA100008771",
    "E-mail": "prashantdubey@hillviewglobalfin.com",
    "Telephone": "919560744510",
    "Address": "GP 12, Ganganagar, Mawana Road,, MEERUT, UTTAR PRADESH, 250001",
    "Contact Person": "Prashant Dubey",
    "Correspondence Address": "GP 12, Ganganagar, Mawana Road, MEERUT, UTTAR PRADESH, 250001",
    "Validity": "Nov 02, 2017 - Perpetual"
  },
  {
    "Name": "Prashant Raghuwanshi Proprietor Investment Solution Providers",
    "Registration No": "INA100009381",
    "E-mail": "PRASHANTRAGHUWANSHI76@GMAIL.COM",
    "Address": "3rd Floor, Ideashacks Building, 14/3 Mathura Road Near Metro Pillar 564, FARIDABAD, HARYANA, 121003",
    "Contact Person": "PRASHANT  RAGHUWANSHI",
    "Correspondence Address": "3rd Floor, Ideashacks Building, 14/3 Mathura Road Near Metro Pillar 564, FARIDABAD, HARYANA, 121003",
    "Validity": "Dec 21, 2017 - Perpetual"
  },
  {
    "Name": "Prashant S Vaishampayan Prop of Trivikram Consultants",
    "Registration No": "INA000015464",
    "E-mail": "pvaishampayan@gmail.com",
    "Address": "204 Bhoomi Velocity, S G Barve Road, Wagle Estate, THANE, MAHARASHTRA, 400604",
    "Contact Person": "Prashant Vaishampayan",
    "Correspondence Address": "204 Bhoomi Velocity, S G Barve Road, Wagle Estate, THANE, MAHARASHTRA, 400604",
    "Validity": "Nov 20, 2020 - Perpetual"
  },
  {
    "Name": "Prashanth Sekhar",
    "Registration No": "INA200016412",
    "E-mail": "prashanth@sekhicapital.com",
    "Telephone": "919940050541",
    "Address": "Euphoria, Elcot Avenue, Sholinganallur, CHENNAI, TAMIL NADU, 600119",
    "Contact Person": "Prashanth Sekhar",
    "Correspondence Address": "Euphoria, Elcot Avenue, Sholinganallur, CHENNAI, TAMIL NADU, 600119",
    "Validity": "Nov 25, 2021 - Perpetual"
  },
  {
    "Name": "PRASOON KUMAR",
    "Registration No": "INA300015207",
    "E-mail": "prasoonjai@gmail.com",
    "Address": "HOUSE NO 327 A1, BASANT BIHAR COLONY, RANCHI, JHARKHAND, 825301",
    "Contact Person": "PRASOON KUMAR",
    "Correspondence Address": "HOUSE NO 327 A1, BASANT BIHAR COLONY, RANCHI, JHARKHAND, 825301",
    "Validity": "Sep 24, 2020 - Perpetual"
  },
  {
    "Name": "PRATEEK SINGH",
    "Registration No": "INA000020077",
    "E-mail": "prateek@fulfilu.com",
    "Telephone": "919818998252",
    "Address": "D64, DGS Apartment, Plot 6, Sector 22,, Dwarka, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110075",
    "Contact Person": "PRATEEK SINGH",
    "Correspondence Address": "D64, DGS Apartment, Plot 6, Sector 22, Dwarka, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110075",
    "Validity": "Apr 04, 2025 - Perpetual"
  },
  {
    "Name": "Pravia Investment Advisors Private Limited",
    "Registration No": "INA000021322",
    "E-mail": "info@pravia.in",
    "Telephone": "00919870953410",
    "Fax No": "00919870953410",
    "Address": "303 Flora Point, Comm Building CTS No 669,, MUMBAI, MAHARASHTRA, 400080",
    "Contact Person": "Vaibhavi Shah",
    "Correspondence Address": "303 Flora Point, Comm Building CTS No 669, MUMBAI, MAHARASHTRA, 400080",
    "Validity": "Nov 04, 2025 - Perpetual"
  },
  {
    "Name": "PREETHY P",
    "Registration No": "INA200005281",
    "E-mail": "preethypadmanaban@gmail.com",
    "Telephone": "4443570704",
    "Fax No": "4443570704",
    "Address": "NO:4/607, , MOGAPPAIR WEST,, CHENNAI, TAMIL NADU, 600037",
    "Correspondence Address": "No. 30, Annal Apartment, Annamalai Avenue, Jeswanth Nagar, Mogappair West, CHENNAI, TAMIL NADU, 600037",
    "Validity": "Aug 01, 2016 - Perpetual"
  },
  {
    "Name": "Preeti K Zende",
    "Registration No": "INA000012777",
    "Validity": "Mar 20, 2019 - Perpetual"
  },
  {
    "Name": "Preeti Passi",
    "Registration No": "INA000016685",
    "E-mail": "preetipassi786@gmail.com",
    "Address": "17/2, Rameshwar Niwas, Veer Savarkar Marg, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "Preeti  Passi",
    "Correspondence Address": "17/2, Rameshwar Niwas, Veer Savarkar Marg, MUMBAI, MAHARASHTRA, 400025",
    "Validity": "Feb 09, 2022 - Perpetual"
  },
  {
    "Name": "PRERNA SHARMA",
    "Registration No": "INA000007304",
    "E-mail": "prernasharma_18@yahoo.co.in",
    "Address": "3/391 kala kaun, Housing Board, Aravali Vihar, ALWAR, RAJASTHAN, 301001",
    "Contact Person": "PRERNA SHARMA",
    "Correspondence Address": "3/391 kala kaun, Housing Board, Aravali Vihar, ALWAR, RAJASTHAN, 301001",
    "Validity": "Mar 17, 2017 - Perpetual"
  },
  {
    "Name": "Primew Financial Services Private Limited",
    "Registration No": "INA000021438",
    "E-mail": "aloksdubey@gmail.com",
    "Telephone": "00919069382525",
    "Fax No": "00919069382525",
    "Address": "S.no.164, Shop No.311, Commercial, Pune City Pune, PUNE, MAHARASHTRA, 411057",
    "Contact Person": "Alok Dubey",
    "Correspondence Address": "S.no.164, Shop No.311, Commercial, Pune City Pune, PUNE, MAHARASHTRA, 411057",
    "Validity": "Dec 01, 2025 - Perpetual"
  },
  {
    "Name": "PRISHA WEALTH MANAGEMENT PRIVATE LIMITED",
    "Registration No": "INA000019202",
    "E-mail": "priti.goel@prishawealth.com",
    "Telephone": "91009811273006",
    "Fax No": "91009811273006",
    "Address": "HNO-MN18, HUB AND OAK, C-360, LGF, DEFENCE COLONY, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110024",
    "Contact Person": "PRITI  GOEL",
    "Correspondence Address": "HNO-MN18, HUB AND OAK, C-360, LGF, DEFENCE COLONY, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110024",
    "Validity": "Jun 20, 2024 - Perpetual"
  },
  {
    "Name": "PRITESHKUMAR CHAMPAKLAL SHAH",
    "Registration No": "INA000015297",
    "E-mail": "pritesh.cfa@gmail.com",
    "Telephone": "919978917315",
    "Address": "B22 NIRVANTA OPP GULMOHAR GARDEN, SEVASI VADODARA, VADODARA, GUJARAT, 390011",
    "Contact Person": "PRITESHKUMAR SHAH",
    "Correspondence Address": "B22 NIRVANTA OPP GULMOHAR GARDEN, SEVASI VADODARA, VADODARA, GUJARAT, 390011",
    "Validity": "Oct 20, 2020 - Perpetual"
  },
  {
    "Name": "Privus Advisors LLP",
    "Registration No": "INA000019752",
    "E-mail": "compliance@privus.in",
    "Telephone": "910048965600",
    "Fax No": "910048965600",
    "Address": "115 DBS Heritage House, Prescott Street,, Fort,, MUMBAI, MAHARASHTRA, 400001",
    "Contact Person": "Jeremy solomon",
    "Correspondence Address": "115 DBS Heritage House, Prescott Street, Fort, MUMBAI, MAHARASHTRA, 400001",
    "Validity": "Dec 18, 2024 - Perpetual"
  },
  {
    "Name": "Priyadarshini Moreshwar Mulye",
    "Registration No": "INA000011796",
    "E-mail": "priya199@gmail.com",
    "Address": "Mayuresh At post Malgund, Tal  and Dist Ratnagiri, RATNAGIRI, MAHARASHTRA, 415615",
    "Contact Person": "PRIYADARSHINI RAO",
    "Correspondence Address": "Mayuresh At post Malgund, Tal  and Dist Ratnagiri, RATNAGIRI, MAHARASHTRA, 415615",
    "Validity": "Oct 05, 2018 - Perpetual"
  },
  {
    "Name": "PROALPHA CAPITAL PRIVATE LIMITED",
    "Registration No": "INA000009065",
    "E-mail": "skumar@proalphaadvisors.com",
    "Telephone": "00919222202502",
    "Fax No": "00919222202502",
    "Address": "A/703, Palash, Gawand Baug Pokhran Road no.2, Near Upvan Lake, Thane West, THANE, MAHARASHTRA, 400610",
    "Contact Person": "Sharad Kumar",
    "Correspondence Address": "Office No.2, 1st Floor, Anandram Shopping Centre, Pokhran Road no 2, Siddhachal, Thane West, THANE, MAHARASHTRA, 400610",
    "Validity": "Nov 25, 2025 - Perpetual"
  },
  {
    "Name": "Profit Finstock Private Limited",
    "Registration No": "INA000020651",
    "E-mail": "cspradhan@profitfromit.in",
    "Telephone": "00919426536576",
    "Fax No": "00919426536576",
    "Address": "GF1 A, Ashwamegh Complex,, Opp. Sayaji Club Vadodara, VADODARA, GUJARAT, 390001",
    "Contact Person": "Pradhan Chandrashekhar S",
    "Correspondence Address": "GF1 A, Ashwamegh Complex, Opp. Sayaji Club Vadodara, VADODARA, GUJARAT, 390001",
    "Validity": "Jul 17, 2025 - Perpetual"
  },
  {
    "Name": "Profitmart Securities Private Limited",
    "Registration No": "INA000020095",
    "E-mail": "compliance@profitmart.in",
    "Telephone": "00919850444689",
    "Fax No": "00919850444689",
    "Address": "UNIT NO. 213, OPAL SQUARE, Plot no. C1 Thane east Mumbai, THANE, MAHARASHTRA, 400604",
    "Contact Person": "Nitin Bora",
    "Correspondence Address": "Office No.3, 1st floor, B3, Cerebrum IT Park, Above DMART, Kalyani Nagar Pune, PUNE, MAHARASHTRA, 411014",
    "Validity": "Apr 09, 2025 - Perpetual"
  },
  {
    "Name": "Prosperentia Investment Advisors LLP",
    "Registration No": "INA000018957",
    "Validity": "Mar 21, 2024 - Perpetual"
  },
  {
    "Name": "Prosperity Wealth Adviser",
    "Registration No": "INA000016773",
    "E-mail": "samraat.jadhav@gmail.com",
    "Address": "FLAT NO 4, INDRALOK APARTMENTS, SIHAGAD ROAD, S NO. 14/5/2/1, NEAR PRAGATI PARK, WADGAON BK, ANANDNAGAR, PUNE, MAHARASHTRA, 411051",
    "Contact Person": "Samraat Jadhav",
    "Correspondence Address": "A80 3rd Floor Srinath Plaza, Dyaneshwar Paduka Chowk Shivajinagar, PUNE, MAHARASHTRA, 411005",
    "Validity": "Mar 15, 2022 - Perpetual"
  },
  {
    "Name": "Prospero Tree Financial Services LLP",
    "Registration No": "INA000011893",
    "Address": "104 Midas Tower, Bhaudaji Road Ext., Sion West, MUMBAI, MAHARASHTRA, 400022",
    "Validity": "Oct 23, 2018 - Perpetual"
  },
  {
    "Name": "Prospurts Consulco Private Limited",
    "Registration No": "INA100015869",
    "E-mail": "abhishek@prospurts.com",
    "Telephone": "91009599560528",
    "Fax No": "91009599560528",
    "Address": "39/6,Ground Floor,, East Patel Nagar, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110008",
    "Contact Person": "Abhishek  Mittal",
    "Correspondence Address": "701, Narain Manzil, Barakhamba Road, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110001",
    "Validity": "Apr 20, 2021 - Perpetual"
  },
  {
    "Name": "PROVITT CONSULTANTS",
    "Registration No": "INA000018276",
    "E-mail": "gera_shalini@yahoo.co.uk",
    "Telephone": "91008527494288",
    "Fax No": "91008527494288",
    "Address": "WeWork Blue One Square 246 Phase IV, Udyog Vihar Gurugram Haryana, GURGAON, HARYANA, 122016",
    "Contact Person": "SHALINI  GERA",
    "Correspondence Address": "WeWork Blue One Square 246 Phase IV, Udyog Vihar Gurugram Haryana, GURGAON, HARYANA, 122016",
    "Validity": "Jul 25, 2023 - Perpetual"
  },
  {
    "Name": "PRP Professional Edge Associates Private Limited",
    "Registration No": "INA100014578",
    "E-mail": "info@prpedge.com",
    "Telephone": "911244249000",
    "Fax No": "911244249000",
    "Address": "ES 343 ESPACE Nirvana Country, South City II Sector 50, GURUGRAM, HARYANA, 122018",
    "Contact Person": "Sanjeev Gupta",
    "Correspondence Address": "508 5th Floor Eros City Square, Rosewood City  Sector 49 & 50, GURUGRAM, HARYANA, 122018",
    "Validity": "Mar 12, 2020 - Perpetual"
  },
  {
    "Name": "PRUDENO WEALTH ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000017806",
    "E-mail": "vinitciyer@gmail.com",
    "Address": "Nirmal Township II SNO 42, Hadapsar, PUNE, MAHARASHTRA, 411028",
    "Contact Person": "VINIT IYER",
    "Correspondence Address": "Office No. SW/SB/805 806, 8th Floor, South Block, Sacred World, Sacred Heart Town Co.op Premises Society Ltd. S No. 75, CTS No. 1498, Wanowarie, PUNE, MAHARASHTRA, 411040",
    "Validity": "Apr 11, 2023 - Perpetual"
  },
  {
    "Name": "PRUDENT CORPORATE ADVISORY SERVICES LIMITED",
    "Registration No": "INA000004906",
    "Address": "PRUDENT HOUSE, 3 Devang Park Society,, Panjrapole Cross Road, Ambawadi, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Jun 08, 2016 - Perpetual"
  },
  {
    "Name": "Pugmark Fund Capital Advisors LLP",
    "Registration No": "INA000019576",
    "E-mail": "ram@pugmarkfund.com",
    "Telephone": "00919880122118",
    "Fax No": "00919880122118",
    "Address": "E-203, Raheja Residency, Koramangala 3rd Block,, Nandagudi Police Station, BANGALORE, KARNATAKA, 560034",
    "Contact Person": "Ram Manohar Mamidi",
    "Correspondence Address": "1st Floor, Olsen Spaces, Site No. 41, Agara Village, 12th Main Road, 14th Cross, HSR Layout, Sector 6, BANGALORE, KARNATAKA, 560102",
    "Validity": "Sep 24, 2024 - Perpetual"
  },
  {
    "Name": "Puneet Saxena",
    "Registration No": "INA100010943",
    "E-mail": "puneet2004@gmail.com",
    "Telephone": "919920036675",
    "Address": "C-36, Navkunj Apartments, 87 I.P Extension, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110092",
    "Contact Person": "Puneet Saxena",
    "Correspondence Address": "C-36, Navkunj Apartments, 87 I.P Extension, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110092",
    "Validity": "Jun 29, 2018 - Perpetual"
  },
  {
    "Name": "PUNIT M SETHIA",
    "Registration No": "INA200015787",
    "E-mail": "pm.sethia@gmail.com",
    "Address": "GF 25, GROUND FLOOR, TIDEL PARK, NO.4, RAJIV GANDHI SALAI, TARAMANI, CHENNAI, TAMIL NADU, 600113",
    "Contact Person": "Punit Sethia",
    "Correspondence Address": "OLD NO 861, Flat No A-1 FIRST FLOOR, Poonamalle High Road, Kilpauk, CHENNAI, TAMIL NADU, 600010",
    "Validity": "Feb 25, 2021 - Perpetual"
  },
  {
    "Name": "Punyasa Capital Advisors LLP",
    "Registration No": "INA000020110",
    "Address": "A 47/F, DDA FLATS MUNIRKA, Munirka, South Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110067",
    "Correspondence Address": "A 47/F, DDA FLATS MUNIRKA, Munirka, South Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110067",
    "Validity": "Apr 21, 2025 - Perpetual"
  },
  {
    "Name": "Purnartha Investment Advisers Pvt.Ltd.",
    "Registration No": "INA000000672",
    "Validity": "Dec 26, 2013 - Perpetual"
  },
  {
    "Name": "PURPLEPOND FINANCIAL PLANNERS PRIVATE LIMITED",
    "Registration No": "INA200016892",
    "E-mail": "saravanan@purplepond.in",
    "Address": "No.11/11A, Sir Thiyagaraya Road,, Challamall, Suit 604, 6th Floor, T Nagar,, CHENNAI, TAMIL NADU, 600017",
    "Contact Person": "Saravanan  S",
    "Correspondence Address": "No.11/11A, Sir Thiyagaraya Road, Challamall, Suit 604, 6th Floor, T Nagar, CHENNAI, TAMIL NADU, 600017",
    "Validity": "May 27, 2022 - Perpetual"
  },
  {
    "Name": "PUSPENDU DATTA",
    "Registration No": "INA000017213",
    "E-mail": "puspendudatta@protonmail.com",
    "Address": "Tower 4 10D Pashmina Waterfront Apartment, Bhattarahalli, Next to Evoma Hotel, Thambuchetty Palya, BANGALORE, KARNATAKA, 560049",
    "Contact Person": "PUSPENDU DATTA",
    "Correspondence Address": "Tower 4 10D Pashmina Waterfront Apartment, Bhattarahalli, Next to Evoma Hotel, Thambuchetty Palya, BANGALORE, KARNATAKA, 560049",
    "Validity": "Sep 23, 2022 - Perpetual"
  },
  {
    "Name": "QBER ASSET ADVISORS LLP",
    "Registration No": "INA000007021",
    "E-mail": "mansi@qberassetadvisors.com",
    "Address": "14,B 1401, Lavista, PL - 256/257, Sec 10, Kharghar, Raigad,, MUMBAI, MAHARASHTRA, 410210",
    "Contact Person": "MANSI KANADE",
    "Correspondence Address": "Office No 1, 1st Floor, Xth Central Mall, Mahavir Nagar, MUMBAI, MAHARASHTRA, 400067",
    "Validity": "Feb 03, 2017 - Perpetual"
  },
  {
    "Name": "QICAP Management LLP",
    "Registration No": "INA000019239",
    "E-mail": "ia@qi-cap.com",
    "Telephone": "918799539901",
    "Fax No": "918799539901",
    "Address": "Block-51 (301A-301B),WTCROAD 5E,, ZONE-5, GIFTCITY, Dabhoda, Gandhi Nagar,, GANDHINAGAR, GUJARAT, 382355",
    "Contact Person": "Sandeep Ahuja",
    "Correspondence Address": "Block-51 (301A-301B),WTCROAD 5E, ZONE-5, GIFTCITY, Dabhoda, Gandhi Nagar, GANDHINAGAR, GUJARAT, 382355",
    "Validity": "Jun 21, 2024 - Perpetual"
  },
  {
    "Name": "Qovar Advisors Private Limited",
    "Registration No": "INA200011365",
    "E-mail": "eswar@qovar.in",
    "Address": "A 2054, Sobha Arena, Pebble Court, Off Kanakapura road, Thalaghattapura village, BANGALORE, KARNATAKA, 560062",
    "Contact Person": "Eswar Suryanarayan",
    "Correspondence Address": "A 2054, Sobha Arena, Pebble Court, Off Kanakapura road, Thalaghattapura village, BANGALORE, KARNATAKA, 560062",
    "Validity": "Aug 06, 2018 - Perpetual"
  },
  {
    "Name": "quant Portfolio Managers Private Limited",
    "Registration No": "INA000003924",
    "E-mail": "Anurag.seth@quantcapital.co.in",
    "Telephone": "02240880366",
    "Fax No": "02240880366",
    "Address": "6th Floor, Sea Breeze Building, Appasaheb Marathe Marg, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "ANURAG SETH",
    "Correspondence Address": "612, Maker Chambers IV, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Validity": "Dec 11, 2015 - Perpetual"
  },
  {
    "Name": "QUANTSAPP WEALTH PRIVATE LIMITED",
    "Registration No": "INA000016278",
    "E-mail": "wealth@quantsapp.com",
    "Telephone": "91008657759829",
    "Fax No": "91008657759829",
    "Address": "Flat No - 1804, 18th Floor, B Wing, Raj Grandeur CHS Ltd,, Hiranandani Hospital Road, Powai,, THANE, MAHARASHTRA, 400076",
    "Contact Person": "Sumedha  Arora",
    "Correspondence Address": "601, Trade Avenue, Suren Road, Near Western Express Highway, Andheri East, MUMBAI, MAHARASHTRA, 400093",
    "Validity": "Oct 25, 2021 - Perpetual"
  },
  {
    "Name": "QUANTUM INFORMATION SERVICES PRIVATE LIMITED",
    "Registration No": "INA000000680",
    "E-mail": "Compliance@PersonalFN.com",
    "Telephone": "2261361216",
    "Fax No": "2261361216",
    "Address": "103, REGENT CHAMBERS,, NARIMAN POINT,, MUMBAI, MAHARASHTRA, 400021",
    "Contact Person": "MR.KRUTI GOGRI",
    "Correspondence Address": "101, Raheja Chambers, Fee Press Journal marg, 213, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Validity": "Dec 27, 2013 - Perpetual"
  },
  {
    "Name": "Qubit Investment Advisors Private Limited",
    "Registration No": "INA000019293",
    "E-mail": "siddhant@jars-ca.com",
    "Telephone": "00919084132575",
    "Fax No": "00919084132575",
    "Address": "1142, 6th Main 7th Sector, HSR Layout, Koramangala,, Bangalore South, BANGALORE, KARNATAKA, 560102",
    "Contact Person": "Siddhant Raniwala",
    "Correspondence Address": "1142, 6th Main 7th Sector, HSR Layout, Koramangala, Bangalore South, BANGALORE, KARNATAKA, 560102",
    "Validity": "Jun 21, 2024 - Perpetual"
  },
  {
    "Name": "Quicko Infosoft Private Limited",
    "Registration No": "INA000021599",
    "E-mail": "vishvajit@quicko.com",
    "Telephone": "00919099983246",
    "Fax No": "00919099983246",
    "Address": "B701, Amrapali Lakeview Tower, Opp., Vastrapur Lake, Vastrapur, Ahmedabad, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "VISHVAJIT SONAGARA",
    "Correspondence Address": "B701, Amrapali Lakeview Tower, Opp., Vastrapur Lake, Vastrapur, Ahmedabad, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Dec 18, 2025 - Perpetual"
  },
  {
    "Name": "Quinstinct Advisory Private Ltd",
    "Registration No": "INA200016096",
    "E-mail": "ria@quinstinct.com",
    "Telephone": "91009840019451",
    "Fax No": "91009840019451",
    "Address": "115/268/15 7th Floor, Khaleel Shirazi Estate Egmore, CHENNAI, TAMIL NADU, 600008",
    "Contact Person": "Sanjay Santhanam",
    "Correspondence Address": "115/268/15 7th Floor, Khaleel Shirazi Estate Egmore, CHENNAI, TAMIL NADU, 600008",
    "Validity": "Aug 13, 2021 - Perpetual"
  },
  {
    "Name": "RACHIT KHANDELWAL",
    "Registration No": "INA000008154",
    "E-mail": "rkhandelwal55@yahoo.co.in",
    "Address": "94/203,Vijay Path,Agarwal Farm, Mansarovar, JAIPUR, RAJASTHAN, 302020",
    "Contact Person": "RACHIT KHANDELWAL",
    "Correspondence Address": "94/203,Vijay Path,Agarwal Farm, Mansarovar, JAIPUR, RAJASTHAN, 302020",
    "Validity": "Jul 26, 2017 - Perpetual"
  },
  {
    "Name": "RACHNA CHAUHAN",
    "Registration No": "INA000014632",
    "E-mail": "ONLINE.WRITE2ME@GMAIL.COM",
    "Address": "B-505 IRIS SOCIETY, BALEWADI HIGH STREET,, NEXT TO CUMMINS INDIA OFFICE, BALEWADI,, PUNE, MAHARASHTRA, 411045",
    "Contact Person": "RACHNA CHAUHAN",
    "Correspondence Address": "B-505 IRIS SOCIETY, BALEWADI HIGH STREET, NEXT TO CUMMINS INDIA OFFICE, BALEWADI, PUNE, MAHARASHTRA, 411045",
    "Validity": "May 07, 2020 - Perpetual"
  },
  {
    "Name": "RAHUL AGARWAL (PROPRIETOR OF ADVENT FINANCIAL)",
    "Registration No": "INA300003616",
    "E-mail": "rahul@adventfa.com",
    "Telephone": "(033) 2486 5085",
    "Fax No": "(033) 2486 5085",
    "Address": "1704 Water Lily, Nahar Amrit Shakti, Chandivali, MUMBAI, MAHARASHTRA, 400072",
    "Contact Person": "RAHUL AGARWAL",
    "Correspondence Address": "Goldwin Gunjan, 3rd Floor, 19B Paddapukur Lane, KOLKATA, WEST BENGAL, 700020",
    "Validity": "Oct 08, 2015 - Perpetual"
  },
  {
    "Name": "Rahul Kalra",
    "Registration No": "INA000018391",
    "E-mail": "raulkalra@gmail.com",
    "Telephone": "919594035901",
    "Address": "101 1st floor A Wing Clover Centre, 7 Moledina Road Pune City, PUNE, MAHARASHTRA, 411001",
    "Contact Person": "Rahul Kalra",
    "Correspondence Address": "101 1st floor A Wing Clover Centre, 7 Moledina Road Pune City, PUNE, MAHARASHTRA, 411001",
    "Validity": "Aug 24, 2023 - Perpetual"
  },
  {
    "Name": "Rajan Nileshbhai Gajariya Proprietor Truenorth Capital",
    "Registration No": "INA000020040",
    "E-mail": "rajangajariya11@gmail.com",
    "Telephone": "919408270249",
    "Address": "212, The Spire, 150 ft ring road, Rajkot, RAJKOT, GUJARAT, 360001",
    "Contact Person": "RAJAN GAJARIYA",
    "Correspondence Address": "212, The Spire, 150 ft ring road, Rajkot, RAJKOT, GUJARAT, 360001",
    "Validity": "Mar 26, 2025 - Perpetual"
  },
  {
    "Name": "RAJAT SHARMA (PROP SANA SECURITIES)",
    "Registration No": "INA100004608",
    "E-mail": "rajat@sanasecurities.com",
    "Telephone": "1141517078",
    "Fax No": "1141517078",
    "Address": "WGF 1&2, HANS BHAWAN, BAHADUR SHAH ZAFAR MARG, NEW DELHI, 110002",
    "Correspondence Address": "WGF 1&2, HANS BHAWAN, BAHADUR SHAH ZAFAR MARG, NEW DELHI, 110002",
    "Validity": "Apr 29, 2016 - Perpetual"
  },
  {
    "Name": "RAJIV SHAH (PROPRIETOR: RMS INVESTMENTS)",
    "Registration No": "INA000007933",
    "E-mail": "rmsinvestments@outlook.com",
    "Address": "R no. k1 4th floor 67/69 dada manzil, mohammad ali road, MUMBAI, MAHARASHTRA, 400003",
    "Contact Person": "rajiv shah",
    "Correspondence Address": "r. no. k1 4th floor 67/69 dada manzil, mohammad ali road, MUMBAI, MAHARASHTRA, 400003",
    "Validity": "Jun 28, 2017 - Perpetual"
  },
  {
    "Name": "RAJIV SHARMA PROPRIETOR M/S CAPITAL LIFE MARKET RESEARCH",
    "Registration No": "INA000001365",
    "E-mail": "capital.life1708@gmail.com",
    "Telephone": "07310000000",
    "Fax No": "07310000000",
    "Address": "403,404,405,Trade House, South Tukoganj,Dhakkan Wala Kuan, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "RAJIV SHARMA",
    "Correspondence Address": "G-2, Khan Building, 2/2 Old Palasia, Near K College, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Mar 27, 2014 - Perpetual"
  },
  {
    "Name": "RAJU JHARIYA PROPRIETOR CAPITAL VRADDHI FINANCIAL SERVICES",
    "Registration No": "INA000005291",
    "E-mail": "raju.599@rediffmail.com",
    "Address": "Office no 201 Second Floor and 301 Third Floor, Plot No 49-A, Scheme No 53, INDORE, MADHYA PRADESH, 452010",
    "Correspondence Address": "342, PU-4, Scheme No. 54, Vijay Nagar, INDORE, MADHYA PRADESH, 452010",
    "Validity": "Aug 03, 2016 - Perpetual"
  },
  {
    "Name": "RAJU SATPUTE PROPRIETOR THE EQUAL RESEARCH",
    "Registration No": "INA000004377",
    "E-mail": "raju.satpute@astral.ac.in",
    "Address": "PLOT NO 295 PU4 SCHEME NO 54 2nd FLOOR, BEHIND ORBIT MALL INDORE, INDORE, MADHYA PRADESH, 452010",
    "Correspondence Address": "228-A, Trade Center, 18, South Tukoganj, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Mar 16, 2016 - Perpetual"
  },
  {
    "Name": "Rakesh",
    "Registration No": "INA100006773",
    "E-mail": "rk_popli@yahoo.com",
    "Address": "67 Ashoka Apartments, A-2 Paschim Vihar, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110063",
    "Contact Person": "Rakesh Popli",
    "Correspondence Address": "67 Ashoka Apartments, A-2 Paschim Vihar, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110063",
    "Validity": "Dec 14, 2016 - Perpetual"
  },
  {
    "Name": "Rama Subramanyam Nimmagadda",
    "Registration No": "INA000017693",
    "Address": "VILLA 91, Lakshmi Vihar Phase 2, , NALLAGANDLA, Lingampally,, HYDERABAD, TELANGANA, 500019",
    "Correspondence Address": "VILLA 91, Lakshmi Vihar Phase 2, , NALLAGANDLA, Lingampally, HYDERABAD, TELANGANA, 500019",
    "Validity": "Feb 28, 2023 - Perpetual"
  },
  {
    "Name": "Ramakrishnan M Proprietor Well Fare Investment Advisers",
    "Registration No": "INA000018683",
    "E-mail": "p13ramakrishnanm@iimidr.ac.in",
    "Telephone": "919363569105",
    "Address": "90/5/2 VCV Nagar, Panikampalayam Pirivu, RS Road,, Perundurai, Erode District,, ERODE, TAMIL NADU, 638052",
    "Contact Person": "Ramakrishnan Munusamy",
    "Correspondence Address": "90/5/2 VCV Nagar, Panikampalayam Pirivu, RS Road, Perundurai, Erode District, ERODE, TAMIL NADU, 638052",
    "Validity": "Dec 18, 2023 - Perpetual"
  },
  {
    "Name": "Raman Kumar Verma",
    "Registration No": "INA100013861",
    "E-mail": "ramanverma2015@gmail.com",
    "Address": "H.N 10/323 Buddhi Vihar, Phase-2, MORADABAD, UTTAR PRADESH, 244001",
    "Contact Person": "Raman Verma",
    "Correspondence Address": "H.N 10/323 Buddhi Vihar, Phase-2, MORADABAD, UTTAR PRADESH, 244001",
    "Validity": "Aug 22, 2019 - Perpetual"
  },
  {
    "Name": "Ramchandran S Iyer",
    "Registration No": "INA000018647",
    "E-mail": "ria.ramchandraniyer@gmail.com",
    "Telephone": "919653681335",
    "Address": "602, Virat Ozone, Khambalpada, Kanchangaon, , Near Manjunath College, Dombivli East,, THANE, MAHARASHTRA, 421201",
    "Contact Person": "Ramchandran S Iyer",
    "Correspondence Address": "602, Virat Ozone, Khambalpada, Kanchangaon, , Near Manjunath College, Dombivli East, THANE, MAHARASHTRA, 421201",
    "Validity": "Dec 06, 2023 - Perpetual"
  },
  {
    "Name": "Ratnasri Karra",
    "Registration No": "INA200009582",
    "E-mail": "kratnasri@gmail.com",
    "Address": "32, 10th Main, Laughing Waters, , Old Airport Varthur Road, Ramagundanahalli, BANGALORE, KARNATAKA, 560066",
    "Contact Person": "Ratnasri Karra",
    "Correspondence Address": "32, 10th Main, Laughing Waters, , Old Airport Varthur Road, Ramagundanahalli, BANGALORE, KARNATAKA, 560066",
    "Validity": "Jan 19, 2018 - Perpetual"
  },
  {
    "Name": "Ravi Gupta",
    "Registration No": "INA000021085",
    "E-mail": "ravi@aarschambers.com",
    "Telephone": "00919999044287",
    "Fax No": "00919999044287",
    "Address": "M-5/11, Third Floor, DLF City Phase 2, Gurgaon, Haryana, GURUGRAM, HARYANA, 122008",
    "Contact Person": "Ravi Gupta",
    "Correspondence Address": "M-5/11, Third Floor, DLF City Phase 2, Gurgaon, Haryana, GURUGRAM, HARYANA, 122008",
    "Validity": "Oct 03, 2025 - Perpetual"
  },
  {
    "Name": "RAVI KABRA Proprietor MONEYSAAR INVESTMENT ADVISORS",
    "Registration No": "INA000019187",
    "E-mail": "caravikabra01@gmail.com",
    "Telephone": "918291494160",
    "Address": "B-67, Flat No 702, Moreshwar Shantinagar Chs, Sector No 1, Opp TMT Bus Stop,, Near Mira Road Station, Mira Road East, Thane, THANE, MAHARASHTRA, 401107",
    "Contact Person": "Ravi Kabra",
    "Correspondence Address": "D -1207, SAMRIDDHI TOWER, BESIDE MEENABAI THACKERAY, INDRALOK PHASE 8, Thane, THANE, MAHARASHTRA, 401105",
    "Validity": "Jun 20, 2024 - Perpetual"
  },
  {
    "Name": "Ravi Saraogi",
    "Registration No": "INA200013983",
    "E-mail": "ravi.saraogi@samasthiti.in",
    "Telephone": "917358115733",
    "Fax No": "917358115733",
    "Address": "D401, The Atrium, Kalakshetra Road,, Thiruvanmiyur,, CHENNAI, TAMIL NADU, 600041",
    "Contact Person": "Ravi Saraogi",
    "Correspondence Address": "D401, The Atrium, Kalakshetra Road, Thiruvanmiyur, CHENNAI, TAMIL NADU, 600041",
    "Validity": "Sep 17, 2019 - Perpetual"
  },
  {
    "Name": "Ravi Uttamchandani",
    "Registration No": "INA000010450",
    "E-mail": "raviuttamchandani3637@gmail.com",
    "Address": "C-201, The First, Behind Keshavbaug Party plot,, IIM, Vastrapur,, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "Ravi Uttamchandani",
    "Correspondence Address": "C-202, R Elegance, behind Taj Hotel, Hansol, Sardarnagar, AHMEDABAD, GUJARAT, 382475",
    "Validity": "May 07, 2018 - Perpetual"
  },
  {
    "Name": "Rays Investment Adviser Private Limited",
    "Registration No": "INA100009327",
    "E-mail": "rohan.bansal@raysfinancial.com",
    "Address": "403 Dmall Netaji Subhash Place, Pitampura, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110034",
    "Contact Person": "Rohan Bansal",
    "Correspondence Address": "403 Dmall Netaji Subhash Place, Pitampura, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110034",
    "Validity": "Dec 18, 2017 - Perpetual"
  },
  {
    "Name": "RC CAPITAL MANAGEMENT",
    "Registration No": "INA000004088",
    "E-mail": "kpghaisas@gmail.com",
    "Telephone": "8806058625",
    "Fax No": "8806058625",
    "Address": "B-101, Chinar Co Op Hsg Society, S No 15 P, CTS 681, Nr Sangam Press, PUNE, MAHARASHTRA, 411038",
    "Contact Person": "KEDAR PRABHAKAR GHAISAS",
    "Correspondence Address": "D-102, Sudarshan Apartment, Survey 6/5, Karve Nagar, Behind ICICI Bank, Near Sahawas Society, PUNE, MAHARASHTRA, 411052",
    "Validity": "Feb 03, 2016 - Perpetual"
  },
  {
    "Name": "REDDITO CAPITAL INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000013040",
    "E-mail": "radditoinvestment@gmail.com",
    "Address": "c/o Subhash Parsram Awtani,, 152/8, Sardarnagar,, AHMEDABAD, GUJARAT, 382475",
    "Contact Person": "Pankaj  Solanki",
    "Correspondence Address": "c/o Subhash Parsram Awtani, 152/8, Sardarnagar, AHMEDABAD, GUJARAT, 382475",
    "Validity": "Apr 09, 2019 - Perpetual"
  },
  {
    "Name": "Reliance Securities Limited",
    "Registration No": "INA000014410",
    "Validity": "Jan 24, 2020 - Perpetual"
  },
  {
    "Name": "RENAISSANCE SMART TECH PRIVATE LIMITED",
    "Registration No": "INA000016436",
    "E-mail": "nidhi.kamani@renaissanceinvest.in",
    "Telephone": "0919920980102",
    "Fax No": "0919920980102",
    "Address": "Office No A 103 1st Floor Mittal Commercia Premises CHS LTD, Off Andheri Kurla Road Andheri East Marol Naka, MUMBAI, MAHARASHTRA, 400059",
    "Contact Person": "Nidhi Kamani",
    "Validity": "Nov 30, 2021 - Perpetual"
  },
  {
    "Name": "RENU MAHESHWARI",
    "Registration No": "INA200000589",
    "E-mail": "renu.maheshwari@finscholarz.in",
    "Telephone": "044 4215 4468",
    "Fax No": "044 4215 4468",
    "Address": "P-101, THE ATRIUM, 22, KALAKSHETRA ROAD,, THIRUVANMIYUR,, CHENNAI, TAMIL NADU, 600041",
    "Contact Person": "RENU MAHESHWARI",
    "Correspondence Address": "P-101, The Atrium, 22, Kalakshetra Road, Thiruvanmiyur, CHENNAI, TAMIL NADU, 600041",
    "Validity": "Dec 23, 2013 - Perpetual"
  },
  {
    "Name": "Revathi Priya Balraj",
    "Registration No": "INA200011666",
    "E-mail": "revathipriya.kce@gmail.com",
    "Address": "12,Ezhil Nagar,Ondipudhur,Coimbatore, COIMBATORE, TAMIL NADU, 641016",
    "Contact Person": "Revathi Priya Balraj",
    "Correspondence Address": "12,Ezhil Nagar,Ondipudhur,Coimbatore, COIMBATORE, TAMIL NADU, 641016",
    "Validity": "Sep 10, 2018 - Perpetual"
  },
  {
    "Name": "Right Alpha Capital Private Limited",
    "Registration No": "INA200015592",
    "E-mail": "compliance@rightalpha.club",
    "Telephone": "91009108499166",
    "Fax No": "91009108499166",
    "Address": "Galaxy, Unit 2, Electra Block,1st Floor, Wing A Exora Business Park,, Prestige Tech Park II, Bellandur, BANGALORE, KARNATAKA, 560037",
    "Contact Person": "Gaurav  Garg",
    "Correspondence Address": "Galaxy, Unit 2, Electra Block,1st Floor, Wing A Exora Business Park, Prestige Tech Park II, Bellandur, BANGALORE, KARNATAKA, 560037",
    "Validity": "Jun 13, 2023 - Perpetual"
  },
  {
    "Name": "RIGHT HORIZONS INVESTMENT ADVISORY SERVICES PRIVATE LTD",
    "Registration No": "INA200002601",
    "E-mail": "anilrego@righthorizon.com",
    "Telephone": "8065687503",
    "Fax No": "8065687503",
    "Address": "6, AREKERE VILLAGE,, OPP, BIRTISH BIOLOGICALS, BANNAERGHATTA ROAD,, BANGALORE, KARNATAKA, 560076",
    "Contact Person": "MR. ANIL REGO",
    "Correspondence Address": "6, AREKERE VILLAGE, OPP, BIRTISH BIOLOGICALS, BANNAERGHATTA ROAD, BANGALORE, KARNATAKA, 560076",
    "Validity": "Jan 27, 2015 - Perpetual"
  },
  {
    "Name": "RIGHT RETURNS FINANCIAL PLANNING LLP",
    "Registration No": "INA000004930",
    "E-mail": "devang@rightreturns.com",
    "Address": "208, UNIQUE INDUSTRIAL ESTATE, TWIN TOWER LANE, PRABHADEVI,, MUMBAI, MAHARASHTRA, 400025",
    "Correspondence Address": "208-209, Unique Industrial Estate, Twin Tower Lane, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Validity": "Jun 09, 2016 - Perpetual"
  },
  {
    "Name": "RightFocus Investments Pvt Ltd.",
    "Registration No": "INA200006628",
    "E-mail": "shailendra@finatoz.com",
    "Telephone": "00919900142993",
    "Fax No": "00919900142993",
    "Address": "4020, 2nd Floor, HAL 2nd Stage, Service Road, 17th Main, 1st Cross, Indiranagar, BANGALORE, KARNATAKA, 560008",
    "Contact Person": "Shailendra Kumar",
    "Correspondence Address": "4020, 2nd Floor, HAL 2nd Stage, Service Road, 17th Main, 1st Cross, Indiranagar, BANGALORE, KARNATAKA, 560008",
    "Validity": "Oct 21, 2016 - Perpetual"
  },
  {
    "Name": "RIMA RAJIV VASA",
    "Registration No": "INA300004267",
    "E-mail": "rimaconsultancy@gmail.com",
    "Telephone": "933958894",
    "Fax No": "933958894",
    "Address": "5A, PARK SIDE ROAD,, APNA MIT, 4TH FLOOR, KOLKATA, WEST BENGAL, 700026",
    "Contact Person": "RIMA RAJIV VASA",
    "Correspondence Address": "5A, Park Side Road, Apna Mit, 4th. Floor, KOLKATA, WEST BENGAL, 700026",
    "Validity": "Feb 26, 2016 - Perpetual"
  },
  {
    "Name": "Rinshad P P",
    "Registration No": "INA000017675",
    "E-mail": "pprinshad@gmail.com",
    "Telephone": "918891990999",
    "Address": "Ground Floor ,Abida Tower, Tirur road, Kottakkal, KOZHIKODE, KERALA, 676503",
    "Contact Person": "Rinshad P P",
    "Correspondence Address": "Ground Floor ,Abida Tower, Tirur road, Kottakkal, KOZHIKODE, KERALA, 676503",
    "Validity": "Feb 20, 2023 - Perpetual"
  },
  {
    "Name": "Rio Capital Investment Advisor",
    "Registration No": "INA000013402",
    "E-mail": "riocapitalinvestmentadvisor@gmail.com",
    "Telephone": "917974433001",
    "Address": "PRAKOSHT NO. 207, KRISHNA BUSINESS CENTER,, PLOT NO. 11,SCHEME NO. 54, PU-4 COMMERCIAL,, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "Bhini Chauhan",
    "Correspondence Address": "PRAKOSHT NO. 207, KRISHNA BUSINESS CENTER, PLOT NO. 11,SCHEME NO. 54, PU-4 COMMERCIAL, INDORE, MADHYA PRADESH, 452001",
    "Validity": "May 31, 2019 - Perpetual"
  },
  {
    "Name": "RIPPLEWAVE EQUITY ADVISORS LLP",
    "Registration No": "INA000009180",
    "E-mail": "mehul@ripplewave.net",
    "Address": "410, UNIQUE INDUSTRIAL ESTATE, OFF V. S. MARG, PRABHADEVI, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "MEHUL SAVLA",
    "Correspondence Address": "410, UNIQUE INDUSTRIAL ESTATE, OFF V. S. MARG, PRABHADEVI, MUMBAI, MAHARASHTRA, 400025",
    "Validity": "Nov 29, 2017 - Perpetual"
  },
  {
    "Name": "RISHU GOYAL - Proprietor of RURR ADVISORS",
    "Registration No": "INA000019673",
    "E-mail": "RURRADVISORS@GMAIL.COM",
    "Telephone": "917715826136",
    "Address": "603 TOWER 1  PARSVNATH SRISTHI SOCIETY SECTOR 93A, NOIDA, UTTAR PRADESH, 201301",
    "Contact Person": "RISHU GOYAL",
    "Correspondence Address": "603 TOWER 1  PARSVNATH SRISTHI SOCIETY SECTOR 93A, NOIDA, UTTAR PRADESH, 201301",
    "Validity": "Nov 08, 2024 - Perpetual"
  },
  {
    "Name": "Ritesh Chouksey",
    "Registration No": "INA000010344",
    "E-mail": "ritesh.chouksey@gmail.com",
    "Address": "Z-22,Office Number A-1 Ground Floor , MP Nagar,, BHOPAL, MADHYA PRADESH, 462023",
    "Contact Person": "Ritesh  Chouksey",
    "Correspondence Address": "H.No.1, Prakash Bhawan, Hathaikheda Road, Anand Nagar, BHOPAL, MADHYA PRADESH, 462001",
    "Validity": "Apr 16, 2018 - Perpetual"
  },
  {
    "Name": "Ritwik Rai",
    "Registration No": "INA000011875",
    "E-mail": "ritwik.rai@hotmail.com",
    "Telephone": "919930538880",
    "Address": "Bldg 7, Flat 5, Twinkle Star CHS, Ghatle Village Rd,Chembur, MUMBAI, MAHARASHTRA, 400071",
    "Contact Person": "Ritwik Rai",
    "Correspondence Address": "Bldg 7, Flat 5, Twinkle Star CHS, Ghatle Village Rd,Chembur, MUMBAI, MAHARASHTRA, 400071",
    "Validity": "Oct 23, 2018 - Perpetual"
  },
  {
    "Name": "Robins Joseph",
    "Registration No": "INA100013700",
    "E-mail": "robinsjoseph1@gmail.com",
    "Telephone": "9811031535",
    "Fax No": "9811031535",
    "Address": "D 101 , 1st Floor, Sec 26, NOIDA, UTTAR PRADESH, 201301",
    "Contact Person": "Robins Joseph",
    "Correspondence Address": "D 101 , 1st Floor, Sec 26, NOIDA, UTTAR PRADESH, 201301",
    "Validity": "Aug 02, 2019 - Perpetual"
  },
  {
    "Name": "Rohit Gupta Proprietor Algolytical",
    "Registration No": "INA000020138",
    "E-mail": "rohit.gr84@gmail.com",
    "Telephone": "919871231113",
    "Address": "AG 5, FIRST FLOOR, SHALIMAR BAGH, DELHI, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110088",
    "Contact Person": "ROHIT GUPTA",
    "Correspondence Address": "AG 5, FIRST FLOOR, SHALIMAR BAGH, DELHI, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110088",
    "Validity": "Apr 21, 2025 - Perpetual"
  },
  {
    "Name": "ROKAD APP PRIVATE LIMITED",
    "Registration No": "INA000018285",
    "E-mail": "gauravagr91@gmail.com",
    "Telephone": "00919425508667",
    "Fax No": "00919425508667",
    "Address": "SHOP NO 306, 3RD FLOOR SAMTA SHOPPING COMPLEX,, SAMTA COLONY RAIPUR, RAIPUR, CHHATTISGARH, 492001",
    "Contact Person": "Gaurav Agrawal",
    "Correspondence Address": "SHOP NO 306, 3RD FLOOR SAMTA SHOPPING COMPLEX, SAMTA COLONY RAIPUR, RAIPUR, CHHATTISGARH, 492001",
    "Validity": "Jul 31, 2023 - Perpetual"
  },
  {
    "Name": "Roshni Nayak",
    "Registration No": "INA000016038",
    "E-mail": "roshni.nayak@goalbridge.in",
    "Address": "C/204, New Gagangiri chs, Laxminarayan Temple Road, Opp MCF Joggers Park, Borivali West, MUMBAI, MAHARASHTRA, 400092",
    "Contact Person": "Roshni Nayak",
    "Correspondence Address": "C/204, New Gagangiri chs, Laxminarayan Temple Road, Opp MCF Joggers Park, Borivali West, MUMBAI, MAHARASHTRA, 400092",
    "Validity": "Jul 28, 2021 - Perpetual"
  },
  {
    "Name": "RS Capfin Investment and Finance",
    "Registration No": "INA200014557",
    "E-mail": "ramaswamy.swaminathan@gmail.com",
    "Address": "Ground Floor, Abirami Primera, No.19, 3rd Avenue, Indiranagar, Adyar, CHENNAI, TAMIL NADU, 600020",
    "Contact Person": "Swaminathan  R",
    "Correspondence Address": "Ground Floor, Abirami Primera, No.19, 3rd Avenue, Indiranagar, Adyar, CHENNAI, TAMIL NADU, 600020",
    "Validity": "Mar 06, 2020 - Perpetual"
  },
  {
    "Name": "Rudo Wealth Investment Advisory Private Limited",
    "Registration No": "INA000019503",
    "Address": "4th Floor, D Site No.1 Kacharakanihalli,, HRBR Layout 2nd Block Jhanavi Road, Horamavu, Bangalore North,, BANGALORE, KARNATAKA, 560043",
    "Correspondence Address": "4th Floor, D Site No.1 Kacharakanihalli, HRBR Layout 2nd Block Jhanavi Road, Horamavu, Bangalore North, BANGALORE, KARNATAKA, 560043",
    "Validity": "Aug 12, 2024 - Perpetual"
  },
  {
    "Name": "Ryze India Advisory Solutions Private Limited",
    "Registration No": "INA000021234",
    "E-mail": "nitin@ryzemoney.in",
    "Telephone": "00919916386005",
    "Fax No": "00919916386005",
    "Address": "Gala No. 329, 3rd Floor, Link Way Estate, CTS No 1093, New Link Road, Next to Shakti Motors, Malad West, Mumbai, MUMBAI, MAHARASHTRA, 400064",
    "Contact Person": "Nitin George",
    "Correspondence Address": "Gala No. 329, 3rd Floor, Link Way Estate, CTS No 1093, New Link Road, Next to Shakti Motors, Malad West, Mumbai, MUMBAI, MAHARASHTRA, 400064",
    "Validity": "Oct 31, 2025 - Perpetual"
  },
  {
    "Name": "S MEENAKSHI SUNDAR",
    "Registration No": "INA000018629",
    "E-mail": "sundar1729@gmail.com",
    "Telephone": "919899107801",
    "Address": "K 7068, Devinder Vihar, , Sector 56, GURGAON, HARYANA, 122011",
    "Contact Person": "S MEENAKSHI SUNDAR",
    "Correspondence Address": "K 7068, Devinder Vihar, , Sector 56, GURGAON, HARYANA, 122011",
    "Validity": "Nov 29, 2023 - Perpetual"
  },
  {
    "Name": "S Roshan Valiathan Proprietor Investantra",
    "Registration No": "INA000021128",
    "E-mail": "roshan.valiathan@gmail.com",
    "Telephone": "918088530587",
    "Address": "137 Ferns meadows,Near SSR College, Off hennur main road, Bilishivale, Dr sivaramakaranth Nagar Post, BANGALORE, KARNATAKA, 560077",
    "Contact Person": "S Roshan Valiathan",
    "Correspondence Address": "137 Ferns meadows,Near SSR College, Off hennur main road, Bilishivale, Dr sivaramakaranth Nagar Post, BANGALORE, KARNATAKA, 560077",
    "Validity": "Oct 08, 2025 - Perpetual"
  },
  {
    "Name": "SACHIN MAHESH WALAVALKAR",
    "Registration No": "INA000000805",
    "E-mail": "fortuneinvestme@yahoo.co.in",
    "Telephone": "2225479191",
    "Fax No": "2225479191",
    "Address": "601, JALTARANG LOKPURAM CHS, D-II, GLADY ALVARES ROAD, MAJIWADE, OPP. HIRANANDANI MEADOWS, OFF. POKHRAN ROAD NO. 2, THANE, MAHARASHTRA, 400610",
    "Contact Person": "SACHIN MAHESH WALAVALKAR",
    "Correspondence Address": "B 32, Building No. 2, Vinayak Bhavan, Kolbad Road, Khopat, THANE, MAHARASHTRA, 400601",
    "Validity": "Jan 08, 2014 - Perpetual"
  },
  {
    "Name": "Sachin Motilal Neema",
    "Registration No": "INA000008826",
    "E-mail": "neemasachin@gmail.com",
    "Address": "15, Green Villa, Himalaya Society, Ghatkopar(W),, MUMBAI, MAHARASHTRA, 400084",
    "Contact Person": "Sachin Neema",
    "Correspondence Address": "B-17, Kalyan Sagar, Plot no 152, Garodia Nagar, Ghatkopar, MUMBAI, MAHARASHTRA, 400084",
    "Validity": "Nov 03, 2017 - Perpetual"
  },
  {
    "Name": "Safejar Advisers Private Limited",
    "Registration No": "INA000017648",
    "E-mail": "ag.nishchay@gmail.com",
    "Telephone": "91919986843412",
    "Fax No": "91919986843412",
    "Address": "No.752, Vasantham,18th Main,, 6th Block, Koramangala, Bengaluru, BANGALORE, KARNATAKA, 560095",
    "Contact Person": "Nishchay Babu Gowrishankar",
    "Correspondence Address": "No.752, Vasantham,18th Main, 6th Block, Koramangala, Bengaluru, BANGALORE, KARNATAKA, 560095",
    "Validity": "Jan 30, 2023 - Perpetual"
  },
  {
    "Name": "Safestack Wealth Private Limited",
    "Registration No": "INA000019424",
    "E-mail": "maheshwari@verifyapp.in",
    "Telephone": "00919966257992",
    "Fax No": "00919966257992",
    "Address": "1st Floor, H.No, E-1/46, Sector 11, DLF, Faridabad, FARIDABAD, HARYANA, 121006",
    "Contact Person": "Chelluri Maheshwari",
    "Correspondence Address": "1st Floor, H.No, E-1/46, Sector 11, DLF, Faridabad, FARIDABAD, HARYANA, 121006",
    "Validity": "Jul 22, 2024 - Perpetual"
  },
  {
    "Name": "SAGAR PUJARI PROPRIETOR FINCLIFF CAPITAL",
    "Registration No": "INA000020989",
    "E-mail": "sagarpujari.work@gmail.com",
    "Telephone": "919540250101",
    "Address": "B 127 B-Block, SECTOR 19 NOIDA, NOIDA, UTTAR PRADESH, 201301",
    "Contact Person": "SAGAR PUJARI",
    "Correspondence Address": "B 127 B-Block, SECTOR 19 NOIDA, NOIDA, UTTAR PRADESH, 201301",
    "Validity": "Aug 28, 2025 - Perpetual"
  },
  {
    "Name": "SAHASTHA INVESTMENT ADVISERS PRIVATE LIMITED",
    "Registration No": "INA000020086",
    "E-mail": "piyush@sahastha.com",
    "Telephone": "00918875127277",
    "Fax No": "00918875127277",
    "Address": "903, 9 FLOOR MALL OF JAIPUR GANDHIPATH, VAISHALI NAGAR, JAIPUR, RAJASTHAN, JAIPUR, RAJASTHAN, 302021",
    "Contact Person": "Piyush khatri",
    "Correspondence Address": "903, 9 FLOOR MALL OF JAIPUR GANDHIPATH, VAISHALI NAGAR, JAIPUR, RAJASTHAN, JAIPUR, RAJASTHAN, 302021",
    "Validity": "Apr 07, 2025 - Perpetual"
  },
  {
    "Name": "Sahil Ahmed Chotalia (Proprietor Mount Bliss Capital)",
    "Registration No": "INA000015145",
    "E-mail": "Sahu_111@yahoo.co.in",
    "Address": "A-1904, Vastu Tower, Evershine Naga, Opp. Ryan International School, Malad (W),, MUMBAI, MAHARASHTRA, 400064",
    "Contact Person": "Sahil Chotalia",
    "Correspondence Address": "A-1904, Vastu Tower, Evershine Naga, Opp. Ryan International School, Malad (W), MUMBAI, MAHARASHTRA, 400064",
    "Validity": "Sep 21, 2020 - Perpetual"
  },
  {
    "Name": "Sajjan Kumar",
    "Registration No": "INA200010393",
    "E-mail": "kumarsajjan50@gmail.com",
    "Address": "21,2B Cross,Hanuman Layout,Manorayanpalya,Sultanpalya, main road,R.T.nagar post, BANGALORE, KARNATAKA, 560032",
    "Contact Person": "Sajjan Kumar",
    "Correspondence Address": "21,2B Cross,Hanuman Layout,Manorayanpalya,Sultanpalya, main road,R.T.nagar post, BANGALORE, KARNATAKA, 560032",
    "Validity": "Apr 23, 2018 - Perpetual"
  },
  {
    "Name": "Sakshi Gaurav Jalan",
    "Registration No": "INA000020581",
    "E-mail": "basant.advisors@gmail.com",
    "Telephone": "919820101250",
    "Address": "605, Unique Tower, Off S. V. Road, Goregaon West, Mumbai, MUMBAI, MAHARASHTRA, 400104",
    "Contact Person": "Sakshi Jalan",
    "Correspondence Address": "605, Unique Tower, Off S. V. Road, Goregaon West, Mumbai, MUMBAI, MAHARASHTRA, 400104",
    "Validity": "Jul 14, 2025 - Perpetual"
  },
  {
    "Name": "SALMA SONY",
    "Registration No": "INA000017222",
    "E-mail": "salmasony.cfp@gmail.com",
    "Address": "B 401 Fortune Sky City Apartment Dahej Bypass Road Opp, Bawa Rehan Dargah Near Khwaja Township Bharuch Gujarat, VADODARA, GUJARAT, 392001",
    "Contact Person": "SALMA SONY",
    "Correspondence Address": "FLAT NO. T-4, EMARAT TAUSEEF, CHITKOHRA, REV.THANA NO.17, POST OFFICE ANISABAD, P.S GARDANIBAGH, PATNA, BIHAR, 800002",
    "Validity": "Oct 07, 2022 - Perpetual"
  },
  {
    "Name": "Samar Wealth Advisors",
    "Registration No": "INA000019345",
    "E-mail": "wadhwa.raghav@yahoo.com",
    "Telephone": "91009888013123",
    "Fax No": "91009888013123",
    "Address": "31-A Race Course Road, Amritsar,, AMRITSAR, PUNJAB, 143001",
    "Contact Person": "Raghav Wadhwa",
    "Correspondence Address": "31-A Race Course Road, Amritsar, AMRITSAR, PUNJAB, 143001",
    "Validity": "Jul 01, 2024 - Perpetual"
  },
  {
    "Name": "Samco Ventures Pvt. Ltd.",
    "Registration No": "INA000013828",
    "E-mail": "umesh@samco.in",
    "Address": "1004 A 10th Floor, Naman Midtown, Senapati Bapat Marg, Elphinstone Road, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "Umesh Mehta",
    "Correspondence Address": "1004 A 10th Floor, Naman Midtown, Senapati Bapat Marg, Elphinstone Road, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Aug 19, 2019 - Perpetual"
  },
  {
    "Name": "SAMEER VINAYAK JOSHI",
    "Registration No": "INA000021447",
    "E-mail": "VJSAMEER@YAHOO.CO.IN",
    "Telephone": "00919820731116",
    "Fax No": "00919820731116",
    "Address": "32 ALAMNDA GLENDALE SOC, GLADY ALVARES ROAD, THANE, THANE, MAHARASHTRA, 400610",
    "Contact Person": "SAMEER JOSHI",
    "Correspondence Address": "32 ALAMNDA GLENDALE SOC, GLADY ALVARES ROAD, THANE, THANE, MAHARASHTRA, 400610",
    "Validity": "Dec 05, 2025 - Perpetual"
  },
  {
    "Name": "Samvitti Capital Private Limited",
    "Registration No": "INA000019169",
    "E-mail": "svkamath@samvitticapital.com",
    "Telephone": "91008242983541",
    "Fax No": "91008242983541",
    "Address": "Kalasha Nivasa, D. No. 16/100/2, Harihara Nagara, Karnad, Dakshina Kannada, Mulki,, MANGALORE, KARNATAKA, 574154",
    "Contact Person": "Voderbettu  Kamath",
    "Correspondence Address": "Kalasha Nivasa, D. No. 16/100/2, Harihara Nagara, Karnad, Dakshina Kannada, Mulki, MANGALORE, KARNATAKA, 574154",
    "Validity": "Jun 13, 2024 - Perpetual"
  },
  {
    "Name": "Samyama Advisors Private Limited",
    "Registration No": "INA000015321",
    "E-mail": "ankit@educationfund.in",
    "Address": "30, Omkar House, Near Swastik Cross Road, Navarangpura, AHMEDABAD, GUJARAT, 380009",
    "Contact Person": "Ankit Bhandari",
    "Correspondence Address": "30, Omkar House, Near Swastik Cross Road, Navarangpura, AHMEDABAD, GUJARAT, 380009",
    "Validity": "Oct 28, 2020 - Perpetual"
  },
  {
    "Name": "Sanaka India Advisors LLP",
    "Registration No": "INA000013059",
    "E-mail": "neeraj@sanakacapital.com",
    "Address": "1208 A, 13th Floor, Parinee Crescenzo, G Block, Behind MCA, Bandra Kurla Complex, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Neeraj  Bhatia",
    "Correspondence Address": "1208 A, 13th Floor, Parinee Crescenzo, G Block, Behind MCA, Bandra Kurla Complex, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Apr 09, 2019 - Perpetual"
  },
  {
    "Name": "SANDEEP MATTA PROPRIETOR TRADEIT INVESTMENT ADVISOR",
    "Registration No": "INA100004111",
    "E-mail": "tradeitinvestmentadvisor@gmail.com",
    "Telephone": "02942414889",
    "Fax No": "02942414889",
    "Address": "157, PATHO KI MAGRI, SUBHASH NAGAR, UDAIPUR, RAJASTHAN, 313001",
    "Contact Person": "SANDEEP MATTA",
    "Correspondence Address": "157, Patho Ki Magri, Subhash Nagar, UDAIPUR, RAJASTHAN, 313001",
    "Validity": "Feb 08, 2016 - Perpetual"
  },
  {
    "Name": "SANDIP SABHARWAL",
    "Registration No": "INA000000425",
    "E-mail": "sandipsabh@yahoo.co.in",
    "Telephone": "2230828575",
    "Fax No": "2230828575",
    "Address": "2202,MARATHON HEIGHTS,PANDURANG BUDHKAR MARG, LOWER PAREL, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "SANDIP SABHARWAL",
    "Correspondence Address": "2202,Marathon Heights,Pandurang Budhkar Marg, Lower Parel, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Dec 05, 2013 - Perpetual"
  },
  {
    "Name": "SANGUINE WEALTH ADVISORS LLP",
    "Registration No": "INA000009685",
    "E-mail": "AMAR@SANGUINEWEALTH.COM",
    "Telephone": "919820214373",
    "Fax No": "919820214373",
    "Address": "B7, JAY CHAMBERS,DAYALDAS ROAD, VILE PARLE EAST, MUMBAI, MAHARASHTRA, 400057",
    "Contact Person": "AMAR TEKWANI",
    "Correspondence Address": "B7, JAY CHAMBERS,DAYALDAS ROAD, VILE PARLE EAST, MUMBAI, MAHARASHTRA, 400057",
    "Validity": "Feb 05, 2018 - Perpetual"
  },
  {
    "Name": "SANICA VISHWAJEET DHAMNASKAR",
    "Registration No": "INA000021289",
    "E-mail": "svd8816@gmail.com",
    "Telephone": "00919987414893",
    "Fax No": "00919987414893",
    "Address": "15/203, GULMOHAR, VASANT VIHAR, THANE WEST, THANE, MAHARASHTRA, 400610",
    "Contact Person": "Sanica Dhamnaskar",
    "Correspondence Address": "15/203, GULMOHAR, VASANT VIHAR, THANE WEST, THANE, MAHARASHTRA, 400610",
    "Validity": "Nov 04, 2025 - Perpetual"
  },
  {
    "Name": "Sanidhya Arvind Mishra",
    "Registration No": "INA000021456",
    "E-mail": "mishrasanidhya786@gmail.com",
    "Telephone": "00919082173664",
    "Fax No": "00919082173664",
    "Address": "B-9/101,Gagangiri Enclave,Barave Road,Khadakpada,, Kalyan (W), THANE, MAHARASHTRA, 421301",
    "Contact Person": "Sanidhya Mishra",
    "Correspondence Address": "B-9/101,Gagangiri Enclave,Barave Road,Khadakpada, Kalyan (W), THANE, MAHARASHTRA, 421301",
    "Validity": "Dec 08, 2025 - Perpetual"
  },
  {
    "Name": "Sanjay Roy (Proprietor of InvestEdge Consulting)",
    "Registration No": "INA300000984",
    "E-mail": "sanjayroy.cfp@gmail.com",
    "Telephone": "033 22267743",
    "Fax No": "033 22267743",
    "Address": "79, LENIN SARANI, ?COMMERCIAL POINT?, UNIT 509, 5TH FLOOR, KOLKATA, WEST BENGAL, 700013",
    "Contact Person": "SANJAY ROY",
    "Correspondence Address": "79, Lenin Sarani, ?Commercial Point?, Unit 509, 5th Floor, KOLKATA, WEST BENGAL, 700013",
    "Validity": "Feb 03, 2014 - Perpetual"
  },
  {
    "Name": "SANJAY SHARMA PROPRIETOR of FINETECH RESEARCH & INVESTMENT  ADVISOR",
    "Registration No": "INA000008756",
    "E-mail": "sanjaysharma2788@gmail.com",
    "Address": "OFFICE NO 108, 1ST FLOOR PRINCES BUSINESS SLY PARK, SCH NO 54/PU3 AB ROAD VIJAY NAGAR, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "Sanjay Sharma",
    "Correspondence Address": "OFFICE NO 108, 1ST FLOOR PRINCES BUSINESS SLY PARK, SCH NO 54/PU3 AB ROAD VIJAY NAGAR, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Nov 01, 2017 - Perpetual"
  },
  {
    "Name": "SANKALPNARAYAN KRISHNAN",
    "Registration No": "INA000015950",
    "E-mail": "sankalp.krishnan@yahoo.com",
    "Address": "S/o Narayan Krishnan, Flat no. 602, Tower-B, Balaji Garden,, Scheme 6, Road no. 5, Opp. Indian Gymkhana, King's Circle, Matunga (East), MUMBAI, MAHARASHTRA, 400019",
    "Contact Person": "SANKALPNARAYAN KRISHNAN",
    "Correspondence Address": "S/o Narayan Krishnan, Flat no. 602, Tower-B, Balaji Garden, Scheme 6, Road no. 5, Opp. Indian Gymkhana, King's Circle, Matunga (East), MUMBAI, MAHARASHTRA, 400019",
    "Validity": "Jul 08, 2021 - Perpetual"
  },
  {
    "Name": "Sanket Awate Fintech Private Limited",
    "Registration No": "INA000019381",
    "E-mail": "sanketawate111@gmail.com",
    "Telephone": "91007385107220",
    "Fax No": "91007385107220",
    "Address": "1786/A, Ameya Empire, Fl. No. Tf-4, 1st Lane, Rajarampuri,, KOLHAPUR, MAHARASHTRA, 416008",
    "Contact Person": "Sanket  Awate",
    "Correspondence Address": "1786/A, Ameya Empire, Fl. No. Tf-4, 1st Lane, Rajarampuri, KOLHAPUR, MAHARASHTRA, 416008",
    "Validity": "Jul 15, 2024 - Perpetual"
  },
  {
    "Name": "SANTOSH KUMAR SAHU PROPRIETOR SMART MONEY FINANCIAL SERVICES",
    "Registration No": "INA000004427",
    "E-mail": "smartmoneyfinancial@yahoo.com",
    "Address": "PLOT NO. 10/1 ,2nd floor 201-202, RADHA KRISHNA APPARTMENT BLOCK A MANORAMA GANJ  M.G ROAD, INDORE, MADHYA PRADESH, 452001",
    "Correspondence Address": "House No. 9, 2nd Floor, Diamond Colony, New Palasia, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Mar 21, 2016 - Perpetual"
  },
  {
    "Name": "SANTOSH SINGH PARIHAR PROPRIETOR TRAEBIZZ RESEARCH",
    "Registration No": "INA000004096",
    "E-mail": "tradebizzresearch@gmail.com",
    "Telephone": "0731000000",
    "Fax No": "0731000000",
    "Address": "285, 2ND FLOOR, PU 4, SCHEME NO. 54, SHAGUN MENTION, VIJAY NAGAR, INDORE, MADHYA PRADESH, 452010",
    "Contact Person": "SANTOSH SINGH PARIHAR",
    "Correspondence Address": "285, 2nd floor, PU 4, Scheme No. 54, Shagun Mention, Vijay Nagar, INDORE, MADHYA PRADESH, 452010",
    "Validity": "Feb 04, 2016 - Perpetual"
  },
  {
    "Name": "Sapna Tiwari",
    "Registration No": "INA100007675",
    "E-mail": "sapna3031@gmail.com",
    "Address": "O - 503, Green Valley Apartments, Plot No 18, Sector 22, Dwarka, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110077",
    "Contact Person": "Sapna Tiwari",
    "Correspondence Address": "O - 503, Green Valley Apartments, Plot No 18, Sector 22, Dwarka, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110077",
    "Validity": "May 16, 2017 - Perpetual"
  },
  {
    "Name": "Sathyamoorthy N",
    "Registration No": "INA200014353",
    "E-mail": "n_sathyamoorthy@yahoo.com",
    "Address": "No.3944, 1st Floor, TNHB, 5th Main Road, Ayyapakkam, CHENNAI, TAMIL NADU, 600077",
    "Contact Person": "Sathyamoorthy N",
    "Correspondence Address": "No.3944, 1st Floor, TNHB, 5th Main Road, Ayyapakkam, CHENNAI, TAMIL NADU, 600077",
    "Validity": "Dec 30, 2019 - Perpetual"
  },
  {
    "Name": "SATISH RAJAN N",
    "Registration No": "INA200002189",
    "E-mail": "satish@satishrajan.com",
    "Telephone": "04844022650",
    "Fax No": "04844022650",
    "Address": "7A INFRA GALLANT, LAYAM ROAD, KOCHI, KERALA, 682011",
    "Contact Person": "SATISH RAJAN N",
    "Correspondence Address": "NO. 3, 4TH FLOOR, JEWEL ARCADE, LAYAM ROAD, KOCHI, KERALA, 682035",
    "Validity": "Sep 03, 2014 - Perpetual"
  },
  {
    "Name": "Saurabh Aggarwal Proprietor Eraqus Investment Advisors",
    "Registration No": "INA000019983",
    "E-mail": "Saurabh@eraqusia.com",
    "Telephone": "919899024347",
    "Address": "A-145, DLF Capital Greens , Shivaji Marg , Karam Pura, West Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110015",
    "Contact Person": "Saurabh Aggarwal",
    "Correspondence Address": "A-145, DLF Capital Greens , Shivaji Marg , Karam Pura, West Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110015",
    "Validity": "Mar 12, 2025 - Perpetual"
  },
  {
    "Name": "Scripbox Wealth Managers Private Limited",
    "Registration No": "INA200001041",
    "E-mail": "compliance.ria@scripbox.com",
    "Telephone": "00919945034531",
    "Fax No": "00919945034531",
    "Address": "3rd Floor, Indiqube, The Leela Galleria, , No.23, Old Airport Road,, BANGALORE, KARNATAKA, 560008",
    "Contact Person": "Meyyappan Meyyappan",
    "Correspondence Address": "3rd Floor, Indiqube, The Leela Galleria, , No.23, Old Airport Road, BANGALORE, KARNATAKA, 560008",
    "Validity": "Sep 18, 2025 - Perpetual"
  },
  {
    "Name": "SENORA ADVISORS LLP",
    "Registration No": "INA000011413",
    "E-mail": "info@senoraadvisors.com",
    "Telephone": "919819817643",
    "Fax No": "919819817643",
    "Address": "304 305 Narayan Udyog Bhavan Dr B A Road, LALBAUG INDUSTRIAL ESTATE PAREL, MUMBAI, MAHARASHTRA, 400012",
    "Contact Person": "Neha  Jalan",
    "Correspondence Address": "304 305 Narayan Udyog Bhavan Dr B A Road, LALBAUG INDUSTRIAL ESTATE PAREL, MUMBAI, MAHARASHTRA, 400012",
    "Validity": "Aug 16, 2018 - Perpetual"
  },
  {
    "Name": "SENSAGE FINANCIAL SERVICES PRIVATE LIMITED",
    "Registration No": "INA200000027",
    "E-mail": "shabbir@sensageonline.com",
    "Telephone": "040 2333 3322",
    "Fax No": "040 2333 3322",
    "Address": "Flat No102 Fortune Heights MCH No10 2 289 87 102, Shanti Nagar Shantinagar Asifnagar Hyderabad, HYDERABAD, TELANGANA, 500028",
    "Contact Person": "M.S. Shabbir",
    "Correspondence Address": "10-2-5/11 A C Guards, Near Income Tax Towers, HYDERABAD, ANDHRA PRADESH, 500004",
    "Validity": "Aug 01, 2013 - Perpetual"
  },
  {
    "Name": "Seshaphani Jonnalagadda Proprietor of Invest Street Investment Advisers",
    "Registration No": "INA000019390",
    "E-mail": "support@investstreet.in",
    "Telephone": "919878247365",
    "Fax No": "919878247365",
    "Address": "36/5, 3rd Floor, Hustlehub Tech Park, Sector 2, HSR Layout,, BANGALORE, KARNATAKA, 560102",
    "Contact Person": "Seshaphani Jonnalagadda Proprietor of Invest Street Investment",
    "Correspondence Address": "36/5, 3rd Floor, Hustlehub Tech Park, Sector 2, HSR Layout, BANGALORE, KARNATAKA, 560102",
    "Validity": "Jul 18, 2024 - Perpetual"
  },
  {
    "Name": "SFI INVESTMENT ADVISORS LLP",
    "Registration No": "INA000019114",
    "E-mail": "raghuveer.nath@gmail.com",
    "Telephone": "91009711144960",
    "Fax No": "91009711144960",
    "Address": "W1C101, DLF Wellington Estate, DLF City 5, Gurugram, GURGAON, HARYANA, 122009",
    "Contact Person": "Raghuveer  Nath",
    "Correspondence Address": "W1C101, DLF Wellington Estate, DLF City 5, Gurugram, GURGAON, HARYANA, 122009",
    "Validity": "Jun 11, 2024 - Perpetual"
  },
  {
    "Name": "SH ANKUR JAIN",
    "Registration No": "INA100001158",
    "E-mail": "ankurjain2100@gmail.com",
    "Telephone": "01244088950",
    "Fax No": "01244088950",
    "Address": "K-230, VIJAY RATTAN VIHAR,, SECT-15, PART-2, GURGAON, GURGAON, HARYANA, 122001",
    "Contact Person": "SH ANKUR JAIN",
    "Correspondence Address": "Flat No. 808, Peach Tower, L & T Eden Park, M R Radha Main Road, Near Sipcot, Pudupakkam, Kanchipuram, CHENNAI, TAMIL NADU, 603103",
    "Validity": "Feb 28, 2014 - Perpetual"
  },
  {
    "Name": "SH ANKUR KAPUR",
    "Registration No": "INA100001406",
    "E-mail": "ankurkapur_cfa@yahoo.com",
    "Telephone": "01141425347",
    "Fax No": "01141425347",
    "Address": "9B SHIVALIK APARTMENT PLOT NO 32, SECTOR 6 DWARKA, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110075",
    "Contact Person": "SH ANKUR KAPUR",
    "Correspondence Address": "N 281, DLF Park Place, DLF Phase 5, Sector 54, Gurugram, GURUGRAM, HARYANA, 122009",
    "Validity": "Mar 31, 2014 - Perpetual"
  },
  {
    "Name": "SH SURESH KUMAR NARULA",
    "Registration No": "INA100001877",
    "E-mail": "sureshcfp@gmail.com",
    "Telephone": "01722550396",
    "Fax No": "01722550396",
    "Address": "1397, SECT-25, PANCHKULA, HARYANA, 134116",
    "Contact Person": "SH SURESH KUMAR NARULA",
    "Correspondence Address": "1397, Sect-25, Panchkula, HARYANA, 134116",
    "Validity": "Jun 16, 2014 - Perpetual"
  },
  {
    "Name": "Shankar K",
    "Registration No": "INA000017505",
    "E-mail": "shank_k@yahoo.com",
    "Address": "B/902, Mittal Park Tower 2, Raghunath Nagar, THANE, MAHARASHTRA, 400604",
    "Contact Person": "Shankar Krishnamurthy",
    "Correspondence Address": "B/902, Mittal Park Tower 2, Raghunath Nagar, THANE, MAHARASHTRA, 400604",
    "Validity": "Dec 20, 2022 - Perpetual"
  },
  {
    "Name": "SHARAD SANKARAN",
    "Registration No": "INA000016791",
    "E-mail": "ANANDKANKANI@LIVE.COM",
    "Address": "B 1006, UNIQUE AURUM, POONAM GARDEN, MIRA-BHAYANDAR, MAHARASHTRA, 400053",
    "Contact Person": "SHARAD SANKARAN",
    "Correspondence Address": "B 1006, UNIQUE AURUM, POONAM GARDEN, MIRA-BHAYANDAR, MAHARASHTRA, 400053",
    "Validity": "Mar 23, 2022 - Perpetual"
  },
  {
    "Name": "SHASHI KUMAR SINGH",
    "Registration No": "INA200012009",
    "E-mail": "shashiksingh@yahoo.com",
    "Address": "Hiranandani Upscale, Seawood, B-304, 5/63, OMR, CHENNAI, TAMIL NADU, 603103",
    "Contact Person": "SHASHI SINGH",
    "Correspondence Address": "Hiranandani Upscale, Seawood, B-304, 5/63, OMR, CHENNAI, TAMIL NADU, 603103",
    "Validity": "Nov 12, 2018 - Perpetual"
  },
  {
    "Name": "Shefali Garg",
    "Registration No": "INA000018355",
    "E-mail": "shefaligarg29@gmail.com",
    "Telephone": "917898371667",
    "Address": "House No. 464, First Floor,, Sector 45, GURGAON, HARYANA, 122003",
    "Contact Person": "Shefali  Garg",
    "Correspondence Address": "House No. 464, First Floor, Sector 45, GURGAON, HARYANA, 122003",
    "Validity": "Aug 10, 2023 - Perpetual"
  },
  {
    "Name": "SHEIKH AZHAR UDDIN PROPRIETOR of IDEAL STOCK INVESTMENT ADVISOR",
    "Registration No": "INA000008747",
    "E-mail": "sheikh.azharuddin60@gmail.com",
    "Address": "Ground Floor Plot No 204, Swami Dayanand Nagar Manik Bagh Road, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "SHEIKH AZHAR SHEIKH",
    "Correspondence Address": "205, SWAMI DAYANAND NAGAR, MANIK BAGH ROAD, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Oct 31, 2017 - Perpetual"
  },
  {
    "Name": "Sheikh Imran Uz Zaman",
    "Registration No": "INA100011775",
    "Validity": "Oct 03, 2018 - Perpetual"
  },
  {
    "Name": "SHEPHERD'S HILL CAPITAL ADVISORS",
    "Registration No": "INA000001035",
    "E-mail": "rgupta@shepherdshill.in",
    "Telephone": "9665046983",
    "Fax No": "9665046983",
    "Address": "1, GOLDFIELD PLAZA,, SASSOON ROAD,, PUNE, MAHARASHTRA, 411001",
    "Contact Person": "MR. RISHI GUPTA",
    "Correspondence Address": "10, Aundh Road, Kirkee, PUNE, MAHARASHTRA, 411003",
    "Validity": "Feb 07, 2014 - Perpetual"
  },
  {
    "Name": "Shibu Kunjappy",
    "Registration No": "INA000013466",
    "E-mail": "hib31@hotmail.com",
    "Address": "LILY - 412, A - BLOCK, TALPURI INTERNATIONAL COLONY, BHILAI, CHHATTISGARH, 490006",
    "Contact Person": "Shibu Kunjappy",
    "Correspondence Address": "LILY - 412, A - BLOCK, TALPURI INTERNATIONAL COLONY, BHILAI, CHHATTISGARH, 490006",
    "Validity": "Jun 11, 2019 - Perpetual"
  },
  {
    "Name": "Shilpi Maheshwari",
    "Registration No": "INA000019682",
    "E-mail": "cashilpi91@gmail.com",
    "Telephone": "919672372998",
    "Address": "Flat No. C/1101, Vill. Vesu, Rajhans Cremona, Surat, SURAT, GUJARAT, 395007",
    "Contact Person": "Shilpi Maheshwari",
    "Correspondence Address": "Flat No. C/1101, Vill. Vesu, Rajhans Cremona, Surat, SURAT, GUJARAT, 395007",
    "Validity": "Nov 12, 2024 - Perpetual"
  },
  {
    "Name": "Shishir Agarwal",
    "Registration No": "INA000020703",
    "E-mail": "shishir75@yahoo.com",
    "Telephone": "00919967556892",
    "Fax No": "00919967556892",
    "Address": "1702,17F, Hiranandani Parks, Chatsworth II, Senthamangalam, Village Kanchipura, Chennai, Tamil Nadu, CHENNAI, TAMIL NADU, 600002",
    "Contact Person": "Shishir Agarwal",
    "Correspondence Address": "1702,17F, Hiranandani Parks, Chatsworth II, Senthamangalam, Village Kanchipura, Chennai, Tamil Nadu, CHENNAI, TAMIL NADU, 600002",
    "Validity": "Jul 23, 2025 - Perpetual"
  },
  {
    "Name": "Shivam Kumar Aggarwal Proprietor ASKCA Investment Advisors",
    "Registration No": "INA000020916",
    "E-mail": "cashivam1799@gmail.com",
    "Telephone": "00918130414919",
    "Fax No": "00918130414919",
    "Address": "W-101,Homes 121, Sector 121,, NOIDA, UTTAR PRADESH, 201301",
    "Contact Person": "SHIVAM AGGARWAL",
    "Correspondence Address": "W-101,Homes 121, Sector 121, NOIDA, UTTAR PRADESH, 201301",
    "Validity": "Aug 11, 2025 - Perpetual"
  },
  {
    "Name": "SHIVANGI CHANDEL",
    "Registration No": "INA000010104",
    "E-mail": "shivangi.chandel12@gmail.com",
    "Address": "28 sarthak nagar, c sector, UJJAIN, MADHYA PRADESH, 456010",
    "Contact Person": "SHIVANGI  CHANDEL",
    "Correspondence Address": "28 sarthak nagar, c sector, UJJAIN, MADHYA PRADESH, 456010",
    "Validity": "Mar 20, 2018 - Perpetual"
  },
  {
    "Name": "SHIVANSU JAISWAL PROPRIETOR of INVESTMENT MULTIPLIER FINANCIAL SERVICES",
    "Registration No": "INA000009427",
    "E-mail": "shivansu.jaiswal001@gmail.com",
    "Address": "301-A, 3RD FLOOR NEW-18 OLD-16,, KANCHAN SAGAR BHAWAN OLD PALASIA, INDORE, MADHYA PRADESH, 452016",
    "Contact Person": "SHIVANSU JAISWAL",
    "Correspondence Address": "301-A, 3RD FLOOR NEW-18 OLD-16, KANCHAN SAGAR BHAWAN OLD PALASIA, INDORE, MADHYA PRADESH, 452016",
    "Validity": "Dec 29, 2017 - Perpetual"
  },
  {
    "Name": "Shobhit Khare",
    "Registration No": "INA000007313",
    "E-mail": "khare.shobhit@gmail.com",
    "Address": "Flat Number 704A, Cosmic Heights, Bhakti Park, Near Imax, Wadala (East), MUMBAI, MAHARASHTRA, 400037",
    "Contact Person": "Shobhit Khare",
    "Correspondence Address": "Office No 11, Third Floor, Royal Tower, Sainik Nagar, Viman Nagar Roa, PUNE, MAHARASHTRA, 411014",
    "Validity": "Mar 20, 2017 - Perpetual"
  },
  {
    "Name": "Shomesh Kumar",
    "Registration No": "INA200015088",
    "E-mail": "shomeshk@gmail.com",
    "Address": "501, Srivastsa, Plot 66/67, Methodist Colony, Begumpet, HYDERABAD, TELANGANA, 500016",
    "Contact Person": "SHOMESH KUMAR",
    "Correspondence Address": "501, Srivastsa, Plot 66/67, Methodist Colony, Begumpet, HYDERABAD, TELANGANA, 500016",
    "Validity": "Sep 04, 2020 - Perpetual"
  },
  {
    "Name": "SHOMITA SAHA",
    "Registration No": "INA000017994",
    "E-mail": "shomita138@gmail.com",
    "Telephone": "919836518404",
    "Address": "Tower 4, 16E, South city Residences, 375,Prince Anwar Shah Road, PO Jodhpur Park, KOLKATA, WEST BENGAL, 700068",
    "Contact Person": "SHOMITA   SAHA",
    "Correspondence Address": "Tower 4, 16E, South city Residences, 375,Prince Anwar Shah Road, PO Jodhpur Park, KOLKATA, WEST BENGAL, 700068",
    "Validity": "May 26, 2023 - Perpetual"
  },
  {
    "Name": "Shree Sidvin Investment Advisors Pvt Ltd",
    "Registration No": "INA200012425",
    "E-mail": "shreesidvinia@gmail.com",
    "Telephone": "00919972524166",
    "Fax No": "00919972524166",
    "Address": "55/7 1st Floor S V Complex, K R Road Basavanagudi, BANGALORE, KARNATAKA, 560004",
    "Contact Person": "Balagovindan Srinivasan",
    "Correspondence Address": "55/7 1st Floor S V Complex, K R Road Basavanagudi, BANGALORE, KARNATAKA, 560004",
    "Validity": "Feb 01, 2019 - Perpetual"
  },
  {
    "Name": "SHREEM DATATECH SOLUTIONS PRIVATE LIMITED",
    "Registration No": "INA200014247",
    "E-mail": "kk@mymoneysage.in",
    "Telephone": "00919844090646",
    "Fax No": "00919844090646",
    "Address": "No 800 7th Cross 1st A Main Road, BSK 3rd Stage, 3rd Phase, 3rd Block, BANGALORE, KARNATAKA, 560085",
    "Contact Person": "Kishor KUMAR",
    "Correspondence Address": "7 Sree Devi Complex Spacio workspace Cabin 3 3rd Floor, NAT Street Basavanagudi Bengaluru, BANGALORE, KARNATAKA, 560004",
    "Validity": "Dec 04, 2019 - Perpetual"
  },
  {
    "Name": "SHRI AKHILESH CHAWDA PROPRIETOR M/S CAPITAL COW RESEARCH",
    "Registration No": "INA000001126",
    "E-mail": "akhilesh.chawda@gmail.com",
    "Telephone": "07316007000",
    "Fax No": "07316007000",
    "Address": "411 SHAGUN TOWER, VIJAY NAGAR, INDORE, MADHYA PRADESH, 452010",
    "Contact Person": "SHRI AKHILESH CHAWDA",
    "Correspondence Address": "GF 31, 2nd Floor, Above Allahabad Bank, Opposite Sayaji Hotel, Vijay Nagar, INDORE, MADHYA PRADESH, 452010",
    "Validity": "Feb 17, 2014 - Perpetual"
  },
  {
    "Name": "SHRI RAJU R J",
    "Registration No": "INA200004482",
    "E-mail": "investwithraju@gmail.com",
    "Address": "NO.698 FIRST FLOOR, 4TH MAIN, 22ND CROSS, VIDYARANYAPURAM, MYSORE, KARNATAKA, 570008",
    "Correspondence Address": "NO.698 FIRST FLOOR, 4TH MAIN, 22ND CROSS, VIDYARANYAPURAM, MYSORE, KARNATAKA, 570008",
    "Validity": "Apr 04, 2016 - Perpetual"
  },
  {
    "Name": "SHRI. AMIT BHADANG",
    "Registration No": "INA000000854",
    "E-mail": "amitbhadang2000@yahoo.co.in",
    "Telephone": "9821479745",
    "Fax No": "9821479745",
    "Address": "301, BUILDING ? 3B, SIDDHACHAL COMPLEX, PHASE-6, VASANT VIHAR,, THANE WEST,, MUMBAI, MAHARASHTRA, 400610",
    "Contact Person": "SHRI. AMIT BHADANG",
    "Correspondence Address": "301, Building  3B, Siddhachal Complex, Phase-6, Vasant Vihar, Thane West, MAHARASHTRA, 400610",
    "Validity": "Jan 13, 2014 - Perpetual"
  },
  {
    "Name": "Shruti Agrawal Proprietor of CAGRWEALTH",
    "Registration No": "INA100016406",
    "E-mail": "shrutiagrawal761@gmail.com",
    "Telephone": "919867095324",
    "Address": "Office No A 1903 Lodha Altia T8 Wadala Truck Terminal, Road New Cuffe Parade Mumbai, MUMBAI, MAHARASHTRA, 400037",
    "Contact Person": "Shruti Agrawal",
    "Correspondence Address": "Office No A 1903 Lodha Altia T8 Wadala Truck Terminal, Road New Cuffe Parade Mumbai, MUMBAI, MAHARASHTRA, 400037",
    "Validity": "Nov 24, 2021 - Perpetual"
  },
  {
    "Name": "Shruti Subhashchander Bhatia",
    "Registration No": "INA000018939",
    "E-mail": "shruti_bhatia@yahoo.com",
    "Telephone": "919575800154",
    "Fax No": "919575800154",
    "Address": "A-706, Icon Apartments,, Sector Chi 3, Greater Noida,, NOIDA, UTTAR PRADESH, 201308",
    "Contact Person": "Shruti Bhatia",
    "Correspondence Address": "A-706, Icon Apartments, Sector Chi 3, Greater Noida, NOIDA, UTTAR PRADESH, 201308",
    "Validity": "Mar 04, 2024 - Perpetual"
  },
  {
    "Name": "SHWETANK DEV",
    "Registration No": "INA000021571",
    "E-mail": "dev.shwetank@gmail.com",
    "Telephone": "00919930059067",
    "Fax No": "00919930059067",
    "Address": "E-504, Nagarjuna Apts, Mayur Vihar Ph 1, Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110096",
    "Contact Person": "SHWETANK DEV",
    "Correspondence Address": "A5/101, World Spa Ease, Sector 30, Gurugram, Haryana, GURUGRAM, HARYANA, 122001",
    "Validity": "Dec 17, 2025 - Perpetual"
  },
  {
    "Name": "SHYAM ADVISORY LIMITED",
    "Registration No": "INA000002322",
    "E-mail": "info@shyamadvisory.com",
    "Telephone": "2816686666",
    "Fax No": "2816686666",
    "Address": "4TH FLOOR, SHYAM HOUSE, NR. AMBIKA PARK SOCIETY, HANUMAN MADHI CHOWK, RAIYA ROAD, RAJKOT, GUJARAT, 360001",
    "Contact Person": "VIPUL KOTAK OR CHETAN KOTAK OR VISHAL KOTAK",
    "Correspondence Address": "4TH FLOOR, SHYAM HOUSE, NR. AMBIKA PARK SOCIETY, HANUMAN MADHI CHOWK, RAIYA ROAD, RAJKOT, GUJARAT, 360001",
    "Validity": "Oct 22, 2014 - Perpetual"
  },
  {
    "Name": "Sicomoro Advisors Private Limited",
    "Registration No": "INA000009834",
    "E-mail": "amit.khandelwal@sicomoro.in",
    "Telephone": "912249636131",
    "Fax No": "912249636131",
    "Address": "102, first floor, Pharma Search House,, B.G. Kher Marg, Worli, MUMBAI, MAHARASHTRA, 400018",
    "Contact Person": "Amit Khandelwal",
    "Correspondence Address": "102, first floor, Pharma Search House, B.G. Kher Marg, Worli, MUMBAI, MAHARASHTRA, 400018",
    "Validity": "Feb 15, 2018 - Perpetual"
  },
  {
    "Name": "SIGFYN INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000017833",
    "E-mail": "varsha.halwai@sigfyn.com",
    "Telephone": "000000000000",
    "Fax No": "000000000000",
    "Address": "WeWork Latitude RMZ Latitude, Commercial Bellary Road Hebbal Bangalore, BANGALORE, KARNATAKA, 560024",
    "Contact Person": "Varsha Halwai",
    "Correspondence Address": "WeWork Latitude RMZ Latitude Commercial, Bellary Road Hebbal Bangalore, BANGALORE, KARNATAKA, 560024",
    "Validity": "Apr 20, 2023 - Perpetual"
  },
  {
    "Name": "SINCERE SYNDICATION AND CORPORATE SERVICES LLP",
    "Registration No": "INA000017453",
    "E-mail": "siva@sinceresyndication.com",
    "Telephone": "0919884058398",
    "Fax No": "0919884058398",
    "Address": "Adwave Towers, 3rd Floor, Block A, No. 9, South Boag Rd, T Nagar, CHENNAI, TAMIL NADU, 600017",
    "Contact Person": "Sivaramakrishnan Raghavan",
    "Correspondence Address": "Adwave Towers, 3rd Floor, Block A, No. 9, South Boag Rd, T Nagar, CHENNAI, TAMIL NADU, 600017",
    "Validity": "Dec 13, 2022 - Perpetual"
  },
  {
    "Name": "SINHASI CONSULTANTS PVT LTD",
    "Registration No": "INA200004177",
    "E-mail": "mimi@sinhasi.com",
    "Telephone": "080 41281383",
    "Fax No": "080 41281383",
    "Address": "SRINIVASAM NO.20 9TH CROSS, 6TH MAIN  MALLESHWARAM, BANGALORE, KARNATAKA, 560003",
    "Contact Person": "MS MIMI PARTHA SARATHY",
    "Correspondence Address": "SRINIVASAM NO.20 9TH CROSS, 6TH MAIN  MALLESHWARAM, BANGALORE, KARNATAKA, 560003",
    "Validity": "Feb 12, 2016 - Perpetual"
  },
  {
    "Name": "Sivamurugan Sankaralingam Proprietor Maxima Wealth Advisors",
    "Registration No": "INA000018212",
    "E-mail": "maximawealthadvisors@gmail.com",
    "Telephone": "917200254956",
    "Address": "1st Floor, No.6 -3, New 162, Balasundaram Street, , Kamadhenu Nagar, Avarampalayam, COIMBATORE, TAMIL NADU, 641006",
    "Contact Person": "Sivamurugan  Sankaralingam",
    "Correspondence Address": "1st Floor, No.6 -3, New 162, Balasundaram Street, , Kamadhenu Nagar, Avarampalayam, COIMBATORE, TAMIL NADU, 641006",
    "Validity": "Jul 14, 2023 - Perpetual"
  },
  {
    "Name": "Sixth Element Capital",
    "Registration No": "INA000016621",
    "E-mail": "sureshsharma27@gmail.com",
    "Address": "D202, Sai Sthan, Plot no. 4,5,6, Sector 29, Nerul East,, NAVI MUMBAI, MAHARASHTRA, 400706",
    "Contact Person": "Suresh Sharma",
    "Correspondence Address": "Office No. 305, 3rd Floor, The Corporate Park, Sector 18, Vashi, MUMBAI, MAHARASHTRA, 400703",
    "Validity": "Jan 31, 2022 - Perpetual"
  },
  {
    "Name": "SKYRIDGE WEALTH MANAGEMENT PRIVATE LIMITED",
    "Registration No": "INA000018586",
    "E-mail": "skyrwmpl@gmail.com",
    "Telephone": "00918928404251",
    "Fax No": "00918928404251",
    "Address": "805, Plot 5, B-Jeevan Vihar,, Manav Mandir Road, Malabar Hill, MUMBAI, MAHARASHTRA, 400006",
    "Contact Person": "Abhishek Maheshwari",
    "Correspondence Address": "805, Plot 5, B-Jeevan Vihar, Manav Mandir Road, Malabar Hill, MUMBAI, MAHARASHTRA, 400006",
    "Validity": "Nov 15, 2023 - Perpetual"
  },
  {
    "Name": "Smart Sync Services",
    "Registration No": "INA000007881",
    "E-mail": "SMARTSYNCSERVICES@GMAIL.COM",
    "Address": "A-404, Titanium Heights, Near Vodafone House, Makarba., Corporate Road, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "ANKIT KANODIA",
    "Correspondence Address": "A-404, Titanium Heights, Near Vodafone House, Makarba., Corporate Road, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Jun 20, 2017 - Perpetual"
  },
  {
    "Name": "SNOWBALL CAPITAL INVESTMENT ADVISORS LLP",
    "Registration No": "INA200002544",
    "E-mail": "shalabh.agarwal@snowballcapital.in",
    "Telephone": "04027277873",
    "Fax No": "04027277873",
    "Address": "Flat 1305, Block 20, My Home Vihanga, Gachibowli, HYDERABAD, TELANGANA, 500032",
    "Contact Person": "MR.SHALABH AGARWAL",
    "Correspondence Address": "Flat no.309, Block-5, Mansarovar Heaights-3, Manovikas Nagar, Hasmatpet, 500009",
    "Validity": "Jan 06, 2015 - Perpetual"
  },
  {
    "Name": "SNR INVESTMENT ADVISERS PRIVATE LIMITED",
    "Registration No": "INA100016947",
    "E-mail": "ops@alphasnr.com",
    "Telephone": "910119868333294",
    "Fax No": "910119868333294",
    "Address": "DGL-220, FRONT PORTION, 2ND FLOOR, DLF GALLERIA, MAYUR VIHAR PHASE -1, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110091",
    "Contact Person": "JITENDER KUMAR",
    "Correspondence Address": "A-15, Second floor, Hauz Khas, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110016",
    "Validity": "Jun 03, 2022 - Perpetual"
  },
  {
    "Name": "Solomon Henry Pinto",
    "Registration No": "INA000010016",
    "E-mail": "solomon.pinto@gmail.com",
    "Address": "B-1/002, Ground Floor, Lok Bharati CHS, Marol Maroshi Road, Marol, Andheri East, MUMBAI, MAHARASHTRA, 400059",
    "Contact Person": "Solomon Pinto",
    "Correspondence Address": "B-1/002, Ground Floor, Lok Bharati CHS, Marol Maroshi Road, Marol, Andheri East, MUMBAI, MAHARASHTRA, 400059",
    "Validity": "Mar 09, 2018 - Perpetual"
  },
  {
    "Name": "SOMRAJ DUTTA",
    "Registration No": "INA300016695",
    "E-mail": "SDSOMRAJ25@GMAIL.COM",
    "Telephone": "913324050501",
    "Fax No": "913324050501",
    "Address": "113A/3 SARAT GHOSH GARDEN ROAD, OPPOSITE DELHI PUBLIC SCHOOL KASBA, KOLKATA, WEST BENGAL, 700031",
    "Contact Person": "SOMRAJ DUTTA",
    "Correspondence Address": "115/T SARAT GHOSH GARDEN ROAD, SHRISHTI APARTMENTS, KOLKATA, WEST BENGAL, 700031",
    "Validity": "Feb 18, 2022 - Perpetual"
  },
  {
    "Name": "SOURABH GHOSH",
    "Registration No": "INA000018674",
    "E-mail": "SBHGHOSH@GMAIL.COM",
    "Telephone": "919874066699",
    "Address": "AKASHLEENA, FLAT 4A, 83 PURBACHAL ROAD , NORTH, HALTU, KOLKATA, WEST BENGAL, 700078",
    "Contact Person": "Sourabh Ghosh",
    "Correspondence Address": "AKASHLEENA, FLAT 4A, 83 PURBACHAL ROAD , NORTH, HALTU, KOLKATA, WEST BENGAL, 700078",
    "Validity": "Dec 13, 2023 - Perpetual"
  },
  {
    "Name": "SPARK PWM PRIVATE LIMITED",
    "Registration No": "INA000021067",
    "E-mail": "saurav.l@sparkcapital.in",
    "Telephone": "00919819146237",
    "Fax No": "00919819146237",
    "Address": "No.1,3rd Floor, First Crescent Park Road, Gandhi Nagar, Adyar, Chennai, CHENNAI, TAMIL NADU, 600020",
    "Contact Person": "Saurav Lugria",
    "Correspondence Address": "No. 1252, 5th Floor,Building No. 12, Solitaire Corporate Park, Andheri Kurla Road, Chakala, Andheri East, Mumbai, MUMBAI, MAHARASHTRA, 400093",
    "Validity": "Sep 25, 2025 - Perpetual"
  },
  {
    "Name": "SPT INVESTMENT ADVISORY SERVICES PVT. LTD.",
    "Registration No": "INA000000326",
    "E-mail": "compliance@sptulsian.com",
    "Telephone": "912244442701",
    "Fax No": "912244442701",
    "Address": "A-504, A Wing, Kohinoor Square,, NC Kelkar Road, Dadar West, MUMBAI, MAHARASHTRA, 400028",
    "Contact Person": "Vinod Ameria",
    "Correspondence Address": "A-504, A Wing, Kohinoor Square, NC Kelkar Road, Dadar West, MUMBAI, MAHARASHTRA, 400028",
    "Validity": "Nov 25, 2013 - Perpetual"
  },
  {
    "Name": "SR ALPHA INVESTMENT ADVISERS",
    "Registration No": "INA000020758",
    "E-mail": "sralphainvestmentadvisers@gmail.com",
    "Telephone": "00009579001565",
    "Fax No": "00009579001565",
    "Address": "39/363, 2nd Floor, Shop 3, , Shreeji Complex, Gondiya, NAGPUR, MAHARASHTRA, 441601",
    "Contact Person": "SUYASH SINGHANIYA",
    "Correspondence Address": "39/363, 2nd Floor, Shop 3, , Shreeji Complex, Gondiya, NAGPUR, MAHARASHTRA, 441601",
    "Validity": "Aug 01, 2025 - Perpetual"
  },
  {
    "Name": "SREEHARI G",
    "Registration No": "INA000018887",
    "E-mail": "sreeharigudi86@gmail.com",
    "Telephone": "00000864829345",
    "Fax No": "00000864829345",
    "Address": "2-49,  KARUMURU, GUNTUR, ANDHRA PRADESH, 522265",
    "Contact Person": "SREEHARI GUDI",
    "Correspondence Address": "2-49,  KARUMURU, GUNTUR, ANDHRA PRADESH, 522265",
    "Validity": "Feb 16, 2024 - Perpetual"
  },
  {
    "Name": "Sridhar Nagarajan",
    "Registration No": "INA000018027",
    "E-mail": "sridhar.naga@gmail.com",
    "Telephone": "919986541839",
    "Address": "Villa 100, Purva Sound of Water,, Chikkakammanahalli, Begur Hobli, Begur Koppa Road, Kammanahalli Village, BANGALORE, KARNATAKA, 560068",
    "Contact Person": "Sridhar Nagarajan",
    "Correspondence Address": "Villa 100, Purva Sound of Water, Chikkakammanahalli, Begur Hobli, Begur Koppa Road, Kammanahalli Village, BANGALORE, KARNATAKA, 560068",
    "Validity": "Jun 02, 2023 - Perpetual"
  },
  {
    "Name": "SRIKANTH UDAYAGIRI",
    "Registration No": "INA200007371",
    "E-mail": "srikanth.udayagiri89@gmail.com",
    "Address": "11-16-87, REPALLE, REPALLE, GUNTUR, ANDHRA PRADESH, 522265",
    "Contact Person": "SRIKANTH UDAYAGIRI",
    "Correspondence Address": "11-16-87, REPALLE, REPALLE, GUNTUR, ANDHRA PRADESH, 522265",
    "Validity": "Mar 28, 2017 - Perpetual"
  },
  {
    "Name": "SRINIVASAN SUBRAMANIAN",
    "Registration No": "INA200007177",
    "E-mail": "srinisubs968@gmail.com",
    "Address": "A2- 304, AWHO Sandeep Vihar, Seegehalli, Whitefield, Bangalore-560067, BANGALORE, KARNATAKA, 560067",
    "Contact Person": "SRINIVASAN SUBRAMANIAN",
    "Correspondence Address": "A2- 304, AWHO Sandeep Vihar, Seegehalli, Whitefield, Bangalore-560067, BANGALORE, KARNATAKA, 560067",
    "Validity": "Feb 28, 2017 - Perpetual"
  },
  {
    "Name": "SriNivesh Advisors",
    "Registration No": "INA200013132",
    "E-mail": "srinivesh.advisors@gmail.com",
    "Address": "319, 18 G Main, 6 Block, Koramangala, BANGALORE, KARNATAKA, 560095",
    "Contact Person": "S R Srinivasan",
    "Correspondence Address": "319, 18 G Main, 6 Block, Koramangala, BANGALORE, KARNATAKA, 560095",
    "Validity": "Apr 30, 2019 - Perpetual"
  },
  {
    "Name": "Sriram Jayaraman",
    "Registration No": "INA200011976",
    "E-mail": "jayaram.sriram@gmail.com",
    "Address": "B207, Chartered Madhura Apts, Uttarahalli Main road, Uttarahalli, BANGALORE, KARNATAKA, 560061",
    "Contact Person": "Sriram Jayaraman",
    "Correspondence Address": "B207, Chartered Madhura Apts, Uttarahalli Main road, Uttarahalli, BANGALORE, KARNATAKA, 560061",
    "Validity": "Nov 05, 2018 - Perpetual"
  },
  {
    "Name": "SRIRAM R",
    "Registration No": "INA000017976",
    "E-mail": "sriram0508@gmail.com",
    "Telephone": "919699085560",
    "Address": "8/75 Sravishta, VK Road,, RA Puram, Chennai 600028, CHENNAI, TAMIL NADU, 600028",
    "Contact Person": "Sriram Rajaram",
    "Correspondence Address": "No 10, Ganesh Ram Apartments, Flat 2D, Srnivasa Avenue Road, RA Puram, Chennai 600028, CHENNAI, TAMIL NADU, 600028",
    "Validity": "May 26, 2023 - Perpetual"
  },
  {
    "Name": "SSBA INNOVATIONS LIMITED",
    "Registration No": "INA000012166",
    "E-mail": "atul@ssbainnovations.com",
    "Address": "1309, Lodha Supremus,saki vihar road,, opp. MTNL Office,Powai, Mumbai-400072, MUMBAI, MAHARASHTRA, 400072",
    "Contact Person": "ATUL REGE",
    "Correspondence Address": "1309, Lodha Supremus,saki vihar road, opp. MTNL Office,Powai, Mumbai-400072, MUMBAI, MAHARASHTRA, 400072",
    "Validity": "Dec 12, 2018 - Perpetual"
  },
  {
    "Name": "Stackfin Technology Private Limited",
    "Registration No": "INA000021313",
    "E-mail": "niranjan.goyal@stackwealth.in",
    "Telephone": "00919886969451",
    "Fax No": "00919886969451",
    "Address": "12084-T12, Prestige Ferns Residency, Harlur Main Rd,, Eastwood Township, Bangalore,, BANGALORE, KARNATAKA, 560103",
    "Contact Person": "Niranjan Goyal",
    "Correspondence Address": "72, Saubhagya Nagar, Near Somnath Temple, Bedwas, Rakampura Road, Udaipur, UDAIPUR, RAJASTHAN, 313024",
    "Validity": "Nov 04, 2025 - Perpetual"
  },
  {
    "Name": "Standard Chartered Securities India Limited",
    "Registration No": "INA000014580",
    "E-mail": "julie.badani@sc.com",
    "Address": "2nd Floor, 23-25 M. G. Road, Fort, MUMBAI, MAHARASHTRA, 400001",
    "Contact Person": "Julie  Badani",
    "Correspondence Address": "2nd Floor, 23-25 M. G. Road, Fort, MUMBAI, MAHARASHTRA, 400001",
    "Validity": "Mar 17, 2020 - Perpetual"
  },
  {
    "Name": "Starseed Investments Private Limited",
    "Registration No": "INA000018771",
    "E-mail": "rvajpeyi@starseedinvest.com",
    "Telephone": "91009810109297",
    "Fax No": "91009810109297",
    "Address": "CB-13A, G/F, Shalimar Bagh,, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110088",
    "Contact Person": "Rohit  Vajpeyi",
    "Correspondence Address": "BF-39, Aditya City Centre, Indirapuram, GHAZIABAD, UTTAR PRADESH, 201014",
    "Validity": "Jan 17, 2024 - Perpetual"
  },
  {
    "Name": "STEP AHEAD INVESTMENT ADVISORS PVT. LTD.",
    "Registration No": "INA300002857",
    "E-mail": "subhabratag@stepaheadia.com",
    "Telephone": "9831016350",
    "Fax No": "9831016350",
    "Address": "12A, N S Road, 5th Floor, Room No 13A/1,, Kolkata 700001, KOLKATA, WEST BENGAL, 700001",
    "Contact Person": "SUBHABRATA GHOSH",
    "Correspondence Address": "4 no. Government Place, Delta House Basement, KOLKATA, WEST BENGAL, 700001",
    "Validity": "Mar 26, 2015 - Perpetual"
  },
  {
    "Name": "STEVEN NELSON FERNANDES Proprietor of PROFICIENT FINANCIAL PLANNERS",
    "Registration No": "INA000001597",
    "E-mail": "stevenfernandes32@gmail.com",
    "Telephone": "009821465874",
    "Fax No": "009821465874",
    "Address": "620 OMEGA BUSINESS PARK ROAD NO 33, MIDC WAGLE INDUSTRIAL ESTATE THANE WEST, THANE, MAHARASHTRA, 400604",
    "Contact Person": "STEVEN NELSON FERNANDES Proprietor of PROFICIEN FINANCIAL PLANNERS",
    "Correspondence Address": "620 OMEGA BUSINESS PARK ROAD NO 33, MIDC WAGLE INDUSTRIAL ESTATE THANE WEST, THANE, MAHARASHTRA, 400604",
    "Validity": "Apr 17, 2014 - Perpetual"
  },
  {
    "Name": "STOIC ADVISORS LLP",
    "Registration No": "INA000018920",
    "E-mail": "compliance-ria@stoicinvesting.com",
    "Telephone": "91009953227679",
    "Fax No": "91009953227679",
    "Address": "House No 108, Sector-7A, FARIDABAD, HARYANA, 121006",
    "Contact Person": "Puneet  Khurana",
    "Correspondence Address": "House No 108, Sector-7A, FARIDABAD, HARYANA, 121006",
    "Validity": "Mar 01, 2024 - Perpetual"
  },
  {
    "Name": "SUBRAMANIAN VENKATARAMAN",
    "Registration No": "INA200012027",
    "E-mail": "venkataraman.subu@gmail.com",
    "Address": "F 1205 Brigade Metropolis, Garudacharpalaya, BANGALORE, KARNATAKA, 560048",
    "Contact Person": "SUBRAMANIAN VENKATARAMAN",
    "Correspondence Address": "F 1205 Brigade Metropolis, Garudacharpalaya, BANGALORE, KARNATAKA, 560048",
    "Validity": "Nov 15, 2018 - Perpetual"
  },
  {
    "Name": "SUCCINCT FINTECH SERVICES PRIVATE LIMITED",
    "Registration No": "INA200008705",
    "E-mail": "SOUBHAGYA.PATRA@SUCCINCTFINTECH.COM",
    "Address": "No. 4, RCC Chambers, 2nd Floor,, 30th Cross, 4th T Block Jayanagar, Bannerghatta Road Extension,, BANGALORE, KARNATAKA, 560041",
    "Contact Person": "SOUBHAGYA PATRA",
    "Correspondence Address": "No. 4, RCC Chambers, 2nd Floor, 30th Cross, 4th T Block Jayanagar, Bannerghatta Road Extension, BANGALORE, KARNATAKA, 560041",
    "Validity": "Oct 30, 2017 - Perpetual"
  },
  {
    "Name": "Suda Bhanu Prasad",
    "Registration No": "INA200009050",
    "E-mail": "bhanuprasadcfp@yahoo.in",
    "Address": "Gf1, Block 14, Ntr Apartments, Peddapuram, East Godavari, Andhra Pradesh 533437, KAKINADA, ANDHRA PRADESH, 533437",
    "Contact Person": "Bhanu  Suda",
    "Correspondence Address": "Gf1, Block 14, Ntr Apartments, Peddapuram, East Godavari, Andhra Pradesh 533437, KAKINADA, ANDHRA PRADESH, 533437",
    "Validity": "Nov 15, 2017 - Perpetual"
  },
  {
    "Name": "SUDHANSHU SHEKHAR PATEL",
    "Registration No": "INA000009719",
    "E-mail": "patel.sudhanshu@gmail.com",
    "Address": "341, Avinash Garden City, Baloda Bazar Road, Near DPS School, Semariya, RAIPUR, CHHATTISGARH, 493111",
    "Contact Person": "SUDHANSHU PATEL",
    "Correspondence Address": "341, Avinash Garden City, Baloda Bazar Road, Near DPS School, Semariya, RAIPUR, CHHATTISGARH, 493111",
    "Validity": "Feb 06, 2018 - Perpetual"
  },
  {
    "Name": "Sudheer M",
    "Registration No": "INA200010986",
    "E-mail": "sudheer@prasidhi.in",
    "Telephone": "919620177540",
    "Address": "620, Ground Floor, 16th B Main, 3rd Cross, 3rd Block, Koramangala, BANGALORE, KARNATAKA, 560034",
    "Contact Person": "Sudheer M",
    "Correspondence Address": "620, Ground Floor, 16th B Main, 3rd Cross, 3rd Block, Koramangala, BANGALORE, KARNATAKA, 560034",
    "Validity": "Jul 02, 2018 - Perpetual"
  },
  {
    "Name": "SUDHINDRA HOSKOTE KRISHNACHAR",
    "Registration No": "INA200005315",
    "E-mail": "Sudhindra.hk@gmail.com",
    "Telephone": "08026396184",
    "Fax No": "08026396184",
    "Address": "#1024, 15TH MAIN, BTM LAYOUT, , 1ST STAGE, BANGALORE, KARNATAKA, 560029",
    "Correspondence Address": "#1024, 15th Main, BTM Layout, , 1st Stage, BANGALORE, KARNATAKA, 560029",
    "Validity": "Aug 11, 2016 - Perpetual"
  },
  {
    "Name": "Sudip Dipten Putatunda",
    "Registration No": "INA000021359",
    "E-mail": "sudip@putatunda.com",
    "Telephone": "919820309303",
    "Address": "3, Ground Floor, UNMESH CHS, OLD PRABHADEVI ROAD, SHANTARAM SHIRDHANKAR ROAD, PRABHADEVI, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "Sudip  Putatunda",
    "Correspondence Address": "3, Ground Floor, UNMESH CHS, OLD PRABHADEVI ROAD, SHANTARAM SHIRDHANKAR ROAD, PRABHADEVI, MUMBAI, MAHARASHTRA, 400025",
    "Validity": "Nov 07, 2025 - Perpetual"
  },
  {
    "Name": "Suhas Suresh Shetiya",
    "Registration No": "INA200014982",
    "E-mail": "suhasshetiya@gmail.com",
    "Address": "805, Syndicate Bank Colony,, Nagarbavi road, Moodalpalya, BANGALORE, KARNATAKA, 560072",
    "Contact Person": "Suhas Shetiya",
    "Correspondence Address": "805, Syndicate Bank Colony, Nagarbavi road, Moodalpalya, BANGALORE, KARNATAKA, 560072",
    "Validity": "Aug 28, 2020 - Perpetual"
  },
  {
    "Name": "SUJAN SINGH",
    "Registration No": "INA000020864",
    "E-mail": "singh.sujan.ia@gmail.com",
    "Telephone": "00919650314914",
    "Fax No": "00919650314914",
    "Address": "E 264, GALI 8, EAST VINOD NAGAR,, CHILLA  SARODA KHADAR,, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110091",
    "Contact Person": "SUJAN  SINGH",
    "Correspondence Address": "E 264, GALI 8, EAST VINOD NAGAR, CHILLA  SARODA KHADAR, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110091",
    "Validity": "Aug 07, 2025 - Perpetual"
  },
  {
    "Name": "SUMAN SHANDIL",
    "Registration No": "INA100013205",
    "E-mail": "shandil910@gmail.com",
    "Address": "Flat No. 2301, Floor No. 23, Building Name Bhoomi Elite,, sector 28 Nerul, Navi Mumbai, NAVI MUMBAI, MAHARASHTRA, 400706",
    "Contact Person": "SUMAN SHANDIL",
    "Correspondence Address": "Flat No. 2301, Floor No. 23, Building Name Bhoomi Elite, sector 28 Nerul, Navi Mumbai, NAVI MUMBAI, MAHARASHTRA, 400706",
    "Validity": "May 07, 2019 - Perpetual"
  },
  {
    "Name": "SUMAN TIWARI",
    "Registration No": "INA300016871",
    "E-mail": "iift.suman@gmail.com",
    "Address": "Kalaberia, Sivtala RB Park, PO - Rajarhat Bishnupur, BARASAT, WEST BENGAL, 700135",
    "Contact Person": "Suman Tiwari",
    "Correspondence Address": "Kalaberia, Sivtala RB Park, PO - Rajarhat Bishnupur, BARASAT, WEST BENGAL, 700135",
    "Validity": "May 23, 2022 - Perpetual"
  },
  {
    "Name": "Sumit Kumar Singh",
    "Registration No": "INA100010004",
    "E-mail": "singhsumitkumar@gmail.com",
    "Address": "B 301, Prerana Apartment, Plot no 8, Sector 56, GURGAON, HARYANA, 122011",
    "Contact Person": "Sumit Singh",
    "Correspondence Address": "B 301, Prerana Apartment, Plot no 8, Sector 56, GURGAON, HARYANA, 122011",
    "Validity": "Mar 08, 2018 - Perpetual"
  },
  {
    "Name": "SUMIT KUMAR WAGHMARE",
    "Registration No": "INA200013099",
    "E-mail": "sumit.waghmare86@gmail.com",
    "Address": "CLASSIC ARENA 1549/2662 AECS LYT A BLOCK, NEAR HDFC BANK HOSUR ROAD SINGASANDRA VILLAGE, BANGALORE, KARNATAKA, 560068",
    "Contact Person": "SUMIT WAGHMARE",
    "Correspondence Address": "CLASSIC ARENA 1549/2662 AECS LYT A BLOCK, NEAR HDFC BANK HOSUR ROAD SINGASANDRA VILLAGE, BANGALORE, KARNATAKA, 560068",
    "Validity": "Apr 23, 2019 - Perpetual"
  },
  {
    "Name": "SUMMER HILL MANAGEMENT LLP",
    "Registration No": "INA000020013",
    "E-mail": "rajeev@kalra.in",
    "Telephone": "00919910198720",
    "Fax No": "00919910198720",
    "Address": "Level 7, The Capital, Plot No. C-70 G Block, Bandra Kurla Complex, Bandra East, Mumbai, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Rajeev Kalra",
    "Correspondence Address": "Level 7, The Capital, Plot No. C-70 G Block, Bandra Kurla Complex, Bandra East, Mumbai, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Mar 26, 2025 - Perpetual"
  },
  {
    "Name": "Sundeep B Parmar (Proprietor of Fortuplier Investment Advisors)",
    "Registration No": "INA000014845",
    "E-mail": "sbparmar1981@gmail.com",
    "Address": "C/o Sundeep Textiles 23 Navi Wadi , Dadi Seth Agiyari Lane Chira Bazar, MUMBAI, MAHARASHTRA, 400002",
    "Contact Person": "SUNDEEP  PARMAR",
    "Correspondence Address": "C/o Sundeep Textiles 23 Navi Wadi , Dadi Seth Agiyari Lane Chira Bazar, MUMBAI, MAHARASHTRA, 400002",
    "Validity": "Jul 21, 2020 - Perpetual"
  },
  {
    "Name": "SUPERMONEY ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000017408",
    "E-mail": "supermoneyadvisors@gmail.com",
    "Telephone": "9102286416672",
    "Fax No": "9102286416672",
    "Address": "Plot No. 15, Tirupati Nagar, Banswara (M),, Udaipur Road, Banswara,, UDAIPUR, RAJASTHAN, 327001",
    "Contact Person": "RAKESH BHUNATAR",
    "Correspondence Address": "Plot No. 15, Tirupati Nagar, Banswara (M), Udaipur Road, Banswara, UDAIPUR, RAJASTHAN, 327001",
    "Validity": "Dec 02, 2022 - Perpetual"
  },
  {
    "Name": "Suraj Ramakrishnan",
    "Registration No": "INA000016144",
    "E-mail": "surajr.316@gmail.com",
    "Address": "Office No. 7, Bhoomi Mall, Plot no 9, CBD Belapur, NAVI MUMBAI, MAHARASHTRA, 400614",
    "Contact Person": "Suraj Ramakrishnan",
    "Correspondence Address": "Office No. 7, Bhoomi Mall, Plot no 9, CBD Belapur, NAVI MUMBAI, MAHARASHTRA, 400614",
    "Validity": "Aug 25, 2021 - Perpetual"
  },
  {
    "Name": "SURENDRA JAUHARI",
    "Registration No": "INA000021474",
    "E-mail": "surendra.jauharii@gmail.com",
    "Telephone": "00919310177272",
    "Fax No": "00919310177272",
    "Address": "GF 32A, LOTUS PLAZA MARKET, INDIRAPURAM,, GHAZIABAD, UTTAR PRADESH, 201014",
    "Contact Person": "SURENDRA JAUHARI",
    "Correspondence Address": "GF 32A, LOTUS PLAZA MARKET, INDIRAPURAM, GHAZIABAD, UTTAR PRADESH, 201014",
    "Validity": "Dec 10, 2025 - Perpetual"
  },
  {
    "Name": "Sushilkumar D Pardeshi",
    "Registration No": "INA000020305",
    "E-mail": "pardeshi.sushil@gmail.com",
    "Telephone": "919902488299",
    "Address": "No 37 12th cross 4th main, wilson Garden south adugodi Bangalore, BANGALORE, KARNATAKA, 560030",
    "Contact Person": "Sushilkumar D Pardeshi",
    "Correspondence Address": "No 37 12th cross 4th main, wilson Garden south adugodi Bangalore, BANGALORE, KARNATAKA, 560030",
    "Validity": "Jun 04, 2025 - Perpetual"
  },
  {
    "Name": "Svobodha Infinity Investment Advisors Pvt. Ltd.",
    "Registration No": "INA200012601",
    "E-mail": "sankarsh@savart.in",
    "Address": "3-6-373, St. No. 2, Himayath Nagar, HYDERABAD, TELANGANA, 500029",
    "Contact Person": "Sankarsh Chanda",
    "Correspondence Address": "3-6-373, St. No. 2, Himayath Nagar, HYDERABAD, TELANGANA, 500029",
    "Validity": "Mar 06, 2019 - Perpetual"
  },
  {
    "Name": "SWAPNIL DHANANJAY KENDHE",
    "Registration No": "INA000008738",
    "E-mail": "swapnil.kendhe100@gmail.com",
    "Address": "PLOT NUMBER 8, OLD KAILAS NAGAR, POST AYODHYA NAGAR, NAGPUR, MAHARASHTRA, 440024",
    "Contact Person": "SWAPNIL KENDHE",
    "Correspondence Address": "PLOT NUMBER 8, OLD KAILAS NAGAR, POST AYODHYA NAGAR, NAGPUR, MAHARASHTRA, 440024",
    "Validity": "Oct 31, 2017 - Perpetual"
  },
  {
    "Name": "Swapnil Satish Nadkar",
    "Registration No": "INA000018595",
    "E-mail": "swapnil.nadkar@gmail.com",
    "Telephone": "918128994229",
    "Address": "702, Abhijyot Square, near SG Highway, Near Matrix tower,, behind Divya Bhaskar press, Makarba, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "Swapnil Nadkar",
    "Correspondence Address": "Flat no 901, One49 Apartments, Opp Aryan Opulence, behind Abhishree Corporate, Ambli-Bopal Road, Bopal, AHMEDABAD, GUJARAT, 380058",
    "Validity": "Nov 23, 2023 - Perpetual"
  },
  {
    "Name": "SWASTIKA INVESTMART LTD.",
    "Registration No": "INA000009843",
    "E-mail": "COMPLIANCE@SWASTIKA.CO.IN",
    "Telephone": "917310736644221",
    "Fax No": "917310736644221",
    "Address": "Office No. 104, 1st Floor, KESHAVA Commercial Building, Plot No.C 5, E Block, Bandra Kurla Complex, Opp GST Bhavan, Bandra East,, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "SUNIL NYATI",
    "Correspondence Address": "48, JAORA COMPOUND, MYH ROAD, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Feb 16, 2018 - Perpetual"
  },
  {
    "Name": "SWS FINANCIAL SOLUTIONS PRIVATE LIMITED",
    "Registration No": "INA000004914",
    "E-mail": "deepak@swsfspl.com",
    "Telephone": "2532579993",
    "Fax No": "2532579993",
    "Address": "MANDLIK PRIDE, 3RD FLOOR, NEAR JEHAN CIRCLE, GANGAPUR ROAD, NASHIK, MAHARASHTRA, 422013",
    "Correspondence Address": "3 & 4 KAMAL RESIDENCY, BEHIND PATIL LANE NO. 4, COLLEGE ROAD, MAHARASHTRA, 422005",
    "Validity": "Jun 08, 2016 - Perpetual"
  },
  {
    "Name": "Tamohara Investment Managers Private Limited",
    "Registration No": "INA000017842",
    "E-mail": "rajesh@tamohara.net",
    "Telephone": "0000000000",
    "Fax No": "0000000000",
    "Address": "1402, Peninsula Park, Off Veera Desai Road, Andheri West,, MUMBAI, MAHARASHTRA, 400053",
    "Contact Person": "Rajesh Kodnaney",
    "Correspondence Address": "1402, Peninsula Park, , Off Veera Desai Road, Andheri West, Mumbai, MUMBAI, MAHARASHTRA, 400053",
    "Correspondence E-mail": "rajesh@tamohara.net",
    "Correspondence Telephone": "0-0-00000000",
    "Correspondence Fax": "0-0-00000000",
    "Validity": "Apr 20, 2023 - Perpetual"
  },
  {
    "Name": "Taponeel Mukherjee",
    "Registration No": "INA100008203",
    "E-mail": "taponeel.mukherjee@development-tracks.com",
    "Address": "52/82 CHITRANJAN PARK, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110019",
    "Contact Person": "Taponeel Mukherjee",
    "Correspondence Address": "52/82 CHITRANJAN PARK, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110019",
    "Validity": "Aug 04, 2017 - Perpetual"
  },
  {
    "Name": "TARA CAPITAL PARTNERS INDIA PRIVATE LIMITED",
    "Registration No": "INA000012412",
    "E-mail": "compliance@taracapitalpartners.com",
    "Telephone": "9102249769456",
    "Fax No": "9102249769456",
    "Address": "1105, The Summit Business Park Premises Co Op Society Ltd,, Andheri Kurla Road, Andheri East, MUMBAI, MAHARASHTRA, 400093",
    "Contact Person": "ANAND  TAMHANE",
    "Correspondence Address": "1105, The Summit Business Park Premises Co Op Society Ltd, Andheri Kurla Road, Andheri East, MUMBAI, MAHARASHTRA, 400093",
    "Validity": "Jan 31, 2019 - Perpetual"
  },
  {
    "Name": "TARUN ROKADIYA",
    "Registration No": "INA000020882",
    "E-mail": "trokadiya@gmail.com",
    "Telephone": "00919925001701",
    "Fax No": "00919925001701",
    "Address": "301 Heritage Opus, Near Green Acres,Opp, Auda lake  Prahladnagar, Ahmedabad, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "TARUN ROKADIYA",
    "Correspondence Address": "301 Heritage Opus, Near Green Acres,Opp, Auda lake  Prahladnagar, Ahmedabad, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Aug 07, 2025 - Perpetual"
  },
  {
    "Name": "Tavaga Advisory Services Private Limited",
    "Registration No": "INA000013457",
    "E-mail": "nitin@tavaga.com",
    "Address": "1502, Lakefront Solitaire, A S Road, Near Heera Panna Mall, Powai, MUMBAI, MAHARASHTRA, 400076",
    "Contact Person": "Nitin Mathur",
    "Correspondence Address": "9th Floor, WeWork, G Block, Bandra Kurla Complex, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Jun 10, 2019 - Perpetual"
  },
  {
    "Name": "TAVASYA CAPITAL PRIVATE LIMITED",
    "Registration No": "INA200007690",
    "E-mail": "gautamkumar@ksk.co.in",
    "Address": "No. E-23, Rolling Hills, , Gachibowli, HYDERABAD, TELANGANA, 500032",
    "Contact Person": "GAUTAM KUMAR",
    "Correspondence Address": "1-62/K/84, Plot No. 84, Phase II, Kavuri Hills, Madhapur, HYDERABAD, TELANGANA, 500033",
    "Validity": "May 19, 2017 - Perpetual"
  },
  {
    "Name": "TBNG  CAPITAL ADVISORS PVT. LTD.",
    "Registration No": "INA000001837",
    "E-mail": "Compliance@tbng.co.in",
    "Telephone": "0918976769096",
    "Fax No": "0918976769096",
    "Address": "11th Floor, Unit No 1101, One Lodha Place, Senapati Bapat Marg, Opposite Lodha Supremius, Upper Worli, Lower Parel,, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "Sneha Nahar",
    "Correspondence Address": "17, Ground Floor, Veer Mahal CHS Ltd., Dr. B Ambedkar Road, Parel- Lalbaug, MUMBAI, MAHARASHTRA, 400012",
    "Validity": "Jun 09, 2014 - Perpetual"
  },
  {
    "Name": "Tej Kumar Jain",
    "Registration No": "INA000015482",
    "E-mail": "jaintk@rediffmail.com",
    "Address": "606, BHOOMI GOKUL, FILM CITY ROAD, BEHIND DINDOSHI DEPO, MALAD EAST MUMBAI, MUMBAI, MAHARASHTRA, 400097",
    "Contact Person": "TEJ JAIN",
    "Correspondence Address": "606, BHOOMI GOKUL, FILM CITY ROAD, BEHIND DINDOSHI DEPO, MALAD EAST MUMBAI, MUMBAI, MAHARASHTRA, 400097",
    "Validity": "Nov 20, 2020 - Perpetual"
  },
  {
    "Name": "TEJAS BIHARIBHAI MEHTA [PROPRIETOR OF TRUE FINANCIAL ENGINEERING]",
    "Registration No": "INA000005036",
    "E-mail": "tejas@tejas.ca",
    "Telephone": "9726210101",
    "Fax No": "9726210101",
    "Address": "A-64 SAMATVA BUNGLOWS, S.P. RING ROAD, NEAR CLUB O7, SHELA, AHMEDABAD, GUJARAT, 380058",
    "Correspondence Address": "A-64 Samatva Bunglows, S.P. Ring Road, Near Club O7, Shela, AHMEDABAD, GUJARAT, 380058",
    "Validity": "Jun 28, 2016 - Perpetual"
  },
  {
    "Name": "TEJASWI SANGA",
    "Registration No": "INA200015176",
    "E-mail": "tejaswisanga@hotmail.com",
    "Address": "1-4-75/201-b, habsiguda 8, sri sai landmark, jamai osmania, HYDERABAD, TELANGANA, 500007",
    "Contact Person": "TEJASWI SANGA",
    "Correspondence Address": "1-4-75/201-b, habsiguda 8, sri sai landmark, jamai osmania, HYDERABAD, TELANGANA, 500007",
    "Validity": "Sep 24, 2020 - Perpetual"
  },
  {
    "Name": "Tender Financial Services Private Limited",
    "Registration No": "INA000019734",
    "E-mail": "megha@thryve.finance",
    "Telephone": "917259524005",
    "Fax No": "917259524005",
    "Address": "1056, T.S.NO.10 600, Avinashi Road, Race Course, Coimbatore, Tamil Nadu, COIMBATORE, TAMIL NADU, 641018",
    "Contact Person": "Megha Jose",
    "Correspondence Address": "1056, T.S.NO.10 600, Avinashi Road, Race Course, Coimbatore, Tamil Nadu, COIMBATORE, TAMIL NADU, 641018",
    "Validity": "Dec 16, 2024 - Perpetual"
  },
  {
    "Name": "THAMARAPALLIL ABRAHAM JOSEPH",
    "Registration No": "INA000018115",
    "E-mail": "abyjoseph11@gmail.com",
    "Telephone": "919847050776",
    "Address": "THAMARAPALLIL OFFICE,WARD NO-9 /342,OLD  BOAT JETTY ROAD,, THIRUVANVANDOOR PANCHAYAT, KALLISSERY P O,, Kottayam, KERALA, 689124",
    "Contact Person": "ABRAHAM THAMARAPALLIL",
    "Correspondence Address": "FLAT NO C-2, 2ND FLOOR,MAYFAIR BUILDING, CHACKOLAS COLONY,THEVARA,KOCHI, KOCHI, KERALA, 682015",
    "Validity": "Jun 22, 2023 - Perpetual"
  },
  {
    "Name": "The Alchemists Ark Pvt. Ltd.",
    "Registration No": "INA000013323",
    "E-mail": "raymond.moses@moneyworks4me.com",
    "Address": "B-101,Signet Corner, Baner Road, Baner, PUNE, MAHARASHTRA, 411045",
    "Contact Person": "Raymond Nagawkar",
    "Correspondence Address": "B-101,Signet Corner, Baner Road, Baner, PUNE, MAHARASHTRA, 411045",
    "Validity": "May 16, 2019 - Perpetual"
  },
  {
    "Name": "Thinkfinny Tech Labs Pvt Ltd.",
    "Registration No": "INA000020873",
    "E-mail": "sachin@finny.club",
    "Telephone": "00919535111775",
    "Fax No": "00919535111775",
    "Address": "Flat No 17143, Prestige Lakeside, Habitat Apt, Gunjur, Varthu, Bangalore, Bangalore North, BANGALORE, KARNATAKA, 560087",
    "Contact Person": "Sachin Kamkar",
    "Correspondence Address": "Flat No 17143, Prestige Lakeside, Habitat Apt, Gunjur, Varthu, Bangalore, Bangalore North, BANGALORE, KARNATAKA, 560087",
    "Validity": "Aug 07, 2025 - Perpetual"
  },
  {
    "Name": "THORIA JIGNESH",
    "Registration No": "INA000019549",
    "E-mail": "cajigsthoria@gmail.com",
    "Telephone": "91009722840502",
    "Fax No": "91009722840502",
    "Address": "31, MUKTABA SOCIETY, NR NEW VEGETABLE MARKET,, DHOLKA, AHMEDABAD, AHMEDABAD, GUJARAT, 382225",
    "Contact Person": "JIGNESH THORIA",
    "Correspondence Address": "31, MUKTABA SOCIETY, NR NEW VEGETABLE MARKET, DHOLKA, AHMEDABAD, AHMEDABAD, GUJARAT, 382225",
    "Validity": "Sep 13, 2024 - Perpetual"
  },
  {
    "Name": "Titiksha Wealth Private Limited",
    "Registration No": "INA000019497",
    "Address": "2, Nehru Nagar society, Dumas Road, Surat, SURAT, GUJARAT, 395007",
    "Correspondence Address": "2, Nehru Nagar society, Dumas Road, Surat, SURAT, GUJARAT, 395007",
    "Validity": "Aug 12, 2024 - Perpetual"
  },
  {
    "Name": "Trade Nexa Research Investment Advisor",
    "Registration No": "INA000009083",
    "E-mail": "tradenexaresearch@gmail.com",
    "Address": "J Gopal, 1st floor, 352 PU4, Scheme No 54, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "Minakshi Asavani",
    "Correspondence Address": "J Gopal, 1st floor, 352 PU4, Scheme No 54, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Nov 20, 2017 - Perpetual"
  },
  {
    "Name": "Transactree Services Private Limited",
    "Registration No": "INA000018452",
    "Address": "SECOND FLOOR AND PORTION OF TERRACE OF 7A, RING ROAD, LAJPAT NAGAR-IV, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110024",
    "Correspondence Address": "SECOND FLOOR AND PORTION OF TERRACE OF 7A, RING ROAD, LAJPAT NAGAR-IV, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110024",
    "Validity": "Oct 03, 2023 - Perpetual"
  },
  {
    "Name": "Triquetra Wealth",
    "Registration No": "INA000015233",
    "E-mail": "Abhishek@triquetrawealth.com",
    "Telephone": "91009833710600",
    "Fax No": "91009833710600",
    "Address": "1A MEZ ZANINE FLOOR CALCOT HOUSE 8/10 TAMARIND LANE FORT, MUMBAI, MAHARASHTRA, 400001",
    "Contact Person": "Abhishek Mukim",
    "Correspondence Address": "1A MEZ ZANINE FLOOR CALCOT HOUSE 8/10 TAMARIND LANE FORT, MUMBAI, MAHARASHTRA, 400001",
    "Validity": "Aug 06, 2024 - Perpetual"
  },
  {
    "Name": "TRUEMIND INVESTMENT ADVISER PRIVATE LIMITED",
    "Registration No": "INA100017089",
    "E-mail": "connect@truemindcapital.com",
    "Telephone": "009999505324",
    "Fax No": "009999505324",
    "Address": "FLAT NO. 111-A, 2ND FLOOR EXTENDED PORTION, BLOCK C-8, KESHAVPURAM, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110035",
    "Contact Person": "SUMIT DUSEJA",
    "Correspondence Address": "FLAT NO. 111-A, 2ND FLOOR EXTENDED PORTION, BLOCK C-8, KESHAVPURAM, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110035",
    "Validity": "Jul 26, 2022 - Perpetual"
  },
  {
    "Name": "Trufid Advisors Private Limited",
    "Registration No": "INA000016889",
    "E-mail": "advisory@trufid.com",
    "Telephone": "910229820351090",
    "Fax No": "910229820351090",
    "Address": "Office no.409 4th Floor A wing ,Kanakia Wall Street Chakala, Andheri- Kurla Road,Andheri East, MUMBAI, MAHARASHTRA, 400093",
    "Contact Person": "Shreenivas Hegde",
    "Correspondence Address": "Office no.409 4th Floor A wing ,Kanakia Wall Street Chakala, Andheri- Kurla Road,Andheri East, MUMBAI, MAHARASHTRA, 400093",
    "Validity": "May 25, 2022 - Perpetual"
  },
  {
    "Name": "TRUPTI NILESH VEDAK",
    "Registration No": "INA000007252",
    "E-mail": "truptivedak24@gmail.com",
    "Telephone": "919004609641",
    "Address": "A-101, Amrut Dham CHS, Manisha Nagar, THANE, MAHARASHTRA, 400605",
    "Contact Person": "Trupti vedak",
    "Correspondence Address": "A-101, Amrut Dham CHS, Manisha Nagar, THANE, MAHARASHTRA, 400605",
    "Validity": "Mar 09, 2017 - Perpetual"
  },
  {
    "Name": "TRUSTPLUTUS FAMILY OFFICE & INVESTMENT ADVISERS (INDIA) PRIVATE LIMITED",
    "Registration No": "INA000000557",
    "E-mail": "compliance@trustplutus.com",
    "Telephone": "02240845000",
    "Fax No": "02240845000",
    "Address": "108, 1ST  FLOOR,  BALRAMA PREMISES,, BANDRA KURLA COMPLEX, BANDRA (E),, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "MR. KEYUR SHAH",
    "Correspondence Address": "1101, Naman Centre, G Block, C-31, Bandra-Kurla Complex, Bandra (E), MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Dec 18, 2013 - Perpetual"
  },
  {
    "Name": "Turiya Advisory Services LLP",
    "Registration No": "INA000018540",
    "E-mail": "Bijoy@turiyaadvisory.com",
    "Telephone": "0919820086355",
    "Fax No": "0919820086355",
    "Address": "Premise No 408 Plot No A 69 A 70 4th Floor, Oriana Business Park Wagle Estate Thane west, THANE, MAHARASHTRA, 400604",
    "Contact Person": "Bijoy  Daga",
    "Correspondence Address": "Premise No 408 Plot No A 69 A 70 4th Floor, Oriana Business Park Wagle Estate Thane west, THANE, MAHARASHTRA, 400604",
    "Validity": "Nov 13, 2023 - Perpetual"
  },
  {
    "Name": "Tushar Sharma",
    "Registration No": "INA000021377",
    "E-mail": "tspsharma@gmail.com",
    "Telephone": "00917508330001",
    "Fax No": "00917508330001",
    "Address": "2241, PHASE 10 Sector 64, Mohali (S.A.S. NAGAR), MOHALI, PUNJAB, 160062",
    "Contact Person": "Tushar Sharma",
    "Correspondence Address": "2241, PHASE 10 Sector 64, Mohali (S.A.S. NAGAR), MOHALI, PUNJAB, 160062",
    "Validity": "Nov 07, 2025 - Perpetual"
  },
  {
    "Name": "Tygo Investment Advisers LLP",
    "Registration No": "INA000019868",
    "E-mail": "dineshkumarm93@gmail.com",
    "Telephone": "00918015323699",
    "Fax No": "00918015323699",
    "Address": "34, 2nd street, Gopalapuram, CHENNAI, TAMIL NADU, 600086",
    "Contact Person": "DINESH KUMAR",
    "Correspondence Address": "34, 2nd street, Gopalapuram, CHENNAI, TAMIL NADU, 600086",
    "Validity": "Feb 03, 2025 - Perpetual"
  },
  {
    "Name": "U-Klickkit Enterprises Private Limited",
    "Registration No": "INA000019309",
    "E-mail": "rithwinsiva@gmail.com",
    "Telephone": "000009043645475",
    "Fax No": "000009043645475",
    "Address": "No195 Kutchery Road Mylapore, Chennai Tamil Nadu, CHENNAI, TAMIL NADU, 600004",
    "Contact Person": "Kanattummal  Rithwin Siva",
    "Correspondence Address": "No195 Kutchery Road Mylapore, Chennai Tamil Nadu, CHENNAI, TAMIL NADU, 600004",
    "Validity": "Jun 21, 2024 - Perpetual"
  },
  {
    "Name": "UFICS Investment Advisory LLP",
    "Registration No": "INA000017587",
    "E-mail": "rushabhshah87@gmail.com",
    "Address": "705 International Business Center, Nr. Sunshine Global Hospital,, Dumas Road,, SURAT, GUJARAT, 395007",
    "Contact Person": "Rushabh Shah",
    "Correspondence Address": "705 International Business Center, Nr. Sunshine Global Hospital, Dumas Road, SURAT, GUJARAT, 395007",
    "Validity": "Jan 12, 2023 - Perpetual"
  },
  {
    "Name": "Ujvin Nevatia Proprietor Nevat Investments",
    "Registration No": "INA000020217",
    "E-mail": "ujvinnevatia@gmail.com",
    "Telephone": "917307973993",
    "Address": "270, Phase 2, Street No 1 A 3, , Vishal Nagar, Bhatinda, BATHINDA, PUNJAB, 151001",
    "Contact Person": "Ujvin  Nevatia",
    "Correspondence Address": "270, Phase 2, Street No 1 A 3, , Vishal Nagar, Bhatinda, BATHINDA, PUNJAB, 151001",
    "Validity": "May 29, 2025 - Perpetual"
  },
  {
    "Name": "UMESH KUMAR PANDEY PROP. AUROSTAR INVESTMENT ADVISORY SERVICES",
    "Registration No": "INA000003296",
    "E-mail": "pandeyurewa@gmail.com",
    "Telephone": "073100000",
    "Fax No": "073100000",
    "Address": "5B/1 Colvin Road, Civil Line, ALLAHABAD, UTTAR PRADESH, 452001",
    "Contact Person": "UMESH KUMAR PANDEY",
    "Correspondence Address": "25/1, Macchi Bazar, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Jul 29, 2015 - Perpetual"
  },
  {
    "Name": "Uniapps Investment Adviser Private Limited",
    "Registration No": "INA000017639",
    "E-mail": "compliance@uniapps.club",
    "Telephone": "91009253083032",
    "Fax No": "91009253083032",
    "Address": "Ground floor, Unitech Commercial tower 2, Arya Samaj Road, Block B,, Greenwood City, unit 1,2,3, Sector 45, Gurugram, GURGAON, HARYANA, 122003",
    "Contact Person": "Sagar Wadhwa",
    "Correspondence Address": "Ground floor, Unitech Commercial tower 2, Arya Samaj Road, Block B, Greenwood City, unit 1,2,3, Sector 45, Gurugram, GURGAON, HARYANA, 122003",
    "Validity": "Jan 23, 2023 - Perpetual"
  },
  {
    "Name": "Unien Capital Advisors Private Limited",
    "Registration No": "INA200014548",
    "E-mail": "vishi@unien.in",
    "Telephone": "00009900512814",
    "Fax No": "00009900512814",
    "Address": "House No. 113, 7th B Cross,AECS Layout, 3rd stage,, Sanjay NagarR.M.V. Extension II Stage, Bangalore, Bangalore North, BANGALORE, KARNATAKA, 560094",
    "Contact Person": "B Viswanadha Raju",
    "Correspondence Address": "House No. 113, 7th B Cross,AECS Layout, 3rd stage, Sanjay NagarR.M.V. Extension II Stage, Bangalore, Bangalore North, BANGALORE, KARNATAKA, 560094",
    "Validity": "Dec 24, 2024 - Perpetual"
  },
  {
    "Name": "Uniorbit Wealth Management Private Limited",
    "Registration No": "INA000019798",
    "Validity": "Jan 07, 2025 - Perpetual"
  },
  {
    "Name": "UNIQUEST INVESTMENT ADVISER PRIVATE LIMITED",
    "Registration No": "INA000001001",
    "E-mail": "jagdeep.grewal@kunvarji.com",
    "Telephone": "7966147000",
    "Fax No": "7966147000",
    "Address": "BLOCK B, FIRST FLOOR, SIDDHI VINAYAK TOWERS, OFF S.G HIGHWAY ROAD, MOUJE MAKARBA, AHMEDABAD, GUJARAT, 380051",
    "Contact Person": "MR. JAGDEEP GREWAL",
    "Correspondence Address": "405, Silicon Tower, Opp. Axis Bank, Law Garden, AHMEDABAD, GUJARAT, 380006",
    "Correspondence E-mail": "jagdeep.grewal@kunvarji.com",
    "Correspondence Telephone": "--7966147000",
    "Correspondence Fax": "--7966147000",
    "Validity": "Feb 03, 2014 - Perpetual"
  },
  {
    "Name": "Upasana Mondal",
    "Registration No": "INA200011684",
    "E-mail": "upasanamondal@yahoo.co.in",
    "Address": "C S 3 Second Floor, Building C, CD Zen Gardens,, Near Maria Hall, BENAULIM, GOA, 403716",
    "Contact Person": "Upasana Mondal",
    "Correspondence Address": "C S 3 Second Floor, Building C, CD Zen Gardens, Near Maria Hall, BENAULIM, GOA, 403716",
    "Validity": "Sep 12, 2018 - Perpetual"
  },
  {
    "Name": "UPSTOX SECURITIES PRIVATE LIMITED",
    "Registration No": "INA000020484",
    "E-mail": "legal@rksv.in",
    "Telephone": "00919833048891",
    "Fax No": "00919833048891",
    "Address": "809, New Delhi House, Barakhamba Road, Connaught Place, Delhi Central, Delhi, DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110001",
    "Contact Person": "Vibhuti  Harsh",
    "Correspondence Address": "30th Floor, Sunshine Towers, Senapati Bapat Marg, Dadar West, Mumbai, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Jul 10, 2025 - Perpetual"
  },
  {
    "Name": "UPWISERY ADVISORS LLP",
    "Registration No": "INA200016564",
    "E-mail": "vikas@fintrust.co.in",
    "Telephone": "04023553930",
    "Fax No": "04023553930",
    "Address": "4TH FLOOR ,PLOT NO 235 A, UNIT NO 402, ROAD NO 36 PINNACLE 36, JUBILEE HILLS, HYDERABAD, TELANGANA, 500033",
    "Contact Person": "Vikas Khaitan",
    "Correspondence Address": "4TH FLOOR ,PLOT NO 235 A, UNIT NO 402, ROAD NO 36 PINNACLE 36, JUBILEE HILLS, HYDERABAD, TELANGANA, 500033",
    "Validity": "Jan 24, 2022 - Perpetual"
  },
  {
    "Name": "Urvil Bharatkumar Modi",
    "Registration No": "INA000017611",
    "E-mail": "urvil@samriddhi.life",
    "Telephone": "910229892800524",
    "Fax No": "910229892800524",
    "Address": "K 605 Greenwoods, MV Road, Near WEH Metro Station, Andheri East, MUMBAI, MAHARASHTRA, 400093",
    "Contact Person": "Urvil Modi",
    "Correspondence Address": "K 605 Greenwoods, MV Road, Near WEH Metro Station, Andheri East, MUMBAI, MAHARASHTRA, 400093",
    "Validity": "Jan 23, 2023 - Perpetual"
  },
  {
    "Name": "V R WEALTH ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000000383",
    "E-mail": "vivekrege@vrwealthadvisors.com",
    "Telephone": "0002266391480",
    "Fax No": "0002266391480",
    "Address": "507 , B Wing , Naman Midtown , Senapati Bapat Marg, Elphinstone Road, Delisle Road, Mumbai, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "VIVEK REGE",
    "Correspondence Address": "507 , B Wing , Naman Midtown , Senapati Bapat Marg, Elphinstone Road, Delisle Road, Mumbai, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Dec 03, 2013 - Perpetual"
  },
  {
    "Name": "VAIBHAV BADJATYA",
    "Registration No": "INA100004590",
    "E-mail": "badjatyaca@yahoo.co.in",
    "Telephone": "7312417336",
    "Fax No": "7312417336",
    "Address": "Flat No 301, Tower 3, Soham Tropical Lagoon, Ghodbunder Road, Thane West Near anand Nagar Bus Depot, THANE, MAHARASHTRA, 400615",
    "Correspondence Address": "FLAT NO. W2B-74, WELLINGTON ESTATE, DLF PHASE 5, CHAKARPUR(74), GURGAON, HARYANA, 122002",
    "Validity": "Apr 29, 2016 - Perpetual"
  },
  {
    "Name": "Vaibhav Pandey",
    "Registration No": "INA000017666",
    "E-mail": "Vaibhavpandeyg@gmail.com",
    "Telephone": "01723564845",
    "Fax No": "01723564845",
    "Address": "House No.49, MDC Sector 4, Panchkula, mansa Devi Sector, Panchkula, HARYANA, 134114",
    "Contact Person": "Vaibhav Pandey",
    "Correspondence Address": "House No.49, MDC Sector 4, Panchkula, mansa Devi Sector, Panchkula, HARYANA, 134114",
    "Validity": "Feb 20, 2023 - Perpetual"
  },
  {
    "Name": "Value Ethics Private Limited",
    "Registration No": "INA000021155",
    "E-mail": "tina.mundada@gmail.com",
    "Telephone": "00919168692727",
    "Fax No": "00919168692727",
    "Address": "6/1B, Office No.305 Shree Ganesh ACE, Arcade, Pune City,Pune, PUNE, MAHARASHTRA, 411017",
    "Contact Person": "Teena Mundada",
    "Correspondence Address": "6/1B, Office No.305 Shree Ganesh ACE, Arcade, Pune City,Pune, PUNE, MAHARASHTRA, 411017",
    "Validity": "Oct 10, 2025 - Perpetual"
  },
  {
    "Name": "Value straight Investment advisor Pvt Ltd.",
    "Registration No": "INA300015906",
    "Address": "SECOND FLOOR, M SQUARE BUILDING, CANTT. ROAD, LEKHA NAGAR,, NEAR BIHARI MARRIEGE HALL, DANAPUR, KHAGAUL, PATNA WARD NO 7, HOLDING NO 530, PATNA, BIHAR, 801503",
    "Correspondence Address": "SECOND FLOOR, M SQUARE BUILDING, CANTT. ROAD, LEKHA NAGAR, NEAR BIHARI MARRIEGE HALL, DANAPUR, KHAGAUL, PATNA WARD NO 7, HOLDING NO 530, PATNA, BIHAR, 801503",
    "Validity": "May 26, 2021 - Perpetual"
  },
  {
    "Name": "ValueArk Advisors LLP",
    "Registration No": "INA000017426",
    "E-mail": "valuearkadvisors@gmail.com",
    "Address": "508, Gateway Plaza, Central Avenue Road, Hiranandani Gardens, Powai, MUMBAI, MAHARASHTRA, 400076",
    "Contact Person": "Vijay Thakkar",
    "Correspondence Address": "508, Gateway Plaza, Central Avenue Road, Hiranandani Gardens, Powai, MUMBAI, MAHARASHTRA, 400076",
    "Validity": "Dec 08, 2022 - Perpetual"
  },
  {
    "Name": "VALUEFY SOLUTIONS  PRIVATE LIMITED",
    "Registration No": "INA000000060",
    "E-mail": "sumeet@valuefy.com",
    "Telephone": "022 32264400",
    "Fax No": "022 32264400",
    "Address": "D-401, Tulip Valley of Flowers,, Thakur Village, Kandivali East,, MUMBAI, MAHARASHTRA, 400101",
    "Contact Person": "Mr. Sumeet Kumar Agrawal",
    "Correspondence Address": "D-401, Tulip Valley of Flowers, Thakur Village, Kandivali East, MUMBAI, MAHARASHTRA, 400101",
    "Validity": "Aug 02, 2013 - Perpetual"
  },
  {
    "Name": "Valuegrow Investment Advisors Private Limited",
    "Registration No": "INA200006910",
    "E-mail": "tirumala.rao@valuegrow.in",
    "Address": "D. No. 4-60-5/4/1, Lawsons Bay Colony, VISAKHAPATNAM, ANDHRA PRADESH, 530017",
    "Contact Person": "Tirumala Ampolu",
    "Correspondence Address": "4 60 5 4 1 Lawsons Bay Colony, Visakhapatnam, VISAKHAPATNAM, ANDHRA PRADESH, 530016",
    "Validity": "Jan 12, 2017 - Perpetual"
  },
  {
    "Name": "VALUEQUEST CAPITAL LLP",
    "Registration No": "INA100002032",
    "E-mail": "paresh@valuequestcapital.com",
    "Telephone": "11 39126203",
    "Fax No": "11 39126203",
    "Address": "206, WORLDMARK 1 SECOND FLOOR, EAST WING, AEROCITY, NEW DELHI, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110037",
    "Contact Person": "SH PARESH S THAKKAR",
    "Correspondence Address": "D-3, P3B, District Centre, Saket, New Delhi, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110017",
    "Validity": "Jul 28, 2014 - Perpetual"
  },
  {
    "Name": "Valuevest Services Private Limited",
    "Registration No": "INA000011343",
    "E-mail": "nikhil@piggy.co.in",
    "Address": "B 1301, Kailash Business Park, Veer Sawarkar Marg, Vikhroli West, Mumbai, Maharashtra, MUMBAI, MAHARASHTRA, 400079",
    "Contact Person": "Nikhil Mantha",
    "Correspondence Address": "C 1512, Kailash Business Park, Veer Sawarkar Marg, Vikhroli West, Mumbai,Maharashtra, MUMBAI, MAHARASHTRA, 400079",
    "Validity": "Aug 06, 2018 - Perpetual"
  },
  {
    "Name": "ValueX Fund Managers LLP",
    "Registration No": "INA000019743",
    "E-mail": "loveshah@valuex.in",
    "Telephone": "00919833073003",
    "Fax No": "00919833073003",
    "Address": "401,Osia corner Mhatar pada road, Amboli, Andheri (west), Mumbai, MUMBAI, MAHARASHTRA, 400058",
    "Contact Person": "Love Shah",
    "Correspondence Address": "4th floor, Spectrum Tower, Mindspace, Chincholi Bunder Road, Malad (west), Mumbai, MUMBAI, MAHARASHTRA, 400064",
    "Validity": "Dec 17, 2024 - Perpetual"
  },
  {
    "Name": "VANSH CAPITAL PRIVATE LIMITED",
    "Registration No": "INA000014818",
    "E-mail": "vanshcapitaladvisors@gmail.com",
    "Address": "795, Bhandarkar Road, Mini Apartment  , Near Metro Police Lab, Deccan Gymkhana, PUNE, MAHARASHTRA, 411004",
    "Contact Person": "RAHUL JAJU",
    "Correspondence Address": "795, Bhandarkar Road, Mini Apartment  , Near Metro Police Lab, Deccan Gymkhana, PUNE, MAHARASHTRA, 411004",
    "Validity": "Jul 21, 2020 - Perpetual"
  },
  {
    "Name": "VARDE INDIA INVESTMENT ADVISER PRIVATE LIMITED",
    "Registration No": "INA000012102",
    "E-mail": "akohli@varde.com",
    "Telephone": "65068611409",
    "Fax No": "65068611409",
    "Address": "Office No 77, 7th Floor, 3 North Avenue, Maker Maxity, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Contact Person": "Aseem Kohli",
    "Correspondence Address": "Office No. 77, 7th Floor, 3 North Avenue, Maker Maxity, Bandra Kurla Complex, Bandra East, MUMBAI, MAHARASHTRA, 400051",
    "Validity": "Nov 28, 2018 - Perpetual"
  },
  {
    "Name": "VARDHARAJAN M",
    "Registration No": "INA200014715",
    "E-mail": "rajeshkannanm1@yahoo.com",
    "Address": "Flat No.303, 3rd Floor, Shashwathi Residency, 3rd Main ROad, Off Bannerghata Road, Kamakshi Layout, Gottigere, BANGALORE, KARNATAKA, 560083",
    "Contact Person": "MURUGESAN VARDHARAJAN",
    "Correspondence Address": "Flat No.303, 3rd Floor, Shashwathi Residency, 3rd Main ROad, Off Bannerghata Road, Kamakshi Layout, Gottigere, BANGALORE, KARNATAKA, 560083",
    "Validity": "Jun 02, 2020 - Perpetual"
  },
  {
    "Name": "Varsha Vasant Shingate",
    "Registration No": "INA000016427",
    "E-mail": "varshavshingate@gmail.com",
    "Address": "Office No. 103, 'Rajdhani Complex',Pune-Satara Road,, near Shankar Maharaj Math, Dhankawadi,, PUNE, MAHARASHTRA, 411043",
    "Contact Person": "Varsha Shingate",
    "Correspondence Address": "Vasantotsav Bungalow, Digvijay Lane no.1, near Nagraj Mandir, Santoshnagar, Katraj, PUNE, MAHARASHTRA, 411046",
    "Validity": "Nov 30, 2021 - Perpetual"
  },
  {
    "Name": "Varun Ginodia - Proprietor Bulwark Advisors",
    "Registration No": "INA000016764",
    "E-mail": "varun@bulwarkadvisors.in",
    "Telephone": "919819711898",
    "Address": "E 2306, Anmol Fortune, 23rd Floor,, Unnat Nagar Rd No. 1, Off. MG Road, Goregaon W, MUMBAI, MAHARASHTRA, 400104",
    "Contact Person": "Varun Ginodia",
    "Correspondence Address": "E 2306, Anmol Fortune, 23rd Floor, Unnat Nagar Rd No. 1, Off. MG Road, Goregaon W, MUMBAI, MAHARASHTRA, 400104",
    "Validity": "Mar 09, 2022 - Perpetual"
  },
  {
    "Name": "Varun Srivastava",
    "Registration No": "INA000020448",
    "E-mail": "p14varuns@iima.ac.in",
    "Telephone": "919560042118",
    "Address": "122, Tower 1A, Kalpataru Aura,, LBS Marg, Ghatkopar West,, MUMBAI, MAHARASHTRA, 400086",
    "Contact Person": "Varun Srivastava",
    "Correspondence Address": "122, Tower 1A, Kalpataru Aura, LBS Marg, Ghatkopar West, MUMBAI, MAHARASHTRA, 400086",
    "Validity": "Jul 04, 2025 - Perpetual"
  },
  {
    "Name": "VARUN SURESH MALHOTRA",
    "Registration No": "INA100013445",
    "Validity": "Jun 10, 2019 - Perpetual"
  },
  {
    "Name": "VASISTH CAPITAL PRIVATE LIMITED",
    "Registration No": "INA200014016",
    "E-mail": "ramesh@vasisthcapital.com",
    "Address": "65, Ground Floor, West Venkatapuram, Dinakar Nagar, SECUNDERABAD, TELANGANA, 500015",
    "Contact Person": "RAMESH CALLORE",
    "Correspondence Address": "65, Ground Floor, West Venkatapuram, Dinakar Nagar, SECUNDERABAD, TELANGANA, 500015",
    "Validity": "Sep 30, 2019 - Perpetual"
  },
  {
    "Name": "VASUPRADAH INVESTMENT ADVISORY SERVICES PVT. LTD.",
    "Registration No": "INA000020059",
    "E-mail": "NEELAKANTANPILLAI@VASUPRADAH.COM",
    "Telephone": "00919821107359",
    "Fax No": "00919821107359",
    "Address": "G 32, 67/4891 GROUND FLOOR, PINOEER TOWERS,MARINE DRIVE, KOCHI, KERALA, KOCHI, KERALA, 682031",
    "Contact Person": "NEELAKANTAN PILLAI",
    "Correspondence Address": "G 32, 67/4891 GROUND FLOOR, PINOEER TOWERS,MARINE DRIVE, KOCHI, KERALA, KOCHI, KERALA, 682031",
    "Validity": "Apr 01, 2025 - Perpetual"
  },
  {
    "Name": "VEENA SHARMA PROP. RESEARCH GURU",
    "Registration No": "INA000005507",
    "E-mail": "researchguruinfo@gmail.com",
    "Telephone": "07314282244",
    "Fax No": "07314282244",
    "Address": "79, Scheme No. 53, Indore, INDORE, MADHYA PRADESH, 452010",
    "Validity": "Aug 31, 2016 - Perpetual"
  },
  {
    "Name": "Venkateshwaran Subramanian",
    "Registration No": "INA000012175",
    "E-mail": "venkatsubr@gmail.com",
    "Address": "E 203, Green Meadows, Behind Mhasoba Temple, Nashik Pune Road, Nashik Road, NASHIK, MAHARASHTRA, 422101",
    "Contact Person": "Venkateshwaran Subramanian",
    "Correspondence Address": "E 203, Green Meadows, Behind Mhasoba Temple, Nashik Pune Road, Nashik Road, NASHIK, MAHARASHTRA, 422101",
    "Validity": "Dec 13, 2018 - Perpetual"
  },
  {
    "Name": "VENKTESH PRASAD SHUKLA",
    "Registration No": "INA000018735",
    "E-mail": "venktesh.shukl@gmail.com",
    "Telephone": "917987472053",
    "Address": "101 ML Tower, 916 R Mahalaxmi Nagar,, INDORE, MADHYA PRADESH, 452001",
    "Contact Person": "VENKTESH PRASAD SHUKLA",
    "Correspondence Address": "101 ML Tower, 916 R Mahalaxmi Nagar, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Jan 08, 2024 - Perpetual"
  },
  {
    "Name": "Ventugrow consultants Private Limited",
    "Registration No": "INA000013235",
    "E-mail": "sumitchanda@monitree.in",
    "Address": "1, Sarthak CHS, Plot no. 1,, Road no. 6, Sector 1, New Panvel,, NAVI MUMBAI, MAHARASHTRA, 410206",
    "Contact Person": "Sumit  Chanda",
    "Correspondence Address": "Plot no. A-144/145, Road no. 23, Wagle Industrial Estate, THANE, MAHARASHTRA, 400604",
    "Validity": "May 07, 2019 - Perpetual"
  },
  {
    "Name": "VENUGOPAL RAJAMANURI",
    "Registration No": "INA000019530",
    "E-mail": "venumanuri@gmail.com",
    "Telephone": "919848538882",
    "Address": "Maruthi Nivas, First Floor, 2-2-23/22/C/A, D.D.Colony, Baghamberpet, HYDERABAD, TELANGANA, 500013",
    "Contact Person": "VENUGOPAL RAJAMANURI",
    "Correspondence Address": "D 302, Giridhari Executive Park, Peeramcheruvu, Bandlaguda Jagir, HYDERABAD, TELANGANA, 500086",
    "Validity": "Sep 12, 2024 - Perpetual"
  },
  {
    "Name": "VIJAY DUTT VEMALA",
    "Registration No": "INA200013594",
    "E-mail": "vijay@vjcapital.in",
    "Address": "20-115, SRI PAADA NILAYAM, THASILDAR STREET, NEW PET, PALAMANER, TIRUPATI, ANDHRA PRADESH, 517408",
    "Contact Person": "VIJAY VEMALA",
    "Correspondence Address": "A-404, PURVA SKYWOOD, SILVER COUNTY ROAD, OFF HARALUR ROAD, BANGALORE, KARNATAKA, 560068",
    "Validity": "Jul 08, 2019 - Perpetual"
  },
  {
    "Name": "VIJAYA GOWRI MULAKALA",
    "Registration No": "INA200011392",
    "E-mail": "GOWRI.VIJAYA@GMAIL.COM",
    "Telephone": "0918074610810",
    "Address": "Flat no. 704, B Block, Tower 4, Adarsh Palm Retreat, Bellandur, BANGALORE, KARNATAKA, 560103",
    "Contact Person": "VIJAYA MULAKALA",
    "Correspondence Address": "Flat no. 704, B Block, Tower 4, Adarsh Palm Retreat, Bellandur, BANGALORE, KARNATAKA, 560103",
    "Validity": "Aug 10, 2018 - Perpetual"
  },
  {
    "Name": "Vijaykumar Srichand",
    "Registration No": "INA000020837",
    "E-mail": "vijayschawla@yahoo.co.in",
    "Telephone": "00919845143880",
    "Fax No": "00919845143880",
    "Address": "Flat No. A-1202, No-23/48, D Rajgopal Roa,, Next To Vaibhav Theatre, Geddalahalli, BANGALORE, KARNATAKA, 560094",
    "Contact Person": "Vijaykumar Srichand",
    "Correspondence Address": "Flat No. A-1202, No-23/48, D Rajgopal Roa, Next To Vaibhav Theatre, Geddalahalli, BANGALORE, KARNATAKA, 560094",
    "Validity": "Aug 07, 2025 - Perpetual"
  },
  {
    "Name": "Vikas B Goel",
    "Registration No": "INA000016074",
    "E-mail": "vikas@vbgco.com",
    "Address": "B/903-904 Shikhar Kunj, Upper Govind Nagar, Malad (East), MUMBAI, MAHARASHTRA, 400097",
    "Contact Person": "Vikas Goel",
    "Correspondence Address": "B/903-904 Shikhar Kunj, Upper Govind Nagar, Malad (East), MUMBAI, MAHARASHTRA, 400097",
    "Validity": "Aug 10, 2021 - Perpetual"
  },
  {
    "Name": "Vikas Dimaniya",
    "Registration No": "INA000020271",
    "E-mail": "vdimaniya@gmail.com",
    "Telephone": "00919599927746",
    "Fax No": "00919599927746",
    "Address": "183/1 Nai Mandi Kaser Khera, Meerut Uttar Pradesh, MEERUT, UTTAR PRADESH, 250001",
    "Contact Person": "Vikas  Dimaniya",
    "Correspondence Address": "183/1 Nai Mandi Kaser Khera, Meerut Uttar Pradesh, MEERUT, UTTAR PRADESH, 250001",
    "Validity": "Jun 04, 2025 - Perpetual"
  },
  {
    "Name": "VIKAS KUMAR PANDEY PROP. PARAMOUNT RESEARCH SERVICES",
    "Registration No": "INA000005606",
    "E-mail": "vikas.pandey41@yahoo.in",
    "Telephone": "07312572247",
    "Fax No": "07312572247",
    "Address": "JAMUI BARAYAN KALA,, BARYA KALAN, REWA,, REWA, MADHYA PRADESH, 486331",
    "Contact Person": "VIKAS KUMAR PANDEY",
    "Correspondence Address": "Plot No. 26, Scheme 54, PU-4, Behind C-21 Mall, INDORE, MADHYA PRADESH, 452001",
    "Validity": "Oct 17, 2016 - Perpetual"
  },
  {
    "Name": "VIKRAM ADVISORY SERVICES PVT. LTD.",
    "Registration No": "INA000001472",
    "E-mail": "vcshah999@gmail.com",
    "Telephone": "7926423666",
    "Fax No": "7926423666",
    "Address": "4TH FLOOR, NIKUMBH COMPLEX,, B/H RATNAM COMPLEX, C G ROAD, ELLIS BRIDGE,, AHMEDABAD, GUJARAT, 380006",
    "Contact Person": "VIKRAM CHINUBHAI SHAH",
    "Correspondence Address": "4th Floor, Nikumbh Complex, B/h Ratnam Complex, C G Road, Ellis Bridge, AHMEDABAD, GUJARAT, 380006",
    "Validity": "Apr 09, 2014 - Perpetual"
  },
  {
    "Name": "Vinay Prakash Tiwari",
    "Registration No": "INA100010837",
    "E-mail": "investingdaddy@gmail.com",
    "Address": "RAM PRASAD TIWARI, HOUSE NO. 385,, LOT NO 2, HANUMANPUR, MUGHALSARAI, VARANASI, UTTAR PRADESH, 232101",
    "Contact Person": "VINAY TIWARI",
    "Correspondence Address": "RAM PRASAD TIWARI, HOUSE NO. 385, LOT NO 2, HANUMANPUR, MUGHALSARAI, VARANASI, UTTAR PRADESH, 232101",
    "Validity": "Jun 18, 2018 - Perpetual"
  },
  {
    "Name": "Vinay Simon George",
    "Registration No": "INA000018142",
    "Address": "9/2, 15th Avenue, Harrington Road, CHENNAI, TAMIL NADU, 600031",
    "Correspondence Address": "9/2, 15th Avenue, Harrington Road, CHENNAI, TAMIL NADU, 600031",
    "Validity": "Jun 27, 2023 - Perpetual"
  },
  {
    "Name": "VINAYAK ARUN KINI",
    "Registration No": "INA000021304",
    "E-mail": "personifi25@gmail.com",
    "Telephone": "00919611617202",
    "Fax No": "00919611617202",
    "Address": "339, 4th BLOCK KORAMANGALA, BANGALORE, KARNATAKA, 560034",
    "Contact Person": "Vinayak Kini",
    "Correspondence Address": "339, 4th BLOCK KORAMANGALA, BANGALORE, KARNATAKA, 560034",
    "Validity": "Nov 04, 2025 - Perpetual"
  },
  {
    "Name": "VINAYAK SAVANUR",
    "Registration No": "INA200015246",
    "E-mail": "VINAY.SAVANUR@GMAIL.COM",
    "Address": "SUNNIDHI, HNO LIG-42, 6TH CROSS NAVANAGAR HUBLI, HUBBALLI-DHARWAD, KARNATAKA, 580025",
    "Contact Person": "VINAYAK  SAVANUR",
    "Correspondence Address": "SUNNIDHI, HNO LIG-42, 6TH CROSS NAVANAGAR HUBLI, HUBBALLI-DHARWAD, KARNATAKA, 580025",
    "Validity": "Sep 30, 2020 - Perpetual"
  },
  {
    "Name": "Vinny Arora (Prop. Money vs Me)",
    "Registration No": "INA100016327",
    "E-mail": "vinnyaro@gmail.com",
    "Telephone": "09810726952",
    "Address": "BF 27 1st Floor, Janakpuri, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110058",
    "Contact Person": "Vinny Arora",
    "Correspondence Address": "BF 27 1st Floor, Janakpuri, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110058",
    "Validity": "Oct 26, 2021 - Perpetual"
  },
  {
    "Name": "Vinod Chinnaya Bangera- Proprietor- Karvin Capital",
    "Registration No": "INA000018823",
    "E-mail": "vinod.bangera@karvincapital.com",
    "Telephone": "919987772345",
    "Address": "Seventh, B-703, Oberoi Splendor Jogeshwari Vikhroli Link Road,, Jogeshwari East, MUMBAI, MAHARASHTRA, 400060",
    "Contact Person": "Vinod Bangera",
    "Correspondence Address": "Seventh, B-703, Oberoi Splendor Jogeshwari Vikhroli Link Road, Jogeshwari East, MUMBAI, MAHARASHTRA, 400060",
    "Validity": "Feb 08, 2024 - Perpetual"
  },
  {
    "Name": "VINOD KANAIYALAL DAS",
    "Registration No": "INA000016214",
    "E-mail": "vinod.das9@gmail.com",
    "Address": "A-2/304, Grand square, Ghodbundar Road, Anand Nagar, Behind Bhakti Apartment, THANE, MAHARASHTRA, 400607",
    "Contact Person": "VINOD  DAS",
    "Correspondence Address": "A-2/304, Grand square, Ghodbundar Road, Anand Nagar, Behind Bhakti Apartment, THANE, MAHARASHTRA, 400607",
    "Validity": "Oct 06, 2021 - Perpetual"
  },
  {
    "Name": "VINSMART WEALTH MANAGEMENT LLP",
    "Registration No": "INA000021492",
    "E-mail": "viljogeorge@gmail.com",
    "Telephone": "00919567121626",
    "Fax No": "00919567121626",
    "Address": "VIVIN Avenue, Palachuvadu Road, Vennala P.O., Ernakulam Kochi, ERNAKULAM, KERALA, 682028",
    "Contact Person": "Viljo George",
    "Correspondence Address": "VIVIN Avenue, Palachuvadu Road, Vennala P.O., Ernakulam Kochi, ERNAKULAM, KERALA, 682028",
    "Validity": "Dec 11, 2025 - Perpetual"
  },
  {
    "Name": "VIPIN KHANDELWAL",
    "Registration No": "INA000003643",
    "E-mail": "vipin.khandelwal@gmail.com",
    "Telephone": "9920371082",
    "Fax No": "9920371082",
    "Address": "1102, Tower 9, Skyi Songbirds, Paud Road, Bhugoan, PUNE, MAHARASHTRA, 412115",
    "Contact Person": "VIPIN KHANDELWAL",
    "Correspondence Address": "Flat No. 4, Aditya Apartments, Plot No. 55, Sector 19, Nerul East, NAVI MUMBAI, MAHARASHTRA, 400706",
    "Validity": "Oct 14, 2015 - Perpetual"
  },
  {
    "Name": "VIPUL P SHAH(PROPRIETOR: INPACT WEALTH ADVISORS)",
    "Registration No": "INA000015552",
    "E-mail": "vipool@hotmail.com",
    "Address": "B-1102, TRIDEV APT, BHAKTI MARG, MULUND W, MUMBAI, MAHARASHTRA, 400080",
    "Contact Person": "VIPUL SHAH",
    "Correspondence Address": "B-1102, TRIDEV APT, BHAKTI MARG, MULUND W, MUMBAI, MAHARASHTRA, 400080",
    "Validity": "Dec 08, 2020 - Perpetual"
  },
  {
    "Name": "Viren Sameer Deshpande Proprietor of Alphapeak Investments",
    "Registration No": "INA000017967",
    "E-mail": "alphapeakinvestments@gmail.com",
    "Telephone": "08551006206",
    "Address": "B,202, CTS 4662, Plot no. 481, Urban Life Ventures Aapli,, Near Shivdarshan Chowk, Pune, PUNE, MAHARASHTRA, 411009",
    "Contact Person": "Viren Deshpande",
    "Correspondence Address": "B,202, CTS 4662, Plot no. 481, Urban Life Ventures Aapli, Near Shivdarshan Chowk, Pune, PUNE, MAHARASHTRA, 411009",
    "Validity": "May 26, 2023 - Perpetual"
  },
  {
    "Name": "Viresh P Patel",
    "Registration No": "INA000021076",
    "E-mail": "ia.planner@vireshpatel.com",
    "Telephone": "917083346003",
    "Fax No": "917083346003",
    "Address": "Flat No 3 Borivali Sonmarg CHS LTD NR W E, Highway Kasturba Road Borivali East, MUMBAI, MAHARASHTRA, 400066",
    "Contact Person": "Viresh P Patel",
    "Correspondence Address": "Flat No 3 Borivali Sonmarg CHS LTD NR W E, Highway Kasturba Road Borivali East, MUMBAI, MAHARASHTRA, 400066",
    "Validity": "Sep 29, 2025 - Perpetual"
  },
  {
    "Name": "Vishal Bharat Shah",
    "Registration No": "INA000019220",
    "E-mail": "vishal.shah@bachhat.money",
    "Telephone": "00917387458677",
    "Fax No": "00917387458677",
    "Address": "C 302, Lorelle Society, Datta Mandir Road,, Shankar Kalat Nagar, Wakad, PUNE, MAHARASHTRA, 411057",
    "Contact Person": "Vishal  Shah",
    "Correspondence Address": "C 302, Lorelle Society, Datta Mandir Road, Shankar Kalat Nagar, Wakad, PUNE, MAHARASHTRA, 411057",
    "Validity": "Jun 21, 2024 - Perpetual"
  },
  {
    "Name": "Vishal Borasi Proprietor Muhurat Investing - Investment Advisor",
    "Registration No": "INA000018692",
    "E-mail": "vishuborasi@gmail.com",
    "Telephone": "91009584096836",
    "Fax No": "91009584096836",
    "Address": "13-14 Mukharji Nagar, Gali No 07 Panch Mori,, INDORE, MADHYA PRADESH, 452015",
    "Contact Person": "Vishal Borasi",
    "Correspondence Address": "13-14 Mukharji Nagar, Gali No 07 Panch Mori, INDORE, MADHYA PRADESH, 452015",
    "Validity": "Dec 18, 2023 - Perpetual"
  },
  {
    "Name": "Vishal Pramod Rotwadkar Proprietor Heritage City Ventures",
    "Registration No": "INA000020970",
    "E-mail": "heritagecityservices@gmail.com",
    "Telephone": "00917888139878",
    "Fax No": "00917888139878",
    "Address": "Mohata Devi Chowk, RL-174 A, First floor, Shop no. 2, Bajajnagar, Chatrapati Sambhajinagar, AURANGABAD, MAHARASHTRA, 431136",
    "Contact Person": "Vishal Rotwadkar",
    "Correspondence Address": "Mohata Devi Chowk, RL-174 A, First floor, Shop no. 2, Bajajnagar, Chatrapati Sambhajinagar, AURANGABAD, MAHARASHTRA, 431136",
    "Validity": "Aug 25, 2025 - Perpetual"
  },
  {
    "Name": "Vishal Shekhar",
    "Registration No": "INA300011636",
    "E-mail": "vs.vishalshekhar@gmail.com",
    "Address": "Road No - 6 C, Manorma Bhawan, Rajendra Nagar, PATNA, BIHAR, 800016",
    "Contact Person": "Vishal Shekhar",
    "Correspondence Address": "Road No - 6 C, Manorma Bhawan, Rajendra Nagar, PATNA, BIHAR, 800016",
    "Validity": "Sep 05, 2018 - Perpetual"
  },
  {
    "Name": "Vishnu Khandelwal",
    "Registration No": "INA100011137",
    "E-mail": "vishnu.khandelwal@iiml.org",
    "Address": "25 B Krishna Colony, Ramgarh Mode, Amer Road, JAIPUR, RAJASTHAN, 302002",
    "Contact Person": "Vishnu Khandelwal",
    "Correspondence Address": "C18 2nd Floor, Greater Kailash Enclave 1, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110048",
    "Validity": "Jul 13, 2018 - Perpetual"
  },
  {
    "Name": "Vishrav Technologies",
    "Registration No": "INA000020934",
    "E-mail": "chandresh.malpani@gmail.com",
    "Telephone": "00919712536259",
    "Fax No": "00919712536259",
    "Address": "No. 15/1, 18th Cross, Malleshwaram,, BANGALORE, KARNATAKA, 560055",
    "Contact Person": "Chandresh Malpani",
    "Correspondence Address": "No. 15/1, 18th Cross, Malleshwaram, BANGALORE, KARNATAKA, 560055",
    "Validity": "Aug 14, 2025 - Perpetual"
  },
  {
    "Name": "Vivek Gupta",
    "Registration No": "INA000020554",
    "E-mail": "vivek203@yahoo.com",
    "Telephone": "00919958836060",
    "Fax No": "00919958836060",
    "Address": "Flat No-65, RPS, , Sheikh Sarai Phase I,, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110017",
    "Contact Person": "Vivek Gupta",
    "Correspondence Address": "Flat No-65, RPS, , Sheikh Sarai Phase I, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110017",
    "Validity": "Jul 11, 2025 - Perpetual"
  },
  {
    "Name": "VIVEKAM FINANCIAL SERVICES PRIVATE LIMITED",
    "Registration No": "INA200000316",
    "E-mail": "vvkprasad@vivekam.co.in",
    "Telephone": "4023549941",
    "Fax No": "4023549941",
    "Address": "Plot No.57, Road No.71, Jubilee Hills, Hyderabad, HYDERABAD, ANDHRA PRADESH, 500082",
    "Contact Person": "V V K PRASAD",
    "Correspondence Address": "H.no.8-2-293/82/A/68, Road No.1, Jubilee Hills, HYDERABAD, ANDHRA PRADESH, 500033",
    "Validity": "Nov 22, 2013 - Perpetual"
  },
  {
    "Name": "VSCVITTY.AI PRIVATE LIMITED",
    "Registration No": "INA000021580",
    "E-mail": "vinodsinghal@vsc.co.in",
    "Telephone": "00919414071060",
    "Fax No": "00919414071060",
    "Address": "SHOP 222, GANPATI PLAZA, M .I. Road, Jaipur, JAIPUR, RAJASTHAN, 302001",
    "Contact Person": "Vinod Singhal",
    "Correspondence Address": "SHOP 222, GANPATI PLAZA, M .I. Road, Jaipur, JAIPUR, RAJASTHAN, 302001",
    "Validity": "Dec 18, 2025 - Perpetual"
  },
  {
    "Name": "VSK FINANCIAL CONSULTANCY SERVICES PVT. LTD.",
    "Registration No": "INA000017620",
    "E-mail": "ymsabnis@vskindia.com",
    "Address": "227, Unique Industrial Estate, Second Floor, Off Veer Savarkar Marg,, Twin Tower Lane, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "YOGIN SABNIS",
    "Correspondence Address": "227, Unique Industrial Estate, Second Floor, Off Veer Savarkar Marg, Twin Tower Lane, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Validity": "Jan 23, 2023 - Perpetual"
  },
  {
    "Name": "VSK FINANCIAL CONSULTANCY SERVICES PVT. LTD.",
    "Registration No": "INA000017620",
    "E-mail": "ymsabnis@vskindia.com",
    "Address": "227, Unique Industrial Estate, Second Floor, Off Veer Savarkar Marg,, Twin Tower Lane, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "YOGIN SABNIS",
    "Correspondence Address": "227, Unique Industrial Estate, Second Floor, Off Veer Savarkar Marg, Twin Tower Lane, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Validity": "Jan 23, 2023 - Perpetual"
  },
  {
    "Name": "Wallet Wealth LLP",
    "Registration No": "INA000020998",
    "E-mail": "sridharan@walletwealth.co.in",
    "Telephone": "00919940116967",
    "Fax No": "00919940116967",
    "Address": "AT2 Guru Roshini Flats, 3rd Floor, 6th Main Road, Nanganallur, Chennai, CHENNAI, TAMIL NADU, 600061",
    "Contact Person": "Sridharan Sundaram",
    "Correspondence Address": "8A, 2nd Main Road, Nanganallur, Opp to Hayagreevar Temple, Chennai, CHENNAI, TAMIL NADU, 600061",
    "Validity": "Sep 01, 2025 - Perpetual"
  },
  {
    "Name": "WATERFIELD FINANCIAL AND INVESTMENT ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000001811",
    "E-mail": "principal.officer@waterfieldadvisors.com",
    "Telephone": "9102266210700",
    "Fax No": "9102266210700",
    "Address": "142, 14TH FLOOR, MAKER CHAMBERS, VI, 220, JAMNALAL BAJAJ MARG, NARIMAN POINT, MAHARASHTRA, 400021",
    "Contact Person": "Soumya Rajan",
    "Correspondence Address": "7 Avighna House 82 Dr Annie Besant Road, Worli Naka Siddharth Nagar Worli Mumbai, MUMBAI, MAHARASHTRA, 400018",
    "Validity": "Jun 02, 2014 - Perpetual"
  },
  {
    "Name": "Watsonia Advisory Services Private Limited",
    "Registration No": "INA000018203",
    "E-mail": "Ankur.gadia@torusmoney.com",
    "Telephone": "0221239820450141",
    "Fax No": "0221239820450141",
    "Address": "2nd floor, ICC Chambers II, Saki Vihar Road,, Near MTNL office, Powai,, MUMBAI, MAHARASHTRA, 400072",
    "Contact Person": "Ankur Gadia",
    "Correspondence Address": "2nd floor, ICC Chambers II, Saki Vihar Road, Near MTNL office, Powai, MUMBAI, MAHARASHTRA, 400072",
    "Validity": "Jul 05, 2023 - Perpetual"
  },
  {
    "Name": "Weallat Solutions Private Limited",
    "Registration No": "INA000020518",
    "E-mail": "principal.officer@weallat.com",
    "Telephone": "00919920563412",
    "Fax No": "00919920563412",
    "Address": "A1004 Kabra Centroid, CST Road, Kalina, Santacruz East, MUMBAI, MAHARASHTRA, 400098",
    "Contact Person": "Rahul Somani",
    "Correspondence Address": "A1004 Kabra Centroid, CST Road, Kalina, Santacruz East, MUMBAI, MAHARASHTRA, 400098",
    "Validity": "Jul 10, 2025 - Perpetual"
  },
  {
    "Name": "Wealth Beacon Investment Advisors Private Limited",
    "Registration No": "INA000020749",
    "E-mail": "contact@wealthbeacon.ai",
    "Telephone": "00919886302903",
    "Fax No": "00919886302903",
    "Address": "Villa No 260, Prestige Lakeside Habitat, Gunjurvarthur, BANGALORE, KARNATAKA, 560087",
    "Contact Person": "Indrani Banerjee",
    "Correspondence Address": "Villa No 260, Prestige Lakeside Habitat, Gunjurvarthur, BANGALORE, KARNATAKA, 560087",
    "Validity": "Jul 31, 2025 - Perpetual"
  },
  {
    "Name": "Wealth Bridge Consultants Private Limited",
    "Registration No": "INA100009460",
    "E-mail": "shivamsethi@wealthbridgeindia.com",
    "Address": "97,Shanti Kunj , Behind Sector 3 & 4, Vasant Kunj, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110070",
    "Contact Person": "SUDHIR SETHI",
    "Correspondence Address": "97,Shanti Kunj , Behind Sector 3 & 4, Vasant Kunj, NEW DELHI, NATIONAL CAPITAL TERRITORY OF DELHI, 110070",
    "Validity": "Jan 03, 2018 - Perpetual"
  },
  {
    "Name": "Wealth Crafts",
    "Registration No": "INA000018328",
    "E-mail": "vivek@wealthcrafts.in",
    "Telephone": "022919886524678",
    "Fax No": "022919886524678",
    "Address": "No 39, 8th Main Road, Gokula,, 1st Stage, 2nd Phase, Mathikere, Bangalore, BANGALORE, KARNATAKA, 560054",
    "Contact Person": "Vivek S G",
    "Correspondence Address": "No 39, 8th Main Road, Gokula, 1st Stage, 2nd Phase, Mathikere, Bangalore, BANGALORE, KARNATAKA, 560054",
    "Validity": "Aug 02, 2023 - Perpetual"
  },
  {
    "Name": "WEALTH FIRST ADVISORS PRIVATE LTD",
    "Registration No": "INA000000482",
    "E-mail": "rakeshm@wealth-first.com",
    "Telephone": "022 30287279",
    "Fax No": "022 30287279",
    "Address": "CAPITOL HOUSE 10,PARAS BUNGLOW II,, PARAS BUNGLOW II,NEAR PRAHLAD GARDEN,, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "MR. RAKESH MEHTA",
    "Correspondence Address": "809 Raheja Centre, Nariman Point, MUMBAI, MAHARASHTRA, 400021",
    "Validity": "Dec 12, 2013 - Perpetual"
  },
  {
    "Name": "WEALTH FIRST INVESTMENT ADVISERS PVT. LTD.",
    "Registration No": "INA000005812",
    "E-mail": "nishil@wealthfirst.biz",
    "Telephone": "07940240000",
    "Fax No": "07940240000",
    "Address": "CAPITOL HOUSE, 10, PARAS BUNGLOW II, NEAR CAMPUS CORNER, PRAHLADNAGAR, ANAND NAGAR, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "MR. NISHIL PANDYA",
    "Correspondence Address": "Capitol House, 10, Paras Bunglow II, Near Campus Corner, Prahladnagar, Anand Nagar, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Jan 07, 2017 - Perpetual"
  },
  {
    "Name": "WEALTH INDIA FINANCIAL SERVICES PVT. LTD",
    "Registration No": "INA200002429",
    "Validity": "Nov 26, 2014 - Perpetual"
  },
  {
    "Name": "WEALTH LADDER DIRECT",
    "Registration No": "INA200010357",
    "E-mail": "info@wealthladder.co.in",
    "Telephone": "91919940116967",
    "Fax No": "91919940116967",
    "Address": "AT2, GURU ROSHINI FLAT, 6TH MAIN ROAD, NANGANALLUR, CHENNAI, TAMIL NADU, 600061",
    "Contact Person": "SRIDHARAN SUNDARAM",
    "Correspondence Address": "Golden Rays Business Center, 53A/29A, Lake View Road, West Mambalam, CHENNAI, TAMIL NADU, 600033",
    "Validity": "Apr 17, 2018 - Perpetual"
  },
  {
    "Name": "WEALTH MANAGERS UNITED (INDIA) PRIVATE LTD",
    "Registration No": "INA200001330",
    "E-mail": "jay@wmuindia.com",
    "Telephone": "9108040952801",
    "Fax No": "9108040952801",
    "Address": "NO.2, III Floor, HAYES ROAD, BANGALORE, KARNATAKA, 560025",
    "Contact Person": "JAYAPRAKASH PAI MUNIYAL",
    "Correspondence Address": "NO.2, III Floor, HAYES ROAD, BANGALORE, KARNATAKA, 560025",
    "Validity": "Mar 24, 2014 - Perpetual"
  },
  {
    "Name": "WEALTH WISHERS",
    "Registration No": "INA000002348",
    "E-mail": "monikaloya@gmail.com",
    "Telephone": "07312480512",
    "Fax No": "07312480512",
    "Address": "51/A, SUDARSHAN NAGAR, ANNAPURNA ROAD, INDORE, MADHYA PRADESH, 452009",
    "Contact Person": "MONIKA LOYA",
    "Correspondence Address": "51/A, Sudarshan Nagar, Annapurna Road, INDORE, MADHYA PRADESH, 452009",
    "Validity": "Oct 30, 2014 - Perpetual"
  },
  {
    "Name": "WEALTH YANTRA TECHNOLOGIES PRIVATE LIMITED",
    "Registration No": "INA000017949",
    "E-mail": "ria@wealthyantra.com",
    "Telephone": "910229363488011",
    "Fax No": "910229363488011",
    "Address": "2ND FLOOR, 82/62, ARCOT ROAD,, SALIGRAMAM, CHENNAI, TAMIL NADU, 600093",
    "Contact Person": "VIJAYANAND VENKATARAMAN",
    "Correspondence Address": "2ND FLOOR, 82/62, ARCOT ROAD, SALIGRAMAM, CHENNAI, TAMIL NADU, 600093",
    "Validity": "May 26, 2023 - Perpetual"
  },
  {
    "Name": "Wealthculture Advisory Services Private Limited",
    "Registration No": "INA000020022",
    "E-mail": "ujjawal@wealthculture.in",
    "Telephone": "00918939499557",
    "Fax No": "00918939499557",
    "Address": "203-2nd floor, Ujagar Cha, VN Purav Mang, Deonar, MUMBAI, MAHARASHTRA, 400088",
    "Contact Person": "Ujjawal Kumar",
    "Correspondence Address": "203-2nd floor, Ujagar Cha, VN Purav Mang, Deonar, MUMBAI, MAHARASHTRA, 400088",
    "Validity": "Mar 26, 2025 - Perpetual"
  },
  {
    "Name": "Wealthspring Investment Adviser Pvt Ltd",
    "Registration No": "INA000019761",
    "E-mail": "satish.mishra@wealthspring.in",
    "Telephone": "912267869155",
    "Fax No": "912267869155",
    "Address": "449, ResCowork 03, Level 4, Regus, Dynasty A Wing, Andheri-Kurla Road,, Andheri East, Mumbai, MUMBAI, MAHARASHTRA, 400059",
    "Contact Person": "Satish Kumar Mishra",
    "Correspondence Address": "449, ResCowork 03, Level 4, Regus, Dynasty A Wing, Andheri-Kurla Road, Andheri East, Mumbai, MUMBAI, MAHARASHTRA, 400059",
    "Validity": "Dec 27, 2024 - Perpetual"
  },
  {
    "Name": "White Oak Capital Management Consultants LLP",
    "Registration No": "INA000008659",
    "E-mail": "riddhi.gohel@whiteoakinvestors.com",
    "Telephone": "91008976840036",
    "Fax No": "91008976840036",
    "Address": "Unit 6 2B, 6th Floor, Cnergy Building, Appasaheb Marathe Marg, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Contact Person": "Riddhi Gohel",
    "Correspondence Address": "Unit 6 2B, 6th Floor, Cnergy Building, Appasaheb Marathe Marg, Prabhadevi, MUMBAI, MAHARASHTRA, 400025",
    "Correspondence E-mail": "shweta.subramanian@whiteoakindia.com",
    "Correspondence Telephone": "91-00-9819155184",
    "Correspondence Fax": "91-00-9819155184",
    "Validity": "Oct 26, 2017 - Perpetual"
  },
  {
    "Name": "White Whale Partners LLP",
    "Registration No": "INA000017301",
    "E-mail": "kvora@whitewhale.in",
    "Telephone": "9102222044159",
    "Fax No": "9102222044159",
    "Address": "206 PROSPECT CHAMBERS, D N ROAD FORT, MUMBAI, MAHARASHTRA, 400001",
    "Contact Person": "Kunal Vora",
    "Correspondence Address": "206 PROSPECT CHAMBERS, D N ROAD FORT, MUMBAI, MAHARASHTRA, 400001",
    "Validity": "Nov 03, 2022 - Perpetual"
  },
  {
    "Name": "WILLIAM O NEIL INDIA PRIVATE LIMITED",
    "Registration No": "INA200005125",
    "E-mail": "anupam.singhi@williamoneilindia.com",
    "Telephone": "8067453802",
    "Fax No": "8067453802",
    "Address": "Akshay Tech Park, Unit No 302, 3rd Floor, Plot 72 & 73, EPIP Area,, Hoodi Village, Hobli, Whitefield, Krishnarajapura, EPIP Bangalore, BANGALORE, KARNATAKA, 560066",
    "Correspondence Address": "TECHNOMARK BUILDING, A-4, NGEF ANCILLARY INDUSTRIAL ESTATE, GRAPHITE INDIA ROAD,   MAHADEVAPURA, WHITEFIELD, BANGALORE, KARNATAKA, 560048",
    "Validity": "Jul 12, 2016 - Perpetual"
  },
  {
    "Name": "Winwize Research and Advisory Private Limited",
    "Registration No": "INA000019178",
    "E-mail": "alternatetrading11@gmail.com",
    "Telephone": "91007483056572",
    "Fax No": "91007483056572",
    "Address": "9 CHANDRAMMA ARCHED GANIGARAPALYA BSK 6TH ST THALAGHATTAPURA, BANGALORE, KARNATAKA, 560109",
    "Contact Person": "Jeevan Dominic",
    "Correspondence Address": "9 CHANDRAMMA ARCHED GANIGARAPALYA BSK 6TH ST THALAGHATTAPURA, BANGALORE, KARNATAKA, 560109",
    "Validity": "Jun 20, 2024 - Perpetual"
  },
  {
    "Name": "WSIM Investment Advisors",
    "Registration No": "INA200007159",
    "E-mail": "wsimadvisors@gmail.com",
    "Address": "A-21, GULMOHAR APARTMENTS, 15-B, SOUTH BOAG ROAD, T. NAGAR, CHENNAI, TAMIL NADU, 600017",
    "Contact Person": "SUBRAMANIAN N",
    "Correspondence Address": "A-21, GULMOHAR APARTMENTS, 15-B, SOUTH BOAG ROAD, T. NAGAR, CHENNAI, TAMIL NADU, 600017",
    "Validity": "Feb 28, 2017 - Perpetual"
  },
  {
    "Name": "Yadnya Academy Private Limited",
    "Registration No": "INA000017897",
    "E-mail": "gaurav@investyadnya.in",
    "Telephone": "022917045007906",
    "Fax No": "022917045007906",
    "Address": "G703 BALWANTPURAM SAMRAJYA L5 , CTS NO 1148110 1 A KOTHRUD Pune, PUNE, MAHARASHTRA, 411038",
    "Contact Person": "Gaurav   Jain",
    "Correspondence Address": "A2 SR No.133/ 1, PL NO.16 Purva Apartment Aundh, PUNE, MAHARASHTRA, 411007",
    "Validity": "Apr 24, 2023 - Perpetual"
  },
  {
    "Name": "Yashraj Maheshwari",
    "Registration No": "INA000015057",
    "E-mail": "yashraj@abnay.com",
    "Address": "203 Wing A, Shivalik Corporate Park, , B/H IOC Pump, 132 Ft Ring Road, Satellite, AHMEDABAD, GUJARAT, 380015",
    "Contact Person": "Yashraj Maheshwari",
    "Correspondence Address": "203 Wing A, Shivalik Corporate Park, , B/H IOC Pump, 132 Ft Ring Road, Satellite, AHMEDABAD, GUJARAT, 380015",
    "Validity": "Sep 03, 2020 - Perpetual"
  },
  {
    "Name": "YES SECURITIES INDIA LIMITED",
    "Registration No": "INA000007331",
    "E-mail": "vaibhav.purohit@yessecuritiesltd.in",
    "Address": "UNIT NO 602A,6TH FLOOR,TOWER 1&2,, IFC,SENAPATI BAPAT MARG,ELPHINSTONE ROAD, MUMBAI, MAHARASHTRA, 400013",
    "Contact Person": "VAIBHAV  PUROHIT",
    "Correspondence Address": "UNIT NO 602A,6TH FLOOR,TOWER 1&2, IFC,SENAPATI BAPAT MARG,ELPHINSTONE ROAD, MUMBAI, MAHARASHTRA, 400013",
    "Validity": "Mar 20, 2017 - Perpetual"
  },
  {
    "Name": "YOGESH AJMIRE",
    "Registration No": "INA000015367",
    "E-mail": "AJMIRE89@GMAIL.COM",
    "Address": "SHOP NO.26,A.M.C MARKET,NEAR RAJAPETH POLISH STATION, BELOW HOTEL GRESS IN,RAJAPETH, AMRAVATI, MAHARASHTRA, 444607",
    "Contact Person": "YOGESH AJMIRE",
    "Correspondence Address": "SHOP NO.26,A.M.C MARKET,NEAR RAJAPETH POLISH STATION, BELOW HOTEL GRESS IN,RAJAPETH, AMRAVATI, MAHARASHTRA, 444607",
    "Validity": "Nov 03, 2020 - Perpetual"
  },
  {
    "Name": "Yogesh Kukadia Chhaganbhai",
    "Registration No": "INA000010113",
    "E-mail": "yogeshkukadiabsim@gmail.com",
    "Address": "95/898 GHB PALAN PUR PATIA , RANDER ROAD, SURAT, GUJARAT, 395009",
    "Contact Person": "Yogesh Chhaganbhai",
    "Correspondence Address": "107 PRISTINE SRI KRISHNA 2, KAMMASANDRA ROAD, BANGALORE, KARNATAKA, 560100",
    "Validity": "Mar 20, 2018 - Perpetual"
  },
  {
    "Name": "Zactor Tech Private Limited",
    "Registration No": "INA000021173",
    "E-mail": "shivam@zactortech.com",
    "Telephone": "00917697913113",
    "Fax No": "00917697913113",
    "Address": "Plot No. 293 P, Sector 12,, Panchkula, Panchkula, HARYANA, 134112",
    "Contact Person": "Vinod Parihar",
    "Correspondence Address": "Plot No. 293 P, Sector 12, Panchkula, Panchkula, HARYANA, 134112",
    "Validity": "Oct 16, 2025 - Perpetual"
  },
  {
    "Name": "Zebu Share and Wealth Managements Private Limited",
    "Registration No": "INA000017815",
    "E-mail": "exchange@zebuetrade.com",
    "Telephone": "04448557991",
    "Fax No": "04448557991",
    "Address": "No 36, VCTV Main Road, Sathy Road Erode, Tamilnadu, ERODE, TAMIL NADU, 638003",
    "Contact Person": "Vijayakumar  Vellaiyan",
    "Correspondence Address": "No. 301, 4th Main Road, Burma Colony, Perungudi, CHENNAI, TAMIL NADU, 600096",
    "Validity": "Apr 11, 2023 - Perpetual"
  },
  {
    "Name": "ZEN NIVESH ADVISORS PRIVATE LIMITED",
    "Registration No": "INA000020323",
    "E-mail": "kanodia.ankit12@gmail.com",
    "Telephone": "00919978988562",
    "Fax No": "00919978988562",
    "Address": "B202 STONE OAKS APPARTMENT, HOSA ROAD GAL JUNCTION, ELECTRONICS CITY,, BANGALORE, KARNATAKA, 560100",
    "Contact Person": "Ankit  Kanodia",
    "Correspondence Address": "B202 STONE OAKS APPARTMENT, HOSA ROAD GAL JUNCTION, ELECTRONICS CITY, BANGALORE, KARNATAKA, 560100",
    "Validity": "Jun 16, 2025 - Perpetual"
  },
  {
    "Name": "Zvest Financial Services LLP",
    "Registration No": "INA200007450",
    "E-mail": "aroraharshkumar@gmail.com",
    "Address": "No 204 E2, , LIGOURY COURT, PALMGROVE ROAD, VICTORIA LAYOUT, BANGALORE, KARNATAKA, 560047",
    "Contact Person": "Harsh Kumar",
    "Correspondence Address": "No 204 E2, , LIGOURY COURT, PALMGROVE ROAD, VICTORIA LAYOUT, BANGALORE, KARNATAKA, 560047",
    "Validity": "Apr 05, 2017 - Perpetual"
  }
]

const transformAdvisors = (data) => {
  return data.map((item) => ({
    sebi_number: item["Registration No"],
    name: item["Name"],
    email: item["E-mail"],
    phone: Number(item["Telephone"]) || null,
    address: item["Address"],
    contact_person: item["Contact Person"],
    validity: item["Validity"],
  }));
};

const insertAdvisors = async () => {
  const advisorsPayload = transformAdvisors(rawAdvisors);

  const { data, error } = await supabaseClient
    .from("advisors_react")
    .insert(advisorsPayload);

  if (error) {
    console.error("Insert failed:", error);
    return;
  }

  console.log("Inserted advisors:", data);
};

insertAdvisors();