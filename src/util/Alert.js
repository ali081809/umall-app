import { Toast } from 'antd-mobile';
 function Alert(msg) {
    Toast.info(msg,1);
    setTimeout(() => {
        Toast.hide();
    }, 3000);
}
export default Alert