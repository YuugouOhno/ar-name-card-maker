<!DOCTYPE html>

<head>
    <!-- ① スクリプトの読み込み -->
    <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
    <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.2/aframe/build/aframe-ar.js"></script>
</head>

<body style='margin: 0; overflow: hidden;'>

    <!-- シーンの追加とデバックUIを非表示 -->
    <a-scene embedded arjs="debugUIEnabled:false; patternRatio:0.70">

        <!-- ② hiroマーカーでのソース -->
        <a-marker type="pattern" url="{{asset('/pattern2.patt')}}">

            <!-- <a-entity geometry="primitive: plane; height: 1; width: 1" position="0 0 0" material="side: double; opacity:0.5;" rotation="90 0 0"></a-entity> -->

            <a-image src="https://res.cloudinary.com/dzxep0pa9/image/upload/v1687101525/degayupitqoj9pjsqzpr.png" height="1.35" width="1.35" position="-0.55 0 0" rotation="90 0 0" scale="1 1 1"></a-image>

            <a-text value="YuugouOhno" side="double" position="0.2 0 0" rotation="270 0 0" align="left" scale="2 2 2"></a-text>

            <!-- <a-image src="https://res.cloudinary.com/dzxep0pa9/image/upload/v1687101525/degayupitqoj9pjsqzpr.png" height="1.35" width="1.8" position="-0.35 0 1.5" rotation="90 0 0" scale="1 1 1"></a-image> -->

            <a-text value="YuugouOhno \n fdsfdsf \n sdfdsfds \n dsfdsfdsf " side="double" position="0.7 0 1.5" rotation="270 0 0" align="right" scale="1.3 1.3 1.3"></a-text>
            
            <a-image src="https://res.cloudinary.com/dzxep0pa9/image/upload/v1687101525/degayupitqoj9pjsqzpr.png" height="1.35" width="1.8" position="2 0 1.5" rotation="90 0 0" scale="1 1 1"></a-image>

            <a-image src="https://res.cloudinary.com/dzxep0pa9/image/upload/v1687101525/degayupitqoj9pjsqzpr.png" height="1" width="1" position="-0.7 0 3" rotation="90 0 0" scale="1 1 1"></a-image>
            <a-image src="https://res.cloudinary.com/dzxep0pa9/image/upload/v1687101525/degayupitqoj9pjsqzpr.png" height="1" width="1" position="0.85 0 3" rotation="90 0 0" scale="1 1 1"></a-image>
            <a-image src="https://res.cloudinary.com/dzxep0pa9/image/upload/v1687101525/degayupitqoj9pjsqzpr.png" height="1" width="1" position="2.3 0 3" rotation="90 0 0" scale="1 1 1"></a-image>
        </a-marker>

        <a-entity camera></a-entity>
    </a-scene>
</body>

</html>