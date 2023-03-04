<?php
session_start();
$current_file_name = basename($_SERVER["PHP_SELF"]);
  include ('usermanagement/config.php');
  include ('config.php');
  // SESSION CHECK SET OR NOT
if (!isset($_SESSION['username'])) {
  unset($_SESSION['username']);
  $_SESSION['usericonblinkdecide'] = "usericonblink";
} else {
  $_SESSION['username'] = $_SESSION['username'];
  $_SESSION['usericonblinkdecide'] = "usericonblinknone";
}
?>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7 "> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]><html class="no-js lt-ie10"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>

  <!-- Basic Page Needs
  ================================================== -->
  <meta charset="utf-8">
    <title><?php echo $lang['maintitle'] ?></title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  ================================================== -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <!-- Favicons
  ================================================== -->
  <link rel="shortcut icon" href="images/favicon.ico">
  <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">

  <!-- CSS
  ================================================== -->

  <link rel="stylesheet" href="stylesheets/base.css">
    <link rel="stylesheet" href="stylesheets/style.css">

   <!-- Modernizr
  ================================================== -->
    <script src="javascripts/modernizr.js"></script>
    
    
</head>
<style>
#more {display: none;}
#more2 {display: none;}
#more3 {display: none;}
#more4 {display: none;}

.usericonblinknone{
  animation:none;
}

.usericonblink {
    animation:blinkingIcon 2.5s infinite;
}
@keyframes blinkingIcon{
    0%{     opacity: 0;   }
    5%{     opacity: 0.1; }
    10%{    opacity: 0.2; }
    15%{    opacity: 0.3; }
    20%{    opacity: 0.4; }
    25%{    opacity: 0.5; }
    30%{    opacity: 0.6; }
    35%{    opacity: 0.7; }
    40%{    opacity: 0.8; }
    45%{    opacity: 0.9; }
    50%{    opacity: 1.0; }
    55%{    opacity: 0.9; }
    60%{    opacity: 0.8; }
    65%{    opacity: 0.7; }
    70%{    opacity: 0.6; }
    75%{    opacity: 0.5; }
    80%{    opacity: 0.4; }
    85%{    opacity: 0.3; }
    90%{    opacity: 0.2; }
    95%{    opacity: 0.1; }
    100%{   opacity: 0;   }
    
}
</style>

<body>



