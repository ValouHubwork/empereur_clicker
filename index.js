let pute_counter = {
    _score: 0,
    set score(val) {
        this._score = val;
    },
    get score() {
        return this._score;
    }
};

//compteur de putes
let pute_counter_total = 0;
const empereur_img = document.querySelector(".empereur_img");
const counter = document.getElementById("counter");

//affichage increment
const increment_elem = document.querySelector(".increment");

//compteur de rimes
let rime_counter = 0;
let rime_price = 100;
const rime_price_elem = document.querySelector(".rime_price");
const rime_number_elem =document.querySelector(".rime_number");
const counter_rime = document.querySelector(".rime_title");

//compteur de rap
let rap_counter = 0;
let rap_price = 500;
const rap_price_elem = document.querySelector(".rap_price");
const rap_number_elem =document.querySelector(".rap_number");
const counter_rap = document.querySelector(".rap_title");

//compteur de feat
let feat_counter = 0;
let feat_price = 1000;
const feat_price_elem = document.querySelector(".feat_price");
const feat_number_elem =document.querySelector(".feat_number");
const counter_feat = document.querySelector(".feat_title");

//compteur de médicinale
let med_counter = 0;
let med_price = 3000;
const med_price_elem = document.querySelector(".med_price");
const med_number_elem =document.querySelector(".med_number");
const counter_med = document.querySelector(".med_title");

//compteur de roi
let roi_counter = 0;
let roi_price = 10000;
const roi_price_elem = document.querySelector(".roi_price");
const roi_number_elem =document.querySelector(".roi_number");
const counter_roi = document.querySelector(".roi_title");

//compteur de grand_aigle
let aigle_counter = 0;
let aigle_price = 50000;
const aigle_price_elem = document.querySelector(".aigle_price");
const aigle_number_elem =document.querySelector(".aigle_number");
const counter_aigle = document.querySelector(".aigle_title");

//putes par seconde
const cpt_pps_elem = document.getElementById("cpt_pps");

//click joueur
empereur_img.addEventListener("click", (e) => {
    clic = 1+0.6*cpt_pps;
    pute_counter.score+=clic;
    pute_counter_total+=clic;
    // pute_counter.score+=50;
    // pute_counter_total+=50;
    if(pute_counter.score <= 100)
        counter.textContent = parseInt(pute_counter.score) + " putes";
    if(pute_counter.score > 100)
        counter.textContent = (pute_counter.score/100).toFixed(2) + " centiputes";

    if(pute_counter.score > 1000)
        counter.textContent = (pute_counter.score/1000).toFixed(2) + " mégaputes";

    if(pute_counter.score > 10000)
        counter.textContent = (pute_counter.score/10000).toFixed(2) + " décimégaputes";

    if(pute_counter.score > 100000)
        counter.textContent = (pute_counter.score/100000).toFixed(2) + " centimégaputes";

    if(pute_counter.score > 1000000)
        counter.textContent = (pute_counter.score/1000000).toFixed(2) + " milliputes";
    empereur_img.classList.toggle("empereur_clicked");

    increment_elem.textContent = "+" + clic.toFixed(2);
    increment_elem.style.visibility = "visible";
    increment_elem.style.left = e.pageX + "px";
    increment_elem.style.top = e.pageY + "px";

    increment_elem.style.animation = "none";      // 1. reset
    void increment_elem.offsetWidth;              // 2. reflow 
    increment_elem.style.animation = "increment_animation 0.3s ease"; // 3. relance

    //track souris increment
    window.addEventListener("mousemove", (e) => {
        if(e.target == empereur_img)
        {
            increment_elem.style.left = e.pageX + "px";
            increment_elem.style.top = e.pageY + "px";
        }
        else
        {
            increment_elem.style.visibility = "hidden";
        }
    });
});

//achat de rimes
document.querySelector(".rime_container").addEventListener("click", () => {
    if(pute_counter.score >= rime_price)
    {
        pute_counter.score -= rime_price;
        rime_counter++;
        rime_price+=20;
        counter_rime.textContent = "Rimes   •   " + (rime_counter*0.2).toFixed(2) + " pps";
        rime_number_elem.textContent = rime_counter;
        counter.textContent = parseInt(pute_counter.score) + " putes";
        rime_price_elem.textContent = "prix : " + rime_price + " putes";
    }
});

//achat de rap
document.querySelector(".rap_container").addEventListener("click", () => {
    if(pute_counter.score >= rap_price)
    {
        pute_counter.score -= rap_price;
        rap_counter++;
        rap_price+=60;
        counter_rap.textContent = "Rap   •   " + (rap_counter*1).toFixed(2) + " pps";
        rap_number_elem.textContent = rap_counter;
        counter.textContent = parseInt(pute_counter.score) + " putes";
        rap_price_elem.textContent = "prix : " + rap_price + " putes";
    }
});

