import {Header} from "../module/index"
import { HeaderWrapper,ImgHolder,HeadTexts,BioSection,BioList,MyArticle,ArticleHead } from '../component/style';
const aboutUsPage =(props)=>{
    console.log("data in about us",props.data)
return(
    <div className="wrapper">
        <Header/>
         <HeaderWrapper>
           <ImgHolder>
           <img src="/image.png" alt="image"/>
           <p>{props.data.eid}</p>
           </ImgHolder>
           <HeadTexts >
               <h1>{props.data.name}</h1>
               <h5>{props.data.designation}</h5>
               <h6 >{props.data.worksAs}</h6>
               <h6>{props.data.admittedAt}</h6>
           </HeadTexts>
           </HeaderWrapper>
           {/* <BioSection>
           <ul>
               <BioList>Short Biography</BioList>
               <BioList>Academic Curriculum</BioList>
               <BioList>Other Activities</BioList>
               <BioList>Memberships</BioList>
           </ul>
           <MyArticle>
               <ArticleHead>SHORT BIOGRAPHY</ArticleHead>
               <p>Fotis A. Karayannopoulos is a Senior Associate at KLC Law Firm. He is a practicing lawyer with 24 years field experience in Greece and many EU and non-EU States on all sorts of international law matters and business transactions.
                    He teaches International and EU Business Law in France and non-EU countries. Fotis is the Special Counsel for the Greek National Broadcaster (ERT) and a member of the Legal Committee of European Broadcasting Union. He also consults foreign governments (Balkans, Asia, Africa) on international law and foreign investment matters. 
                  <br/><br/> His extensive experience covers all matters on Corporate and Business Law, European Union Law, International transactions, Intellectual Property (IP) Law, Media Law, Human Rights and Justice Reform, foreign investments and public procurement.</p>
           </MyArticle>
       </BioSection> */}  
    </div>
)
}
export default aboutUsPage;