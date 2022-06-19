document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    e.target.reset();
  })
})


  //timer
  const counter=document.getElementById('counter')

  time=setInterval(()=>counter.innerHTML++,1000)
  //minus
  const minus =document.querySelector('#minus')
  minus.addEventListener('click',()=>{
    counter.innerHTML--
  })
  //plus
  const plus=document.querySelector('#plus')
  plus.addEventListener('click',()=>{
    counter.innerHTML++
  })
  //heart
  const heart=document.querySelector('#heart')
  let clickCount=0;
  
  heart.addEventListener('click',()=>{
    clickCount++
    const likes=document.querySelector('.likes')
    const list=document.createElement('li')
    likes.appendChild(list)
    const message=(`${counter.innerHTML} has been liked ${clickCount} time`)
    list.append(message) 
  })


  //comments
  const comments =document.querySelector('.comments')
  const submitBtn=document.querySelector('#submit')
  submitBtn.addEventListener('click',()=>{
    const input=document.querySelector("#commentinput")
    const newLi=document.createElement('li')
    newLi.innerHTML=(input.value)
    comments.appendChild(newLi)
    (input.value).target.reset();
  })

  
  
