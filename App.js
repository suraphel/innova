import React, {Component} from 'react';
import Analytic from './Analytic/Analytic';
import Charts from './Chart/Charts';
import PieChart from './PieChart/PieChart';
import Icon from './Icon/Icon';
import Graphs from './Graphs/Graphs';
import Logo from './Logo/Logo.png';
import Links from './Links/Links';
import Avatar from './Avatar/Avatar'; 
import './App.css';

class App extends Component
{
    accountHandler  = (event) => {     
     const  clicked= "Links/something here shall run";
     alert("User account info");     
    }  
 
    helpHandler  = () => {       
      alert("Welcome to the help page");     
    }
           
     theName = ()=>{
       alert("this is for the icons");
    }

    theotherName = ()=>{
      alert("this is for the other icons to come");
    }

  render() { 
   
   return (                       
    // <div className="App">    
    

<div className = "topmenu">  
  <div className = "header">      

    <div className ="logo"> <img src= {Logo}  width="150px" height="63px"/> 

      <div className = 'toplink'>           
          <Links name = "ACCOUNTS" clicked = {this.accountHandler}/>
          <Links name = "CHARTS" clicked = {this.chartHandler}/>
          <Links name = "HELP" clicked = {this.helpHandler}/>    
      </div>          
          <div className = "toppicture">  
          <div className ="circleframe">
          <div className = "topmenudate" >   { new Date().toLocaleTimeString() }  
          <div className = "topmenutime">         
      </div> 
    </div>
   </div>
  </div>
 </div>
 </div>  

      <div className = "break"></div>   
      <div className = "separator"> </div>      
          {/* <div className = "header">  </div> */}
          <div className = "header2inner"> 
          <div className = "header2">
          <div className= "menybar">  

      
       {/* <i className = "fa fa caret-down" >OVERVIEW</i>  
       */}

       <div className="fa"> OVERVIEW</div>

          <div className = "Analytic">
              <Analytic name= "Total signups"
                        data="648"/>
              <Analytic name= "Last Week"
                        style = {{color: "pink"}}data="12"/>
              <Analytic name= "Total Investment"
                        data="102"/>       
              <Analytic name= "Average Inverstement"
                        data=   " 345,565"/>
              <Analytic name= "Total exits"
                        data="23"/>     
            </div>     
       
        
        <div className = "break"> </div>  

        </div>
        
                     
          <div  style = {{fontWeight:"normal"}} className = "loweMenu"> 
            <Links name = "Signups" clicked = {this.signupHandler}/>
            <Links name = "Investments" clicked = {this.chartHandler}/>
            <Links name = "Revenue" clicked = {this.helpHandler}/> 
            <Links name = "Exits" clicked = {this.accountHandler}/>
            <Links name = "Trade" clicked = {this.chartHandler}/>
          </div>      

         <div className = "break"></div>  
         <div className = "separator2"> </div>

            <div className = "innerIcon">
                <Icon user clicked ={this.theName} />
                <Icon Help clicked= {this.theotherName}/>
                <Icon calender clicked= {this.theName}/>    
                <Icon account  clicked = {this.theName}/>
                <Icon calender clicked= {this.theName}/>    
                <Icon account  clicked = {this.theName}/>
            </div>

              <div className = " innercontent"> 

                  <Charts chart = "Indiviual"/>
                    <div className ="piechart">                    
                        <piechart name = "what is it that u are looking after"/>                 

                  <Charts chart = "Companies"/>

                  <div className = "smallertable">  
                  <Charts chart = "Totalsignups" >  </Charts>                
                      {/* <div className = "break"> </div> */}
                  <Charts style = {{color: "red"}}chart = "Gender" > </Charts> 
                    </div>
                    <div className = "rightside"> </div>
              
                        <piechart/>
                         {/* </div>  */}
                         </div>
                    </div>     
                  </div>
                </div>     
            <div> 
          </div>  
         </div>
      );
     }
   }

   
export default App;




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

{/* 
//     /*     
    //     
    //     
    //   
   
    //             
    //             </div>
    //            </div>
    //          </div>
    //         {/* </div>      */}

          
  //                  
  //    
  //                    <div className = " linkz">
  //                        <Links name = "ACCOUNT"/>
  //                        <button onClick = {this.somefunctionHandler}>
  //                            <Links name = "ACCOUNT"/> 
  //                         </button>
                         
  //                         <Links name = "CHARTS"/>     
  //                         <button onClick = {this.somefunctionHandler}>
  //                            <Links name = "HELP"/> 
  //                         </button>
  //                         {/* running = {this.somefunctionHandler} */                       
