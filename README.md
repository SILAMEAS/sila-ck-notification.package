# Live Demo 
https://silameas.github.io/sila-ck-notification-npm/


# React + TypeScript + Vite

function App() {
  const [position,setPosition]=useState<PositionType>('bottom-left');
  const [type,setType]=useState<typeNotification>('success');
  const [animation,setAnimation]=useState<typeAnimation>('fade')
  const {NotificationComponent,triggerNotification}=useNotification(position);
React.useEffect(()=>{
  triggerNotification({
    type,
    message: `This is a ${type} message!`,
    duration: 3000,
    onClose: function (): void {
      throw new Error('Function not implemented.');
    },
    animation
  })
},[position,type,animation])
  return (
    <>
    {NotificationComponent}
    {/* Button Animation */}
        <div>
        <h1> Button Animation </h1>
        <button onClick={()=>{
        setType('success')
        }}>Success</button>
        <button onClick={()=>{
        setType('error')
        }}>Error</button>
        <button onClick={()=>{
       setType('info')
        }}>Info</button>
        <button onClick={()=>{
        setType('warning')
        }}>Warning</button>
      </div>
    {/* Button Position */}
      <div>
        <h1> Button Position </h1>
        <button onClick={()=>{
        setPosition('bottom-left')
        }}>Bottom Left</button>
        <button onClick={()=>{
        setPosition('bottom-right')
        }}>Bottom Right</button>
        <button onClick={()=>{
        setPosition('top-right')
        }}>Top Right</button>
        <button onClick={()=>{
        setPosition('top-left')
        }}>Top Left</button>
      </div>
    {/* Button Type */}
    <div>
        <h1> Button Type </h1>
        <button onClick={()=>{
       setAnimation('fade')
        }}>Fade</button>
        <button onClick={()=>{
     setAnimation('pop')
        }}>Pop</button>
        <button onClick={()=>{
       setAnimation('slide')
        }}>Slide</button>
  
      </div>
    </>
  )
}