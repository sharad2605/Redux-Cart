import classes from './Notification.module.css';



const Notification = (props) => {
    let SpecialClasses = '';

    if (props.type === 'success') {
        SpecialClasses = classes.success;
    }

    if (props.type === 'error') {
        SpecialClasses = classes.error;
    }

    const cssClasses = `${classes.notification} ${SpecialClasses}`

    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    );
};

export default Notification;