//achat de feat
document.querySelector(".feat_container").addEventListener("click", () => {
    if(pute_counter.score >= feat_price)
    {
        pute_counter.score -= feat_price;
        feat_counter++;
        feat_price+=180;
        counter_feat.textContent = "Feat   •   " + (feat_counter*5.4).toFixed(2) + " pps";
        feat_number_elem.textContent = feat_counter;
        counter.textContent = parseInt(pute_counter.score) + " putes";
        feat_price_elem.textContent = "prix : " + feat_price + " putes";
    }
});

//achat de médicinale
document.querySelector(".med_container").addEventListener("click", () => {
    if(pute_counter.score >= med_price)
    {
        pute_counter.score -= med_price;
        med_counter++;
        med_price+=320;
        counter_med.textContent = "La médicinale   •   " + (med_counter*22.7).toFixed(2) + " pps";
        med_number_elem.textContent = med_counter;
        counter.textContent = parseInt(pute_counter.score) + " putes";
        med_price_elem.textContent = "prix : " + med_price + " putes";
    }
});

//achat de roi
document.querySelector(".roi_container").addEventListener("click", () => {
    if(pute_counter.score >= roi_price)
    {
        pute_counter.score -= roi_price;
        roi_counter++;
        roi_price+=680;
        counter_roi.textContent = "Le roi   •   " + (roi_counter*100.4).toFixed(2) + " pps";
        roi_number_elem.textContent = roi_counter;
        counter.textContent = parseInt(pute_counter.score) + " putes";
        roi_price_elem.textContent = "prix : " + roi_price + " putes";
    }
});

//achat de grand aigle
document.querySelector(".aigle_container").addEventListener("click", () => {
    if(pute_counter.score >= aigle_price)
    {
        pute_counter.score -= aigle_price;
        aigle_counter++;
        aigle_price+=1040;
        counter_aigle.textContent = "Le grand aigle   •   " + (aigle_counter*777).toFixed(2) + " pps";
        aigle_number_elem.textContent = aigle_counter;
        counter.textContent = parseInt(pute_counter.score) + " putes";
        aigle_price_elem.textContent = "prix : " + aigle_price + " putes";
    }
});

//actualisation pps (pute par seconde)
setInterval( () =>{
    pute_counter.score += rime_counter*0.2 + rap_counter*1 + feat_counter*5.4 + med_counter*22.7 + roi_counter*100.4 + aigle_counter*777;
    pute_counter_total += rime_counter*0.2 + rap_counter*1 + feat_counter*5.4 + med_counter*22.7 + roi_counter*100.4 + aigle_counter*777;
    cpt_pps_elem.textContent = (rime_counter*0.2 + rap_counter*1 + feat_counter*5.4 + med_counter*22.7 + roi_counter*100.4 + aigle_counter*777).toFixed(2) + " pps"; 
}, 1000);

//actualisation temps réel (pour upgrade surtout)
setInterval(() => {
    cpt_pps = rime_counter*0.2 + rap_counter*1 + feat_counter*5.4 + med_counter*22.7 + roi_counter*100.4 + aigle_counter*777;
    counter.textContent = parseInt(pute_counter.score) + " putes";
    if(pute_counter_total >= rime_price)
        document.querySelector(".rime_container").classList.add("upgrade_visible");
    if(pute_counter_total >= rap_price)
        document.querySelector(".rap_container").classList.add("upgrade_visible");
    if(pute_counter_total >= feat_price)
        document.querySelector(".feat_container").classList.add("upgrade_visible");
    if(pute_counter_total >= med_price)
        document.querySelector(".med_container").classList.add("upgrade_visible");
    if(pute_counter_total >= roi_price)
        document.querySelector(".roi_container").classList.add("upgrade_visible");
    if(pute_counter_total >= aigle_price)
        document.querySelector(".aigle_container").classList.add("upgrade_visible");

    if(pute_counter.score > 100)
        counter.textContent = (pute_counter.score/100).toFixed(2) + " centiputes";

    if(pute_counter.score > 1000)
        counter.textContent = (pute_counter.score/1000).toFixed(2) + " mégaputes";

    if(pute_counter.score > 10000)
        counter.textContent = (pute_counter.score/10000).toFixed(2) + " décimégaputes";

    if(pute_counter.score > 100000)
        counter.textContent = (pute_counter.score/100000).toFixed(2) + " centimégaputes";

    if(pute_counter.score > 1000000)
        counter.textContent = (pute_counter.score/1000000).toFixed(2) + " milliputes";
}, 1);