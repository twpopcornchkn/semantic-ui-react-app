import React, {Component} from 'react';
import Wrapper from '../components/dashboard/wrapper';
import ContentBox from '../components/dashboard/contentBox';
import UserRating from '../components/dashboard/userRating'
import Feed from '../components/dashboard/feed'
import Progress from '../components/dashboard/progress'
import AddDoc from '../components/dashboard/addDocument'
import Statistic from '../components/dashboard/statistic'

class Home extends Component {
    render(){
        return <Wrapper>
                    <ContentBox classes="red" header="Overview">
                        <Statistic/>
                    </ContentBox>
                    <ContentBox classes="orange" header="Please submit a ticket">
                        <AddDoc/>
                    </ContentBox>
                    <ContentBox classes="inverted" header="Project Progress">
                        <Progress/>
                    </ContentBox>
                    <ContentBox classes="blue" header="User Activity">
                        <Feed/>
                    </ContentBox>
                    <ContentBox classes="blue" header="How are your active users trending over time?">
                        <UserRating/>
                    </ContentBox>
                </Wrapper>
    }
}

export default Home;