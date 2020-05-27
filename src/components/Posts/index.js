import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import * as selectors from '../../reducers'
import React from 'react';
import styles from './styles'
import { URL, STATIC_URL } from '../../../configuration'
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../../configuration';
import { logout } from '../../actions/auth';
import { ScrollView } from 'react-native-gesture-handler';
import FitImage from 'react-native-fit-image';
import { gridList } from '../../utils/gridList';

const Posts = ({posts, isFetching, fetchedOnce}) => {
    if(isFetching && !fetchedOnce){
        return (
            <ScrollView style={styles.posts}>
                <View style={styles.row}>
                    <View  style={styles.post}>
                        <Text style={styles.text}>{'LOADING...'}</Text>
                        <Text style={styles.text}>topic:</Text>
                        <FitImage  
                            style={styles.image}
                            source={{uri: STATIC_URL}} 
                        />
                        <Text style={styles.text}>victories: </Text>
                        <Text style={styles.text}>clasification:</Text>
                    </View>
                    <View style={styles.post}>
                        <Text style={styles.text}>{'LOADING...'} </Text>
                        <Text style={styles.text}>topic: </Text>
                        <FitImage  
                            style={styles.image}
                            source={{uri: STATIC_URL}} 
                        />
                        <Text style={styles.text}>victories:</Text>
                        <Text style={styles.text}>clasification:</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View  style={styles.post}>
                        <Text style={styles.text}>{'LOADING...'}</Text>
                        <Text style={styles.text}>topic:</Text>
                        <FitImage  
                            style={styles.image}
                            source={{uri: STATIC_URL}} 
                        />
                        <Text style={styles.text}>victories: </Text>
                        <Text style={styles.text}>clasification:</Text>
                    </View>
                    <View style={styles.post}>
                        <Text style={styles.text}>{'LOADING...'} </Text>
                        <Text style={styles.text}>topic: </Text>
                        <FitImage  
                            style={styles.image}
                            source={{uri: STATIC_URL}} 
                        />
                        <Text style={styles.text}>victories:</Text>
                        <Text style={styles.text}>clasification:</Text>
                    </View>
                </View>
            </ScrollView>
         )
    }
    if(posts.length!==0){
        return(
            <ScrollView style={styles.posts}>
                {
                    posts.map(row =>
                        <View style={styles.row} key={row[0].id}>
                            {row.map(post => 
                                <View key={post.id} style={styles.post}>
                                    <Text style={styles.text}>@{post.username} </Text>
                                    <Text style={styles.text}>topic:{post.topicname} </Text>
                                    <FitImage  
                                        style={styles.image}
                                        source={{uri: STATIC_URL+post.image}} 
                                    />
                                    <Text style={styles.text}>victories:{post.victories} </Text>
                                    <Text style={styles.text}>clasification:{post.order} </Text>
                                </View>
                            )}
                        </View>
                        )}
            </ScrollView>
    )}
    return (
        <Text style={styles.mainText}>NO POSTS</Text>)
};

export default connect(
  (state, {posts}) => ({
      posts:gridList(posts),
      isFetching: selectors.isFetchingPost(state),
      fetchedOnce: selectors.getFetchedOnce(state)
  }),
  dispatch => ({
    
  }),
)(Posts);