<div id="main-wrapper">

        <!-- main navigation -->
        <div class="menusurround">
                    
      
      <div class="header-inner d-none d-lg-flex flex-container space-between social-icons">
        <a class="<?php echo $_SESSION['usericonblinkdecide']?>" id="usericonactivepassive" href="usermanagement/index.php"><img class="usericon" src="images/usericon/usericon.png"/></a>
        <input id="menu-toggle" type="checkbox">
        <label id="menu-label" for="menu-toggle">
                  <img class="languagemain" src="<?php echo $lang['langmainselect']?>"/>
                </label>
        <div id="collapse-menu">
          <a href="<?php echo $current_file_name."?".$lang["index_option2_link"]?>"><img class="language" src="<?php echo $lang['lang2select']?>"></a>
          <a href="<?php echo $current_file_name."?".$lang["index_option3_link"]?>"><img class="language" src="<?php echo $lang['lang3select']?>"></a>
        </div>
        
      </div>
    
              
                      <nav id="menu" class="menu">
                      <ul id="mainnav" class="level-1 slide-nav">

                        <li class="no-subnav">
                  <a href="#home-marker"><?php echo $lang['home_link']?></a>
                        </li>
                
                    <li class="no-subnav">
                          <a href="#about-marker"><?php echo $lang['about_link']?></a>
                        </li>
                
                    <li class="no-subnav">
                          <a href="#services-marker"><?php echo $lang['events_link']?></a>
                        </li>
        
                        <li class="no-subnav">
                  <a href="#staff-marker"><?php echo $lang['the_team_link']?></a>
                </li>
        
                <li class="no-subnav">
                  <a href="#portfolio-marker"><?php echo $lang['portfolio_link']?></a>
                </li>
                
                        <li class="no-subnav">
                          <a href="#blog-marker"><?php echo $lang['content_link']?></a>
                        </li>
                        
                                <li class="no-subnav">
                                  <a href="#contact-marker"><?php echo $lang['contact_link']?></a>
                                </li>

              </ul>
                  </nav>
                <!-- end menu -->   
                    <!-- add logo --> 
                   
                     <a href="<?php echo $lang['home_marker']?>"><img class="logo-image" src="images/logo/Logo-design_FunCatchers_2020_Agness_black.jpg"></a>
                    
                    <!-- end logo --> 
                    
                </div><!-- /main navigation --> 

  <a id="home-marker" class="anchor"></a>

    
    <!-- Home Section - Camera Slider
      ================================================== -->  
      <section id="home-section" class="section-wrapper very-top-padding">


            


          
                
          
              <div class="fluid_container">



          
                <div class="camera_wrap pattern_10" id="camera_wrap_1">

          
                      <!-- slide -->
                    <div data-src="images/homesection/sports.jpg">
                      <div class="camera_caption moveFromRight">
                          <?php echo $lang['sportsactivities']?>
              </div>
                  </div><!-- /slide -->
                
                      <!-- slide -->
                  <div data-src="images/homesection/holidays.jpg">
                      <div class="camera_caption fadeFromBottom">
                          <?php echo $lang['holidays']?>
                      </div>
                  </div><!-- /slide -->
                    
                      <!-- slide -->
                  <div data-src="images/homesection/meetings.jpg">
                      <div class="camera_caption fadeFromTop">
                          <?php echo $lang['meetings']?>
                      </div>
                  </div><!-- /slide -->
                    
                      <!-- slide -->
                  <div data-src="images/homesection/movie.jpg">
                      <div class="camera_caption fadeFromBottom">
                          <?php echo $lang['movie']?>
                      </div>
                  </div><!-- /slide -->
                    
                      <!-- slide -->
                  <div data-src="images/homesection/orientation.jpg">
                      <div class="camera_caption moveFromRight">
                          <?php echo $lang['orientation']?>
                      </div>
                  </div><!-- /slide -->
                    
                      <!-- slide -->
                  <div data-src="images/homesection/more.jpg">
                      <div class="camera_caption fadeFromBottom">
                          <?php echo $lang['andmore']?>
                      </div>
                  </div><!-- /slide -->
        
                  </div><!-- /camera_wrap_1 -->
      
              </div><!-- /fluid_container -->
        <br class="clear">
          
        </section>
    <!-- End Home Section - Camera Slider
      ================================================== --> 
      

  <a id="about-marker" class="anchor"></a>
       
    <!-- About Section
      ================================================== -->
    <section id="about-section" class="section-wrapper about-section"><!-- add main section background here -->
          <div class="background-inner1"><!-- add parallax background -->
              <div class="background-inner3"><!-- add background color css to this div -->
                <div class="section-inner"><!-- add background pattern css to this div -->
            
                      <!-- uncomment items below for shadows -->
                <img src="images/shadow-top.png" class="shadow-top" alt="shadow">  
                    <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow"> 
            
                       <div class="container">
                    
                              <h2 class="section-title"><?php echo $lang['maintitle']?><br /><span><?php echo $lang['funformany']?></span></h2>
                
                          <p class="section-text2"><?php echo $lang['aboutfuncat']?></p>
                                    
                                 </div>
                        
                  <!-- slider -->
                            <ul id="about_slider">
                                        <li><img src="images/logo/FunCatchers_logo_design_2020okt.png" width="300px" alt="slide"></li>
                                        <li><img src="images/logo/FunCatchers_logo_design_2020okt_white.png" width="300px" alt="slide"></li> 
                      </ul><!-- /slider -->
                                
                                
                                <div class="container pt25">            
                                
                                <!-- featured -->
                                <div class="row">
                                
                                <div class="one-third column">
                  <h3 class="chunk"><?php echo $lang['weorganize']?><span class="colored">:</span></h3>
                                
                                      <p>
                                        <?php echo $lang['sportsevents']?><br>
                                        <?php echo $lang['childrensport']?>
                                        </p>
                
                                </div>
                      
                                <div class="one-third column">
                  <h3 class="chunk"><?php echo $lang['weimprove']?><span class="colored">:</span></h3>
                                
                                      <p>
                                        <?php echo $lang['thequalityoflife']?><br>
                                        <?php echo $lang['childrencomprehensive']?>
                                        </p>
                
                                </div>
                                
                                <div class="one-third column">
                  <h3 class="chunk"><?php echo $lang['wedevelop']?><span class="colored">:</span></h3>
                                
                                      <p>
                                        <?php echo $lang['thinkpositive']?><br>
                                        <?php echo $lang['childrencomprehensivephysical']?> 
                                        </p>
                                </div>
                                

                                </div>
                                <!-- /featured -->

                      </div><!-- /container -->
                            
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End About Section
      ================================================== -->
      
    
    
    
    
    
    <a id="services-marker" class="anchor"></a>
    
    <!-- Services Section
      ================================================== -->
        <section id="services-section" class="section-wrapper services-section"><!-- add main section background here -->
          <div class="background-inner1"><!-- add parallax background -->
              <div class="background-inner3"><!-- add background color css to this div -->
                <div class="section-inner"><!-- add background pattern css to this div -->
                        
                <!-- uncomment items below for shadows -->
              <img src="images/shadow-top.png" class="shadow-top" alt="shadow"> 
                  <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow">
                
                      <div class="container">
                
                        <h2 class="section-title"><?php echo $lang['whatwedo']?><br /><span><?php echo $lang['asmallsampling']?></span></h2>
                
            
                
                
                        <!-- services row-->
                            <div class="row">
                    
                                <div class="eight columns">
                                  <div class="service text-center">
                                      <h2 class="serv"><i class="icon-tools icon"></i><?php echo $lang['becomeamember']?></h2>
                                        <button onclick=" window.open('https://docs.google.com/forms/d/e/1FAIpQLScdbe88W-wG0iPJYFnQPwttiiJAAIzfAsKp-1Yfquf6KU4lgg/viewform?usp=sf_link','_blank')"><?php echo $lang['latvian']?></button>
                                            <button onclick=" window.open('https://docs.google.com/forms/d/e/1FAIpQLSfvva8IAwwKtGj1u90Ygefopvup0SfpphmLRHCB5KBSlS2Wpg/viewform?usp=sf_link','_blank')"><?php echo $lang['russian']?></button>
                                  </div>
                                </div>
                         
                            
                                <div class="eight columns">
                                  <div class="service text-center">
                                    <a href="<?php echo $lang['chat_marker']?>">
                                      <h2 class="serv"><i class="icon-chat icon"></i><?php echo $lang['chat']?></h2>
                                    </a>
                                      <p><?php echo $lang['userschat']?><img height="30px" src="images/usericon/usericon.png"/></p>
                                  </div>
                                </div>
                            
                            </div><!-- /services row-->
                         
                            <!-- services row-->
                            <div class="row">
                    
                                <div class="eight columns">
                                  <div class="service">
                                    <a href="<?php echo $lang['calendar_marker']?>">
                                      <h2 class="serv"><i class="icon-calendar icon"></i><?php echo $lang['calendar']?></h2>
                                    </a>
                                        <p><?php echo $lang['calendarinfo']?></p>
                                  </div>
                                </div>
                    
                            
                                <div class="eight columns">
                                  <div class="service">
                                    <a href="<?php echo $lang['posts_marker']?>">
                                      <h2 class="serv"><i class="icon-newspaper icon"></i><?php echo $lang['publications']?></h2>
                                    </a>
                                        <p><?php echo $lang['pubdata']?></p>
                                  </div>
                                </div>


                                <div class="sixteen columns">
                                  <div class="service">
                                    <a href="<?php echo $lang['challenges_marker']?>">
                                      <h2 class="serv"><i class="icon-star icon"></i><?php echo $lang['challenge']?></h2>
                                    </a>
                                        <p><?php echo $lang['userschallenge']?><img height="30px" src="images/usericon/usericon.png"/></p>
                                  </div>
                                </div>
                            
                            </div><!-- /services row-->
                   
                        
                            
                        
                          </div><!-- /container -->
                            
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End Instagram Section
      ================================================== -->
    
    
    <!-- Twitter Section
      ================================================== -->
        <section><!-- add main section background here -->
              <img src="images/logo/FunCatchers_logo_design_2020okt_logo_white2.png">
                        
                <!-- uncomment items below for shadows -->
              <!-- <img src="images/shadow-top.png" class="shadow-top" alt="shadow"> -->  
                  <!-- <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow"> -->
    </section>
    <!-- End Twitter Section
      ================================================== -->
      



  <a id="staff-marker" class="anchor"></a>
    
    
    <!-- Staff Section
      ================================================== -->
        <section id="staff-section" class="section-wrapper staff-section"><!-- add main section background here -->
          <div class="background-inner1"><!-- add parallax background -->
              <div class="background-inner3"><!-- add background color css to this div -->
                <div class="section-inner"><!-- add background pattern css to this div -->
                        
                <!-- uncomment items below for shadows -->   
              <img src="images/shadow-top.png" class="shadow-top" alt="shadow">  
                  <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow">    
    
            <div class="container">
                
                  <h2 class="section-title"><?php echo $lang['ourcrew']?><br /><span><?php echo $lang['thefaces']?></span></h2>
                
                  <p class="section-text"><?php echo $lang['inthissection']?> </p>
                
                
                  <!-- row -->
                <div class="row">
    
                    <!-- col -->
                    <div class="four columns">
        
                        <!-- staff member -->
                        <div class="port-item-container">
                            <div class="port-box staff-port-box">
                                <div class="email staff-member">
                                    <div class="zoom-holder">
                                        <img  src="images/crew/Ilja.jpg" alt="staff">
                                    </div>
                                </div>
    
                                    <div class="port_item_title">
                                        <h4 class="staff-name"><?php echo $lang['ilja']?><br><?php echo $lang['kozukovskis']?></h4>
                                            <p class="staff-title"><em><?php echo $lang['founder']?></em></p>
                                                <p><?php echo $lang['ihavecompleted']?><span id="dots"></span><span id="more"> <br>

