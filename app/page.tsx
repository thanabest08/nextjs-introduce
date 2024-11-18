'use client';
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [count,setcount] =useState(1);
  const [pic,setpic]=useState('https://i.postimg.cc/prfXrMYP/85.png');
  const [name,setname] =useState('After Class ชาเลนจ์กันหลังเลิกเรียน');
  const [infor,setinfor] =useState(
    'เป็นการจัดทำระบบเว็บแอพพลิเคชันสำหรับการจัดกิจกรรมเสริมหลักสูตรนอกเวลาเรียน มีวัตถุประสงค์เพื่อช่วยเพิ่มความน่าสนใจในการเรียนรู้ และส่งเสริมการเรียนรู้แบบปฏิบัติจริงมากกว่าทฤษฎี สนับสนุนและผลักดันให้เด็กนักเรียนได้แสดงศักยภาพของตัวเองได้มากขึ้น โดยจะให้ครูแต่ละรายวิชาสามารถมาสร้างกิจกรรมเสริมเนื้อหาที่เรียน หรือนอกเหนือจากเนื้อหาในชั้นเรียน ที่มีความหลากหลายตรงกับทักษะต่าง ๆ โดยในแต่ละกิจกรรมจะมีคะแนนให้นักเรียนสะสมนำไปแลกของรางวัล เพื่อสร้างแรงจูงใจและความกระตือรือร้นในการทำกิจกรรมและใช้เวลาว่างให้เกิดประโยชน์สูงสุด'
  );

  function num(){
    setcount(count+1)
    changepic();
    changename();
    changeinfor();
  }
  function changepic(){
    if(count > 4)setcount(1);
    else{
      if(count==1){
        setpic('https://i.postimg.cc/prfXrMYP/85.png');
      }
      if(count==2){
        setpic('https://i.postimg.cc/m24YTQQG/94.png');
      }
      if(count==3){
        setpic('https://i.postimg.cc/pdSQv4B0/84.png');
      }
      if(count==4){
        setpic('https://i.postimg.cc/5N5mzPx0/93.png');
      }
    }
  }
  function changename(){
    if(count > 4)setcount(1);
    else{
      if(count==1){
        setname('After Class ชาเลนจ์กันหลังเลิกเรียน');
      }
      if(count==2){
        setname('Bully Blocker');
      }
      if(count==3){
        setname('Calpon');
      }
      if(count==4){
        setname('Vegeter รวมพลังพืชผักพิทักษ์โลก');
      }
    }
  }
  function changeinfor(){
    if(count > 4)setcount(1);
    else{
      if(count==1){
        setinfor('เป็นการจัดทำระบบเว็บแอพพลิเคชันสำหรับการจัดกิจกรรมเสริมหลักสูตรนอกเวลาเรียน มีวัตถุประสงค์เพื่อช่วยเพิ่มความน่าสนใจในการเรียนรู้ และส่งเสริมการเรียนรู้แบบปฏิบัติจริงมากกว่าทฤษฎี สนับสนุนและผลักดันให้เด็กนักเรียนได้แสดงศักยภาพของตัวเองได้มากขึ้น โดยจะให้ครูแต่ละรายวิชาสามารถมาสร้างกิจกรรมเสริมเนื้อหาที่เรียน หรือนอกเหนือจากเนื้อหาในชั้นเรียน ที่มีความหลากหลายตรงกับทักษะต่าง ๆ โดยในแต่ละกิจกรรมจะมีคะแนนให้นักเรียนสะสมนำไปแลกของรางวัล เพื่อสร้างแรงจูงใจและความกระตือรือร้นในการทำกิจกรรมและใช้เวลาว่างให้เกิดประโยชน์สูงสุด');
      }
      if(count==2){
        setinfor('เป็น Browser extension ที่ช่วยป้องกันการเข้าถึงเนื้อหาบนเว็บไซต์ที่เข้าข่ายการบูลลี่ โดยใช้ AI เป็นตัวช่วยในการตรวจสอบสามารถใช้งานได้บน PC และ Smartphone โดยให้ผู้ใช้ทำการกำหนดคีย์เวิร์ดของคำที่ไม่ชอบด้วยตนเอง เมื่อตรวจพบระบบก็จะช่วยบล็อกเนื้อหาเหล่านั้นก่อนจะไปถึงผู้ใช้ในทางกลับกันระบบก็จะทำการตรวจสอบคำจากผู้ใช้งาน ถ้ามีการตรวจพบคำที่ไม่เหมาะสมระบบจะบล็อกคำดังกล่าว และให้ AI ให้ความรู้กับผู้ใช้งานว่าคำนี้เข้าข่ายการบูลลี่เพราะอะไร และควรจะใช้คำแบบไหนจึงจะเหมาะสม ซึ่งเป็นการรณรงค์ให้ความรู้และป้องกันไปพร้อม ๆ กัน');
      }
      if(count==3){
        setinfor('เป็นการจัดทำระบบแอพพลิเคชันสำหรับเพิ่มแรงจูงใจในการออกกำลังกาย เพื่อรักษาสุขภาพ ลดความเสี่ยงของโรคอ้วน ลดค่าใช้จ่ายในการรักษาพยาบาล และเป็นการเข้าถึงสวัสดิการได้ง่ายขึ้น โดยจะให้ผู้ใช้ทำการเปิดแอพพลิเคชันขณะวิ่งออกกำลังกาย เพื่อเก็บระยทาง และจำนวนก้าว นำมาเปลี่ยนเป็นแต้ม เพื่อนำแต้มจากการวิ่งไปเปลี่ยนเป็นคูปองส่วนลดสินค้า และบริการกับร้านผู้สนับสนุน เพื่อทำให้ความเสี่ยงจากโรคอ้วนลดน้อยลงได้ง่ายๆ และเป็นการได้ประโยชน์จากคูปองล่วนลดอีกด้วย');
      }
      if(count==4){
        setinfor('เป็นแอปที่ช่วยสร้างแรงจูงใจให้เด็กอยากทานผักและผลไม้มากยิ่งขึ้น โดยมีรูปแบบเป็นระบบจัดเก็บสถิติการกินผักและผลไม้บนโมบายแอปพลิเคชัน สะสมแต้มมาแลกของรางวัลจริง ๆ ในตู้สุ่มรางวัล หรือที่เรียกกันว่ากาชาปอง โดยในนั้นจะเป็นตุ๊กตาโมเดลพลาสติกตัวการ์ตูนซีรีย์ซูเปอร์ฮีโร่ธีมพืชผักผลไม้ ซึ่งเป็นรางวัลที่เด็กชื่นชอบ เหมาะสมกับวัยของกลุ่มเป้าหมาย ทำให้เด็ก ๆ อยากที่จะกินผักผลไม้เพื่อมาแลกของรางวัล');
      }
    }
  }

  
  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Itim&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=house" />
      </head>
      <header>
        <div className="navbar bg-base-100 border-2">
          <div className="flex-1">
            <a className="ml-8 text-3xl"><b>Best kubb</b></a>
          </div>
          <div className="flex-none">
            <div className="navbar-start">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="border-2 btn btn-ghost btn-square ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><a href="#home">about me</a></li>
                  <li><a href="#performance">performance</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="home">
        <div className="h-hvd grid grid-row-4 grid-cols-3 gap-3 p-3 pt-0">
          <div className="border-0 row-span-4 ">
            <div className="size-56 rounded-full border-2 border-black ml-28 mt-6"><img className="rounded-full" src='https://i.postimg.cc/tTjqgyx5/IMG-0215.jpg' alt='IMG-0215' /></div>
            <div className="box-content border-2 border-black m-2 my-5 rounded-2xl p-3 w-80 ml-14 h-72">
              <div className="p-4">
                <div className="text-3xl">
                  <table><tr><td>Contact&nbsp;</td>
                    <td><img className="size-6" src='https://i.postimg.cc/XNQ2KxDn/sparkles.png' alt='sparkles' /></td></tr></table>
                </div>
                <div className="py-2">
                  <table><tr><td><img className="size-5" src='https://i.postimg.cc/0rg0ssQv/home.png' alt='home' /></td>
                    <td>&nbsp;: 12 หมู่ 1 ต.ทางพระ อ.โพธิ์ทอง จ.อ่างทอง</td></tr></table>
                </div>
                <div className="py-2">
                  <table><tr><td><img className="size-5" src='https://i.postimg.cc/7Z82sKd8/envelope.png' alt='envelope' /></td>
                    <td>&nbsp;: thanabest08@gmail.com</td></tr></table>
                </div>
                <div className="py-2">
                  <table><tr><td><img className="size-5" src='https://i.postimg.cc/zvfGGbyS/phone-call.png' alt='phone-call' /></td>
                    <td>&nbsp;: 091-739-5070</td></tr></table>
                </div>
                <div className="py-2">
                  <a href="https://www.facebook.com/profile.php?id=100027611799094"><table><tr><td><img className="size-5" src='https://i.postimg.cc/1XcMXMh8/facebook.png' alt='facebook' /></td>
                    <td>&nbsp;: Thana Best</td></tr></table></a>
                </div>
                <div className="py-2">
                  <a href="https://www.instagram.com/thnthrbest/"><table><tr><td><img className="size-5" src='https://i.postimg.cc/j2PNSjfv/instagram.png' alt='instagram' /></td>
                    <td>&nbsp;: thnthrbest</td></tr></table></a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-0 row-span-4 h-96">
            <div className="box-content border-black border-2 m-2 mt-16 rounded-2xl p-3 w-96 h-64 ">
              <div className="p-4">
                <div className="text-2xl">
                  <table><tr><td>Me&nbsp;&nbsp;</td>
                    <td><img className="size-7" src='https://i.postimg.cc/jj0Q8v2L/user.png' alt='user' /></td></tr></table>
                </div>
                <div className="mt-3 text-xl">ชื่อ : นายธนทร วรนัทสิทธิกร <br /> ชื่อเล่น : เบส <br /> อายุ : 16 ปี <br /> เกิดวันที่ 4 สิงหาคม 2551 <br /> ปัจจุบันศึกษาอยู่ที่ : โรงเรียนสตรีอ่างทอง <br /> ระดับชั้นมัธยมศึกษาปีที่ : 4</div>
              </div>
            </div>
            <div className="box-content border-black border-2 m-2 mt-14 rounded-2xl p-3 w-96 h-36">
              <div className="p-4">
                <div className="text-2xl">
                  <table><tr><td>My&nbsp;skill&nbsp;&nbsp;</td>
                    <td><img className="size-7" src='https://i.postimg.cc/g0VbxM1p/bulb.png' alt='bulb' /></td></tr></table>
                </div>
                <div className="border-0 mt-3">-&nbsp;HTML , CSS , PHP , SQL , C , C++ , C#</div>
                <div className="border-0 mt-3">-&nbsp;Figma , Unity , MySQL , Canva </div>
              </div>
            </div>
          </div>
          <div className="border-0">
            <div className="box-content border-black border-2 m-2 my-16 rounded-2xl p-3 w-96 h-96">
              <div className="p-4">
                <div className="text-3xl">
                  <table><tr><td>About&nbsp;me&nbsp;&nbsp;</td>
                    <td><img className="size-7" src='https://i.postimg.cc/MHRtBctN/thumbtack.png' alt='thumbtack' /></td></tr></table>
                </div>
                <div className="border-0 mt-3 text-xl">-&nbsp;สวัสดีครับ ผมเบส <br />ผมเป็นคนชอบเข้าสังคม ชอบเรียนรู้สิ่งใหม่ๆ ชอบที่จะรู้จักคนอื่นมาก
                  เบสเกลียดการโดนบังคับแบบไร้เหตุผล
                  เบสไม่ชอบทำงานเป็นกลุ่มแต่สามารถทำได้ ละเบสไม่ชอบคนที่เห็นแก่ตัว เบสมีประสบการณ์ในการแข่งขัน
                  โครงงานคอมมาหลายงานทำให้เบสไม่ค่อยกลัวการพรีเซนต์สักเท่าไหร</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="performance">
        <div className="container border-0 h-dvh place-content-center">
          <div className="container w-full  border-0 flex flex-auto gap-8">
            <img className="border-2 border-black rounded-lg w-2/5 ml-28" src={pic}/>
            <div className="box-content border-black border-2 w-2/5 rounded-lg">
              <p className="text-2xl text-center mt-4">{name}</p>
              <p className="text-lg m-4 text-center ">{infor}</p>
            </div>
            <div className="place-content-center"><button className="btn btn-circle" onClick={num}><img src='https://i.postimg.cc/VvGwFW4Z/angle-small-right.png' alt='angle-small-right'/></button></div>
          </div>
        </div>
      </section> 
    </div>
  );
}