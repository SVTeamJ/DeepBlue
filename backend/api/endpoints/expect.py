import torch
  

def fish_detect(img_link):
    torch.hub._validate_not_a_forked_repo = lambda a, b, c: True
    # Model
    models = torch.hub.load('ultralytics/yolov5', 'custom', path='api/endpoints/last.pt', _verbose=False, force_reload=True)  # custom trained model
    models.conf = 0.10
    
    # Images
    im = img_link  # or file, Path, URL, PIL, OpenCV, numpy, list
    results = models(img_link)

    # Results
    fish_dict = {"mack":1, "rock":2, "ray":3, "snap":4, "hali":5}
    fish = results.pandas().xyxy[0].values.tolist()
    try:
        i = fish[0][-1]
        x = fish_dict[i]
    except:
        x = 6
    else:
        i = fish[0][-1]
        x = fish_dict[i]
    return x