<?php echo $lang['ihavebeen']?><br><br>

<?php echo $lang['iparticipated']?><br><br>

<?php echo $lang['ialso']?><br><br>

<?php echo $lang['idoalotofsports']?><br><br>

<?php echo $lang['atthemoment']?></span></p>
<button onclick="myFunction()" id="myBtn"><?php echo $lang['readmore']?></button>
    
                                                    <div class="staff social">
                                                        <a href="https://www.facebook.com/ilja.kozukovskis" target="blank" class="tip facebook" title="Facebook"><i class="icon-facebook icon"></i></a>
                                                        <a href="https://www.instagram.com/ilja.mor" target="blank" class="tip pin" title="Instagram"><i class="icon-instagram icon"></i></a>
                        
                                                    </div>
                                    </div>
                            </div>
                        </div><!-- /staff member -->
    
                    </div><!-- /col -->


<!-- col -->
                            <div class="four columns">
        
                                <!-- staff member -->
                                <div class="port-item-container">
                                    <div class="port-box staff-port-box">
                                        <div class="email staff-member">
                                            <div class="zoom-holder">
                                                <img  src="images/crew/Nastja.jpg" alt="staff">
                                            </div>
                                        </div>
    
                                            <div class="port_item_title">
                                                <h4 class="staff-name"><?php echo $lang['anastasija']?><br><?php echo $lang['kozukovska']?></h4>
                                                    <p class="staff-title"><em><?php echo $lang['VIP']?></em></p>
