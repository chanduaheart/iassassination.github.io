var ggdb = [
    ["Chandan Kumar Mandal", "sniper/pusher",  "DooM丹Chandu", 5264277721],
    ["Amrit", "sniper/pusher",  "Psychopath", ],
    ["Harsh Pandey", "sniper/pusher",  "AkelaBadshah", 5222886852],
    ["MRXSingh", "sniper/pusher",  "MRXSingh", 5192174895],
    ["OnLyRaseAL", "sniper/pusher",  "OnLyRaseAL", 5145484510],
    ["Yash", "sniper/pusher",  "LOYASH", 554900387],
    ["MrDevil619", "sniper/pusher",  "KathirSudan", 545368422],
    ["ApexPredator65", "sniper/pusher",  "ApexPredator65", 5106537568],
    ["founderofpubg", "sniper/pusher",  "founderofpubg", 533974077],
    ["Rambo", "sniper/pusher",  "07Rambo07", 570095023],
    ["Himanshu", "sniper/pusher",  "Himangshu123", 5121491640],
    ["EzioSafwan", "sniper/pusher",  "EzioSafwan", 5109583018],
    ["ZEUS WEBSTER", "sniper/pusher",  "ZEUS WEBSTER", 578699526],
    ["Sachin Mishra", "sniper/pusher",  "Thesachhu", 5124270429],
    ["Kathir Sudan", "sniper/pusher",  "KathirSudan", 574584753],
    ["Subham Sinha", "sniper/pusher",  "SubhamSinha22", 5134076837],
    ["Chandan Kumar Mandal", "sniper/pusher", "GEEKOFIA", 525601909],
    ["Mayank Jha", "sniper/pusher", "YunovonAmara", 541739948],
    ["Abhinav", "sniper/pusher", "Ankruz3", 581346056],
    ["kudambana", "sniper/pusher",  "kudambana", 5141488536],
    ["kHoONi", "sniper/pusher",  "kHoONi", 512196289],
    ["Rohit", "sniper/pusher",  "RohitKrxx7", 530017483],
    ["Rama", "sniper/pusher",  "Ramgarhia47", 5203030376],
    ["Rahul", "sniper/pusher",  "ChRahulKashy", 5238419039],
    ["Nitish", "sniper/pusher",  "nitish888", 5238394012],
    ["Ravi", "sniper/pusher",  "artravi", 5126044644],
    ["Prathamesh", "sniper/pusher",  "daitprathamesh", 591864075],
    ["Mayur", "sniper/pusher",  "MAYUR", 5122875458],
    ["Karthik", "sniper/pusher",  "Karthikjarvis", 5119800905],
    ["Nishann", "sniper/pusher",  "nishann1706", 5163751351],
    ["Gurminder", "sniper/pusher",  "Gurminderdhill", 5109193106],
    ["nunjuda", "sniper/pusher",  "ChRahulKashy", 5257155955],
    ["NiDhi", "sniper/pusher",  "NiDhin7", 5211352796],
    ["277376", "sniper/pusher",  "277376", 5210613754],
    ["Chandan Prasad Das", "sniper/pusher",  "chandanprasad1", 5183127895],
    ["lion111333a", "sniper/pusher",  "lion111333a", 5173564989],
    ["Devil987654321", "sniper/pusher",  "Devil987654321", 5156597257],
    ["Anup Sahani", "sniper/pusher",  "Anupsahani", 5153576708],
    ["Adil Khan", "sniper/pusher",  "Adilkhans", 5143503731],
    ["Aman Raj", "sniper/pusher",  "Equal", 5139618820],
    ["tigersn", "sniper/pusher",  "tigersn", 5139372197],
    ["carlos14242f", "sniper/pusher",  "carlos14242f", 5136260933],
    [ "sniper/pusher",   5110439334],
    ["ZiroZeven", "sniper/pusher",  "zirozeven", 560652277],
    ["Vishal", "sniper/pusher",  "ViShal", 517909518],
    ["iEquinox", "sniper/pusher",  "iEquinox", 517136362]
];

for (row = 0; row < ggdb.length; row++) {
    var tableData = document.getElementById("playerData");
    tableData.innerHTML += '<section>'+
    '<span class="icon style2 major fa-diamond"></span>'+
    '<h3>'+ ggdb[row][2] +'</h3>'+
    '<p>'+ ggdb[row][1] +'</p>'+
    '<p>'+ ggdb[row][3] +'</p>'+
'</section>';
}