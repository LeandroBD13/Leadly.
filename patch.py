import sys

with open("src/App.tsx", "r") as f:
    content = f.read()

# Replace block 1
block1_old = """  const [phase, setPhase] = useState<'typing' | 'search' | 'zoom' | 'logo' | 'hero'>('typing');
  const [typedText, setTypedText] = useState('');
  const textToType = "Who is the best?";"""
block1_new = """  const [phase, setPhase] = useState<'typing' | 'search' | 'zoom' | 'logo' | 'hero'>('typing');
  const [cameraPhase, setCameraPhase] = useState<'following' | 'centering' | 'zoomingOut' | 'normal'>('following');
  const [typedText, setTypedText] = useState('');
  const textToType = "Who is the best?";"""
content = content.replace(block1_old, block1_new)

# Replace block 2
block2_old = """  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];
    
    // Typing phase
    textToType.split('').forEach((char, i) => {
      timers.push(setTimeout(() => setTypedText(prev => prev + char), 80 * i));
    });
    
    // Zoom out & form search bar
    timers.push(setTimeout(() => setPhase('search'), 1600));"""
block2_new = """  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];
    
    // Typing phase
    textToType.split('').forEach((char, i) => {
      timers.push(setTimeout(() => setTypedText(prev => prev + char), 80 * i));
    });
    
    // Camera sequence
    timers.push(setTimeout(() => setCameraPhase('centering'), 1300));
    timers.push(setTimeout(() => setCameraPhase('zoomingOut'), 1500));
    
    // Zoom out & form search bar
    timers.push(setTimeout(() => {
      setPhase('search');
      setCameraPhase('normal');
    }, 1600));"""
content = content.replace(block2_old, block2_new)

# Replace block 3
block3_old = """  return (
    <>"""
block3_new = """  let cameraAnim = { scale: 1, x: 0 };
  let cameraTrans: any = { duration: 0.8, ease: "easeInOut" };

  switch (cameraPhase) {
    case 'following':
      cameraAnim = { scale: 1.5, x: -80 };
      cameraTrans = { duration: 1.3, ease: "linear" };
      break;
    case 'centering':
      cameraAnim = { scale: 1.5, x: 0 };
      cameraTrans = { duration: 0.2, ease: "easeInOut" };
      break;
    case 'zoomingOut':
    case 'normal':
      cameraAnim = { scale: 1, x: 0 };
      cameraTrans = { duration: 0.6, ease: "easeInOut" };
      break;
  }

  return (
    <>"""
content = content.replace(block3_old, block3_new)

# Replace block 4
block4_old = """            {/* The Search Box Sequence */}
            <AnimatePresence>
              {(phase === 'typing' || phase === 'search') && ("""
block4_new = """            {/* The Search Box Sequence */}
            <motion.div
              initial={{ scale: 1.5, x: 80 }}
              animate={cameraAnim}
              transition={cameraTrans}
              className="flex justify-center items-center w-full h-full"
            >
              <AnimatePresence>
                {(phase === 'typing' || phase === 'search') && ("""
content = content.replace(block4_old, block4_new)

# Replace block 5
block5_old = """                </motion.div>
              )}
            </AnimatePresence>"""
block5_new = """                </motion.div>
              )}
            </AnimatePresence>
            </motion.div>"""
content = content.replace(block5_old, block5_new)

with open("src/App.tsx", "w") as f:
    f.write(content)