<p><?php echo $lang['aboutmyself']?><br>
<?php echo $lang['asfar']?><span id="dots3"></span><span id="more3"><br>
<?php echo $lang['willhelp']?><br><br>
<?php echo $lang['attended']?><br><br>
<?php echo $lang['completed']?></span></p>
<button onclick="myFunction3()" id="myBtn3"><?php echo $lang['readmore']?></button>
                                                            <div class="staff social">
                                                                <a href="#" class="tip facebook" title="Facebook"><i class="icon-facebook icon"></i></a>
                                                                
                                                            </div>
                                            </div>
                                    </div>
                                </div><!-- /staff member -->
    
                            </div><!-- /col -->


                            <div class="four columns">
        
                                <!-- staff member -->
                                <div class="port-item-container">
                                    <div class="port-box staff-port-box">
                                        <div class="email staff-member">
                                            <div class="zoom-holder">
                                                <img  src="images/crew/Vika.jpg" alt="staff">
                                            </div>
                                        </div>
    
                                            <div class="port_item_title">
                                                <h4 class="staff-name"><?php echo $lang['vika']?><br><?php echo $lang['dangele']?></h4>
                                                    <p class="staff-title"><em><?php echo $lang['VIP']?></em></p>
<p><?php echo $lang['aboutmyself']?><br>
<?php echo $lang['myname']?><span id="dots4"></span><span id="more4"><br>
<?php echo $lang['attracted']?><br><br>
<?php echo $lang['ihave']?><br><br>
<?php echo $lang['atthemoment2']?></span></p>
<button onclick="myFunction4()" id="myBtn4"><?php echo $lang['readmore']?></button>
                                                            <div class="staff social">
                                                                <a href="#" class="tip facebook" title="Facebook"><i class="icon-facebook icon"></i></a>
                                                                
                                                            </div>
                                            </div>
                                    </div>
                                </div><!-- /staff member -->
    
                            </div><!-- /col -->
                            
                            
                            <!-- col -->
                    <div class="four columns">
        
                        <!-- staff member -->
                        <div class="port-item-container">
                            <div class="port-box staff-port-box">
                                <div class="email staff-member">
                                    <div class="zoom-holder">
                                        <img src="images/crew/Aleksandr.jpg" alt="staff">
                                    </div>
                                </div>
    
                                    <div class="port_item_title">
                                        <h4 class="staff-name"><?php echo $lang['aleksandrs']?><br><?php echo $lang['aniscenko']?></h4>
                                            <p class="staff-title"><em><?php echo $lang['cofounder']?></em></p>
                                                <p><?php echo $lang['acoachof']?><br>
<?php echo $lang['brmed2021']?><span id="dots2"></span><span id="more2"><br>
<?php echo $lang['simed2021']?><br>
<?php echo $lang['22place']?><br>
<?php echo $lang['brmed2018']?><br>
<?php echo $lang['brmed2017']?><br>
<?php echo $lang['simed2016']?><br><br>

<?php echo $lang['asformer']?><br>
<?php echo $lang['semi2012']?><br>
<?php echo $lang['simed2012']?><br>
<?php echo $lang['semi2011']?><br>
<?php echo $lang['simed2011']?><br>
<?php echo $lang['15place']?><br>
<?php echo $lang['simed20112']?> <br><br>

<?php echo $lang['education']?><br>
<?php echo $lang['professionalmaster']?><br>
<?php echo $lang['inyear2020']?><br>
<?php echo $lang['professionalbachelor']?><br><br>

