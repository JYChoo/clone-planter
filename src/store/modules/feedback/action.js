export default {
  async registerFeedback(context, data) {
    const feedbackdata = {
      date: data.date,
      rating: data.rating,
      comment: data.comment,
    };

    const response = await fetch(
      `https://clone-plant-demo-default-rtdb.asia-southeast1.firebasedatabase.app/feedback/${data.userid}.json`,
      {
        method: "POST",
        body: JSON.stringify(feedbackdata),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to submit feedback. Please try again!"
      );
      throw error;
    }

    context.commit("registerFeedback", {
      ...feedbackdata,
      id: responseData.name,
      userid: data.userid
    });
  },
  async fetchFeedback(context){
    if (!context.getters.shouldUpdate){
      return ;
    }

    const userid = context.rootGetters.userId;

    const response = await fetch(`https://clone-plant-demo-default-rtdb.asia-southeast1.firebasedatabase.app/feedback/${userid}.json`);
    const responseData = await response.json();

    if (!response.ok){
      const error = new Error(
        responseData.message || "Failed to retrieve feedback."
      );
      throw error;
    }

    const feedback = [];

    for (const key in responseData){
      const fed = {
        id: key,
        userid: userid,
        date: responseData[key].date,
        rating: responseData[key].rating,
        comment: responseData[key].comment
      }
      feedback.unshift(fed)
    }
    context.commit('setFeedback', feedback)
    context.commit('setFetchTimeStamp');
  }
};
