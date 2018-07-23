import axios from 'axios'
import Vue from 'vue'

// /world/postpage
// /world/addPost
// /world/getPostLists

export function addPost (params) {
	console.log(params)
	return Vue.jsonp(process.env.BASE_API+'/world/addPost', params);
};

export function getPostLists (params) {
	console.log(params)
	return Vue.jsonp(process.env.BASE_API+'/world/getPostLists', params);
};

