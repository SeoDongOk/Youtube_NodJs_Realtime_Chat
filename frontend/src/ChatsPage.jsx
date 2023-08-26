import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
// import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('PROJECT_API_KEY', props.user.username, props.user.secret);
    return <div style={{height:'100vh'}}>
              <MultiChatSocket  {...chatProps}/>
              <MultiChatWindow {...chatProps} style={{height:'100%'}}/>

          </div>

          
  };
// const ChatPage2 = (props) =>{
//   return (<div style={{height:'100vh'}}>
//     <PrettyChatWindow
//       projectId='PROJECT_API_KEY'
//       username={props.user.username}
//       secret={props.user.secret}
//       style={{height:'100%'}}
//     />
//   </div>)
// }
  export default ChatsPage;