<?php echo $lang['alsotomention']?><br>
<?php echo $lang['inyear20202']?><br>
<?php echo $lang['sinceyear2018']?><br>
<?php echo $lang['sinceyear2020']?>
</span></p>
<button onclick="myFunction2()" id="myBtn2"><?php echo $lang['readmore']?></button>
    
                                                    <div class="staff social">
                                                        
                                                        <a href="https://www.facebook.com/aleksandr.aniscenko.3/" target="blank" class="tip facebook" title="Facebook"><i class="icon-facebook icon"></i></a>
                                                        
                                                    </div>
                                    </div>
                            </div>
                        </div><!-- /staff member -->
    
                    </div><!-- /col -->


                
                    

            
              </div><!-- /row -->
                
                    </div><!-- /container -->
                            
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End Staff Section
      ================================================== -->
    
    
    
    
    
    
    
    
    
    <a id="portfolio-marker" class="anchor"></a>
    
    
    <!-- Portfolio Section
      ================================================== -->
        <section id="portfolio-section" class="section-wrapper portfolio-section"><!-- add main section background here -->
          <div class="background-inner1 "><!-- add parallax background -->
              <div class="background-inner3"><!-- add background color css to this div -->
                <div class="section-inner"><!-- add background pattern css to this div -->
                        
                <!-- uncomment items below for shadows -->
              <img src="images/shadow-top.png" class="shadow-top" alt="shadow">  
                   <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow">  
                 
              <div class="container">
                <h2 class="section-title"><?php echo $lang['ourworks']?><br /><span><?php echo $lang['afew']?></span></h2>
              
                        <!-- portfolio sorting navigation -->
                        <div class="row mb0">
                            <div id="navsort">
                                <ul>
                                    <li><a href="" title="all"><?php echo $lang['all']?></a></li>
                                    <li><a href="" title="cat1"><?php echo $lang['first_events']?></a></li>
                                    <li><a href="" title="cat2"><?php echo $lang['trainings']?></a></li>
                                    <li><a href="" title="cat3"><?php echo $lang['sports_orientation']?></a></li>
                                    <li><a href="" title="cat4"><?php echo $lang['football']?></a></li>
                                    <li><a href="" title="cat5"><?php echo $lang['airsoft']?></a></li>
                                    <li><a href="" title="cat6"><?php echo $lang['cooking']?></a></li>
                                    <li><a href="" title="cat7"><?php echo $lang['hike']?></a></li>
                                    <li><a href="" title="cat8"><?php echo $lang['movie_night']?></a></li>
                                    <li><a href="" title="cat9"><?php echo $lang['running']?></a></li>
                                    <li><a href="" title="cat10"><?php echo $lang['sports_days']?></a></li>
                                    <li><a href="" title="cat11"><?php echo $lang['trips_to_entertainment_places']?></a></li>
                                </ul>
                            </div>
                        </div><!-- /portfolio sorting navigation -->
            
                            
                            <!-- portfolio content -->
                            <div id="portfolio-content" class="sort fourcol"> 
        
                                <!-- portfolio item -->
                                <div class="port-outer cat5 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/12_06_2022/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-12_06_2022" title="12_06_2022">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['12_06_2022']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->


        
                                <!-- portfolio item -->
                                <div class="port-outer cat8 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/19_09_2020/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-19_09_2020" title="19_09_2020">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['19_09_2020']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->

