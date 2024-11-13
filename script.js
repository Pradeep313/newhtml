function searchFunction() {
    const input = document.getElementById('searchBar');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('peopleList');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        const name = li[i].textContent || li[i].innerText;
        if (name.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

function hellos() {
    console.log("hi");
};
let SHEET_IDB = "1o2-dh2Shhj9wECj7sU57FJwXuiuvcI7V-eKpHyFdIxw";
let SHEET_TITLE = "branch";
let SHEET_RANGEB = "A2:A10000";

let FULL_URL_blogger =
    "https://docs.google.com/spreadsheets/d/" +
    SHEET_IDB +
    "/gviz/tq?sheet=" +
    SHEET_TITLE +
    "&range=" +
    SHEET_RANGEB;

fetch(FULL_URL_blogger)
    .then((res) => res.text())
    .then((rep) => {
        let datas = JSON.parse(rep.substr(47).slice(0, -2));

        let blogger_name = document.getElementById("options");
        let teacher_data = document.getElementById("peopleList");
        let length = datas.table.rows.length;
        console.log(length);

        let i = 1;
        let data_list = [];
        for (i = 1; i < length + 1; i++) {
            //let NewBoxBlogger = document.createElement("div");
            //let space = document.createElement("br");
            //NewBoxBlogger.id = "box" + i;
            //NewBoxBlogger.className = "box-blogger";
            //blogger_name.append(NewBoxBlogger);
            //console.log(datas.table.rows[i - 1].c[0].v);

            data_list.push(datas.table.rows[i - 1].c[0].v);

            // final_dta_data="<option value="+ i+">"+datas.table.rows[i - 1].c[0].v+"</option>" +"<br>"+final_dta_data ;
            //console.log(final_dta_data);

            //let final_dta_d1= final_dta_d1+"<br>"+ final_dta_data;


            //blogger_name.innerHTML =
            //  "<div class=" + "news_blog" + " > <span class=" + "hedingnews" + ">" + data.table.rows[i - 1].c[0].v + "</span> <span class=" + "arrownews" + ">" + data.table.rows[i - 1].c[1].v + "</span> <br>";
            //    "<option value="+i+">"+datas.table.rows[i - 1].c[0].v+"</option>";
            if (
                datas.table.rows[i - 1].c[0].v == " "
            ) {

                break;
            }
        };
        //console.log(data_list);
        function remove_items(arr) {
            let item_each_data = {};

            arr.forEach(function (i) {
                if (!item_each_data[i]) {
                    item_each_data[i] = true;
                }
            });
            return Object.keys(item_each_data);


        }
        let duplicate_elements = [];
        duplicate_elements = remove_items(data_list);
        console.log(duplicate_elements);
        console.log(duplicate_elements.length);
        let final_dta_data = "";
        let te_dta_d = "";
        length_d = duplicate_elements.length

        for (let i = 0; i < duplicate_elements.length; i++) {
            length = length - 1;

            final_dta_data = "<option value=" + i + ">" + duplicate_elements[duplicate_elements.length - i - 1] + "</option>" + final_dta_data;
            te_dta_d = '<li onclick="viwer(this)'+'">' + duplicate_elements[duplicate_elements.length - i - 1] + "</li>" + te_dta_d

        };

        teacher_data.innerHTML = te_dta_d;
        console.log(te_dta_d);


        blogger_name.innerHTML = '<option value="' + i + 1 + '" selected="selected">Select Student Name</option>' + final_dta_data;

        console.log(final_dta_data);

    });


function viwer(e) {
    //var noobs = document.getElementsByClassName("noob");
    // var pros = document.getElementsByClassName("pro");
    var teacherdatas = document.getElementsByClassName("list_d_1");
    document.querySelector(".loader").style.display = "block";
    document.querySelector(".container").style.display = "none";







    console.log(e.innerText);
    text_data = e.innerText;
    //noobs.style.display="block";
    showview(text_data);







};


function views() {
    var sheetidn = document.getElementById("options");
    var value = sheetidn.value;


    var sheetidn1 = sheetidn.options[sheetidn.selectedIndex].text;
    console.log(sheetidn1);
    showview(sheetidn1);





};

function showview(sheetidn1) {
    document.body.style.zoom=0.7;

    let SHEET_IDN = "1JvLXp8yS5rUviW4gEKfmExyki4fmIfIDHQEqZr_161E";
    //let SHEET_TITLEE = "B.tech4";
    let SHEET_RANGEN = "A1:I6";
    let FULL_URL_news =
        //"https://docs.google.com/spreadsheets/d/1JvLXp8yS5rUviW4gEKfmExyki4fmIfIDHQEqZr_161E/gviz/tq?sheet=B.tech4&range=A1:I6";
        // https://docs.google.com/spreadsheets/d/1nnD_JIr2XGb1oVrzOe0YFRQvW-C36kNJxI0DEXFpjEg/gviz/tq?sheet=A2:B10000
        "https://docs.google.com/spreadsheets/d/" +
        SHEET_IDN +
        "/gviz/tq?sheet=" +
        sheetidn1 +
        "&range=" +
        SHEET_RANGEN;

    fetch(FULL_URL_news)
        .then((res) => res.text())
        .then((rep) => {
            let data_news = JSON.parse(rep.substr(47).slice(0, -2));

            //console.log(data_news);
            let length_news = data_news.table.rows.length;
            console.log(length_news);
            
            //console.log(length_news);
            //console.log(data_news.table.rows[1].c[1].v);
            try{

                for (let row = 0; row < data_news.table.rows.length; row++) {
                    for (let col = 0; col <= 8; col++) {
                        let cellId = `box${row}${col}`;
                        let cellElement = document.getElementById(cellId);
                        if (cellElement) {
                            cellElement.innerHTML = data_news.table.rows[row].c[col].v;
                        }
                    }
                }
            }
            catch(err) {
               console.log(err);
             }

            if (length_news <= 2) {
                document.querySelector(".containers").style.display = "none";
                document.querySelector(".pro").style.display = "none";
                document.querySelector(".loader").style.display = "none";
                
                document.querySelector(".alerts").style.display = "block"
                

                
               
            }


            else  {
                setTimeout(display_view, 3000);
            }





        });





   



}
;

function display_view() {
    document.querySelector(".loader").style.display = "none";

   
    document.querySelector(".containers").style.display = "block";
    document.querySelector(".pro").style.display = "block";
    
    console.log("hi b");
}


