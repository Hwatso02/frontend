import React from 'react';
import logo from './logo.svg';
import './App.css';

//Import team data
const teams = [
  {"tid": 159, "cid": 0, "did": 0, "school": "Boston College", "name": "Eagles", "abbrev": "BC", "pop": 161, "city": "Chestnut Hill", "state": "MA", "latitude": 42.330, "longitude": -71.166},
  {"tid": 105, "cid": 0, "did": 0, "school": "Clemson", "name": "Tigers", "abbrev": "CLEM", "pop": 215, "city": "Clemson", "state": "SC", "latitude": 34.678, "longitude": -82.839},
  {"tid": 109, "cid": 0, "did": 0, "school": "Florida State", "name": "Seminoles", "abbrev": "FSU", "pop": 211, "city": "Tallahassee", "state": "FL", "latitude": 30.442, "longitude": -84.298},
  {"tid": 18, "cid": 0, "did": 0, "school": "Louisville", "name": "Cardinals", "abbrev": "UL", "pop": 302, "city": "Louisville", "state": "KY", "latitude": 38.25, "longitude": -85.766},
  {"tid": 31, "cid": 0, "did": 0, "school": "North Carolina State", "name": "Wolfpack", "abbrev": "NCST", "pop": 289, "city": "Raleigh", "state": "NC", "latitude": 35.786 , "longitude": -78.682},
  {"tid": 9, "cid": 0, "did": 0, "school": "Notre Dame", "name": "Fighting Irish", "abbrev": "ND", "pop": 311, "city": "South Bend", "state": "IN", "latitude": 41.672, "longitude": -86.255},
  {"tid": 66, "cid": 0, "did": 0, "school": "Syracuse", "name": "Orange", "abbrev": "CUSE", "pop": 254, "city": "Syracuse", "state": "NY", "latitude": 43.046 , "longitude": -76.144},
  {"tid": 141, "cid": 0, "did": 0, "school": "Wake Forest", "name": "Demon Deacons", "abbrev": "WAKE", "pop": 179, "city": "Winston-Salem", "state": "NC", "latitude": 36.102, "longitude": -80.260},
  {"tid": 0, "cid": 0, "did": 1, "school": "Duke", "name": "Blue Devils", "abbrev": "DUKE", "pop": 320, "city": "Durham ", "state": "NC", "latitude": 35.988, "longitude": -78.907},
  {"tid": 145, "cid": 0, "did": 1, "school": "Georgia Tech", "name": "Yellow Jackets", "abbrev": "GT", "pop": 175, "city": "Atlanta", "state": "GA", "latitude": 33.775, "longitude":  -84.394},
  {"tid": 47, "cid": 0, "did": 1, "school": "Miami", "name": "Hurricanes ", "abbrev": "CANES", "pop": 273, "city": "Coral Gables", "state": "FL", "latitude": 25.75, "longitude": -80.271},
  {"tid": 8, "cid": 0, "did": 1, "school": "North Carolina", "name": "Tar Heels", "abbrev": "UNC", "pop": 312, "city": "Chapel Hill", "state": "NC", "latitude": 35.933, "longitude": -79.033},
  {"tid": 76, "cid": 0, "did": 1, "school": "Pittsburgh", "name": "Panthers", "abbrev": "PITT", "pop": 244, "city": "Pittsburgh", "state": "PA", "latitude": 40.439, "longitude": -79.976},
  {"tid": 6, "cid": 0, "did": 1, "school": "Virginia", "name": "Cavaliers", "abbrev": "UVA", "pop": 314, "city": "Charlottesville", "state": "VA", "latitude": 38.03, "longitude": -78.478},
  {"tid": 220, "cid": 0, "did": 1, "school": "Virginia Tech", "name": "Hokies", "abbrev": "VT", "pop": 100, "city": "Blacksburg", "state": "VA", "latitude": 37.23, "longitude": -80.417},
  {"tid": 90, "cid": 0, "did": 1, "school": "Northeastern", "name": "Huskies", "abbrev": "NEAST", "pop": 230, "city": "Boston", "state": "MA", "latitude": 42.358, "longitude": -71.063},
  {"tid": 62, "cid": 1, "did": 2, "school": "Indiana", "name": "Hoosiers", "abbrev": "IND", "pop": 258, "city": "Bloomington", "state": "IN", "latitude": 39.162, "longitude": -86.529},
  {"tid": 13, "cid": 1, "did": 2, "school": "Maryland", "name": "Terrapins", "abbrev": "MD", "pop": 307, "city": "College Park", "state": "MD", "latitude": 38.997, "longitude": -76.927},
  {"tid": 78, "cid": 1, "did": 2, "school": "Michigan", "name": "Wolverines", "abbrev": "MICH", "pop": 242, "city": "Ann Arbor", "state": "MI", "latitude": 42.281, "longitude": -83.748},
  {"tid": 14, "cid": 1, "did": 2, "school": "Michigan State", "name": "Spartans", "abbrev": "MSU", "pop": 306, "city": "East Lansing", "state": "MI", "latitude": 42.734, "longitude": -84.480},
  {"tid": 37, "cid": 1, "did": 2, "school": "Ohio State", "name": "Buckeyes", "abbrev": "OSU", "pop": 283, "city": "Columbus", "state": "OH", "latitude": 39.983, "longitude": -82.983},
  {"tid": 108, "cid": 1, "did": 2, "school": "Penn State", "name": "Nittany Lions", "abbrev": "PSU", "pop": 212, "city": "University Park", "state": "PA", "latitude": 40.796, "longitude": -77.862},
  {"tid": 179, "cid": 1, "did": 2, "school": "Rutgers", "name": "Scarlet Knights", "abbrev": "RUTG", "pop": 141, "city": "New Brunswick", "state": "NJ", "latitude": 40.486, "longitude": -74.444},
  {"tid": 213, "cid": 1, "did": 2, "school": "IPFW", "name": "Mastodons", "abbrev": "IPFW", "pop": 107, "city": "Fort Wayne", "state": "IN", "latitude": 41.118, "longitude": -85.109},
  {"tid": 77, "cid": 1, "did": 3, "school": "Illinois", "name": "Fighting Illini", "abbrev": "ILL", "pop": 243, "city": "Champaign", "state": "IL", "latitude": 40.115, "longitude": -88.272},
  {"tid": 39, "cid": 1, "did": 3, "school": "Iowa", "name": "Hawkeyes", "abbrev": "IOWA", "pop": 281, "city": "Iowa City", "state": "IA", "latitude": 41.666, "longitude": -91.533},
  {"tid": 100, "cid": 1, "did": 3, "school": "Minnesota", "name": "Golden Gophers", "abbrev": "MINN", "pop": 220, "city": "Minneapolis", "state": "MN", "latitude": 44.98, "longitude": -93.264},
  {"tid": 153, "cid": 1, "did": 3, "school": "Nebraska", "name": "Cornhuskers", "abbrev": "NEB", "pop": 167, "city": "Lincoln", "state": "NE", "latitude": 40.810, "longitude": -96.680},
  {"tid": 129, "cid": 1, "did": 3, "school": "Northwestern", "name": "Wildcats", "abbrev": "NW", "pop": 191, "city": "Evanston", "state": "IL", "latitude": 42.046, "longitude": -87.694},
  {"tid": 61, "cid": 1, "did": 3, "school": "Purdue", "name": "Boilermakers", "abbrev": "PUR", "pop": 259, "city": "West Lafayette", "state": "IN", "latitude": 40.441, "longitude": -86.912},
  {"tid": 1, "cid": 1, "did": 3, "school": "Wisconsin", "name": "Badgers", "abbrev": "WISC", "pop": 319, "city": "Madison", "state": "WI", "latitude": 43.066, "longitude": -89.4},
  {"tid": 256, "cid": 1, "did": 3, "school": "IUPUI", "name": "Jaguars", "abbrev": "IUPUI", "pop": 64, "city": "Indianapolis", "state": "IN", "latitude": 39.774, "longitude": -86.176},
  {"tid": 68, "cid": 2, "did": 4, "school": "Florida", "name": "Gators", "abbrev": "FLA", "pop": 252, "city": "Gainesville", "state": "FL", "latitude": 29.652 , "longitude": -82.325},
  {"tid": 43, "cid": 2, "did": 4, "school": "Georgia", "name": "Bulldogs", "abbrev": "UGA", "pop": 277, "city": "Athens", "state": "GA", "latitude": 33.95, "longitude": -83.383},
  {"tid": 2, "cid": 2, "did": 4, "school": "Kentucky", "name": "Wildcats", "abbrev": "UK", "pop": 318, "city": "Lexington", "state": "KY", "latitude": 38.029, "longitude": -84.494},
  {"tid": 216, "cid": 2, "did": 4, "school": "Missouri", "name": "Tigers", "abbrev": "MIZZ", "pop": 104, "city": "Columbia", "state": "MO", "latitude": 38.951, "longitude": -92.328},
  {"tid": 96, "cid": 2, "did": 4, "school": "South Carolina", "name": "Gamecocks", "abbrev": "SCAR", "pop": 224, "city": "Columbia", "state": "SC", "latitude": 34.029, "longitude": -80.896},
  {"tid": 101, "cid": 2, "did": 4, "school": "Tennessee", "name": "Volunteers", "abbrev": "TENN", "pop": 219, "city": "Knoxville", "state": "TN", "latitude": 35.972, "longitude": -83.942},
  {"tid": 87, "cid": 2, "did": 4, "school": "Vanderbilt", "name": "Commodores", "abbrev": "VANDY", "pop": 233, "city": "Nashville", "state": "TN", "latitude": 36.166, "longitude": -86.783},
  {"tid": 319, "cid": 2, "did": 4, "school": "South Carolina State", "name": "Bulldogs", "abbrev": "SCSU", "pop": 1, "city": "Orangeburg", "state": "SC", "latitude": 33.497, "longitude": -80.85},
  {"tid": 79, "cid": 2, "did": 5, "school": "Alabama", "name": "Crimson Tide", "abbrev": "BAMA", "pop": 241, "city": "Tuscaloosa", "state": "AL", "latitude": 33.206, "longitude": -87.534},
  {"tid": 22, "cid": 2, "did": 5, "school": "Arkansas", "name": "Razorbacks", "abbrev": "ARK", "pop": 298, "city": "Fayetteville", "state": "AR", "latitude": 36.076, "longitude": -94.160}, 
  {"tid": 131, "cid": 2, "did": 5, "school": "Auburn", "name": "Tigers", "abbrev": "AUB", "pop": 189, "city": "Auburn", "state": "AL", "latitude": 32.597, "longitude": -85.480},
  {"tid": 64, "cid": 2, "did": 5, "school": "Louisana State", "name": "Tigers", "abbrev": "LSU", "pop": 256, "city": "Baton Rouge", "state": "LA", "latitude": 30.450, "longitude": -91.140},
  {"tid": 56, "cid": 2, "did": 5, "school": "Mississippi", "name": "Rebels", "abbrev": "MISS", "pop": 264, "city": "Oxford", "state": "MS", "latitude": 34.359, "longitude": -89.526},
  {"tid": 214, "cid": 2, "did": 5, "school": "Mississippi State", "name": "Bulldogs", "abbrev": "MSST", "pop": 106, "city": "Starkville", "state": "MS", "latitude": 33.462, "longitude": -88.820},
  {"tid": 67, "cid": 2, "did": 5, "school": "Texas A&M", "name": "Aggies", "abbrev": "TAMU", "pop": 253, "city": "College Station", "state": "TX", "latitude": 30.601, "longitude": -96.314},
  {"tid": 128, "cid": 2, "did": 5, "school": "NC-Central", "name": "Eagles", "abbrev": "NCCENT", "pop": 192, "city": "Durham", "state": "NC", "latitude": 35.974, "longitude": -78.898},			
  {"tid": 92, "cid": 3, "did": 6, "school": "California", "name": "Golden Bears", "abbrev": "CAL", "pop": 228, "city": "Berkeley", "state": "CA", "latitude": 37.871, "longitude": -122.272},
  {"tid": 26, "cid": 3, "did": 6, "school": "Oregon", "name": "Ducks", "abbrev": "ORE", "pop": 294, "city": "Eugene", "state": "OR", "latitude": 44.051, "longitude": -123.086},
  {"tid": 132, "cid": 3, "did": 6, "school": "Oregon State", "name": "Beavers", "abbrev": "OREST", "pop": 188, "city": "Corvallis", "state": "OR", "latitude": 44.566, "longitude": -123.283},
  {"tid": 33, "cid": 3, "did": 6, "school": "Stanford", "name": "Cardinal", "abbrev": "STAN", "pop": 287, "city": "Stanford", "state": "CA", "latitude": 37.430, "longitude": -122.170},
  {"tid": 119, "cid": 3, "did": 6, "school": "Washington", "name": "Huskies", "abbrev": "WASH", "pop": 201, "city": "Seattle", "state": "WA", "latitude": 47.609, "longitude": -122.333},
  {"tid": 160, "cid": 3, "did": 6, "school": "Washington State", "name": "Cougars", "abbrev": "WASHST", "pop": 160, "city": "Pullman", "state": "WA", "latitude": 46.733, "longitude": -117.166},
  {"tid": 232, "cid": 3, "did": 6, "school": "Denver", "name": "Pioneers", "abbrev": "DENV", "pop": 88, "city": "Denver", "state": "CO", "latitude": 39.678, "longitude": -104.962},
  {"tid": 25, "cid": 3, "did": 6, "school": "San Diego State", "name": "Aztecs", "abbrev": "SDST", "pop": 295, "city": "San Diego", "state": "CA", "latitude": 37.215, "longitude": -117.162},
  {"tid": 3, "cid": 3, "did": 7, "school": "Arizona", "name": "Wildcats", "abbrev": "ARIZ", "pop": 317, "city": "Tucson", "state": "AZ", "latitude": 32.221, "longitude": -110.926},
  {"tid": 89, "cid": 3, "did": 7, "school": "Arizona State", "name": "Sun Devils", "abbrev": "ASU", "pop": 231, "city": "Tempe", "state": "AZ", "latitude": 33.429, "longitude": -111.943},
  {"tid": 117, "cid": 3, "did": 7, "school": "Colorado", "name": "Buffaloes", "abbrev": "COLO", "pop": 203, "city": "Boulder", "state": "CO", "latitude": 40.027, "longitude": -105.251},
  {"tid": 38, "cid": 3, "did": 7, "school": "UCLA", "name": "Bruins", "abbrev": "UCLA", "pop": 282, "city": "Los Angeles", "state": "CA", "latitude": 34.050, "longitude": -118.250},
  {"tid": 196, "cid": 3, "did": 7, "school": "USC", "name": "Trojans", "abbrev": "USC", "pop": 124, "city": "Los Angeles", "state": "CA", "latitude": 34.050, "longitude": -118.250},
  {"tid": 12, "cid": 3, "did": 7, "school": "Utah", "name": "Utes", "abbrev": "Utah", "pop": 308, "city": "Salt Lake City", "state": "UT", "latitude": 61.218, "longitude": -149.9},
  {"tid": 36, "cid": 3, "did": 7, "school": "Colorado State", "name": "Rams", "abbrev": "COLOST", "pop": 284, "city": "Fort Collins", "state": "CO", "latitude": 40.559, "longitude": -105.078},
  {"tid": 45, "cid": 3, "did": 7, "school": "Boise State", "name": "Broncos", "abbrev": "BOISE", "pop": 275, "city": "Boise", "state": "ID", "latitude": 43.616, "longitude": -116.200},
  {"tid": 16, "cid": 4, "did": 8, "school": "Baylor", "name": "Bears", "abbrev": "BAYL", "pop": 304, "city": "Waco", "state": "TX", "latitude": 31.551, "longitude": -97.155},
  {"tid": 15, "cid": 4, "did": 8, "school": "Iowa State", "name": "Cyclones", "abbrev": "IOWAST", "pop": 305, "city": "Ames", "state": "IA", "latitude": 42.034, "longitude": -93.620},
  {"tid": 4, "cid": 4, "did": 8, "school": "Kansas", "name": "Jayhawks", "abbrev": "KU", "pop": 316, "city": "Lawrence", "state": "KS", "latitude": 38.971, "longitude": -95.235},
  {"tid": 107, "cid": 4, "did": 8, "school": "Kansas State", "name": "Wildcats", "abbrev": "KSU", "pop": 213, "city": "Manhattan", "state": "KS", "latitude": 39.191, "longitude": -96.591},
  {"tid": 19, "cid": 4, "did": 8, "school": "Oklahoma", "name": "Sooners", "abbrev": "OKLA", "pop": 301, "city": "Norman", "state": "OK", "latitude": 35.220, "longitude": -97.440},
  {"tid": 55, "cid": 4, "did": 8, "school": "Valparaiso", "name": "Crusaders", "abbrev": "VALPO", "pop": 265, "city": "Valparaiso", "state": "IN", "latitude": 41.463, "longitude":  -87.043},
  {"tid": 59, "cid": 4, "did": 8, "school": "Green Bay", "name": "Phoenix", "abbrev": "UWGB", "pop": 261, "city": "Green Bay", "state": "WI", "latitude": 44.513, "longitude": -88.015},
  {"tid": 127, "cid": 4, "did": 8, "school": "Cleveland State", "name": "Vikings", "abbrev": "CLEVST", "pop": 193, "city": "Cleveland", "state": "OH", "latitude": 41.501, "longitude": -81.675},
  {"tid": 58, "cid": 4, "did": 9, "school": "Oklahoma State", "name": "Cowboys", "abbrev": "OKLAST", "pop": 262, "city": "Stillwater", "state": "OK", "latitude": 36.115, "longitude":  -97.058},
  {"tid": 134, "cid": 4, "did": 9, "school": "TCU", "name": "Horned Frogs", "abbrev": "TCU", "pop": 186, "city": "Fort Worth", "state": "TX", "latitude": 32.757, "longitude": -97.333},
  {"tid": 50, "cid": 4, "did": 9, "school": "Texas", "name": "Longhorns", "abbrev": "TEXAS", "pop": 270, "city": "Austin", "state": "TX", "latitude": 30.250, "longitude": -97.750},
  {"tid": 183, "cid": 4, "did": 9, "school": "Texas Tech", "name": "Red Raiders", "abbrev": "TT", "pop": 137, "city": "Lubbock", "state": "TX", "latitude": 33.566, "longitude": -101.883},
  {"tid": 21, "cid": 4, "did": 9, "school": "West Virginia", "name": "Mountaineers", "abbrev": "WVU", "pop": 299, "city": "Morgantown", "state": "WV", "latitude": 39.633, "longitude": -79.950},
  {"tid": 169, "cid": 4, "did": 9, "school": "Oakland", "name": "Golden Grizzlies", "abbrev": "OAK", "pop": 151, "city": "Rochester", "state": "MI", "latitude": 42.672, "longitude": -83.215},
  {"tid": 207, "cid": 4, "did": 9, "school": "Milwaukee", "name": "Panthers", "abbrev": "UWMIL", "pop": 113, "city": "Milwaukee", "state": "WI", "latitude": 43.075, "longitude": -87.882},
  {"tid": 205, "cid": 4, "did": 9, "school": "Detroit", "name": "Titans", "abbrev": "DET", "pop": 115, "city": "Detroit", "state": "MI", "latitude": 42.414, "longitude": -83.137},
  {"tid": 53, "cid": 5, "did": 10, "school": "Georgia State", "name": "Panthers", "abbrev": "GAST", "pop": 267, "city": "Atlanta", "state": "GA", "latitude": 33.755, "longitude": -84.390}, 
  {"tid": 123, "cid": 5, "did": 10, "school": "Louisiana Monroe", "name": "War Hawks", "abbrev": "ULM", "pop": 197, "city": "Monroe", "state": "LA", "latitude": 32.509, "longitude": -92.118},
  {"tid": 177, "cid": 5, "did": 10, "school": "UT-Arlington", "name": "Mavericks", "abbrev": "UTARL", "pop": 143, "city": "Arlington", "state": "TX", "latitude": 32.705, "longitude": -97.122}, 
  {"tid": 269, "cid": 5, "did": 10, "school": "South Alabama", "name": "Jaguars", "abbrev": "SOALA", "pop": 51, "city": "Mobile", "state": "AL", "latitude": 30.694, "longitude": -88.043}, 
  {"tid": 231, "cid": 5, "did": 10, "school": "Texas State", "name": "Bobcats", "abbrev": "TEXST", "pop": 89, "city": "San Marcos", "state": "TX", "latitude": 29.879, "longitude": -97.938}, 
  {"tid": 310, "cid": 5, "did": 10, "school": "Troy", "name": "Trojans", "abbrev": "TROY", "pop": 10, "city": "Troy", "state": "AL", "latitude": 31.808, "longitude": -85.970}, 
  {"tid": 264, "cid": 5, "did": 10, "school": "Elon", "name": "Phoenix", "abbrev": "ELON", "pop": 56, "city": "Elon", "state": "NC", "latitude": 36.107, "longitude": -79.501}, 
  {"tid": 301, "cid": 5, "did": 10, "school": "Charleston", "name": "Cougars", "abbrev": "CHAR", "pop": 19, "city": "Charleston", "state": "SC", "latitude": 32.783, "longitude": -79.933}, 
  {"tid": 110, "cid": 5, "did": 11, "school": "Georgia Southern", "name": "Eagles", "abbrev": "GASO", "pop": 210, "city": "Statesboro", "state": "GA", "latitude": 32.445, "longitude": -81.779} ,
  {"tid": 121, "cid": 5, "did": 11, "school": "Louisiana Layayette", "name": "Ragin' Cajuns", "abbrev": "LALAF", "pop": 199, "city": "Lafayette", "state": "LA", "latitude": 30.216, "longitude": -92.033} ,
  {"tid": 241, "cid": 5, "did": 11, "school": "Appalachian State", "name": "Mountaineers", "abbrev": "APPST", "pop": 79, "city": "Boone", "state": "NC", "latitude": 36.211, "longitude": -81.668} ,
  {"tid": 274, "cid": 5, "did": 11, "school": "Arkansas-Little Rock", "name": "Trojans", "abbrev": "UALR", "pop": 46, "city": "Little Rock", "state": "AR", "latitude": 34.736, "longitude": -92.331} ,
  {"tid": 276, "cid": 5, "did": 11, "school": "Arkansas State", "name": "Red Wolves", "abbrev": "ARKST", "pop": 44, "city": "Jonesboro", "state": "AR", "latitude": 35.828, "longitude": -90.694}, 
  {"tid": 150, "cid": 5, "did": 11, "school": "UNC-Wilmington", "name": "Sweahawks", "abbrev": "NCWILM", "pop": 170, "city": "Wilmington", "state": "NC", "latitude": 34.226, "longitude": -77.878}, 
  {"tid": 308, "cid": 5, "did": 11, "school": "UNC-Greensboro", "name": "Spartans", "abbrev": "UNCG", "pop": 12, "city": "Greensboro", "state": "NC", "latitude": 36.069, "longitude": -79.811}, 
  {"tid": 300, "cid": 5, "did": 11, "school": "Jacksonville State", "name": "Gamecocks", "abbrev": "JVILLE", "pop": 20, "city": "Jacksonville", "state": "AL", "latitude": 33.815 , "longitude": -85.760},
  {"tid": 72, "cid": 6, "did": 12, "school": "Eastern Washington", "name": "Eagles", "abbrev": "EWASH", "pop": 248, "city": "Cheney", "state": "WA", "latitude": 47.488, "longitude": -117.578}, 
  {"tid": 139, "cid": 6, "did": 12, "school": "Sacramento State", "name": "Hornets", "abbrev": "SACST", "pop": 181, "city": "Sacramento", "state": "CA", "latitude": 38.555, "longitude": -121.468}, 
  {"tid": 239, "cid": 6, "did": 12, "school": "Northern Colorado", "name": "Bears", "abbrev": "NOCOL", "pop": 81, "city": "Greeley", "state": "CO", "latitude": 40.416, "longitude": -104.716}, 
  {"tid": 266, "cid": 6, "did": 12, "school": "Idaho", "name": "Vandals", "abbrev": "UI", "pop": 54, "city": "Moscow", "state": "ID", "latitude": 46.730, "longitude": -117.000}, 
  {"tid": 302, "cid": 6, "did": 12, "school": "Southern Utah", "name": "Thunderbirds", "abbrev": "SUU", "pop": 18, "city": "Cedar City", "state": "UT", "latitude": 37.682, "longitude": -113.074}, 
  {"tid": 313, "cid": 6, "did": 12, "school": "Cal State-Fullerton", "name": "Titans", "abbrev": "FULL", "pop": 7, "city": "Fullerton", "state": "CA", "latitude": 33.880, "longitude": -117.885}, 
  {"tid": 249, "cid": 6, "did": 12, "school": "Pacific", "name": "Boxers", "abbrev": "PAC", "pop": 71, "city": "Forest Grove", "state": "OR", "latitude": 45.521, "longitude":  -123.108},
  {"tid": 267, "cid": 6, "did": 12, "school": "Loyola Marymount", "name": "Lions", "abbrev": "LMULA", "pop": 53, "city": "Los Angeles", "state": "CA", "latitude": 33.97, "longitude": -118.418},
  {"tid": 142, "cid": 6, "did": 13, "school": "Montana", "name": "Grizzlies", "abbrev": "MONT", "pop": 178, "city": "Missoula", "state": "MT", "latitude": 46.862, "longitude": -114.011},
  {"tid": 124, "cid": 6, "did": 13, "school": "Northern Arizona", "name": "Lumberjacks", "abbrev": "NAU", "pop": 196, "city": "Flagstaff", "state": "AZ", "latitude": 35.199, "longitude": -111.631},
  {"tid": 219, "cid": 6, "did": 13, "school": "Portland State", "name": "Vikings", "abbrev": "PORTST", "pop": 101, "city": "Portland", "state": "OR", "latitude": 45.520, "longitude": -122.681},
  {"tid": 259, "cid": 6, "did": 13, "school": "Weber State", "name": "Wildcats", "abbrev": "WEBER", "pop": 61, "city": "Ogden", "state": "UT", "latitude": 41.227, "longitude": -111.961},
  {"tid": 306, "cid": 6, "did": 13, "school": "North Dakota", "name": "", "abbrev": "NDU", "pop": 14, "city": "Grand Forks", "state": "ND", "latitude": 47.925, "longitude": -97.032},
  {"tid": 93, "cid": 6, "did": 13, "school": "North Dakota State", "name": "Bisons", "abbrev": "NDSU", "pop": 227, "city": "Fargo", "state": "ND", "latitude": 46.891, "longitude": -96.8},
  {"tid": 84, "cid": 6, "did": 13, "school": "South Dakota State", "name": "Jackrabbits", "abbrev": "SDAKST", "pop": 236, "city": "Brookings", "state": "SD", "latitude": 44.318, "longitude": -96.783},
  {"tid": 209, "cid": 6, "did": 13, "school": "South Dakota", "name": "Coyotes", "abbrev": "SDAK", "pop": 111, "city": "Vermillion", "state": "SD", "latitude": 42.786, "longitude": -96.925},
  {"tid": 114, "cid": 7, "did": 14, "school": "Texas Southern", "name": "Tigers", "abbrev": "TXSO", "pop": 206, "city": "Houston", "state": "TX", "latitude": 29.760, "longitude": -95.369},
  {"tid": 252, "cid": 7, "did": 14, "school": "Alabama State", "name": "Hornets", "abbrev": "ALAST", "pop": 68, "city": "Montgomery", "state": "AL", "latitude": 32.361, "longitude": -86.279},
  {"tid": 226, "cid": 7, "did": 14, "school": "Southern", "name": "Jaguars", "abbrev": "SU", "pop": 94, "city": "Baton Rouge", "state": "LA", "latitude": 30.450, "longitude": -91.140},
  {"tid": 260, "cid": 7, "did": 14, "school": "Prairie View A&M", "name": "Panthers", "abbrev": "PV", "pop": 60, "city": "Prairie View", "state": "TX", "latitude": 30.082, "longitude": -95.991},
  {"tid": 296, "cid": 7, "did": 14, "school": "Arkansas-Pine Bluff", "name": "Golden Lions", "abbrev": "UAPB", "pop": 24, "city": "Pine Bluff", "state": "AR", "latitude": 34.216, "longitude": -92.016},
  {"tid": 315, "cid": 7, "did": 14, "school": "Jackson State", "name": "Tigers", "abbrev": "JACKST", "pop": 5, "city": "Jackson", "state": "MS", "latitude": 32.298, "longitude": -90.184},
  {"tid": 34, "cid": 7, "did": 14, "school": "Stephen F Austin", "name": "Lumberjacks", "abbrev": "SFA", "pop": 286, "city": "Nacogdoches", "state": "TX", "latitude": 31.608 , "longitude": -94.650},
  {"tid": 94, "cid": 7, "did": 14, "school": "Sam Houston State", "name": "Bearkats", "abbrev": "SHSU", "pop": 226, "city": "Huntsville", "state": "TX", "latitude": 30.723 , "longitude": -95.551},		
  {"tid": 106, "cid": 7, "did": 15, "school": "New Mexico State", "name": "Aggies", "abbrev": "NMSU", "pop": 214, "city": "Las Cruces", "state": "NM", "latitude": 32.314, "longitude": -106.778},
  {"tid": 277, "cid": 7, "did": 15, "school": "Grand Canyon", "name": "Lopes", "abbrev": "GCU", "pop": 43, "city": "Phoenix", "state": "AZ", "latitude": 33.450, "longitude": -112.066},
  {"tid": 291, "cid": 7, "did": 15, "school": "Missouri-Kansas City", "name": "Kangaroos", "abbrev": "UMKC", "pop": 29, "city": "Kansas City", "state": "MO", "latitude": 39.099, "longitude": -94.578},
  {"tid": 268, "cid": 7, "did": 15, "school": "Seattle", "name": "Redhawks", "abbrev": "SEA", "pop": 52, "city": "Seattle", "state": "WA", "latitude": 47.609, "longitude": -122.333},
  {"tid": 299, "cid": 7, "did": 15, "school": "CSU Bakersfield", "name": "Roadrunners", "abbrev": "CSUB", "pop": 21, "city": "Bakersfield", "state": "CA", "latitude": 35.366, "longitude": -119.016},
  {"tid": 307, "cid": 7, "did": 15, "school": "Utah Valley", "name": "Wolverines", "abbrev": "UVU", "pop": 13, "city": "Orem", "state": "UT", "latitude": 40.298, "longitude": -111.696},
  {"tid": 201, "cid": 7, "did": 15, "school": "Texas A&M-CC", "name": "Islanders", "abbrev": "TAMUCC", "pop": 119, "city": "Corpus Christi", "state": "TX", "latitude": 27.742 , "longitude": -97.401},
  {"tid": 171, "cid": 7, "did": 15, "school": "Incarnate Word", "name": "Cardinals", "abbrev": "UIW", "pop": 149, "city": "San Antonio", "state": "TX", "latitude": 29.416 , "longitude": -98.500},
  {"tid": 7, "cid": 8, "did": 16, "school": "Gonzaga", "name": "Bulldogs", "abbrev": "GONZ", "pop": 313, "city": "Spokane", "state": "WA", "latitude": 47.658, "longitude": -117.425},
  {"tid": 42, "cid": 8, "did": 16, "school": "Brigham Young", "name": "Cougars", "abbrev": "BYU", "pop": 278, "city": "Provo", "state": "UT", "latitude": 40.244, "longitude": -111.660},
  {"tid": 75, "cid": 8, "did": 16, "school": "Saint Mary's", "name": "Gaels", "abbrev": "STMARY", "pop": 245, "city": "Moraga", "state": "CA", "latitude": 37.835, "longitude": -122.129},
  {"tid": 148, "cid": 8, "did": 16, "school": "Pepperdine", "name": "Waves", "abbrev": "PEPP", "pop": 172, "city": "Malibu", "state": "CA", "latitude": 34.030, "longitude": -118.750},
  {"tid": 162, "cid": 8, "did": 16, "school": "San Diego", "name": "Toreros", "abbrev": "USD", "pop": 158, "city": "San Diego", "state": "CA", "latitude": 32.715, "longitude": -111.162},
  {"tid": 164, "cid": 8, "did": 16, "school": "Portland", "name": "Pilots", "abbrev": "PORT", "pop": 156, "city": "Portland", "state": "OR", "latitude": 45.520, "longitude": -122.681},
  {"tid": 184, "cid": 8, "did": 16, "school": "San Francisco", "name": "Dons", "abbrev": "SANFRAN", "pop": 136, "city": "San Francisco", "state": "CA", "latitude": 37.783, "longitude": -122.416},
  {"tid": 208, "cid": 8, "did": 16, "school": "Santa Clara", "name": "Broncos", "abbrev": "CLARA", "pop": 112, "city": "Santa Clara", "state": "CA", "latitude": 37.354, "longitude": -121.969},
  {"tid": 284, "cid": 8, "did": 17, "school": "CS Northridge", "name": "Matadors", "abbrev": "CSUN", "pop": 36, "city": "Los Angeles", "state": "CA", "latitude": 34.050, "longitude": -118.250},
  {"tid": 70, "cid": 8, "did": 17, "school": "UC Davis", "name": "Aggies", "abbrev": "UCDAV", "pop": 250, "city": "Davis", "state": "CA", "latitude": 38.553, "longitude": -121.738},
  {"tid": 95, "cid": 8, "did": 17, "school": "UC Irvine", "name": "Anteaters", "abbrev": "UCIRV", "pop": 225, "city": "Irvine", "state": "CA", "latitude": 33.669, "longitude": -117.823},
  {"tid": 97, "cid": 8, "did": 17, "school": "UC Santa Barbara", "name": "Gauchos", "abbrev": "UCBAR", "pop": 223, "city": "Santa Barbara", "state": "CA", "latitude": 34.425, "longitude": -119.714},
  {"tid": 116, "cid": 8, "did": 17, "school": "Long Beach State", "name": "49ers", "abbrev": "LBSU", "pop": 204, "city": "Long Beach", "state": "CA", "latitude": 33.768, "longitude": -118.195},
  {"tid": 156, "cid": 8, "did": 17, "school": "Hawaii", "name": "Rainbow Warriors", "abbrev": "UHI", "pop": 164, "city": "Honolulu", "state": "HI", "latitude": 21.300, "longitude": -157.816},
  {"tid": 237, "cid": 8, "did": 17, "school": "UC Riverside", "name": "Highlanders", "abbrev": "UCRIV", "pop": 83, "city": "Riverside", "state": "CA", "latitude": 33.948, "longitude": -117.396},
  {"tid": 203, "cid": 8, "did": 17, "school": "Cal Poly", "name": "Mustangs", "abbrev": "CPSU", "pop": 117, "city": "San Luis Obispo", "state": "CA", "latitude": 35.274, "longitude": -120.663},
  {"tid": 137, "cid": 9, "did": 18, "school": "Bucknell", "name": "Bison", "abbrev": "BUCK", "pop": 183, "city": "Lewisburg", "state": "PA", "latitude": 40.954, "longitude": -76.883},  
  {"tid": 193, "cid": 9, "did": 18, "school": "Colgate", "name": "Raiders", "abbrev": "COLG", "pop": 127, "city": "Hamilton", "state": "NY", "latitude": 42.819, "longitude": -75.536},
  {"tid": 174, "cid": 9, "did": 18, "school": "Lehigh", "name": "Mountain Hawks", "abbrev": "LEH", "pop": 146, "city": "Bethlehem", "state": "PA", "latitude": 40.607, "longitude": -75.379},
  {"tid": 198, "cid": 9, "did": 18, "school": "Boston", "name": "Terriers", "abbrev": "BOS", "pop": 122, "city": "Boston", "state": "MA", "latitude": 42.349, "longitude": -71.099},
  {"tid": 136, "cid": 9, "did": 18, "school": "American", "name": "Eagles", "abbrev": "AMER", "pop": 184, "city": "Washington", "state": "DC", "latitude": 38.937, "longitude": -77.086},
  {"tid": 118, "cid": 9, "did": 18, "school": "Lafayette", "name": "Leopards", "abbrev": "LAF", "pop": 202, "city": "Easton", "state": "PA", "latitude": 40.698, "longitude": -75.208},
  {"tid": 247, "cid": 9, "did": 18, "school": "Navy", "name": "Midshipmen", "abbrev": "NAVY", "pop": 73, "city": "Annapolis", "state": "MD", "latitude": 38.983, "longitude": -76.485},
  {"tid": 233, "cid": 9, "did": 18, "school": "Army", "name": "Black Knights", "abbrev": "ARMY", "pop": 87, "city": "West Point", "state": "NY", "latitude": 41.392, "longitude": -73.958},
  {"tid": 103, "cid": 9, "did": 19, "school": "Albany", "name": "Great Danes", "abbrev": "ALB", "pop": 217, "city": "Albany", "state": "NY", "latitude": 42.686, "longitude": -73.823},  
  {"tid": 112, "cid": 9, "did": 19, "school": "Stony Brook", "name": "Sea Wolves", "abbrev": "STONY", "pop": 208, "city": "Stony Brook", "state": "NY", "latitude": 40.914, "longitude": -73.116},
  {"tid": 178, "cid": 9, "did": 19, "school": "Vermont", "name": "Catamounts", "abbrev": "VERM", "pop": 142, "city": "Burlington", "state": "VT", "latitude": 44.477, "longitude": -73.193},
  {"tid": 194, "cid": 9, "did": 19, "school": "New Hampshire", "name": "Wildcats", "abbrev": "UNH", "pop": 126, "city": "Durham", "state": "NH", "latitude": 43.135, "longitude": -70.933},
  {"tid": 245, "cid": 9, "did": 19, "school": "Hartford", "name": "Hawks", "abbrev": "HART", "pop": 75, "city": "West Hartford", "state": "CT", "latitude": 41.800, "longitude": -72.714},
  {"tid": 261, "cid": 9, "did": 19, "school": "UMass-Lowell", "name": "River Hawks", "abbrev": "UML", "pop": 59, "city": "Lowell", "state": "MA", "latitude": 42.642, "longitude": -71.334},
  {"tid": 163, "cid": 9, "did": 19, "school": "Saint Francis (NY)", "name": "Terriers", "abbrev": "STFRAN", "pop": 157, "city": "Brooklyn Heights", "state": "NY", "latitude": 40.693, "longitude": -73.991},
  {"tid": 187, "cid": 9, "did": 19, "school": "Bryant", "name": "Bulldogs", "abbrev": "BRY", "pop": 133, "city": "Smithfield", "state": "RI", "latitude": 41.925, "longitude": -71.532},
  {"tid": 5, "cid": 10, "did": 20, "school": "Villanova", "name": "Wildcats", "abbrev": "NOVA", "pop": 315, "city": "Philadelphia", "state": "PA", "latitude": 39.950, "longitude": -75.166},
  {"tid": 23, "cid": 10, "did": 20, "school": "Georgetown", "name": "Hoyas", "abbrev": "HOYAS", "pop": 297, "city": "Washington", "state": "DC", "latitude": 38.904, "longitude": -77.016},
  {"tid": 24, "cid": 10, "did": 20, "school": "Providence", "name": "Friars", "abbrev": "PROV", "pop": 296, "city": "Providence", "state": "RI", "latitude": 41.823, "longitude": -71.422},
  {"tid": 51, "cid": 10, "did": 20, "school": "Saint John's", "name": "Red Storm", "abbrev": "STJOHN", "pop": 269, "city": "Queens", "state": "NY", "latitude": 40.750, "longitude": -73.866},
  {"tid": 102, "cid": 10, "did": 20, "school": "Seton Hall", "name": "Pirates", "abbrev": "SHU", "pop": 218, "city": "South Orange", "state": "NJ", "latitude": 40.748, "longitude": -74.261},
  {"tid": 262, "cid": 10, "did": 20, "school": "Siena", "name": "Saints", "abbrev": "SIENA", "pop": 58, "city": "Loudonville", "state": "NY", "latitude": 42.718, "longitude": -73.753},
  {"tid": 298, "cid": 10, "did": 20, "school": "Fairfield", "name": "Stags", "abbrev": "FAIR", "pop": 22, "city": "Fairfield", "state": "CT", "latitude": 41.181, "longitude": -73.290},
  {"tid": 317, "cid": 10, "did": 20, "school": "Marist", "name": "Red Foxes", "abbrev": "MARIST", "pop": 3, "city": "Poughkeepsie", "state": "NY", "latitude": 41.725, "longitude": -73.933},
  {"tid": 32, "cid": 10, "did": 21, "school": "Temple", "name": "Owls", "abbrev": "TEMP", "pop": 288, "city": "Philadelphia", "state": "PA", "latitude": 39.98 , "longitude": -75.16},		
  {"tid": 35, "cid": 10, "did": 21, "school": "Cincinnati", "name": "Bearcats", "abbrev": "CIN", "pop": 285, "city": "Cincinnati", "state": "OH", "latitude": 39.132 , "longitude": -84.515},		
  {"tid": 81, "cid": 10, "did": 21, "school": "Connecticut", "name": "Huskies", "abbrev": "UCONN", "pop": 239, "city": "Storrs", "state": "CT", "latitude": 41.807 , "longitude": -72.252},		
  {"tid": 218, "cid": 10, "did": 21, "school": "East Carolina", "name": "Pirates", "abbrev": "ECU", "pop": 102, "city": "Greenville", "state": "NC", "latitude": 35.602 , "longitude": -77.368},		
  {"tid": 257, "cid": 10, "did": 21, "school": "Central Florida", "name": "Knights", "abbrev": "UCF", "pop": 63, "city": "Orlando", "state": "FL", "latitude": 28.601 , "longitude": -81.200},		
  {"tid": 275, "cid": 10, "did": 21, "school": "South Florida", "name": "Bulls", "abbrev": "USF", "pop": 45, "city": "Tampa", "state": "FL", "latitude": 28.054 , "longitude": -82.413},		
  {"tid": 248, "cid": 10, "did": 21, "school": "Drexel", "name": "Dragons", "abbrev": "DREX", "pop": 72, "city": "Philadelphia", "state": "PA", "latitude": 39.954 , "longitude": -75.188},		
]      

function Welcome() {
  return (
    //create a header
    <h1>College Basketball Teams</h1>
  );
}

//create class to callinfo about each BBall team
//specify the variable type
class Team extends React.Component < {school: string, name: string, city: string, state:string} >{
  render() {

    //set a pointer to allow all teams
    const oneTeam = this.props;

    //create a "card" with team info
    return(
      <div>
        <h3>{oneTeam.school}</h3>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>Location: {oneTeam.city}, {oneTeam.state}</h3>
        <br></br>
      </div>
    );
  }
}

function TeamInfo(){
  return(
    //create a "loop" per se, to iterate through all teams found in the array of teams
    <div>
      {teams.map(oneTeam => <Team {...oneTeam}/>)}
    </div>
  );
}

function App() {
  return (
    //call the Welcome and the Team Info functions
    //to call more than one function, must include <>
    <>
      <Welcome /><TeamInfo />
    </>
  );
}

export default App;