<!-- portfolio item -->
                                <div class="port-outer cat5 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/23_04_2022/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-23_04_2022" title="23_04_2022">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['23_04_2022']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->


                                <div class="port-outer cat3 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/26_09_2020/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-26_09_2020" title="26_09_2020">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['26_09_2020']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->        
                               

                               <div class="port-outer cat5 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/2020_gads_airsoft/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-2020_gads_airsoft" title="2020_gads_airsoft">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['2020_gads_airsoft']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->
                                


                                <div class="port-outer cat6 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/cooking/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-cooking" title="cooking">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['cooking']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->



                                <div class="port-outer cat1 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/first_events/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-first_events" title="first_events">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['first_events']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->


                                <div class="port-outer cat4 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/Ghetto_Football_01_06_1_part/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-Ghetto_Football_01_06_1_part" title="Ghetto_Football_01_06_1_part">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['Ghetto_Football_01_06_1_part']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->


                                <div class="port-outer cat7 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/hike/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-hike" title="hike">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['hike']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->


                                <div class="port-outer cat9 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/Izskrien_rigu_Ebelmuizas_parks/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-Izskrien_rigu_Ebelmuizas_parks" title="Izskrien_rigu_Ebelmuizas_parks">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['Izskrien_rigu_Ebelmuizas_parks']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->


                                <div class="port-outer cat9 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/Izskrien_Rigu_viesturdarzs_2022/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-Izskrien_Rigu_viesturdarzs_2022" title="Izskrien_Rigu_viesturdarzs_2022">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['Izskrien_Rigu_viesturdarzs_2022']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->


                                <div class="port-outer cat11 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/Jump_Space/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-Jump_Space" title="Jump_Space">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['Jump_Space']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->

                                <div class="port-outer cat3 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/Orientation_2019/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-Orientation_2019" title="Orientation_2019">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['Orientation_2019']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->

                                <div class="port-outer cat9 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/Rimi_Maratons_2022/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-Rimi_Maratons_2022" title="Rimi_Maratons_2022">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['Rimi_Maratons_2022']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->

                                <div class="port-outer cat4 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/Sporta_diena_Ulbroka/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-Sporta_diena_Ulbroka" title="Sporta_diena_Ulbroka">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['Sporta_diena_Ulbroka']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->

                                <div class="port-outer cat3 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/Sporta_orientesana_11_06_2022/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-Sporta_orientesana_11_06_2022" title="Sporta_orientesana_11_06_2022">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['Sporta_orientesana_11_06_2022']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->

                                <div class="port-outer cat10 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/sports_days/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-sports_days" title="sports_days">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['sports_days']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->

                                <div class="port-outer cat9 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/Stirnu_buks_16_04_2022/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-Stirnu_buks_16_04_2022" title="Stirnu_buks_16_04_2022">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['Stirnu_buks_16_04_2022']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->

                                <div class="port-outer cat9 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/Stirnu_buks_18_06_2022/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-Stirnu_buks_18_06_2022" title="Stirnu_buks_18_06_2022">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['Stirnu_buks_18_06_2022']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->

                                <div class="port-outer cat9 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/Stirnu_buks_21_05_2022/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-Stirnu_buks_21_05_2022" title="Stirnu_buks_21_05_2022">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['Stirnu_buks_21_05_2022']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->

                                <div class="port-outer cat2 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/trainings/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-trainings" title="trainings">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['trainings']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->

                                <div class="port-outer cat11 all">
                                <div class="port-item-container">
                                    <div class="port-box2">
                                        <div class="zoom-holder">
                                            <img src="images/gallery/VR_Room/1.jpg" alt="portfolio">
                                                <a href="javascript:;" class="fancybox-VR_Room" title="VR_Room">
                                                <span class="entypo"><i class="icon-search icon"></i></span>
                                                    <div class="zoom">
                                                        <div class="zoom-inner"></div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>
    
                                    <div class="port-item-title"> 
                                        <span><?php echo $lang['VR_Room']?></span>
                                    </div>
                                </div>
                                </div><!-- /portfolio item -->
                                   
                                
                        </div><!-- /portfolio content -->
                        
                        
            
                        </div><!-- /container -->
                            
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End Portfolio Section
      ================================================== -->
      
      
   
      
    
      
      
      
    
    
    <a id="blog-marker" class="anchor"></a>
    
   
    
    <!-- Blog Section
      ================================================== -->
        <section id="blog-section" class="section-wrapper blog-section"><!-- add main section background here -->
          <div class="background-inner1"><!-- add parallax background -->
              <div class="background-inner3"><!-- add background color css to this div -->
                <div class="section-inner"><!-- add background pattern css to this div -->
                        
                <!-- uncomment items below for shadows -->
              <img src="images/shadow-top.png" class="shadow-top" alt="shadow">  
                  <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow">    
    
                <div class="container">
                <h2 class="section-title"><?php echo $lang['content']?><br /><span><?php echo $lang['getitdone']?></span></h2>
                
                    
                  <!-- left column -->
                  <div class="eleven columns">

                    <!-- blog entry --> 
                    <article class="post regular-post-type">
            
                        <h2 class="entry-title">
                            <?php echo $lang['lastvideo']?>
                        </h2>
                        <iframe src="https://player.twitch.tv/?channel=FunCatchersLV&parent=funcatchers.lv&autoplay=true&muted=true" frameborder="0" allowfullscreen="true" scrolling="no" style="height:395px;width:100%;"></iframe>             
    
                  </article><!-- /blog entry --> 
        
        
            </div><!-- /left column -->

            <div id="radioheart-player"
     class="foursquare-black"
     data-stream="https://listen.myrh.ru/id063680"
     data-autostart="false"
     data-volume="0.5"
     data-logo="https://billing.radioheart.ru/avatars/15124128885a2596d897c85.jpg"
     data-playtext="Нажмите play для начала воспроизведения"
>
    <div class="player-wrapper">
        <div class="logo" id="radioheart-player-logo" title=""></div>
        <div class="player-elements">
            <div class="controls">
                <div class="play" id="radioheart-player-play">
                    <i class="fa fa-play"></i>
                </div>
                <div class="pause hidden" id="radioheart-player-pause">
                    <i class="fa fa-stop"></i>
                </div>
            </div>
            <div class="sound-control">
                <div class="volume-control">
                    <div class="volume" id="radioheart-player-volume"></div>
                </div>
            </div>
            <div class="current-song marquee"
                 id="radioheart-player-current-song"
                 data-marquee=""
            >
            </div>
        </div>
        <div class="clear"></div>
    </div>
