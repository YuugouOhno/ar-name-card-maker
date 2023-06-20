<!DOCTYPE html>

<head>
    <!-- <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
    <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.2/aframe/build/aframe-ar.js"></script> -->
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
</head>

<body style='margin: 0; overflow: hidden;'>

    <!-- シーンの追加とデバックUIを非表示 -->
    <a-scene embedded arjs="debugUIEnabled:false; patternRatio:0.70">

        <a-marker type="pattern" url="{{asset('marker/pattern2.patt')}}">
            <!-- ARmarker -->
            <!-- <a-entity geometry="primitive: plane; height: 1; width: 1" position="0 0 0" material="side: double; opacity:0.5;" rotation="90 0 0"></a-entity> -->

            <a-link href="https://aframe.io/docs/1.4.0/primitives/a-link.html" title="test" src="https://aframe.io/docs/1.4.0/primitives/a-link.html"></a-link>
            <!-- <a-image src="{{ $card->ar_icon_image }}" height="1.35" width="1.35" position="-0.55 0 0" rotation="270 0 0" scale="1 1 1" side="double"></a-image>

            <a-text value="{{ $card->ar_name }}" side="double" position="0.4 0 0" rotation="270 0 0" align="left" scale="2 2 2"></a-text>

            <a-text value="{{ $card->ar_text }}" side="double" position="0.7 0 1.5" rotation="270 0 0" align="right" scale="1.3 1.3 1.3"></a-text>

            <a-image src="{{ $card->ar_content_image }}" height="1.35" width="1.8" position="2 0 1.5" rotation="270 0 0" scale="1 1 1" side="double"></a-image>

            <a-image src="{{asset('ar/Twitter.png')}}" height="1" width="1" position="-0.7 0 3" rotation="270 0 0" scale="1 1 1" side="double"></a-image>

            <a-image src="{{asset('ar/Github.png')}}" height="1" width="1" position="0.85 0 3" rotation="270 0 0" scale="1 1 1" side="double"></a-image>
            <a-image src="{{asset('ar/User.png')}}" height="1" width="1" position="2.3 0 3" rotation="270 0 0" scale="1 1 1" side="double"></a-image> -->
        </a-marker>

        <a-entity camera></a-entity>
    </a-scene>
    <script>
        
    </script>
</body>

</html>