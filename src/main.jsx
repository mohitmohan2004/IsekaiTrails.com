import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import {
  ArrowRight, Compass, MapPin, Mountain, CalendarDays, Search, Star, Menu,
  X, Sparkles, ShieldCheck, Users, ChevronRight, Clock3, IndianRupee,
  TentTree, Backpack, Plane, Heart, CheckCircle2
} from "lucide-react";
import "./styles.css";

const destinations = [
  { id: 1, name: "Mahendragiri", state: "Odisha", type: "Mountain Escape", price: 2499, rating: 4.9, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85", tags:["Camping","Trekking"] },
  { id: 2, name: "Meghalaya", state: "India", type: "Cloud Kingdom", price: 8999, rating: 4.8, image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1000&q=85", tags:["Waterfalls","Nature"] },
  { id: 3, name: "Ladakh", state: "India", type: "High Altitude", price: 12999, rating: 4.9, image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85", tags:["Mountains","Roadtrip"] },
  { id: 4, name: "Valley of Flowers", state: "Uttarakhand", type: "Alpine Paradise", price: 7499, rating: 4.7, image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85", tags:["Hiking","Flowers"] },
  { id: 5, name: "Andaman", state: "India", type: "Island Adventure", price: 10999, rating: 4.8, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85", tags:["Beach","Scuba"] },
  { id: 6, name: "Arunachal Pradesh", state: "India", type: "Hidden Himalayas", price: 9999, rating: 4.9, image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85", tags:["Culture","Trekking"] }
];

const trails = [
  {name:"Mahendragiri Sunrise Trail", place:"Gajapati, Odisha", level:"Moderate", time:"5–6 hrs", image:destinations[0].image},
  {name:"Living Root Bridges", place:"Meghalaya", level:"Moderate", time:"4 hrs", image:destinations[1].image},
  {name:"Shanti Stupa Trail", place:"Leh, Ladakh", level:"Easy", time:"2 hrs", image:destinations[2].image},
  {name:"Valley Alpine Route", place:"Uttarakhand", level:"Hard", time:"7 hrs", image:destinations[3].image}
];

function Layout({children}) {
  const [open,setOpen]=useState(false);
  return <div className="app">
    <header className="nav">
      <Link className="brand" to="/"><span className="brandMark">✦</span><span>Isekai<span>Trails</span><small>.com</small></span></Link>
      <button className="menuBtn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      <nav className={open?"navLinks open":"navLinks"}>
        <NavLink to="/" end onClick={()=>setOpen(false)}>Home</NavLink>
        <NavLink to="/explore" onClick={()=>setOpen(false)}>Explore</NavLink>
        <NavLink to="/destinations" onClick={()=>setOpen(false)}>Destinations</NavLink>
        <NavLink to="/trails" onClick={()=>setOpen(false)}>Trails</NavLink>
        <NavLink to="/trip-planner" onClick={()=>setOpen(false)}>Trip Planner</NavLink>
        <Link className="navLogin" to="/login" onClick={()=>setOpen(false)}>Login</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="footer">
      <div><Link className="brand footerBrand" to="/"><span className="brandMark">✦</span><span>Isekai<span>Trails</span><small>.com</small></span></Link><p>Go beyond the map. Find your next unforgettable trail.</p></div>
      <div><h4>Explore</h4><Link to="/destinations">Destinations</Link><Link to="/trails">Trails</Link><Link to="/trip-planner">Trip Planner</Link></div>
      <div><h4>Company</h4><a href="#about">About us</a><a href="#contact">Contact</a><a href="#safety">Safety</a></div>
      <div><h4>Newsletter</h4><p>Get new adventures in your inbox.</p><div className="newsletter"><input placeholder="Your email"/><button><ArrowRight/></button></div></div>
    </footer>
    <div className="copyright">© 2026 IsekaiTrails.com · Made for curious travellers.</div>
  </div>
}

function Home(){
 const [query,setQuery]=useState("");
 const navigate=useNavigate();
 const search=()=>navigate(`/explore${query?`?q=${encodeURIComponent(query)}`:""}`);
 return <Layout>
   <section className="hero">
    <div className="heroOverlay"/>
    <div className="heroContent">
      <div className="eyebrow"><Sparkles size={16}/> TRAVEL DIFFERENTLY</div>
      <h1>Find the trail<br/><em>that changes you.</em></h1>
      <p>Hidden valleys, wild mountains and stories waiting to be lived. Plan your next adventure with IsekaiTrails.</p>
      <div className="searchBox"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&search()} placeholder="Where do you want to go?"/><button onClick={search}>Explore <ArrowRight size={18}/></button></div>
      <div className="heroStats"><span><strong>120+</strong> Trails</span><span><strong>40+</strong> Destinations</span><span><strong>15k+</strong> Explorers</span></div>
    </div>
    <div className="scrollHint">SCROLL TO EXPLORE <ChevronRight size={16}/></div>
   </section>

   <section className="section intro">
    <div className="sectionLabel">WHY ISEKAITRAILS</div>
    <h2>Not just a trip.<br/><span>A story worth telling.</span></h2>
    <p className="lead">We connect curious travellers with extraordinary places—carefully selected trails, local experiences and flexible plans made for real adventure.</p>
    <div className="featureGrid">
      <Feature icon={<Compass/>} title="Curated Adventures" text="Handpicked routes from peaceful escapes to serious mountain challenges."/>
      <Feature icon={<ShieldCheck/>} title="Travel with Confidence" text="Clear difficulty, timings, essentials and safety information for every trail."/>
      <Feature icon={<Users/>} title="For Every Explorer" text="Build solo journeys, couples getaways, friend trips or family adventures."/>
    </div>
   </section>

   <section className="section darkSection">
    <div className="sectionTop"><div><div className="sectionLabel">POPULAR RIGHT NOW</div><h2>Places worth <span>getting lost in.</span></h2></div><Link className="textLink" to="/destinations">View all <ArrowRight/></Link></div>
    <div className="cardGrid">{destinations.slice(0,4).map(d=><DestinationCard key={d.id} d={d}/>)}</div>
   </section>

   <section className="plannerBanner">
    <div><div className="sectionLabel">YOUR ADVENTURE, YOUR WAY</div><h2>Build a trip that feels<br/><em>made for you.</em></h2><p>Choose where, when and how you want to travel. We'll help shape the route.</p><Link className="primaryBtn" to="/trip-planner">Plan my trip <ArrowRight/></Link></div>
    <div className="plannerArt"><Mountain/><span>✦</span><TentTree/></div>
   </section>
 </Layout>
}

function Feature({icon,title,text}){return <div className="feature"><div className="featureIcon">{icon}</div><h3>{title}</h3><p>{text}</p></div>}
function DestinationCard({d}){return <Link to={`/destinations/${d.id}`} className="destinationCard"><div className="cardImage" style={{backgroundImage:`url(${d.image})`}}><span className="pill">{d.type}</span><span className="rating"><Star size={13} fill="currentColor"/> {d.rating}</span></div><div className="cardBody"><h3>{d.name}</h3><p><MapPin size={14}/> {d.state}</p><div className="cardBottom"><strong>From ₹{d.price.toLocaleString()}</strong><span>Explore <ArrowRight size={15}/></span></div></div></Link>}

function Explore(){
 const params=new URLSearchParams(location.search); const q=params.get("q")||"";
 const [search,setSearch]=useState(q);
 const filtered=destinations.filter(d=>(d.name+" "+d.state+" "+d.type).toLowerCase().includes(search.toLowerCase()));
 return <Layout><PageHero title="Explore the extraordinary." text="Search destinations, discover new routes and start planning."/>
 <section className="section"><div className="exploreBar"><Search/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search destinations, states or experiences..."/><button>Filter</button></div><div className="cardGrid">{filtered.map(d=><DestinationCard key={d.id} d={d}/>)}</div>{!filtered.length&&<div className="empty">No adventures found. Try “mountain”, “Odisha” or “beach”.</div>}</section></Layout>
}

function Destinations(){
 return <Layout><PageHero title="Destinations." text="From eastern India’s hidden peaks to island-blue waters, choose your next chapter."/>
 <section className="section"><div className="sectionLabel">ALL DESTINATIONS</div><h2>Where will you <span>go next?</span></h2><div className="cardGrid">{destinations.map(d=><DestinationCard key={d.id} d={d}/>)}</div></section></Layout>
}

function Trails(){
 return <Layout><PageHero title="Trails & treks." text="Know the route before you take the first step."/>
 <section className="section"><div className="trailList">{trails.map((t,i)=><div className="trailRow" key={t.name}><img src={t.image}/><div className="trailInfo"><div className="sectionLabel">TRAIL {String(i+1).padStart(2,"0")}</div><h3>{t.name}</h3><p><MapPin size={14}/> {t.place}</p><div className="trailMeta"><span><Mountain size={15}/> {t.level}</span><span><Clock3 size={15}/> {t.time}</span></div></div><button className="iconArrow"><ArrowRight/></button></div>)}</div></section></Layout>
}

function TripPlanner(){
 const [done,setDone]=useState(false);
 const [form,setForm]=useState({destination:"Mahendragiri",days:"3",people:"2",style:"Adventure"});
 const update=e=>setForm({...form,[e.target.name]:e.target.value});
 return <Layout><PageHero title="Trip Planner." text="Tell us what you want. We'll turn it into an adventure."/>
 <section className="section plannerPage">{!done?<div className="plannerForm"><div className="formIntro"><Compass size={30}/><h2>Design your escape.</h2><p>Simple choices. Better adventures.</p></div>
 <label>Destination<select name="destination" value={form.destination} onChange={update}>{destinations.map(d=><option key={d.id}>{d.name}</option>)}</select></label>
 <div className="twoCol"><label>Trip length<select name="days" value={form.days} onChange={update}><option>2</option><option>3</option><option>5</option><option>7</option></select></label><label>Travellers<select name="people" value={form.people} onChange={update}><option>1</option><option>2</option><option>3</option><option>4+</option></select></label></div>
 <label>Travel style<select name="style" value={form.style} onChange={update}><option>Adventure</option><option>Relaxed</option><option>Nature & Photography</option><option>Culture & Food</option></select></label>
 <button className="primaryBtn full" onClick={()=>setDone(true)}>Create my itinerary <ArrowRight/></button></div>
 :<div className="successBox"><CheckCircle2 size={56}/><h2>Your adventure is taking shape!</h2><p>{form.days} days in {form.destination} for {form.people} traveller(s), focused on {form.style.toLowerCase()}.</p><button className="primaryBtn" onClick={()=>setDone(false)}>Edit plan</button></div>}</section></Layout>
}

function Login(){
 const [registered,setRegistered]=useState(false);
 return <Layout><section className="auth"><div className="authCard"><div className="brand authBrand"><span className="brandMark">✦</span><span>Isekai<span>Trails</span><small>.com</small></span></div><div className="sectionLabel">{registered?"WELCOME":"YOUR JOURNEY STARTS HERE"}</div><h1>{registered?"You're in.":"Welcome back."}</h1><p>Save trips, track your adventures and keep your favourite trails close.</p><label>Email<input type="email" placeholder="you@example.com"/></label><label>Password<input type="password" placeholder="••••••••"/></label><button className="primaryBtn full" onClick={()=>setRegistered(true)}>{registered?"Continue":"Sign in"} <ArrowRight/></button><div className="authDivider">OR</div><button className="socialBtn">Continue with Google</button><p className="small">New here? <Link to="/register">Create an account</Link></p></div></section></Layout>
}
function Register(){return <Layout><section className="auth"><div className="authCard"><div className="brand authBrand"><span className="brandMark">✦</span><span>Isekai<span>Trails</span><small>.com</small></span></div><div className="sectionLabel">JOIN THE EXPLORERS</div><h1>Create your account.</h1><p>Keep your travel history and build your next adventure.</p><label>Full name<input placeholder="Your name"/></label><label>Email<input type="email" placeholder="you@example.com"/></label><label>Password<input type="password" placeholder="Create a password"/></label><button className="primaryBtn full">Create account <ArrowRight/></button><p className="small">Already have an account? <Link to="/login">Sign in</Link></p></div></section></Layout>}

function PageHero({title,text}){return <section className="pageHero"><div className="sectionLabel">ISEKAITRAILS.COM</div><h1>{title}</h1><p>{text}</p></section>}
function App(){return <Routes><Route path="/" element={<Home/>}/><Route path="/explore" element={<Explore/>}/><Route path="/destinations" element={<Destinations/>}/><Route path="/destinations/:id" element={<Destinations/>}/><Route path="/trails" element={<Trails/>}/><Route path="/trip-planner" element={<TripPlanner/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/></Routes>}
createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);
