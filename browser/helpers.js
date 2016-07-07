var startHelper=function(id,restart){
 	if (this.currentSongId){
 		this.stop(this.currentSongId);
 	}
 	this.previousSongId=null;
 	var audio;
 	console.log('this.idToAudio[id]',this.idToAudio[id]);
 	if(this.idToAudio[id]&&(!restart)){
 		audio=this.idToAudio[id];
 	}
 	else{
 		audio = document.createElement('audio');
 		audio.src = '/api/songs/' + id + '/audio';
		audio.load();
 	}
	audio.addEventListener('ended', function () {
		this.next(this.currentSongId); // have not tested
	});
	var self=this;
	audio.addEventListener('timeupdate', function () {
		console.log('updating ;D');
		self.progress = 100 * audio.currentTime / audio.duration;
		self.$emit('updatingProgress',{progress:self.progress});
		// self.$digest();
	});

	audio.play(); 
	console.log('audio while playing',audio);
	this.idToAudio[id] = audio;	
	this.currentSongId = id;
	this.anySongPlaying = true;	
	this.noSongsPlayedYet = false;
	var toExport={previousSongId:this.previousSongId,currentSongId:this.currentSongId,anySongPlaying:this.anySongPlaying,noSongsPlayedYet:this.noSongsPlayedYet,progress:self.progress,idToAudio:this.idToAudio}
	this.$emit('changedSongState',toExport);
}

var stopHelper=function(id){
 	var audio = this.idToAudio[id];
 	audio.pause();
 	console.log('audio after paused',audio);

 	this.idToAudio[id]=audio;
 	this.anySongPlaying = false;
 	this.previousSongId = this.currentSongId;
 	this.currentSongId = null;
 	var toExport={anySongPlaying:this.anySongPlaying,previousSongId:this.previousSongId,currentSongId:this.currentSongId,idToAudio:this.idToAudio}
 	this.$emit('changedSongState',toExport);
 }



// var testHelper=function(id){
// 	console.log(this);
// 	console.log(id);
// }