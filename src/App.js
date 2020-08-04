import React from 'react';
import './App.css';
import Header from './Header/Header.js'
import Footer from  './Footer/Footer.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  //Link
} from "react-router-dom";


const App = () => {

return(
  <Router>

    <Header />


    <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet pulvinar augue, ut feugiat leo. Mauris nisi lectus, imperdiet ac nisl mollis, fringilla fermentum felis. Proin scelerisque nibh non eros lacinia, non rutrum justo mollis. Mauris nec tempor ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum at aliquet est, eget efficitur nisi. Sed laoreet augue ac felis consequat finibus. Proin volutpat ullamcorper vulputate. Vestibulum eget enim purus. Aliquam vel cursus lorem. Vestibulum faucibus lectus lacinia turpis fringilla condimentum. Sed id tortor nec est maximus aliquam. Morbi eleifend diam eget arcu ullamcorper hendrerit.

In lobortis tristique facilisis. Proin vulputate ipsum condimentum, commodo magna vehicula, hendrerit libero. Mauris sed turpis in nulla venenatis ultrices non at erat. Mauris id ipsum lectus. Curabitur finibus orci a lacus tincidunt, ac tempor nisl fringilla. Morbi congue vitae ex ac egestas. Integer at elit interdum, volutpat neque ac, egestas lectus. Suspendisse efficitur dignissim felis luctus varius. Duis tempor nisl sed quam rutrum scelerisque. Pellentesque hendrerit diam eu tincidunt ultrices. Nulla faucibus risus sapien, sed mattis purus placerat sit amet. In hac habitasse platea dictumst. Proin feugiat volutpat neque. Nam et sem vel sapien egestas tristique sed sed nisi. Pellentesque id urna urna. Integer sit amet libero quis lectus ultrices posuere non a orci.

Nunc eu lectus malesuada, porta leo vitae, accumsan neque. Aenean rhoncus in enim ut efficitur. Vivamus et hendrerit lacus, eu vestibulum tortor. Ut ultricies suscipit pulvinar. Etiam vitae malesuada diam, at vehicula leo. Phasellus at dictum enim, sit amet efficitur urna. Vivamus tortor odio, malesuada nec pulvinar ac, egestas vitae sapien. Curabitur pellentesque odio sit amet turpis semper sagittis. Aliquam pellentesque tortor non dolor placerat, ut tincidunt velit volutpat. Nunc at nunc id enim viverra scelerisque.

Mauris ligula dolor, euismod at lorem vitae, efficitur auctor nibh. Nulla et tristique purus. Mauris et pretium nibh. Pellentesque varius augue in vehicula accumsan. Etiam facilisis nec eros sit amet pharetra. Vivamus vel tellus dolor. In vitae nulla lectus. Suspendisse dignissim arcu nisi, sed porttitor tortor feugiat semper. In gravida, felis in iaculis finibus, tortor urna pharetra magna, nec consequat nunc elit a mauris. Nam rutrum rhoncus facilisis.

In vehicula at nisl ac commodo. Quisque accumsan est sit amet pulvinar suscipit. Fusce in diam tortor. Vestibulum nisi turpis, commodo ac rhoncus vel, efficitur at enim. Duis sodales magna quis magna egestas, at vulputate sapien rutrum. Nulla porta libero non libero imperdiet, faucibus scelerisque est fringilla. Mauris lobortis, nisl sit amet laoreet interdum, elit sapien semper purus, et eleifend ipsum sapien quis ligula. Donec lacus urna, facilisis in finibus eget, facilisis ut sem.
     </p>
     
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet pulvinar augue, ut feugiat leo. Mauris nisi lectus, imperdiet ac nisl mollis, fringilla fermentum felis. Proin scelerisque nibh non eros lacinia, non rutrum justo mollis. Mauris nec tempor ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum at aliquet est, eget efficitur nisi. Sed laoreet augue ac felis consequat finibus. Proin volutpat ullamcorper vulputate. Vestibulum eget enim purus. Aliquam vel cursus lorem. Vestibulum faucibus lectus lacinia turpis fringilla condimentum. Sed id tortor nec est maximus aliquam. Morbi eleifend diam eget arcu ullamcorper hendrerit.

In lobortis tristique facilisis. Proin vulputate ipsum condimentum, commodo magna vehicula, hendrerit libero. Mauris sed turpis in nulla venenatis ultrices non at erat. Mauris id ipsum lectus. Curabitur finibus orci a lacus tincidunt, ac tempor nisl fringilla. Morbi congue vitae ex ac egestas. Integer at elit interdum, volutpat neque ac, egestas lectus. Suspendisse efficitur dignissim felis luctus varius. Duis tempor nisl sed quam rutrum scelerisque. Pellentesque hendrerit diam eu tincidunt ultrices. Nulla faucibus risus sapien, sed mattis purus placerat sit amet. In hac habitasse platea dictumst. Proin feugiat volutpat neque. Nam et sem vel sapien egestas tristique sed sed nisi. Pellentesque id urna urna. Integer sit amet libero quis lectus ultrices posuere non a orci.

Nunc eu lectus malesuada, porta leo vitae, accumsan neque. Aenean rhoncus in enim ut efficitur. Vivamus et hendrerit lacus, eu vestibulum tortor. Ut ultricies suscipit pulvinar. Etiam vitae malesuada diam, at vehicula leo. Phasellus at dictum enim, sit amet efficitur urna. Vivamus tortor odio, malesuada nec pulvinar ac, egestas vitae sapien. Curabitur pellentesque odio sit amet turpis semper sagittis. Aliquam pellentesque tortor non dolor placerat, ut tincidunt velit volutpat. Nunc at nunc id enim viverra scelerisque.

Mauris ligula dolor, euismod at lorem vitae, efficitur auctor nibh. Nulla et tristique purus. Mauris et pretium nibh. Pellentesque varius augue in vehicula accumsan. Etiam facilisis nec eros sit amet pharetra. Vivamus vel tellus dolor. In vitae nulla lectus. Suspendisse dignissim arcu nisi, sed porttitor tortor feugiat semper. In gravida, felis in iaculis finibus, tortor urna pharetra magna, nec consequat nunc elit a mauris. Nam rutrum rhoncus facilisis.

In vehicula at nisl ac commodo. Quisque accumsan est sit amet pulvinar suscipit. Fusce in diam tortor. Vestibulum nisi turpis, commodo ac rhoncus vel, efficitur at enim. Duis sodales magna quis magna egestas, at vulputate sapien rutrum. Nulla porta libero non libero imperdiet, faucibus scelerisque est fringilla. Mauris lobortis, nisl sit amet laoreet interdum, elit sapien semper purus, et eleifend ipsum sapien quis ligula. Donec lacus urna, facilisis in finibus eget, facilisis ut sem.
     </p>
     
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet pulvinar augue, ut feugiat leo. Mauris nisi lectus, imperdiet ac nisl mollis, fringilla fermentum felis. Proin scelerisque nibh non eros lacinia, non rutrum justo mollis. Mauris nec tempor ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum at aliquet est, eget efficitur nisi. Sed laoreet augue ac felis consequat finibus. Proin volutpat ullamcorper vulputate. Vestibulum eget enim purus. Aliquam vel cursus lorem. Vestibulum faucibus lectus lacinia turpis fringilla condimentum. Sed id tortor nec est maximus aliquam. Morbi eleifend diam eget arcu ullamcorper hendrerit.

In lobortis tristique facilisis. Proin vulputate ipsum condimentum, commodo magna vehicula, hendrerit libero. Mauris sed turpis in nulla venenatis ultrices non at erat. Mauris id ipsum lectus. Curabitur finibus orci a lacus tincidunt, ac tempor nisl fringilla. Morbi congue vitae ex ac egestas. Integer at elit interdum, volutpat neque ac, egestas lectus. Suspendisse efficitur dignissim felis luctus varius. Duis tempor nisl sed quam rutrum scelerisque. Pellentesque hendrerit diam eu tincidunt ultrices. Nulla faucibus risus sapien, sed mattis purus placerat sit amet. In hac habitasse platea dictumst. Proin feugiat volutpat neque. Nam et sem vel sapien egestas tristique sed sed nisi. Pellentesque id urna urna. Integer sit amet libero quis lectus ultrices posuere non a orci.

Nunc eu lectus malesuada, porta leo vitae, accumsan neque. Aenean rhoncus in enim ut efficitur. Vivamus et hendrerit lacus, eu vestibulum tortor. Ut ultricies suscipit pulvinar. Etiam vitae malesuada diam, at vehicula leo. Phasellus at dictum enim, sit amet efficitur urna. Vivamus tortor odio, malesuada nec pulvinar ac, egestas vitae sapien. Curabitur pellentesque odio sit amet turpis semper sagittis. Aliquam pellentesque tortor non dolor placerat, ut tincidunt velit volutpat. Nunc at nunc id enim viverra scelerisque.

Mauris ligula dolor, euismod at lorem vitae, efficitur auctor nibh. Nulla et tristique purus. Mauris et pretium nibh. Pellentesque varius augue in vehicula accumsan. Etiam facilisis nec eros sit amet pharetra. Vivamus vel tellus dolor. In vitae nulla lectus. Suspendisse dignissim arcu nisi, sed porttitor tortor feugiat semper. In gravida, felis in iaculis finibus, tortor urna pharetra magna, nec consequat nunc elit a mauris. Nam rutrum rhoncus facilisis.

In vehicula at nisl ac commodo. Quisque accumsan est sit amet pulvinar suscipit. Fusce in diam tortor. Vestibulum nisi turpis, commodo ac rhoncus vel, efficitur at enim. Duis sodales magna quis magna egestas, at vulputate sapien rutrum. Nulla porta libero non libero imperdiet, faucibus scelerisque est fringilla. Mauris lobortis, nisl sit amet laoreet interdum, elit sapien semper purus, et eleifend ipsum sapien quis ligula. Donec lacus urna, facilisis in finibus eget, facilisis ut sem.
     </p>
     
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet pulvinar augue, ut feugiat leo. Mauris nisi lectus, imperdiet ac nisl mollis, fringilla fermentum felis. Proin scelerisque nibh non eros lacinia, non rutrum justo mollis. Mauris nec tempor ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum at aliquet est, eget efficitur nisi. Sed laoreet augue ac felis consequat finibus. Proin volutpat ullamcorper vulputate. Vestibulum eget enim purus. Aliquam vel cursus lorem. Vestibulum faucibus lectus lacinia turpis fringilla condimentum. Sed id tortor nec est maximus aliquam. Morbi eleifend diam eget arcu ullamcorper hendrerit.

In lobortis tristique facilisis. Proin vulputate ipsum condimentum, commodo magna vehicula, hendrerit libero. Mauris sed turpis in nulla venenatis ultrices non at erat. Mauris id ipsum lectus. Curabitur finibus orci a lacus tincidunt, ac tempor nisl fringilla. Morbi congue vitae ex ac egestas. Integer at elit interdum, volutpat neque ac, egestas lectus. Suspendisse efficitur dignissim felis luctus varius. Duis tempor nisl sed quam rutrum scelerisque. Pellentesque hendrerit diam eu tincidunt ultrices. Nulla faucibus risus sapien, sed mattis purus placerat sit amet. In hac habitasse platea dictumst. Proin feugiat volutpat neque. Nam et sem vel sapien egestas tristique sed sed nisi. Pellentesque id urna urna. Integer sit amet libero quis lectus ultrices posuere non a orci.

Nunc eu lectus malesuada, porta leo vitae, accumsan neque. Aenean rhoncus in enim ut efficitur. Vivamus et hendrerit lacus, eu vestibulum tortor. Ut ultricies suscipit pulvinar. Etiam vitae malesuada diam, at vehicula leo. Phasellus at dictum enim, sit amet efficitur urna. Vivamus tortor odio, malesuada nec pulvinar ac, egestas vitae sapien. Curabitur pellentesque odio sit amet turpis semper sagittis. Aliquam pellentesque tortor non dolor placerat, ut tincidunt velit volutpat. Nunc at nunc id enim viverra scelerisque.

Mauris ligula dolor, euismod at lorem vitae, efficitur auctor nibh. Nulla et tristique purus. Mauris et pretium nibh. Pellentesque varius augue in vehicula accumsan. Etiam facilisis nec eros sit amet pharetra. Vivamus vel tellus dolor. In vitae nulla lectus. Suspendisse dignissim arcu nisi, sed porttitor tortor feugiat semper. In gravida, felis in iaculis finibus, tortor urna pharetra magna, nec consequat nunc elit a mauris. Nam rutrum rhoncus facilisis.

In vehicula at nisl ac commodo. Quisque accumsan est sit amet pulvinar suscipit. Fusce in diam tortor. Vestibulum nisi turpis, commodo ac rhoncus vel, efficitur at enim. Duis sodales magna quis magna egestas, at vulputate sapien rutrum. Nulla porta libero non libero imperdiet, faucibus scelerisque est fringilla. Mauris lobortis, nisl sit amet laoreet interdum, elit sapien semper purus, et eleifend ipsum sapien quis ligula. Donec lacus urna, facilisis in finibus eget, facilisis ut sem.
     </p>
     
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet pulvinar augue, ut feugiat leo. Mauris nisi lectus, imperdiet ac nisl mollis, fringilla fermentum felis. Proin scelerisque nibh non eros lacinia, non rutrum justo mollis. Mauris nec tempor ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum at aliquet est, eget efficitur nisi. Sed laoreet augue ac felis consequat finibus. Proin volutpat ullamcorper vulputate. Vestibulum eget enim purus. Aliquam vel cursus lorem. Vestibulum faucibus lectus lacinia turpis fringilla condimentum. Sed id tortor nec est maximus aliquam. Morbi eleifend diam eget arcu ullamcorper hendrerit.

In lobortis tristique facilisis. Proin vulputate ipsum condimentum, commodo magna vehicula, hendrerit libero. Mauris sed turpis in nulla venenatis ultrices non at erat. Mauris id ipsum lectus. Curabitur finibus orci a lacus tincidunt, ac tempor nisl fringilla. Morbi congue vitae ex ac egestas. Integer at elit interdum, volutpat neque ac, egestas lectus. Suspendisse efficitur dignissim felis luctus varius. Duis tempor nisl sed quam rutrum scelerisque. Pellentesque hendrerit diam eu tincidunt ultrices. Nulla faucibus risus sapien, sed mattis purus placerat sit amet. In hac habitasse platea dictumst. Proin feugiat volutpat neque. Nam et sem vel sapien egestas tristique sed sed nisi. Pellentesque id urna urna. Integer sit amet libero quis lectus ultrices posuere non a orci.

Nunc eu lectus malesuada, porta leo vitae, accumsan neque. Aenean rhoncus in enim ut efficitur. Vivamus et hendrerit lacus, eu vestibulum tortor. Ut ultricies suscipit pulvinar. Etiam vitae malesuada diam, at vehicula leo. Phasellus at dictum enim, sit amet efficitur urna. Vivamus tortor odio, malesuada nec pulvinar ac, egestas vitae sapien. Curabitur pellentesque odio sit amet turpis semper sagittis. Aliquam pellentesque tortor non dolor placerat, ut tincidunt velit volutpat. Nunc at nunc id enim viverra scelerisque.

Mauris ligula dolor, euismod at lorem vitae, efficitur auctor nibh. Nulla et tristique purus. Mauris et pretium nibh. Pellentesque varius augue in vehicula accumsan. Etiam facilisis nec eros sit amet pharetra. Vivamus vel tellus dolor. In vitae nulla lectus. Suspendisse dignissim arcu nisi, sed porttitor tortor feugiat semper. In gravida, felis in iaculis finibus, tortor urna pharetra magna, nec consequat nunc elit a mauris. Nam rutrum rhoncus facilisis.

In vehicula at nisl ac commodo. Quisque accumsan est sit amet pulvinar suscipit. Fusce in diam tortor. Vestibulum nisi turpis, commodo ac rhoncus vel, efficitur at enim. Duis sodales magna quis magna egestas, at vulputate sapien rutrum. Nulla porta libero non libero imperdiet, faucibus scelerisque est fringilla. Mauris lobortis, nisl sit amet laoreet interdum, elit sapien semper purus, et eleifend ipsum sapien quis ligula. Donec lacus urna, facilisis in finibus eget, facilisis ut sem.
     </p>

    <Switch>

      <Route path="/"/>


    </Switch>

    <Footer />

  </Router>
)




}

export default App;