</div>

<script src="https://player.radioheart.ru/js/app.js"></script>
<link type="text/css" rel="stylesheet" href="https://player.radioheart.ru/css/app.css">
                
    
                  <!-- sidebar -->
                  <aside class="five columns">
                    
                
                    <div class="widget-box">
                        <div class="widget-box-content">
                            <h3><?php echo $lang['info']?></h3>
    
                            <p><?php echo $lang['weinvite']?></p> 
                           </div>
                    </div>
                
                    <div class="widget-box">
                        <div class="widget-box-content">
                            <h3><?php echo $lang['links']?></h3>
                            <ul>
                                <li><a href="https://www.facebook.com/groups/FunCatchersLV/" target="blank"><?php echo $lang['facebook']?></a></li>
                                <li><a href="https://www.instagram.com/funcatcherslv/" target="blank"><?php echo $lang['instagram']?></a></li>
                                <li><a href="https://www.tiktok.com/@funcatchers" target="blank"><?php echo $lang['tiktok']?></a></li>
                                <li><a href="https://www.youtube.com/channel/UCO05D9hP0CTgfCi5J-FB9fA" target="blank"><?php echo $lang['youtube']?></a></li>
                                <li><a href="https://www.twitch.tv/funcatcherslv" target="blank"><?php echo $lang['twitch']?></a></li>            
                            </ul>
                        </div>
                    </div>
                
                    
                        
                        
                
                      
            </aside><!-- /sidebar -->
    
              </div><!-- /container -->
                            
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End Blog Section
      ================================================== -->
      
     
    
    
    <a id="contact-marker" class="anchor"></a>
    
    <!-- Contact Section
      ================================================== -->
        <section id="contact-section" class="section-wrapper contact-section"><!-- add main section background here -->
          <div class="background-inner1"><!-- add parallax background -->
              <div class="background-inner3"><!-- add background color css to this div -->
                <div class="section-inner"><!-- add background pattern css to this div -->
                        
                <!-- uncomment items below for shadows -->
              <img src="images/shadow-top.png" class="shadow-top" alt="shadow">
                  <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow">               
                    
                    <h2 class="section-title"><?php echo $lang['getatus']?><br /><span><?php echo $lang['dontworry']?></span></h2>
                
                        <iframe width="100%" height="472" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2177.55237427337!2d24.376128415282334!3d56.92220060866286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e932c4ea294ce5%3A0x55aa989f71adca83!2sZah%C4%81rija%20Stopija%20iela%2C%20Upeslejas%2C%20Stopi%C5%86u%20novads%2C%20LV-2118!5e0!3m2!1slv!2slv!4v1624448159500!5m2!1slv!2slv" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>


                
                
                    
        
                  <div class="container">
            
                  <!-- left column -->
                  <div class="eleven columns">
    
                  <h2 class="chunk mb20"><?php echo $lang['quickcontact']?></h2>
                
                    <!-- form -->
                    <div id="contactWrapper">
                        <form action="mail.php" method="post" autocomplete="off" id="contactform">
                       <div class="stage">
                            <label for="name"><small><?php echo $lang['mailname']?> <em>*</em></small></label>
                            <input type="text" name="name" id="name" value="" class="required"  aria-required="true" />
                         </div>
    
                            <div class="stage">
                                <label for="email"><small><?php echo $lang['mailemail']?> <em>*</em></small></label>
                                <input type="text" name="email" id="email" value="" class="required email"  aria-required="true" />
                            </div>
    
                            <div class="stage">
                                <label for="subject"><small><?php echo $lang['mailsubject']?> <em>*</em></small></label>
                                <input type="text" name="subject" id="subject" value="" class="required"  aria-required="true" />
                            </div>
    
                            <div class="stage">
                                <label for="body"><small><?php echo $lang['mailmessage']?> <em>*</em></small></label>
                                <textarea rows="8" name="message" id="body" class="required"  aria-required="true"></textarea>
                            </div>
                            <button type="submit">
                  <?php echo $lang['sendmessage']?>
                </button>
        
                            
                        </form>
                    </div><!-- /form -->
    
                  </div><!-- /left column -->
            
                  <!-- right column -->
                  <aside class="four columns offset-by-one">
                      <div class="widget-box">
                          <div class="widget-box-content">
                              <h3><?php echo $lang['fullinfo']?></h3>
            
                              <p><strong><?php echo $lang['office']?></strong><br />
                              <?php echo $lang['upeslejas']?><br />
                              <?php echo $lang['ropazunovads']?><br />
                                    <?php echo $lang['street']?><br />
                                    <?php echo $lang['postindex']?></p>
    
                              <p><?php echo $lang['tel']?><br />
                              </p>
    
                              <p><a href="#"><?php echo $lang['contactemail']?></a><br /></p>
                          </div>
                      </div>
                  </aside><!-- /right column -->  
             
                  </div><!-- /container -->
                            
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End Contact Section
      ================================================== -->
      
      
    <!-- Footer Social Section
      ================================================== -->
        <section id="footer-social-section" class="section-wrapper footer-social-section"><!-- add main section background here -->
          <div class="background-inner1"><!-- add parallax background -->
              <div class="background-inner3 black70"><!-- add background color css to this div -->
                <div class="section-inner overlay6-20"><!-- add background pattern css to this div -->
                        
                <!-- uncomment items below for shadows -->
              <!-- <img src="images/shadow-top.png" class="shadow-top" alt="shadow"> -->  
                  <!-- <img src="images/shadow-bot.png" class="shadow-bot" alt="shadow"> -->
    
                    <div class="container">
                
                      <h2 class="outlined-title"><?php echo $lang['stayconnected']?></h2>
                        
                            <div class="sixteen columns">
                                     
                            <div class="widget-box-content no-svg">
                                <a href="https://www.facebook.com/groups/FunCatchersLV/" target="blank"><i class="fc-webicon facebook large"></i></a>
                              <a href="https://www.instagram.com/funcatcherslv/" target="blank"><i class="fc-webicon instagram large"></i></a>
                                </div>
                            
                              
                              </div>                      
                
            </div><!-- /container -->
                           
                      </div><!-- /section-inner -->
                  </div><!-- /background-inner3 -->
          </div><!-- /background-inner1 -->
    </section>
    <!-- End Footer Social Section
      ================================================== -->
      


    <!-- Footer
      ================================================== -->
        <footer class="footCreditsContainer">
            <div class="container footerCredits">
         
                <div class="eight columns">
                    <p class="creditsLeft">&copy;<script type="text/javascript">document.write(new Date().getFullYear())</script><?php echo $lang['reserved']?></p>
                </div>
         
                <div class="eight columns">
                    <p class="creditsRight"><?php echo $lang['join']?><a href="usermanagement/index.php"><?php echo $lang['maintitle']?></a></p>
                </div>
            </div>  
        </footer>        
    <!-- End Footer
      ================================================== -->
  
    <!-- to top button -->
    <p id="back-top">
    <a href="#home-marker"><i class="icon-up-open-big"></i></a>
  </p><!-- /to top button -->
    
