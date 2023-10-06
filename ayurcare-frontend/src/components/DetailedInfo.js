import React from 'react'

//images
import oilmassageimg from './images/oilmassageimg.jpg'
import sauna from './images/sauna.jpg'
import Hydro from './images/Hydro.jpg'
import Footer from './Footer'
import mud from './images/mud.jpg'
import vibro from './images/vibro.PNG' 

import { FaAngleUp } from 'react-icons/fa';

import './css/details.css'

const DetailedInfo = () => {
    return ( 
        <div>
            {/* <h1>Oil Massage </h1>
             <img className="card-img-top" src={oilmassageimg} alt="Card  cap3" style={{ width: '200px' 
            }} />
            <p>Oil massage is a boon for body and mind. It improves skin complexion by enhancing blood circulation. Massage also helps to tone up muscles, mobilize fat and to relieve musculoskeletal pain. It is scientifically proven that massage is best tool to reduce stress and tensions of daily life. Swedish type of massage is given at our Centre which emphasizes on different classical massage movements.</p>

            <h1>Sauna Bath</h1>
            <img className="card-img-top" src={sauna} alt="Card  cap3" style={{ width: '200px' 
            }} />
            <p>This induces relaxation and promotes sweating. Sauna reduces chronic pain more effectively than cognitive behavior therapy. It is indicated for rheumatic pain. Sauna has been proposed for treatment for conditions such as chronic fatigue syndrome, fibromyalgia, obstructive lung disease, and also for lifestyle related diseases like, diabetes, obesity and smoking induced symptoms.
            </p>

            <h1>Hydrothearpy </h1>
             <img className="card-img-top" src={Hydro} alt="Card  cap3" style={{ width: '200px' 
            }} />
            <p>The use of water in different forms, pressure and temperature to treat various ailments is called as Hydrotherapy. Even in Vedic period water was considered as (medicine) one of the best healing agent. Hydrotherapy includes different baths, packs and douches. Treatments like steam bath, spinal bath, spinal spray, hip bath, jacuzzi, enema, immersion bath, arm and foot bath, packs etc. are offered at our Centre in order to cure many ailments.</p>

            <h1>Mud Bath</h1>
             <img className="card-img-top" src={mud} alt="Card  cap3" style={{ width: '200px' 
            }} />
            <p>Mud bath and packs are main forms of mud therapy. Recent studies have shown that, mud bath works as antibiotic against certain germs. It is a very effective and simple treatment. It is used for giving coolness to body. Mud absorbs toxic substances of the body and ultimately eliminates from the body. Mud therapy is beneficial in treating skin diseases, digestive problems and allergic conditions. Hot mud is used in painful conditions.
            </p>

            <h1>Vibro/Powder Massage</h1>
            <img className="card-img-top" src={vibro} alt="Card  cap3" style={{ width: '200px' 
            }} />
            <p>Vibromassage is a type of massage based on the use of mechanical devices for vibration therapy, which pass vibration onto the body surface that is being massaged.Different vibrators are used in this type of massage which helps in mobilization of fat. vibromassage facilitates immediate relaxation, stress relief, pain relief, de-congestion, and weight loss.
            </p>


            <hr/>
            <hr/> */}

            
            <div className="card" >
                <div className="container">
                    <img  className="image" src={oilmassageimg} />
                    <div>
                         <h2 className="treatment-name">Oil Massage</h2>
                            <br/>
                            <p className="treatment-description">
                         Oil massage is a boon for body and mind. It improves skin complexion by enhancing blood circulation. Massage also helps to tone up muscles, mobilize fat and to relieve musculoskeletal pain. It is scientifically proven that massage is best tool to reduce stress and tensions of daily life. Swedish type of massage is given at our Centre which emphasizes on different classical massage movements.</p>  
                    </div>
                </div>
                   <button className='price-button'>Show the  Price details</button>
            </div>
            <br/>
            <div className="card" >
                <div className="container">
                    <img  className="image" src={Hydro} />
                    <div>
                         <h2 className="treatment-name">Hydrothearpy </h2>
                            <br/>
                            <p className="treatment-description">
                            The use of water in different forms, pressure and temperature to treat various ailments is called as Hydrotherapy. Even in Vedic period water was considered as (medicine) one of the best healing agent. Hydrotherapy includes different baths, packs and douches. Treatments like steam bath, spinal bath, spinal spray, hip bath, jacuzzi, enema, immersion bath, arm and foot bath, packs etc. are offered at our Centre in order to cure many ailments.</p>  
                    </div>
                </div>
                   <button className='price-button'>Show the  Price details</button>
            </div>
            <br/>
            
            <div className="card" >
                <div className="container">
                    <img  className="image" src={mud} />
                    <div>
                         <h2 className="treatment-name">Mud Bath</h2>
                            <br/>
                            <p className="treatment-description">
                          Mud bath and packs are main forms of mud therapy. Recent studies have shown that, mud bath works as antibiotic against certain germs. It is a very effective and simple treatment. It is used for giving coolness to body. Mud absorbs toxic substances of the body and ultimately eliminates from the body. Mud therapy is beneficial in treating skin diseases, digestive problems and allergic conditions. Hot mud is used in painful conditions.</p>  
                    </div>
                </div>
                   <button className='price-button'>Show the  Price details</button>
            </div>
            <br/>
            <div className="card" >
                <div className="container">
                    <img  className="image" src={vibro} />
                    <div>
                         <h2 className="treatment-name">Vibro/Powder Massage</h2>
                            <br/>
                            <p className="treatment-description">
                            Vibromassage is a type of massage based on the use of mechanical devices for vibration therapy, which pass vibration onto the body surface that is being massaged.Different vibrators are used in this type of massage which helps in mobilization of fat. vibromassage facilitates immediate relaxation, stress relief, pain relief, de-congestion, and weight loss.</p>  
                    </div>
                </div>
                   <button className='price-button'>Show the  Price details</button>
            </div>

            <Footer/>
            

           

            {/* <div class="card shadow-sm"  style={{width: '800px', marginLeft : '100px'}}>
                <div class="card-header collapsible cursor-pointer rotate" data-bs-toggle="collapse" data-bs-target="#kt_docs_card_collapsible">
                    <h3 class="card-title">Vibro / Powder Massage <FaAngleUp style={{ marginRight: '200px'}}/></h3>
                    {/* <div class="card-toolbar rotate-180">
                       
                    </div> */}
                {/* </div> */}
                {/* <div id="kt_docs_card_collapsible" class="collapse show">
                    <div class="card-body">
                        Vibromassage is a type of massage based on the use of mechanical devices for vibration therapy, which pass vibration onto the body surface that is being massaged.Different vibrators are used in this type of massage which helps in mobilization of fat. vibromassage facilitates immediate relaxation, stress relief, pain relief, de-congestion, and weight loss.
                    </div>
                    <div class="card-footer">
                        Footer
                    </div>
                </div>
            </div> */} 

            
{/* 
<section class="light">
	<div class="container py-2">
		<div class="h1 text-center text-dark" id="pageHeaderTitle">My Cards Light</div>

		<article class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="#">Podcast Title</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
					<li class="tag__item play blue">
						<a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
		<article class="postcard light red">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />	
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title red"><a href="#">Podcast Title</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
					<li class="tag__item play red">
						<a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
		<article class="postcard light green">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://picsum.photos/500/501" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title green"><a href="#">Podcast Title</a></h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul class="postcard__tagbox">
					<li class="tag__item"><i class="fas fa-tag mr-2"></i>Podcast</li>
					<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>
					<li class="tag__item play green">
						<a href="#"><i class="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
		
	</div>
</section> */}
        </div>
    )
}

export default DetailedInfo