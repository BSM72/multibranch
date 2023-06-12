import json
import glob
import numpy as np
import cv2
import copy

def print_frames():
  video_file = ('Real3.mp4')
  frame_count = 0
  cap = cv2.VideoCapture(video_file)
  frame_count= int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

  print("frames" , frame_count)
  print("Total number of videos: " , frame_count)

print_frames()
