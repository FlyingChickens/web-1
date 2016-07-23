module.exports = function (grunt) {

    // ������������
    grunt.initConfig({

        //��ȡpackage.json�����ݣ��γɸ�json����
        pkg: grunt.file.readJSON('package.json'),

        //ѹ��js
        uglify: {
            //�ļ�ͷ�������Ϣ
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        //���·��
                        cwd: 'js/',
                        src: '*.js',
                        dest: 'dest/js'
                    }
                ]
            }
        },

        //ѹ��css
        cssmin: {
            //�ļ�ͷ�������Ϣ
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //��������
                beautify: {
                    //����ascii�����ǳ����ã���ֹ���������������
                    ascii_only: true
                }
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        //���·��
                        cwd: 'css/',
                        src: '*.css',
                        dest: 'dest/css'
                    }
                ]
            }
        }

    });

    // ����ָ���������
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Ĭ��ִ�е�����
    grunt.registerTask('default', ['uglify', 'cssmin']);

};