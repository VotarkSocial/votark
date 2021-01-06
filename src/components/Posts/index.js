import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import * as selectors from '../../reducers'
import styles from './styles'
import { URL, STATIC_URL } from '../../../configuration'
import { ScrollView } from 'react-native-gesture-handler';
import FitImage from 'react-native-fit-image';
import { gridList } from '../../utils/gridList';
import { maskNumber } from '../../utils/mask';
import React, { useState} from 'react';
import { Actions } from 'react-native-router-flux';

const Posts = ({posts, isFetching, fetchedOnce,isOnSearchPage}) => {

    const [open, toggle] = useState(false);
    const [currentPost, changeCurrentPost] = useState(null);

    backAction = () => {
        if(open){
          toggle(false)
        }
      }

    if(isFetching && !fetchedOnce){
        return (
            <ScrollView style={styles.posts3}>
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
            <ScrollView style={isOnSearchPage?
                ((posts.length>1)?styles.posts:styles.posts3)
                :styles.posts2}>
                {
                    posts.map(row =>
                        <View style={styles.row} key={row[0].id}>
                            {row.map(post => 
                                <View key={post.id} style={
                                    styles.post}>
                                    <Text style={styles.text}>@{post.username} </Text>
                                    <Text style={styles.text}>topic:{post.topicname} </Text>
                                    <TouchableOpacity onPress={()=>{
                                        Actions.Inspect({
                                            id: post.id
                                        })
                                    }}>
                                        <FitImage  
                                            style={
                                                styles.image}
                                            source={{uri: STATIC_URL+post.image}} 
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.text}>victories:{maskNumber(post.victories)} </Text>
                                    <Text style={styles.text}>clasification:{maskNumber(post.order)} </Text>
                                    {/* {(post.id===currentPost) && open && 
                                        <TouchableOpacity style={styles.iconContainer} onPress={()=>toggle(false)}>
                                            <Image style={styles.icon} source={require('../../public/static/icon/close.png')}/>
                                        </TouchableOpacity>
                                    } */}
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
  (state, {posts, isOnSearchPage}) => ({
      posts:gridList(posts),
      isOnSearchPage: isOnSearchPage,
      isFetching: selectors.isFetchingPost(state),
      fetchedOnce: selectors.getFetchedOnce(state)
  }),
  dispatch => ({
    
  }),
)(Posts);
