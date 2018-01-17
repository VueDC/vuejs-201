let data = {
	poses: [],
	types: [],
	experiences: [],
	sequences: []
}

let getData = () => {
}

let setPoses = (json) => {
	let types = []
	let experiences = []
	for (let i = 0; i < json.length; i++) {
		let item = json[i]
		item.types.sort()
		item.typesByKey = {}
		for (let t = 0; t < item.types.length; t++) {
			let type = item.types[t]
			item.typesByKey[type] = true
			if (!types.hasOwnProperty(type)) {
				types[type] = type
				data.types.push(type)
			}
		}

		if (!experiences.hasOwnProperty(item.experience)) {
			experiences[item.experience] = item.experience
			data.experiences.push(item.experience)
		}
		data.poses.push(item)
	}
}
let setSequences = (json) => {
	for (let i = 0; i < json.length; i++) {
		let item = json[i]
		item.poses = []
		for (let i = 0; i < item.poseIds.length; i++) {
			item.poses.push(getPose(item.poseIds[i]))
		}
		data.sequences.push(item)
	}
}

let getPose = (poseId) => {
	let returnedPose = {}
	for (let i = 0; i < data.poses.length; i++) {
		let pose = data.poses[i]
		if (pose.id === poseId) {
			returnedPose = pose
			break
		}
	}

	return returnedPose
}

export default {
	getPose: getPose,
	poses: data.poses,
	sequences: data.sequences,
	types: data.types,
	experiences: data.experiences
}
