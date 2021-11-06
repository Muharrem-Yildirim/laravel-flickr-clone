<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo e(env('APP_NAME')); ?></title>
    <!-- Styles -->
    <link href="<?php echo e(mix('css/app.css')); ?>" rel="stylesheet">
</head>

<body>
    <div id="root"></div>
    
    <script src="<?php echo e(mix('js/app.js')); ?>" defer></script>
</body>
</html><?php /**PATH E:\Web Projects\laravel-vsco-clone\resources\views/welcome.blade.php ENDPATH**/ ?>