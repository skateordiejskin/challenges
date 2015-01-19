function mergeSort(data, tmpArr, arraySize) {
	m_sort(data, tmpArr, 0, arraySize - 1);
	return data;
}

function m_sort(data, tmpArr, left, right) {
	//if there's still elements in the array
	if (right > left) {
		//get the middle of the array
		var mid = Math.floor((right + left) / 2);
		//sort the left side
		m_sort(data, tmpArr, left, mid);
		//sort the right side
		m_sort(data, tmpArr, mid + 1, right);
		//merge the data
		merge(data, tmpArr, left, mid + 1, right);
	}
}

function merge(data, tmpArr, left, mid, right) {
	var i,
		//define the outtermost part of the left array
		leftEnd = mid - 1,
		numElements = right - left + 1,
		tmpPos = left;

	//while left less than the end of the array
	//and the middle of the array is less than the right end of the array
	while ((left <= leftEnd) && (mid <= right)) {
		if (data[left] <= data[mid]) {
			tmpArr[tmpPos] = data[left];
			tmpPos = tmpPos + 1;
			left = left + 1;
		} else {
			tmpArr[tmpPos] = data[mid];
			tmpPos = tmpPos + 1;
			mid = mid + 1;
		}
	}
	while (left <= leftEnd) {
		tmpArr[tmpPos] = data[left];
		left = left + 1;
		tmpPos = tmpPos + 1;
	}
	while (mid <= right) {
		tmpArr[tmpPos] = data[mid];
		mid = mid + 1;
		tmpPos = tmpPos + 1;
	}
	for (i = 0; i < numElements; i++) {
		data[right] = tmpArr[right];
		right = right - 1;
	}
}

function bubbleSort(data, arrayLength){
	var tmp;
	for(var i = 0; i < arrayLength; i++){
		if(data[i] > data[i+1]){
			tmp = data[i];
			data[i] = data[i+1];
			data[i+1] = tmp;
		}
	}
	return data;
}