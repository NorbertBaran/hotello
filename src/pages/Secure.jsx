const Secure = ({secure = () => true, correct, failed}) => {
    return(
        secure() ? {correct} : {failed}
    )
}

export default Secure