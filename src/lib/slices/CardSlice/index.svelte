<script>
  /** @type {import("@prismicio/client").Content.FrontSliceSlice} */
  export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} id="card">

  <article class="front cover">
    <div>
      
         <h1>{slice.primary.cardtitle[0].text}</h1> 
        <p>{slice.primary.cardparagraph[0].text}</p>
        <p>{slice.primary.cardlogo[0].text}</p>
    </div>
</article>

<div class="back cover">
    <section>
     <p></p>
     <p></p>
     <p></p>
   
  </div>

<div class="left cover">
    <p>{slice.primary.cardsidetext[0].text}</p>
</div>
<div class="right cover">
    <p>test</p>
</div>
<div class="bottom cover">
        <a href="{slice.primary.card_social_media_link_1.url}" alt="">linkdin
            <svg>
             
            </svg>
        </a>
        <a href="{slice.primary.card_social_media_link_1.url}" alt="">twitter
            <svg>
          
            </svg>
        </a>
  
      </div>
<div class="top cover"></div>


 <!-- <pre>
        {JSON.stringify(slice, null, 2)}
    </pre>   -->
</section>

<style>

  section {
  width:300px;
  height:400px;
  transform-style:preserve-3d;
  transform:rotate3d(0,0,0,190deg);
  position:relative;
  }

  .cover {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-radius: 1.5rem;
  background: #db6912;
  box-shadow: 0 0 0 #db6912, 0 0 0 #db6912;
  box-shadow: inset 20px 20px 60px #e48c49, inset -20px -20px 60px rgb(243, 157, 72);
  }

  .front{
    transform:translateZ(50px) translateX(0px) translateY(0px);
}

.back{
    transform:translateZ(0px) translateX(0px) translateY(0px) rotateY(180deg);
}

.left{
    transform:translateZ(25px) translateX(-25px) translateY(0px) rotateY(-90deg);
  width:50px;
}

.right{
    transform:translateZ(25px) translateX(275px) translateY(0px) rotateY(90deg);
  width:50px;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
}

.top{
    transform:translateZ(25px) translateX(0px) translateY(-25px) rotateX(90deg);
  height:50px;
}


.bottom{
    transform:translateZ(25px) translateX(0px) translateY(375px) rotateX(90deg);
  height:50px;
}

@media screen and (min-width: 0px) and (max-width: 600px){
  
  section{
  width:150px;
  height:220px;
}
  
  .right{
    transform:translateZ(25px) translateX(125px) translateY(0px) rotateY(90deg);
}
  
  .bottom{
    transform:translateZ(25px) translateX(0px) translateY(195px) rotateX(90deg);
}

}

</style>

