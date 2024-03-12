function updateProgressBar (id, value, maxValue) {
    var percentage = (value / maxValue) * 100;
    document.getElementById(id).style.width = percentage + "%";
}

var progressBarsData = [
    //Splattershot
    { id: "progressBar1", value: 50, maxValue: 100 },
    { id: "progressBar2", value: 36, maxValue: 100 },
    { id: "progressBar3", value: 60, maxValue: 100 },
    //Aerospray MG
    { id: "progressBar4", value: 35, maxValue: 100 },
    { id: "progressBar5", value: 24, maxValue: 100 },
    { id: "progressBar6", value: 90, maxValue: 100 },
    //96. Gal
    { id: "progressBar7", value: 74, maxValue: 100 },
    { id: "progressBar8", value: 85, maxValue: 100 },
    { id: "progressBar9", value: 10, maxValue: 100 },
    //52. Gal
    { id: "progressBar10", value: 55, maxValue: 100 },
    { id: "progressBar11", value: 52, maxValue: 100 },
    { id: "progressBar12", value: 25, maxValue: 100 },
    //Sploosh-o-matic
    { id: "progressBar13", value: 12, maxValue: 100 },
    { id: "progressBar14", value: 45, maxValue: 100 },
    { id: "progressBar15", value: 75, maxValue: 100 },
    //Splash-o-matic
    { id: "progressBar16", value: 42, maxValue: 100 },
    { id: "progressBar17", value: 28, maxValue: 100 },
    { id: "progressBar18", value: 75, maxValue: 100 },
    //Splattershot Pro
    { id: "progressBar19", value: 70, maxValue: 100 },
    { id: "progressBar20", value: 45, maxValue: 100 },
    { id: "progressBar21", value: 30, maxValue: 100 },
    //Splattershot Nova
    { id: "progressBar22", value: 68, maxValue: 100 },
    { id: "progressBar23", value: 30, maxValue: 100 },
    { id: "progressBar24", value: 60, maxValue: 100 },
    //Jet Squelcher
    { id: "progressBar25", value: 82, maxValue: 100 },
    { id: "progressBar26", value: 40, maxValue: 100 },
    { id: "progressBar27", value: 30, maxValue: 100 },
    //N-ZAP
    { id: "progressBar28", value: 50, maxValue: 100 },
    { id: "progressBar29", value: 30, maxValue: 100 },
    { id: "progressBar30", value: 75, maxValue: 100 },
    //L-3 Nozzlenose
    { id: "progressBar31", value: 62, maxValue: 100 },
    { id: "progressBar32", value: 40, maxValue: 100 },
    { id: "progressBar33", value: 65, maxValue: 100 },
    //H-3 Nozzlenose
    { id: "progressBar34", value: 70, maxValue: 100 },
    { id: "progressBar35", value: 70, maxValue: 100 },
    { id: "progressBar36", value: 30, maxValue: 100 },
    //Squeezer
    { id: "progressBar37", value: 77, maxValue: 100 },
    { id: "progressBar38", value: 50, maxValue: 100 },
    { id: "progressBar39", value: 30, maxValue: 100 },

    //Rollers

    //Splat Roller
    { id: "progressBar40", value: 48, maxValue: 100 },
    { id: "progressBar41", value: 100, maxValue: 100 },
    { id: "progressBar42", value: 55, maxValue: 100 },
    //Carbon Roller
    { id: "progressBar43", value: 20, maxValue: 100 },
    { id: "progressBar44", value: 100, maxValue: 100 },
    { id: "progressBar45", value: 65, maxValue: 100 },
    //Flingza Roller
    { id: "progressBar46", value: 58, maxValue: 100 },
    { id: "progressBar47", value: 100, maxValue: 100 },
    { id: "progressBar48", value: 45, maxValue: 100 },
    //Dynamo Roller
    { id: "progressBar49", value: 76, maxValue: 100 },
    { id: "progressBar50", value: 100, maxValue: 100 },
    { id: "progressBar51", value: 20, maxValue: 100 },
    //Big Swig Roller
    { id: "progressBar52", value: 56, maxValue: 100 },
    { id: "progressBar53", value: 100, maxValue: 100 },
    { id: "progressBar54", value: 60, maxValue: 100 },

    //Chargers

    //Splat Charger
    { id: "progressBar55", value: 88, maxValue: 100 },
    { id: "progressBar56", value: 100, maxValue: 100 },
    { id: "progressBar57", value: 40, maxValue: 100 },
    //Squiffer
    { id: "progressBar58", value: 75, maxValue: 100 },
    { id: "progressBar59", value: 100, maxValue: 100 },
    { id: "progressBar60", value: 60, maxValue: 100 },
    //Bamboozler 14
    { id: "progressBar61", value: 78, maxValue: 100 },
    { id: "progressBar62", value: 100, maxValue: 100 },
    { id: "progressBar63", value: 80, maxValue: 100 },
    //Goo Tuber
    { id: "progressBar64", value: 78, maxValue: 100 },
    { id: "progressBar65", value: 100, maxValue: 100 },
    { id: "progressBar66", value: 70, maxValue: 100 },
    //Snipewriter
    { id: "progressBar67", value: 91, maxValue: 100 },
    { id: "progressBar68", value: 100, maxValue: 100 },
    { id: "progressBar69", value: 80, maxValue: 100 },
    //E-Liter
    { id: "progressBar70", value: 96, maxValue: 100 },
    { id: "progressBar71", value: 100, maxValue: 100 },
    { id: "progressBar72", value: 15, maxValue: 100 },
    
    //Sloshers

    //Slosher
    { id: "progressBar73", value: 58, maxValue: 100 },
    { id: "progressBar74", value: 100, maxValue: 100 },
    { id: "progressBar75", value: 50, maxValue: 100 },
    //Tri-Slosher
    { id: "progressBar76", value: 31, maxValue: 100 },
    { id: "progressBar77", value: 100, maxValue: 100 },
    { id: "progressBar78", value: 70, maxValue: 100 },
    //Sloshing Machine
    { id: "progressBar79", value: 60, maxValue: 100 },
    { id: "progressBar80", value: 100, maxValue: 100 },
    { id: "progressBar81", value: 40, maxValue: 100 },
    //Bloblobber
    { id: "progressBar82", value: 85, maxValue: 100 },
    { id: "progressBar83", value: 60, maxValue: 100 },
    { id: "progressBar84", value: 50, maxValue: 100 },
    //Explosher
    { id: "progressBar85", value: 77, maxValue: 100 },
    { id: "progressBar86", value: 100, maxValue: 100 },
    { id: "progressBar87", value: 20, maxValue: 100 },
    //Dread Wringer
    { id: "progressBar88", value: 60, maxValue: 100 },
    { id: "progressBar89", value: 100, maxValue: 100 },
    { id: "progressBar90", value: 35, maxValue: 100 },

    //Splatling

    //Heavy Splatling
    { id: "progressBar91", value: 78, maxValue: 100 },
    { id: "progressBar92", value: 38, maxValue: 100 },
    { id: "progressBar93", value: 55, maxValue: 100 },
    //Mini Splatling
    { id: "progressBar94", value: 62, maxValue: 100 },
    { id: "progressBar95", value: 80, maxValue: 100 },
    { id: "progressBar96", value: 90, maxValue: 100 },
    //Hydra Splatling
    { id: "progressBar97", value: 85, maxValue: 100 },
    { id: "progressBar98", value: 10, maxValue: 100 },
    { id: "progressBar99", value: 20, maxValue: 100 },
    //Ballpoint Splatling
    { id: "progressBar00", value: 84, maxValue: 100 },
    { id: "progressBar01", value: 18, maxValue: 100 },
    { id: "progressBar02", value: 60, maxValue: 100 },
    //Nautilus
    { id: "progressBar03", value: 74, maxValue: 100 },
    { id: "progressBar04", value: 37, maxValue: 100 },
    { id: "progressBar05", value: 70, maxValue: 100 },
    //Heavy Edit Splatling
    { id: "progressBar06", value: 70, maxValue: 100 },
    { id: "progressBar07", value: 14, maxValue: 100 },
    { id: "progressBar08", value: 90, maxValue: 100 },

    //Dualies

    //Splat Dualies
    { id: "progressBar09", value: 50, maxValue: 100 },
    { id: "progressBar110", value: 30, maxValue: 100 },
    { id: "progressBar111", value: 60, maxValue: 100 },
    //Dapple Dualies
    { id: "progressBar112", value: 24, maxValue: 100 },
    { id: "progressBar113", value: 40, maxValue: 100 },
    { id: "progressBar114", value: 80, maxValue: 100 },
    //Glooga Dualies
    { id: "progressBar115", value: 66, maxValue: 100 },
    { id: "progressBar116", value: 70, maxValue: 100 },
    { id: "progressBar117", value: 35, maxValue: 100 },
    //Dualie Squelchers
    { id: "progressBar118", value: 70, maxValue: 100 },
    { id: "progressBar119", value: 30, maxValue: 100 },
    { id: "progressBar120", value: 70, maxValue: 100 },
    //Tetra Dualies
    { id: "progressBar121", value: 58, maxValue: 100 },
    { id: "progressBar122", value: 30, maxValue: 100 },
    { id: "progressBar123", value: 90, maxValue: 100 },
    //Douser Dualies FF
    { id: "progressBar124", value: 100, maxValue: 100 },
    { id: "progressBar125", value: 100, maxValue: 100 },
    { id: "progressBar126", value: 100, maxValue: 100 },

    //Brellas

    //Splat Brella
    { id: "progressBar127", value: 43, maxValue: 100 },
    { id: "progressBar128", value: 100, maxValue: 100 },
    { id: "progressBar129", value: 60, maxValue: 100 },
    //Tenta Brella
    { id: "progressBar130", value: 62, maxValue: 100 },
    { id: "progressBar131", value: 100, maxValue: 100 },
    { id: "progressBar132", value: 85, maxValue: 100 },
    //Undercover Brella
    { id: "progressBar133", value: 50, maxValue: 100 },
    { id: "progressBar134", value: 100, maxValue: 100 },
    { id: "progressBar135", value: 25, maxValue: 100 },
    //Recycled Brella 24 Mk I
    { id: "progressBar136", value: 100, maxValue: 100 },
    { id: "progressBar137", value: 100, maxValue: 100 },
    { id: "progressBar138", value: 100, maxValue: 100 },

    //Blasters

    //Blaster
    { id: "progressBar139", value: 27, maxValue: 100 },
    { id: "progressBar140", value: 100, maxValue: 100 },
    { id: "progressBar141", value: 20, maxValue: 100 },
    //Range Blaster
    { id: "progressBar142", value: 56, maxValue: 100 },
    { id: "progressBar143", value: 100, maxValue: 100 },
    { id: "progressBar144", value: 10, maxValue: 100 },
    //Luna Blaster
    { id: "progressBar145", value: 18, maxValue: 100 },
    { id: "progressBar146", value: 100, maxValue: 100 },
    { id: "progressBar147", value: 30, maxValue: 100 },
    //Clash Blaster
    { id: "progressBar148", value: 21, maxValue: 100 },
    { id: "progressBar149", value: 85, maxValue: 100 },
    { id: "progressBar150", value: 65, maxValue: 100 },
    //Rapid Blaster
    { id: "progressBar151", value: 62, maxValue: 100 },
    { id: "progressBar152", value: 100, maxValue: 100 },
    { id: "progressBar153", value: 40, maxValue: 100 },
    //Rapid Blaster Pro
    { id: "progressBar154", value: 72, maxValue: 100 },
    { id: "progressBar155", value: 100, maxValue: 100 },
    { id: "progressBar156", value: 30, maxValue: 100 },
    //S-BLAST
    { id: "progressBar157", value: 45, maxValue: 100 },
    { id: "progressBar158", value: 100, maxValue: 100 },
    { id: "progressBar159", value: 10, maxValue: 100 },

    //Brushes

    //Inkbrush
    { id: "progressBar160", value: 5, maxValue: 100 },
    { id: "progressBar161", value: 40, maxValue: 100 },
    { id: "progressBar162", value: 100, maxValue: 100 },
    //Octobrush
    { id: "progressBar163", value: 23, maxValue: 100 },
    { id: "progressBar164", value: 60, maxValue: 100 },
    { id: "progressBar165", value: 85, maxValue: 100 },
    //Painbrush (why isn't it paintbrush???)
    { id: "progressBar166", value: 33, maxValue: 100 },
    { id: "progressBar167", value: 100, maxValue: 100 },
    { id: "progressBar168", value: 60, maxValue: 100 },

    //Stringers

    //Tri-Stringer
    { id: "progressBar169", value: 88, maxValue: 100 },
    { id: "progressBar170", value: 100, maxValue: 100 },
    { id: "progressBar171", value: 40, maxValue: 100 },
    //REEF-LUX 450
    { id: "progressBar172", value: 60, maxValue: 100 },
    { id: "progressBar173", value: 100, maxValue: 100 },
    { id: "progressBar174", value: 60, maxValue: 100 },

    //Splatanas

    //Splatana Stamper
    { id: "progressBar175", value: 75, maxValue: 100 },
    { id: "progressBar176", value: 100, maxValue: 100 },
    { id: "progressBar177", value: 60, maxValue: 100 },
    //Splatana Wiper
    { id: "progressBar178", value: 58, maxValue: 100 },
    { id: "progressBar179", value: 100, maxValue: 100 },
    { id: "progressBar180", value: 75, maxValue: 100 },

    //Grizzco

    //Grizzco Blaster
    { id: "progressBar181", value: 18, maxValue: 100 },
    { id: "progressBar182", value: 50, maxValue: 100 },
    { id: "progressBar183", value: 100, maxValue: 100 },
    //Grizzco Brella
    { id: "progressBar184", value: 43, maxValue: 100 },
    { id: "progressBar185", value: 80, maxValue: 100 },
    { id: "progressBar186", value: 100, maxValue: 100 },
    //Grizzco Charger
    { id: "progressBar187", value: 96, maxValue: 100 },
    { id: "progressBar188", value: 100, maxValue: 100 },
    { id: "progressBar189", value: 100, maxValue: 100 },
    //Grizzco Slosher
    { id: "progressBar190", value: 76, maxValue: 100 },
    { id: "progressBar191", value: 100, maxValue: 100 },
    { id: "progressBar192", value: 20, maxValue: 100 },
    //Grizzco Stringer
    { id: "progressBar193", value: 100, maxValue: 100 },
    { id: "progressBar194", value: 100, maxValue: 100 },
    { id: "progressBar195", value: 60, maxValue: 100 },
    //Grizzco Splatana
    { id: "progressBar196", value: 5, maxValue: 100 },
    { id: "progressBar197", value: 100, maxValue: 100 },
    { id: "progressBar198", value: 50, maxValue: 100 },
    //Grizzco Dualies
    { id: "progressBar199", value: 40, maxValue: 100 },
    { id: "progressBar200", value: 100, maxValue: 100 },
    { id: "progressBar201", value: 80, maxValue: 100 }
];

progressBarsData.forEach(bar => {
    updateProgressBar(bar.id, bar.value, bar.maxValue);
});