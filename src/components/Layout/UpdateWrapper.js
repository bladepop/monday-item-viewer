import styled from "styled-components";
import { scrollBarStyle } from  '../../helpers/commonStyles';

const UpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: calc(100vh - ${({heightBuffer}) => heightBuffer});
  overflow-y: scroll;
  overflow-x: hidden;
  align-items: ${({standAlone}) => standAlone ? 'center' : 'flex-start'}; 
  padding-left: ${({standAlone}) => standAlone ? '0' : 'calc(50vw - 624px)'};


  ${scrollBarStyle}
`;

export default UpdateWrapper;