</div><!-- /#main wrapper -->
    
   <!-- JS
  ================================================== -->
    
  <script src="javascripts/jquery-1.11.3.min.js"></script> 
  <!-- Load the Twitch embed script -->
<script src="https://player.twitch.tv/js/embed/v1.js"></script>
<!-- Create a Twitch.Player object. This will render within the placeholder div -->
<script type="text/javascript">
  new Twitch.Player("twitch-embed", {
    video: "1185102736"
  });
</script>


    <!-- preloader -->
  <script type="text/javascript">
  jQuery(document).ready(function() {
  jQuery("body").addClass("hidden_body");
   })
        jQuery(window).load(function() { // makes sure the whole site is loaded
          jQuery("#status").fadeOut(); // will first fade out the loading animation
          jQuery("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
          jQuery("body").removeClass("hidden_body"); 
       })
  </script>

    <!-- google map -->
  <script src="https://maps.google.com/maps/api/js?sensor=false"></script>
    <script src="javascripts/jquery.gmap.min.js"></script>
    <!-- end google map -->

    <!-- camera slider -->
  <script src="assets/camera/scripts/camera.js"></script> 
    <!-- end camera slider -->
    
     <script src="javascripts/jquery.validate.pack.js"></script>
     
    <script src="javascripts/<?php echo $lang['activelang']?>"></script>
    <script src="javascripts/screen.js"></script>

    <script>
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "<?php echo $lang['readmore']?>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "<?php echo $lang['readless']?>"; 
    moreText.style.display = "inline";
  }
}
</script>

    <script>
function myFunction2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "<?php echo $lang['readmore']?>"; 
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "<?php echo $lang['readless']?>"; 
    moreText2.style.display = "inline";
  }
}
</script>
<script>
function myFunction3() {
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "<?php echo $lang['readmore']?>"; 
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "<?php echo $lang['readless']?>"; 
    moreText3.style.display = "inline";
  }
}
</script>
<script>
function myFunction4() {
  var dots4 = document.getElementById("dots4");
  var moreText4 = document.getElementById("more4");
  var btnText4 = document.getElementById("myBtn4");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText4.innerHTML = "<?php echo $lang['readmore']?>"; 
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = "<?php echo $lang['readless']?>"; 
    moreText4.style.display = "inline";
  }
}
</script>





</body>
</html>