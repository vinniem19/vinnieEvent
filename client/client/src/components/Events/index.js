// import React from 'react';
// import Search from '../Search'

// class Events extends React.Component {

    // constructor(props) {
    //     super();
    //     this.state = {
    //         results: [],
    //     }
    // }

    // handleClick = event => {
    //     event.preventDefault();

    //     let Url = "https://www.eventbriteapi.com/v3/events/search/?q=catholic&location.address=orlando&location.within=90mi&expand=event.venue.name&token=7UXOKY2RMFCRDK7JHJ5F";

    //     axios({
    //         url: Url,
    //         method: "GET"
    //     }).then((res) => {
    //         console.log(res);
    //         let eventsArray = res.data.events;
    //         //   let eventDetails = [{
    //         //       eventId: eventsArray[2].id,
    //         //       eventTitle: eventsArray[2].name.text,
    //         //       eventImg: eventsArray[2].logo.url,
    //         //       eventDescription: eventsArray[2].description.text,
    //         //       eventStartTime: eventsArray[2].start.local,
    //         //       eventEndTime: eventsArray[2].end.local
    //         //     }];
    //         this.setState({
    //             results: eventsArray
    //         })
    //         console.log(this.state.results);
    //         // console.log("made it here");
    //     });
    // };

//     render() {
//         return (
//             <div className='row'>
//                 <Search />

//             </div>
//         );
//     }
// };


// export default Events;